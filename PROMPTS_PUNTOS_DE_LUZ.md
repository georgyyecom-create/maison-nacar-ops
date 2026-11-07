# Prompts · Collar Puntos de Luz (Gala, anuncio B)

Son **3 escenas nuevas**, distintas de la cena con velas del Tréboles. Cada escena tiene dos fotos:
- **la modelo** con el conjunto completo, y el collar como protagonista;
- **el collar dejado de forma natural** en un rincón de esa misma escena: el bodegón.

Al final hay un **macro** y un **estuche**.

| Escena | Modelo | Bodegón |
|---|---|---|
| **C · El palco del teatro** (terciopelo rojo y dorado, muy navideño) | C1 | C2 |
| **D · Antes de salir** (tocador, espejo, luz de lámpara) | D1 | D2 |
| **E · Nochevieja en la terraza** (hora azul, luces de la ciudad, champán) | E1 | E2 |
| Detalle | M · macro sobre la piel | — |
| Regalo | R · en su estuche | — |

---

## Las piezas (todas a juego, mismo bisel redondo)

| Pieza | Precio | Stock dorado | Papel en la foto |
|---|---|---|---|
| **Collar Puntos de Luz** | 45 € | 103 | **PROTAGONISTA** |
| Brazalete Puntos de Luz | 45 € | 135 | secundario |
| Aros Cascada Brillante | 29 € | **11**, ojo | secundario |
| Anillo Baguette Brillante | 29 € | 112 | secundario |

El conjunto completo suma 148 € y con el 3x2 se queda en 119 €: el anillo sale gratis. Si los Aros Cascada se agotan en dorado, cambia en los prompts el texto de los pendientes por pequeños aros lisos dorados (Aros Esenciales).

### Qué adjuntar
Te he preparado dos imágenes en `referencias/`:
- **`puntos-de-luz-conjunto.jpg`**: las 4 piezas en fila. De izquierda a derecha: collar, brazalete, pendientes, anillo.
- **`collar-puntos-de-luz-macro.jpg`**: el recorte de detalle de las piedras.

Así adjuntas una sola imagen de producto en lugar de cuatro y Gemini se lía menos.

### Reglas
1. **Un chat de Gemini por escena.** Haz primero la foto de la modelo (C1, D1, E1), que es la **referencia de estilo**, y luego el bodegón de esa escena en el mismo chat.
2. **Formato 4:5 vertical** en todas.
3. Si Gemini pone el collar con piedras grandes, o con piedras por toda la cadena, corrígelo: *«The stones are small (about 4 mm) and only on the front part; the back is plain fine chain.»*
4. Si los pendientes, el brazalete o el anillo le quitan protagonismo al collar: *«Make the necklace the hero: sharper, brighter and more visible than the other jewelry.»*

---

## Bloques que se repiten (ya van pegados en cada prompt)

**Descripción del collar:**
> a very fine gold chain with a row of about seventeen small round clear zirconia stones (about 4 mm each), each one in a thin smooth round gold bezel setting, linked one after another only along the front part of the necklace; the back part is a plain fine gold chain; it sits close to the base of the neck (adjustable 37–45 cm). Small, delicate stones, NOT big diamonds, NOT a tennis necklace.

**Jerarquía:**
> The NECKLACE is the hero of the image: it is in the sharpest focus, the best lit and the most visible piece. The earrings, the bracelet and the ring are secondary: smaller in the frame, partly turned away or slightly softer in focus. No other jewelry apart from these four pieces.

---

# ESCENA C · El palco del teatro

### C1 · Modelo con el conjunto → `#portada`
**Adjunta:** imagen 1 = `puntos-de-luz-conjunto.jpg`.
Texto alternativo: `Collar Puntos de Luz puesto #portada`
```
I'm attaching one image with four real products, from left to right: (1) the NECKLACE, (2) a thin rigid gold bangle with a row of small round clear stones in round gold bezel settings, (3) a pair of small gold huggie hoops, each with a short drop of three small round stones in bezel settings, (4) an adjustable gold ring with a row of square-cut clear stones, the central one slightly larger. Reproduce all four exactly; do not redesign them.
The necklace is: a very fine gold chain with a row of about seventeen small round clear zirconia stones (about 4 mm each), each one in a thin smooth round gold bezel setting, linked one after another only along the front part of the necklace; the back part is a plain fine gold chain; it sits close to the base of the neck. Small, delicate stones, NOT big diamonds, NOT a tennis necklace.

Cinematic luxury perfume-campaign photograph. An elegant Spanish woman in her late 40s, dark hair in a low sleek chignon, seated in a private box of a grand old opera house in Madrid, deep red velvet seats and a carved gilded balustrade. She wears a black satin dress with a wide straight neckline that leaves her collarbones bare. The necklace rests at the base of her neck catching the warm stage light; the drop earrings are visible on one ear; her right forearm rests on the red velvet edge of the balustrade, showing the bangle on her wrist and the ring on her hand. Framing from the eyes down to the waist, three-quarter view, she looks towards the stage, softly lit from the side, the auditorium behind her a blur of warm golden lights and dark red. Vertical 4:5.

The NECKLACE is the hero of the image: it is in the sharpest focus, the best lit and the most visible piece. The earrings, the bracelet and the ring are secondary: smaller in the frame, partly turned away or slightly softer in focus. No other jewelry apart from these four pieces.

Style: high-end perfume advertising, low-key warm theatrical light, deep blacks and rich velvet reds, muted palette, subtle 35mm film grain, shallow depth of field, the stones and the gold are the brightest points, natural skin texture with visible pores (no plastic skin), quiet luxury, no text, no logos, no watermark.
```
Guárdala: es la **Escena C**.

