# Estrategia de test con un tope de 600 € (dropshipping, España, Meta Ads)

Notas de investigación del 16-nov-2026. Skills leídas y aplicadas como marco (se leyeron los SKILL.md, no se lanzaron con la herramienta Skill): `ads-math` (fórmulas, escenarios base/bajo/alto, sin inventar datos), `ads-budget` (las reglas fijas tipo «matar a 1× CPA» son heurísticas, no leyes; reserva frente a experimento), `ab-testing` (tamaño de muestra, no parar antes de tiempo, una variable por test), `offers` (ecuación de valor: la «probabilidad percibida», es decir la confianza, es la palanca rota), `cro` (propuesta de valor, confianza, fricción).

**Aviso sobre las fuentes:** casi todo lo de «practicantes» viene de blogs y vendedores de herramientas de dropshipping, no de estudios independientes. Se marca como tal. Los datos oficiales (UE, Tribunal Supremo, Shopify) se separan de las estimaciones.

---

## 1. Tienda general, de nicho o de un solo producto (2025–2026)

### Takeaway
No hay ningún estudio controlado que compare la conversión de los tres tipos con tráfico frío de Meta. El consenso de practicantes: **la tienda de un producto (o nicho estrecho) convierte mejor con un producto ya validado**, y la general sirve para probar muchos productos con poco trabajo. Para alguien cuyo problema fue la confianza, lo más sensato es una tienda de nicho con aspecto de marca y la ficha como landing de cada test.

