/* Balas por lotes: un trazo por capa y por tipo de bala en vez de cuatro trazos por cada bala (misma imagen, muchas menos llamadas) */
const BQ=BS.map(()=>[]);
function bFlush(){
  for(let q=0;q<BQ.length;q++){const a=BQ[q],n=a.length;if(!n)continue;const z=BS[q],w=z[1];
    cx.strokeStyle=z[0];
    cx.globalAlpha=.25;cx.lineWidth=w*.7;cx.beginPath();
    for(let i=0;i<n;i+=4){const x=a[i],y=a[i+1],tx=a[i+2],ty=a[i+3],dx=x-tx,dy=y-ty;cx.moveTo(tx,ty);cx.lineTo(x-dx*.55,y-dy*.55)}cx.stroke();
    cx.globalAlpha=.65;cx.lineWidth=w;cx.beginPath();
    for(let i=0;i<n;i+=4){const x=a[i],y=a[i+1],dx=x-a[i+2],dy=y-a[i+3];cx.moveTo(x-dx*.7,y-dy*.7);cx.lineTo(x-dx*.25,y-dy*.25)}cx.stroke();
    cx.globalAlpha=1;cx.lineWidth=w*1.05;cx.beginPath();
    for(let i=0;i<n;i+=4){const x=a[i],y=a[i+1],dx=x-a[i+2],dy=y-a[i+3];cx.moveTo(x-dx*.3,y-dy*.3);cx.lineTo(x,y)}cx.stroke();
    cx.strokeStyle='#fff';cx.lineWidth=w*.45;cx.beginPath();
    for(let i=0;i<n;i+=4){const x=a[i],y=a[i+1],dx=x-a[i+2],dy=y-a[i+3];cx.moveTo(x-dx*.35,y-dy*.35);cx.lineTo(x,y)}cx.stroke();
    if(SET.q){const gs=w*3+5;cx.globalCompositeOperation='lighter';cx.globalAlpha=.55;for(let i=0;i<n;i+=4)cx.drawImage(FS,a[i]-gs,a[i+1]-gs,gs*2,gs*2);cx.globalCompositeOperation='source-over'}
    a.length=0}
  cx.globalAlpha=1}
