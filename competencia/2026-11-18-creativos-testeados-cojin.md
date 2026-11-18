# Creativos ya testeados · cojín de rodillas (18-nov-2026)

**Fuente:**
- Apify `facebook-ads-scraper` (116 anuncios, ~0,56 $): anuncios activos y lanzados antes del 19-oct, es decir, con más de 30 días en marcha.
- Búsquedas: «knee pillow» (EE. UU.), «Kniekissen» (DE), «coussin genoux» (FR) y «cuscino ginocchia» (IT).
- En España, la Biblioteca de Meta (MCP) solo encuentra anuncios recientes (Calmavita y Mullidos, lanzados el 16-18 de noviembre). En España no hay ninguno testeado: hay hueco.

Imágenes en `creativos-cojin-2026-11-18/`, con la hoja `hoja.jpg` y los datos en bruto `apify-ads.json`.

## Ganadores (días activos = testeado)
| # | Marca | Días | Formato | Qué hace | Para Zentia |
|---|---|---|---|---|---|
| 1 | My Perfect Spine (EE. UU.) | **566** | Vídeo | «Still waking up in pain?» Texto largo: «sin apoyo entre las piernas, la columna se tuerce» | Ángulo del dolor al despertar |
| 2 | Mellow Sleep (EE. UU.) | **141** | Vídeo UGC | «The body pillow that finally fixed my numb arm». Lo lanzan **3 páginas** a la vez (Mellow, Heim Health, Anthony Moll) | Vídeo POV en la cama |
| 3 | Cellsius (DE) | **127** | Imagen de oferta | **El mismo cojín que el nuestro** (corazón con ribete azul). Fondo azul marino, caja llena de cojines, «Limitiertes Angebot» y código FB15. Va a un artículo sobre la ciática | Oferta BF en azul marino (sin cuenta atrás falsa) |
| 4 | Dr. André Scheller → Cellsius (FR) | **110** | Imagen de **pizarra** | Dibujo hecho a mano: «Lo que pasa en tu cuerpo cada noche: 1. la rodilla cae · 2. la pelvis se tuerce · 3. la columna se gira · 4. la cadera se comprime · 3:00 de la madrugada». Texto en primera persona y página del «doctor» | **El nº 1 para copiar la estructura**: nuestro ángulo de la pierna que cae |
| 5 | Cellsius (FR) | **106** | Imagen de oferta | «Dernière chance» + «Votre matelas n'est pas le problème» | Ángulo de la razón 4 del artículo |
| 6 | Chillow (FR) | **91** | Vídeo | «Les 3 erreurs quand on dort sur le côté»: cojín entre las rodillas, montón de almohadas, brazo bajo la cabeza | «3 errores» → almohada doblada |
| 7 | Chillow (FR) | 79 (×4 variantes) | DCO, 2 tarjetas | «Ce n'est pas votre matelas», «Réveil sans dos raide» y un experto a cámara («Il faut savoir») | Segundo anuncio con el colchón como gancho |
| 8 | Nordic Sleep / Fossflakes (DE) | 42 | DCO | «Ohne Unterstützung fällt das obere Bein nach vorne, das Becken rotiert» | Confirma nuestra razón 1 |
| 9 | MedCline (EE. UU.) | 43 | Vídeo | Un hombre en la cama explicándolo, al estilo UGC | Vídeo POV |

## Patrones que se repiten
1. **El mecanismo**: «la pierna de arriba cae → la pelvis gira → te despiertas cargado». Sale en 6 de 9 anuncios. Es el ángulo central.
2. **«No es tu colchón»**, en Chillow y Cellsius, durante más de 100 días. Valida la razón 4 del artículo.
3. **Pizarra o dibujo a mano** en lugar de foto: llama la atención, aguanta 110 días y es barato de hacer.
4. **Embudo hacia un artículo**: Cellsius, el doctor y Naylo usan páginas tipo «advertorial» → confirma que el artículo A/B es lo correcto.
5. **Oferta oscura** (azul marino, caja y producto) para el remarketing y para Black Friday.
6. **El vídeo UGC/POV** de alguien en la cama, en 3 marcas.

## Lo que NO copiamos (legal)
- Cuenta atrás falsa «00:13:47» y «se liquida el stock» (Cellsius): práctica engañosa. La nuestra es real (30-nov 23:59).
- «Ciática», «cortisol = 0», «elimina el dolor»: afirmaciones médicas.
- «Doctor» inventado, «60.000 clientes»: sin pruebas. Nada de batas ni de títulos.

## 6 anuncios para Zentia (de los testeados)
1. **Pizarra «Lo que le pasa a tu cuerpo cuando duermes de lado»** (copia la estructura del nº 4) → artículo A.
2. **«No es tu colchón»** (nº 5 y 7), con la foto A05 de los 899 € → artículo A.
3. **«3 errores al dormir de lado»** (nº 6), con la almohada doblada (A04) → artículo A.
4. **Radiografía** (A02, nuestra; ninguno la usa: diferencia) → artículo A.
5. **Oferta BF en azul marino**: pack de 2 + antifaz, contra reembolso y fecha real (nº 3) → ficha.
6. **Vídeo POV en la cama** (nº 2 y 9), con un clip del proveedor o grabado → artículo B.
