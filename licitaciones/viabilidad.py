#!/usr/bin/env python3
"""Mide la viabilidad real de ganar contratos de servicios digitales/creativos.
1) Licitaciones adjudicadas (abiertas/simplificadas, <= 60.000 €): licitadores, rebaja, peso del precio, ganadores autónomos.
2) Contratos menores adjudicados: quién compra, cuánto y a quién.
Uso: python3 viabilidad.py [páginas_licitaciones=40] [páginas_menores=60] > viabilidad.json
"""
import sys, re, json, statistics as stx, xml.etree.ElementTree as ET
from collections import Counter, defaultdict
from scan import FEED, NS, fetch, txt, CPV, KW, PRESENCIAL

MENORES = "https://contrataciondelsectorpublico.gob.es/sindicacion/sindicacion_1143/contratosMenoresPerfilesContratantes.atom"
EXCLUIR = r"pr[oó]rroga|patrocinio|basado|acuerdo marco|agencia de medios|inserci[oó]n|espacios publicitarios|compra de medios|difusi[oó]n publicitaria|cu[ñn]as|emisi[oó]n"


def es_persona(nif, nombre):
    if nif and re.match(r"^[0-9XYZKLM]", nif.strip().upper()):
        return True
    return not re.search(r"\b(S\.?L\.?U?|S\.?A\.?U?|S\.?C\.?A?|SOCIEDAD|COOP|ASOC|FUNDACI|UNIVERSIDAD|LIMITADA|AN[OÓ]NIMA|SLL|SLP|C\.?B\.?)\b", nombre or "", re.I)


def interesa(title, cpvs):
    if re.search(PRESENCIAL, title, re.I) or re.search(EXCLUIR, title, re.I):
        return False
    return any(c.startswith(p) for c in cpvs for p in CPV) or bool(re.search(KW, title, re.I))


def recorrer(url, paginas, fn):
    for _ in range(paginas):
        try:
            root = ET.fromstring(fetch(url))
        except Exception:
            break
        for e in root.findall("a:entry", NS):
            st = e.find("ext:ContractFolderStatus", NS)
            if st is not None:
                fn(st)
        nxt = root.find("a:link[@rel='next']", NS)
        url = nxt.get("href") if nxt is not None else None
        if not url:
            break


lic = []
def f_lic(st):
    if txt(st, "cbcx:ContractFolderStatusCode") not in ("ADJ", "RES"):
        return
    pp = st.find("cac:ProcurementProject", NS)
    if pp is None or txt(pp, "cbc:TypeCode") != "2":
        return
    proc = txt(st, "cac:TenderingProcess/cbc:ProcedureCode")
    if proc not in ("1", "9"):  # abierto / abierto simplificado (incluye sumario)
        return
    title = txt(pp, "cbc:Name")
    try:
        base = float(txt(pp, "cac:BudgetAmount/cbc:TaxExclusiveAmount"))
    except ValueError:
        return
    if base > 60000 or base < 500:
        return
    cpvs = [c.text for c in st.findall(".//cbc:ItemClassificationCode", NS) if c.text]
    if not interesa(title, cpvs):
        return
    precio = total = 0.0
    for ac in st.findall(".//cac:AwardingCriteria", NS):
        try:
            w = float(txt(ac, "cbc:WeightNumeric"))
        except ValueError:
            continue
        total += w
        if re.search(r"precio|econ[oó]mic|oferta econ|importe", txt(ac, "cbc:Description"), re.I):
            precio += w
    tr = st.find("cac:TenderResult", NS)
    if tr is None:
        return
    try:
        n = int(txt(tr, "cbc:ReceivedTenderQuantity"))
    except ValueError:
        n = None
    try:
        adj = float(txt(tr, "cac:AwardedTenderedProject/cac:LegalMonetaryTotal/cbc:TaxExclusiveAmount"))
    except ValueError:
        adj = None
    win = txt(tr, "cac:WinningParty/cac:PartyName/cbc:Name")
    nif = txt(tr, "cac:WinningParty/cac:PartyIdentification/cbc:ID")
    lic.append({"t": title[:120], "proc": "Abierto" if proc == "1" else "Simplificado", "base": base, "adj": adj, "n": n,
                "precio_pct": round(100 * precio / total) if total else None, "win": win, "persona": es_persona(nif, win),
                "org": txt(st, "ext:LocatedContractingParty/cac:Party/cac:PartyName/cbc:Name")[:80],
                "region": txt(pp, "cac:RealizedLocation/cbc:CountrySubentity")})


