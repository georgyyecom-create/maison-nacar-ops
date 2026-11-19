# Mensajes de Zentia: WhatsApp y correo (19-nov-2026)

Enlace de la guía PDF (Archivos de Shopify):
https://cdn.shopify.com/s/files/1/1092/0358/7412/files/Guia-Zentia-Dormir-de-lado.pdf?v=1794984353

Todos son mensajes de servicio sobre el pedido que la persona ha hecho (no publicidad), así que se pueden enviar por WhatsApp sin consentimiento de marketing (LSSI). Nada de ofertas en estos mensajes.

## 1. WhatsApp Business: configuración
- Nombre: **Zentia** · Categoría: Tienda · Foto: `logo-v4/zentia-icono.png`.
- Descripción: «Cojín de rodillas para dormir de lado. Envío desde España, pago contra reembolso y 60 noches de prueba.»
- Web: https://zentiadescanso.com · Horario: L–S 10:00–20:00.
- Mensaje de ausencia: «¡Hola! Ahora mismo no estamos, te contestamos mañana a partir de las 10:00. Si es por un pedido, escríbenos tu número de pedido 😊»
- Mensaje de bienvenida: «¡Hola! Gracias por escribir a Zentia. ¿En qué te ayudamos?»
- Etiquetas: «Pendiente confirmar» · «Confirmado» · «Enviado» · «Entregado» · «Rechazado».

## 2. Respuestas rápidas (Herramientas para la empresa → Respuestas rápidas)

### /confirmar · pedido contra reembolso (en menos de 3 h)
> Hola, [nombre] 😊 Soy [tu nombre], de Zentia. Te escribo para confirmar tu pedido:
> • [2 cojines de rodillas + antifaz de regalo]
> • Total: [49,90 €], que pagas en efectivo al repartidor
> • Dirección: [calle, número, CP, ciudad]
>
> Llega en 2–4 días laborables por MRW. ¿Está todo bien? Respóndenos «Sí» y lo enviamos hoy.

### /gracias · después de que responda «Sí» (los dos tipos de pago)
> ¡Perfecto, [nombre]! Tu pedido sale hoy 📦
> Como regalo, aquí tienes nuestra guía «Dormir de lado, bien», con lo que mejor funciona para descansar de lado:
> https://cdn.shopify.com/s/files/1/1092/0358/7412/files/Guia-Zentia-Dormir-de-lado.pdf?v=1794984353
> Te avisamos cuando esté en camino.

### /tarjeta · pedido pagado con tarjeta (en menos de 3 h)
> Hola, [nombre] 😊 Soy [tu nombre], de Zentia. Hemos recibido tu pedido de [2 cojines de rodillas + antifaz] y el pago está confirmado.
> Solo para asegurarnos: ¿la dirección de entrega es [calle, número, CP, ciudad]?
> Respóndenos «Sí» y te mandamos la guía PDF de regalo.

(Tras su «Sí», usar /gracias.)

### /enviado · cuando Dropi dé el número de seguimiento
> [nombre], tu pedido ya va de camino con MRW 🚚 Puedes seguirlo aquí: [enlace o número de seguimiento].
> Si es contra reembolso, ten preparados [49,90 €] para el repartidor.

### /manana · el día antes de la entrega (solo contra reembolso)
> ¡Hola, [nombre]! Mañana te llega tu pedido de Zentia. Recuerda tener preparados [49,90 €] para el repartidor. Si no vas a estar en casa, dinos una hora o una dirección mejor y se lo pasamos a MRW.

### /noconfirma · si a las 24 h no ha contestado
> Hola, [nombre], no hemos podido confirmar tu pedido de Zentia. ¿Sigues queriéndolo? Si no nos dices nada en 24 h, lo cancelamos sin ningún coste para ti.

### /entregado · 7 días después de la entrega
> Hola, [nombre]. ¿Qué tal estas primeras noches con el cojín? Si tienes cualquier duda para colocarlo, aquí estamos. Y si te está gustando, nos ayudaría mucho que nos lo contaras con una foto del cojín en tu cama (sin salir tú).

(Las reseñas que lleguen así se pueden publicar en la ficha con su permiso: son reales.)

## 3. Rutina diaria (10 minutos)
1. Shopify → Pedidos nuevos.
2. Contra reembolso → /confirmar · Tarjeta → /tarjeta. Etiqueta «Pendiente confirmar».
3. Cuando responden «Sí» → /gracias, etiqueta «Confirmado» y **pasar el pedido a Dropi**.
4. Sin respuesta en 24 h → /noconfirma. Sin respuesta en 48 h → cancelar en Shopify (sin enviar).
5. Con seguimiento → /enviado. El día antes → /manana.
6. Rechazado en la entrega → etiqueta «Rechazado» en Shopify y no volver a aceptarle contra reembolso.

## 4. Mensajes automáticos de Dropi
Dropi, desde su panel (Configuración → Notificaciones / Integraciones), puede avisar al cliente por correo o SMS cuando el pedido se envía y cuando está en reparto. **Actívalos solo si salen con el nombre «Zentia» o neutros**; si salen con la marca de Dropi, déjalos apagados y usa /enviado y /manana.

## 5. Correos de Shopify
- **Confirmación del pedido:** pegar el fragmento de `guia/CORREO_CONFIRMACION.md` (enlace a la guía) en Configuración → Notificaciones → Confirmación del pedido → Editar código.
- **Envío confirmado y en reparto:** dejar los de Shopify (se mandan solos al marcar el pedido como enviado).
- **Carrito o pago abandonado:** Marketing → Automatizaciones → «Pago abandonado» y «Carrito abandonado», **solo a quien aceptó marketing**. Un correo a la hora y otro a las 24 h, sin descuento:
  - Asunto 1: «Tu cojín Zentia te espera»
  - Texto: «Dejaste tu pedido a medias. Si te surgió alguna duda (medidas, envío, contra reembolso), respóndenos a este correo o escríbenos por WhatsApp. Tu carrito sigue guardado.»
  - Asunto 2: «¿Te ayudamos con el pedido?»
  - Texto: «El pack de 2 con antifaz de regalo sigue disponible hasta el 30 de noviembre. Pagas al recibir y tienes 60 noches de prueba.»
