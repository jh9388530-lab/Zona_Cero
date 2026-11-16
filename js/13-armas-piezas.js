/* Armas dibujadas por piezas: cada pieza tiene nombre, forma, ancla de etiqueta y vector de despiece */
const GCOL={wd:['#8a6a43','#47341e'],mt:['#718089','#262d31'],pl:['#2d363b','#12171a'],ol:['#5d6e45','#2d3822'],rd:['#a8442a','#5a1f12']};
function gG(g,k,y0,y1){const q=g.createLinearGradient(0,y0,0,y1);q.addColorStop(0,GCOL[k][0]);q.addColorStop(1,GCOL[k][1]);return q}
function gR(g,x,y,w,h,r,k){g.beginPath();g.moveTo(x+r,y);g.arcTo(x+w,y,x+w,y+h,r);g.arcTo(x+w,y+h,x,y+h,r);g.arcTo(x,y+h,x,y,r);g.arcTo(x,y,x+w,y,r);g.closePath();g.fillStyle=gG(g,k,y,y+h);g.fill();g.strokeStyle='rgba(0,0,0,.55)';g.lineWidth=1.3;g.stroke();g.fillStyle='rgba(255,255,255,.1)';g.fillRect(x+r,y+1.5,Math.max(0,w-2*r),1.5)}
function gP(g,pts,k){g.beginPath();g.moveTo(pts[0],pts[1]);for(let i=2;i<pts.length;i+=2)g.lineTo(pts[i],pts[i+1]);g.closePath();g.fillStyle=gG(g,k,Math.min(...pts.filter((_,i)=>i%2)),Math.max(...pts.filter((_,i)=>i%2)));g.fill();g.strokeStyle='rgba(0,0,0,.55)';g.lineWidth=1.3;g.stroke()}
function gS(g,pts,w,col){g.beginPath();g.moveTo(pts[0],pts[1]);for(let i=2;i<pts.length;i+=2)g.lineTo(pts[i],pts[i+1]);g.strokeStyle=col||'#1a2024';g.lineWidth=w;g.lineCap='round';g.lineJoin='round';g.stroke()}
function gSl(g,x,y,n,dx,h){g.fillStyle='rgba(0,0,0,.5)';for(let i=0;i<n;i++)g.fillRect(x+i*dx,y,1.6,h)}
const trig=(g,x,y,w)=>{gS(g,[x,y,x,y+22,x+8,y+30,x+w-8,y+30,x+w,y+22,x+w,y],4,'#5b6a73');gP(g,[x+w/2-4,y+2,x+w/2+2,y+2,x+w/2,y+20,x+w/2-5,y+20],'mt')};
const GUNS=[
{n:'Pistola',bb:[200,150],P:[
 ['Corredera',[0,-14],[90,22],g=>{gR(g,20,18,150,26,6,'mt');gSl(g,138,22,6,4,18);g.fillStyle='#0b0e10';g.fillRect(90,24,34,8)}],
 ['Cañón',[16,-6],[180,31],g=>gR(g,168,24,24,14,3,'mt')],
 ['Armazón',[0,10],[70,51],g=>gR(g,26,44,130,14,4,'pl')],
 ['Empuñadura',[-18,14],[48,100],g=>{gP(g,[30,56,78,56,70,136,36,136],'pl');g.fillStyle='rgba(255,255,255,.12)';for(let y=70;y<130;y+=9)for(let x=42;x<66;x+=9)g.fillRect(x,y,2,2)}],
 ['Cargador',[-8,26],[54,133],g=>gR(g,34,126,40,14,3,'mt')],
 ['Guardamonte',[10,18],[102,86],g=>gS(g,[84,56,84,76,96,86,122,86,122,56],4,'#5b6a73')],
 ['Gatillo',[4,26],[102,70],g=>gP(g,[100,58,106,58,104,78,98,78],'mt')],
 ['Mira trasera',[-8,-22],[34,16],g=>gR(g,28,12,14,8,2,'mt')],
 ['Mira delantera',[10,-22],[164,16],g=>gR(g,160,12,8,8,2,'mt')],
 ['Martillo',[-18,-4],[22,24],g=>gP(g,[16,18,26,16,26,30,16,32],'mt')]]},
{n:'Escopeta',bb:[400,130],P:[
 ['Culata',[-24,6],[50,76],g=>{gP(g,[6,48,100,56,104,64,104,90,90,92,6,102],'wd');gSl(g,24,56,5,10,38)}],
 ['Receptor',[-4,-10],[132,68],g=>{gR(g,98,52,72,34,5,'mt');g.fillStyle='#0b0e10';g.fillRect(122,58,30,7)}],
 ['Gatillo',[0,24],[134,102],g=>trig(g,124,86,24)],
 ['Cañón',[24,-8],[300,64],g=>gR(g,160,58,230,14,5,'mt')],
 ['Tubo cargador',[10,14],[300,82],g=>gR(g,160,76,200,11,5.5,'mt')],
 ['Guardamano',[0,22],[236,90],g=>{gR(g,200,72,72,28,9,'wd');gSl(g,214,80,9,6,12)}],
 ['Mira',[6,-20],[384,52],g=>{g.beginPath();g.arc(384,52,4,0,7);g.fillStyle='#ff7a45';g.fill()}],
 ['Boquilla',[22,0],[388,66],g=>gR(g,380,56,16,20,3,'pl')]]},
{n:'Fusil',bb:[400,160],P:[
 ['Culata',[-22,8],[50,86],g=>{gP(g,[10,70,92,66,100,72,100,110,82,112,10,102],'pl');gR(g,4,68,10,34,3,'mt')}],
 ['Receptor inferior',[0,14],[142,90],g=>gR(g,95,78,100,24,4,'pl')],
 ['Empuñadura',[-6,20],[146,126],g=>gP(g,[128,100,158,100,150,146,124,146],'pl')],
 ['Gatillo',[0,24],[180,110],g=>trig(g,166,100,30)],
 ['Cargador',[14,22],[198,128],g=>{gP(g,[176,102,208,102,220,154,190,158],'mt');gSl(g,184,112,5,6,30)}],
 ['Receptor superior',[0,-10],[150,70],g=>{gR(g,90,60,130,22,4,'mt');g.fillStyle='#0b0e10';g.fillRect(150,64,32,6)}],
 ['Riel y mira',[-4,-22],[140,52],g=>{gR(g,100,52,110,8,2,'pl');gSl(g,108,52,12,8,5);gR(g,276,46,6,18,1,'mt')}],
 ['Guardamanos',[16,8],[254,80],g=>{gR(g,220,64,90,26,4,'pl');gSl(g,232,70,9,9,14)}],
 ['Cañón',[24,0],[330,76],g=>gR(g,310,70,64,10,3,'mt')],
 ['Apagallamas',[36,0],[382,75],g=>{gR(g,372,67,24,16,3,'mt');gSl(g,380,69,3,6,12)}]]},
{n:'Lanzacohetes',bb:[440,170],P:[
 ['Boquilla trasera',[-26,0],[40,74],g=>gP(g,[14,38,60,52,60,96,14,110],'mt')],
 ['Tubo',[0,-8],[200,72],g=>{gR(g,50,50,330,44,20,'ol');gR(g,330,48,8,48,2,'rd')}],
 ['Hombrera',[0,-20],[128,46],g=>gR(g,106,38,40,12,4,'pl')],
 ['Mira',[0,-26],[185,30],g=>{gR(g,172,26,30,10,2,'mt');gR(g,184,34,6,14,1,'mt')}],
 ['Empuñadura',[-6,18],[190,124],g=>gP(g,[178,94,208,94,200,148,172,148],'pl')],
 ['Gatillo',[0,24],[230,108],g=>trig(g,218,94,28)],
 ['Guardamano',[10,20],[290,114],g=>gP(g,[272,94,300,94,296,134,274,134],'pl')],
 ['Ojiva',[34,0],[420,72],g=>gP(g,[382,54,420,64,438,73,420,82,382,92],'rd')]]},
{n:'Ametralladora',bb:[440,170],P:[
 ['Culata',[-24,8],[56,88],g=>gP(g,[8,66,102,66,106,112,10,114],'pl')],
 ['Receptor',[0,0],[160,80],g=>{gR(g,96,60,132,38,5,'mt');g.fillStyle='#0b0e10';g.fillRect(150,66,40,8)}],
 ['Asa de transporte',[0,-18],[176,44],g=>{gR(g,140,38,72,8,4,'pl');gR(g,146,44,6,16,1,'mt');gR(g,200,44,6,16,1,'mt')}],
 ['Caja de munición',[0,26],[178,126],g=>{gR(g,150,100,60,50,5,'ol');gSl(g,162,106,4,12,38)}],
 ['Empuñadura',[-14,20],[130,124],g=>gP(g,[116,98,146,98,140,144,112,144],'pl')],
 ['Gatillo',[-4,26],[176,108],g=>trig(g,164,98,0.01+22)],
 ['Guardamanos',[12,6],[262,80],g=>gR(g,228,66,70,28,4,'pl')],
 ['Camisa del cañón',[24,0],[330,80],g=>{gR(g,298,68,72,22,4,'mt');g.fillStyle='#0b0e10';for(let i=0;i<5;i++){g.beginPath();g.arc(312+i*12,79,3,0,7);g.fill()}}],
 ['Cañón',[36,0],[392,80],g=>gR(g,370,74,48,10,3,'mt')],
 ['Apagallamas',[46,0],[426,80],g=>{gR(g,414,70,22,18,3,'pl');gSl(g,420,72,3,5,14)}],
 ['Bípode',[8,22],[326,126],g=>{gS(g,[322,92,304,158],4.5,'#7d8a92');gS(g,[330,92,350,158],4.5,'#7d8a92')}]]},
{n:'Subfusil',bb:[320,160],P:[
 ['Hombrera',[-26,0],[8,76],g=>gR(g,2,58,12,36,3,'pl')],
 ['Culata plegable',[-14,6],[34,76],g=>gS(g,[14,62,64,62,64,92,14,92],4,'#2a3236')],
 ['Receptor',[0,-6],[130,70],g=>{gR(g,60,52,150,34,5,'mt');g.fillStyle='#0b0e10';g.fillRect(118,58,36,7)}],
 ['Riel y mira',[0,-22],[100,46],g=>{gR(g,70,44,70,8,2,'pl');gSl(g,76,44,8,8,5)}],
 ['Empuñadura',[-10,20],[130,114],g=>gP(g,[116,86,148,86,140,138,112,138],'pl')],
 ['Gatillo',[0,24],[164,98],g=>trig(g,152,86,26)],
 ['Cargador',[14,24],[184,120],g=>{gR(g,168,86,26,66,3,'mt');gSl(g,174,94,3,7,48)}],
 ['Guardamanos',[18,4],[236,70],g=>gR(g,210,56,52,26,4,'pl')],
 ['Supresor',[34,0],[286,70],g=>{gR(g,262,60,50,18,7,'mt');gSl(g,272,62,5,8,14)}]]},
{n:'Francotirador',bb:[460,160],P:[
 ['Culata',[-24,10],[60,92],g=>{gP(g,[6,66,124,62,130,70,130,118,100,124,70,114,6,106],'wd');g.beginPath();g.ellipse(88,92,16,12,0,0,7);g.fillStyle='#0e1519';g.fill();g.strokeStyle='rgba(0,0,0,.6)';g.stroke()}],
 ['Receptor',[0,0],[180,72],g=>gR(g,122,58,120,28,4,'mt')],
 ['Cerrojo',[0,-10],[210,84],g=>{gS(g,[196,74,212,100],5,'#2a3236');g.beginPath();g.arc(214,103,6,0,7);g.fillStyle=gG(g,'mt',97,109);g.fill()}],
 ['Gatillo',[0,24],[196,110],g=>trig(g,184,86,26)],
 ['Cargador',[6,22],[170,106],g=>gR(g,152,86,34,28,3,'pl')],
 ['Cañón',[28,0],[330,70],g=>gR(g,242,64,168,12,4,'mt')],
 ['Freno de boca',[44,0],[424,70],g=>{gR(g,408,60,34,20,3,'pl');gSl(g,416,62,4,7,16)}],
 ['Mira telescópica',[0,-30],[190,38],g=>{gR(g,130,30,122,18,8,'pl');gR(g,246,26,28,26,7,'pl');gR(g,108,32,26,22,6,'pl');g.beginPath();g.arc(268,39,8,0,7);g.fillStyle='#8fd3ff';g.fill();gR(g,150,46,14,14,2,'mt');gR(g,224,46,14,14,2,'mt')}],
 ['Bípode',[8,22],[310,100],g=>{gS(g,[300,78,284,150],4.5,'#7d8a92');gS(g,[310,78,330,150],4.5,'#7d8a92')}]]}
];
/* dibuja el arma #i (índice de WP) centrada en la caja w×h; e=despiece 0..1, lb=etiquetas */
function drawGun(g,i,w,h,e,lb,fam){const G=GUNS[i];if(!G)return;const [bw,bh]=G.bb,mg=lb?(w<520?44:110):8,mv=lb?80:8,sc=Math.min((w-mg)/(bw+Math.abs(60*e)),(h-mv)/(bh+30*e)),ox=(w-bw*sc)/2,oy=(h-bh*sc)/2;
  g.save();g.translate(ox,oy);g.scale(sc,sc);
  G.P.forEach(([n,ex,an,f],k)=>{g.save();g.translate(ex[0]*e,ex[1]*e);f(g);g.restore()});
  g.restore();
  if(!lb)return;g.font='600 '+Math.round(12+(w>500?1:0))+'px '+(fam||'"Barlow Condensed",sans-serif');g.textAlign='center';
  const items=G.P.map(([n,ex,an])=>({n,ax:ox+(an[0]+ex[0]*e)*sc,ay:oy+(an[1]+ex[1]*e)*sc,up:an[1]<bh*.5,tw:g.measureText(n).width+10}));
  for(const up of[true,false]){const L=items.filter(o=>o.up===up).sort((a,b)=>a.ax-b.ax),rows=[[],[]];
    L.forEach((o,k)=>{const r=rows[k%2];let x=o.ax;const q=r[r.length-1];if(q)x=Math.max(x,q.lx+q.tw/2+o.tw/2+4);o.lx=x;r.push(o);o.row=k%2});
    for(const r of rows){for(let k=r.length-1;k>=0;k--){const o=r[k],mx=w-o.tw/2-4;if(o.lx>mx)o.lx=mx;if(k<r.length-1){const n=r[k+1];if(o.lx>n.lx-n.tw/2-o.tw/2-4)o.lx=n.lx-n.tw/2-o.tw/2-4}}for(const o of r)o.lx=Math.max(o.tw/2+4,o.lx)}
    for(const o of L){const ly=up?16+o.row*15:h-12-o.row*15;g.strokeStyle='rgba(255,122,69,.65)';g.lineWidth=1;g.beginPath();g.moveTo(o.ax,o.ay);g.lineTo(o.lx,ly+(up?4:-12));g.stroke();g.fillStyle='#ff7a45';g.beginPath();g.arc(o.ax,o.ay,2.4,0,7);g.fill();g.fillStyle='#f4efe6';g.fillText(o.n,o.lx,ly+(up?0:-2))}}}
