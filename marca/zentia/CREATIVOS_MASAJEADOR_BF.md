# Masajeador · estáticos Black Friday (27–30 nov 2026)

Skills: `creativos`, `ad-creative` (plantillas estáticas por nivel), `competencia` (Biblioteca de Anuncios, 26-nov).

## Lo que hay en el mercado ahora mismo (Biblioteca de Anuncios ES, 26-nov, activos)
| Quién | Qué repite | Señal |
|---|---|---|
| Teravo | «Alivia las molestias hoy · 52 % de descuento», testimonio en 1.ª persona | 10+ copias nuevas el 25-nov: sigue escalando. Usa testimonio y claim médico: NO copiar |
| Podaris | Historias de síntomas («No son nervios. Es tu cuello», «Empieza en la nuca»), −50 % + regalo, pagas al recibir | Lleva desde el 10-nov y sigue sacando copias. Ángulo médico: NO copiar |
| **Domus España** | Título: **«Envío 24h GRATIS y pago contrarrembolso por BLACK FRIDAY»** | **10 copias** del mismo mensaje: la confianza (pagar al recibir) ES la oferta |
| Carmen Muñoz | «Alivia tu dolor o te devolvemos el dinero»; «Los mejores y peores productos para el dolor de cuello de 2026» | Garantía como titular y comparativa de productos |
| Pievia | Mismo masajeador, «49,90 €», tono de usted, sobrio | Formato producto + precio |
| Velluto / Belvua | «¿Mamá siempre con…?», «uno para ti y otro para tu madre», pack + regalo Black Week | Regalo a padres |
| Bellverity / Glowfitia | «Tus 15 minutos para soltar la nuca», «Termina tu jornada con un masaje» | Ritual de fin de día |
| Nuestro dato | Pizarra = CTR 5,3 % (cojín); Stories de IG = mejor ubicación; Reels de IG = toques sin querer | |

**Hueco que nadie cubre:** quitar el miedo de comprar a una tienda nueva con cosas concretas y verdaderas (quién está detrás, pagas al cartero, te llamamos antes) y comparar 6 cabezales con el de 2 almohadillas que todo el mundo ha visto.

## Los 5 estáticos (por orden de prioridad para 150 €)

### 1 · ZN_postit_regalo (plantilla «Post-it», especialista en rebajas)
Post-it amarillo escrito a mano pegado sobre la caja del kit. Se ve hecho a mano, urgente y de verdad: justo lo que funciona en Black Friday. Mezcla regalo a padres (Velluto/Belvua) + pagar al recibir (Domus).

### 2 · ZN_miedos_preguntas (plantilla «FAQ / tranquilidad»)
Las 4 dudas de una persona de 60 años, con respuestas cortas y ciertas. Va directo a lo que frena a los mayores con la contrarreembolso. Grounding: Domus escala justo este mensaje; Pievia ofrece «¿Prefiere pedir por teléfono?».

### 3 · ZN_6vs2_comparativa (plantilla «Nosotros vs. ellos», solo hechos físicos)
Izquierda: el masajeador fino de 2 almohadillas que sale en todos lados. Derecha: el nuestro, 6 cabezales en dos filas. Solo se comparan cosas que se ven (número de puntos, calor, mando), nada de «alivia más».

### 4 · ZN_carta_georgy (plantilla «Carta del fundador», nivel S en frío)
Nota a mano firmada: quién eres, desde dónde envías, y que llamas a cada cliente. Es el formato que mejor abre público frío y mata el miedo de «tienda fantasma». Solo papel y producto, sin cara de IA (no se puede presentar una persona inventada como tú). **Solo si te parece bien firmar con tu nombre.**

### 5 · ZN_pizarra_nuca (nuestro mejor formato)
La pizarra de siempre adaptada a la nuca + oferta abajo.

---

## Cómo generarlos en Gemini
- Adjunta SIEMPRE 2 fotos reales del masajeador: la de frente (cabezales visibles) y la de detrás que hiciste tú. Si sale con otro número de cabezales o la rama al revés, repite.
- Pide primero 4:5 (1080×1350). Luego: «Same image, 9:16 (1080×1920), keep top 14 % and bottom 20 % free of text».

