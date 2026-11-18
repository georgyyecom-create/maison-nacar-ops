# Checklist de lanzamiento · Zentia España (cojín de rodillas)
Actualizado: 18-nov-2026. Marca [x] lo hecho. Orden = orden en que hay que hacerlo.

## 0. Comprobar ANTES de mover el dominio (5 min, lo más importante)
- [x] (18-nov) Restricción al nivel más bajo (Core setup): **deja pujar a Compra → seguimos con zentia.com**. Perdemos: parámetros personalizados, la ruta de las URL en el píxel (no hay públicos ni conversiones por URL) y, quizá, el valor de la compra en Meta. No los necesitamos: el CPA se mira en Shopify y las UTM llegan a Shopify. zentia.es está ocupado.
- [x] En el Administrador de eventos del portfolio **Zentia Strips** → píxel de las tiras → Configuración: ¿pone «Restringido», «Salud y bienestar» o «Categoría del origen de datos»? Haz una captura.
  - **Si sale restringido por salud y bienestar → NO usamos zentia.com.** La restricción va con el dominio (no con el píxel ni con la cuenta) y en la UE puede bloquear la optimización por Compra. Se compra un dominio nuevo (zentia.es o similar, ~10–15 €) y seguimos con el resto.
  - **Si no sale nada → seguimos con zentia.com** (paso 1).

## 1. Dominio zentia.com → tienda nueva (el dominio está en **Namecheap**)
- [ ] Tienda vieja (tiras): Configuración → Dominios → zentia.com → **Quitar dominio** (y www.zentia.com si sale aparte). El dominio no se pierde: sigue en Namecheap.
- [ ] Namecheap → Domain List → zentia.com → Advanced DNS. Comprobar (son iguales para cualquier tienda Shopify, normalmente ya están):
  - Registro A · Host `@` · `23.227.38.65`
  - CNAME · Host `www` · `shops.myshopify.com`
  - Sin otros registros A/CNAME de `@` o `www` que choquen.
- [ ] Esta tienda: Configuración → Dominios → **Conectar dominio existente** → zentia.com. Si Shopify pide verificar la propiedad (porque estuvo en otra tienda), añadir en Namecheap el registro TXT que indique y pulsar «Verificar».
- [ ] Poner zentia.com como **dominio principal** (redirige maisonnacar.com y el .myshopify). SSL automático (de minutos a 48 h).
- [ ] Meta, portfolio Zentia Strips: Seguridad de la marca → Dominios → **quitar zentia.com**.
- [ ] Meta, portfolio Maison Nácar: Seguridad de la marca → Dominios → Añadir zentia.com → **registro TXT de DNS** → pegarlo en Namecheap (Advanced DNS → Add new record → TXT, Host `@`) → Verificar. Dejar el TXT puesto para siempre.

## 2. Tienda vieja de las tiras (cobra 32 €/mes → cerrarla ANTES del próximo cobro)
- [ ] Ver la fecha del próximo cobro: Configuración → Facturación.
- [ ] Después del paso 1 (dominio quitado): exportar clientes y pedidos (CSV).
- [ ] Desinstalar las apps de pago y desconectar el píxel y el catálogo de Meta.
- [ ] **Desactivar la tienda** (Configuración → Plan → Desactivar). Nada de «Pausar y crear», que también cobra.
- [ ] Maison Nácar: mirar cuándo termina la promoción de 1 €/mes (luego, plan Basic ~30 €/mes).

## 3. Esta tienda pasa a ser Zentia (lo hago yo, me dices «adelante»)
- [ ] Nombre de la tienda «Zentia», correo remitente, favicon y logo en el checkout.
- [ ] **Página de inicio de Zentia** (ahora la portada es de joyería) o redirección a la ficha.
- [ ] Ocultar en la tienda online las joyas, los calendarios y sus colecciones (no se borran).
- [ ] Menú, pie, contacto, políticas (envío, devoluciones con 60 noches, privacidad, aviso legal), con titular y datos reales.
- [ ] Pago: **contra reembolso** activo y **teléfono obligatorio** en el checkout.
- [ ] Correo de confirmación con la guía PDF (fragmento en `marca/zentia/guia/CORREO_CONFIRMACION.md`).
- [ ] Publicar el tema v20.19 y hacer una compra de prueba.

## 4. Meta (portfolio Maison Nácar, que pasa a ser Zentia)
- [ ] Cuenta publicitaria **963612299940558**: renombrarla a «Zentia ES». Ya tiene EUR, Madrid, pago y 270 € sin incidencias. **No usar la de Zentia Strips** (USD, ligada al dominio de las tiras).
- [ ] Píxel **1097392456530786**: renombrarlo a «Zentia ES». Ya está conectado a esta tienda; se queda.
- [ ] Página de Facebook nueva «Zentia España» e Instagram nuevo (@zentia.es o parecido) dentro del portfolio. **No usar @zentiastrips.**
- [ ] App de Facebook e Instagram en Shopify: comprobar que apunta a este portfolio, este píxel y compartir datos «Máximo».
- [ ] Catálogo: solo el cojín (las joyas fuera).
- [ ] Compra de prueba → que aparezca «Compra» en el Administrador de eventos.
- [ ] **Prueba definitiva del dominio:** píxel sin aviso peor que «Core setup» y conjunto en borrador que deje elegir **Compra** como objetivo. Si no deja → dominio limpio nuevo (~10–15 €) como principal y repetir.

## 5. Dropi y pedidos
- [ ] KYC de Dropi.
- [ ] Dropify: variante «2 cojines + antifaz» = PACKREC2026644 ×2 + ANTIFAZ ×1. La guía PDF, ignorada.
- [ ] Cancelar los pedidos de prueba #3689379 y #3689400.

## 6. WhatsApp
- [ ] WhatsApp Business en el 34621390548: nombre «Zentia», foto del logo, horario y catálogo con el cojín.
- [ ] Respuestas rápidas: /confirmar (confirmación del pedido), /mañana (aviso del día antes), /seguimiento.
- [ ] Rutina: confirmar cada pedido contra reembolso en menos de 3 h antes de pasarlo a Dropi.

## 7. Creativos (después de los pasos 0–4)
- [ ] Rehacer la foto 08 (comparativa) de la ficha.
- [ ] 6 anuncios: pizarra, «No es tu colchón», «3 errores», radiografía (→ artículo A), oferta BF (→ ficha), vídeo POV (→ artículo B).
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
