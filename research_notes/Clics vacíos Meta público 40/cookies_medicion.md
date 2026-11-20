# Banner de cookies en España/UE y medición (píxel de Meta, CAPI, Shopify Analytics)

Notas de investigación (20-nov-2026). Fuentes: documentación de Shopify, Google y AEPD, blogs de despachos y de proveedores (avisado cuando lo son). No es asesoramiento legal.

## 1. ¿El banner de Shopify / Customer Privacy API bloquea el píxel de Meta y las sesiones de Shopify Analytics hasta el consentimiento? ¿Qué pasa con CAPI en «Máximo»?

### Takeaway
Sí. En las regiones con banner (EEE y Reino Unido), Shopify solo recoge datos no esenciales después del consentimiento. Eso afecta a sus propios informes de sesiones y a los píxeles de apps, como el de Meta. Las apps de píxel se cargan solo si el visitante acepta todas las finalidades que declaran (normalmente analítica y marketing). No encontré ninguna fuente oficial de Shopify o de Meta que diga con claridad si los eventos de servidor (CAPI) del canal «Facebook & Instagram» se envían sin consentimiento. Las guías de terceros dicen que siguen las mismas reglas de consentimiento que el píxel. Meta no tiene ningún campo de consentimiento UE en CAPI.

### Cited Findings
- En las regiones con banner (EEE, Reino Unido), Shopify dice: «Non-essential data is collected only after obtaining consent». Avisa de que esto «might reduce data available for analytics, marketing, and personalization» y puede verse como menos sesiones y una tasa de conversión más baja. — [Shopify Help: Privacy settings](https://help.shopify.com/en/manual/privacy-and-security/privacy/customer-privacy-settings/privacy-settings)
- La página de discrepancias de analítica de Shopify confirma que, con el banner activo en una región, los datos de esos visitantes se recogen solo después del consentimiento. Es una causa reconocida de discrepancias. — [Shopify Help: Analytics discrepancies](https://help.shopify.com/manual/reports-and-analytics/discrepancies)
- Las tiendas nuevas con mercados activos en el EEE o el Reino Unido pueden tener el banner configurado automáticamente para esas regiones. — [Shopify Help: Privacy settings](https://help.shopify.com/en/manual/privacy-and-security/privacy/customer-privacy-settings/privacy-settings)
- Web Pixels API: cada pixel de app declara en `[customer_privacy]` las finalidades que necesita (`analytics`, `marketing`, `preferences`, `sale_of_data`). El gestor de píxeles de Shopify «will only load your pixel if there is visitor permission for all of the settings» declarados. — [shopify.dev: Pixel privacy](https://shopify.dev/docs/api/web-pixels-api/pixel-privacy)
- Customer Privacy API: los métodos son `analyticsProcessingAllowed()`, `marketingAllowed()`, `preferencesProcessingAllowed()` y `saleOfDataAllowed()`. En las regiones que exigen consentimiento, las finalidades no esenciales están desactivadas por defecto hasta que el visitante acepta. La exclusión de «venta de datos» funciona aparte del consentimiento. — [shopify.dev: Customer Privacy API](https://shopify.dev/docs/api/customer-privacy)
- Niveles de datos del canal de Meta en Shopify: Estándar = solo píxel (los bloqueadores lo pueden parar). Mejorado = añade CAPI (de servidor a servidor, «can't be blocked by browser-based ad blockers») y comparte nombre, ubicación, email y teléfono. Máximo = las mismas herramientas «updated with Facebook's latest advertising technology». La página no dice nada sobre el banner ni el consentimiento. — [Shopify Help: Facebook data sharing](https://help.shopify.com/en/manual/promoting-marketing/analyze-marketing/meta-data-sharing)
- Guías de terceros: con el banner de Shopify activo en la UE, los datos se envían solo después del consentimiento, y CAPI sigue las mismas reglas que el píxel. No pude verificarlo en Shopify. — [whymatters.co.uk](https://whymatters.co.uk/blog/meta-pixel-shopify); [adynic.com](https://adynic.com/blog/meta-conversions-api-shopify)
- Un proveedor (Adnabu, sobre su propia app) dice que si el comprador rechaza marketing no se envían eventos a Facebook (ni por navegador ni por CAPI) y no se crean las cookies `_fbp`/`_fbc`. — [Adnabu help](https://help.adnabu.com/en/article/y5ho5d/)
- La referencia de eventos de servidor de CAPI no tiene parámetro de consentimiento UE. `data_processing_options: LDU` sirve solo para estados de EE. UU., y `opt_out` limita el evento a atribución, pero no es una señal de consentimiento. Para la UE la decisión es binaria: se envía o no se envía. Es un blog de proveedor (WeltPixel). — [WeltPixel: Black Friday in the EU](https://weltpixel.com/blogs/news/black-friday-in-the-eu-what-your-consent-banner-hides-from-meta-and-google-ads)
- La guía GDPR del píxel de Meta recomienda `fbq('consent','revoke')` en cada página y `grant` cuando el usuario acepta. — [Meta for Developers: GDPR](https://developers.facebook.com/docs/meta-pixel/implementation/gdpr)
- Algunos comerciantes dicen en el foro que la app de Facebook crea `_fbp` antes del consentimiento y que el banner nativo no bloquea ciertas cookies en la primera carga. Es anecdótico y no está verificado. — [Shopify Community: Native Cookie Banner](https://community.shopify.com/t/shopify-native-cookie-banner/355471/4)
- Cookiebot (soporte para Shopify): que bajen las sesiones medidas al instalar un CMP es lo esperado. Las sesiones de quien rechaza salen como «Direct» o no se cuentan. Shopify Analytics puede mostrar algo más que GA4. — [Cookiebot Shopify support](https://shopify-support.cookiebot.com/hc/en-us/articles/26202074067356)
- Desde el 21-sep-2026 Shopify cambió cómo mide las sesiones: cierre tras 30 min de inactividad, bots filtrados por defecto y nueva base de comparación. Pedidos y ventas no cambian. El aviso oficial no menciona el consentimiento. Un resumen de terceros dice que el estado de consentimiento afecta ahora a si una visita se cuenta, pero no lo encontré en el texto de Shopify. — [Shopify Changelog](https://changelog.shopify.com/posts/shopify-analytics-session-measurement-improvements); [Sherocommerce (no verificado)](https://sherocommerce.com/blogs/insights/shopify-fall-2026-edition)

### Inferences
- Con el banner de Shopify activo en España, un visitante que rechaza o no contesta no carga el píxel de Meta. Tampoco cuenta, o cuenta mal, en las sesiones de Shopify Analytics. Lo probable es que tampoco salga como evento CAPI si la app respeta la Customer Privacy API. El pedido sí queda registrado en Shopify, porque sale del checkout y no de una cookie.
- Poner «Máximo» no recupera eventos de quien no ha consentido. Mejora la coincidencia (EMQ) y protege frente a bloqueadores y frente a ITP en quien sí aceptó. Esto encaja con los datos de la casa: el píxel recibe Purchase por servidor con calidad 8/10.
- Enviar CAPI sin consentimiento para «saltarse» el banner sería contrario a la LSSI art. 22.2 y al RGPD. Además, CAPI no tiene ninguna bandera de consentimiento UE que lo haga legal.

### Gaps
- No hay ningún texto oficial de Shopify ni de Meta que diga exactamente qué hace el canal «Facebook & Instagram» con los eventos de servidor (PageView, ViewContent, Purchase) sin consentimiento de marketing en el EEE. Habría que comprobarlo en el Administrador de eventos: comparar Purchase de navegador y de servidor con los pedidos de Shopify.
- Tampoco hay una fuente oficial sobre si Shopify Analytics cuenta alguna señal mínima (sin cookie) del visitante que rechaza. Las fuentes no coinciden: Cookiebot dice que Shopify puede contar algo más que GA4; WeltPixel dice que baja igual.

## 2. Tasas de aceptación típicas en España/UE y pérdida estimada

### Takeaway
En España, en 2024, el banner obtuvo alguna respuesta en el 70 % de los casos («consent rate»), pero solo el 49 % de las veces se aceptó de verdad («opt-in rate», según Didomi). En Europa, en 2026, el opt-in va del 56 al 68 % y entre el 22 y el 27 % de la gente no elige nada. En moda y joyería el opt-in es del 55,4 %. Con un banner de Shopify bien configurado, se pierde para el píxel y para las sesiones entre el 30 y el 50 % de los visitantes españoles.

### Cited Findings
- Didomi, España 2024: «consent rate» 70 % de los banners mostrados y «opt-in rate» 49 %. España aparece con tasas relativamente altas frente a otros países. — [Didomi: Consent collection in Spain 2024 (PDF)](https://business.didomi.io/hubfs/Didomi-Consent-collection-in-Spain-in-2024.pdf), resumido a partir del resultado de búsqueda (no pude abrir el PDF entero: es demasiado grande).
- Didomi 2026 (citado por WeltPixel): en Europa, consent rate del 75,1 al 89,3 %, opt-in del 55,7 al 67,6 % y «no choice» del 21,7 al 27,4 %. En Fashion & Jewelry, 78,0 % de consent y 55,4 % de opt-in. — [WeltPixel](https://weltpixel.com/blogs/news/black-friday-in-the-eu-what-your-consent-banner-hides-from-meta-and-google-ads)
- En 2025, el 72,9 % de los internautas en España rechazó el uso de sus datos para publicidad, frente a una media UE del 58,8 %. Mide algo distinto a la aceptación del banner. — [Searchlab: Privacy & GDPR statistics 2026](https://searchlab.nl/en/statistics/privacy-gdpr-statistics-2026)
- Media global del 64 % de consentimiento en 2026, sin desglose para España. — [trusty-web](https://trusty-web.pages.dev/blog/cookie-consent-rates-europe-2026)
- Usercentrics, informe de 2026: el «aceptar todo» cae el doble de rápido de lo que sube. — [DesignRush](https://news.designrush.com/usercentrics-state-digital-trust-2026-accept-all-decline)
- Google: los usuarios que consienten «are typically 2-5x more likely to convert than unconsented users». Por eso la pérdida en compras es menor en porcentaje que la pérdida en visitas. — [Google Ads Help: consent mode modeling](https://support.google.com/google-ads/answer/10548233)
- Ejemplo hipotético de WeltPixel: con un 58 % de opt-in, una tienda de 2.000 pedidos al mes en la UE perdería los eventos de navegador de unos 840 pedidos. — [WeltPixel](https://weltpixel.com/blogs/news/black-friday-in-the-eu-what-your-consent-banner-hides-from-meta-and-google-ads)

### Inferences
- Para una tienda española de moda o joyería con el banner bloqueando de verdad, el píxel solo ve a uno de cada dos visitantes aproximadamente (opt-in ~49–55 %). Ahí entran quienes rechazan y quienes cierran o ignoran el banner. En móvil, con un banner compacto, el «no choice» puede ser mayor.
- Para Maison Nácar/Zentia: si solo el 13–29 % de los clics se convirtió en LPV, el banner no lo explica todo. Si el consentimiento fuese la única causa, el LPV rondaría el 50–70 % de los clics. El resto apunta a toques sin querer (Reels), a la carga lenta (~4 s) o a rebotes antes de que se cargue el píxel.

### Gaps
- No encontré datos de España separados por móvil y ordenador ni por sector para 2025–2026 (el informe Didomi España 2024 no se pudo abrir entero).
- No hay ningún dato publicado de cómo cambia el consentimiento durante el Black Friday.

## 3. ¿El «landing_page_view» de Meta depende del píxel? ¿Cuenta sin consentimiento?

### Takeaway
Sí. La visita a la página de destino de Meta cuenta un clic en el enlace del anuncio seguido de la carga de la página, y esa carga se mide con el PageView del píxel. Si el visitante no acepta (o no responde) y el píxel no se carga, Meta no registra esa LPV, aunque la persona sí llegó a la web. Según un blog, ya se puede optimizar a LPV sin píxel, con modelado estadístico; Meta no lo confirma de forma directa.

### Cited Findings
- Definición: número de veces que alguien hizo clic en el enlace de un anuncio y la página de destino se cargó bien. «To report on landing page views, you must have the Facebook pixel implemented on your webpage.» — [Intercom/DeepDivr: Landing page views](https://intercom.help/deepdivr/en/articles/3789504-landing-page-views)
- Los clics en el enlace cuentan todos los toques, se abra o no la página. Las LPV solo cuentan cuando la página lanza el evento base del píxel, que necesita renderizarse en el navegador. Una referencia habla del 70–90 % de los clics; otra, del 80–95 % en cuentas sanas. — [theadspend.com](https://theadspend.com/blog/landing-page-views); [lilachbullock.com](https://www.lilachbullock.com/landing-page-views-facebook-ad-reports/)
- Jon Loomer: Meta deja optimizar a «maximizar visitas a la página de destino» sin píxel. Cita un texto de Meta según el cual, cuando faltan datos o están incompletos, «statistical modeling may be used». No pude abrir el artículo (403); es una información secundaria. — [Jon Loomer](https://www.jonloomer.com/qvt/landing-page-views-no-longer-require-a-pixel/)

### Inferences
- Rechazar el banner = el PageView no se dispara = no hay LPV registrada. La relación clic → LPV de Meta en España queda a la baja: nunca puede pasar del opt-in más los visitantes no sujetos al banner.
- Para saber cuántos llegan de verdad, hay que comparar los clics en el enlace de Meta con las sesiones de Shopify que tienen `utm_source=facebook/instagram`. Aun así, también falta en Shopify parte de quien rechaza, así que la mejor referencia objetiva es: pedidos (Shopify) / gasto.

### Gaps
- No pude abrir la definición oficial y actual de Meta (la URL del Centro de ayuda daba 404). Tampoco encontré ninguna confirmación oficial de que Meta modele LPV cuando falta el consentimiento en la UE.

## 4. Diseño de banner que sube la aceptación de forma legal (AEPD) y banners compactos en móvil

### Takeaway
La AEPD (guía actualizada el 11-jul-2023, de obligado cumplimiento desde el 11-ene-2024) pide un botón «Rechazar» en la primera capa, con la misma visibilidad, tamaño, color y formato que «Aceptar». Prohíbe activar cookies no esenciales antes de aceptar, las casillas premarcadas y los patrones engañosos. El consentimiento dura como mucho 24 meses. Dentro de esas reglas, lo único legal es la claridad: un texto breve y honesto, que el banner aparezca a tiempo, la marca visible y la configuración por categorías. Nunca destacar «Aceptar» frente a «Rechazar».

### Cited Findings
- La AEPD actualizó la guía el 11-jul-2023 para adaptarla a las directrices del CEPD sobre patrones engañosos. Los criterios nuevos se aplican desde el 11-ene-2024. — [Cuatrecasas](https://www.cuatrecasas.com/es/spain/propiedad-intelectual/art/entra-vigor-nuevo-criterio-aepd-uso-de-cookies); [nota AEPD](https://www.aepd.es/prensa-y-comunicacion/notas-de-prensa/aepd-actualiza-guia-cookies-para-adaptarla-a-nuevas-directrices-cepd)
- Hace falta un botón de rechazo equivalente al de aceptar en la primera capa. Los dos deben estar al mismo nivel y en formato destacado, sin que rechazar sea más complicado. No se puede resaltar «Aceptar» ni cambiar la letra o el tamaño de «Rechazar». — [Cuatrecasas](https://www.cuatrecasas.com/es/spain/propiedad-intelectual/art/entra-vigor-nuevo-criterio-aepd-uso-de-cookies); [Fieldfisher](https://www.fieldfisher.com/es-es/locations/espana/actualidad/cambios-en-el-uso-de-cookies-a-partir-de-2024)
- La primera capa identifica al responsable y enlaza a la política de cookies. Hay que dejar aceptar o rechazar por categorías. Ninguna cookie no esencial se activa antes de «Aceptar». No se puede bloquear el acceso a cambio de cookies (cookie wall) sin una alternativa razonable. El consentimiento dura 24 meses como máximo. — [Lawwwing: guía 2026](https://lawwwing.com/cookie-banner-rgpd-espana-guia-2026/)
- Sanciones de la AEPD por banners: Wallapop, 3.000 € (cookies antes de decidir y «Rechazar todo» que no funcionaba); MaxPower, 1.600 € (sin rechazo operativo); El Debate, 3.000 € (revocar era difícil). — [Lawwwing](https://lawwwing.com/cookie-banner-rgpd-espana-guia-2026/)
- La guía de la AEPD es un criterio de interpretación que la AEPD aplica en sus procedimientos sancionadores, aunque no es una norma con rango de ley. — [Legiscope](https://www.legiscope.com/blog/bandera-cookies-aepd-conformidad-2026.html)
- Recomendación de proveedores: medir a la vez la consent rate y el opt-in rate, y revisar el registro de consentimientos (30 días) para fechar caídas. — [WeltPixel](https://weltpixel.com/blogs/news/how-to-tell-if-your-consent-banner-is-silently-erasing-your-analytics); [Consentmo: consent analytics](https://www.consentmo.com/blog-posts/how-to-use-consent-analytics-to-improve-your-cookie-banner)

### Inferences
- Lo que se puede tocar legalmente para que acepte más gente: un texto corto y en lenguaje llano que explique para qué sirve (p. ej., «para saber qué anuncios te traen y no enseñarte publicidad repetida»), el tono de la marca, un banner que no tape el precio ni el botón de compra (los dos botones visibles en 1 línea en móvil), «Configurar» como tercera opción y no volver a preguntar antes de tiempo.
- Banner compacto en móvil: es legal mientras «Rechazar» y «Aceptar» sean iguales y estén en la primera capa. Un banner que solo se cierra con una «X» o que se cierra al hacer scroll no vale como consentimiento.
- Esto conecta con lo hecho en la tienda: el banner a 1 línea (v20.13/v20.19) debe mantener los dos botones iguales.

### Gaps
- No encontré ninguna fuente para España con datos A/B de cuánto sube el opt-in con cada cambio legal (texto, posición).
- No hay reglas específicas de la AEPD para móvil, aparte de las generales.

## 5. Alternativas para medir el tráfico real: UTM, servidor/sin cookies, Consent Mode de GA4, encuestas, modelado de Meta

### Takeaway
Los expertos aceptan perder parte de la visibilidad y triangulan con lo que no depende de cookies: los pedidos de Shopify (siempre completos), las UTM en la URL del pedido o en la página de llegada (cuando hay consentimiento), la encuesta posterior a la compra «¿Cómo nos conociste?», el modelado de Google (Consent Mode avanzado, con un umbral de clics alto) y el de Meta. La métrica central para decidir es el MER, ventas de Shopify entre el gasto total, y no las LPV o las compras que reporta Meta.

### Cited Findings
- Los pedidos salen del registro del checkout y no de una cookie, así que el consentimiento no los borra. Regla para leer los datos: si los pedidos se mantienen y las sesiones caen, el fallo está en la medición; si caen los dos, es la demanda. — [WeltPixel](https://weltpixel.com/blogs/news/how-to-tell-if-your-consent-banner-is-silently-erasing-your-analytics)
- Con el consentimiento denegado, Consent Mode de Google envía pings sin cookies («never used to track individual users») y permite modelar conversiones. Requisitos: consent mode o TCF v2.0 bien implementados y «700 ad clicks over a 7 day period, per country and domain grouping». Los modelos se entrenan durante un tiempo antes de dar datos. — [Google Ads Help](https://support.google.com/google-ads/answer/10548233)
- El modo básico solo recibe un modelo general; el avanzado puede tener uno propio del anunciante. — [WeltPixel](https://weltpixel.com/blogs/news/black-friday-in-the-eu-what-your-consent-banner-hides-from-meta-and-google-ads)
- Encuestas posteriores a la compra (HDYHAU): Fairing y KnoCommerce las presentan como atribución declarada por el cliente que complementa a los píxeles desde iOS 14 (esto lo dicen los propios proveedores). — [Fairing](https://fairing.co/blog/the-post-purchase-survey-marketing-attribution-tool); [KnoCommerce](https://knocommerce.com/blog/marketing-attribution-2026/); [adtribute directory](https://www.adtribute.io/directory/fairing)
- Diseño de la encuesta: «¿Cómo nos conociste por primera vez?» frente a «¿Qué influyó más?» puede mover la atribución un 15–25 %, y la primera opción de la lista sale inflada un 8–12 %. Son cifras sin estudio citado. — [8139causal](https://8139causal.github.io/measurement/surveys/)
- Desde el 21-sep-2026 hay que tomar las métricas de sesión de Shopify como una base nueva. Pedidos y ventas no cambian. — [Shopify Changelog](https://changelog.shopify.com/posts/shopify-analytics-session-measurement-improvements)

### Inferences
- Con el volumen de Zentia (40 €/día), el modelado de Google no aplica (no llega a 700 clics/semana por país), y tampoco hay campañas de Google. El de Meta es opaco.
- Plan práctico y legal: (1) pedidos de Shopify / gasto de Meta = CPA real; (2) una pregunta obligatoria y sencilla después de la compra («¿Dónde nos viste?» con Instagram, Facebook, TikTok, un amigo u otro; opciones en orden aleatorio); (3) UTM en cada anuncio (ya se hace), leídas en el informe de pedidos por referente o página de llegada; (4) códigos de descuento o enlaces distintos por anuncio si se quiere atribuir sin cookies; (5) en Meta, mirar los clics en el enlace frente a los pedidos y no fiarse solo de las LPV.
- Los eventos de CAPI con consentimiento siguen siendo valiosos (calidad de coincidencia y deduplicación). No sirven para recuperar a quien no ha consentido.

### Gaps
- No encontré ningún estudio independiente que mida cuánto infrarreporta Meta frente a las encuestas en España.
- No hay documentación pública de Meta sobre «modeled conversions» para usuarios de la UE sin consentimiento a la que pudiera acceder en esta búsqueda.

## 6. ¿Se pueden contar visitas sin consentimiento de forma legal en España (analítica exenta)?

### Takeaway
Sí, pero con límites estrictos. En enero de 2024, la AEPD publicó la «Guía sobre el uso de cookies para herramientas de medición de audiencia». Según esa guía, quedan exentas de consentimiento las cookies o la medición cuya única finalidad sea medir la audiencia del propio editor y producir estadísticas anónimas. Deben hacerse en nombre exclusivo del editor, sin cruzar datos con otros tratamientos ni cederlos a terceros, y sin seguimiento entre sitios. Hay que informar, limitar la vida de la cookie y conservar los datos 25 meses como máximo. Meta, Google Ads y GA4 en su configuración normal no cumplen esas condiciones.

### Cited Findings
- La guía de enero de 2024 complementa a la de julio de 2023. La finalidad debe limitarse a lo estrictamente necesario para medir. No se pueden reutilizar los datos para otros fines. El tratamiento se hace en nombre exclusivo del editor, solo para estadísticas anónimas. Los servicios que comparten datos entre varios editores no entran en la exención simple. — [AEPD: Guía cookies medición de audiencia (PDF)](https://WWW.AEPD.ES/guias/guia-cookies-analiticas-externas.pdf); [ECIJA](https://files.griddo.ecija.com/ecija-aedp-cookies-audiencias.pdf); [Finreg360](https://finreg360.com/alerta/la-aepd-publica-la-guia-uso-de-cookies-para-herramientas-de-medicion-de-audiencias/)
- Condiciones según iubenda: el objetivo principal y exclusivo es medir la audiencia; no comparar con otros tratamientos ni ceder datos a terceros; no hacer seguimiento agregado de la navegación entre sitios; informar a los usuarios (p. ej., en la política); vida útil limitada sin renovación automática en cada visita; conservación máxima de 25 meses, con revisión periódica. — [iubenda](https://www.iubenda.com/es/blog/understanding-the-spanish-dpa-guide-on-audience-measurement-cookies/)
- GA4 necesita consentimiento previo (LSSI art. 22.2), salvo una configuración anonimizada muy concreta que la AEPD reconozca. Esa configuración es poco habitual. — [Lawwwing](https://lawwwing.com/cookie-banner-rgpd-espana-guia-2026/)
- Aunque la analítica sea propia, hace falta consentimiento si se comunican datos personales a un tercero. Algunos despachos recomiendan pedirlo igualmente. — [Cuatrecasas: repaso de actualidad](https://www.cuatrecasas.com/es/spain/tecnologia-medios-digitales/art/cookies-repaso-actualidad-nuevas-obligaciones)
- Prensa del sector: la nueva guía podría dejar sin banner a miles de webs que solo usan medición exenta, aunque con dudas. — [Marketing4eCommerce](https://marketing4ecommerce.net/la-nueva-normativa-de-la-aepd-plantea-un-horizonte-sin-banners-de-cookies-para-miles-de-webs-en-medio-de-un-mar-de-dudas/)

### Inferences
- Opción legal para contar visitas reales sin consentimiento: una herramienta de analítica configurada como exenta y alojada o procesada solo para la tienda (p. ej., una analítica sin cookies, sin ceder datos ni cruzarlos con anuncios). Sirve para saber cuántos llegan, pero **no** se puede enviar esa información a Meta ni usarla para optimizar o redirigir anuncios: eso ya es finalidad publicitaria y necesita consentimiento.
- Los registros del servidor y los pedidos (datos que se necesitan para dar el servicio) no necesitan consentimiento de cookies. Usarlos con fines publicitarios sí se rige por el RGPD.
- No es legal: disparar el píxel o CAPI antes del consentimiento, poner «Aceptar» más destacado, cerrar el banner al hacer scroll como si fuera aceptar, o meter las cookies de Meta como «necesarias».

### Gaps
- No pude leer el PDF completo de la AEPD (enero de 2024) para confirmar detalles técnicos: truncar la IP, transferencias internacionales o si hace falta un mecanismo de oposición.
- No encontré ninguna confirmación de que Shopify Analytics, en concreto, cumpla las condiciones de exención de la AEPD. Shopify lo trata como no esencial en el EEE.
