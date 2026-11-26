---
name: diagnostico-anuncios
description: Revisar el rendimiento de los anuncios de Meta de la tienda activa (ahora Zentia; cuenta 963612299940558): informe diario o semanal, fatiga, dónde se pierden las ventas, qué pausar o escalar. Úsala cuando pregunten «¿cómo van los anuncios?».
---

# Diagnóstico de anuncios (Meta + Shopify + Clarity)

## Datos que hay que sacar
1. **Meta, por anuncio y por ubicación («maximum» y «last_3d»):** gasto, impresiones, frecuencia, CPM, clics en el enlace, CTR, CPC, visitas a la página de destino, pagos iniciados, compras.
2. **Shopify y Clarity, mismo periodo:** sesiones reales por origen, pedidos contra reembolso (formulario) y con tarjeta, y dónde abandonan. Meta se queda corto por el banner de cookies.

## Embudo: dónde se rompe
| Paso | Bien | Si falla, el problema es… |
|---|---|---|
| CTR de enlace | ≥ 1,5 % | el creativo |
| Clic → visita real | ≥ 30 % (ver Clarity) | ubicación (Reels = toques sin querer), carga |
| Visita → botón de pedido | ≥ 5 % | la ficha: precio, confianza, oferta |
| Formulario → pedido enviado | ≥ 40 % | formulario largo o dudas |
| Pedido → entregado | ≥ 75 % | rechazos contra reembolso: confirmar por teléfono |
Diagnostica **el primer paso que falla**.

## Fatiga
Quemado si en 3 días el CTR cae > 30 % desde su máximo, la frecuencia pasa de 3 o sube el CPM con el CTR estable.

## Decisiones (reglas de CLAUDE.md y del plan vigente)
- Días 1–3: no tocar salvo los cortes duros.
- Corte duro del plan: 50 € sin ningún pedido iniciado → parar.
- Anuncio: pausar si CTR < 0,8 % con > 2.000 impresiones o 25 € sin pedido iniciado.
- Escalar un 20 % cada 48 h si el CPA real (pedidos entregados) es menor que el de equilibrio (~15–20 €).

## Formato del informe (corto, en español)
1. Veredicto en una frase. 2. Tabla por anuncio. 3. Embudo con el paso que falla. 4. Máximo 3 acciones.
**Escrituras en Meta: solo con el «sí» del dueño.**
