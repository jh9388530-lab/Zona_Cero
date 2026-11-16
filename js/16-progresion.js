/* Progresión: nivel (XP) y desbloqueos de armas, perfil del lobby y pantalla de resultados. Sin rangos. */
const PG=(function(){
  const KEY='zcp',UL={3:3,6:4,9:6},START=[0,1,2,5],MAXL=30,need=L=>150+50*(L-1);
  let d=load();
  function load(){let o=null;try{o=JSON.parse(localStorage.getItem(KEY))}catch(e){}
    if(!o||o.v!==1||!Array.isArray(o.ui))o={v:1,xp:0,rp:0,ui:START.slice(),st:{m:0,k:0,t:0,w:0}};return o}
  function save(){try{localStorage.setItem(KEY,JSON.stringify(d))}catch(e){}}
  function lv(xp){let L=1,r=xp;while(L<MAXL&&r>=need(L)){r-=need(L);L++}return{L,cur:r,need:L<MAXL?need(L):0}}
  const has=i=>d.ui.includes(i);
  const unlockLv=i=>{for(const L in UL)if(UL[L]==i)return +L;return 1};
  /* escudo con el nivel */
  function badge(g,w,h,L){g.clearRect(0,0,w,h);const x=w/2;g.beginPath();g.moveTo(x,2);g.lineTo(w-4,h*.16);g.lineTo(w-4,h*.55);g.quadraticCurveTo(w-6,h*.84,x,h-3);g.quadraticCurveTo(6,h*.84,4,h*.55);g.lineTo(4,h*.16);g.closePath();
    const gr=g.createLinearGradient(0,0,0,h);gr.addColorStop(0,'#ffb25a');gr.addColorStop(1,'#c2410c');g.fillStyle=gr;g.fill();g.lineWidth=2;g.strokeStyle='#fff3d6';g.stroke();
    g.fillStyle='#2a0d02';g.font='700 '+Math.round(h*.4)+'px "Barlow Condensed",sans-serif';g.textAlign='center';g.textBaseline='middle';g.fillText(L,x,h*.52)}
  /* nivel -> aspecto de tanques y minicarros (t = 0..9 tipo, d = 0..2 calidad) */
  const tier=()=>{const L=lv(d.xp).L-1;return{t:Math.min(9,Math.floor(L/3)),d:L%3}};
  /* partida */
  const M={k:0,sh:0,t:0,on:0,done:0};
  function start(){M.k=0;M.sh=0;M.t=0;M.on=1;M.done=0}
  const mode=()=>'ol';
  function finish(){if(!M.on||M.done)return null;M.done=1;const R={m:'ol',k:M.k,sh:M.sh,t:M.t,pts:sc,rows:[]};
    const w=Math.max(0,wv.n-1);R.wave=wv.n;R.rows=[['Oleadas superadas ('+w+')',w*45],['Bajas del escuadrón ('+M.k+')',M.k*6],['Puntos de la partida',Math.round(sc/25)]];
    let sum=R.rows.reduce((a,b)=>a+b[1],0);if(sum<20){R.rows.push(['Participación',20-sum]);sum=20}
    R.win=0;R.xp=sum;const l0=lv(d.xp);d.xp+=sum;const l1=lv(d.xp);R.l0=l0;R.l1=l1;R.un=[];
    for(let L=l0.L+1;L<=l1.L;L++)if(UL[L]!=null&&!has(UL[L])){d.ui.push(UL[L]);R.un.push(UL[L])}
    d.st.m++;d.st.k+=M.k;d.st.t+=M.t;save();paintCard();return R}
  /* tarjeta de perfil en el lobby */
  let card;function paintCard(){if(!card)return;const l=lv(d.xp),g=card.querySelector('canvas').getContext('2d');badge(g,72,84,l.L);
    card.querySelector('#pf-n').textContent='Nivel '+l.L;card.querySelector('#pf-l').textContent=l.need?l.cur+' / '+l.need+' XP':'Nivel máximo';
    card.querySelector('#pf-x').style.width=(l.need?Math.round(l.cur/l.need*100):100)+'%'}
  function mount(){const ov=document.getElementById('ov');if(!ov||card)return;card=document.createElement('div');card.id='pf';
    card.innerHTML='<canvas width="72" height="84"></canvas><div><b id="pf-n"></b><small id="pf-l"></small><div class="sb"><i id="pf-x"></i></div></div>';ov.appendChild(card);paintCard()}
  return{d:()=>d,M,has,unlockLv,lv,tier,badge,start,finish,mount,mode,paintCard,save,UL,START};
})();
/* ---------- pantalla de resultados ---------- */
(function(){
  const box=document.createElement('div');box.id='resb';box.className='pn';document.body.appendChild(box);
  const fm=s=>Math.floor(s/60)+':'+String(Math.floor(s%60)).padStart(2,'0');
  function open(R){
    const cells=[['Bajas',R.k],['Disparos',R.sh],['Tiempo',fm(R.t)],['Puntos',R.pts]];
    box.innerHTML='<div id="rs-w"><div class="rs-h"><span>Oleadas</span><h1>Caíste en la oleada '+R.wave+'</h1></div>'+
      '<div class="rs-g">'+cells.map((c,i)=>'<div style="animation-delay:'+(.1+i*.08)+'s"><b data-n="'+c[1]+'">'+(typeof c[1]=='number'?0:c[1])+'</b><small>'+c[0]+'</small></div>').join('')+'</div>'+
      '<div class="rs-x"><div class="rs-l"><b>NIVEL '+R.l0.L+'</b><span id="rs-xt">+'+R.xp+' XP</span></div><div class="sb big"><i id="rs-xb"></i></div>'+
      '<div class="rs-d">'+R.rows.map(r=>'<div><span>'+r[0]+'</span><b>+'+r[1]+'</b></div>').join('')+'</div></div>'+
      (R.un.length?'<div class="rs-u"><small>Desbloqueado</small>'+R.un.map(i=>'<div><canvas width="200" height="84" data-i="'+i+'"></canvas><b>'+WP[i].n+'</b><span>Equípala en la Armería</span></div>').join('')+'</div>':'')+
      '<div class="rs-b"><button class="pbtn on" id="rs-a">Jugar de nuevo</button><button class="pbtn" id="rs-w2">Armería</button><button class="pbtn" id="rs-m">Menú</button></div></div>';
    box.classList.add('on');
    box.querySelectorAll('.rs-g b[data-n]').forEach(b=>{const n=+b.dataset.n;if(isNaN(n))return;const t0=performance.now();(function f(){const k=Math.min(1,(performance.now()-t0)/900);b.textContent=Math.round(n*(1-Math.pow(1-k,3)));if(k<1&&box.classList.contains('on'))requestAnimationFrame(f)})()});
    const xb=box.querySelector('#rs-xb'),f0=R.l0.need?R.l0.cur/R.l0.need:1,f1=R.l1.need?R.l1.cur/R.l1.need:1;xb.style.width=Math.round(f0*100)+'%';
    setTimeout(()=>{if(R.l1.L>R.l0.L){xb.style.width='100%';setTimeout(()=>{xb.style.transition='none';xb.style.width='0';void xb.offsetWidth;xb.style.transition='';box.querySelector('.rs-l b').textContent='NIVEL '+R.l1.L;box.querySelector('.rs-l b').classList.add('lu');xb.style.width=Math.round(f1*100)+'%'},700)}else xb.style.width=Math.round(f1*100)+'%'},700);
    box.querySelectorAll('.rs-u canvas').forEach(c=>{const g=c.getContext('2d');drawGun(g,+c.dataset.i,200,84,0,false)});
    box.querySelector('#rs-a').onclick=()=>{close();go.onclick()};
    box.querySelector('#rs-w2').onclick=()=>{close();armOpen()};
    box.querySelector('#rs-m').onclick=()=>{close();toMenu()}}
  function close(){box.classList.remove('on')}
  window.resClose=close;window.resOpen=open;
  window.toMenu=function(){close();p=undefined;S='menu';CM=0;CL=0;CLS=null;CP=null;ov.className='m';ov.style.display='flex';tt.textContent='Zona Cero';ms.textContent='Defiende la base y mantén vivo a tu escuadrón.';go.textContent='Oleadas';try{campHide()}catch(e){}PG.paintCard()};
  /* enganches */
  const _rs=reset;reset=function(){_rs.apply(this,arguments);try{RAD.until=0;RAD.tx=''}catch(e){}PG.start()};
  const _k=kill;kill=function(e){PG.M.k++;return _k.apply(this,arguments)};
  const _s=shoot;shoot=function(){const m=p.mag[p.w];const r=_s.apply(this,arguments);if(p.mag[p.w]<m)PG.M.sh++;return r};
  const _sh=show;show=function(a,b,c){_sh(a,b,c);if(S=='over'){const R=PG.finish();if(R)open(R)}};
  setInterval(()=>{if(S=='play'&&PG.M.on)PG.M.t+=.25},250);
  addEventListener('keydown',e=>{if(e.code=='Escape'&&box.classList.contains('on')){e.stopImmediatePropagation()}},true);
  PG.mount();
})();
