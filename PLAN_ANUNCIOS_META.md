# Maison Nácar · Plan de anuncios en Meta

**Presupuesto:** 2 conjuntos de anuncios × 20 €/día = **40 €/día** (unos 280 €/semana).
**Objetivo:** ventas (compras) en España.
**Fechas clave:** hoy (4 nov) → Black Friday (27 nov, los CPM suben del 20 al 30 de nov) → **14 dic**, último día para que llegue en Navidad.

---

## 0. Antes de lanzar

### A. Dominio propio: imprescindible
La tienda está en `maisonnacar.myshopify.com`. Para anunciarse es un problema:
- **Parece poco fiable**, justo lo contrario de premium.
- **Meta no deja verificar un dominio myshopify.com.** Verificarlo protege tu tienda y tus enlaces.

`maisonnacar.com` está disponible (~17 USD el primer año, renovación aparte). Cómpralo desde Shopify y se conecta solo:
https://admin.shopify.com/store/11d01y-zk/settings/domains/confirm?host=maisonnacar.com
Después: Configuración → Dominios → hazlo **principal**.

### B. Cuenta publicitaria nueva dentro del portfolio verificado
1. business.facebook.com → **Configuración** → Cuentas → **Cuentas publicitarias** → Añadir → **Crear una cuenta publicitaria nueva**.
2. Nombre: `Maison Nácar - Ads`.
3. **Zona horaria: Europe/Madrid** y **moneda: EUR**. **Después no se pueden cambiar.** Tu cuenta actual (Zentia) está en USD, así que no la reutilices.
4. «Para mi empresa» → asígnate como **administrador** (control total).
5. Añade la **tarjeta** como método de pago de esta cuenta.

### C. Página e Instagram de la marca en ese portfolio
- Página de Facebook **Maison Nácar** e Instagram **@maisonnacar** (profesional).
- Asígnalas al portfolio: Configuración → Cuentas → Páginas / Cuentas de Instagram.
- En el **Instagram** pon:
  - **6–9 publicaciones** antes de lanzar (fotos de producto, el palco, macros, estuche). Quien hace clic en el perfil desde un anuncio no puede ver un perfil vacío.
  - Bio: «Joyería con baño de oro 18k · 3x2 · Envío gratis en estuche».
  - Enlace a la tienda.
- WhatsApp Business conectado a la página (Configuración de la página → WhatsApp).

### D. Píxel / dataset y catálogo (desde Shopify)
1. Shopify → **Canales de venta → Facebook e Instagram** (app de Meta).
2. Conecta: el **portfolio** → la **cuenta publicitaria nueva** → la **página** → el **Instagram**.
3. Crea un **dataset (píxel) nuevo**: «Maison Nácar».
4. **Uso compartido de datos: Máximo.** Esto activa la API de conversiones (CAPI), con la que se miden mejor las compras.
5. **Catálogo:** que sincronice los productos activos (servirá más adelante para anuncios de catálogo y retargeting).
6. Cuando tengas el dominio: Configuración del negocio → **Seguridad de la marca → Dominios** → añadir → verificar (Shopify lo hace con la meta-etiqueta o el registro DNS).

### E. Prueba de compra
Haz un pedido real de algo barato con un código del 100 % o con tu tarjeta, y luego reembólsalo. Comprueba en el **Administrador de eventos** que llegan **ViewContent, AddToCart, InitiateCheckout y Purchase**. Sin esto, Meta optimiza a ciegas.

### F. En la tienda
- [ ] Publicar el tema **v17**.
- [ ] Quitar o corregir las **valoraciones «4,9 (368)»** (ver el chat). Un anuncio que lleva a una ficha con reseñas no reales es lo que más riesgo da con Meta.
- [ ] Email de Yehwang confirmando el **baño de oro 18k** y el **informe EN 1811**.
- [ ] **Aviso legal** (nombre, NIF, dirección), política de devoluciones y envío visibles.
- [ ] Borradores: **NO** actives «esperando dorado», «sin stock», «regalo sorpresa» ni los calendarios de adviento (esos se deciden antes del 10 nov).

---

## 1. Estructura de la campaña

```
Campaña:  MN | Ventas | ABO              (objetivo: Ventas · evento: Compra)
├─ Conjunto 1: GALA      · 20 €/día
│    Puntos de Luz (principal) + Tréboles Minimal
│    3 anuncios: G-A Nativo · G-B Premium · G-C Comparativa
└─ Conjunto 2: ESENCIAL  · 20 €/día
     Collar Corazones Encadenados + set Corazones
     3 anuncios: E-A Nativo · E-B Premium · E-C Comparativa
```

