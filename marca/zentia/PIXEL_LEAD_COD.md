# Píxel «Lead» para los pedidos contra reembolso (26-nov-2026)

El formulario propio (tema v3.6, snippet `zn-cod`) lanza el evento `zn_pedido_cod` al enviarse un pedido.
Este píxel personalizado lo escucha y manda a Meta un **Lead** con el valor del pedido (69,90 € o 54,85 €).

## Cómo ponerlo (5 minutos, en el ordenador o el móvil)
1. Shopify → **Configuración → Eventos de clientes** → **Añadir píxel personalizado**.
2. Nombre: `Meta Lead contra reembolso`.
3. **Permiso de clientes**: «Obligatorio» → marcar **Marketing** (respeta el banner de cookies).
4. **Venta de datos**: «Los datos cumplen los requisitos…» (lo que salga por defecto).
5. Borra el código de ejemplo y pega el de abajo → **Guardar** → **Conectar**.

```js
// Meta Lead · pedidos contra reembolso del formulario propio (zn_pedido_cod)
!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
document,'script','https://connect.facebook.net/en_US/fbevents.js');

fbq('init', '1097392456530786');

analytics.subscribe('zn_pedido_cod', (event) => {
  const d = event.customData || {};
  fbq('track', 'Lead', {
    value: Number(d.value) || 0,
    currency: d.currency || 'EUR',
    content_name: 'Pedido contra reembolso',
    num_items: d.quantity || 1
  }, { eventID: d.event_id || event.id });
});
```

## Comprobarlo
1. Meta → Administrador de eventos → píxel 1097392456530786 → **Probar eventos** → pon la URL de la ficha.
2. En esa ventana acepta las cookies, haz un pedido de prueba con el formulario y mira que aparece **Lead** con valor 69,90 EUR.
3. Borra el correo del pedido de prueba (no lo pases a Dropi).

## En la campaña
- Objetivo **Ventas** (o Clientes potenciales) con evento de conversión **Lead** del píxel 1097392456530786. Las compras con tarjeta siguen llegando como **Purchase** por la app de Meta.
- Coste por Lead máximo para no perder: ~15–20 € (con ~20–30 % de rechazos contra reembolso). Contar como venta real solo lo entregado.
- Si alguien rechaza las cookies, no se envía el Lead: mira también los correos de pedidos (son la cifra real).
