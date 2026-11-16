/* Equipo de 4 espacios (se elige en la Armería), mapeo de arma en mano y autopuntado táctil */
function LO(i){const ok=x=>Number.isInteger(x)&&x>=0&&x<WP.length&&(typeof PG=='undefined'||PG.has(x)),l=SET.lo;
  if(Array.isArray(l)&&l.length==4&&l.every(ok))return l[i];return[5,0,2,1].map(x=>ok(x)?x:0)[i]}
function swn(d){const L=[0,1,2,3].map(LO);let k=L.indexOf(p.w);if(k<0)k=0;sw(L[(k+d+4)%4])}
function ammoX(n){p.res[4]+=Math.round(n*1.6);p.res[5]+=Math.round(n*1.2);p.res[6]+=Math.max(1,Math.round(n/6))}
const GMG=[0,1,2,3,2,2,2],GMR=['','','','','mg','','sn'];
function GMg(w){return GMG[w]||0}
function GMr(w){return GMR[w]||''}
/* sensibilidad y autopuntado táctil */
function aimT(a,dt){
  const as=[0,.35,.6,.9][SET.as|0];
  if(as){let b=null,bd=1e9;for(const e of E){const dx=e.x-p.x,dy=e.y-p.y,d=Math.hypot(dx,dy);if(d>760||d<30)continue;let da=Math.atan2(dy,dx)-a;da=Math.atan2(Math.sin(da),Math.cos(da));if(Math.abs(da)<.22+as*.3&&Math.abs(da)*d<bd){bd=Math.abs(da)*d;b=da}}if(b!==null)a+=b*(.5+as*.5)}
  const v=SET.sens==null?90:SET.sens,tr=10+v*v*.02;let da=a-p.a;da=Math.atan2(Math.sin(da),Math.cos(da));return p.a+cl(da,-tr*dt,tr*dt)}