### C2 · Bodegón en el palco
**Adjunta:** imagen 1 = `puntos-de-luz-conjunto.jpg`; imagen 2 = **Escena C**.
Texto alternativo: `Collar Puntos de Luz sobre terciopelo`
```
I'm attaching two images:
- Image 1 shows the real products; use ONLY the first one on the left, the NECKLACE: a very fine gold chain with a row of about seventeen small round clear zirconia stones (about 4 mm each), each in a thin smooth round gold bezel setting, only along the front part; the back part is plain fine chain. Reproduce it exactly.
- Image 2 is the STYLE REFERENCE from the same scene: same opera box, same light, same colors. Do NOT include the woman.

Still life in the same opera box, as if she had just taken the necklace off during the interval: the necklace lies loosely draped over the deep red velvet edge of the gilded balustrade, the row of stones forming a soft curve, catching the warm stage light. Next to it, slightly out of focus, a pair of small vintage brass opera glasses with no logos and a folded black silk evening glove. The auditorium behind is a blur of warm golden lights. Close framing, the necklace fills the center of the image. Vertical 4:5.

Style: high-end perfume advertising still life, low-key warm theatrical light, rich velvet reds and deep blacks, the stones and the gold are the brightest points, subtle 35mm film grain, shallow depth of field, no text, no logos, no watermark.
```

### C3 · Collar puesto, de cerca (en el palco)
**Adjunta:** imagen 1 = `collar-puntos-de-luz-macro.jpg`; imagen 2 = foto principal del collar (fondo blanco); imagen 3 = **Escena C** (la foto del palco ya generada).
Texto alternativo: `Collar Puntos de Luz puesto, de cerca`
```
I'm attaching three images:
- Image 1 is the PRODUCT DETAIL: small round clear zirconia stones, each in a thin smooth round gold bezel setting, linked one after another by tiny gold links. Reproduce this detail exactly.
- Image 2 is the WHOLE NECKLACE: the bezel-set stones (about seventeen, about 4 mm each) are ONLY on the front part; the back part is a plain very fine gold chain. Keep exactly this design; NOT big diamonds, NOT a tennis necklace.
- Image 3 is the STYLE REFERENCE and the SAME WOMAN in the same opera box: same model, same black satin dress with straight neckline and wide straps, same dark chignon, same warm theatrical light, same red and gold blurred background.

Close-up of the same woman in the opera box: framing from just below the lips down to the top of the dress neckline, slightly three-quarter view, so the necklace fills the center of the image and the row of bezel-set stones is clearly visible on the skin at the base of her neck, each stone catching a small star highlight from the stage lights. The plain fine chain goes up the sides of the neck. Only a hint of one three-stone drop earring at the top edge, softly out of focus. No bracelet or ring visible in the frame. Real skin with visible pores, fine texture and natural collarbones. Background: blurred deep red velvet and warm golden lights of the auditorium. Vertical 4:5.

Style: high-end perfume advertising, low-key warm theatrical light, deep blacks and rich velvet reds, muted palette, subtle 35mm film grain, shallow depth of field with the necklace in razor-sharp focus, the stones and the gold are the brightest points, natural skin texture (no plastic skin, no heavy retouching), no text, no logos, no watermark, no extra jewelry.
```
Va en la **posición 3** de la ficha (después de la portada) y es la mejor imagen para el anuncio de Meta: el collar se ve grande en el móvil.

---

# ESCENA D · Antes de salir (el tocador)

