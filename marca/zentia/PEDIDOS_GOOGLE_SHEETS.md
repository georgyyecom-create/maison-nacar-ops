# Pedidos contra reembolso → Google Sheets (26-nov-2026)

El formulario de la ficha (snippet `zn-cod`, tema v3.8) manda cada pedido a este script.
El script lo apunta en una hoja y te manda un correo. Sin captcha y sin apps de Shopify.
Si el script no está configurado, el formulario abre WhatsApp con el pedido ya escrito.

## Ponerlo en marcha (una vez, ~5 minutos, mejor desde el ordenador)
1. Entra en **sheets.google.com** con tu cuenta de Google → **Hoja de cálculo en blanco** → llámala `Pedidos Zentia`.
2. Menú **Extensiones → Apps Script**.
3. Borra lo que haya y pega el código de abajo → icono de **guardar**.
4. Arriba a la derecha: **Implementar → Nueva implementación**.
   - Tipo (rueda dentada): **Aplicación web**.
   - Ejecutar como: **Yo**.
   - Quién tiene acceso: **Cualquier usuario**.
   - **Implementar** → **Autorizar acceso** → elige tu cuenta → «Configuración avanzada» → «Ir a … (no seguro)» → **Permitir** (es tu propio script).
5. Copia la **URL de la aplicación web** (acaba en `/exec`).
6. Shopify → **Tienda online → Temas → Personalizar** (tema v3.8) → abre la ficha del masajeador → sección de la ficha → campo **«URL del script de pedidos (Google Apps Script)»** → pega la URL → **Guardar**. (O pásamela y la pongo yo.)
7. Haz un pedido de prueba: debe salir «¡Pedido recibido!», aparecer una fila en la hoja y llegarte un correo.

Si algún día cambias el código: **Implementar → Gestionar implementaciones → editar → Versión: nueva** (así la URL no cambia).

## Código

```js
const HOJA = 'Pedidos';
const CABECERA = ['Fecha', 'Pedido', 'Total', 'Nombre', 'Teléfono', 'Dirección', 'CP', 'Población', 'Provincia', 'Email', 'Notas', 'Origen', 'Estado'];

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    const d = JSON.parse(e.postData.contents || '{}');
    if (!d.nombre || !d.telefono || !d.direccion) return salida({ ok: false });
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    let hoja = ss.getSheetByName(HOJA);
    if (!hoja) {
      hoja = ss.insertSheet(HOJA);
      hoja.appendRow(CABECERA);
      hoja.setFrozenRows(1);
    }
    const limpio = (v) => {
      v = String(v || '').slice(0, 300);
      return /^[=+\-@]/.test(v) ? "'" + v : v; // evita fórmulas inyectadas
    };
    hoja.appendRow([
      new Date(), limpio(d.pedido), limpio(d.total), limpio(d.nombre),
      "'" + limpio(d.telefono), limpio(d.direccion), "'" + limpio(d.cp),
      limpio(d.poblacion), limpio(d.provincia), limpio(d.email), limpio(d.notas),
      limpio(d.origen), 'Nuevo'
    ]);
    MailApp.sendEmail(
      Session.getEffectiveUser().getEmail(),
      'Pedido contra reembolso: ' + d.total + ' · ' + d.nombre,
      [
        'Pedido: ' + d.pedido,
        'Total a cobrar: ' + d.total,
        '',
        'Nombre: ' + d.nombre,
        'Teléfono: ' + d.telefono,
        'Dirección: ' + d.direccion,
        'CP y población: ' + d.cp + ' ' + d.poblacion + ' (' + d.provincia + ')',
        'Email: ' + (d.email || '-'),
        'Notas: ' + (d.notas || '-'),
        '',
        'Llama para confirmar y pásalo a Dropi. Kit: añade la almohadilla de gel.',
        'Hoja: ' + ss.getUrl()
      ].join('\n')
    );
    return salida({ ok: true });
  } catch (err) {
    return salida({ ok: false, error: String(err) });
  } finally {
    lock.releaseLock();
  }
}

function salida(o) {
  return ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON);
}
```

## Día a día
- Cada pedido: fila nueva con Estado «Nuevo» + correo. Llama, confirma, pásalo a Dropi (en el kit, con la almohadilla) y cambia el Estado a «Confirmado», «Enviado», «Entregado» o «Rechazado».
- Meta: abrir el formulario = InitiateCheckout y pedido enviado = Purchase (píxel personalizado de `PIXEL_LEAD_COD.md`).
