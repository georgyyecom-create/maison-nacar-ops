#!/usr/bin/env python3
"""Lee la sindicación de la Plataforma de Contratación del Sector Público (PLACSP)
y saca las licitaciones EN PLAZO de servicios digitales/creativos pequeñas (≤ 60.000 € sin IVA).

Uso: python3 scan.py [días_atrás=2] > salida.json
Sin dependencias externas.
"""
import json, re, sys, urllib.request, datetime as dt, xml.etree.ElementTree as ET

FEED = "https://contrataciondelsectorpublico.gob.es/sindicacion/sindicacion_643/licitacionesPerfilesContratanteCompleto3.atom"
# Plataformas autonómicas agregadas (Andalucía, Madrid, Cataluña, País Vasco, Galicia, Navarra, La Rioja…)
FEED_AGR = "https://contrataciondelsectorpublico.gob.es/sindicacion/sindicacion_1044/PlataformasAgregadasSinMenores.atom"
NS = {
    "a": "http://www.w3.org/2005/Atom",
    "cbc": "urn:dgpe:names:draft:codice:schema:xsd:CommonBasicComponents-2",
    "cac": "urn:dgpe:names:draft:codice:schema:xsd:CommonAggregateComponents-2",
    "ext": "urn:dgpe:names:draft:codice-place-ext:schema:xsd:CommonAggregateComponents-2",
    "cbcx": "urn:dgpe:names:draft:codice-place-ext:schema:xsd:CommonBasicComponents-2",
}
MAX_EUR = 60000
# CPV que encajan (prefijos)
CPV = {
    "72413": "Diseño web", "72414": "Motores de búsqueda", "7242": "Desarrollo web/Internet", "7240": "Servicios de Internet",
    "79341": "Publicidad", "79342": "Marketing", "79340": "Publicidad y marketing", "79413": "Consultoría de marketing",
    "79416": "Relaciones públicas", "79822": "Diseño gráfico/composición", "79961": "Fotografía", "79415": "Comunicación",
    "9211": "Producción audiovisual", "92111": "Vídeo", "92312": "Producción artística", "79930": "Diseño especializado",
}
KW = r"p[aá]gina web|portal web|sitio web|\bweb\b|redes sociales|community|contenidos? digital|dise[ñn]o gr[aá]fico|identidad corporativa|logotipo|cartel|campa[ñn]a|publicidad|marketing|v[ií]deo|audiovisual|fotograf|comunicaci[oó]n|app\b|aplicaci[oó]n m[oó]vil|realidad virtual|ilustraci"
PRESENCIAL = r"montaje|escenario|sonido|iluminaci[oó]n|carpa|catering|seguridad|limpieza|transporte|actuaci[oó]n|fiestas?\b|espect[aá]culo|instalaci[oó]n|mantenimiento de (equipos|instalaciones)|vigilancia"
PROC = {"1": "Abierto", "2": "Restringido", "3": "Negociado con publicidad", "4": "Negociado sin publicidad", "6": "Diálogo competitivo",
        "8": "Derivado de acuerdo marco", "9": "Abierto simplificado", "10": "Asociación para la innovación", "100": "Normas internas", "999": "Otros"}


def fetch(url):
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0 (licitaciones-scan)"})
    with urllib.request.urlopen(req, timeout=120) as r:
        return r.read()


def txt(el, path):
    x = el.find(path, NS)
    return (x.text or "").strip() if x is not None and x.text else ""


