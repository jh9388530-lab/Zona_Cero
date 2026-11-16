
(function(){
const TA={"T0":"img/ta/T0.webp","T1":"img/ta/T1.webp","T2":"img/ta/T2.webp","T3":"img/ta/T3.webp","T4":"img/ta/T4.webp","T5":"img/ta/T5.webp","T6":"img/ta/T6.webp","T7":"img/ta/T7.webp","T8":"img/ta/T8.webp","T9":"img/ta/T9.webp","T10":"img/ta/T10.webp"},TM={"T0":{"hw":131,"hh":110,"cx":76.2,"cy":58.1,"tw":143,"th":84,"tcx":42.0,"tcy":41.9,"W":170},"T1":{"hw":124,"hh":104,"cx":59.9,"cy":60.5,"tw":148,"th":74,"tcx":37.0,"tcy":37.1,"W":170},"T2":{"hw":125,"hh":102,"cx":54.7,"cy":59.4,"tw":157,"th":82,"tcx":41.3,"tcy":40.9,"W":170},"T3":{"hw":128,"hh":106,"cx":61.4,"cy":61.4,"tw":153,"th":83,"tcx":41.7,"tcy":41.7,"W":170},"T4":{"hw":131,"hh":112,"cx":55.0,"cy":59.1,"tw":159,"th":84,"tcx":42.3,"tcy":42.4,"W":170},"T5":{"hw":125,"hh":105,"cx":54.2,"cy":52.8,"tw":155,"th":78,"tcx":39.2,"tcy":39.0,"W":170},"T6":{"hw":126,"hh":105,"cx":75.4,"cy":46.2,"tw":135,"th":81,"tcx":40.5,"tcy":40.6,"W":170},"T7":{"hw":131,"hh":112,"cx":55.7,"cy":52.9,"tw":155,"th":81,"tcx":40.5,"tcy":40.7,"W":170},"T8":{"hw":129,"hh":105,"cx":70.2,"cy":56.3,"tw":143,"th":83,"tcx":41.8,"tcy":41.4,"W":170},"T9":{"hw":130,"hh":104,"cx":63.0,"cy":56.9,"tw":149,"th":78,"tcx":39.1,"tcy":39.0,"W":170},"T10":{"hw":128,"hh":103,"cx":64.4,"cy":55.5,"tw":148,"th":81,"tcx":40.7,"tcy":40.6,"W":170}},MIA={"0_0":"img/mia/0_0.webp","1_0":"img/mia/1_0.webp","2_0":"img/mia/2_0.webp","3_0":"img/mia/3_0.webp","4_0":"img/mia/4_0.webp","5_0":"img/mia/5_0.webp","6_0":"img/mia/6_0.webp","7_0":"img/mia/7_0.webp","8_0":"img/mia/8_0.webp","9_0":"img/mia/9_0.webp","0_1":"img/mia/0_1.webp","1_1":"img/mia/1_1.webp","2_1":"img/mia/2_1.webp","3_1":"img/mia/3_1.webp","4_1":"img/mia/4_1.webp","5_1":"img/mia/5_1.webp","6_1":"img/mia/6_1.webp","7_1":"img/mia/7_1.webp","8_1":"img/mia/8_1.webp","9_1":"img/mia/9_1.webp","0_2":"img/mia/0_2.webp","1_2":"img/mia/1_2.webp","2_2":"img/mia/2_2.webp","3_2":"img/mia/3_2.webp","4_2":"img/mia/4_2.webp","5_2":"img/mia/5_2.webp","6_2":"img/mia/6_2.webp","7_2":"img/mia/7_2.webp","8_2":"img/mia/8_2.webp","9_2":"img/mia/9_2.webp"},TI={},MI={},TS={};
for(const k in TA){const i=new Image();i.decoding='async';i.src=TA[k];TI[k]=i}
for(const k in MIA){const i=new Image();i.decoding='async';i.src=MIA[k];MI[k]=i}
function rkInfo(){let t=0,d=0;try{const x=PG.tier();t=x.t;d=x.d}catch(e){}return{t:Math.min(t,10),q:2-d}}
function silT(id){let c=TS[id];if(c)return c;const im=TI[id];c=document.createElement('canvas');c.width=im.naturalWidth;c.height=im.naturalHeight;const g=c.getContext('2d');g.drawImage(im,0,0);g.globalCompositeOperation='source-in';g.fillStyle='#fff';g.fillRect(0,0,c.width,c.height);return TS[id]=c}
/* tanque con la skin de su rango: casco y torreta son piezas separadas */
const UI={},SW={};
const UA={"T0":"img/ua/T0.webp","T1":"img/ua/T1.webp","T2":"img/ua/T2.webp","T3":"img/ua/T3.webp","T4":"img/ua/T4.webp","T5":"img/ua/T5.webp","T6":"img/ua/T6.webp","T7":"img/ua/T7.webp","T8":"img/ua/T8.webp","T9":"img/ua/T9.webp","T10":"img/ua/T10.webp"};
for(const k in UA){const i=new Image();i.decoding='async';i.src=UA[k];UI[k]=i}
function ok(im){return im&&im.complete&&im.naturalWidth}
function silC(key,im,col){let c=SW[key];if(c)return c;c=document.createElement('canvas');c.width=im.naturalWidth;c.height=im.naturalHeight;const g=c.getContext('2d');g.drawImage(im,0,0);g.globalCompositeOperation='source-in';g.fillStyle=col;g.fillRect(0,0,c.width,c.height);return SW[key]=c}
window.tankSpr=function(a,k,s){
  const id=k?'T5':'T'+rkInfo().t,hi=TI[id],ti=UI[id],m=TM[id];
  if(!ok(hi)||!ok(ti))return false;
  const sc=78*s/m.W,ta=(a.ta==null||a.ta!==a.ta)?a.a:a.ta,vb=a.mv>.12?(Math.sin(a.wp*9)*.32+Math.sin(a.wp*23)*.18)*Math.min(1,a.mv):0,rk=(a.kk||0)*5*s;
  cx.save();cx.translate(a.x,a.y);cx.rotate(a.a);
  if(SET.q){const q=shd(a.a,s);cx.fillStyle='rgba(0,0,0,'+.24*SHk+')';cx.beginPath();cx.ellipse(q[0]*.8,q[1]*.8,31*s,20*s,0,0,7);cx.fill()}
  cx.rotate(vb*.012);
  cx.drawImage(hi,-m.cx*sc,-m.cy*sc,m.hw*sc,m.hh*sc);
  if(a.f>0){cx.globalAlpha=.85;cx.drawImage(silC('h'+id,hi,'#fff'),-m.cx*sc,-m.cy*sc,m.hw*sc,m.hh*sc);cx.globalAlpha=1}
  cx.rotate(ta-a.a);
  if(SET.q){cx.globalAlpha=.3;cx.drawImage(silC('k'+id,ti,'#000'),-rk-m.tcx*sc+2.2*s,-m.tcy*sc+3*s,m.tw*sc,m.th*sc);cx.globalAlpha=1}
  cx.drawImage(ti,-rk-m.tcx*sc,-m.tcy*sc,m.tw*sc,m.th*sc);
  if(a.f>0){cx.globalAlpha=.85;cx.drawImage(silC('t'+id,ti,'#fff'),-rk-m.tcx*sc,-m.tcy*sc,m.tw*sc,m.th*sc);cx.globalAlpha=1}
  cx.restore();
  if(S=='play'&&a.mv>.4&&Math.random()<.18)puff(a.x-Math.cos(a.a)*30*s+(Math.random()-.5)*8,a.y-Math.sin(a.a)*30*s+(Math.random()-.5)*8,'#9a8b72',6*s,.8,-Math.cos(a.a)*20,-Math.sin(a.a)*20,1.6,.5);
  return true};
/* minicarros de combate: salen disparados hacia el enemigo, disparan y explotan al tocarlo */
const MCS=[];window.miniCount=()=>MCS.length;
window.miniCars=function(){
  if(S!='play'||(p.nc||0)>0)return;
  const r=rkInfo(),n=Math.min(5,3+(r.t>=4?1:0)+(r.t>=7?1:0)),[tx,ty]=aim(300),base=Math.atan2(ty-p.y,tx-p.x);
  for(let i=0;i<n;i++){const an=base+(i-(n-1)/2)*.5;MCS.push({x:p.x+Math.cos(an)*26,y:p.y+Math.sin(an)*26,a:an,v:120,life:16,col:Math.min(r.t,9),q:r.q,t:r.t,cd:.25*i,fl:0,tg:null,tt:0,sh:r.t>=2})}
  p.nc=26;zm='Minicarros lanzados';zt=2;beep(300,.2,'square',.05)};
window.miniUpd=function(dt){
  if(!MCS.length)return;
  if(typeof MP!='undefined'&&MP&&MP.role==='guest')return;
  for(let i=MCS.length-1;i>=0;i--){const m=MCS[i];m.life-=dt;m.cd-=dt;m.fl-=dt;m.tt-=dt;
    if(m.tt<=0||!m.tg||m.tg.hp<=0){const[e,dd]=near(m,E);m.tg=dd<1100?e:null;m.tt=.35}
    const tx=m.tg?m.tg.x:p.x,ty=m.tg?m.tg.y:p.y,ga=Math.atan2(ty-m.y,tx-m.x),d=Math.atan2(Math.sin(ga-m.a),Math.cos(ga-m.a)),dist=Math.hypot(tx-m.x,ty-m.y);
    m.a+=cl(d,-3.4*dt,3.4*dt);
    const vt=m.tg?300*(.35+.65*Math.max(0,Math.cos(d))):(dist>130?190*(.35+.65*Math.max(0,Math.cos(d))):0);
    m.v+=(vt-m.v)*Math.min(1,dt*3.2);
    m.x=cl(m.x+Math.cos(m.a)*m.v*dt,10,WW-10);m.y=cl(m.y+Math.sin(m.a)*m.v*dt,10,WH-10);
    if(m.v>60&&Math.random()<.5)puff(m.x-Math.cos(m.a)*14,m.y-Math.sin(m.a)*14,'#9a8b72',4,.6,-Math.cos(m.a)*18,-Math.sin(m.a)*18,1.5,.4);
    if(m.sh&&m.tg&&dist<190&&m.cd<=0&&Math.abs(d)<.25){m.cd=.3;m.fl=.06;fireB({x:m.x,y:m.y,t:3},m.a,760,2,.12,0,2)}
    const hit=m.tg&&dist<(m.tg.r||14)+12;
    if(hit||(m.life<=0&&m.tg&&dist<140)){ex(m.x,m.y,70+m.t*4,55+m.t*8,0);MCS.splice(i,1);continue}
    if(m.life<=0)MCS.splice(i,1)}};
window.miniDraw=function(){
  for(const m of MCS){if(off(m,60))continue;const im=MI[m.col+'_'+m.q];if(!im||!im.complete||!im.naturalWidth)continue;
    const w=34,h=w*im.naturalHeight/im.naturalWidth;
    cx.save();cx.translate(m.x,m.y);cx.rotate(m.a);
    if(SET.q){cx.globalAlpha=.3;cx.fillStyle='#000';cx.beginPath();cx.ellipse(2,3,w*.5,h*.45,0,0,7);cx.fill();cx.globalAlpha=1}
    cx.drawImage(im,-w/2,-h/2+(m.v>40?Math.sin(T0*40+m.x)*.35:0),w,h);
    if(m.fl>0){cx.globalCompositeOperation='lighter';cx.fillStyle='rgba(255,220,120,.85)';cx.beginPath();cx.arc(w/2+3,0,5,0,7);cx.fill()}
    cx.restore()}};
})();

