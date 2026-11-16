/* Cuerpos reutilizados: los caídos se sacan de una reserva y vuelven a ella, sin crear objetos nuevos ni arrays cada frame */
var BDF=[];
function bdPush(x,y,a,c,h,s){const b=BDF.pop()||{};b.x=x;b.y=y;b.a=a;b.c=c;b.h=h;b.s=s;b.v=Math.random()*3|0;b.t=12;b.cw=0;b.wp=0;BD.push(b);return b}
function bdTick(dt){const cap=[30,45,60][SET.q]||45;let j=0;
  for(let i=0;i<BD.length;i++){const b=BD[i];b.t-=dt;if(b.t>0)BD[j++]=b;else BDF.push(b)}
  BD.length=j;while(BD.length>cap)BDF.push(BD.shift());
  if(BDF.length>80)BDF.length=80}
