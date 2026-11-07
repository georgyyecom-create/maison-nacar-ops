# Tienda v20 · Plan de diseño (desde cero)

## Encargo
- **Joyería de mujer** (25–45 años) que compra para ella o para regalar. Llega desde un anuncio de Meta, casi siempre en el móvil y directa a una ficha.
- **Trabajo de la página:** que en 3 segundos entienda la joya, el 3x2 y el precio, y lo añada.
- **Referencias:**
  - Arena Roja: logo condensado, joyas sobre gris claro, filtros en píldoras con el número de piezas y una firma gigante al pie.
  - Lost Gen Club: «Crea tu joyero», con botones «Añadir a la caja».
  - Cas Deià: titulares en grotesca grande y el plano técnico de la joya.
  - TwoJeys: un símbolo propio y fotos editoriales.

## Idea central: el estuche
El 3x2 deja de ser un descuento y se convierte en **un estuche con tres huecos**. El tercer hueco brilla con el reflejo del nácar (un tornasol suave) y es **el regalo**.
- Es la única pieza que se la juega: aparece en la ficha, en «Tu estuche», en la cesta y en el pop-up.
- Todo lo demás es callado: blanco, negro y las fotos.

## Tokens
**Color**

| Token | Valor | Uso |
|---|---|---|
| Papel | `#FFFFFF` | Fondo de la página |
| Ficha | `#EFEEEB` | Fondo de las fotos de producto (como Arena Roja) |
| Tinta | `#000000` | Texto, botones, barra superior |
| Gris | `#76736D` | Texto secundario, precios tachados |
| Línea | `#E2E0DB` | Bordes |
| Nácar | degradado `#F1E6F6 → #E2EDF6 → #F5EDE1 → #E6F2EC` | Solo el hueco del regalo y sus acentos |

**Tipografía**
- **Bricolage Grotesque** (Google, variable): titulares y logotipo. Grande y apretada, en minúsculas de frase.
- **Instrument Sans**: texto, precios y botones.
- Nada de mayúsculas espaciadas en las etiquetas ni de palabras sueltas en cursiva.

**Formas**
- Las fotos van rectas, sin esquinas redondeadas.
- Los controles son píldoras.
- El estuche tiene esquinas de 16 px, como un estuche de verdad.

## Ficha (lo primero que ve quien viene de Meta)
```
[barra negra: Elige 3, paga 2 · Envío gratis en 24/48 h]
[≡   maison nácar   bolsa]
[galería 4:5 a sangre · 1/6]
Collar Puntos de Luz                         49 €
Acero inoxidable con baño de oro 18k · Dorado ○ Plateado
┌ Tu estuche ─────────────────────────────────┐
│ [collar ✓] [brazalete ✓] [anillo · REGALO ✦]│  ← tocar un hueco lo quita o lo añade
│ 3 joyas · 94 €  (123 €)                     │
└─────────────────────────────────────────────┘
[ Añadir el estuche · 94 € ]   (píldora negra)
Sale en 24/48 h · Devolución hasta el 15-ene · Garantía de color 3 años
```
Debajo, en este orden:
1. Así queda puesto (huecos de foto).
2. La ficha técnica dibujada (medidas reales).
3. Tu joya de siempre vs Maison Nácar.
4. Opiniones (interruptor).
5. Preguntas.
6. Barra fija «Añadir · 94 €».

## Home
1. Portada a sangre (hueco de foto 4:5 o 16:9) con «Elige 3. Paga 2.» en grande y el estuche brillando.
2. Pestañas Collares · Pulseras · Pendientes · Anillos con un carrusel compacto de joyas, cada una con su «Añadir al estuche».
3. Conjuntos ya hechos (2).
4. Así se lleva (tira de fotos POV, en huecos).
5. Tu joya de siempre vs Maison Nácar.
6. Opiniones (interruptor).
7. Preguntas.
8. Firma gigante «maison nácar» al pie.

## Revisión contra lo genérico
- Fondo crema + serif + dorado (v17/v19) → **sustituido** por blanco, grotesca y fichas grises. Es lo que hacen las referencias y es lo contrario de lo anterior.
- Etiquetas en mayúsculas espaciadas sobre cada título → **eliminadas**; los títulos hablan solos.
- Acento de color → **no hay color de acento plano**; el único color es el tornasol del nácar, y solo en el regalo.
- Tarjetas redondeadas con sombra por todas partes → **solo** el estuche tiene esquinas; lo demás es plano.

## Huecos de foto (Gemini)
Cada hueco sin foto muestra su número, qué va y su proporción: «Foto 04 · Conjunto puesto · 4:5». Los prompts están en `PROMPTS_FOTOS_TIENDA_V20.md`.
