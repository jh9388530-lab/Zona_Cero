/* Efectos al disparar: marcas de impacto y destello rojo al recibir daño */
var HF=-9,HM=[];
function fxWorld(){if(!HM.length)return;HM=HM.filter(h=>T0-h.t<.18);cx.strokeStyle='#fff';cx.lineWidth=2;cx.beginPath();for(const h of HM){const r=4+(T0-h.t)*30;cx.moveTo(h.x-r,h.y-r);cx.lineTo(h.x-r*.4,h.y-r*.4);cx.moveTo(h.x+r,h.y-r);cx.lineTo(h.x+r*.4,h.y-r*.4);cx.moveTo(h.x-r,h.y+r);cx.lineTo(h.x-r*.4,h.y+r*.4);cx.moveTo(h.x+r,h.y+r);cx.lineTo(h.x+r*.4,h.y+r*.4)}cx.stroke()}
function feelDraw(){const a=(1-(T0-HF)/.35)*.45;if(a<=0)return;const g=cx.createRadialGradient(W/2,H/2,Math.min(W,H)*.35,W/2,H/2,Math.max(W,H)*.7);g.addColorStop(0,'rgba(200,20,30,0)');g.addColorStop(1,'rgba(200,20,30,'+a+')');cx.fillStyle=g;cx.fillRect(0,0,W,H)}