### D1 · Modelo poniéndose el collar
**Adjunta:** imagen 1 = `puntos-de-luz-conjunto.jpg`.
Texto alternativo: `Collar Puntos de Luz, poniéndoselo antes de salir`
```
I'm attaching one image with four real products, from left to right: (1) the NECKLACE, (2) a thin rigid gold bangle with a row of small round clear stones in round gold bezel settings, (3) a pair of small gold huggie hoops, each with a short drop of three small round stones in bezel settings, (4) an adjustable gold ring with a row of square-cut clear stones, the central one slightly larger. Reproduce all four exactly; do not redesign them.
The necklace is: a very fine gold chain with a row of about seventeen small round clear zirconia stones (about 4 mm each), each one in a thin smooth round gold bezel setting, linked one after another only along the front part of the necklace; the back part is a plain fine gold chain; it sits close to the base of the neck. Small, delicate stones, NOT big diamonds, NOT a tennis necklace.

Cinematic luxury perfume-campaign photograph. An elegant Spanish woman in her early 50s, dark hair loosely pinned up, in a black silk slip dress, sitting at an antique vanity table in her bedroom in the evening, getting ready to go out. She is fastening the necklace behind her neck with both hands, elbows raised, so the row of stones sits perfectly at the base of her neck facing the camera. We see her from behind and slightly to the side, and her face and the necklace from the front in the oval vanity mirror; the mirror reflection is in sharp focus. The bangle slides on her raised wrist, the ring is on her finger, the drop earrings catch the light. Warm light from a small silk-shaded table lamp, the rest of the room in soft shadow. Vertical 4:5.

The NECKLACE is the hero of the image: it is in the sharpest focus, the best lit and the most visible piece. The earrings, the bracelet and the ring are secondary: smaller in the frame, partly turned away or slightly softer in focus. No other jewelry apart from these four pieces.

Style: high-end perfume advertising, intimate warm lamplight, deep soft shadows, muted almost monochrome palette with warm skin tones, subtle 35mm film grain, shallow depth of field, the stones and the gold are the brightest points, natural skin texture with visible pores (no plastic skin), quiet luxury, no text, no logos, no watermark.
```
Guárdala: es la **Escena D**.

### D2 · Bodegón en el tocador
**Adjunta:** imagen 1 = `puntos-de-luz-conjunto.jpg`; imagen 2 = **Escena D**.
Texto alternativo: `Collar Puntos de Luz en el tocador`
```
I'm attaching two images:
- Image 1 shows the real products. Use the NECKLACE (first on the left): a very fine gold chain with a row of about seventeen small round clear zirconia stones (about 4 mm each), each in a thin smooth round gold bezel setting, only along the front part; the back part is plain fine chain. Also use the RING (last on the right), placed in the background. Reproduce both exactly.
- Image 2 is the STYLE REFERENCE from the same scene: same vanity, same lamplight, same colors. Do NOT include the woman.

Still life on the antique vanity table: the necklace lies in a small round mirrored tray, the row of stones forming a gentle curve and catching the lamplight, its reflection softly visible in the mirror tray. Around it, slightly out of focus: an unbranded faceted glass perfume bottle, an open black lipstick with no logo, the ring resting beside the tray and the edge of a black silk slip dress draped over the chair. The oval mirror and the lamp glow in the soft background. Vertical 4:5.

Style: high-end perfume advertising still life, intimate warm lamplight, deep soft shadows, muted palette, the necklace is the brightest point, subtle 35mm film grain, shallow depth of field, no text, no logos, no watermark.
```

---

# ESCENA E · Nochevieja en la terraza

### E1 · Modelo con copa de champán
**Adjunta:** imagen 1 = `puntos-de-luz-conjunto.jpg`.
Texto alternativo: `Collar Puntos de Luz en Nochevieja`
```
I'm attaching one image with four real products, from left to right: (1) the NECKLACE, (2) a thin rigid gold bangle with a row of small round clear stones in round gold bezel settings, (3) a pair of small gold huggie hoops, each with a short drop of three small round stones in bezel settings, (4) an adjustable gold ring with a row of square-cut clear stones, the central one slightly larger. Reproduce all four exactly; do not redesign them.
The necklace is: a very fine gold chain with a row of about seventeen small round clear zirconia stones (about 4 mm each), each one in a thin smooth round gold bezel setting, linked one after another only along the front part of the necklace; the back part is a plain fine gold chain; it sits close to the base of the neck. Small, delicate stones, NOT big diamonds, NOT a tennis necklace.

Cinematic luxury perfume-campaign photograph. An elegant Spanish woman in her late 40s with shoulder-length dark hair with soft waves, on a rooftop terrace in Madrid on New Year's Eve at blue hour, wearing a black off-the-shoulder evening dress. She holds a crystal champagne glass near her chest with the hand wearing the ring and the bangle, smiling softly as she looks away towards the city. The necklace sits at the base of her neck, the stones sparkling; one drop earring is visible. Framing from the lips down to the waist. Behind her, the deep blue evening sky and the warm blurred lights of the city rooftops and a few distant string lights. Vertical 4:5.

The NECKLACE is the hero of the image: it is in the sharpest focus, the best lit and the most visible piece. The earrings, the bracelet and the ring are secondary: smaller in the frame, partly turned away or slightly softer in focus. No other jewelry apart from these four pieces.

Style: high-end perfume advertising, blue-hour ambient light mixed with warm light on her skin, deep blues and blacks with warm golden highlights, subtle 35mm film grain, shallow depth of field, the stones and the gold are the brightest points, natural skin texture with visible pores (no plastic skin), quiet luxury, no text, no logos, no watermark.
```
Guárdala: es la **Escena E**.

