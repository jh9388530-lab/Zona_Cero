/* ===== Menú principal reorganizado =====
   - Agrupa los modos de juego en #modes y las secciones en #mr
   - "Cómo jugar" y "Editar controles" viven ahora dentro de Ajustes
   - Pausa / fin de partida: acceso a Ajustes y a "Menú principal"
   Solo queda el modo Oleadas. */
(function(){
  const $=id=>document.getElementById(id),ov=$('ov');if(!ov)return;

  /* 1) modos de juego */
  const modes=document.createElement('div');modes.id='modes';
  const mr=$('mr'),first=$('go');
  ov.insertBefore(modes,mr);
  if(first)modes.appendChild(first);

  /* 2) secciones: Armería · Ajustes · Cómo jugar */
  const lab={arm:'⚔ Armería',stg:'⚙ Ajustes',hp:'❓ Cómo jugar'};
  ['arm','stg','hp'].forEach(id=>{const b=$(id);if(b){b.textContent=lab[id];mr.appendChild(b)}});
  const hp=$('hp');if(hp)hp.onclick=()=>window.cfgOpen&&window.cfgOpen('ayuda');

  /* 3) pausa / fin de partida */
  const nav=document.createElement('div');nav.id='pnav';
  nav.innerHTML='<button id="pn-s">⚙ Ajustes</button><button id="pn-m">⌂ Menú principal</button>';
  ov.insertBefore(nav,$('mr'));
  nav.querySelector('#pn-s').onclick=()=>window.cfgOpen&&window.cfgOpen();
  nav.querySelector('#pn-m').onclick=()=>{
    const jugando=typeof S!='undefined'&&(S=='pause'||S=='over');
    if(jugando&&S=='pause'&&!confirm('¿Salir al menú? Se perderá la partida actual.'))return;
    if(typeof toMenu=='function')toMenu();
  };
})();
