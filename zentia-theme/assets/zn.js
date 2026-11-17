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
    form.addEventListener('change',function(e){
      if(e.target.name!=='id')return;
      form.querySelectorAll('.zn-pack').forEach(function(l){l.classList.toggle('is-on',l.contains(e.target));});
      setPrice(e.target.closest('.zn-pack').dataset.price);
    });
    form.addEventListener('submit',function(){form.querySelector('[data-buy]').classList.add('is-busy');});
  }
  document.querySelectorAll('[data-pick]').forEach(function(a){a.addEventListener('click',function(){
    var r=form&&form.querySelectorAll('input[name=id]')[+a.dataset.pick-1];if(r){r.checked=true;r.dispatchEvent(new Event('change',{bubbles:true}));}
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
  if(st&&buy&&'IntersectionObserver' in window){
    new IntersectionObserver(function(es){es.forEach(function(e){var on=!e.isIntersecting&&e.boundingClientRect.top<0;st.classList.toggle('is-on',on);st.setAttribute('aria-hidden',on?'false':'true');st.querySelector('a').tabIndex=on?0:-1;});}).observe(buy);
  }
})();