**Ajustes de cada conjunto:**
| Ajuste | Valor |
|---|---|
| Presupuesto | **Del conjunto (ABO)**, 20 €/día. Así cada colección recibe su dinero sí o sí. |
| Optimización | Compra (conversión en el sitio web) |
| Ubicación | España, **excluyendo Canarias, Ceuta y Melilla** (no envías allí) |
| Público | **Advantage+**. Sugerencia: mujeres 35–65 e intereses joyería / regalos. Edad mínima fija: 25. **No limites a mujeres**: en Navidad muchos hombres compran «para ella», y Meta los encuentra solo. |
| Ubicaciones | Advantage+ (automáticas) |
| Atribución | 7 días tras el clic + 1 día tras la visualización |
| Parámetros URL | `utm_source=meta&utm_medium=paid&utm_campaign={{campaign.name}}&utm_content={{ad.name}}` |

**Nombres de los anuncios:** `GALA_A_nativo_puntosluz`, `GALA_B_premium_palco`… Así se entienden en los informes de Shopify.

---

## 2. Investigación: lo que funciona ahora en España (Biblioteca de anuncios, 4 nov)

Anuncios activos de tiendas de joyería parecidas:
| Marca | Gancho | Qué aprendemos |
|---|---|---|
| Siempre juntas | «Compra 1, llévate otro GRATIS 🎁» / «1 gratis, se acaba esta noche 🕓» | La oferta va **en el título** y con **urgencia**. Muchas variantes a la vez. |
| Lepetitemarie | «Hoy 3x2 en Joyas» | El 3x2 se entiende al instante. |
| Ersi Doris | «Joyas de acero que aguantan la ducha» | **El acero / la durabilidad** es un argumento que vende. |
| Faceron Studio | «Ni en el mar te las quitas» | Igual: «no te la quitas». |
| Murona | «Creadas para no quitártelas» | Igual. |
| La Joyería de Marta | «Que este año no sean calcetines 🎄» | **Ángulo regalo** con humor, dirigido a quien regala. |
| Áurelia | «Sorpréndela por 27,90 € 🌹» | Habla al **hombre que regala**. |

**Conclusiones:**
1. Los ganchos que se repiten son tres: **durabilidad** (acero, no se oscurece), **regalo** (Navidad, «sorpréndela») y **oferta clara** (2x1 / 3x2). Tenemos los tres.
2. Casi nadie en este rango de precio parece premium: hay mucho fondo blanco y mucho emoji. **Nuestra estética de campaña de perfume nos diferencia.**
3. Nuestra ventaja es combinar las dos cosas: **imagen de joyería cara** y **oferta clara de 3x2 + baño de oro 18k**.

---

## 3. Los 6 creativos: todos estáticos

Hay 3 tipos de imagen por conjunto: **nativa** (parece una historia de Instagram de una chica), **premium** (campaña de perfume) y **comparativa** (la de siempre vs nosotros).

**Cómo se hacen:**
- La **foto** la genera Gemini con los prompts de abajo. Adjunta siempre la referencia del producto.
- El **texto** lo pongo yo encima: me pasas la foto y te devuelvo el anuncio montado en 4:5 y en 9:16. Si prefieres, se hace en Canva con las indicaciones de cada uno.

**Reglas comunes:**
- En 9:16, deja limpio el **14 % de arriba y el 20 % de abajo** (ahí va la interfaz de Instagram).
- **Nunca** escribas: «oro» a secas, «oro macizo», «diamantes», «hipoalergénico», «no se oscurece nunca».
- Las nativas van en formato **«POV»**: es la marca hablando con un meme, no una clienta inventada contando que lo compró. Así son igual de naturales y no son un testimonio falso.

---

### GALA

