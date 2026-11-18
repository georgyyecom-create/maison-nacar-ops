# Checklist de lanzamiento · Zentia España (cojín de rodillas)
Actualizado: 18-nov-2026. Marca [x] lo hecho. Orden = orden en que hay que hacerlo.

## 0–1. Dominio: zentiadescanso.com (Namecheap) → esta tienda
- [x] El dominio viejo era zentiastrips.com, que no encaja y está marcado en Meta. **Comprado zentiadescanso.com** (18-nov).
- [ ] Namecheap → zentiadescanso.com → Manage → Advanced DNS: borrar los registros de aparcamiento y añadir **A `@` 23.227.38.65** y **CNAME `www` shops.myshopify.com**.
- [x] Shopify (esta tienda) → Configuración → Dominios → Conectar dominio existente → zentiadescanso.com → Verificar.
- [ ] Ponerlo como **dominio principal**; SSL automático.
- [ ] Meta (portfolio Maison Nácar) → Seguridad de la marca → Dominios → añadir zentiadescanso.com → TXT en Namecheap → Verificar.
- [ ] Prueba definitiva: el conjunto en borrador deja elegir **Compra**.

## 2. Tienda vieja de las tiras (cobra 32 €/mes → cerrarla ANTES del próximo cobro)
- [ ] Ver la fecha del próximo cobro: Configuración → Facturación.
- [ ] Después del paso 1 (dominio quitado): exportar clientes y pedidos (CSV).
- [ ] Desinstalar las apps de pago y desconectar el píxel y el catálogo de Meta.
- [ ] **Desactivar la tienda** (Configuración → Plan → Desactivar). Nada de «Pausar y crear», que también cobra.
- [ ] Maison Nácar: mirar cuándo termina la promoción de 1 €/mes (luego, plan Basic ~30 €/mes).

## 3. Esta tienda pasa a ser Zentia (lo hago yo, me dices «adelante»)
- [ ] Nombre de la tienda «Zentia», correo remitente, favicon y logo en el checkout.
- [x] **Página de inicio de Zentia**: tema «Zentia v1 (portada)» (209378771284) con la sección zn-home. Falta que el dueño lo publique.
- [x] (18-nov) El dueño ha borrado las joyas y los calendarios: la tienda tiene 4 productos (cojín, antifaz, guía y la copia de Dropify). Antes: ocultar en la tienda online las joyas, los calendarios y la «almohada-relajante» de Dropify (el MCP bloquea despublicar: lo hace el dueño en Productos → seleccionar → Más acciones → Excluir de canales). El cojín ya está ACTIVO.
- [ ] Menú, pie, contacto, políticas (envío, devoluciones con 60 noches, privacidad, aviso legal), con titular y datos reales.
- [ ] Pago: **contra reembolso** activo y **teléfono obligatorio** en el checkout.
- [ ] Correo de confirmación con la guía PDF (fragmento en `marca/zentia/guia/CORREO_CONFIRMACION.md`).
- [ ] Publicar el tema v20.19 y hacer una compra de prueba.

## 4. Meta (portfolio Maison Nácar, que pasa a ser Zentia)
- [x] zentiadescanso.com verificado en el portfolio (18-nov).
- [x] **Permisos de tráfico del píxel: añadir zentiadescanso.com a la lista de autorizados** (solo estaba maisonnacar.com → bloqueaba los eventos). Luego, Probar eventos: PageView, ViewContent y AddToCart.
- [x] Purchase del #1002 comprobado. - [x] **Cancelado** (18-nov) (lo hace el dueño: el MCP bloquea cancelar pedidos) sin reembolso ANTES de vincular Dropify (si no, Dropi lo envía).
- [ ] Cuenta publicitaria **963612299940558**: renombrarla a «Zentia ES». Ya tiene EUR, Madrid, pago y 270 € sin incidencias. **No usar la de Zentia Strips** (USD, ligada al dominio de las tiras).
- [ ] Píxel **1097392456530786**: renombrarlo a «Zentia ES». Ya está conectado a esta tienda; se queda.
- [ ] Página de Facebook nueva «Zentia España» e Instagram nuevo (@zentia.es o parecido) dentro del portfolio. **No usar @zentiastrips.**
- [ ] App de Facebook e Instagram en Shopify: comprobar que apunta a este portfolio, este píxel y compartir datos «Máximo».
- [ ] Catálogo: solo el cojín (las joyas fuera).
- [x] Compra de prueba → «Comprar» recibido por servidor (#1002, calidad 8,0/10, 18-nov).
- [ ] **Prueba definitiva del dominio:** píxel sin aviso peor que «Core setup» y conjunto en borrador que deje elegir **Compra** como objetivo. Si no deja → dominio limpio nuevo (~10–15 €) como principal y repetir.

## 5. Dropi y pedidos
- [ ] KYC de Dropi.
- [ ] Dropify (después de cancelar el #1002): «1 cojín» = COJINERGONOMICO ×1; variante «2 cojines + antifaz» = PACKREC2026644 ×2 + ANTIFAZ ×1. La guía PDF, ignorada.
- [ ] Cancelar los pedidos de prueba #3689379 y #3689400.

## 6. WhatsApp
- [ ] WhatsApp Business en el 34621390548: nombre «Zentia», foto del logo, horario y catálogo con el cojín.
- [ ] Respuestas rápidas: /confirmar (confirmación del pedido), /mañana (aviso del día antes), /seguimiento.
- [ ] Rutina: confirmar cada pedido contra reembolso en menos de 3 h antes de pasarlo a Dropi.

## 7. Creativos (después de los pasos 0–4)
- [ ] Rehacer la foto 08 (comparativa) de la ficha.
- [x] Imágenes de los anuncios 1, 2, 3, 4 (v1) y 6 en `marca/zentia/ads/`. Faltan: radiografía con «Así queda la cadera», 9:16 de los 4:5 y el vídeo (anuncio 5).
- [ ] 6 anuncios: pizarra, colchón 899 €, «3 errores», radiografía y vídeo POV (→ artículo A); oferta BF (→ ficha). Artículo B de reserva.
- [ ] Textos y titulares de cada anuncio; UTM en cada enlace.

## 8. Campaña (plan en `ESTRATEGIA_ANUNCIOS_ZENTIA.md`)
- [ ] 1 campaña de Ventas, 1 conjunto, 40 €/día, 6 anuncios, ubicaciones y edades según el plan.
- [ ] Revisión cada mañana con las reglas de apagado; día 3: conjunto «Segunda oportunidad».

## 9. Mientras la campaña se revisa (el mismo día)
- [ ] Instagram y Facebook: 3–6 publicaciones (el cojín, cómo se usa, la guía, la oferta) para que no se vean vacíos.
- [ ] Biografía con el enlace a la ficha y el WhatsApp.

## 10. 1-dic
- [ ] Fin de la oferta BF: quitar el antifaz o cambiar el precio, cambiar la portada de la galería y la barra.
- [ ] Decidir diciembre (Nochebuena: último pedido el 15-dic) con los datos.