**Bloque de producto (va dentro de cada prompt):**
> The product must be IDENTICAL to the attached reference photos: a U-shaped neck massager, glossy white outside, dark grey inside, about 15 cm wide. On the inner side it has exactly 6 massage heads arranged in two rows of 3 (6 total, never 2, never 4). The upper arms rest over the shoulders and the second, lower branch points DOWN towards the base of the neck. Small control buttons on the outside. Do not add pads, wires, screens or logos that are not in the reference.

### Prompt 1 · ZN_postit_regalo
```
Photorealistic close-up photo, 4:5. A kitchen wooden table in warm evening light in a Spanish home. On the table: two identical neck massagers (see product block) next to a small blue gel neck pad and a plain white shipping box. A bright yellow square sticky note is stuck on the box, written by hand with a black marker in casual handwriting, perfectly legible, in Spanish, exactly these 4 lines:
"Mamá: uno para ti
y otro para papá.
2 por 69,90 €
Se paga al cartero"
Below the sticky note, on the table, a second smaller pink sticky note in the same handwriting: "Oferta hasta el lunes 30". No other text, no logos, no price tags. Natural phone-photo look, slight grain, not a studio render.
[PRODUCT BLOCK]
```
Texto: «Este año, el regalo de tus padres se paga al cartero. Kit de 2 masajeadores de cuello con calor + almohadilla de gel: 69,90 € con envío gratis desde España. Nada por adelantado. Hasta el lunes 30.»
Alt.: «¿Qué le regalas a quien dice que no quiere nada? 15 minutos de calor en la nuca al llegar a casa. 2 por 69,90 €, pagas al recibirlo.»
Títulos: «2 por 69,90 € · Pagas al recibir» / «El regalo para tus padres»
Descripción: «Envío gratis desde España»

### Prompt 2 · ZN_miedos_preguntas
```
Clean graphic ad, 4:5, off-white background (#F7F7F4), navy text (#16244A). Top: the title in a large bold rounded sans-serif, Spanish, exactly: "¿Te da miedo comprar por internet?". Middle: 4 rows, each with a large navy check circle on the left and big readable text (min 44 px), exactly:
"Pagas al cartero, en efectivo. Nada por adelantado."
"Te llamamos antes de enviarlo para confirmar."
"Sale desde España: llega en 2 a 4 días."
"30 días para probarlo en casa."
Right side, overlapping the rows slightly: a photo of the neck massager (see product block) resting on a light linen surface, soft shadow. Bottom band in navy with white text: "Kit de 2 · 69,90 € · Envío gratis". Large letters, high contrast, made for people over 55 reading on a phone. No logos, no stars, no reviews.
[PRODUCT BLOCK]
```
Texto: «Si es tu primera vez comprando por internet, así de fácil: rellenas nombre, teléfono y dirección, te llamamos para confirmar y pagas al cartero cuando lo tienes en la mano. Masajeador de cuello con calor: 2 por 69,90 € hasta el lunes.»
Alt.: «Sin tarjeta y sin adelantar nada. Lo pagas cuando llega a casa. 2 masajeadores de cuello con calor por 69,90 €.»
Títulos: «Pagas al cartero, sin adelantar» / «Te llamamos antes de enviarlo»
Descripción: «Envío desde España 2–4 días»

