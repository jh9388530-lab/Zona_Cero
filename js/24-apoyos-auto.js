/* Apoyos automáticos para pantalla táctil.
   En el táctil solo quedan los botones esenciales (arma, recarga, esquivar, granada, artillería, radio, apoyo aéreo, pausa).
   Estos apoyos se usan solos según la situación: bengala (de noche), paracaidistas, minicarros y subir a la camioneta.
   Se activa/desactiva en Ajustes > Juego > Apoyos automáticos. */
(function(){
  const coarse=window.matchMedia&&matchMedia('(pointer:coarse)').matches;
  const on=()=>SET.auto==null?coarse:!!SET.auto;
  const near=(r)=>{let n=0;for(const e of E)if(D(e,p)<r)n++;return n};
  let noBoard=0;
  function tick(){
    if(typeof S=='undefined'||S!='play'||!p)return;
    const b21=document.getElementById('b21');
    const T=A.filter(a=>a.t==4&&!a.z).sort((u,v)=>D(u,p)-D(v,p))[0];
    if(b21)b21.style.visibility=(p.dv||(T&&D(T,p)<160))?'visible':'hidden';
    if(!on())return;
    const now=performance.now();
    /* subir a la camioneta al acercarse (si acabas de bajar, espera 6 s) */
    if(!p.dv&&T&&D(T,p)<90&&now>noBoard){drive();return}
    if(p.dv){noBoard=now+6000;return}
    /* bengala: de noche, si no hay una encendida y hay enemigos */
    if(wv.n%4==3&&wv.brk<=0&&p.fc<=0&&(!FL.length)&&E.length>0)flare();
    const n=near(650);
    /* paracaidistas: hay lucha fuerte y la escuadra no está completa */
    if(p.pc<=0&&n>=5&&A.length<ACAP()-3)para();
    /* minicarros: muchos enemigos cerca */
    if(typeof miniCars=='function'&&(p.nc||0)<=0&&n>=6)miniCars();
  }
  setInterval(()=>{try{tick()}catch(e){}},500);
  window.zcAutoTick=tick;
})();
