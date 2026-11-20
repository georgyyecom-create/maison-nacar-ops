# Clics vacíos en Meta Ads: causas y diagnóstico (CTR 8–14 %, LPV 2–5 % de los clics)

## 1. Definiciones oficiales de Meta: clics (todos), clics en el enlace, clics salientes, visitas a la página de destino

### Takeaway
Según Meta, un «clic en el enlace» se cuenta en el momento del toque sobre CUALQUIER parte del anuncio que lleve al destino (texto, icono y nombre del perfil, superposiciones, imagen/vídeo o botón), y no exige que la web cargue. La «visita a la página de destino» (LPV) solo se cuenta cuando la web carga (detectada por el navegador integrado de Meta o por el píxel) y puede estar modelada. En un anuncio de imagen única hacia web, tocar la imagen cuenta como clic en el enlace Y como clic saliente; ampliar la foto a pantalla completa solo entra en «Clics (todos)».

### Cited Findings
- **Clics en el enlace (Link clicks)**, definición actual de Meta: «the number of clicks, swipes and other gestures on links within the ad that led to advertiser-specified destinations, on or off Meta technologies». Cuenta «link clicks, taps or swipes on the ad's text, profile icon and name, overlays, media or call-to-action, that link to destinations or experiences specified by the advertiser». Excluye clics en comentarios. Destinos posibles: webs, tiendas de apps, llamar, mensaje, mapas, tiendas (shops), formularios, Marketplace, perfil de Instagram (en anuncios de visitas al perfil), experiencias jugables, vídeos Watch & Browse, vídeos alojados fuera. Se usa en la atribución por clic — [Link clicks (Meta Business Help Center)](https://www.facebook.com/business/help/659185130844708)
- Ejemplos oficiales de clic en el enlace: «clicks on an image or a call-to-action button within an ad that uses the traffic objective», clics en URL del texto, clics que abren pantallas completas (formularios, Instant Experience, colección) — [About link clicks and outbound clicks (Meta)](https://www.facebook.com/business/help/284415655604125)
- **Clics salientes (Outbound clicks)**: «counts clicks that lead to other destinations outside Meta technologies», incluidos los enlaces dentro de experiencias ampliadas (Instant Experience, colecciones, formularios). Incluye webs, app en la tienda y deep links. Meta: «while some traffic might drop off between an outbound click and a webpage view, outbound clicks give you a closer approximation of the traffic intended for your website». Nota histórica: en Instagram ≤10.14 todos los clics en enlaces contaban como salientes — [Outbound clicks (Meta)](https://www.facebook.com/business/help/186560398499760)
- En un anuncio de imagen única a web, «Meta technologies will report clicks on the call-to-action button **or image** as both a link click and an outbound click». En Instant Experience, el toque en el feed es clic en el enlace y el clic hacia la web desde dentro es solo clic saliente — [Troubleshoot the difference between link clicks and outbound clicks (Meta)](https://www.facebook.com/business/help/102928543574299)
- **Clics (todos) / Clicks (all)**: «multiple types of clicks, taps or swipes on your ad, including certain types of interactions with the ad container, links to other destinations, and links to expanded ad experiences». Puede incluir: clics en el enlace, clics a la página o la foto de perfil, reacciones, comentarios o compartidos, **«clicks to expand media (such as photos) to full screen»** y acciones del objetivo (p. ej. «Me gusta» a la página) — [Clicks (all) (Meta)](https://www.facebook.com/business/help/787506997938504)
- **Visitas a la página de destino (LPV)**: «counted when a webpage loads or mobile app opens after an ad is clicked. This can occur from having the Meta pixel installed on your website or through the in-app browser on Meta technologies. In some cases where landing page view events can't be counted directly due to partial or missing data, statistical modeling may be used». Uso según Meta: comparar LPV con clics en el enlace «to understand how many times people may have clicked on your ad but left before your website loaded» — [Landing page views (Meta)](https://www.facebook.com/business/help/646884317670110); [Website landing page views (Meta)](https://www.facebook.com/business/help/361750134220832)
- Motivos oficiales de que no coincidan clics en el enlace y LPV: «the web page isn't fully loading or the app failed to open after a link click» y «you may have specified multiple link click destinations… that doesn't click through to your landing page» (p. ej. el titular a un destino y el botón a otro) — [Understand the difference between link clicks and landing page views (Meta)](https://www.facebook.com/business/help/172641445757289)
- API (Marketing API): `inline_link_clicks` = clics en enlaces a destinos seleccionados, con ventana fija de 1 día; `actions:link_click` = misma definición pero respeta la ventana de atribución de la consulta; `clicks` = Clics (todos) — [Meta for Developers, Link Clicks Updates (2016)](https://developers.facebook.com/ads/blog/post/2016/03/16/link-clicks-updates/)
- Orden habitual de volumen: Clics (todos) > Clics en el enlace > Clics salientes > LPV. Los clics salientes no requieren carga completa; las LPV sí — [Jon Loomer, The Difference Between Facebook Clicks (act. 1-mar-2025)](https://www.jonloomer.com/facebook-clicks/)
- LPV ya no exige píxel para optimizar: Loomer cree que Meta usa modelado/navegador integrado — [Jon Loomer, Landing Page Views No Longer Require a Pixel](https://www.jonloomer.com/qvt/landing-page-views-no-longer-require-a-pixel/)
- Desde junio de 2025, abrir una Instant Experience ya no cuenta como LPV (fuente secundaria) — [Cookiebees, Link clicks vs landing page views (act. 19-nov-2026)](https://cookiebees.io/blog/link-clicks-vs-landing-page-views/)
- Unique outbound clicks: Meta los estima con datos muestreados (paráfrasis de fuente secundaria) — [Cookiebees](https://cookiebees.io/blog/link-clicks-vs-landing-page-views/)

### Inferences
- Clave para el caso: en un anuncio de imagen única con destino web, **tocar la imagen ya es clic en el enlace y clic saliente** (abre el navegador integrado). Por eso los toques sin querer sobre la foto o el vídeo inflan el CTR de enlace. Tocar el nombre o el icono del perfil también cuenta como clic en el enlace si lleva al destino del anunciante.
- «Ver más» (desplegar el texto) no aparece en ninguna definición oficial de clic en el enlace; como interacción con el contenedor del anuncio, entraría como mucho en Clics (todos). No hay confirmación explícita de Meta.
- Si los clics salientes ≈ clics en el enlace pero LPV ≪ salientes, el problema está entre el toque y la carga (toques sin querer, cierre inmediato, carga lenta o medición), no en destinos múltiples.

### Gaps
- Meta no dice explícitamente cómo trata «Ver más» ni si, en anuncios de imagen única, tocar la imagen en el feed de Facebook la amplía o abre la web (en anuncios con destino web abre la web; en publicaciones orgánicas la amplía). No encontré texto oficial que lo detalle por ubicación.
- La definición oficial de «unique outbound clicks» no salió en el Help Center consultado.

## 2. Ratio normal clics en el enlace → LPV y qué señalan los ratios bajos

### Takeaway
Meta no publica un ratio «normal». Los profesionales citan un 70–90 % (algunos un 80–95 %) como sano y investigan por debajo del 50–60 %. Un 2–5 % no se explica por velocidad ni por píxel en condiciones normales: casi siempre indica toques sin querer en una ubicación concreta, un destino que no es la web o una rotura total de carga/medición.

### Cited Findings
- Meta no publica ratio estándar; las cifras online son reglas prácticas. Usar el ratio para comparar anuncios entre sí y vigilar cambios — [Cookiebees](https://cookiebees.io/blog/link-clicks-vs-landing-page-views/); [Tofu, nov-2026](https://tofuads.com/resources/meta-link-clicks-vs-landing-page-views)
- «No universal benchmark»; muchas cuentas están entre el 70 % y el 90 % de los clics en el enlace — [GTM Analytics (act. 14-nov-2026)](https://gtm-analytics.com/meta-landing-page-view-rate-drop/)
- Otras fuentes: 70–90 % típico; 80–95 % en una cuenta sana (resumen de búsqueda de blogs de terceros) — [Lilach Bullock](https://www.lilachbullock.com/landing-page-views-facebook-ad-reports/); [TheAdSpend](https://theadspend.com/blog/landing-page-views)
- «If you see 1,000 Link Clicks but only 500 Landing Page Views, it's time to investigate your site speed and Pixel health immediately» (50 % = alarma) — [Graphed](https://graphed.com/blog/what-is-a-link-click-on-facebook-ad)
- Caso medido (marca de alimentación, 1–7 nov 2026): 9.164 clics en el enlace, 5.349 LPV (58 %), pero 6.822 clics llegaron de verdad a la web (74 %, contando fbclid distintos sin bots): de 3.815 clics «perdidos», 1.473 sí habían llegado. El coste por LPV fue un 27,5 % mayor que el coste por llegada real — [Cookiebees](https://cookiebees.io/blog/link-clicks-vs-landing-page-views/)
- Hilos de comerciantes de Shopify: «roughly 80 percent never convert to Landing-Page Views»; otro: 26,5 k clics, 18,2 k LPV y 13 k personas en la web — [Shopify Community, I get ad clicks but no website visitors](https://community.shopify.com/t/i-get-ad-clicks-but-no-website-visitors/572382); [Shopify Community, Discrepancy between LPV and actual visits](https://community.shopify.com/t/discrapency-between-landing-page-views-and-actual-visits/356837)
- Patrones de diagnóstico: ratio bajo en todos los anuncios y estable → página lenta o redirección; bajo en un solo anuncio → URL, destinos extra o ubicaciones con toques sin querer; caída en una fecha → cambio en la web (tema, app, banner de consentimiento, píxel); mucho peor en ordenador que en móvil → píxel bloqueado o tardío — [Cookiebees](https://cookiebees.io/blog/link-clicks-vs-landing-page-views/)
- Patrones con Shopify/GA4: sesiones estables y LPV cayendo → medición (consentimiento, píxel, Meta); ambos caen con clics estables → caída real (velocidad, redirecciones, ubicaciones); clics suben y LPV planas → clics de peor calidad. Si el ratio se parece a la tasa de aceptación del banner de cookies → consentimiento — [GTM Analytics](https://gtm-analytics.com/meta-landing-page-view-rate-drop/)
- Benchmark de CTR: Meta Ads tráfico ~1,71 %, leads ~2,59 % (título de la fuente) — [Kitchn](https://www.kitchn.io/blog/what-is-a-good-ctr-for-meta-ads)
- Datos propios de la cuenta (memoria del proyecto, CLAUDE.md): en la campaña 2 de Maison Nácar, 78 de 107 clics en Reels de Instagram eran toques sin querer (4 % llegaba a la web) frente al 29 % en Stories de Instagram; en A1/B2 solo el 6–10 % llegaba; en Zentia (20-nov) Reels de IG: 17 clics, 0 visitas. Cookie banner reduce lo que mide Meta — fuente interna: `/home/user/maison-nacar-ops/CLAUDE.md`

### Inferences
- Un CTR de enlace del 8–14 % en frío es 4–8 veces el benchmark (~1,7 %). Junto a un 2–5 % de LPV, la explicación más probable son toques sin querer (el clic se produce, la persona cierra el navegador integrado antes de que cargue), no interés real. Un anuncio que «engancha» de verdad no multiplica el CTR por 6 y a la vez pierde el 95 % de los clics.
- El banner de cookies (UE) y el bloqueo del píxel pueden bajar las LPV medidas a un 50–70 %, pero difícilmente a un 2–5 %, porque las LPV también se cuentan por el navegador integrado de Meta. Por eso las sesiones de Shopify con UTM son la prueba decisiva.
- Umbrales prácticos (síntesis, no oficial): ≥70 % sano; 50–70 % revisar velocidad o consentimiento; 20–50 % mirar ubicación o calidad; <20 % casi seguro toques sin querer, destino equivocado o web rota.

### Gaps
- No encontré benchmarks publicados de LPV/clic por ubicación (Reels, Stories, feed) de fuentes independientes con metodología clara.
- No hay cifras de Foxwell, CTC ni Ben Heath sobre este ratio en lo consultado.

## 3. Toques sin querer por ubicación (Reels, Stories, Audience Network, Advantage+)

### Takeaway
La única declaración oficial de Meta sobre clics no intencionados es de 2017 y se refiere a Audience Network: descuenta los clics con rebote de 2 s o menos y no los cobra. Para Reels no hay datos oficiales; las fuentes de profesionales y los datos propios de esta cuenta señalan los Reels (pantalla completa vertical, zona de toque grande) como la principal fuente de clics vacíos. La solución habitual es el desglose por ubicación y excluir la ubicación con peor ratio.

### Cited Findings
- 8-ago-2017: Facebook deja de cobrar y de contar los clics no intencionados en Audience Network; los detecta «discounting cases where a user bounces back after two seconds or less», umbral que Brett Vogel (Facebook) llamó un «starting point». Cita: «Unintentional clicks end up delivering really poor experiences for people and advertisers» — [TechCrunch, 2017](https://techcrunch.com/?p=1524391)
- En Audience Network, los intersticiales a pantalla completa y los banners pequeños en móvil producen toques que no cargan la página; CTR de referencia de Audience Network: 0,58 % — [Roaz, Should you exclude Audience Network](https://roaz.app/blog/audience-network-should-you-exclude)
- Prueba de Jon Loomer citada por Clickport: optimizar a clics en el enlace mandó el 99 % del tráfico a Audience Network; optimizar a un evento de visitante de calidad, un 0 %. El coste por visitante de calidad bajó de >50 $ a ~1 $ (fuente secundaria, vendedor) — [Clickport, Facebook Ads Bot Traffic](https://clickport.io/blog/facebook-ads-bot-traffic)
- Nuevas ubicaciones (Audience Network o «some Reels placements») y nuevos creativos pueden producir toques sin querer; un público más amplio puede hacer clic y salir al instante — [GTM Analytics](https://gtm-analytics.com/meta-landing-page-view-rate-drop/)
- Guía Shopify: lista ciertas ubicaciones de Reels, junto a Audience Network, como causa frecuente de toques sin querer; «if one placement shows far more clicks than views, accidental taps are the likely cause» — [AdSpecIt](https://www.adspecit.com/blog/why-meta-ads-clicks-but-no-landing-page-views); [AdAdvisor](https://adadvisor.ai/blog/facebook-ads-clicks-no-sales-bot-traffic)
- Toques al hacer scroll abren el navegador integrado y la persona lo cierra antes de que cargue — [Cookiebees](https://cookiebees.io/blog/link-clicks-vs-landing-page-views/)
- Los vídeos suben el CTR (todos) por interacciones que no son clics en el enlace — [Roaz](https://roaz.app/blog/audience-network-should-you-exclude)
- Datos propios: Reels de IG 4 % de llegada vs Stories de IG 29 % (campaña 2, 10–12 nov 2026); Reels de IG en Zentia: 17 clics y 0 visitas (20-nov) — `/home/user/maison-nacar-ops/CLAUDE.md`

### Inferences
- En Reels (y en parte en Stories de Facebook) la imagen o el vídeo ocupan casi toda la pantalla y, como el toque en «media» cuenta como clic en el enlace, un toque para pausar, para pasar o para quitar el sonido puede abrir la web. Eso explicaría CTR anómalos con LPV casi nulas. En Stories de IG el gesto de pasar es lateral y el CTA es un botón inferior, de ahí que en esta cuenta rindan mejor.
- Con «Advantage+ placements», Meta reparte el presupuesto hacia el inventario más barato por resultado; si se optimiza a clics, sesga hacia ubicaciones con toques baratos (es lo que muestra la prueba de Loomer con Audience Network).
- Un público de más edad (40–65) en móvil podría tener más toques sin querer; no hay datos publicados que lo prueben: comprobar con el desglose por edad.

### Gaps
- No encontré ninguna declaración de Meta 2024–2026 sobre clics no intencionados en Reels o Stories, ni si el filtro de 2 s se aplica fuera de Audience Network.
- No hay estudios independientes de toques sin querer por edad.

## 4. Navegador integrado, carga lenta, redirecciones y píxel

### Takeaway
Los enlaces de anuncios se abren por defecto en el navegador integrado de Facebook/Instagram, y Meta cuenta las LPV desde ahí (además del píxel). La carga lenta en móvil, las redirecciones, los banners de cookies a pantalla completa y los fallos del navegador integrado con algunos temas de Shopify hacen que la gente se vaya antes de cargar, o que no se mida.

### Cited Findings
- «By default, external links from ads and organic content on Facebook or Instagram open within the in-app browser»; el usuario puede elegir abrirlos en el navegador del sistema. Meta puede usar el contenido y la actividad en webs vistas en el navegador integrado para publicidad — [About the in-app browser for Facebook and Instagram (Meta)](https://www.facebook.com/business/help/206578174518231)
- Las LPV se registran «when people use the in-app browser on Meta technologies to visit your destination web pages or by having a Meta pixel installed on them» — [Website landing page views (Meta)](https://www.facebook.com/business/help/361750134220832)
- Fuera del navegador integrado, el píxel es la única forma de contar las cargas; bloqueadores, funciones de privacidad y esperas por consentimiento lo impiden — [Cookiebees](https://cookiebees.io/blog/link-clicks-vs-landing-page-views/)
- Banner de consentimiento estricto o que bloquea el píxel baja el PageView; un banner a pantalla completa en el navegador de Instagram hace que la gente se vaya sin ver la tienda. Safari privado elimina los click ID; bloqueadores bloquean el píxel — [GTM Analytics](https://gtm-analytics.com/meta-landing-page-view-rate-drop/)
- Redirecciones (http/https, www, acortadores, geo) retrasan la carga y pueden borrar fbclid y UTM — [Cookiebees](https://cookiebees.io/blog/link-clicks-vs-landing-page-views/)
- Fallos reportados en el navegador integrado con Shopify: web que carga pero se queda congelada; pantalla en blanco al navegar; el tema Horizon se congela en el navegador de FB/IG tras una actualización de Android WebView — [Shopify Community, Instagram In-App Browser Problem](https://community.shopify.com/t/instagramm-in-app-browser-problem/409392); [Shopify Community, white screen](https://community.shopify.com/t/shopify-store-works-in-chrome-but-navigation-buy-now-white-screen-in-facebook-instagram-in-app-browser/639842); [Shopify Community, Horizon not compatible](https://community.shopify.com/t/horizon-is-not-compatible-with-social-media/643613)
- Error de Meta: del 6 al 14-ene-2026 las LPV se infrainformaron (corregido el 13-ene, 14:56 PST). En 1.000+ marcas, las visitas con click ID desde el navegador de FB/IG se mantuvieron estables; iOS 26 en modo normal conserva fbc/gclid (el modo privado los quita) — [Aimerce](https://www.aimerce.ai/blogs/what-the-heck-was-going-on-with-lpv-on-meta-ads)
- Prueba: abrir la URL del anuncio desde Instagram en el móvil con datos, cronometrar la primera pantalla y añadir `?fbclid=test` para ver si sobrevive a las redirecciones — [Cookiebees](https://cookiebees.io/blog/link-clicks-vs-landing-page-views/)

### Inferences
- Para un 2–5 %, la velocidad (≈4 s LCP) explica una parte, pero no el 95 %. Si la misma web da un 29 % en Stories y un 4 % en Reels, el factor dominante es la ubicación, no la web.
- En España/UE el banner de cookies es un factor de medición para el píxel, pero las LPV del navegador integrado no dependen del consentimiento del sitio (Meta las ve como navegador). Conviene comprobarlo con las sesiones de Shopify.

### Gaps
- Meta no documenta qué tiempo de carga mínimo hace falta para contar una LPV desde el navegador integrado.
- Las cifras de pérdida de los vendedores de enlaces profundos (p. ej. «hasta el 25 % de conversiones») no son verificables.

## 5. Bots y tráfico de baja calidad en Meta (2025–2026)

### Takeaway
Hay poca evidencia sólida. Casi toda viene de empresas antifraude (ClickCease, Lunio, Clickport) con interés comercial. Meta solo dice públicamente que descuenta clics no intencionados en Audience Network, y sus condiciones no garantizan reembolsos por fraude. Los bots de revisión de anuncios cargan la web cuando se crea o edita un anuncio.

### Cited Findings
- Los bots que cargan la página pueden mandar señales falsas al píxel o a la API de conversiones; con bots simples, muchos clics de Meta no generan sesiones — [ClickCease](https://www.clickcease.com/blog/why-are-all-my-facebook-ad-clicks-bots/)
- Los bots de revisión de la plataforma rastrean la web cada vez que se crea o edita un anuncio — [ClickCease](https://www.clickcease.com/blog/why-are-all-my-facebook-ad-clicks-bots/)
- Consejo: si muchos clics vienen de Audience Network sin conversiones, desactivarlo — [ClickCease](https://www.clickcease.com/blog/why-are-all-my-facebook-ad-clicks-bots/)
- Según Clickport, las condiciones de Meta para autoservicio dicen que Meta no se responsabiliza del fraude de clics — [Clickport](https://clickport.io/blog/facebook-ads-bot-traffic)
- Optimizar a «Clics» da más varianza clic→LPV; optimizar a LPV es la corrección habitual — [Shopify Community, Outbound clicks but no LPV](https://community.shopify.com/t/outbound-clicks-but-no-landing-page-views-facebook-pixel/110472)

### Inferences
- Los bots suelen inflar sesiones con rebote del 100 % (llegan) más que clics sin llegada. Un patrón de muchos clics sin llegada, concentrado en una ubicación móvil, encaja mejor con toques sin querer que con bots.
- Con Audience Network excluido (regla de esta cuenta), los bots son una causa poco probable.

### Gaps
- No encontré datos de Meta ni estudios independientes 2025–2026 sobre bots en Facebook/Instagram (fuera de vendedores antifraude).

## 6. Flujo de diagnóstico de los media buyers

### Takeaway
1) Confirmar con datos ajenos a Meta (sesiones de Shopify con UTM / fbclid). 2) Desglosar el ratio LPV/clic por ubicación, dispositivo y edad. 3) Revisar destinos, URL, redirecciones y velocidad en el móvil desde la app. 4) Comprobar el píxel en Events Manager. 5) Excluir la ubicación con peor ratio y optimizar a LPV o a compra, nunca a clics.

### Cited Findings
- Pasos en Ads Manager: últimos 14 días; columnas Clics en el enlace, Clics salientes, LPV, Coste por LPV, CPC; métrica personalizada LPV ÷ clics en el enlace; ordenar y anotar la mediana; desglosar por ubicación y dispositivo los anuncios por debajo; abrir la URL en el móvil desde Instagram; registrar el ratio cada semana — [Cookiebees](https://cookiebees.io/blog/link-clicks-vs-landing-page-views/)
- Recuento independiente: cada clic de Meta lleva un fbclid; contar fbclid distintos en la web da los clics que llegaron de verdad (los logs del servidor lo guardan si se conservan los parámetros) — [Cookiebees](https://cookiebees.io/blog/link-clicks-vs-landing-page-views/)
- Flujo Shopify: comparar LPV y clics con sesiones de Meta en Shopify/GA4; localizar la fecha del cambio; comparar con la aceptación del banner; probar el píxel en Events Manager y con Meta Pixel Helper (también con aceptación tardía); comprobar el ID del píxel en cada página de destino; abrir la URL en móvil en privado para ver redirecciones, UTM y fbclid; PageSpeed Insights; desglose por ubicación y dispositivo («a drop limited to one placement points to traffic quality, not tracking») — [GTM Analytics](https://gtm-analytics.com/meta-landing-page-view-rate-drop/)
- Pasos: confirmar el píxel en todas las páginas de destino; quitar destinos que no son la web (formularios, Instant Experience); probar velocidad en móvil con datos; optimizar a LPV en campañas de tráfico; desglosar por ubicación y dispositivo — [Tofu](https://tofuads.com/resources/meta-link-clicks-vs-landing-page-views)
- Meta recomienda comparar LPV con clics en el enlace para ver quién se fue antes de que cargase la web — [Landing page views (Meta)](https://www.facebook.com/business/help/646884317670110)
- Loomer: juzgar el tráfico por LPV (mejor aún LPV únicas) y no por Clics (todos) ni por CPC de enlace — [Jon Loomer](https://www.jonloomer.com/facebook-clicks/)

### Inferences
- Checklist aplicada a CTR 8–14 % y LPV 2–5 %:
  1. Ads Manager → Desglose → Por entrega → Ubicación (y Dispositivo, Edad): columnas Clics en el enlace, Clics salientes, LPV, CTR de enlace; ratio LPV/clic por fila. La fila con CTR altísimo y ratio <10 % (típicamente Reels de IG/FB o Stories de FB) es la culpable.
  2. Comparar Clics salientes con Clics en el enlace: si son casi iguales, no hay destinos dobles; el corte está entre el toque y la carga.
  3. Shopify → Análisis → Sesiones por UTM (utm_source=facebook/instagram, utm_content por anuncio) en las mismas fechas. Sesiones ≈ LPV → los clics no llegan (toques sin querer). Sesiones ≫ LPV → fallo de medición (píxel, consentimiento).
  4. Ver el anuncio en el propio móvil (vista previa en Instagram/Facebook), en Reels y Stories, y comprobar qué zona del toque abre la web; abrir el enlace y cronometrar la primera pantalla con 4G.
  5. Events Manager → píxel → PageView recibido por navegador y servidor en la URL del anuncio; diagnósticos sin errores.
  6. Acción: excluir la ubicación con peor ratio, optimizar a Compra (o LPV, nunca Clics) y juzgar los anuncios por el coste por LPV o por sesión de Shopify, no por el CTR.

### Gaps
- No encontré contenidos 2024–2026 de Foxwell, Common Thread Collective ni Ben Heath sobre este flujo concreto, ni hilos de Reddit indexados con datos (la búsqueda no los devolvió).
- Search Engine Land (actualización de la atribución por clic de Meta, «click-through» frente a «engage-through») devolvió un 403; no pude verificar los detalles.
