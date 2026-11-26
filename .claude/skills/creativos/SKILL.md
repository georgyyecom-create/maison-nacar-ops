---
name: creativos
description: Crear ángulos, textos de Meta y prompts de Gemini para anuncios estáticos y vídeos de la tienda activa (ahora Zentia, masajeador de cuello con calor). Úsala cuando haya que hacer creativos, copies o ideas de anuncios.
---

# Creativos

## Briefing (Zentia, masajeador de cuello)
- **Público:** España peninsular y Baleares, 35–65 años, y los hijos que regalan a sus padres. Mucho Android y Facebook.
- **Tono:** cercano y claro, letra grande, palabras sencillas («cuello», «nuca», «calor suave»; evitar «cabezal» sin explicarlo).
- **Producto real:** blanco por fuera, gris oscuro por dentro, forma de U, **6 cabezales en dos filas de 3**, la segunda rama va **hacia abajo**, en la base del cuello. 15×15×6 cm, 168 g. No está confirmado que los 6 cabezales den calor: decir «6 cabezales» y «calor suave» por separado.
- **Oferta (BF):** Kit 69,90 € (2 masajeadores + almohadilla de gel + envío gratis) o 1 a 49,90 € + 4,95 €. Pago al recibirlo. Hasta el 30-nov.

## Ángulos que funcionan (datos propios y de la competencia)
1. **Pizarra** con problema → explicación (nuestro mejor CTR: 5,3 %).
2. **Regalo:** «uno para ti y otro para tu madre/padre».
3. **Ritual:** «tus 15 minutos al llegar a casa».
4. **Oferta clara:** precio del kit, envío gratis, pago al recibirlo, fecha real de fin.

## Formato de salida para cada creativo
- Nombre: `ZN_<ángulo>_<formato>`.
- **Un solo prompt completo para Gemini** (en inglés), con: imagen de referencia del producto real que adjuntar, descripción exacta del producto (ver arriba), escena, **texto en español entre comillas** con tipografía y posición. En 9:16, libre el 14 % de arriba y el 20 % de abajo.
- Copy de Meta: 2 textos principales, 2 títulos (≤ 6 palabras), 1 descripción.

## Reglas
- El producto, **idéntico al real**. Si Gemini lo cambia, se repite; nunca se lanza un anuncio con otro producto (con contra reembolso = rechazos).
- Las imágenes las hace Gemini (o fotos reales); no montarlas yo.
- Nada de «alivia el dolor», «cura», médicos ni curas (política de salud de Meta).
- Personas de IA: nunca «clientas reales» ni testimonios inventados. Sin reseñas ni cifras falsas.
- Sin «−X %» ni tachados que no sean un precio real cobrado (Ómnibus).
- Lotes de 3–5, variando el ángulo, no solo el color.
