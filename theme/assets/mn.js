/* Maison Nácar v20 · cesta (el estuche), paneles y botones «+».
   window.MN = { add, open, refresh, money, slotsHTML } */
(function () {
  if (window.MN) return;
  var el = document.getElementById('mn-data');
  var D = el ? JSON.parse(el.textContent) : { money: '{{amount_with_comma_separator}} €', root: '/', upsell: [] };
  var AMT = /\{\{\s*amount[a-z_]*\s*\}\}/;
  function money(c) {
    var n = (c / 100).toFixed(2);
    if (/comma/.test(D.money)) n = n.replace('.', ',');
    var out = D.money.replace(AMT, n).replace(/<[^>]*>/g, '');
    return out.replace(/,00(?=\D|$)/, '').replace(/\.00(?=\D|$)/, '');
  }
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function img(u, w) { if (!u) return ''; return u + (u.indexOf('?') > -1 ? '&' : '?') + 'width=' + w; }
  var CHECK = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" aria-hidden="true"><path d="m5 12.5 4.5 4.5L19 7.5"/></svg>';
  var PLUS = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M12 5v14M5 12h14"/></svg>';

  /* Huecos del estuche. units: [{ img, name, on, gift }] (máx. 3). */
  function slotsHTML(units, opts) {
    opts = opts || {};
    var h = '';
    for (var i = 0; i < 3; i++) {
      var u = units[i];
      var gift = (u && u.gift) || (!u && i === 2);
      var cls = 'mn-slot' + (gift ? ' is-gift' : '') + (u ? '' : ' is-empty') + (u && u.on === false ? ' is-off' : '');
      var inner = u
        ? (u.img ? '<img src="' + esc(img(u.img, 240)) + '" alt="">' : '') + (opts.checks ? '<span class="mn-slot__check">' + CHECK + '</span>' : '') + '<span class="mn-slot__name">' + (gift && u.on !== false ? 'Regalo' : esc(u.name)) + '</span>'
        : '<span class="mn-slot__plus">+</span>' + (i === 2 ? '<span class="mn-slot__name">Regalo</span>' : '');
      var tag = opts.buttons && u ? 'button type="button" data-mn-slot="' + i + '" aria-pressed="' + (u.on !== false) + '" aria-label="' + esc(u.name) + '"' : 'span';
      h += '<' + tag + ' class="' + cls + '">' + inner + '</' + tag.split(' ')[0] + '>';
    }
    return h;
  }

  /* Paneles */
  var scrim = document.querySelector('[data-mn-scrim]'), last = null;
  function open(name) {
    var p = document.querySelector('[data-mn-panel="' + name + '"]'); if (!p) return;
    closeAll(true); last = document.activeElement;
    p.classList.add('is-on'); if (scrim) scrim.classList.add('is-on'); document.body.classList.add('mn-lock');
    var c = p.querySelector('[data-mn-close]'); if (c) setTimeout(function () { c.focus(); }, 60);
  }
  function closeAll(keep) {
    document.querySelectorAll('[data-mn-panel].is-on').forEach(function (p) { p.classList.remove('is-on'); });
    if (!keep) { if (scrim) scrim.classList.remove('is-on'); document.body.classList.remove('mn-lock'); if (last) last.focus(); }
  }

  var hdr = document.querySelector('[data-mn-hdr]');
  window.addEventListener('scroll', function () { if (hdr) hdr.classList.toggle('is-stuck', window.scrollY > 4); }, { passive: true });

  /* Cesta */
  function api(url, data) {
    var o = data ? { method: 'POST', headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' }, body: JSON.stringify(data) } : { headers: { 'Accept': 'application/json' } };
    return fetch(D.root + url, o).then(function (r) { return r.json().then(function (j) { if (!r.ok) throw new Error(j.description || j.message || r.status); return j; }); });
  }
  var body = document.querySelector('[data-mn-cart-body]'), foot = document.querySelector('[data-mn-cart-foot]');
  function units(cart) {
    var u = [];
    cart.items.forEach(function (it) {
      var per = it.final_line_price / it.quantity, orig = it.original_line_price / it.quantity;
      var freeLeft = Math.round((it.original_line_price - it.final_line_price) / (orig || 1));
      for (var q = 0; q < it.quantity; q++) u.push({ img: it.image, name: it.product_title, gift: q < freeLeft, price: orig });
    });
    return u;
  }
  function render(cart) {
    var n = cart.item_count;
    document.querySelectorAll('[data-mn-count]').forEach(function (c) { c.textContent = n; c.hidden = n === 0; });
    var cn = document.querySelector('[data-mn-cart-n]'); if (cn) cn.textContent = n ? '(' + n + ')' : '';
    document.dispatchEvent(new CustomEvent('mn:cart', { detail: cart }));
    if (!body) return;
    if (!n) {
      body.innerHTML = '<div class="mn-box mn-cart__box"><p class="mn-box__h"><b>Tu estuche está vacío</b><span>3 huecos</span></p><div class="mn-slots">' + slotsHTML([]) + '</div><p class="mn-box__note">Elige 3 joyas: la de menor precio es tu regalo.</p></div><div class="mn-cart__empty"><a class="mn-btn" href="' + D.root + 'pages/3x2">Llenar mi estuche</a></div>';
      foot.hidden = true; return;
    }
    var U = units(cart), shown = U.slice(0, 3), giftU = U.filter(function (x) { return x.gift; })[0];
    if (U.length >= 3 && giftU && shown.indexOf(giftU) < 0) shown[2] = giftU;
    var note = n === 1 ? 'Añade 2 joyas más: la de menor precio será tu regalo.' : n === 2 ? 'Añade una joya más: la de menor precio será tu regalo.' : (n % 3 === 0 ? 'Estuche completo. Tu regalo ya está descontado.' : 'Tu regalo ya está descontado. Con ' + (3 - n % 3) + ' más, otro de regalo.');
    var h = '<div class="mn-box mn-cart__box"><p class="mn-box__h"><b>' + (n >= 3 ? 'Estuche completo' : n + ' de 3') + '</b><span>3x2</span></p><div class="mn-slots">' + slotsHTML(shown) + '</div><p class="mn-box__note">' + note + '</p></div><ul class="mn-cart__items">';
    cart.items.forEach(function (it, i) {
      var v = it.variant_title && it.variant_title !== 'Default Title' ? '<p class="mn-cart__v">' + esc(it.variant_title.replace(/Gold/i, 'Dorado').replace(/Silver/i, 'Plateado').replace(' / One Size', '')) + '</p>' : '';
      var disc = it.final_line_price < it.original_line_price;
      h += '<li class="mn-cart__it"><a class="mn-cart__img" href="' + esc(it.url) + '">' + (it.image ? '<img src="' + esc(img(it.image, 200)) + '" alt="" loading="lazy">' : '') + '</a>'
        + '<div><a class="mn-cart__n" href="' + esc(it.url) + '">' + esc(it.product_title) + '</a>' + v
        + '<div class="mn-cart__q"><button type="button" data-mn-q="' + (i + 1) + '" data-d="-1" aria-label="Quitar una">−</button><span>' + it.quantity + '</span><button type="button" data-mn-q="' + (i + 1) + '" data-d="1" aria-label="Añadir una">+</button></div></div>'
        + '<div class="mn-cart__side">' + (disc ? '<s>' + money(it.original_line_price) + '</s>' : '') + money(it.final_line_price) + (disc ? '<em>Regalo</em>' : '') + '<button type="button" class="mn-cart__rm" data-mn-rm="' + (i + 1) + '">Quitar</button></div></li>';
    });
    h += '</ul>';
    var inCart = cart.items.map(function (i) { return i.product_id; });
    var ups = (D.upsell || []).filter(function (p) { return p && inCart.indexOf(p.id) < 0; }).slice(0, 8);
    if (ups.length) {
      h += '<div class="mn-cart__up"><h3>' + esc(n % 3 === 2 ? 'Elige tu regalo' : D.upTitle) + '</h3><div class="mn-rail">' + ups.map(function (p) {
        return '<div class="mn-card"><a class="mn-card__media" href="' + esc(p.u) + '">' + (p.img ? '<img src="' + esc(p.img) + '" alt="" loading="lazy">' : '') + '</a><button type="button" class="mn-card__add" data-mn-add="' + p.v + '" aria-label="Añadir ' + esc(p.t) + '">' + PLUS + '</button><div class="mn-card__body"><a class="mn-card__t" href="' + esc(p.u) + '">' + esc(p.t) + '</a><span class="mn-card__p">' + money(p.p) + '</span></div></div>';
      }).join('') + '</div></div>';
    }
    body.innerHTML = h;
    var save = cart.original_total_price - cart.total_price;
    document.querySelector('[data-mn-sub]').textContent = money(cart.original_total_price);
    document.querySelector('[data-mn-save-row]').hidden = save <= 0;
    document.querySelector('[data-mn-save]').textContent = '−' + money(save);
    document.querySelector('[data-mn-total]').textContent = money(cart.total_price);
    foot.hidden = false;
  }
  function refresh() { return api('cart.js').then(function (c) { render(c); return c; }); }
  function add(items) {
    return api('cart/add.js', { items: items }).then(refresh).then(function (c) { open('cart'); return c; })
      .catch(function (e) { alert('No se ha podido añadir: ' + e.message); throw e; });
  }
  if (body) body.addEventListener('click', function (e) {
    var q = e.target.closest('[data-mn-q]'), rm = e.target.closest('[data-mn-rm]');
    if (!q && !rm) return;
    var line = +(q ? q.getAttribute('data-mn-q') : rm.getAttribute('data-mn-rm'));
    var cur = q ? +q.parentNode.querySelector('span').textContent : 0;
    var qty = rm ? 0 : Math.max(0, cur + (+q.getAttribute('data-d')));
    body.style.opacity = .5;
    api('cart/change.js', { line: line, quantity: qty }).then(render).finally(function () { body.style.opacity = ''; });
  });

  document.addEventListener('click', function (e) {
    var o = e.target.closest('[data-mn-open]');
    if (o) { e.preventDefault(); var nm = o.getAttribute('data-mn-open'); if (nm === 'cart') refresh().then(function () { open('cart'); }); else open(nm); return; }
    if (e.target.closest('[data-mn-close]') || e.target === scrim) { closeAll(); return; }
    var a = e.target.closest('[data-mn-add]');
    if (a) { e.preventDefault(); a.classList.add('is-busy'); add([{ id: +a.getAttribute('data-mn-add'), quantity: 1 }]).then(function () { a.classList.remove('is-busy'); a.classList.add('is-in'); a.innerHTML = CHECK; }, function () { a.classList.remove('is-busy'); }); return; }
    var s = e.target.closest('[data-mn-addset]');
    if (s) { e.preventDefault(); s.classList.add('is-busy'); add(s.getAttribute('data-mn-addset').split(',').filter(Boolean).map(function (id) { return { id: +id, quantity: 1 }; })).then(function () { s.classList.remove('is-busy'); }, function () { s.classList.remove('is-busy'); }); }
  });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeAll(); });

  window.MN = { add: add, open: open, refresh: refresh, money: money, slotsHTML: slotsHTML, esc: esc };
  window.AOMCart = { add: add, open: function () { refresh().then(function () { open('cart'); }); }, refresh: refresh };
})();