### E2 · Bodegón en la terraza
**Adjunta:** imagen 1 = `puntos-de-luz-conjunto.jpg`; imagen 2 = **Escena E**.
Texto alternativo: `Collar Puntos de Luz junto a una copa de champán`
```
I'm attaching two images:
- Image 1 shows the real products. Use ONLY the NECKLACE (first on the left): a very fine gold chain with a row of about seventeen small round clear zirconia stones (about 4 mm each), each in a thin smooth round gold bezel setting, only along the front part; the back part is plain fine chain. Reproduce it exactly.
- Image 2 is the STYLE REFERENCE from the same scene: same terrace, same blue-hour light, same colors. Do NOT include the woman.

Still life on a small round marble side table on the same terrace: the necklace lies coiled loosely next to the foot of a crystal champagne glass with bubbles, the stones sparkling; a few scattered gold confetti pieces and a black velvet ribbon. The deep blue sky and the warm blurred city lights behind. Close framing, the necklace in the center and in sharp focus. Vertical 4:5.

Style: high-end perfume advertising still life, blue-hour light with warm golden highlights, the necklace is the brightest point, subtle 35mm film grain, shallow depth of field, no text, no logos, no watermark.
```

---

# M · Macro sobre la piel
**Adjunta:** imagen 1 = **`collar-puntos-de-luz-macro.jpg`**; imagen 2 = **Escena C** (o la escena que más te guste).
Texto alternativo: `Detalle del brillo`
```
I'm attaching two images:
- Image 1 is the PRODUCT DETAIL: small round clear zirconia stones, each in a thin smooth round gold bezel setting, linked one after another by tiny gold links. Reproduce this detail exactly, it is the most important thing in the image.
- Image 2 is the STYLE REFERENCE from the same campaign: match its light, colors and film grain. Do NOT copy its framing.

Macro close-up of five or six of the bezel-set stones resting on warm skin at the base of the neck, exactly as in image 1, each stone catching a tiny star-shaped highlight, the gold bezels smooth and polished, the rest of the chain softly out of focus. The black satin edge of the dress at the bottom of the frame. Real skin with visible pores and fine texture. Vertical 4:5.

Style: high-end perfume advertising macro, low-key warm light, deep blacks, muted palette, subtle 35mm film grain, very shallow depth of field, natural skin texture, no text, no logos, no watermark.
```

# R · En su estuche
Usa el **prompt G4 del Tréboles** (en `PROMPTS_FICHAS_PRODUCTO_ESTRELLA.md`) y cambia solo la descripción del collar por la de este documento. Adjunta: foto del collar, tu caja negra con la tarjeta roja y la **Escena C**.

---

## Orden en la ficha de Shopify

| Posición | Foto | Texto alternativo |
|---|---|---|
| 1 | Fondo blanco de Yehwang (ya está) | — |
| 2 | **C1 palco** | `… #portada` |
| 3 | M macro | `Detalle del brillo` |
| 4 | D1 tocador | |
| 5 | C2 bodegón palco | |
| 6 | E1 terraza | |
| 7 | R estuche | `En su estuche de regalo` |
| 8 | Foto de Yehwang de la modelo sin pendientes de otra tienda (si no, bórrala) | |

D2 y E2 guárdalas para los **anuncios** o para Instagram.

## Para Meta
Con estas fotos tienes **6 creatividades** para probar en el anuncio B de Gala:
- 3 de modelo: C1, D1, E1.
- 3 bodegones: C2, D2, E2.

Mi apuesta es **C1** (rojo y dorado, se lee como Navidad sin decirlo) y **D2** (el bodegón del tocador parece de marca de perfume). En diciembre, cambia a **E1** para el mensaje de Nochevieja.

## Checklist
- [ ] Unas 17 piedras pequeñas en bisel, solo en la parte delantera; el resto es cadena fina
- [ ] El collar es lo más nítido y brillante de la foto
- [ ] Solo salen las 4 piezas del conjunto, ninguna joya más
- [ ] Manos con 5 dedos y uñas naturales
- [ ] Sin texto ni logos (ni en los gemelos del teatro ni en el perfume)
- [ ] Peso por debajo de 1 MB (squoosh.app, JPG calidad 80)
