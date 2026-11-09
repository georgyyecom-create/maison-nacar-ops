# Maison Nácar · memoria del proyecto

**Responde SIEMPRE en español.** Respuestas cortas y directas, sin repasar el historial. El dueño trabaja desde el móvil.

## Negocio
- Tienda Shopify de joyería en dropshipping. Dominio: **maisonnacar.com** (tienda `11d01y-zk`). Público: España peninsular y Baleares.
- Proveedor: **Yehwang** (Países Bajos). Un collar suelto cuesta ~18,23 € en Yehwang (pieza + envío + IVA). Desactivar la sincronización de precios de Yehwang.
- El dueño **no es autónomo**. Tiene otra marca (Zentia, EE. UU.): **no mezclar** cuentas, píxeles ni catálogos.
- Producto: **acero inoxidable con baño de oro 18k** (falta la confirmación por escrito de Yehwang, junto al informe EN 1811). Nunca decir «oro» a secas, «diamantes» ni «hipoalergénico».

## Precios y oferta (nov-2026)
- Collares 49 € (Doble Riviera 59 €). Pulseras/brazaletes 45 €. Pendientes/anillos 29 €.
- **3x2 automático** («3x2: elige 3, paga 2», BXGY: la más barata, gratis). **Envío siempre gratis.**
- Margen aprox.: 1 collar ≈ 21 €; pedido 3x2 (≈94 €) ≈ 46 €. **CPA máximo de partida: 30 €.** ROAS mínimo para no perder: ~2,1–2,4.
- Para descuentos con precio tachado aplica la regla Ómnibus (precio más bajo de los últimos 30 días). El 3x2 no le afecta.

## Productos de anuncio (desde el 7-nov · detalle en `PLAN_TIENDA_OFERTA.md`)
- **Conjunto A «Puntos de Luz»**: Collar Puntos de Luz (`collar-puntos-luz`) + Brazalete Puntos de Luz + Anillo Baguette = ~~123 €~~ 94 € con el 3x2. Los Aros Cascada dorados están agotados: fuera del conjunto.
- **Conjunto B «Corazones»**: Collar + Pulsera Corazones Encadenados + Pendientes Tres Corazones = ~~123 €~~ 94 €. Es el que más stock tiene.
- Tréboles Minimal pasa a reserva (pulsera calada dorada: 1 ud).
- Piezas de 29 € para «la tercera»: Aros Esenciales, Anillo Ola, Aros Doble Línea, Anillo Lazo.
- Referencias para la IA: `referencias/*-conjunto.jpg` y `*-macro.jpg`. La de Puntos de Luz hay que rehacerla sin aros.
- Garantías: devolución hasta el 15-ene, color 3 años («si pierde el dorado, otra»), «¿llega dañada? otra gratis».

## Meta
- Portfolio «Maison Nácar» (4435821363365536). Cuenta publicitaria **963612299940558** (EUR, Madrid). Píxel **1097392456530786** (Shopify, compartir datos «Máximo»). Dominio verificado.
- Campaña 1 «MN | Ventas | ABO | ES | 05-nov», **PAUSADA** el 6-nov: ~79 € gastados, 3 carritos, 0 compras.
  - Los anuncios funcionaban: CTR ~2 %, CPC ~0,6 €; lo mejor fueron las nativas «POV».
  - La web no convertía: rebote del 85 %, unos 4 s en móvil.
- Reglas para lanzar:
  - Imagen única; mejoras Advantage+ creative APAGADAS; sin Audience Network, Threads ni in-stream.
  - Público: España sin Canarias, Ceuta ni Melilla.
  - Usar el catálogo de Maison Nácar, **nunca el de Zentia (pknpca-cw)**.
- Reglas de corte:
  - Días 1–3: no tocar.
  - Anuncio: apagar si CTR < 0,8 %, o si gasta 25 € sin ningún carrito.
  - Conjunto: pausar a los 75–80 € sin compras.
  - Escalar un 20 % cada 48 h si el CPA está por debajo de 30 €.
- Los datos de Meta se quedan cortos por el banner de cookies: **mirar también Shopify** (sesiones, carritos, pedidos).

