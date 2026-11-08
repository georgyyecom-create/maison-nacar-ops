# Campaña 2 · «Navidad adelantada» (lanzar 11–12 nov)

## Qué cambia respecto a la campaña 1
La campaña 1 traía tráfico barato (CTR ~2 %, CPC ~0,6 €), pero la web no convertía. Ahora la web está rehecha, así que repetimos lo que funcionó (las nativas «POV») y añadimos la nueva estética: flash, grano de película, Gala de noche y Corazones de calle.
Cada anuncio lleva a una ficha cuya **portada es la misma foto** del anuncio, con el estuche de 3 ya montado (`?pack=3`).

## 0 · Antes de lanzar (30 min)
1. Publicar el tema último y hacer una **compra de prueba** con el 3x2. Comprobar que el descuento sale y que el pedido llega a Yehwang. Después, cancelarla.
2. Meta → Administrador de eventos → **Probar eventos**: abrir la web desde el móvil y comprobar que llegan `ViewContent`, `AddToCart`, `InitiateCheckout` y `Purchase`.
3. Revisar el stock de las 6 piezas en Yehwang.
4. Borrar los valores falsos del metacampo `aom.rating` (las estrellas no se muestran, pero que no queden).

## 1 · Campaña
- Nombre: `MN | Ventas | ABO | ES | 12-nov`
- Objetivo: **Ventas**. Evento: **Compra**. Presupuesto por conjunto (ABO).
- Advantage+ creative: **todo apagado**.

## 2 · Conjuntos de anuncios (2, iguales salvo el producto)
| | A · Puntos de Luz (Gala) | B · Corazones (calle) |
|---|---|---|
| Nombre | `PDL | Amplio | 10€` | `COR | Amplio | 10€` |
| Presupuesto | 10 €/día | 10 €/día |
| Enlace | `maisonnacar.com/products/collar-puntos-luz?pack=3` | `maisonnacar.com/products/collar-corazones-encadenados?pack=3` |
| Público | Mujeres, 24–50, España sin Canarias, Ceuta ni Melilla; Advantage+ audience con esas sugerencias | igual |
| Ubicaciones | Manuales: Feed, Stories, Reels y Explorar de Facebook e Instagram (sin Audience Network, Threads ni in-stream) | igual |

UTM en todos: `utm_source=meta&utm_medium=paid&utm_campaign=c2_{{adset.name}}&utm_content={{ad.name}}`

Total: **20 €/día**. La prueba dura 7 días (~140 €).

## 3 · Anuncios (4 por conjunto)
Formato: imagen única. Sube la 4:5 y, en «Personalizar por ubicación», la 9:16 para Stories y Reels (Gemini la saca en el mismo chat: *«Same image, vertical 9:16, keep the text inside the central area.»*).

Textos comunes:
- **Titular:** `Elige 3, paga 2 · Envío gratis`
- **Descripción:** `Acero con baño de oro 18k · Devolución hasta el 15-ene`
- **Botón:** Comprar

### Conjunto A · Puntos de Luz

**A1 · POV baño del restaurante** (la nativa, que fue lo mejor). Imagen: tu foto C5 (baño del restaurante).
En Gemini, adjunta la C5:
```
Add this text to the image in a natural Instagram-story style (white text with a soft black shadow, simple sans-serif font), placed in the upper third, without covering her face or the necklace: "POV: la cena de empresa y por fin sabes qué ponerte". Keep the photo exactly the same. Vertical 4:5.
```
Texto principal:
```
La cena de empresa, Nochebuena, Nochevieja… y tú con el conjunto Puntos de Luz ✦
Elige 3 joyas y la de menor precio es nuestro regalo. Llega en su estuche, con envío gratis.
```

**A2 · Campaña (portada C1 con flash)**. Imagen: tu portada C1.
```
Add text to this image as a fashion campaign poster: large bold white condensed sans-serif headline in the lower part "Elige 3. Paga 2." and under it, smaller: "Conjunto Puntos de Luz · 3 joyas por 94 €". Keep the photo exactly the same, do not cover the necklace. Vertical 4:5.
```
Texto principal:
```
Collar, brazalete y anillo Puntos de Luz. Tres joyas, pagas dos.
Acero inoxidable con baño de oro 18k: no se oxida ni mancha la piel. Garantía de color de 3 años.
```

