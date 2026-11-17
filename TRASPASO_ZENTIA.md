# Traspaso · Zentia (descanso) · 17-nov-2026

Para seguir en una sesión nueva. Leer junto a `CLAUDE.md`.

## Decisiones tomadas
- **Nicho:** descanso y bienestar (mayores de 45, senderismo, articulaciones). La compra suele ser un regalo para los padres.
- **Marca provisional:** «Zentia». Se monta en el mismo Shopify de Maison Nácar con plantilla y layout propios.
  - Falta decidir si se usa zentia.com: depende de que la tienda de Zentia en EE. UU. esté muerta.
  - No mezclar el píxel ni el catálogo de Zentia EE. UU.
- **Producto 1: cojín de rodillas para dormir de lado.**
  - Proveedor: AliExpress ELORIA, envío desde España. 1 ud 15,40 €, 2 uds 25,20 € (precios sin promo).
  - El dueño compró 1 muestra el 17-nov; llega entre el 18 y el 23-nov.
  - Preguntas para el vendedor: ver la conversación (envío sin factura, stock, límite por comprador, factura con NIF, medidas, funda, fabricante en la UE).
- **Oferta «Kit Dormir de Lado»** (`viabilidad/COJIN_OFERTA.md`):
  - Para 1: 39,90 €. Para 2: 64,90 €. Para 3: 84,90 €.
  - Plan de 7 noches en PDF, 60 noches de prueba, tarjeta regalo imprimible.
  - Sin reclamos médicos, sin tachados y sin «la más elegida».
- **Números:** margen medio ~27 €, CPA máximo ~27 €.
  - Para no perder hace falta un 3 % de conversión con visitas a 0,80 €.
  - Viabilidad realista con 600 €: 10–25 % (`viabilidad/ZENTIA_VIABILIDAD.md`).
- **Test rápido propuesto:**
  - Fase 1: 5–6 productos × 25–30 € para medir la señal (CTR, coste por visita, carritos).
  - Fase 2: 150–200 € para los 1–2 que pasen.
  - Otros candidatos: abridor de botes eléctrico, pinza recogedora, cojín para el coxis, rodillera con calor, calzador largo.

## Shopify (estado real)
- **Producto** «Kit Dormir de Lado»:
  - id `gid://shopify/Product/15985751621972`, handle `kit-dormir-de-lado`.
  - Estado UNLISTED. Publicado solo en la tienda online (no en Facebook) y fuera del 3x2.
  - Plantilla `descanso`.
  - Variantes: Para 1 `58394651361620`, Para 2 `58394651394388`, Para 3 `58394651427156`.
- **Tema v20.19 (Adviento)**, id `208968352084`, sin publicar. Archivos subidos:
  - `layout/zentia.liquid`
  - `sections/zn-descanso.liquid` (con `zn-money`: 39,90 €)
  - `templates/product.descanso.json`
  - `assets/zn.css` (incluye el banner de cookies compacto)
  - `snippets/zn-money.liquid` (ya subido)
- Sección con precios correctos (39,90 €) subida el 17-nov.
- **Vista previa:** https://maisonnacar.com/products/kit-dormir-de-lado?preview_theme_id=208968352084
- Código fuente de la ficha: carpeta `zentia-theme/`.

## Siguiente trabajo
1. (Hecho) Precios corregidos y captura del móvil con el píxel bloqueado.
2. `/impeccable init` para crear `PRODUCT.md` de Zentia. Después rediseñar la ficha con las skills impeccable, ui-taste, emil-design-eng, web-design-guidelines, ui-ux-pro-max, shopify-liquid-themes, copywriting y copy-editing.
3. Cuando llegue la muestra: fotos y vídeo reales, medidas, funda y plazo real.
4. Antes de vender:
   - política de devoluciones con 60 noches;
   - PDF del plan de 7 noches y tarjeta regalo;
   - alta de autónomo;
   - nombre y dominio definitivos.