## Tema Shopify
- Tema publicado: **v20.10** (id 208419258708). Siguiente: **v20.11** (id 208423190868: color en Tu estuche, contacto v20, estrellas desde `aom.rating` a petición del dueño: solo con números reales). El 3x2 de los conjuntos es −24 % (no −33 %). No poner precios tachados inventados (Ómnibus): el dueño lo pidió y se rechazó. Caja elegida: negra; tarjeta: rosa claro ondulada (o lisa sin texto si la hay). La v20.4 se descartó. Esperar a que `processing` sea false tras `themeDuplicate` antes de `themeFilesUpsert`, o se pisa. El MCP no puede escribir en el tema publicado: para cambios, `themeDuplicate` del publicado (conserva lo editado por el dueño) y `themeFilesUpsert` solo de los archivos cambiados. Hecha de cero (secciones `mn-*`, `assets/mn.css` y `mn.js`); la v18 y la v19 se descartaron.
- v20, idea central: el 3x2 es **«tu estuche»** con 3 huecos; el tercero brilla con tornasol de nácar y es el regalo. Blanco, negro y fotos; tipos Bricolage Grotesque + Instrument Sans. Nada de rojo, pegatinas ni emojis.
- Estrellas: la ficha lee `reviews.rating` y, si no hay, `aom.rating` (los mete el dueño a mano). Avisado: solo números reales; con 0 ventas, interruptor apagado.
- Color de acento sutil: champán `--mn-accent: #B8975A` (puntos de la barra, tachado del estuche, línea bajo títulos).
- Campaña: Configuración del tema → Maison Nácar → «Campaña activa». Reseñas: interruptor «Mostrar reseñas y estrellas» (sección «Opiniones»). Enlace de anuncio: `/products/<collar>?pack=3`. Página `/pages/3x2` = «Tu estuche».
- Huecos de foto numerados («Foto 01»…); los prompts están en `PROMPTS_FOTOS_TIENDA_V20.md`. En productos: `#portada` sale primero y `#puesto` va a «Así queda puesto».
- Ojo: Shopify rechaza las secciones con `"default": ""` en un ajuste de texto (y, en cascada, las plantillas que las usan).
- Para subir cambios:
  1. Hacer un zip de `theme/`.
  2. `stagedUploadsCreate` (archivo; el campo del archivo va al final del curl).
  3. `themeCreate` con un tema NUEVO.
  4. El dueño lo publica.
  5. Cambios sueltos en un tema no publicado: `themeFilesUpsert` (body tipo URL con subida temporal).
- Antes de subir, comprobar que el tema MAIN no tiene ediciones del dueño hechas en el editor (`updatedAt`).
- Galería: la foto cuyo alt contiene `#portada` sale la primera. En Liquid no usar `{` `}` dentro de strings.
- `themeDelete`, `bulkOperationRunMutation` y los descuentos masivos los bloquea el MCP.

## Reglas fijas
- **Sin reseñas falsas.** Las estrellas «4,9 (368)» del metacampo `aom.rating` hay que quitarlas: está pendiente.
- Las joyas de las imágenes IA tienen que ser **idénticas a las reales**. Personas de IA: nunca presentarlas como clientas reales; usar el formato «POV».
- Ley de IA (art. 50, desde el 2-ago-2026): en escenas fotorrealistas generadas, valorar la etiqueta «Imagen creada con IA».
- Imágenes: el dueño usa la **app Gemini Pro** (gratis). Yo escribo los prompts con el texto incluido, porque Gemini rotula bien.

## Calendario
Black Friday 27-nov · Cyber Monday 30-nov · último pedido para Navidad 14-dic · Reyes 6-ene.

## Estado y plan (7-nov)
- Cambio de enfoque: **menos elitista, más cercano**: memes, historias, humor de regalo («Perdón básico/deluxe/premium»), Black Friday = Navidad adelantada.
- Pendiente:
  1. Repo privado en GitHub.
  2. Radar de competencia (Biblioteca de Anuncios + Apify).
  3. 15–25 creativos estáticos antes del 20-nov.
  4. Tienda v20 hecha y subida: falta que el dueño la publique, las fotos de Gemini y el enlace del canal de WhatsApp.
  5. Estrellas: ocultas en la v20 (el metacampo `aom.rating` sigue con valores falsos: borrarlos antes de activar reseñas).
  6. Campaña nueva.
- Documentos de detalle en la raíz: `LANZAMIENTO_META.md`, `PROMPTS_CREATIVOS_ADS.md`, `ESTRATEGIA_PRECIO_OFERTA_MARCA.md`.
