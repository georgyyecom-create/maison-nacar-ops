(function(){
  var rm=matchMedia('(prefers-reduced-motion: reduce)').matches;
  var gal=document.querySelector('[data-gal]');
  if(gal){
    var tr=gal.querySelector('[data-track]'),th=gal.querySelector('[data-thumbs]'),sl=[].slice.call(tr.children);
    sl.forEach(function(s,i){
      var b=document.createElement('button');b.type='button';b.setAttribute('aria-label','Foto '+(i+1));
      var img=s.querySelector('img');
      if(img){var c=img.cloneNode();c.removeAttribute('fetchpriority');c.loading='lazy';c.sizes='72px';b.appendChild(c);}else{b.textContent=String(i+1).padStart(2,'0');b.className='is-txt';}
      b.addEventListener('click',function(){tr.scrollTo({left:s.offsetLeft-tr.offsetLeft,behavior:rm?'auto':'smooth'});});
      th.appendChild(b);
    });
    var tb=[].slice.call(th.children);
    var mark=function(){var i=Math.round(tr.scrollLeft/tr.clientWidth);tb.forEach(function(b,j){b.classList.toggle('is-on',j===i);});};
    tr.addEventListener('scroll',function(){requestAnimationFrame(mark);},{passive:true});mark();
  }

  var form=document.getElementById('zn-form');
  var setPrice=function(p){document.querySelectorAll('[data-buy-price],[data-sticky-price]').forEach(function(e){e.textContent=p;});};
  if(form){
    var packs=form.querySelector('.zn-packs'),qin=form.querySelector('[data-qty-input]');
    var pick=function(r){
      form.querySelectorAll('.zn-pack').forEach(function(l){l.classList.toggle('is-on',l.contains(r));});
      var lb=r.closest('.zn-pack');if(qin)qin.value=lb.dataset.qty||1;setPrice(lb.dataset.price);
    };
    var cur=form.querySelector('input[name=pack]:checked');if(cur)pick(cur);
    form.addEventListener('change',function(e){if(e.target.name==='pack')pick(e.target);});
    form.addEventListener('submit',function(e){
      if(!window.ZNCart||!window.fetch)return;
      e.preventDefault();
      var btn=form.querySelector('[data-buy]'),r=form.querySelector('input[name=pack]:checked'),q=r?+r.closest('.zn-pack').dataset.qty:1;
      btn.classList.add('is-busy');
      ZNCart.add(+packs.dataset.v1,q).then(function(){btn.classList.remove('is-busy');ZNCart.open(btn);}).catch(function(){btn.classList.remove('is-busy');form.submit();});
    });
  }
  document.querySelectorAll('[data-pick]').forEach(function(a){a.addEventListener('click',function(){
    var r=form&&form.querySelectorAll('input[name=pack]')[+a.dataset.pick-1];if(r){r.checked=true;r.dispatchEvent(new Event('change',{bubbles:true}));}
  });});

  var clk=document.querySelector('[data-deadline]'),short=document.querySelector('[data-short-clock]');
  if(clk){
    var end=new Date(clk.dataset.deadline).getTime(),u={};
    clk.querySelectorAll('[data-u]').forEach(function(b){u[b.dataset.u]=b;});
    var p2=function(n){return String(n).padStart(2,'0');};
    var tick=function(){
      var t=Math.max(0,end-Date.now()),s=Math.floor(t/1e3),d=Math.floor(s/86400),h=Math.floor(s%86400/3600),m=Math.floor(s%3600/60);
      if(t<=0){clk.closest('.zn-bar').classList.add('is-over');if(short)short.closest('p').hidden=true;return;}
      u.d.textContent=p2(d);u.h.textContent=p2(h);u.m.textContent=p2(m);u.s.textContent=p2(s%60);
      if(short)short.textContent=(d?d+' d ':'')+p2(h)+' h '+p2(m)+' min';
    };
    tick();setInterval(tick,1000);
  }

  var eta=document.querySelector('[data-eta]');
  if(eta){
    var add=function(n){var d=new Date();while(n>0){d.setDate(d.getDate()+1);var w=d.getDay();if(w&&w<6)n--;}return d;};
    var f=function(d){return d.toLocaleDateString('es-ES',{weekday:'short',day:'numeric',month:'short'}).replace(/\./g,'');};
    eta.querySelector('[data-eta-a]').textContent=f(add(+eta.dataset.min));
    eta.querySelector('[data-eta-b]').textContent=f(add(+eta.dataset.max));
  }

  var mini=document.querySelector('[data-mini]');
  if(mini){
    var cs=[].slice.call(mini.querySelectorAll('.zn-mini__card')),k=0;
    var go=function(n){cs[k].classList.remove('is-on');k=(n+cs.length)%cs.length;cs[k].classList.add('is-on');};
    var pv=mini.querySelector('[data-mini-prev]'),nx=mini.querySelector('[data-mini-next]');
    if(pv)pv.addEventListener('click',function(){go(k-1);});
    if(nx)nx.addEventListener('click',function(){go(k+1);});
  }

  var st=document.querySelector('[data-sticky]'),buy=document.querySelector('[data-buy]');
  if(st&&buy){
    var early=!!document.querySelector('.zn-art'),ticking=false;
    var upd=function(){
      ticking=false;
      var r=buy.getBoundingClientRect(),vis=r.top<innerHeight&&r.bottom>0;
      var on=!vis&&(r.top<0||(early&&scrollY>480));
      if(st.classList.contains('is-on')!==on){st.classList.toggle('is-on',on);st.setAttribute('aria-hidden',on?'false':'true');st.querySelector('a').tabIndex=on?0:-1;}
    };
    var req=function(){if(!ticking){ticking=true;requestAnimationFrame(upd);}};
    addEventListener('scroll',req,{passive:true});addEventListener('resize',req);upd();
  }

  /* ===== Carrito lateral Zentia ===== */
  var dr=document.querySelector('[data-cart]');
  if(dr){
    var panel=dr.querySelector('[data-cart-panel]'),list=dr.querySelector('[data-cart-items]'),foot=dr.querySelector('[data-cart-foot]'),
        empty=dr.querySelector('[data-cart-empty]'),ship=dr.querySelector('[data-cart-ship]'),up=dr.querySelector('[data-cart-up]'),
        sub=dr.querySelector('[data-cart-sub]'),go=dr.querySelector('[data-cart-go]'),
        PID=+dr.dataset.pid,V1=+dr.dataset.v1,GV=+dr.dataset.gift||0,GP=+dr.dataset.giftpid||0,FREE=+dr.dataset.free,P1=+dr.dataset.p1,P2=+dr.dataset.p2,last=null;
    var fmt=function(c){return (c/100).toFixed(2).replace('.',',')+' €';};
    var esc=function(s){return String(s==null?'':s).replace(/[&<>"]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c];});};
    var api=function(url,body){return fetch(url,{method:body?'POST':'GET',headers:{'Content-Type':'application/json','Accept':'application/json'},body:body?JSON.stringify(body):undefined}).then(function(r){if(!r.ok)throw r;return r.json();});};
    var counts=function(n){document.querySelectorAll('[data-cart-count]').forEach(function(e){e.textContent=n;e.hidden=!n;});};
    var render=function(c){
      counts(c.item_count);
      var zn=0;
      list.innerHTML=c.items.map(function(it){
        if(it.product_id===PID||it.product_id===GP)zn+=it.final_line_price;
        var img=it.image?'<img src="'+esc(it.image)+'&width=160" alt="" width="72" height="72" loading="lazy">':'<span class="zn-ci__ph" aria-hidden="true">Z</span>';
        var isg=GP&&it.product_id===GP,gift=isg?'<span class="zn-ci__gift">Regalo del pack de 2</span>':'';
        var was=it.original_line_price>it.final_line_price?'<s>'+fmt(it.original_line_price)+'</s>':'';
        return '<li class="zn-ci" data-key="'+esc(it.key)+'">'+img+
          '<div class="zn-ci__main"><b>'+esc(it.product_title)+'</b>'+(it.variant_title?'<span>'+esc(it.variant_title)+'</span>':'')+gift+
          (isg?'</div>':'<div class="zn-ci__row"><div class="zn-qty" role="group" aria-label="Cantidad"><button type="button" data-q="-1" aria-label="Quitar uno">−</button><output>'+it.quantity+'</output><button type="button" data-q="1" aria-label="Añadir uno">+</button></div>'+
          '<button type="button" class="zn-ci__rm" data-rm>Quitar</button></div></div>')+
          '<p class="zn-ci__price">'+was+fmt(it.final_line_price)+'</p></li>';
      }).join('');
      empty.hidden=c.item_count>0;foot.hidden=!c.item_count;list.hidden=!c.item_count;
      var gd=dr.querySelector('[data-cart-guide]');if(gd)gd.hidden=!(zn>0);
      /* envío gratis */
      if(zn>0){
        var left=FREE-zn,pct=Math.min(100,zn/FREE*100);
        ship.hidden=false;
        ship.querySelector('span').innerHTML=left>0?'Te faltan <b>'+fmt(left)+'</b> para el envío gratis':'<b>Tienes envío gratis</b>';
        ship.querySelector('i').style.transform='scaleX('+(pct/100)+')';
        ship.classList.toggle('is-done',left<=0);
      }else ship.hidden=true;
      /* subir al pack de 2 */
      var single=c.items.filter(function(it){return it.product_id===PID;});
      if(single.length===1&&single[0].quantity===1&&P2>P1){
        up.hidden=false;up.dataset.key=single[0].key;
        up.querySelector('[data-up-diff]').textContent=fmt(P2-P1);
      }else up.hidden=true;
      sub.textContent=fmt(c.total_price);
      go.querySelector('[data-go-price]').textContent=fmt(c.total_price);
    };
    var busy=function(on){panel.classList.toggle('is-busy',on);};
    /* el antifaz va solo con 2 o más cojines, y solo uno */
    var sync=function(c){
      if(!GV)return Promise.resolve(c);
      var n=0,g=null;
      c.items.forEach(function(it){if(it.product_id===PID)n+=it.quantity;if(it.product_id===GP)g=it;});
      if(n>=2&&!g)return api('/cart/add.js',{items:[{id:GV,quantity:1}]}).then(function(){return api('/cart.js');});
      if(n<2&&g)return api('/cart/change.js',{id:g.key,quantity:0});
      if(g&&g.quantity>1)return api('/cart/change.js',{id:g.key,quantity:1});
      return Promise.resolve(c);
    };
    var load=function(){return api('/cart.js').then(sync).then(render);};
    window.ZNCart={
      add:function(id,q){return api('/cart/add.js',{items:[{id:+id,quantity:q||1}]}).then(load);},
      open:function(from){
        last=from||document.activeElement;dr.hidden=false;
        requestAnimationFrame(function(){requestAnimationFrame(function(){dr.classList.add('is-open');});});
        document.documentElement.classList.add('zn-lock');
        setTimeout(function(){panel.focus();},60);
      },
      close:function(){
        dr.classList.remove('is-open');document.documentElement.classList.remove('zn-lock');
        setTimeout(function(){if(!dr.classList.contains('is-open'))dr.hidden=true;},rm?0:320);
        if(last&&last.focus)last.focus();
      }
    };
    document.querySelectorAll('[data-cart-open]').forEach(function(b){b.addEventListener('click',function(e){e.preventDefault();busy(true);ZNCart.open(b);load().finally(function(){busy(false);});});});
    dr.addEventListener('click',function(e){
      var t=e.target;
      if(t.closest('[data-cart-close]')){ZNCart.close();return;}
      var li=t.closest('.zn-ci');
      if(li&&t.closest('[data-q]')){
        var q=+li.querySelector('output').textContent+(+t.closest('[data-q]').dataset.q);
        busy(true);api('/cart/change.js',{id:li.dataset.key,quantity:Math.max(0,q)}).then(sync).then(render).finally(function(){busy(false);});
      }
      if(li&&t.closest('[data-rm]')){busy(true);api('/cart/change.js',{id:li.dataset.key,quantity:0}).then(sync).then(render).finally(function(){busy(false);});}
      if(t.closest('[data-up-go]')){
        busy(true);
        api('/cart/change.js',{id:up.dataset.key,quantity:2}).then(sync).then(render).finally(function(){busy(false);});
      }
    });
    document.addEventListener('keydown',function(e){
      if(dr.hidden)return;
      if(e.key==='Escape'){ZNCart.close();return;}
      if(e.key==='Tab'){
        var f=[].slice.call(panel.querySelectorAll('a[href],button:not([disabled])')).filter(function(x){return x.offsetParent;});
        if(!f.length)return;
        if(e.shiftKey&&document.activeElement===f[0]){e.preventDefault();f[f.length-1].focus();}
        else if(!e.shiftKey&&document.activeElement===f[f.length-1]){e.preventDefault();f[0].focus();}
      }
    });
  }

  /* WhatsApp: sube cuando aparece la barra fija */
  var wa=document.querySelector('[data-wa]'),stk=document.querySelector('[data-sticky]');
  if(wa&&stk&&'MutationObserver' in window){new MutationObserver(function(){wa.classList.toggle('is-up',stk.classList.contains('is-on'));}).observe(stk,{attributes:true,attributeFilter:['class']});}
})();