#### G-A · Nativa: «historia de Instagram» (9:16)
**Adjunta:** `puntos-de-luz-conjunto.jpg` (solo usa el collar).
```
I'm attaching the real products; use ONLY the necklace on the left and reproduce it exactly: a very fine gold chain with a row of about seventeen small round clear zirconia stones in thin smooth gold bezel settings, only on the front part; the back is plain fine chain. Small delicate stones, not big diamonds.

Casual iPhone mirror selfie, vertical 9:16, as posted in an Instagram story. A stylish Spanish woman around 35, dark hair in a messy low bun, minimal makeup, wearing a black satin slip dress, standing in front of a hallway mirror at home just before going out on a December evening. She holds the phone at chest height with one hand, so the phone partly covers one side of her face; her other hand touches the necklace at the base of her neck. The necklace is clearly visible and sharp. Warm lamp light mixed with a soft phone flash, slightly imperfect framing, a coat and a small bag hanging in the background, a blurred little Christmas garland with warm lights on the mirror frame. Real, unpolished, authentic social-media look, natural skin texture. The upper 15% and the lower 25% of the image are calm (wall and dress) so text can be placed there. No text, no logos, no watermark, no other jewelry.
```
**Texto encima (estilo historia):**
- Arriba, en una etiqueta blanca redondeada con letra negra (como las de Instagram): **«POV: la cena de empresa es el viernes y ya tienes el collar ✨»**
- Abajo, en una etiqueta negra con letra dorada: **«Baño de oro 18k · 3x2 en toda la tienda»**
- Un sticker tipo enlace: **🔗 MAISONNACAR.COM**

#### G-B · Premium: campaña de perfume (4:5 y 9:16)
**Foto:** el **primer plano del palco**, que ya tienes.
**Texto encima:**
- Arriba, centrado y pequeño, con mucho espaciado entre letras: `MAISON NÁCAR`
- Abajo, en serif grande y color marfil: **«El brillo que no se quita.»**
- Debajo, pequeño y dorado: «Baño de oro 18k · Estuche de regalo · **3x2**»

#### G-C · Comparativa: «la de siempre vs Maison Nácar» (4:5)
**Mitad izquierda (Gemini):**
```
Close-up of a woman's neck and collarbone in flat cool indoor light, wearing a cheap generic thin chain necklace with small round rhinestones that has lost its plating: dull brassy and greyish color, darkened patches, a faint greenish mark on the skin under the chain. Ordinary, unflattering, slightly desaturated, realistic, not exaggerated. No brand, no text. Vertical 2:3.
```
**Mitad derecha:** recorte del primer plano del palco.
**Montaje:**
- Arriba de cada mitad: «LA DE SIEMPRE» (gris) | «MAISON NÁCAR» (dorado).
- Debajo, la tabla:

| ✕ La de siempre | ✓ Maison Nácar |
|---|---|
| Se oscurece y deja la piel verde | Acero inoxidable con baño de oro 18k |
| Llega en una bolsita | Estuche de regalo incluido |
| 1 pieza al precio de 1 | 3x2: una para ti, dos para regalar |

---

### ESENCIAL (serie Corazones)

#### E-A · Nativa: «historia de Instagram» (9:16)
**Adjunta:** foto del Collar Corazones Encadenados, de la Pulsera Corazones y de los Pendientes Tres Corazones, y la foto de tu caja negra con la tarjeta roja.
```
I'm attaching the real products and the real packaging; reproduce them exactly: a choker-length chain of small puffy polished gold hearts linked by tiny jump rings; a matching bracelet of the same hearts; drop earrings of three small polished gold hearts; a simple matte black jewelry box with a deep red scalloped display card. Do not add ribbons, gold foil or logos.

Casual top-down iPhone photo, vertical 9:16, as posted in an Instagram story. A woman's hands (around 30, natural short nails, a cozy cream knit sleeve) on a sofa with a chunky knit blanket, holding the open black box with the heart necklace on the red card; the bracelet and the earrings lie next to the box on the blanket. A mug of hot chocolate, a roll of Christmas wrapping paper and a small pair of scissors at the edges of the frame, warm living-room lamp light, a few blurred fairy lights. Real, unpolished, authentic social-media look, slightly imperfect angle. The upper 15% and the lower 25% of the image are calm (blanket) so text can be placed there. No text, no logos, no watermark.
```
**Texto encima:**
- Arriba, en una etiqueta blanca: **«POV: el regalo de mamá ya está… y no son calcetines 🎄»**
- Abajo, en una etiqueta negra con letra dorada: **«Collar + pulsera + pendientes: 90 € con el 3x2»**
- Sticker: **🔗 MAISONNACAR.COM**

#### E-B · Premium (4:5 y 9:16)
**Foto:** E3, el conjunto puesto con luz de mañana (o la portada E1).
**Texto encima:**
- Arriba, pequeño: `MAISON NÁCAR`
- Abajo, en serif marfil: **«El regalo que se lleva todos los días.»**
- Bloque: «Collar + pulsera + pendientes ~~119 €~~ **90 €** · 3x2». El tachado es la suma real de sus precios normales.