def parse_entry(e):
    st = e.find("ext:ContractFolderStatus", NS)
    if st is None:
        return None
    status = txt(st, "cbcx:ContractFolderStatusCode")
    pp = st.find("cac:ProcurementProject", NS)
    if pp is None:
        return None
    tipo = txt(pp, "cbc:TypeCode")
    title = txt(pp, "cbc:Name") or txt(e, "a:title")
    amount = txt(pp, "cac:BudgetAmount/cbc:TaxExclusiveAmount") or txt(pp, "cac:BudgetAmount/cbc:EstimatedOverallContractAmount")
    try:
        amount = float(amount)
    except ValueError:
        amount = None
    cpvs = [c.text.strip() for c in pp.findall("cac:RequiredCommodityClassification/cbc:ItemClassificationCode", NS) if c.text]
    lots = st.findall("cac:ProcurementProjectLot", NS)
    for lot in lots:
        cpvs += [c.text.strip() for c in lot.findall(".//cbc:ItemClassificationCode", NS) if c.text]
    region = txt(pp, "cac:RealizedLocation/cbc:CountrySubentity")
    party = st.find("ext:LocatedContractingParty/cac:Party", NS)
    organ = txt(party, "cac:PartyName/cbc:Name") if party is not None else ""
    city = txt(party, "cac:PostalAddress/cbc:CityName") if party is not None else ""
    email = txt(party, "cac:Contact/cbc:ElectronicMail") if party is not None else ""
    tp = st.find("cac:TenderingProcess", NS)
    deadline = ""
    proc = ""
    if tp is not None:
        deadline = txt(tp, "cac:TenderSubmissionDeadlinePeriod/cbc:EndDate")
        dtime = txt(tp, "cac:TenderSubmissionDeadlinePeriod/cbc:EndTime")
        if deadline and dtime:
            deadline = deadline + " " + dtime[:5]
        proc = PROC.get(txt(tp, "cbc:ProcedureCode"), txt(tp, "cbc:ProcedureCode"))
    link_el = e.find("a:link", NS)
    return {
        "id": txt(st, "cbc:ContractFolderID") or txt(e, "a:id"),
        "title": re.sub(r"\s+", " ", title).strip(), "status": status, "tipo": tipo, "amount": amount, "cpv": cpvs,
        "region": region, "organ": organ, "city": city, "email": email, "deadline": deadline, "proc": proc,
        "link": link_el.get("href") if link_el is not None else "", "updated": txt(e, "a:updated"),
    }


def fit(x):
    """Devuelve (encaja, categoría, nota) o None si no interesa."""
    if x["status"] != "PUB" or x["tipo"] != "2":
        return None
    if x["amount"] is None or x["amount"] > MAX_EUR or x["amount"] < 300:
        return None
    if x["deadline"]:
        try:
            if dt.date.fromisoformat(x["deadline"][:10]) < dt.date.today():
                return None
        except ValueError:
            pass
    cat = next((name for pre, name in CPV.items() for c in x["cpv"] if c.startswith(pre)), None)
    kw = re.search(KW, x["title"], re.I)
    if not cat and not kw:
        return None
    pres = re.search(PRESENCIAL, x["title"], re.I)
    remote = bool(re.search(r"web|dise[ñn]o|redes|contenido|v[ií]deo|audiovisual|campa[ñn]a|publicidad|marketing|gr[aá]fic|app|logotipo|ilustraci", x["title"], re.I))
    score = 2 if (remote and not pres) else (1 if not pres else 0)
    note = "Se puede hacer a distancia" if score == 2 else ("Revisar si exige presencia" if score == 1 else "Probablemente presencial")
    return cat or "Comunicación/creativo", score, note


def main():
    days = int(sys.argv[1]) if len(sys.argv) > 1 else 2
    cutoff = dt.datetime.now(dt.timezone.utc) - dt.timedelta(days=days)
    out, seen, pages = {}, set(), 0
    for feed in (FEED, FEED_AGR):
        url, n = feed, 0
        while url and n < 400:
            try:
                root = ET.fromstring(fetch(url))
            except Exception as ex:
                print(f"aviso: {url}: {ex}", file=sys.stderr)
                break
            n += 1
            oldest = None
            for e in root.findall("a:entry", NS):
                upd = txt(e, "a:updated")
                try:
                    u = dt.datetime.fromisoformat(upd)
                    oldest = u if oldest is None or u < oldest else oldest
                except ValueError:
                    pass
                x = parse_entry(e)
                if not x or x["id"] in seen:
                    continue  # el feed va de nuevo a viejo: la primera aparición es el estado actual
                seen.add(x["id"])
                f = fit(x)
                if f:
                    x["cat"], x["score"], x["note"] = f
                    out[x["id"]] = x
            nxt = root.find("a:link[@rel='next']", NS)
            url = nxt.get("href") if nxt is not None else None
            if oldest and oldest < cutoff:
                break
        pages += n
    res = sorted(out.values(), key=lambda x: (-x["score"], x["deadline"] or "9999"))
    json.dump({"generated": dt.datetime.now().isoformat(timespec="minutes"), "pages": pages, "items": res}, sys.stdout, ensure_ascii=False, indent=1)


if __name__ == "__main__":
    main()