### Cited Findings
- No se encontró un estudio con datos duros sobre la conversión de las tiendas de un producto frente a las generales con Meta. Lo que hay son artículos de opinión y referencias generales (búsqueda del 16-nov-2026). Ejemplo de vendedor, que no es neutral: [PagePilot](https://pagepilot.ai/blog/one-product-shopify-stores-vs-general-stores-which-converts-better).
- PagePilot: la de un producto suele convertir mejor si el producto está validado (menos distracciones, oferta clara), pero si el producto falla cae toda la tienda. La general va mejor para probar muchos productos y ángulos — [PagePilot](https://pagepilot.ai/blog/one-product-shopify-stores-vs-general-stores-which-converts-better)
- Si el anuncio vende un producto, mandar al usuario a otra página rompe la promesa del creativo. Además, la IA de Meta decide cada vez más a dónde llega el tráfico, a veces por encima de la URL elegida — [Pennock](https://www.pennock.co/blog/meta-shops-in-2026-how-brands-and-shoppers-actually-use-them-now-and-the-optimization-fight-nobody-talks-about)
- Advantage+ Shopping se llevó el 62 % del gasto en conversiones de e-commerce en 2025 (34 % el año anterior). Los anuncios de catálogo piden 50 productos o más, un píxel estable e idealmente CAPI — [Adworld](https://www.adworld.com.tr/en/adblog/meta-ads-strategy-by-sector)
- Shopify Payments puede retener una parte de los cobros en el sector del dropshipping. Caso real de la comunidad: retención del 20 % durante 120 días tras una «revisión estándar», sin contracargos; el equipo de Shopify explicó que el dropshipping alarga las entregas y eso sube el riesgo de contracargo. El hilo tiene más de 2 años — [Shopify Community](https://community.shopify.com/t/20-reserve-on-payouts-because-of-dropshipping/347340)
- La política oficial de Shopify menciona entre los motivos de retención los «sectores con plazos de entrega largos» y los picos repentinos de volumen — [Shopify Help Center](https://help.shopify.com/en/manual/payments/shopify-payments/payouts/reserves)
- Con más de un 0,9–1 % de contracargos se puede activar una revisión de pagos de 7 a 14 días — [PhotonPay](https://www.photonpay.com/hk/blog/article/shopify-dropshipping) (fuente secundaria)
- Que los datos no cuadren (por ejemplo, la tienda a nombre de una SL y la cuenta bancaria a nombre de una persona) puede bloquear los pagos — [ecomm.design](https://ecomm.design/shopify-payments-review/)

### Inferences
- **Sobre si Meta o Shopify Payments tratan peor a las tiendas generales:** no encontré nada que lo diga. El riesgo de retención viene de los plazos de entrega largos (China), de los picos de ventas y de los contracargos, no del tipo de tienda. Es una inferencia.
- **Reutilizar maisonnacar.com:** el dominio y el píxel ya están verificados y tienen historial, lo que ahorra configuración. Pero para un producto que no es joyería, la marca no encaja (choca con el creativo y quita confianza) y mezcla las señales del píxel. Opción razonable: **conservar la cuenta publicitaria 963612299940558, la página y el portfolio**, y crear un píxel o dataset y un dominio nuevos para el nuevo nicho (unos 10–15 €). No hay que tocar nada de Zentia. Es una inferencia: no encontré fuentes sobre la reputación de los dominios en Meta.
- Con 0 ventas y un fallo de confianza, la tienda general (sin marca, con productos mezclados) empeora justo la palanca que falló: la «probabilidad percibida» de la ecuación de valor de `offers`. Recomendación: **tienda de nicho** (un tema, 3–10 productos relacionados) en la que cada test lleve a su propia ficha-landing.
- El catálogo/ASC no tiene sentido con 3 productos (pide unos 50) ni con un píxel sin compras.

### Gaps
- Sin datos de conversión comparados entre tipos de tienda: todo es opinión.
- No hay fuentes de 2025–2026 sobre retenciones de Shopify Payments a tiendas españolas o europeas de dropshipping.

---

## 2. Cuántos productos, presupuesto por test, estructura y reglas de corte

### Takeaway
Los practicantes ponen **100–300 $ por producto** y piden gastar entre 2 y 5 veces el CPA objetivo antes de dar un veredicto. Con 600 € (unos 480–520 € para anuncios), lo honrado es **3 productos × ~150 €** con cortes por fases, o **2 × ~200 €** más una reserva de unos 100 € para el ganador. Estructura: **ABO, un conjunto por producto, público amplio, 3–5 creativos realmente distintos**.

### Cited Findings
- Presupuesto de test por producto, según la fuente: 50–150 $ y 3–5 días ([Ecomparkour](https://ecomparkour.com/blog/how-to-test-dropshipping-products-with-facebook-ads-in-2025)); 200–300 $ con 2–3 creativos ([Cometly](https://www.cometly.com/post/ad-analytics-for-dropshipping-stores)); 100–200 $ ([Dropshipping Champions](https://dropshippingchampions.com/blog/how-to-find-winning-products)); 210–490 $ en 7 días ([Shmroz](https://shmroz.info/?page=winning-products-guide)); 200–500 $ ([Astools](https://news.astools.app/en/blog/how-to-do-product-research-for-dropshipping)).
- Gastar entre 3 y 5 veces el CPA objetivo, con un mínimo de 75–150 $ por producto. Citan una mediana de CPA de 32,50 $ según Triple Whale — [Ecomparkour](https://ecomparkour.com/blog/how-to-test-dropshipping-products-with-facebook-ads-in-2025)
- No decidir antes de 2× el CPA objetivo; el veredicto firme llega a 4× el CPA. Un producto no está muerto hasta probar 4–8 ángulos — [Operators Library](https://operatorslibrary.com/course/kill-or-scale)
- Cortes rápidos: 50 $ gastados, más de 30 clics y 0 compras → apagar ([RoasPig](https://roaspig.com/blog/automated-rules-dropshippers/)). 0 carritos a los 30 $, CTR por debajo del 1 % o rebote por encima del 80 % → apagar ([AdRiseLab](https://adriselab.com/blog/dropshipping-product-testing-meta-ads-adriselab)). 0 carritos a los 50 $, o CPA por encima del de equilibrio a los 150 $ ([Dropshipping Champions](https://dropshippingchampions.com/blog/how-to-find-winning-products)).
- Validar antes de gastar y hacer microtests con un corte duro de 50 $ en la fase 1 — [Dropshipseek](https://dropshipseek.com/blog/how-to-test-dropshipping-products-2026)
- Estructura tras Andromeda: lo más común es probar en ABO y escalar en CBO. Con 20–50 £ al día, lo justo es un concepto por conjunto ABO ([Viralmojo](https://viralmojo.ai/playbook/creative-testing)). Para probar: ABO, un creativo por conjunto, 20–50 $ al día cada uno ([TheOptimizer](https://theoptimizer.io/blog/how-to-test-ad-creatives-on-meta-after-the-andromeda-update-2026-playbook)). 3–5 creativos por conjunto: con menos de 3 faltan datos y con más de 5 se reparten demasiado las impresiones ([Bind Media](https://bind.media/insights/meta-ads-creative-testing-the-2026-account-structure)).
- Andromeda agrupa en un solo «Entity ID» los anuncios con la misma plantilla y solo el texto cambiado. Los creativos tienen que ser conceptos distintos, y el público amplio supera a los intereses apilados — [Skaleit](https://skaleit.agency/blog/meta-ads-testing-structure-post-andromeda/)
- Señales de que un test va bien: CTR por encima del 1,5 % en frío, más del 3 % de añadidos al carrito, más del 1 % de compra y un CAC por debajo del 50 % del valor del pedido — [Yakkyofy](https://yakkyofy.com/finding-winning-products-for-your-dropshipping-business/)

### Inferences (plan propuesto; son heurísticas, según `ads-budget`)
- **Plan recomendado: 3 productos × 150 € (unos 450 € de anuncios) + unos 50 € de reserva.** Cada producto: un conjunto ABO, público amplio en España peninsular y Baleares, solo ubicaciones de Instagram y Facebook que ya funcionaron (feed + Stories; Reels fuera por los toques sin querer), 3–4 creativos distintos (POV, demostración del problema, unboxing real, comparativa), unos 25 €/día durante unos 6 días. Optimizar por **Compra** si el píxel lleva un historial mínimo; si no, por añadir al carrito solo en la primera fase. Cuidado: optimizar por visitas atrae a quien no compra.
- **Alternativa 2 × 200 € + 100 € de reserva**: más fiable estadísticamente por test, pero menos oportunidades. Con un CPA de equilibrio de ~15–19 €, 150 € equivalen a unas 8–10 veces ese CPA, dentro de la horquilla de 2–5× de los practicantes. Por eso **3 × 150 € es defendible**.
- **Cortes adaptados (CPA de equilibrio ≈ 15–19 €, ver el punto 4):**
  1. Fase 0 (antes de gastar): la web carga en menos de 3 s en 4G y más del 60 % de los clics en el enlace se convierten en visitas a la página de destino. Si no se llega, no se lanza: en la campaña anterior llegaba el 13 %.
  2. Anuncio: apagar si el CTR del enlace baja del 1 % tras unas 1.000 impresiones, o si el coste por visita supera 1 €.
  3. Producto: a 1× el CPA de equilibrio (unos 19 €) sin ningún carrito, cambiar el creativo o el ángulo. A 2× (unos 40 €) sin carritos, apagar el producto.
  4. A 4× (unos 75 €) con carritos y sin compras, revisar el checkout y la confianza. A 150 € con un CPA por encima del de equilibrio y sin tendencia a bajar, apagar.
  5. Ganador provisional: 3 o más compras con un CPA ≤ el de equilibrio. Se pasa la reserva a ese producto y se sube un 20 % cada 48 h.
- Tamaño de muestra (`ab-testing`): con 150 € no se puede «probar» nada con significación. Con un CPA real de 19 € se esperan unas 8 compras (probabilidad de 0 compras ≈ 0 %). Con un CPA real de 40 € se esperan unas 3,8 (probabilidad de 0 ≈ 2,4 %), según una aproximación de Poisson. Sirve para **descartar lo claramente malo**, no para afinar. Los A/B de la página quedan descartados: con un 1–3 % de conversión base harían falta miles de visitas por variante.

### Gaps
- No hay datos independientes que validen ninguna regla de corte concreta.

---

## 3. Qué se come el presupuesto dentro de los 600 €

### Takeaway
Fuera de los anuncios, el gasto se puede dejar en **unos 80–120 €** (Shopify en oferta, un dominio, 1–2 muestras y apps gratuitas), así que quedan **unos 480–520 € para Meta**.

### Cited Findings
- Shopify Basic en España: unos 36 €/mes pagando mes a mes y 22–27 €/mes pagando el año. Las fuentes no coinciden en si el IVA va incluido — [Berzerk](https://www.berzerk.es/herramientas/shopify), [ACC](https://ecommerce.acc.com.es/es/noticias/cuanto-cuesta-shopify-espana-desglose-real-que-pagina-precios-no-muestra), [Pango Studio](https://pangostudio.com/calculadora-precios-shopify/)
- Oferta de entrada: 3 días gratis y luego 1 (US$/€) al mes durante 3 meses (página oficial; desde aquí se ve en USD) — [Shopify precios](https://www.shopify.com/es/precios)
- Comisión de Shopify Payments en Basic con tarjeta europea: lo más citado es 2,1 % + 0,30 €. Hay fuentes minoritarias que dan 1,9 % + 0,25 € y 1,5 % + 0,25 €. Con una pasarela externa, Shopify añade un 2 % — [Pango Studio](https://pangostudio.com/calculadora-precios-shopify/), [Shopigurus](https://shopigurus.com/blog/shopify-payments-espana-guia/)

### Inferences (reparto propuesto)
| Partida | € | Nota |
|---|---|---|
| Shopify (oferta de 1 €/mes; ya tiene una tienda: valorar usar la misma con otro dominio) | 0–36 | Si la tienda actual ya paga el plan, el coste nuevo es 0 |
| Dominio nuevo | 10–15 | O reutilizar si el nicho encaja |
| Apps (reseñas reales tipo Judge.me gratis, nada de importar reseñas) | 0–15 | |
| Muestras de 2–3 productos (para fotos y vídeo reales) | 40–75 | Es la palanca de confianza número 1, ver el punto 6 |
| UGC / creativos | 0 | Los hace él con el producto real y la IA solo para editar |
| **Anuncios** | **~460–520** | |
| Colchón (devoluciones, contracargos, envíos de reposición) | 20–30 | |

### Gaps
- Precio exacto en euros del plan para España en nov-2026: las fuentes no coinciden, hay que comprobarlo en el admin.

---

## 4. Cálculo de equilibrio: producto de 39,99 € con un coste puesto en casa de 13 €

### Takeaway
Haciéndolo legal (con IVA), el margen de contribución de un pedido de 39,99 € es de **unos 14–19 €**. Eso deja un **CPA de equilibrio de ~14–19 €** y un **ROAS de equilibrio de ~2,1–2,8**. Con un 2 % de conversión, la visita real a la web tiene que costar como mucho **0,28–0,38 €**. Es muy justo para España, donde el clic medio ronda los 0,46 € y en la campaña anterior la visita real salía a unos 2,60 €. **Conclusión: con 39,99 € y un solo artículo apenas se cubre; hace falta subir el valor del pedido (packs, 2.ª unidad) o elegir un producto con más margen.**

### Cited Findings
- CPC medio en España: 0,46 € entre jul-2025 y jul-2026 (un 56 % por debajo del global); unos 0,35 € en nov-2025; subió a 1,13 € en jul-2026 — [Superads](https://www.superads.ai/facebook-ads-costs/cpc-cost-per-click/spain)
- CPM en España: 6,65 $ ([Lebesgue](https://lebesgue.io/facebook-ads/facebook-cpm-by-country)). Entre 3,50 y 9 €, y unos 7–9 € en el feed durante el cuarto trimestre ([AdLibrary](https://adlibrary.com/posts/meta-ads-spain-playbook-2026)).
- Conversión media de los anuncios de Meta en e-commerce: un 1,6 % (Triple Whale vía [Snow Media](https://thesnowmedia.com/resources/ecommerce-ad-benchmarks/)). Mediana del 1,53 % entre ago-2025 y jul-2026 ([Adamigo](https://www.adamigo.ai/blog/meta-ads-conversion-rate-benchmarks-industry-2026)). Son marcas establecidas, no tiendas nuevas.
- Comisión de Shopify Payments: 2,1 % + 0,30 € — [Pango Studio](https://pangostudio.com/calculadora-precios-shopify/)
- Desde el 1-jul-2026 hay un arancel de 3 € por cada categoría arancelaria de un paquete de menos de 150 € que entre en la UE (Reglamento (UE) 2026/382, hasta el 1-jul-2028) — [Consejo UE](https://www.consilium.europa.eu/en/press/press-releases/2026/02/11/council-gives-final-green-light-to-new-customs-duty-rules-for-small-parcels/), [Comisión](https://trade.ec.europa.eu/access-to-markets/en/news/eu-applies-eu3-customs-duty-item-low-value-e-commerce-consignments)

### Cálculo (`ads-math`; supuestos explícitos)
Fórmulas: margen de contribución (MC) = PVP sin IVA − coste puesto en casa − comisión de pago − otros. CPA de equilibrio = MC. ROAS de equilibrio = PVP con IVA / MC. CPC máximo = CPA de equilibrio × conversión (CVR).

| Escenario | Supuestos | MC = CPA de equilibrio | ROAS de equilibrio | CPC máx. al 1 % / 2 % / 3 % |
|---|---|---|---|---|
| Base legal | 39,99 € con IVA del 21 % → 33,05 € netos; coste 13 € (con el IVA de importación no recuperable incluido); comisión 1,14 € | **18,91 €** | **2,11** | 0,19 / 0,38 / 0,57 € |
| + arancel UE | + 3 € por artículo si viene de China y no va incluido en los 13 € | **15,91 €** | **2,51** | 0,16 / 0,32 / 0,48 € |
| Conservador | + 5 % del neto en devoluciones y reposiciones | **14,26 €** | **2,80** | 0,14 / 0,29 / 0,43 € |
| Sin IVA (no recomendado, irregular) | Ignora el IVA de la venta | 25,85 € | 1,55 | 0,26 / 0,52 / 0,78 € |

- Ojo: aquí «CPC» es el coste por **visita real** (visita a la página de destino), no por clic en el enlace. En la campaña anterior solo cargaba la web el 13 % de los clics: un CPC de enlace de 0,60 € equivalía a ~4,6 € por visita (el CLAUDE.md da ~2,60 € por visita en adviento). **Con eso no cuadra ningún producto.** Arreglar la carga de la web es lo primero.
- Ejemplo de valor de pedido más alto: un pack de 2 a 64,99 € deja 53,71 € netos − 26 € de coste − 1,66 € de comisión = **~26 € de MC** (sin arancel ni devoluciones), con un ROAS de equilibrio de ~2,5 pero con más margen en euros para pagar el CPA.

### Inferences
- Con un CPC de enlace de ~0,46 € y un 80–90 % de clics que llegan a la web, la visita sale a ~0,55 €. Para no perder dinero, la conversión tendría que ser ≥ 2,9 % (base) o ≥ 3,9 % (conservador). Es más que la media de las marcas establecidas (~1,5 %). **Es la razón principal para subir el valor del pedido o el margen** (buscar ≥ 20–25 € de MC por pedido, en línea con el criterio del dueño de «margen ≥ 20 €»).

### Gaps
- No sé si los 13 € incluyen el IVA de importación, el envío y el arancel: hay que confirmarlo con el proveedor.
- La tasa de gestión de 2 € por artículo desde el 1-nov-2026 (Reglamento Delegado 2026/2152) aparece solo en una fuente secundaria: **sin verificar**.

---

## 5. Probabilidad de encontrar un ganador con 2–4 tests

### Takeaway
Los practicantes dicen que hace falta **probar de 5 a 10 productos por cada ganador**, es decir, un 10–20 % de éxito por test. Con 3 tests eso da **~27–49 % de encontrar al menos uno**. Para un principiante con poco presupuesto por test, una estimación honrada es **~15–35 %**. Lo más probable es que los 600 € no encuentren ganador y den solo aprendizaje.

### Cited Findings
- Hay que probar de 5 a 10 productos para dar con 1 ganador rentable, con un 10–20 % de éxito «realista», que también es el de los mejores — [Copyfy](https://www.copyfy.io/en/blog/find-a-winning-product)
- Hay que probar de 5 a 10 productos antes de que uno escale con beneficio — [Yakkyofy](https://yakkyofy.com/finding-winning-products-for-your-dropshipping-business/)
- Hay que probar de 5 a 8 productos — [Dropbuild](https://www.dropbuild.com/blog/how-to-find-winning-dropshipping-products)
- Hay que probar de 5 a 10, lo que supone 1.000–5.000 $ en tests — [Shmroz](https://shmroz.info/?page=winning-products-guide)
- Más optimista: el primer ganador suele llegar en el intento 4 o 5, y conviene reservar 200–500 $ para 3–5 productos — AliShopping Tools, citado en la búsqueda de [HulkApps / agregados](https://www.hulkapps.com/blogs/ecommerce-hub/how-many-products-to-test-before-finding-a-winner-in-dropshipping)
- Todo son vendedores de herramientas o formación: tienen interés en que se pruebe mucho. No hay datos independientes.

### Cálculo (probabilidad de al menos un ganador, con los tests independientes: P = 1 − (1 − p)^n)
| p por test | 2 tests | 3 tests | 4 tests |
|---|---|---|---|
| 5 % (principiante, presupuesto corto) | 10 % | 14 % | 19 % |
| 10 % | 19 % | 27 % | 34 % |
| 20 % (practicante con experiencia) | 36 % | 49 % | 59 % |

### Inferences
- El p real de este caso probablemente baja por: un presupuesto por test en la parte baja, el problema de confianza todavía sin resolver, el cuarto trimestre caro (CPM de 7–9 €) y que «ganador» aquí significa ganar dinero con un MC de solo ~15–19 €. Y sube por: la experiencia en creativos y Meta, el CTR alto ya demostrado y la cuenta con historial. Estimación central: **~20–30 % con 3 tests**. Es una estimación, no un dato.
- El reparto 3 × 150 € es mejor que 2 × 250 €: suma una oportunidad más (+8–13 puntos) a cambio de algo más de ruido por test.

### Gaps
- No hay estadísticas independientes (por ejemplo, de Shopify o Meta) sobre la tasa de éxito de los tests de producto.

---

## 6. Palancas de confianza para una tienda con 0 ventas

### Takeaway
El paso de 0 a 5 reseñas reales es el salto de confianza más grande que está documentado. Las fotos y el vídeo reales, una política de devoluciones clara y los métodos de pago conocidos van detrás. El contrarreembolso en España es minoritario y caro: no compensa en el test.

### Cited Findings
- Spiegel Research Center: los productos con 5 o más reseñas tienen un 270 % más de probabilidad de compra que los que no tienen ninguna. El salto mayor está entre 0 y 5 reseñas. Las notas de 4,2–4,7 convierten mejor que un 5,0 (cifras vía fuentes secundarias; hay que comprobarlas en el informe original) — [Vettify](https://vettify.co/trust-signals/ecommerce), [Conversion Studio](https://conversion.studio/blog/social-proof-ecommerce)
- Baymard: de quienes abandonan la compra (sin contar a los que solo miran), en torno al 19 % no se fía de dar la tarjeta y el 13 % no está conforme con la política de devoluciones (las fuentes secundarias dan entre 17 y 25 %) — [Xictron](https://www.xictron.com/en/blog/trust-signals-ecommerce-conversion-boost-2026/), [FunnelFreaks](https://funnelfreaks.co/blog/trust-signals-for-ecommerce-conversions)
- Los sellos de seguridad funcionan mejor cerca del formulario de pago que en la ficha — [Goprecision](https://goprecision.co/blog/trust-signals-ecommerce/)
- Contrarreembolso en España: un 8–10 % de las compras online según datos atribuidos al ONTSI, y bajando ([Logistix](https://logistix.es/blog/contra-reembolso-ecommerce-por-que-no)). Otras fuentes dan un 15–25 % ([Andrey Business](https://www.andreybusiness.com/espana/dropi)). Entre el 10 y el 18 % de los pedidos contra reembolso se rechazan. Comisiones: SEUR 5,6 % (mínimo 7,09 €), Correos 3,50 € (guía antigua) — [Andrey Business SEUR](https://www.andreybusiness.com/blog/seur-espana-dropshipping-contra-entrega-2026), [Reviewdecurso](https://reviewdecurso.online/dropshipping-contrareembolso-guia-completa/)
- Klarna o similares para Europa — [CJ Dropshipping](https://cjdropshipping.com/blogs/dropshipping-knowledge/Shopify-Payment-Methods-For-Dropshippers)

### Inferences (ordenadas por impacto y coste, `cro` + `offers`)
1. **Producto real:** pedir una muestra, grabar un unboxing y una prueba de uso con el móvil y usarlos en la ficha y en los anuncios. La IA, solo como apoyo y etiquetada si es fotorrealista.
2. **Reseñas reales:** vender 3–5 unidades a conocidos a precio normal y pedirles reseña con foto mediante una app verificada. Sin importar reseñas de AliExpress (sería engañoso: Ómnibus/UCPD y la regla fija del proyecto).
3. **Política visible junto al botón:** el plazo de entrega real (si viene de China, decirlo: 7–12 días), la devolución en 30 días y quién paga el envío de vuelta, «¿llega dañado? otro gratis». Que la garantía sea concreta.
4. **Pagos:** tarjeta, Apple/Google Pay, PayPal y Klarna. **No** al contrarreembolso en el test: el 10–18 % de rechazos se come un MC de ~15 €.
5. **Dirección y contacto en España**, con un aviso legal real. Una dirección de devoluciones local solo si existe de verdad; no inventarla.
6. **Velocidad:** que cargue al menos el 80 % de los clics. En la campaña anterior era el 13 %: el problema era técnico o de las ubicaciones (Reels), no solo de confianza.

### Gaps
- No hay datos del ONTSI ni de la CNMC de 2025 sobre el contrarreembolso: la cifra del 8–10 % es de segunda mano.

---

## 7. Legal en España: alta de autónomo e IOSS

### Takeaway
No hay un umbral de ingresos que te exima: según el **TS (STS 941/2025, 10-jul-2025)**, cobrar menos del SMI es solo un indicio de que no hay habitualidad, y una tienda online abierta y con anuncios apunta a lo contrario. Con anuncios pagados y ventas recurrentes, lo prudente es darse de alta (con cuota reducida o tarifa plana) **antes de vender**, o como mínimo hacer el **alta censal en Hacienda (036/037)** y consultar a un gestor. Si se envía desde China: el IOSS es voluntario pero conviene usarlo (paquetes de ≤ 150 €), y **desde el 1-jul-2026 hay un arancel de 3 € por cada categoría de artículo**.

### Cited Findings
- STS 941/2025 (Roj STS 3484/2025): que los ingresos estén por debajo del SMI no excluye, con carácter general, la habitualidad; es un indicio que se pesa según la actividad — [Consultoría Bosch](https://consultoriabosch.com/es/noticia/sentencia-habitualidad-autonomos/), [idealista](https://www.idealista.com/news/fiscalidad/2025/12/16/876509-autonomos-el-supremo-aclara-como-influyen-los-ingresos-inferiores-al-smi-en-la-obligacion-de). Lectura contraria (rendimientos netos por encima del SMI como criterio): [CEOE Cuenca](https://www.ceoecuenca.es/portal/lang__es/rowid__2094616,60127/dTabID__1/tabid__25117/desktopdefault.aspx)
- Una tienda online abierta 24/7 es un indicio de actividad continua — [Datali Group](https://dataligroup.com/blog/abrir-tienda-online-sin-ser-autonomo/), [Asesoría Castro Urdiales](https://asesoriacastrourdiales.com/darse-de-alta-como-autonomo-si-los-ingresos-son-inferiores-al-smi/)
- «Si realizas una actividad habitual, directa y con ánimo de lucro, tienes que darte de alta… aunque no llegues al SMI» (ago-2026) — [COPE](https://www.cope.es/actualidad/economia/noticias/xavi-abat-experto-juridico-realizas-actividad-habitual-directa-animo-lucro-tienes-darte-alta-autonomo-no-llegues-salario-minimo-20260803_3414710.html)
- SMI de 2025: 1.184 € × 14 pagas = 16.576 € al año (la fuente dice 16.566). La cuota mínima por ingresos reales ronda los 200 € — [resultados agregados; Fisnexor](https://fisnexor.com/alta-autonomo-si-gano-menos-del-smi/)
- Todo envío que entra en la UE paga IVA desde el 1-jul-2021. El IOSS es voluntario para envíos de ≤ 150 €: el vendedor cobra el IVA al vender y lo declara cada mes (modelo 369). Por encima de 150 € hay importación normal. El IOSS no quita los aranceles. Sin IOSS, el cliente paga el IVA y un recargo del transportista, y puede rechazar el paquete. Obligaciones del GPSR como importador si el proveedor no tiene persona responsable en la UE — [Consultores Comercio Exterior](https://consultorescomercioexterior.es/dropshipping-en-2026-como-vender-desde-china-sin-perder-margen-por-aduanas-iva-y-pequenos-envios/), [Onlytax](https://onlytax.es/impuestos-dropshipping-espana/)
- Arancel fijo de 3 € por categoría arancelaria (subpartida) en los paquetes de < 150 €, del 1-jul-2026 al 1-jul-2028 (Reglamento (UE) 2026/382; aplicación por el Reglamento de Ejecución 2026/1200) — [Consejo UE, 11-feb-2026](https://www.consilium.europa.eu/en/press/press-releases/2026/02/11/council-gives-final-green-light-to-new-customs-duty-rules-for-small-parcels/), [Consejo UE, 12-dic-2025](https://www.consilium.europa.eu/en/press/press-releases/2025/12/12/customs-council-agrees-to-levy-customs-duty-on-small-parcels-as-of-1-july-2026/), [Comisión Europea](https://trade.ec.europa.eu/access-to-markets/en/news/eu-applies-eu3-customs-duty-item-low-value-e-commerce-consignments)
- Un dato erróneo detectado: Gestifis dice que la exención acabó el 1-jul-2025; lo correcto es 2021 — [Gestifis](https://gestifis.com/blog/errores-fiscales-al-hacer-dropshipping/)

### Inferences
- Para un test de 600 € con anuncios pagados, el riesgo de que la Seguridad Social le dé de alta de oficio y le reclame cuotas existe pero es bajo si factura poco. El riesgo fiscal (IVA, facturas) es más claro: vender a consumidores con IVA exige el alta censal. Recomendación: preguntar a un gestor por la tarifa plana (el CLAUDE.md la cita: 88,64 €/mes) **antes de la primera venta pagada**, y meter ese coste en la decisión de reinvertir, no en los 600 €.
- Comprar a proveedores de la UE o España (como Yehwang, en los Países Bajos) evita el IOSS y el arancel de 3 €, a cambio de un coste mayor. Con un MC de ~15–19 €, los 3 € del arancel suponen un 16–20 % del margen.

### Gaps
- No se verificó en fuentes oficiales (AEAT) si una persona física española sin alta puede usar el IOSS: en la práctica exige estar registrado en el IVA.
- La tasa de gestión de 2 € desde el 1-nov-2026 y posibles recargos nacionales españoles siguen sin verificar.