men = []
def f_men(st):
    pp = st.find("cac:ProcurementProject", NS)
    if pp is None or txt(pp, "cbc:TypeCode") != "2":
        return
    title = txt(pp, "cbc:Name")
    cpvs = [c.text for c in st.findall(".//cbc:ItemClassificationCode", NS) if c.text]
    if not interesa(title, cpvs):
        return
    tr = st.find("cac:TenderResult", NS)
    try:
        imp = float(txt(tr, "cac:AwardedTenderedProject/cac:LegalMonetaryTotal/cbc:TaxExclusiveAmount") or txt(pp, "cac:BudgetAmount/cbc:TaxExclusiveAmount"))
    except (ValueError, TypeError):
        imp = None
    win = txt(tr, "cac:WinningParty/cac:PartyName/cbc:Name") if tr is not None else ""
    nif = txt(tr, "cac:WinningParty/cac:PartyIdentification/cbc:ID") if tr is not None else ""
    men.append({"t": title[:120], "imp": imp, "win": win, "persona": es_persona(nif, win),
                "org": txt(st, "ext:LocatedContractingParty/cac:Party/cac:PartyName/cbc:Name")[:80],
                "region": txt(pp, "cac:RealizedLocation/cbc:CountrySubentity"),
                "fecha": txt(tr, "cbc:AwardDate") if tr is not None else ""})


def resumen():
    ns = [x["n"] for x in lic if x["n"]]
    bajas = [100 * (x["base"] - x["adj"]) / x["base"] for x in lic if x["adj"] and x["adj"] <= x["base"]]
    pp = [x["precio_pct"] for x in lic if x["precio_pct"] is not None]
    by_n = defaultdict(list)
    for x in lic:
        if x["n"] and x["adj"] and x["adj"] <= x["base"]:
            by_n["1" if x["n"] == 1 else ("2-3" if x["n"] <= 3 else "4+")].append(100 * (x["base"] - x["adj"]) / x["base"])
    imps = [x["imp"] for x in men if x["imp"]]
    return {
        "licitaciones": {
            "adjudicadas_analizadas": len(lic), "simplificadas": sum(1 for x in lic if x["proc"] == "Simplificado"),
            "licitadores_mediana": stx.median(ns) if ns else None, "licitadores_media": round(stx.mean(ns), 1) if ns else None,
            "pct_1_licitador": round(100 * sum(1 for n in ns if n == 1) / len(ns)) if ns else None,
            "pct_4_o_mas": round(100 * sum(1 for n in ns if n >= 4) / len(ns)) if ns else None,
            "rebaja_mediana_pct": round(stx.median(bajas), 1) if bajas else None,
            "rebaja_mediana_por_licitadores": {k: round(stx.median(v), 1) for k, v in by_n.items() if v},
            "peso_precio_mediana_pct": stx.median(pp) if pp else None,
            "pct_solo_precio": round(100 * sum(1 for p in pp if p >= 99) / len(pp)) if pp else None,
            "pct_ganadas_por_autonomos": round(100 * sum(1 for x in lic if x["persona"]) / len(lic)) if lic else None,
        },
        "menores": {
            "analizados": len(men), "importe_total": round(sum(imps)), "importe_mediana": round(stx.median(imps)) if imps else None,
            "pct_ganados_por_autonomos": round(100 * sum(1 for x in men if x["persona"]) / len(men)) if men else None,
            "top_regiones": Counter(x["region"] or "Sin indicar" for x in men).most_common(8),
            "top_compradores": Counter(x["org"] for x in men).most_common(10),
        },
    }


if __name__ == "__main__":
    pl = int(sys.argv[1]) if len(sys.argv) > 1 else 40
    pm = int(sys.argv[2]) if len(sys.argv) > 2 else 60
    recorrer(FEED, pl, f_lic)
    recorrer(MENORES, pm, f_men)
    json.dump({"resumen": resumen(), "licitaciones": lic, "menores": men}, sys.stdout, ensure_ascii=False, indent=1)
