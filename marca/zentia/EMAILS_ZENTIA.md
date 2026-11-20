# Emails de Zentia (pasar de joyas a Zentia)

Shopify no deja cambiar las notificaciones por API: se pegan a mano en
**Configuración → Notificaciones → Notificaciones a clientes**. 15 minutos.

## Paso 1 · Marca para TODOS los emails (2 min)
Notificaciones → **Personalizar plantillas de correo**:
- Logo: `marca/zentia/zentia-logo.svg` exportado a PNG (o el logo de la tienda). Ancho 160 px.
- Color de acento: **#16244A** (azul marino de la web).
- Guardar. Esto cambia la cabecera y los botones de todos los correos.

Además, en **Configuración → Notificaciones → Correo del remitente**: nombre «Zentia», y que no quede ningún email ni firma de Maison Nácar.

## Paso 2 · Volver a las plantillas originales
En cada notificación que tenga textos de joyas (confirmación, envío, en reparto, entregado, cancelado, reembolso, carrito abandonado):
**Editar código → Revertir a la predeterminada**. Las de Shopify ya vienen en español y se adaptan solas.

Luego solo añadir los 3 bloques de abajo.

## Paso 3 · Bloques propios de Zentia

### A) Confirmación de pedido
Editar código → buscar la línea que contiene `{{ email_body }}` (el texto de saludo) y pegar **justo debajo**:

```liquid
<table class="row" style="margin-top:16px"><tr><td style="background:#F3F6FB;border-radius:12px;padding:16px;font-size:15px;line-height:1.5;color:#141A2A">
  {% if financial_status == 'pending' %}
    <strong>Pago contra reembolso:</strong> pagarás <strong>{{ total_price | money }}</strong> en efectivo al repartidor cuando te llegue. Ten el importe preparado, por favor.<br><br>
  {% endif %}
  <strong>Cuándo llega:</strong> sale de nuestro almacén en España por MRW y llega en 2–4 días laborables. Te avisaremos con el número de seguimiento.<br><br>
  <strong>60 noches de prueba:</strong> si no te convence, escríbenos y te devolvemos el dinero del cojín.<br><br>
  ¿Dudas? Escríbenos por WhatsApp: <a href="https://wa.me/34621390548" style="color:#16244A">621 390 548</a>
</td></tr></table>
```

### B) Confirmación de envío y «En reparto»
Mismo sitio (debajo de `{{ email_body }}`):

```liquid
<table class="row" style="margin-top:16px"><tr><td style="background:#F3F6FB;border-radius:12px;padding:16px;font-size:15px;line-height:1.5;color:#141A2A">
  {% if financial_status == 'pending' %}
    Recuerda: pagas <strong>{{ total_price | money }}</strong> en efectivo al repartidor de MRW.<br><br>
  {% endif %}
  Si no vas a estar en casa, puedes cambiar el día o la dirección desde el enlace de seguimiento.
</td></tr></table>
```

### C) Entregado
Debajo de `{{ email_body }}`:

```liquid
<table class="row" style="margin-top:16px"><tr><td style="background:#F3F6FB;border-radius:12px;padding:16px;font-size:15px;line-height:1.5;color:#141A2A">
  <strong>Cómo usarlo esta noche:</strong> túmbate de lado y colócalo entre las rodillas, con la parte ancha hacia los muslos. Las primeras 2–3 noches el cuerpo se acostumbra; es normal.<br><br>
  La espuma puede tardar unas horas en recuperar su forma al sacarla del envase.<br><br>
  Tienes 60 noches para probarlo. Cualquier duda, por <a href="https://wa.me/34621390548" style="color:#16244A">WhatsApp</a>.
</td></tr></table>
```

### Asuntos (campo «Asunto» de cada notificación)
- Confirmación: `Pedido {{ name }} confirmado · Zentia`
- Envío: `Tu cojín Zentia ya está en camino`
- En reparto: `Hoy llega tu pedido Zentia`
- Entregado: `Tu cojín ha llegado: así se usa`
- Carrito abandonado: `Tu cojín Zentia te espera`

## Paso 4 · Correos después de la compra (Shopify Email → Automatizaciones)
Borra o pausa los de joyas. Crea solo estos dos (son de servicio; no prometen nada falso):

1. **Día 3 tras la entrega · «¿Qué tal las primeras noches?»**
   Hola {{ nombre }}, ya llevas unas noches con tu cojín Zentia. Tres trucos: ponlo a la altura que te resulte cómoda (no hace falta que toque la ingle), si te das la vuelta llévalo contigo entre las piernas y lava la funda en la lavadora a 30 °C. Si algo no te convence, contesta a este correo.

2. **Día 21 tras la entrega · reseña real**
   Hola {{ nombre }}, ¿nos cuentas cómo duermes con Zentia? Una línea y, si quieres, una foto. Nos ayuda mucho, porque somos una tienda pequeña y empezamos ahora. [Dejar mi opinión]
   (Sin regalos a cambio de reseñas buenas: si das algo, que sea por cualquier opinión, y avisarlo.)

**Carrito abandonado** (Notificaciones o Automatizaciones): 1 correo a la hora, sin descuento: «Te guardamos el pack de 2 con antifaz de regalo hasta el 30 de noviembre. Pagas al recibir.» Un 2.º a las 24 h solo si la oferta sigue en pie.

Nada de emails comerciales a quien no compró ni aceptó (LSSI art. 21). Los de arriba son a clientes o por su propio carrito.
