# Píxel de Meta para el formulario contra reembolso (26-nov-2026)

El formulario propio (snippet `zn-cod`, temas v3.6/v3.7) lanza dos eventos:
- `zn_cod_abierto` al abrir el formulario (una vez por visita) → Meta **InitiateCheckout**.
- `zn_pedido_cod` al enviar el pedido → Meta **Purchase** con el valor (69,90 € o 54,85 €).

Solo píxel del navegador (sin API de Conversiones, decisión del dueño). Los pedidos contra reembolso no pasan por el checkout de Shopify, así que no se duplican con el Purchase de la app de Meta (ese sigue saliendo en los pagos con tarjeta).

## Cómo ponerlo
1. Shopify → **Configuración → Eventos de clientes** → **Añadir píxel personalizado** (o editar el que ya hayas creado).
2. Nombre: `Meta contra reembolso`.
3. Permiso de clientes: «Obligatorio» → **Marketing**.
4. Pegar el código → **Guardar** → **Conectar**.

```js
!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
document,'script','https://connect.facebook.net/en_US/fbevents.js');

fbq('init', '1097392456530786');

analytics.subscribe('zn_cod_abierto', (event) => {
  const d = event.customData || {};
  fbq('track', 'InitiateCheckout', {
    value: Number(d.value) || 0, currency: 'EUR', num_items: d.quantity || 1
  }, { eventID: event.id });
});

analytics.subscribe('zn_pedido_cod', (event) => {
  const d = event.customData || {};
  fbq('track', 'Purchase', {
    value: Number(d.value) || 0, currency: 'EUR', num_items: d.quantity || 1,
    content_name: 'Pedido contra reembolso'
  }, { eventID: d.event_id || event.id });
});
```

## Comprobarlo
Meta → Administrador de eventos → píxel → **Probar eventos** → URL de la ficha → acepta cookies → abre el formulario (InitiateCheckout) → envía un pedido de prueba (Purchase 69,90 EUR). Borra luego el correo de ese pedido.

## Ojo
- Purchase cuenta pedidos enviados, no entregados: con contra reembolso habrá rechazos (~20–30 %). El CPA real es el de los entregados.
- Quien rechaza las cookies no se cuenta: la cifra real son los correos de pedido.