### Prompt 3 · ZN_6vs2_comparativa
```
Split comparison ad, 4:5, two halves. LEFT half, light grey background, small grey title in Spanish: "El de siempre". Photo of a generic slim U-shaped neck band massager with only 2 round flat pads at the inner tips (the common pulse model), no brand. Under it, 3 lines with grey dots: "2 almohadillas" · "Solo impulsos" · "Toca 2 puntos". RIGHT half, white background, navy bold title: "Zentia". Photo of OUR massager (see product block) showing clearly the 6 heads in two rows of 3. Under it, 3 lines with navy check marks: "6 cabezales en dos filas" · "Calor suave" · "Nuca y base del cuello". Thin vertical divider line in the middle. Bottom navy band, white text: "Kit de 2 · 69,90 € · Pagas al recibirlo". Large, high-contrast Spanish text, no other words.
[PRODUCT BLOCK] (applies only to the right-hand product)
```
Texto: «¿Has visto el masajeador fino de 2 almohadillas? Este es otra cosa: 6 cabezales en dos filas que cubren nuca y base del cuello, con calor suave. 2 por 69,90 €, pagas al recibirlo.»
Alt.: «Cuenta los cabezales antes de comprar. 6 en este, 2 en el de siempre. Kit de 2 por 69,90 € con envío gratis.»
Títulos: «6 cabezales, no 2» / «Cuenta los cabezales»
Descripción: «Pagas al recibirlo»

### Prompt 4 · ZN_carta_georgy
```
Photorealistic top-down photo, 4:5. A sheet of cream notepaper on a wooden table, handwritten in blue ballpoint, natural Spanish handwriting, perfectly legible, exactly:
"Hola, soy Georgy.
Envío cada masajeador desde España
y llamo a cada cliente antes de enviarlo.
Si no te convence, tienes 30 días.
Y no pagas nada hasta que lo tengas en casa.
— Georgy, Zentia"
Next to the paper: the neck massager (see product block) and a cup of tea. Soft morning light, real phone-photo look. No faces, no hands, no logos, no other text.
[PRODUCT BLOCK]
```
Texto: «Somos una tienda pequeña y lo sabemos. Por eso: te llamo antes de enviar, pagas al cartero y tienes 30 días. Masajeador de cuello con calor, 2 por 69,90 € este Black Friday.»
Títulos: «Te llamo antes de enviarlo» / «Pagas cuando lo tengas»
Descripción: «Kit de 2 · 69,90 €»

### Prompt 5 · ZN_pizarra_nuca
```
Photorealistic photo, 4:5, of a classic green school chalkboard in a classroom, handwritten in white chalk, Spanish, large and legible, exactly:
"¿Por qué llegas a casa con la nuca cargada?"
"1. Muchas horas mirando hacia abajo"
"2. Hombros subidos sin darte cuenta"
"3. La nuca no se mueve en todo el día"
"15 minutos de calor suave y masaje"
On the chalk tray at the bottom: the neck massager (see product block). Bottom right corner, a yellow sticky note on the board: "2 por 69,90 € · pagas al recibirlo". No other text.
[PRODUCT BLOCK]
```
Texto: «Si al final del día la nuca pesa, no eres el único. 15 minutos de calor suave y 6 cabezales, en el sofá. Kit de 2 por 69,90 € con envío gratis. Pagas al recibirlo.»
Títulos: «¿La nuca cargada cada noche?» / «15 minutos en el sofá»
Descripción: «2 por 69,90 € · Hasta el 30»

## Qué no poner (aunque lo haga la competencia)
«Alivia el dolor», mareos, médicos, «52 % de descuento» o tachados que nunca se cobraron, reseñas o testimonios inventados, «stock limitado» falso. Meta rechaza los de salud y con contra reembolso un anuncio que promete de más se convierte en paquetes rechazados.

## Montaje en Meta
- 1 conjunto, 30 €/día, tope 120–150 €, 35–65, solo móvil. Ubicaciones: feed de FB e IG, Stories de IG y FB, Explorar. Sin Reels de IG.
- Lanzar 1, 2, 3 y 4 (o 5 si no quieres la carta). Con 30 €/día, más de 4 anuncios reparte demasiado poco.
- Corte duro: 50 € sin ningún pedido en la hoja → parar. Anuncio con CTR < 0,8 % tras 2.000 impresiones → fuera.
- Hipótesis: el 2 (miedos) tendrá más pedidos por clic que el 3 (comparativa) aunque menos CTR; el 1 (post-it) el CTR más alto en Stories.
