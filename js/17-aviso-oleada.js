/* Aviso en vivo al superar una oleada: XP ganada y nivel (sin rangos) */
(function(){
  const el=document.createElement('div');el.id='wvToast';
  el.innerHTML='<canvas width="36" height="42"></canvas><div class="wt"><b></b><small></small></div>';document.body.appendChild(el);
  const g=el.querySelector('canvas').getContext('2d'),tb=el.querySelector('b'),ts=el.querySelector('small');let last=0,tm=0;
  setInterval(()=>{
    if(S!='play'||!PG.M.on){last=0;return}
    const n=wv.n;if(n==last||n<2)return;last=n;
    const w=n-1,d=PG.d(),xp=w*45+PG.M.k*6+Math.round(sc/25),l0=PG.lv(d.xp),l1=PG.lv(d.xp+xp);
    tb.textContent=l1.L>l0.L?'¡Subes a nivel '+l1.L+'!':'Oleada '+w+' superada';
    ts.textContent='+'+xp+' XP acumulados · Nivel '+l1.L;
    PG.badge(g,36,42,l1.L);
    el.classList.add('on');clearTimeout(tm);tm=setTimeout(()=>el.classList.remove('on'),3400);
  },400);
})();
