/* Paracaídas vistos desde arriba: solo se ve la cúpula (gajos, costuras, respiradero); quien va colgado queda oculto debajo */
const CHS=new Map();
function chuteSprite(c1,c2){const k=c1+c2;let s=CHS.get(k);if(s)return s;
  s=document.createElement('canvas');s.width=s.height=132;const g=s.getContext('2d'),R=62,N=12,da=6.2832/N;g.translate(66,66);
  for(let i=0;i<N;i++){g.beginPath();g.moveTo(0,0);g.arc(0,0,R,i*da,(i+1)*da);g.closePath();g.fillStyle=i%2?c2:c1;g.fill()}
  const gr=g.createRadialGradient(-R*.3,-R*.35,R*.05,0,0,R);gr.addColorStop(0,'rgba(255,255,255,.3)');gr.addColorStop(.6,'rgba(255,255,255,0)');gr.addColorStop(1,'rgba(0,0,0,.34)');
  g.fillStyle=gr;g.beginPath();g.arc(0,0,R,0,7);g.fill();
  g.strokeStyle='rgba(0,0,0,.3)';g.lineWidth=1.4;g.beginPath();for(let i=0;i<N;i++){g.moveTo(R*.1,0);g.save();g.rotate(i*da);g.moveTo(R*.1,0);g.lineTo(R,0);g.restore()}g.stroke();
  g.lineWidth=3;g.strokeStyle='rgba(0,0,0,.5)';g.beginPath();g.arc(0,0,R,0,7);g.stroke();
  g.fillStyle='rgba(10,14,16,.75)';g.beginPath();g.arc(0,0,R*.1,0,7);g.fill();
  CHS.set(k,s);return s}
/* h: altura 0..1 (1 = recién saltó). A más altura, la cúpula se ve más grande y su sombra cae más lejos */
function chute(x,y,h,sc,rot,al,c1,c2){const R=(25+18*h)*sc;if(al<=0)return;
  cx.save();cx.globalAlpha=(.3-.14*h)*al;cx.fillStyle='#000';cx.beginPath();cx.ellipse(x+26*h,y+34*h,R*.8,R*.8,0,0,7);cx.fill();
  cx.globalAlpha=al;cx.translate(x,y-26*h);cx.rotate(rot);cx.drawImage(chuteSprite(c1||'#e8e2d0',c2||'#e5484d'),-R,-R,R*2,R*2);cx.restore()}
/* caída de la clasificatoria: mi escuadra (jugador + 3 bots) y las 11 rivales descienden a la vez */
function clsDropDraw(){const C=CLS;if(!C||!C.drop)return;const D=C.drop,k=Math.min(1,D.t/D.T),h=Math.max(0,1-k),end=k>.93,al=end?Math.max(0,(1-k)/.07):1,sc=end?.75+.25*al:1;
  [p,...A.slice(0,3)].forEach((m,i)=>chute(m.x,m.y,h,sc,Math.sin(T0*1.6+i)*.12,al,'#3f8cff','#e8f1ff'));
  const e=k*k*(3-2*k);
  for(const g of C.sq){if(g.dead)continue;const wx=g.dw.x*(1-e),wy=g.dw.y*(1-e);
    for(let i=0;i<4;i++){const x=g.x+(i%2?1:-1)*34+wx,y=g.y+(i>1?1:-1)*34+wy;if(x<cam.x-90||x>cam.x+W+90||y<cam.y-90||y>cam.y+H+90)continue;
      chute(x,y,h,sc,Math.sin(T0*1.4+i+g.id)*.12,al,g.col,'#f4f4f4')}}}
