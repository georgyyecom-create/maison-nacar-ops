# Entrega de la guía PDF en el correo de confirmación

Shopify → Configuración → Notificaciones → Notificaciones para clientes → **Confirmación de pedido** → Editar código.
Pega esto justo **debajo** de la línea `{% capture email_body %}...{% endcapture %}` o, si es más fácil, antes de la tabla del resumen del pedido:

```liquid
{% assign zn_guia = false %}
{% for line in line_items %}
  {% if line.product.handle == 'kit-dormir-de-lado' or line.product.handle == 'guia-dormir-de-lado' %}{% assign zn_guia = true %}{% endif %}
{% endfor %}
{% if zn_guia %}
<table style="width:100%;margin:16px 0;background:#F1F5FC;border-radius:12px"><tr><td style="padding:18px 20px;font-family:Arial,sans-serif;color:#16244A">
  <p style="margin:0 0 6px;font-size:17px;font-weight:bold">Tu regalo: la guía «Dormir de lado, bien»</p>
  <p style="margin:0 0 12px;font-size:14px;color:#3A4257">11 páginas con cómo colocar el cojín, la almohada y un plan de 7 noches.</p>
  <a href="https://cdn.shopify.com/s/files/1/1092/0358/7412/files/Guia-Zentia-Dormir-de-lado.pdf?v=1794984353" style="display:inline-block;background:#16244A;color:#ffffff;text-decoration:none;font-weight:bold;padding:12px 20px;border-radius:999px">Descargar la guía (PDF)</a>
</td></tr></table>
{% endif %}
```

Luego pulsa «Enviar correo de prueba» y comprueba que sale el botón.
