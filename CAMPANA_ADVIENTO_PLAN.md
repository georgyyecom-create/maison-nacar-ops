# Campaña Calendarios de Adviento · plan v2 (15-nov-2026)

**Skills ejecutadas:** `ads-meta`, `ads-math`, `ad-creative`, `cro` y `offers`.
**Datos usados:**
- Meta: anuncios por ubicación, píxel (eventos y calidad) y públicos.
- Shopify: sesiones y embudo del 5 al 15-nov.
- La ficha en un móvil (iPhone 13), con el píxel bloqueado.

## 1. Auditoría de la cuenta (`ads-meta`)

| Control | Estado | Detalle |
|---|---|---|
| Píxel y API de conversiones | ✅ | Eventos en tiempo real. Calidad de coincidencia: 6,8 (PageView) a 7,7 (InitiateCheckout). |
| Historial de compras | ❌ arranque en frío | Solo hay 2 eventos «Purchase», del 4-nov: la compra de prueba. |
| Datos limpios | ❌ | Mis pruebas automáticas de la tienda dispararon el píxel. El 7-nov hubo 74 AddToCart y hoy 405 PageView, de robots. También explica las 493 sesiones de ordenador con un 94 % de rebote. **Arreglado:** desde hoy todas las pruebas bloquean el píxel. |
| Públicos personalizados | ❌ | Ninguno. Nunca se ha hecho retargeting. |
| Ubicaciones | ⚠️ | 719 clics y solo 96 visitas (13 %). |
| Optimización | ⚠️ | «Compra» sin compras previas: Meta no tenía de qué aprender. |

Visitas que llegan a la web, por ubicación:

| Ubicación | De cada 100 clics llegan |
|---|---|
| Feed de Instagram | 26 |
| Stories de Instagram | 20 |
| Feed de Facebook | 13 |
| Reels de Facebook | 11 |
| Reels de Instagram | 4 |

## 2. Números (`ads-math`)

**Fórmulas:**
- Margen = precio − coste de Yehwang − comisión de pago.
- CPA máximo = margen.
- ROAS mínimo = precio ÷ margen.

| Caso | Margen | CPA máximo | ROAS mínimo |
|---|---|---|---|
| Sin ingresar IVA (situación actual) | 69 − 32 − 1,6 = **35,4 €** | 35 € | 1,95 |
| Ingresando IVA del 21 % (si te das de alta) | 57,0 − 32 − 1,6 = **23,4 €** | 23 € | 2,95 |

Escenarios con 150 €:

| Escenario | € por visita | Visita → carrito | Carrito → compra | Ventas | Resultado (sin IVA) |
|---|---|---|---|---|---|
| Bajo (como antes) | 2,70 | 5 % | 20 % | 0,6 | **−130 €** |
| Medio | 1,20 | 5 % | 35 % | 2,2 | **−73 €** |
| Alto | 0,70 | 6 % | 45 % | 5,8 | **+55 €** |

**Lectura:** con 150 € solo se gana dinero en el escenario alto, y solo sin ingresar IVA. La prueba sirve para **aprender si el producto vende**, no para ganar. Por eso hay que bajar el riesgo antes de gastar (puntos 3 y 4).

## 3. Oferta (`offers`, ecuación de valor)

| Palanca | Nota | Por qué |
|---|---|---|
| Resultado soñado | 8/10 | Seis sorpresas para ella hasta Nochebuena. |
| **Probabilidad percibida** | **3/10** | Es el freno principal: marca nueva, 0 reseñas y fotos de IA. Y las estrellas falsas, si alguien las detecta, hunden la confianza. |
| Tiempo de espera | 7/10 | Llega antes del 4-dic. |
| Esfuerzo | 8/10 | Un clic y viene en caja regalo. |

**Cambio único de esta ronda: subir la confianza.**
1. **Pedir ya 1 Corazón Rojo a Yehwang (~32 €).**
   - Llega hacia el 20-nov.
   - Con él grabas el unboxing real con el móvil: tus manos abriendo los cajones. Sirve para la ficha, los anuncios y los Stories.
   - Es la prueba honesta que hoy no existe.
   - Luego lo regalas o lo vendes.
2. **Quitar lo falso:** las estrellas 4,9 (478) y el tachado de 99 € («Ahorras 30 €»). Hoy salen en la primera pantalla.
3. **Urgencia, solo la real:**
   - Fecha límite de pedido para que llegue antes del 4-dic (pendiente de que Yehwang la confirme).
   - El 3x2 termina el 30-nov.
   - Unidades reales en «Quedan X».
4. **El 3x2 no va de gancho.** Apenas da margen extra (42 € frente a 35 €). Se queda en la ficha para quien quiera 3.

## 4. Ficha (`cro`, captura del móvil)

**Arreglos rápidos:**
1. Quitar las estrellas falsas y el tachado (punto 3).
2. **El precio y el botón no se ven en la primera pantalla:**
   - la foto ocupa casi todo;
   - el banner de cookies tapa justo esa zona.
   - Arreglo: foto más baja en el móvil y la línea «69 € · envío gratis · llega antes del 4-dic» junto al título.
3. **El banner de cookies es grande:**
   - hacerlo más pequeño;
   - mientras nadie acepta, el píxel no cuenta la visita. Es una de las razones de que Meta vea pocas visitas.
4. Ocultar Bizum manual en «Tarjeta, Bizum o…».

