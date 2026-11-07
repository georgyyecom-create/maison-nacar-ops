# Atelier Oro Madrid · Guía de montaje

Archivos:
- `atelier-oro-madrid-tema.zip`: el tema (Dawn 16 con la ficha de producto propia).
- `productos.csv`: un primer producto de ejemplo (Aros Perla Trenzada), en borrador.

---

## 1. Crear la tienda (20 min)
1. Crea una tienda nueva en shopify.com (prueba gratis) con un email distinto al de Zentia si puedes.
2. **Configuración → Idiomas:** español como idioma principal.
3. **Configuración → General:** moneda EUR, zona horaria Madrid, nombre «Atelier Oro Madrid».
4. **Configuración → Impuestos:** España, precios con IVA incluido.
5. **Configuración → Envíos:** una zona «España peninsular y Baleares» con envío gratis. No añadas Canarias, Ceuta ni Melilla.

## 2. Subir el tema (5 min)
1. **Tienda online → Temas → Añadir tema → Subir archivo zip** → `atelier-oro-madrid-tema.zip`.
2. Pulsa **Publicar**.
3. **Personalizar → Configuración del tema → Logotipo:** sube el logo (texto «ATELIER ORO» en la tipografía del tema queda bien).

## 3. Menús (5 min)
**Tienda online → Navegación**
- **main-menu:** Inicio, Pendientes, Collares, Pulseras, Conjuntos (crea esas colecciones).
- **footer** (créalo con ese identificador): Envíos, Devoluciones, Contacto, Sobre nosotros, Preguntas frecuentes.

## 4. Pagos (15 min)
- **Shopify Payments:** tarjeta, Apple Pay y Google Pay. Necesita tu DNI y una cuenta bancaria.
- **PayPal:** Configuración → Pagos → PayPal → conectar cuenta.
- **Bizum:** instala una app de pasarela que lo admita (MONEI o el TPV Redsys de tu banco). Puede tardar unos días en aprobarse.
- **Contra reembolso:** **solo si envías tú o usas un proveedor que cobre en la entrega** (Dropea o tu propio stock con Correos/GLS con reembolso). **Con AliExpress no se puede**: AliExpress no cobra al cliente. Cuando lo tengas, Configuración → Pagos → Métodos manuales → «Contra reembolso», y en el tema activa «Mostrar contra reembolso».

## 5. Descuentos de los packs (10 min) · IMPRESCINDIBLE
Los porcentajes del tema tienen que coincidir con descuentos automáticos de Shopify:
1. **Descuentos → Crear → Importe de descuento en productos → Automático**
   - Nombre: `Pack 2`, 30 %, se aplica a la colección «Todas» (o a los productos de packs), **cantidad mínima de artículos: 2**.
2. Otro igual: `Pack 3`, 40 %, **cantidad mínima: 3**.
3. Shopify aplica el mejor de los dos. Comprueba en la cesta: 2 unidades de 24,99 € = 34,99 €; 3 unidades = 44,98 €.

Si cambias los porcentajes, cámbialos también en **Personalizar → plantilla de producto → Ficha de producto AOM → bloques Pack**.

## 6. Productos
1. **Productos → Importar** → `productos.csv` (entra como borrador).
2. Sube tus imágenes de Gemini (mínimo 4: producto sobre fondo, puesto, detalle, en contexto de regalo). Formato cuadrado 1:1.
3. Escribe el **material real** en la descripción (está marcado entre corchetes). No pongas «acero inoxidable», «no se oscurece», «hipoalergénico» ni «sin níquel» si el proveedor no lo confirma.
4. Cambia el estado a **Activo** y añádelo a su colección.

**Para AliExpress:** instala **DSers**, conecta tu cuenta de AliExpress y enlaza cada producto con el anuncio del proveedor que tenga «Envío desde España». Comprueba el stock antes de cada campaña.

## 7. Políticas y páginas legales (30 min)
- **Configuración → Políticas:** genera reembolso, privacidad, términos y envíos con las plantillas de Shopify y **revísalas**: 14 días de desistimiento, garantía legal de 3 años, tus datos (nombre, NIF, email).
- **Tienda online → Páginas:** crea «Sobre nosotros», «Envíos», «Devoluciones», «Contacto» (plantilla `page.contact`) y «Preguntas frecuentes». Textos abajo.
- Instala una app de **banner de cookies** (la de Shopify «Customer Privacy» vale).

## 8. Antes de anunciar · checklist
- [ ] Haz un pedido de prueba con tarjeta y reembólsalo.
- [ ] Prueba los packs en la cesta (descuento aplicado).
- [ ] Mira la web en el móvil de principio a fin.
- [ ] Dominio propio conectado (.es o .com).
- [ ] Cuenta publicitaria y píxel **nuevos**, separados de Zentia. Dominio verificado en Meta.
- [ ] Alta de autónomo hablada con el gestor.
- [ ] Reseñas: la sección está apagada. Actívala **solo con reseñas reales** (o instala Judge.me).

---

## Textos para las páginas

### Sobre nosotros
> En Atelier Oro Madrid elegimos joyas elegantes para llevar cada día, no para guardar en un cajón. Seleccionamos cada pieza por su acabado, su comodidad y su precio, y te la enviamos desde España para que la tengas en 24/48 h.
>
> Detrás de la tienda hay personas, no un robot: si tienes cualquier duda antes o después de comprar, escríbenos y te respondemos.

### Envíos
> - Envío gratis a la España peninsular y Baleares.
> - Plazo: 24/48 h laborables desde que sale el pedido.
> - Recibirás un email con el número de seguimiento.
> - De momento no enviamos a Canarias, Ceuta ni Melilla.

### Devoluciones
> Tienes 14 días naturales desde que recibes el pedido para devolverlo sin dar explicaciones. Escríbenos a [tu email] con tu número de pedido y te indicamos cómo enviarlo. Te devolvemos el importe en un máximo de 14 días desde que lo recibimos. Todos los productos tienen 3 años de garantía legal.

### Contacto
> ¿Tienes alguna duda? Escríbenos a [tu email] o por WhatsApp al [tu número]. Respondemos de lunes a viernes.
