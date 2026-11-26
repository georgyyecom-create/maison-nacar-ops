---
name: competencia
description: Analizar anuncios y fichas de la competencia (Biblioteca de Anuncios de Meta, Apify, capturas) para sacar ángulos, ofertas y formatos para la tienda que esté activa (ahora Zentia, masajeador de cuello). Úsala antes de crear creativos u ofertas.
---

# Radar de competencia

## Fuentes (solo públicas y legales)
- `ads_library_search` (MCP de Meta), país ES: por términos del producto («masajeador cervical», «masajeador cuello calor», «regalo padres») y por `page_ids` de las marcas.
  - Masajeador (nov-2026): Pievia (mismo producto), Teravo, Podaris, Bellverity, Glowfitia, Velluto, Belvua.
- Capturas que mande el dueño. Fichas de la competencia con Playwright (móvil, bloqueando rastreadores).
- Nada de scraping con sesión iniciada.

## Apify (texto completo e imágenes)
- La clave está en el entorno (secreto de red de `api.apify.com`): llamar sin cabecera de autorización.
- Actor `apify/facebook-ads-scraper` (~0,006 $/anuncio). `startUrls` de la biblioteca (`?active_status=active&ad_type=all&country=ES&view_all_page_id=<ID>&media_type=all&search_type=page`), `resultsLimit: 10`.
- Asíncrono: `POST /v2/acts/apify~facebook-ads-scraper/runs?maxTotalChargeUsd=1`, consultar `/v2/actor-runs/<id>` cada 15 s y bajar `/v2/datasets/<id>/items?clean=1` (`run-sync` da 502).
- La fecha real es `startDateFormatted`. Imágenes al scratchpad, nunca al repo.

## Qué apuntar de cada anuncio
Marca · fecha de inicio (**más de 3 semanas activo o muchas copias = probable ganador**) · nº de copias · formato (estático, pizarra, vídeo, carrusel, UGC) · ángulo · oferta y precio · gancho (5 primeras palabras) · a dónde lleva (ficha o artículo).
Separa lo que se ve de lo que se deduce: el gasto y las ventas no son públicos.

## Entrega
`competencia/AAAA-MM-DD.md`: tabla, 5 patrones, 3 huecos y 10 ideas (pasarlas por la skill `creativos`).

## Reglas
- Inspirarse, **nunca copiar** textos ni imágenes.
- No copiar lo que la ley o Meta no permiten aunque lo haga la competencia: reseñas o cifras inventadas, «90 % vendido», «valor X €», médicos, «alivia el dolor».