**Cambios importantes:**
- En cuanto llegue la muestra, poner arriba en la galería el vídeo o la foto real del unboxing.
- La foto 2 (proveedor, «ADVENT CALENDAR» en inglés) va a la cuarta posición.

**Ideas para probar:**
- Abrir con el bloque «Qué hay dentro» con fotos de las 6 joyas, frente a la ficha actual.

## 5. Creativos (`ad-creative`, a partir de los datos)

**Lo que ganó** (CTR del 7 % o más):
- B3 «lo que quería» y A3 «llegan 3»: situaciones concretas en formato POV y en primera persona.

**Lo que perdió** (CTR por debajo del 3 %):
- Las comparativas (C1, C2) y el espejo genérico.

**Falta:**
- No hay reseñas ni comentarios reales que usar. No se inventa ninguno.

| # | Formato (nivel en la skill) | Gancho (imagen + texto) | Hipótesis que puede fallar |
|---|---|---|---|
| 1 | **Fundador** (S) | Tú, con el calendario real: «Monté una tienda de joyas en Almería. Este es el regalo que más me piden» (solo si es cierto; si no: «el que más me gusta»). | Coste por visita al menos un 20 % menor que el anuncio 2. |
| 2 | **Unboxing POV**, vídeo real o Veo | Visual: la mano abre el cajón 4 y sale el collar. Texto: «POV: el 4 de diciembre abre el primer cajón». | CTR ≥ 3 % y al menos un 30 % de clics que llegan, en Stories de IG. |
| 3 | **Cuadrícula estática** (A) | Las 6 joyas en fila con los días 4·8·12·16·20·24. Titular: «6 joyas, 6 cajones, 69 €». | Más carritos por visita que el 1 y el 2, porque responde a «¿qué trae?». |

Textos (Meta: 125 caracteres visibles y titular de 40 como máximo):
- **Texto principal:** «Seis joyas, una cada cuatro días, hasta Nochebuena. 69 €, envío gratis y llega antes del 4 de diciembre.» (104)
- **Titulares:**
  - «El regalo que dura hasta Nochebuena» (35)
  - «6 joyas en 6 cajones · 69 €» (27)
  - «Para ella, abrir un cajón cada 4 días» (37)
- **Reglas:**
  - Sin rayas largas ni «no es X, es Y».
  - Sin «oro» a secas: «baño de oro 18k».
  - Sin clientas inventadas.
  - Si sale gente creada con IA, va en formato POV.

## 6. Estructura de la campaña

- **Objetivo:** Ventas, optimizando **«Visitas a la página de destino»** hasta tener 3 compras; después, «Compra».
- **Ubicaciones:** solo feed y Stories de Instagram, solo móvil.
- **Conjunto frío (18 €/día):** mujeres de 25 a 55 años, España, con los 3 anuncios.
- **Conjunto caliente (7 €/día):** visitantes de la web en 30 días + interacciones con IG y Facebook en 60 días. Hay que crear los públicos; los preparo en pausa.
- **Fechas:** del 18 al 23-nov, tope de 150 €, se apaga el 24-nov.

**Cortes:**

| Gasto | Si pasa esto | Hacer |
|---|---|---|
| 40 € | Visita > 1,20 € o 0 carritos | Cambiar el creativo. |
| 80 € | Carritos y 0 compras | Revisar la confianza y el pago. |
| 150 € | 0 ventas | Fin de Meta para Maison Nácar. |
| En cualquier momento | CPA < 35 € | Subir un 20 % cada 48 h. |

## 7. Orden de trabajo

1. **Hoy:**
   - quitar las estrellas y el tachado;
   - ocultar Bizum;
   - pedir la muestra a Yehwang y preguntarle el plazo y si el paquete lleva albarán.
2. **Yo:** ajustar la ficha (precio en la primera pantalla y banner de cookies) en un tema nuevo, y crear los públicos en pausa.
3. **Tú:** publicar el tema y hacer una compra de prueba con el píxel.
4. **18-nov:** lanzar con los anuncios 2 y 3. El anuncio 1 (fundador) entra cuando llegue la muestra.
5. **En paralelo:**
   - Google Shopping gratis (canal de Google en Shopify);
   - vender 3–5 a conocidos;
   - publicar en tus Stories.

## 8. Viabilidad en porcentajes (`ads-math`, simulación de 200.000 casos)

**Supuestos:**
- Coste por visita con una incertidumbre de ±45 %.
- Conversión de visita a compra sacada de lo que esperaba antes de los datos y corregida con lo observado: 0 compras en 112 visitas reales desde Instagram.
- Margen: 35,4 €.
- Presupuesto: 150 €.

| Escenario | ≥1 venta | ≥3 ventas | Recuperar los 150 € | Resultado medio |
|---|---|---|---|---|
| Como antes (2,60 €/visita) | 30 % | 2 % | <1 % | −136 € |
| Plan v2 (1,30 €/visita) | 47 % | 8 % | 2 % | −121 € |
| v2 + confianza (muestra real, sin falsos) | 56 % | 12 % | 3 % | −112 € |
| Optimista (1 €/visita, conversión 1,5 %) | 80 % | 38 % | 17 % | −62 € |
| Muy optimista (0,80 €/visita, 2 %) | 91 % | 61 % | 36 % | −3 € |

**Lectura:** con los datos reales, la probabilidad de recuperar el dinero con Meta está entre el 3 y el 17 %. Lo más probable es perder entre 60 y 120 € a cambio de aprender si el calendario vende.
