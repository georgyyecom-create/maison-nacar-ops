const { chromium } = require('playwright');
const OUT = '/home/user/maison-nacar-ops/marca/';
const FONT = '<link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wdth,wght@12..96,75..100,400..800&family=Instrument+Sans:wght@400;500;600&display=block" rel="stylesheet">';
const BASE = `*{margin:0;box-sizing:border-box}html,body{width:100%;height:100%}
.w{font-family:'Bricolage Grotesque';font-weight:800;letter-spacing:-.045em;word-spacing:.12em;line-height:.86;font-variation-settings:"opsz" 96,"wdth" 82;white-space:nowrap}
.c{display:grid;place-items:center;width:100%;height:100%;text-align:center}
.t{font-family:'Instrument Sans';font-weight:500}`;
const s = (d, sw = 1.5) => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${sw}" stroke-linejoin="round" stroke-linecap="round">${d}</svg>`;
const IC = {
  envios: s('<path d="M2.5 6.5h11v9h-11zM13.5 9.5h4l3 3v3h-7z"/><circle cx="6.5" cy="17.5" r="1.7"/><circle cx="17" cy="17.5" r="1.7"/>'),
  regalo: s('<rect x="3" y="8" width="18" height="4"/><path d="M5 12v9h14v-9M12 8v13M12 8S10.5 3 8 4.5 9 8 12 8zm0 0s1.5-5 4-3.5S15 8 12 8z"/>'),
  gala: s('<path d="M12 2.5c.6 4.8 2.7 6.9 7.5 7.5-4.8.6-6.9 2.7-7.5 7.5-.6-4.8-2.7-6.9-7.5-7.5 4.8-.6 6.9-2.7 7.5-7.5z"/><path d="M19 15.5c.3 1.9 1.1 2.7 3 3-1.9.3-2.7 1.1-3 3-.3-1.9-1.1-2.7-3-3 1.9-.3 2.7-1.1 3-3z"/>'),
  corazones: s('<path d="M12 20s-7.5-4.6-7.5-10A4.2 4.2 0 0 1 12 7.6 4.2 4.2 0 0 1 19.5 10c0 5.4-7.5 10-7.5 10z"/>'),
  cuidados: s('<path d="M12 3s6 6.6 6 11a6 6 0 0 1-12 0c0-4.4 6-11 6-11z"/>'),
  garantia: s('<path d="M12 3 4.5 6v6c0 4.4 3.2 7.8 7.5 9 4.3-1.2 7.5-4.6 7.5-9V6z"/><path d="m8.5 12 2.5 2.5 4.5-5"/>'),
  dudas: s('<path d="M4 5h16v11H9l-5 4z"/>'),
};
const jobs = [];
const page = (name, w, h, css, html, transparent) => jobs.push({ name, w, h, transparent, html: `<!doctype html><html><head><meta charset="utf-8">${FONT}<style>${BASE}${css}</style></head><body>${html}</body></html>` });

// Perfil (Instagram, Facebook, WhatsApp, TikTok): todo dentro del círculo
for (const [n, bg, fg] of [['perfil-negro', '#000', '#fff'], ['perfil-blanco', '#fff', '#000']])
  page(n, 1080, 1080, `body{background:${bg};color:${fg}}.w{font-size:250px}`, `<div class="c"><div class="w">maison<br>nácar</div></div>`);
// Logos horizontales con fondo transparente
for (const [n, fg] of [['logo-negro', '#000'], ['logo-blanco', '#fff']])
  page(n, 2400, 600, `body{background:transparent;color:${fg}}.w{font-size:330px}`, `<div class="c"><div class="w">maison nácar</div></div>`, true);
// Logo apilado transparente
for (const [n, fg] of [['logo-apilado-negro', '#000'], ['logo-apilado-blanco', '#fff']])
  page(n, 1400, 1400, `body{background:transparent;color:${fg}}.w{font-size:330px}`, `<div class="c"><div class="w">maison<br>nácar</div></div>`, true);
// Icono pequeño (favicon, avatar diminuto)
page('icono-mn', 512, 512, `body{background:#000;color:#fff}.w{font-size:280px;letter-spacing:.02em}`, `<div class="c"><div class="w">mn</div></div>`);
// Portada de Facebook
page('portada-facebook', 1640, 856, `body{background:#000;color:#fff}.w{font-size:210px}.t{margin-top:40px;font-size:34px;letter-spacing:.02em;color:#B8975A}`,
  `<div class="c"><div><div class="w">maison nácar</div><p class="t">Elige 3, paga 2 · Envío gratis · Acero con baño de oro 18k</p></div></div>`);
// Destacadas de Instagram (1080x1920, el icono en el centro)
const HL = [['01-3x2', '<div class="w" style="font-size:300px;letter-spacing:-.06em">3x2</div>'], ['02-envios', IC.envios], ['03-regalo', IC.regalo], ['04-gala', IC.gala], ['05-corazones', IC.corazones], ['06-cuidados', IC.cuidados], ['07-garantia', IC.garantia], ['08-dudas', IC.dudas]];
for (const [n, ic] of HL)
  page('destacadas/' + n, 1080, 1920, `body{background:#000;color:#fff}svg{width:380px;height:380px}.r{display:grid;place-items:center;width:620px;height:620px;border-radius:50%;box-shadow:inset 0 0 0 3px #B8975A}`, `<div class="c"><div class="r">${ic}</div></div>`);

(async () => {
  const b = await chromium.launch();
  for (const j of jobs) {
    const p = await b.newPage({ viewport: { width: j.w, height: j.h } });
    await p.setContent(j.html, { waitUntil: 'networkidle' });
    await p.evaluate(() => document.fonts.ready);
    await p.screenshot({ path: OUT + j.name + '.png', omitBackground: !!j.transparent });
    await p.close();
  }
  await b.close();
  console.log('ok', jobs.length);
})();
