#!/usr/bin/env python3
"""Mide la competencia en licitaciones ADJUDICADAS parecidas (servicios digitales/creativos <= 60.000 €).
Uso: python3 competencia.py [páginas=15]"""
import sys, re, json, statistics as stx, urllib.request, xml.etree.ElementTree as ET
from scan import FEED, NS, fetch, txt, CPV, KW, PRESENCIAL
pages = int(sys.argv[1]) if len(sys.argv) > 1 else 15
url, res = FEED, []
for _ in range(pages):
    root = ET.fromstring(fetch(url))
    for e in root.findall("a:entry", NS):
        st = e.find("ext:ContractFolderStatus", NS)
        if st is None: continue
        if txt(st, "cbcx:ContractFolderStatusCode") not in ("ADJ", "RES"): continue
        pp = st.find("cac:ProcurementProject", NS)
        if pp is None or txt(pp, "cbc:TypeCode") != "2": continue
        title = txt(pp, "cbc:Name")
        try: base = float(txt(pp, "cac:BudgetAmount/cbc:TaxExclusiveAmount"))
        except ValueError: continue
        if base > 60000 or base < 300: continue
        cpvs = [c.text for c in st.findall(".//cbc:ItemClassificationCode", NS) if c.text]
        if not (any(c.startswith(p) for c in cpvs for p in CPV) or re.search(KW, title, re.I)): continue
        if re.search(PRESENCIAL, title, re.I): continue
        for tr in st.findall("cac:TenderResult", NS):
            n = txt(tr, "cbc:ReceivedTenderQuantity")
            amt = txt(tr, "cac:AwardedTenderedProject/cac:LegalMonetaryTotal/cbc:TaxExclusiveAmount")
            win = txt(tr, "cac:WinningParty/cac:PartyName/cbc:Name")
            try: n = int(n)
            except ValueError: n = None
            try: amt = float(amt)
            except ValueError: amt = None
            res.append({"t": title[:90], "base": base, "n": n, "adj": amt, "win": win, "org": txt(st, "ext:LocatedContractingParty/cac:Party/cac:PartyName/cbc:Name")[:60]})
            break
    nxt = root.find("a:link[@rel='next']", NS); url = nxt.get("href") if nxt is not None else None
    if not url: break
ns = [r["n"] for r in res if r["n"]]
bajas = [(r["base"] - r["adj"]) / r["base"] * 100 for r in res if r["adj"] and r["base"] and r["adj"] <= r["base"]]
print(json.dumps({"adjudicadas": len(res), "con_dato_licitadores": len(ns),
  "licitadores_mediana": stx.median(ns) if ns else None, "licitadores_media": round(stx.mean(ns), 1) if ns else None,
  "solo_1_licitador_%": round(100 * sum(1 for n in ns if n == 1) / len(ns)) if ns else None,
  "2_a_3_%": round(100 * sum(1 for n in ns if 2 <= n <= 3) / len(ns)) if ns else None,
  "4_o_mas_%": round(100 * sum(1 for n in ns if n >= 4) / len(ns)) if ns else None,
  "rebaja_mediana_%": round(stx.median(bajas), 1) if bajas else None}, ensure_ascii=False, indent=1))
for r in sorted(res, key=lambda r: r["n"] or 0)[:40]: print(r["n"], "|", round(r["base"]), "→", round(r["adj"] or 0), "|", r["t"][:70], "|", r["win"][:35])