#### E-C · Comparativa (4:5)
**Mitad izquierda (Gemini):**
```
Close-up of a woman's wrist in flat cool indoor light, wearing a cheap generic heart charm bracelet that has lost its plating: dull brassy and greyish color, darkened patches, a faint greenish mark on the skin. Ordinary, unflattering, slightly desaturated, realistic, not exaggerated. No brand, no text. Vertical 2:3.
```
**Mitad derecha:** la Pulsera y el Collar Corazones con la luz de mañana de la Escena B.
**Montaje y tabla:** igual que G-C.

---

### Variantes para la 2.ª semana (para cambiar los anuncios que peor funcionen)
- **«Regalo de siempre vs regalo Maison Nácar»:** a la izquierda, calcetines, pijama y colonia de supermercado con luz fría; a la derecha, el estuche abierto.
- **Nativa «captura de WhatsApp»:** una imagen tipo pantalla de chat. Mensaje: «¿Me pasas dónde compraste el collar? 😍», respuesta con la foto del collar puesto. Ojo: tiene que estar claro que es una recreación de la marca. Ponle «POV» o un nombre genérico, nunca una conversación presentada como real.
- **Macro con texto mínimo:** el macro de las piedras + «Mira de cerca.» Funciona muy bien como pieza para frenar el scroll.

---

## 4. Textos de los anuncios

**Texto principal (Gala):**
> Hay noches que piden algo especial. ✨
> Collar Puntos de Luz: acero inoxidable con baño de oro de 18k y circonitas que brillan sin hacer ruido.
> 🎁 Llega en estuche de regalo · 🚚 Envío gratis
> 3x2 en toda la tienda: elige 3 y la de menor precio te sale gratis.

**Texto principal (Esencial):**
> Este año, que no sean calcetines. 🎄
> Collar, pulsera y pendientes de corazones con baño de oro de 18k. Juntos, con el 3x2: 90 €.
> Llegan en su estuche, listos para regalar. Pide antes del 14 de diciembre.

**Títulos (prueba 2–3 por anuncio):** «3x2 en toda la tienda» · «Baño de oro 18k · Estuche incluido» · «El regalo que se queda».
**Botón:** «Comprar».
**Enlace:**
- Gala → la ficha del **Collar Puntos de Luz** (o del Tréboles Minimal, según el anuncio).
- Esencial → la ficha del **Collar Corazones Encadenados**.

---

## 5. Cómo leer los resultados (sin tocar nada los primeros 3 días)

| Señal | Dónde mirarla | Valor bueno | Si va mal |
|---|---|---|---|
| CTR de enlace | Por anuncio | > 1,5 % | < 0,8 % con más de 2.000 impresiones → la imagen no frena el scroll; cámbiala por una variante |
| CPC de enlace | Por anuncio | < 0,80 € | — |
| Añadir al carrito | Por conjunto | 1 por cada 15–25 € gastados | Si hay clics y no carritos → el problema está en la ficha o el precio, no en el anuncio |
| Coste por compra | Por conjunto | ≤ tu margen por pedido | — |

**Reglas de decisión:**
- **Días 1–3:** no toques nada; Meta está aprendiendo.
- **Un anuncio** que ha gastado ~40 € sin añadir nada al carrito → apágalo y súbele un sustituto.
- **Un conjunto** que ha gastado ~100 € sin ninguna compra → renueva los creativos (antes que cambiar el público).
- **Un conjunto** rentable 3 días seguidos → sube el presupuesto un **20 %** cada 2–3 días, nunca de golpe.
- **26–30 nov (Black Friday):** los CPM suben. Mantén el 3x2 y añade urgencia con fechas: «Pide antes del 14 dic».

**Calcula tu margen antes de lanzar:**
> Margen por pedido = precio medio del pedido (con 3x2 ≈ 90 €, IVA incluido → ~74 € sin IVA) − coste en Yehwang de las piezas − envío − comisión de pago (~2 %).
> Ese margen es lo **máximo** que puedes pagar por compra sin perder dinero.

---

## 6. Calendario

| Día | Tarea |
|---|---|
| Hoy–mañana | Dominio, cuenta publicitaria, app de Meta en Shopify, píxel, 6–9 publicaciones en Instagram, publicar el tema v17 |
| Mañana | Generar en Gemini las 2 nativas y las 2 mitades «la de siempre»; me las pasas y te devuelvo los 6 anuncios montados |
| Día 3 | Prueba de compra → eventos OK → **lanzar** con los 6 estáticos (3 por conjunto) |
| Cada lunes | Revisar resultados, apagar el peor anuncio, subir uno nuevo |
