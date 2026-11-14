#!/usr/bin/env python3
"""Convierte la salida de scan.py en filas para el panel. Uso: python3 to_rows.py entrada.json salida.json"""
import json, sys
d = json.load(open(sys.argv[1]))
ENC = {2: "Encaja", 1: "Revisar", 0: "No encaja"}
rows = [{
    "id": x["id"], "titulo": x["title"], "organismo": x["organ"], "region": x["region"] or x["city"] or "Sin indicar",
    "importe": round(x["amount"], 2), "plazo": (x["deadline"] or "")[:10], "hora": (x["deadline"] or "")[11:16],
    "categoria": x["cat"], "encaje": ENC[x["score"]], "nota": x["note"], "procedimiento": x["proc"] or "—",
    "enlace": x["link"], "detectada": d["generated"][:10],
} for x in d["items"]]
json.dump(rows, open(sys.argv[2], "w"), ensure_ascii=False)
print(len(rows), "filas")
