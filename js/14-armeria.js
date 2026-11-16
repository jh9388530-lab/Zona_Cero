/* Armería: lista de armas, vista previa por piezas (despiece y etiquetas), estadísticas y equipo de 4 espacios */
(function(){
  const CLS=['Secundaria','Escopeta','Asalto','Pesada','Apoyo','Cercano','Precisión'];
  const DESC=['Fiable y ligera. Munición infinita: tu respaldo de siempre.','Devastadora de cerca. Siete perdigones por disparo.','Equilibrada: buen alcance y cadencia sostenida.','Daño explosivo en área. Pocas municiones.','Fuego sostenido con 100 balas. Recarga lenta y pesada.','Cadencia altísima a corta distancia. Poco alcance.','Un disparo, una baja. Máximo alcance y precisión.'];
  const ST=[['Daño',w=>Math.sqrt(w.d*w.pel*(w.pel>1?.6:1))],['Cadencia',w=>Math.sqrt(1/w.r)],['Alcance',w=>Math.sqrt(w.v*w.life)],['Cargador',w=>Math.sqrt(w.m)],['Recarga',w=>Math.sqrt(1/w.rt)],['Precisión',w=>Math.sqrt(1/(w.sp+.03))]];
  const mx=ST.map(([,f])=>Math.max(...WP.map(f)));
  let sel=0,ex=0,exT=0,lb=1,raf=0;
  const box=document.createElement('div');box.id='arme';box.className='pn';
  box.innerHTML='<div class="ph"><b>Armería</b><button class="px" id="ar-x" aria-label="Cerrar">✕</button></div><div id="ar-b"><div id="ar-l"></div><div id="ar-c"><canvas id="ar-cv"></canvas><div id="ar-t"><button class="pbtn" id="ar-d">Desarmar</button><button class="pbtn on" id="ar-e">Etiquetas</button></div></div><div id="ar-r"></div></div><div id="ar-f"><span>Tu equipo</span><div id="ar-s"></div><div id="ar-h">Elige un arma y toca un espacio para equiparla. Las teclas 1–4 y la rueda cambian entre estas cuatro.</div></div>';
  document.body.appendChild(box);
  const $=s=>box.querySelector(s),cvs=$('#ar-cv'),g=cvs.getContext('2d');
  const eq=()=>[0,1,2,3].map(LO);
  function list(){const E=eq();$('#ar-l').innerHTML=WP.map((w,i)=>'<div class="ac'+(i==sel?' s':'')+(PG.has(i)?'':' lk')+'" data-i="'+i+'"><span>'+w.n+'<br><small>'+(PG.has(i)?CLS[i]:'Bloqueada · nivel '+PG.unlockLv(i))+'</small></span>'+(!PG.has(i)?'<i class="lc">🔒</i>':E.includes(i)?'<i>'+(E.indexOf(i)+1)+'</i>':'')+'</div>').join('');
    $('#ar-s').innerHTML=E.map((w,k)=>'<button class="sl" data-k="'+k+'"><small>Espacio '+(k+1)+'</small>'+WP[w].n+'</button>').join('')}
  function info(){const w=WP[sel];$('#ar-r').innerHTML='<span class="tg">'+CLS[sel]+'</span><h2>'+w.n+'</h2><p>'+DESC[sel]+'</p>'+ST.map(([n,f],k)=>'<div class="sr"><span>'+n+'</span><div class="sb"><i style="width:'+Math.round(f(w)/mx[k]*100)+'%"></i></div></div>').join('')+(PG.has(sel)?'':'<p class="lkn">🔒 Se desbloquea en el nivel '+PG.unlockLv(sel)+'. Gana experiencia jugando.</p>')+'<p style="margin-top:8px;color:#9fc0cc">Cargador '+w.m+' · Reserva inicial '+(w.res0==1/0?'∞':w.res0)+'</p>'}
  function draw(){const r=cvs.getBoundingClientRect(),d=Math.min(2,devicePixelRatio||1),W=Math.max(10,r.width),H=Math.max(10,r.height);
    if(cvs.width!=Math.round(W*d)||cvs.height!=Math.round(H*d)){cvs.width=Math.round(W*d);cvs.height=Math.round(H*d)}
    g.setTransform(d,0,0,d,0,0);g.clearRect(0,0,W,H);ex+=(exT-ex)*.14;
    const t=performance.now()/1000;g.fillStyle='rgba(0,0,0,.28)';g.beginPath();g.ellipse(W/2,H*.88,W*.26,10,0,0,7);g.fill();
    g.save();g.translate(0,Math.sin(t*1.4)*3);drawGun(g,sel,W,H-44,ex,lb);g.restore();
    if(box.classList.contains('on'))raf=requestAnimationFrame(draw)}
  function pick(i){sel=i;list();info()}
  function equip(k){if(!PG.has(sel)){$('#ar-h').textContent='Esa arma sigue bloqueada: se desbloquea en el nivel '+PG.unlockLv(sel)+'.';return}const E=eq(),o=E.indexOf(sel);if(o>=0)E[o]=E[k];E[k]=sel;SET.lo=E;sv();list();$('#ar-h').textContent='Equipada en el espacio '+(k+1)+'.'}
  box.addEventListener('click',e=>{const a=e.target.closest('.ac'),s=e.target.closest('.sl');if(a)pick(+a.dataset.i);else if(s)equip(+s.dataset.k)});
  $('#ar-x').onclick=close;$('#ar-d').onclick=()=>{exT=exT?0:1;$('#ar-d').classList.toggle('on',!!exT);$('#ar-d').textContent=exT?'Armar':'Desarmar'};
  $('#ar-e').onclick=()=>{lb=!lb;$('#ar-e').classList.toggle('on',!!lb)};
  function open(){box.classList.add('on');list();info();cancelAnimationFrame(raf);raf=requestAnimationFrame(draw)}
  function close(){box.classList.remove('on');cancelAnimationFrame(raf)}
  addEventListener('keydown',e=>{if(e.code=='Escape'&&box.classList.contains('on')){close();e.stopImmediatePropagation()}},true);
  window.armOpen=open;window.armClose=close;
  const b=document.getElementById('arm');if(b)b.onclick=open;
})();
