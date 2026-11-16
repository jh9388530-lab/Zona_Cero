/* Ajustes: controles (sensibilidad, autopuntado, botones, teclas), audio, gráficos y juego */
(function(){
  const KA=[['Mover arriba','KeyW'],['Mover abajo','KeyS'],['Mover izquierda','KeyA'],['Mover derecha','KeyD'],['Esquivar','Space'],['Recargar','KeyR'],['Granada','KeyE'],['Bengala','KeyT'],['Autoapuntado','KeyQ'],['Camioneta','KeyZ'],['Aviones','KeyF'],['Artillería','KeyG'],['Paracaidistas','KeyB'],['Radio de base','KeyH']];
  const KG=[['Movimiento',0,5],['Combate',5,9],['Apoyos y vehículos',9,14]];
  const kn=c=>({Space:'Espacio',ArrowUp:'↑',ArrowDown:'↓',ArrowLeft:'←',ArrowRight:'→',ShiftLeft:'Shift',ControlLeft:'Ctrl',Tab:'Tab',Enter:'Enter'})[c]||c.replace(/^Key|^Digit/,'');
  const D={sens:90,as:0,dz:12,bs:100,bo:100,vol:100,auto:(window.matchMedia&&matchMedia('(pointer:coarse)').matches)?1:0};
  const gv=k=>SET[k]==null?D[k]:SET[k];
  const box=document.createElement('div');box.id='cfgb';box.className='pn';
  box.innerHTML='<div class="ph"><b>Ajustes</b><button class="px" id="cf-x" aria-label="Cerrar">✕</button></div><div id="cf-tabs"></div><div id="cf-b"></div>';
  document.body.appendChild(box);
  const TB=['🎮 Controles','🔊 Audio','🖥 Gráficos','⚙ Juego','❓ Ayuda'];let tab=0,wait=null,sub=(window.matchMedia&&matchMedia('(pointer:coarse)').matches)?0:1;
  const body=box.querySelector('#cf-b');
  const seg=(k,opts,cur,fn)=>'<div class="sg" data-k="'+k+'">'+opts.map((o,i)=>'<button class="pbtn'+(i==cur?' on':'')+'" data-v="'+i+'">'+o+'</button>').join('')+'</div>';
  const rng=(k,mn,mx,u)=>'<div class="rg"><input type="range" data-k="'+k+'" min="'+mn+'" max="'+mx+'" value="'+gv(k)+'"><b>'+gv(k)+u+'</b></div>';
  const row=(l,h,c)=>'<div class="cr"><label>'+l+(h?'<small>'+h+'</small>':'')+'</label>'+c+'</div>';
  const tg=(k,l,h)=>row(l,h,seg(k,['No','Sí'],SET[k]?1:0));
  function keys(){const km=SET.km||{},inv={};for(const c in km)inv[km[c]]=c;const cell=([n,c])=>'<div class="kc'+(wait==c?' w':'')+'" data-c="'+c+'"><span>'+n+'</span><b>'+(wait==c?'…':kn(inv[c]||c))+'</b></div>';
    return KG.map(([t,a,b])=>'<div class="kgrp">'+t+'</div><div class="kg2">'+KA.slice(a,b).map(cell).join('')+'</div>').join('')}
  const HELP=()=>'<div class="hcards">'+[
    ['Controles en PC','<ul><li><kbd>WASD</kbd>Mover</li><li><kbd>Ratón</kbd>Apuntar y disparar</li><li><kbd>R</kbd>Recargar · <kbd>Espacio</kbd>Esquivar</li><li><kbd>1-4</kbd>o rueda: cambiar de arma</li><li><kbd>K</kbd>Ver lista de teclas · <kbd>P</kbd>Pausa</li></ul>'],
    ['Controles en móvil','<ul><li>Pulgar izquierdo: mover</li><li>Pulgar derecho: apuntar y disparar</li><li>Arriba a la derecha: arma, recarga, esquiva y granada</li><li>Más ▸ abre apoyos y la radio de la base</li></ul>'],
    ['Apoyos','<ul><li><kbd>H</kbd>Radio de la base (solo dentro): refuerzos, escudos, tanque, camioneta, bombardeo naval, apoyo aéreo, suministros y equipo médico</li><li><kbd>Y</kbd>Estrategia: asigna aliados a jefe, francotiradores, hospital o radio</li><li><kbd>F</kbd>Aviones · <kbd>G</kbd>Artillería · <kbd>B</kbd>Paracaidistas</li></ul>'],
    ['Oleadas','<ul><li>Cada 4 oleadas es de noche: usa bengalas.</li><li>Cada 5 llega un jefe con escolta: tanque blindado o helicóptero.</li><li>Radio enemiga (oleadas 2, 8, 11, 14…): destrúyela en 75 s o llegan refuerzos.</li></ul>'],
    ['Base y campo','<ul><li>La base te protege y la defienden 5 guardias.</li><li>Hospital de campaña: cura aliados y a ti en unos 30 s.</li><li>Trincheras: reducen el daño a la mitad.</li><li>Puestos con aliados: ametralladora automática.</li></ul>']
  ].map(([t,b])=>'<div class="hc"><h3>'+t+'</h3>'+b+'</div>').join('')+'</div>';
  function render(){
    box.querySelector('#cf-tabs').innerHTML=TB.map((t,i)=>'<button class="pbtn'+(i==tab?' on':'')+'" data-t="'+i+'">'+t+'</button>').join('');
    body.innerHTML=[
      '<div class="sub"><button class="pbtn'+(sub==0?' on':'')+'" data-s="0">📱 Pantalla táctil</button><button class="pbtn'+(sub==1?' on':'')+'" data-s="1">⌨ Teclado y ratón</button></div>'+(sub==0?
        '<div class="sec">Apuntado</div>'+row('Sensibilidad','Qué tan rápido gira tu personaje al apuntar',rng('sens',0,100,''))+row('Autopuntado','Ayuda a centrar enemigos cercanos',seg('as',['Apagado','Suave','Medio','Fuerte'],gv('as')))+row('Zona muerta del stick','Distancia mínima para empezar a apuntar',rng('dz',4,30,' px'))+
        '<div class="sec">Botones en pantalla</div>'+row('Tamaño de botones','',rng('bs',70,130,'%'))+row('Opacidad de botones','',rng('bo',40,100,'%'))+
        '<div style="padding:14px 0"><button class="pbtn big" id="cf-ce">🎮 Mover y cambiar tamaño de botones</button></div><div class="nt">Se abre el editor sobre el juego: arrastra cada botón y pulsa Guardar.</div>'
      :'<div class="nt" id="cf-n">Toca una acción y pulsa la nueva tecla.</div>'+keys()+'<div class="kgrp">Fijas</div><div class="fixk"><span><kbd>Clic</kbd>Disparar</span><span><kbd>1-4</kbd>Armas</span><span><kbd>P / Esc</kbd>Pausa</span><span><kbd>K</kbd>Lista de teclas</span></div><div style="padding:6px 0"><button class="pbtn" id="cf-rk">Restablecer teclas</button></div>'),
      row('Volumen general','',rng('vol',0,100,'%'))+tg('snd','Sonido')+tg('mus','Música')+tg('vz','Voces de radio')+'<div class="sec">Pruebas</div><div style="display:flex;gap:8px;flex-wrap:wrap;padding:8px 0"><button class="pbtn" id="cf-v">Probar voz</button><button class="pbtn" id="cf-w">Probar sonidos de armas</button></div><div class="nt" id="cf-t"></div><div class="sec">Créditos de sonido</div><div class="nt">Sonidos de armas: Tabasco (OpenGameArt, CC0) y Snake / F8 Studios (Authentic Gun Sounds, itch.io).</div>',
      row('Calidad gráfica','Baja ahorra batería y mejora la fluidez',seg('q',['Baja','Media','Alta'],SET.q))+tg('fps','Mostrar FPS'),
      row('Dificultad','',seg('dif',['Fácil','Normal','Difícil'],SET.dif))+row('Apoyos automáticos','Bengala, paracaidistas, minicarros y la camioneta se usan solos cuando hace falta',seg('auto',['No','Sí'],gv('auto')))+tg('vib','Vibración')+tg('tut','Tutorial'),HELP()][tab]}
  function apply(){const s=document.documentElement.style;s.setProperty('--bs',gv('bs')/100);s.setProperty('--bo',gv('bo')/100);try{aa=+(gv('as')>0)}catch(_){}
    try{if(MB&&MB.m)MB.m.gain.value=.9*gv('vol')/100}catch(_){}}
  const BT={snd:'s1',vib:'s3',tut:'s4',fps:'s5',vz:'s7',mus:'s8'};
  function setBool(k,v){if(!!SET[k]!=!!v)document.getElementById(BT[k]).onclick()}
  box.addEventListener('click',e=>{
    const t=e.target.closest('[data-t]');if(t){tab=+t.dataset.t;wait=null;render();return}
    const sb=e.target.closest('[data-s]');if(sb){sub=+sb.dataset.s;wait=null;render();return}
    if(e.target.id=='cf-ce'){close();const c=document.getElementById('ceOpen');if(c)c.click();return}
    const sg=e.target.closest('.sg [data-v]');if(sg){const k=sg.parentNode.dataset.k,v=+sg.dataset.v;
      if(BT[k])setBool(k,v);else{SET[k]=v;if(k=='q')rs();sv();if(k=='dif')stl()}apply();render();return}
    const kc=e.target.closest('.kc');if(kc){wait=kc.dataset.c;render();return}
    if(e.target.id=='cf-rk'){SET.km=null;sv();wait=null;render();return}
    if(e.target.id=='cf-v'){document.getElementById('s9').onclick();poll();return}
    if(e.target.id=='cf-w'){document.getElementById('s10').onclick();poll();return}});
  box.addEventListener('input',e=>{const k=e.target.dataset.k;if(!k)return;SET[k]=+e.target.value;e.target.nextSibling.textContent=e.target.value+(k=='dz'?' px':k=='bs'||k=='bo'||k=='vol'?'%':'');sv();apply()});
  let pt=0;function poll(){clearInterval(pt);pt=setInterval(()=>{const n=box.querySelector('#cf-t');if(!n||!box.classList.contains('on')){clearInterval(pt);return}n.textContent=(document.getElementById('vs').textContent||'')+' '+(document.getElementById('ws').textContent||'')},300)}
  /* reasignar teclas */
  addEventListener('keydown',e=>{if(e.__rm)return;
    if(wait&&box.classList.contains('on')){e.preventDefault();e.stopImmediatePropagation();const c=e.code;
      if(c!='Escape'){const km=Object.assign({},SET.km||{}),inv={};for(const x in km)inv[km[x]]=x;const used=KA.find(([n,d])=>d!=wait&&(inv[d]||d)==c);
        if(used){const nt=box.querySelector('#cf-n');if(nt)nt.textContent='«'+kn(c)+'» ya es de «'+used[0]+'».';return}
        for(const x in km)if(km[x]==wait)delete km[x];if(c!=wait)km[c]=wait;SET.km=Object.keys(km).length?km:null;sv()}
      wait=null;render();return}
    const km=SET.km;if(!km)return;if(km[e.code]){e.stopImmediatePropagation();const ev=new KeyboardEvent('keydown',{code:km[e.code],key:e.key,repeat:e.repeat,bubbles:true,cancelable:true});ev.__rm=1;e.target.dispatchEvent(ev)}
    else if(Object.values(km).includes(e.code))e.stopImmediatePropagation()},true);
  addEventListener('keyup',e=>{if(e.__rm)return;const km=SET.km;if(!km)return;if(km[e.code]){e.stopImmediatePropagation();const ev=new KeyboardEvent('keyup',{code:km[e.code],key:e.key,bubbles:true,cancelable:true});ev.__rm=1;e.target.dispatchEvent(ev)}else if(Object.values(km).includes(e.code))e.stopImmediatePropagation()},true);
  function open(t){tab=(t=='ayuda')?4:(t=='controles')?0:0;wait=null;render();box.classList.add('on')}
  function close(){box.classList.remove('on');wait=null}
  box.querySelector('#cf-x').onclick=close;
  addEventListener('keydown',e=>{if(e.code=='Escape'&&box.classList.contains('on')&&!wait){close();e.stopImmediatePropagation()}},true);
  window.cfgOpen=open;window.cfgClose=close;
  const b=document.getElementById('stg');if(b)b.onclick=()=>open();
  apply();
})();
