# Campaña 2 · «Black Friday anticipado» (lanzar 11–12 nov)

## Oferta
- **12–26 nov · Black Friday anticipado:** 3x2, «solo hasta el 26 de noviembre».
- Tachado legal: la suma de los precios por separado (~~123 €~~ 94 €, ahorras 29 €). **No** inventar un «precio anterior» (regla Ómnibus).
- Del 27-nov al 1-dic: Black Friday (4x2 o 3x2 con cuenta atrás, por decidir).

## Estructura
- Campaña `MN | Ventas | ABO | ES | 12-nov` · Ventas · evento Compra · Advantage+ creative apagado.
- 2 conjuntos de **25 €/día** (50 €/día en total):

| | PDL · Puntos de Luz | COR · Corazones |
|---|---|---|
| Enlace | `/products/collar-puntos-luz?pack=3` | `/products/collar-corazones-encadenados?pack=3` |
| Público | Mujeres, 24–50, España sin Canarias, Ceuta ni Melilla | igual |
| Ubicaciones | Feed, Stories, Reels y Explorar (FB + IG). Sin Audience Network, Threads ni in-stream | igual |

UTM: `utm_source=meta&utm_medium=paid&utm_campaign=c2_{{adset.name}}&utm_content={{ad.name}}`

## Los 6 anuncios: 3 tipos de ángulo, iguales en los dos conjuntos
| Tipo | PDL (noche, Gala) | COR (calle, cercano) |
|---|---|---|
| **Regalo** | A1 · «Él no sabe qué regalarte» (chat) | B1 · «Mamá dice que no quiere nada» |
| **Deseo propio** | A2 · POV cena de empresa | B2 · «Cosas que necesito: 0» (Notas) |
| **Oferta** | A3 · El estuche con precio tachado (hecho) | B3 · «El Black Friday es para comprar joyas» |

Formato: imagen única 4:5 y, en «Personalizar por ubicación», la 9:16 (en el mismo chat de Gemini: *«Same image, vertical 9:16, keep all text inside the central area.»*).
Titular común: `Black Friday anticipado · 3x2` · Descripción: `Solo hasta el 26-nov · Envío gratis` · Botón: Comprar.

### A1 · Regalo pareja: «Él no sabe qué regalarte»
Imagen: una captura de chat **inventada** (no de una persona real). En Gemini, sin adjuntos:
```
Create a realistic iPhone WhatsApp chat screenshot in Spanish, light mode, vertical 4:5. Contact name at the top: "Amor ❤️". Messages:
(him, grey bubble) "Qué quieres por Navidad? 😅"
(her, green bubble) "Nada, de verdad"
(her, green bubble) "Bueno… esto" followed by a link preview card showing a gold necklace with small round stones in thin bezels on a woman's neck, title "Conjunto Puntos de Luz · Maison Nácar", subtitle "Elige 3, paga 2"
(him, grey bubble) "Hecho 🫡"
Clean, believable, no other apps or notifications.
```
Texto principal:
```
Si te pregunta qué quieres, ya sabes qué mandarle 😌
Black Friday anticipado: elige 3 joyas y la de menor precio es gratis. Solo hasta el 26 de noviembre.
```

### A2 · Deseo propio: POV cena de empresa
Imagen: tu foto C5 (baño del restaurante). Adjúntala:
```
Add this text in a natural Instagram-story style (white text with a soft black shadow, simple sans-serif font) in the upper third, without covering her face or the necklace: "POV: la cena de empresa y por fin sabes qué ponerte". Keep the photo exactly the same. Vertical 4:5.
```
Texto principal:
```
Cena de empresa, Nochebuena, Nochevieja… y tú con el conjunto Puntos de Luz ✦
Black Friday anticipado: 3 joyas por 94 € (por separado, 123 €). Solo hasta el 26-nov.
```

### A3 · Oferta: el estuche
Imagen ya hecha: `creativos/A3-oferta-bf-puntos-de-luz-4x5.png` y `-9x16.png`.
Texto principal:
```
Black Friday anticipado ✦ Collar, brazalete y anillo Puntos de Luz: pagas 2, el tercero es regalo.
Acero con baño de oro 18k, en su estuche y con envío gratis. Solo hasta el 26 de noviembre.
```

