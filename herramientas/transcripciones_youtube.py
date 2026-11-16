"""
Descarga los subtítulos (transcripción) de una lista de vídeos de YouTube
y los junta en un solo archivo de texto para pasárselo a Claude.

Uso en Windows:
  1. Instala Python (python.org) marcando «Add Python to PATH».
  2. Abre «Símbolo del sistema» y ejecuta:  pip install youtube-transcript-api
  3. Pon los enlaces en links.txt (uno por línea), en la misma carpeta que este archivo.
  4. Ejecuta:  python transcripciones_youtube.py
  5. Sale transcripciones.txt: mándaselo a Claude.
"""
import re, sys
from pathlib import Path
from youtube_transcript_api import YouTubeTranscriptApi

base = Path(__file__).parent
links = [l.strip() for l in (base / "links.txt").read_text(encoding="utf-8").splitlines() if l.strip()]
api = YouTubeTranscriptApi()
out = []
for url in links:
    m = re.search(r"(?:v=|youtu\.be/|shorts/|embed/)([\w-]{11})", url)
    if not m:
        print("Enlace no válido:", url); continue
    vid = m.group(1)
    try:
        t = api.fetch(vid, languages=["es", "en", "pt", "fr", "it", "de"])
        texto = " ".join(s.text for s in t.snippets)
        out.append(f"=== {url}\n{texto}\n")
        print("OK", url, f"({len(texto)} caracteres)")
    except Exception as e:
        out.append(f"=== {url}\n[SIN TRANSCRIPCIÓN: {type(e).__name__}]\n")
        print("Sin transcripción:", url)
(base / "transcripciones.txt").write_text("\n".join(out), encoding="utf-8")
print("Listo: transcripciones.txt")
