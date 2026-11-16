/* Helicóptero: silueta con curvas, rotor con estela y sombra en sprite cacheado (sin transparencias acumuladas) */
var HSP=null;
function heliBody(c,fl,sh){
  const F=col=>{c.fillStyle=sh?'#000':fl?'#fff':col};
  F('#222');c.fillRect(-18,-17.5,44,2.6);c.fillRect(-18,14.9,44,2.6);
  F('#4a1810');for(const m of[-1,1]){c.beginPath();c.moveTo(3,m*16);c.quadraticCurveTo(15,m*20,25,m*19);c.lineTo(25,m*26);c.quadraticCurveTo(14,m*27,5,m*24);c.closePath();c.fill()}
  if(!sh){c.fillStyle=fl?'#fff':'#ff4d6d';c.fillRect(23,-25,3,4);c.fillRect(23,21,3,4);c.fillStyle=fl?'#fff':'#2b3438';c.fillRect(26,-14,16,3.6);c.fillRect(26,10.4,16,3.6)}
  F('#7a2a18');c.beginPath();c.moveTo(-14,-6.5);c.quadraticCurveTo(-40,-4.6,-63,-2.5);c.lineTo(-63,2.5);c.quadraticCurveTo(-40,4.6,-14,6.5);c.closePath();c.fill();
  c.beginPath();c.moveTo(-57,-9);c.quadraticCurveTo(-64,-10.5,-69,-11);c.lineTo(-69,11);c.quadraticCurveTo(-64,10.5,-57,9);c.closePath();c.fill();
  c.beginPath();c.ellipse(-67,0,2.4,10.5,0,0,7);c.fill();
  F('#c0392b');c.beginPath();c.moveTo(38,0);c.bezierCurveTo(37,-9,25,-19.5,6,-20.5);c.bezierCurveTo(-12,-21.5,-27,-12,-35,-5.5);c.lineTo(-35,5.5);c.bezierCurveTo(-27,12,-12,21.5,6,20.5);c.bezierCurveTo(25,19.5,37,9,38,0);c.closePath();c.fill();
  if(sh)return;
  c.fillStyle=fl?'#fff':'#8e2a1f';c.beginPath();c.ellipse(-14,0,15,9.5,0,0,7);c.fill();
  c.fillStyle='rgba(0,0,0,.22)';c.beginPath();c.ellipse(-14,0,15,9.5,0,.2,3.4);c.fill();
  if(!fl){const g=c.createLinearGradient(14,-10,30,10);g.addColorStop(0,'#bfeaff');g.addColorStop(1,'#2f5f7a');c.fillStyle=g}else c.fillStyle='#fff';
  c.beginPath();c.moveTo(33,0);c.bezierCurveTo(32,-6,24,-11.5,12,-10.5);c.lineTo(9,0);c.lineTo(12,10.5);c.bezierCurveTo(24,11.5,32,6,33,0);c.closePath();c.fill();
  c.strokeStyle='rgba(255,255,255,.55)';c.lineWidth=1.4;c.beginPath();c.moveTo(27,-5);c.quadraticCurveTo(20,-9,14,-8);c.stroke();
  c.fillStyle='rgba(255,255,255,.5)';c.beginPath();c.arc(-66,-10,1.1,0,7);c.fill();c.fillStyle='#ff4d6d';c.beginPath();c.arc(-66,10,1.1,0,7);c.fill()
}
function heliRotor(c,t,rgb,ad,ab){
  c.fillStyle='rgba('+rgb+','+ad+')';c.beginPath();c.arc(0,0,72,0,7);c.fill();
  for(let j=0;j<4;j++){const b=t*25+j*1.5708;for(let m=0;m<3;m++){c.save();c.rotate(b-m*.13);c.fillStyle='rgba('+rgb+','+ab*(1-m*.34)+')';c.beginPath();c.moveTo(4,-2.6);c.lineTo(72,-1.5);c.lineTo(72,1.5);c.lineTo(4,2.6);c.closePath();c.fill();c.restore()}}
  c.fillStyle=rgb=='0,0,0'?'rgba(0,0,0,'+ab+')':'#14233a';c.beginPath();c.arc(0,0,5,0,7);c.fill()
}
function heliSprite(){if(HSP)return HSP;const k=document.createElement('canvas');k.width=260;k.height=140;const g=k.getContext('2d');g.translate(130,70);g.scale(1.6,1.6);heliBody(g,0,1);return HSP=k}
function heliShadow(c,t,a){const s=heliSprite();c.save();c.globalAlpha=a*.45;c.scale(1.09,1.09);c.drawImage(s,-81.25,-43.75,162.5,87.5);c.restore();c.globalAlpha=a;c.drawImage(s,-81.25,-43.75,162.5,87.5);heliRotor(c,t,'0,0,0',a*.4,a*.8);c.globalAlpha=1}