**A3 · Las 12 uvas** (bodegón C2).
```
Add this text in clean white bold sans-serif at the top of the image, centered: "12 uvas. 1 joya." and below it, smaller: "(Bueno, 3. La tercera es regalo.)". Keep the photo exactly the same. Vertical 4:5.
```
Texto principal:
```
Este año, la tradición viene con brillo ✦
Elige 3 joyas y la de menor precio te la regalamos. Envío gratis y devolución hasta el 15 de enero.
```

**A4 · Humor «Perdón»**. Imagen: cualquier foto de Gala de la chica (por ejemplo la C4 en la mano), mejor en blanco y negro.
```
Make this photo black and white with film grain and add three lines of text on the left, white sans-serif, like a meme list:
"Perdón básico: flores."
"Perdón deluxe: cena."
"Perdón premium: Puntos de Luz."
The last line in bold. Keep the jewelry visible. Vertical 4:5.
```
Texto principal:
```
Hay perdones y perdones 😌
Conjunto Puntos de Luz: elige 3 y la de menor precio es nuestro regalo. Llega en su estuche.
```

### Conjunto B · Corazones

**B1 · POV amigas** (la foto K2 «una para ti»).
```
Add this text in Instagram-story style (white text, soft shadow), upper third, without covering faces or the necklace: "POV: tu amiga se pide la tercera joya gratis y te la regala a ti". Keep the photo exactly the same. Vertical 4:5.
```
Texto principal:
```
Elige 3 joyas y la de menor precio es gratis. ¿Para ti, para ella o para las dos? ♡
Corazones: collar, pulsera y pendientes. Envío gratis.
```

**B2 · Campaña calle** (portada K1 o la 04 del inicio).
```
Add text as a streetwear campaign poster: large bold white condensed sans-serif headline in the lower part "Elige 3. Paga 2." and under it, smaller: "Conjunto Corazones · 3 joyas por 94 €". Keep the photo exactly the same, do not cover the necklace. Vertical 4:5.
```
Texto principal:
```
Collar, pulsera y pendientes Corazones. Tres joyas, pagas dos.
Acero con baño de oro 18k que aguanta el día a día. Garantía de color de 3 años.
```

**B3 · El estuche** (oferta clara). Imagen hecha por Claude con las fotos del producto: `creativos/B3-estuche-corazones-4x5.png` y `-9x16.png`. Hay otra igual para Puntos de Luz (`creativos/A5-estuche-puntos-de-luz-*`): úsala como 5.º anuncio de A, o en lugar del A4 si este no te convence.
Texto principal:
```
Así funciona: llenas tu estuche con 3 joyas y la tercera corre de nuestra cuenta ✦
Envío gratis, sale en 24/48 h.
```

**B4 · Humor regalo**. Imagen: la foto del perfil con oreja y cuello (K3) en blanco y negro.
```
Make this photo black and white with film grain and add text on the left, white sans-serif, like a meme list:
"Regalo para mi amiga: 1"
"Regalo para mí: 2"
"El 3x2: lo entiende."
Keep the earrings and necklace visible. Vertical 4:5.
```
Texto principal:
```
Las cuentas claras ♡ Elige 3 joyas y la de menor precio es gratis.
Corazones: collar, pulsera y pendientes con baño de oro 18k.
```

Nombres de anuncio: `A1-POV-bano`, `A2-campana`, `A3-uvas`, `A4-perdon`, `B1-POV-amigas`, `B2-campana`, `B3-estuche`, `B4-cuentas`.

## 4 · Números de referencia
- Pedido medio con el 3x2 ≈ 94 € y margen ≈ 46 €. **CPA máximo: 30 €.**
- Lo que tiene que pasar: CTR > 1,2 %; de visita a carrito > 6 %; de carrito a compra > 30 %.
- Si el CTR es bueno y no hay carritos, el fallo está en la ficha, no en el anuncio.

## 5 · Reglas (igual que siempre)
- Días 1–3: no tocar nada.
- Anuncio: apagar si CTR < 0,8 %, o si gasta 25 € sin ningún carrito.
- Conjunto: pausar a los 75–80 € sin compras.
- Escalar un 20 % cada 48 h si el CPA < 30 €.
- Mirar **Shopify** además de Meta (sesiones, carritos, pedidos), por el banner de cookies.

## 6 · Calendario
- 11–12 nov: lanzar.
- 15 nov: primera revisión y apagar lo que no cumpla.
- 18–20 nov: rehacer con lo que gane y preparar 4 creativos de Black Friday («Navidad adelantada», misma oferta).
- 27–30 nov: Black Friday y Cyber Monday. Subir presupuesto a lo que funcione.
- 10–14 dic: «Último día para que llegue antes de Navidad».