### B1 · Regalo mamá: «Mamá dice que no quiere nada»
Imagen: tu foto K3 (perfil, oreja y cuello) o la 04 de Corazones. Adjúntala:
```
Add text to this photo, bold white sans-serif with a soft shadow, in the upper part, two lines:
"Mamá dice que no quiere nada."
"Mamá miente."
Keep the photo exactly the same and the jewelry visible. Vertical 4:5.
```
Texto principal:
```
Este año, acierta ♡ Corazones: collar, pulsera y pendientes con baño de oro 18k, en su estuche de regalo.
Black Friday anticipado: elige 3 y la de menor precio es gratis. Solo hasta el 26-nov.
```

### B2 · Deseo propio: «Cosas que necesito: 0»
Imagen: captura inventada de la app Notas. En Gemini, adjunta `corazones-conjunto.jpg`:
```
Create a realistic iPhone Notes app screenshot in Spanish, vertical 4:5, with this text:
"Cosas que necesito: 0"
"Joyas que me voy a comprar en el Black Friday: 3"
"(la tercera es gratis, así que en realidad es ahorrar)"
Below the text, a small photo pasted in the note showing the attached gold heart jewelry exactly as it is (necklace, bracelet, earrings). Clean, believable, light mode.
```
Texto principal:
```
Las cuentas salen 💅 Corazones: elige 3 joyas y la de menor precio te la regalamos.
Black Friday anticipado, solo hasta el 26 de noviembre. Envío gratis.
```

### B3 · Oferta: «El Black Friday es para comprar joyas»
Imagen: tu portada de Corazones (K1 o la 04). Adjúntala:
```
Add text to this photo as a bold campaign poster, white condensed sans-serif: at the top, small "Black Friday anticipado"; in the lower part, large "Elige 3. Paga 2." and under it, smaller "Por separado 123 €. En tu estuche, 94 €. Solo hasta el 26-nov." Keep the photo exactly the same, do not cover the necklace. Vertical 4:5.
```
Texto principal:
```
El Black Friday no es para comprar cosas. Es para comprar joyas ✦
Corazones: collar, pulsera y pendientes. Pagas 2, la tercera es regalo. Solo hasta el 26-nov.
```

Nombres: `A1-regalo-chat`, `A2-deseo-POV`, `A3-oferta-estuche`, `B1-regalo-mama`, `B2-deseo-notas`, `B3-oferta-poster`.

## Reglas de apagado y escalado (con 25 €/día por conjunto)
Mirar siempre **Meta y Shopify** (sesiones, carritos, pedidos), por el banner de cookies.

**Días 1–3: no tocar nada**, salvo error grave (anuncio rechazado, enlace roto, 0 clics con 15 € gastados).

**Anuncio (desde el día 3):**
| Gastado | Apagar si… |
|---|---|
| 15 € | CTR de enlace < 0,8 % |
| 25 € | 0 añadidos al carrito |
| 45 € | 0 compras y otro anuncio del conjunto ya vende |

**Conjunto:**
- 75 € sin compras y menos de 3 carritos → pausar.
- 100 € sin compras → pausar sí o sí.

**Escalar:**
- CPA < 30 € con 2 o más compras → +20 % cada 48 h.
- CPA < 20 € con 3 o más compras → +30 % cada 48 h.
- Si un **tipo de ángulo** gana en los dos conjuntos, ese es el camino: haz 2 variantes nuevas de ese tipo.

**Cansancio del anuncio:** frecuencia > 3 y CTR un 30 % por debajo de su primera semana → cambiar la imagen.

**Si hay CTR pero no hay carritos:** el fallo está en la ficha. Avísame con los números.

## Antes de lanzar
1. Compra de prueba con el 3x2 (y cancelarla).
2. Meta → Administrador de eventos → Probar eventos: `ViewContent`, `AddToCart`, `InitiateCheckout`, `Purchase`.
3. Stock de las 6 piezas.
4. En la web: banner con «Black Friday anticipado · solo hasta el 26-nov» (en «Campaña activa» o en los mensajes de la barra).
