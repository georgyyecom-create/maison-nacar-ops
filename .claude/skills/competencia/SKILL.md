---
name: competencia
description: Analizar anuncios y contenido de marcas de joyería competidoras (Biblioteca de Anuncios de Meta, capturas de Instagram) para sacar ángulos y formatos para Maison Nácar.
---

# Radar de competencia

Inspirada en «ads-competitor» (AgriciDaniel/claude-ads), adaptada.

## Fuentes (solo públicas y legales)
- `ads_library_search` (MCP de Meta), país ES. Busca por términos («collar acero», «joyas regalo», «3x2 joyas», «baño de oro 18k») y por páginas de marcas.
  - Marcas a seguir: Singularu, PDPAOLA, Luxenter, Aristocrazy, Murona y las tiendas de acero/dropshipping que vayan apareciendo.
- Capturas que mande el dueño (Instagram, TikTok).
- No hacer scraping de Instagram con sesión iniciada. Apify, solo para la Biblioteca de Anuncios (**aprobado por el dueño el 7-nov-2026**).

## Apify (texto completo e imágenes)
- La clave está guardada en el entorno (secreto de red para `api.apify.com`): llamar sin cabecera de autorización.
- Actor: `apify/facebook-ads-scraper`, unos 0,006 $ por anuncio (plan gratis).
- Input: `startUrls` con URLs de la biblioteca (`?active_status=active&ad_type=all&country=ES&view_all_page_id=<ID>&media_type=all&search_type=page`), `resultsLimit: 10`, `activeStatus: "active"`.
- Lanzar en asíncrono: `POST /v2/acts/apify~facebook-ads-scraper/runs?maxTotalChargeUsd=1`. Consultar `/v2/actor-runs/<id>` cada 15 s y luego bajar `/v2/datasets/<id>/items?clean=1`. El `run-sync` da 502 por el proxy.
- Usar `startDateFormatted` como fecha de inicio real. El MCP devuelve copias recientes con fechas engañosas.
- Las imágenes se bajan al scratchpad, nunca al repo.

## Qué apuntar de cada anuncio
Marca · fecha de inicio (**más de 3 semanas activo = probable ganador**) · número de variantes · formato (estático, historia, meme, chat, UGC, carrusel) · ángulo (regalo, humor, durabilidad, oferta, lujo) · oferta · gancho (primeras 5 palabras) · enlace del snapshot.
Separa lo que se ve de lo que se deduce. El gasto y el rendimiento no son públicos.

## Entrega
Guarda el resultado en `competencia/AAAA-MM-DD.md`:
1. Tabla de anuncios.
2. Los **5 patrones** que se repiten.
3. **3 huecos** que nadie cubre.
4. **10 ideas** de creativos para Maison Nácar (pasarlas por la skill `creativos-maison-nacar`).

Inspirarse, **nunca copiar** textos ni imágenes protegidos.
