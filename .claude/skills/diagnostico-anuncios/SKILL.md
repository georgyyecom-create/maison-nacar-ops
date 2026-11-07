---
name: diagnostico-anuncios
description: Revisar el rendimiento de los anuncios de Meta de Maison Nácar (informe diario o semanal, fatiga de creativos, dónde se pierden las ventas, qué pausar o escalar). Úsala cuando pregunten «¿cómo van los anuncios?».
---

# Diagnóstico de anuncios (Meta + Shopify)

Inspirada en «creative-fatigue-detector» y «funnel-dropoff-diagnostician» (hayesti54-eng/ai-media-buying-skills), adaptada.

## Datos que hay que sacar (cuenta 963612299940558)
1. **Por anuncio, rango «maximum» y «last_3d»:** gasto, impresiones, frecuencia, CPM, clics en el enlace, CTR, CPC, visitas a la página de destino, carritos, pagos iniciados, compras, valor y ROAS.
2. **Shopify, en el mismo periodo:** sesiones por origen, tasa de carrito, de checkout y de conversión, rebote y duración por página de aterrizaje y dispositivo, y pedidos reales.

## Embudo: dónde se rompe
| Paso | Bien | Si falla, el problema es… |
|---|---|---|
| CTR de enlace | ≥ 1,5 % | el creativo (gancho o imagen) |
| Clic → visita | ≥ 70 % | la carga, el navegador de la app o las cookies |
| Visita → carrito | ≥ 5 % | la ficha: primera pantalla, precio, confianza, oferta |
| Carrito → checkout | ≥ 40 % | sorpresas en el carrito, envío, popups |
| Checkout → compra | ≥ 45 % | pagos, formulario, confianza |
Diagnostica **el primer paso que falla**. No toques los pasos anteriores si funcionan.

## Fatiga
Un creativo está quemado si en 3 días **cae el CTR más de un 30 % desde su máximo**, la **frecuencia supera 3** o **sube el CPM con el CTR estable**. Toca reemplazarlo por una variante del mismo ángulo con otro gancho.

## Decisiones (reglas de CLAUDE.md)
- Días 1–3: no tocar.
- Anuncio: pausar si tiene CTR < 0,8 % con más de 2.000 impresiones, o si ha gastado 25 € sin carrito.
- Conjunto: pausar a los 75–80 € sin compras. Escalar un 20 % cada 48 h si el CPA es menor de 30 € con 2 o más compras.

## Formato del informe (corto, en español)
1. Una frase con el veredicto.
2. Tabla por anuncio: gasto, CTR, CPC, carritos y compras.
3. El embudo, con el paso que falla.
4. Máximo 3 acciones propuestas.
**No ejecutes cambios sin el «sí» del dueño.**
