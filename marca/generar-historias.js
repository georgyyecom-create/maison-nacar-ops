// Historias de las destacadas y publicación de presentación (Maison Nácar).
// Uso: node marca/generar-historias.js  (necesita Playwright)
const { chromium } = require('playwright');
const fs = require('fs');
const R = __dirname + '/../';
const OUT = R + 'marca/historias/';
const d64 = f => 'data:image/jpeg;base64,' + fs.readFileSync(R + f).toString('base64');
const FONT = '<link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wdth,wght@12..96,75..100,400..800&family=Instrument+Sans:wght@400;500;600&display=block" rel="stylesheet">';
const CSS = `*{margin:0;box-sizing:border-box}body{width:1080px;height:1920px;background:#000;color:#fff;font-family:'Instrument Sans';display:flex;flex-direction:column;justify-content:center;padding:240px 96px 300px;position:relative}
.k{font-size:32px;color:#B8975A;margin-bottom:30px}
.h{font-family:'Bricolage Grotesque';font-weight:800;font-size:132px;line-height:.9;letter-spacing:-.045em;font-variation-settings:"opsz" 96,"wdth" 82}
.p{margin-top:40px;font-size:40px;line-height:1.35;color:rgba(255,255,255,.85)}
ol,ul{list-style:none;margin-top:56px;padding:0}
li{display:grid;grid-template-columns:84px 1fr;gap:20px;padding:30px 0;border-top:1px solid rgba(255,255,255,.2);font-size:38px;line-height:1.3}
li b{font-family:'Bricolage Grotesque';font-size:52px;color:#B8975A;line-height:1}
li small{display:block;font-size:30px;color:rgba(255,255,255,.65);margin-top:6px}
.img{margin-top:56px;border-radius:28px;overflow:hidden;background:#fff}.img img{display:block;width:100%}
.logo{position:absolute;left:0;right:0;bottom:170px;text-align:center;font-family:'Bricolage Grotesque';font-weight:800;font-size:44px;letter-spacing:-.045em;word-spacing:.12em;font-variation-settings:"opsz" 96,"wdth" 82}
.cta{display:inline-block;margin-top:56px;padding:26px 44px;border-radius:999px;background:#fff;color:#000;font-size:36px;font-weight:600}`;
const page = (h) => `<!doctype html><html><head><meta charset="utf-8">${FONT}<style>${CSS}</style></head><body>${h}<p class="logo">maison nácar</p></body></html>`;
const S = {
  '01-3x2-a': page(`<p class="k">Así funciona el 3x2</p><div class="h">Elige 3.<br>Paga 2.</div>
    <ol><li><b>1</b><span>Elige 3 joyas<small>Del mismo conjunto o mezcladas, como quieras.</small></span></li>
    <li><b>2</b><span>La de menor precio es gratis<small>Se descuenta sola en la cesta, sin códigos.</small></span></li>
    <li><b>3</b><span>Te llegan las 3<small>Cada una en su estuche. Con 6, dos de regalo.</small></span></li></ol>`),
  '02-envios': page(`<p class="k">Envíos</p><div class="h">Gratis.<br>Siempre.</div>
    <ul><li><b>✦</b><span>Sale en 24/48 h<small>Con número de seguimiento.</small></span></li>
    <li><b>✦</b><span>España peninsular y Baleares<small>Los plazos exactos, en la política de envíos.</small></span></li>
    <li><b>✦</b><span>Para Navidad<small>Pide antes del 14 de diciembre.</small></span></li></ul>`),
  '03-regalo': page(`<p class="k">Lista para regalar</p><div class="h">Cada joya,<br>en su estuche.</div>
    <div class="img"><img src="${d64('referencias/packaging-caja-tarjeta.jpg')}"></div>
    <p class="p">Estuche negro y tarjeta. Si es para otra persona, pon su dirección al pagar.</p>`),
  '04-garantia': page(`<p class="k">Garantía</p><div class="h">Sin<br>miedo.</div>
    <ul><li><b>3</b><span>Años de garantía de color<small>Si con un uso normal pierde el dorado, otra.</small></span></li>
    <li><b>✦</b><span>¿Llega dañada?<small>Te enviamos otra sin coste.</small></span></li>
    <li><b>✦</b><span>Devolución hasta el 15 de enero<small>Aunque sea un regalo.</small></span></li></ul>`),
  '05-cuidados': page(`<p class="k">Cuidados</p><div class="h">Que te dure<br>el brillo.</div>
    <ul><li><b>1</b><span>Perfume y crema, antes<small>Primero tú, después la joya.</small></span></li>
    <li><b>2</b><span>Sin cloro<small>Quítatela en la piscina y el jacuzzi.</small></span></li>
    <li><b>3</b><span>Guárdala en su estuche<small>Así no se raya con las demás.</small></span></li></ul>`),
  '06-dudas': page(`<p class="k">Dudas</p><div class="h">Pregunta<br>sin miedo.</div>
    <ul><li><b>?</b><span>¿De qué material es?<small>Acero inoxidable con baño de oro 18k. No se oxida ni mancha la piel.</small></span></li>
    <li><b>?</b><span>¿Cuánto tarda?<small>Sale en 24/48 h, con seguimiento.</small></span></li>
    <li><b>?</b><span>¿Y si no le gusta?<small>Devolución hasta el 15 de enero.</small></span></li></ul>
    <span class="cta">Escríbenos por WhatsApp</span>`),
};
(async () => {
  fs.mkdirSync(OUT, { recursive: true });
  const b = await chromium.launch();
  for (const [k, h] of Object.entries(S)) {
    const p = await b.newPage({ viewport: { width: 1080, height: 1920 } });
    await p.setContent(h, { waitUntil: 'networkidle' }); await p.evaluate(() => document.fonts.ready);
    await p.screenshot({ path: OUT + k + '.png' }); await p.close();
  }
  // Publicación de presentación (4:5)
  const p = await b.newPage({ viewport: { width: 1080, height: 1350 } });
  await p.setContent(`<!doctype html><html><head><meta charset="utf-8">${FONT}<style>${CSS}
    body{height:1350px;padding:120px 96px;justify-content:space-between}.h{font-size:180px}.logo{position:static;text-align:left;font-size:56px}</style></head><body>
    <p class="logo">maison nácar</p>
    <div><div class="h">Elige 3.<br>Paga 2.</div><p class="p">Joyas de acero inoxidable con baño de oro 18k.<br>La tercera, de regalo. Cada una en su estuche.</p></div>
    <p class="k" style="margin:0">Envío gratis · Sale en 24/48 h · Garantía de color 3 años</p></body></html>`, { waitUntil: 'networkidle' });
  await p.evaluate(() => document.fonts.ready);
  await p.screenshot({ path: R + 'marca/post-presentacion.png' });
  await b.close(); console.log('ok');
})();
