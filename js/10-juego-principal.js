let cx;const cv=document.getElementById('c'),ov=document.getElementById('ov');cx=cv.getContext('2d',{alpha:false});
let WW=5200,WH=3400;const cl=(v,a,b)=>Math.max(a,Math.min(b,v)),D=(a,b)=>{const x=a.x-b.x,y=a.y-b.y;return Math.sqrt(x*x+y*y)};
var SNw=0,SNc=0,VG,VGk,FG,FGk,FRc=0,VC=0,FPSv=60,FPSlow=0,FPSgr=3,TKt=0,mkN=0,SH={x:6,y:9},SHk=1,sunPh=.2,WXn=-1,WXt=0,WXr=0,WXf=0,RN=[];let W,H,S='menu',p,E=[],B=[],Q=[],U=[],X=[],A=[],RS=[],AS=[],hq=30,od=0,PS=[],dp={x:0,y:0},Z=[],zm='',zt=0,wv,sc=0,cb=0,ct=0,sh=0,T0=0,best=0,touch=0,mx=0,my=0,md=0,aa=0,cam={x:0,y:0};
try{best=+localStorage.zc||0}catch(e){}let SET={snd:1,q:1,vib:1,tut:1,dif:1,nt:0};try{Object.assign(SET,JSON.parse(localStorage.zcs||'{}'))}catch(e){}if(SET.v!=2){SET.q=SET.q?2:0;SET.v=2}
let sd=7;const rn=()=>(sd=sd*16807%2147483647)/2147483647,CR=[],HQ={x:0,y:0},TR=[],DC=[],RU=[];
/* Densidad de detalle del suelo (1 = original). Baja estos valores para menos partículas. */
var GRD={hierba:.3,granos:.2,piedras:.6,decor:.5};
var WGEN=[5200,3400,7,1];function genWorld(w0,h0,seed,f){WGEN=[w0,h0,seed,f];WW=w0;WH=h0;sd=seed;CR.length=TR.length=DC.length=RU.length=0;HQ.x=WW/2-420;HQ.y=WH/2;
for(let i=0;i<200*f;i++)CR.push({x:rn()*WW,y:rn()*WH,r:18+rn()*55});
[[-280,-170,260,44],[20,-170,260,44],[-280,126,260,44],[20,126,260,44],[-340,-110,44,220],[296,-110,44,220]].forEach(([x,y,w,h])=>TR.push({x:HQ.x+x,y:HQ.y+y,w,h}));
for(let i=0;i<16*f;i++){const v=rn()<.5,w=v?44:240,h=v?240:44,x=200+rn()*(WW-400),y=200+rn()*(WH-400);if(Math.hypot(x-HQ.x,y-HQ.y)>800)TR.push({x,y,w,h})}
for(let i=0;i<420*f*GRD.decor;i++)DC.push({x:rn()*WW,y:rn()*WH,k:rn()*3|0,r:3+rn()*6,a:rn()*6.3});
for(let i=0;i<14*f;i++){const w=90+rn()*50,h=70+rn()*40,x=150+rn()*(WW-300-w),y=150+rn()*(WH-300-h);if(Math.hypot(x-HQ.x,y-HQ.y)>700){const b=[];for(let k=0;k<10;k++)b.push([rn()*w,rn()*h,6+rn()*10,4+rn()*6,rn()]);RU.push({x,y,w,h,b,g:rn()*40})}}}
genWorld(5200,3400,7,1);
const inT=o=>TR.some(t=>o.x>t.x&&o.x<t.x+t.w&&o.y>t.y&&o.y<t.y+t.h)||RU.some(t=>o.x>t.x&&o.x<t.x+t.w&&o.y>t.y&&o.y<t.y+t.h);
const NC=document.createElement('canvas'),nx=NC.getContext('2d');
var VGc=null,PD=0,LSt='',CD=0,CDn=-1,SLO=0,MC=null,MCk='',RSd=1,SAI={t:0,l:0};function sai(){const e=document.createElement('div');e.style.cssText='position:fixed;left:0;top:0;visibility:hidden;padding:env(safe-area-inset-top,0px) 0 0 env(safe-area-inset-left,0px)';document.body.appendChild(e);const c=getComputedStyle(e);SAI.t=parseFloat(c.paddingTop)||0;SAI.l=parseFloat(c.paddingLeft)||0;e.remove()}
function rs(){PD=0;const d=Math.min(devicePixelRatio||1,[1,1.25,1.5][SET.q]),nz2=SET.q?2:4;RSd=d;MC=null;sai();W=innerWidth;{const mw=Math.round(Math.max(130,Math.min(200,W*.2))),ds=document.documentElement.style;ds.setProperty('--mmx',(SAI.l+4)+'px');ds.setProperty('--mmy',(SAI.t+Math.round(mw*WH/WW)+8)+'px')}H=innerHeight;cv.width=W*d;cv.height=H*d;cx.setTransform(d,0,0,d,0,0);NC.width=Math.ceil(cv.width/nz2);NC.height=Math.ceil(cv.height/nz2);nx.setTransform(d/nz2,0,0,d/nz2,0,0)}
addEventListener('resize',rs);rs();mx=W/2;my=H/2;
const WP=[{n:'Pistola',d:1,r:.26,m:12,pel:1,sp:.03,v:720,rt:.9,life:.8,fl:.8,cc:'#d9a441',cs:3.6,kk:4,rs:0,res0:1/0},{n:'Escopeta',d:1,r:.8,m:6,pel:7,sp:.4,v:640,rt:1.6,life:.45,fl:1.6,cc:'#c0392b',cs:5,kk:14,rs:1,res0:18},{n:'Fusil',d:1,r:.085,m:30,pel:1,sp:.07,v:840,rt:1.5,life:1.1,fl:1.1,cc:'#d9a441',cs:3.6,kk:4,rs:2,res0:60},{n:'Lanzacohetes',d:45,r:1.1,m:1,pel:1,sp:.02,v:560,rt:2.2,rk:1,life:1.5,fl:1.9,cc:'#d9a441',cs:3.6,kk:18,rs:3,res0:4},{n:'Ametralladora',d:.9,r:.075,m:100,pel:1,sp:.11,v:820,rt:3.4,life:1.1,fl:1.2,cc:'#d9a441',cs:3.8,kk:5,rs:2,res0:200},{n:'Subfusil',d:.6,r:.055,m:35,pel:1,sp:.1,v:760,rt:1.3,life:.7,fl:.8,cc:'#d9a441',cs:3.2,kk:3,rs:0,res0:140},{n:'Francotirador',d:5,r:1.05,m:5,pel:1,sp:.004,v:1500,rt:2.1,life:1.7,fl:1.5,cc:'#d9a441',cs:4.6,kk:9,rs:2,res0:25,sk:[2,{sn:1}]}];
const EC=['#ff7a45','#ffd23f','#b08cff','#e0603a','#c0392b','#ff4d6d','#c4a46a','#9c6b3a','#7a2a18','#b8452a'],EH=['#a8441f','#a8861a','#6a4cb0','#8a2e1a','#7a1f14','#a02040','#8f7440','#6e4824','#4a1810','#7a1f14'],HP=[2,3,10,12,30,10,14,10,300,300],SP=[115,75,58,95,70,230,160,150,52,120],RR=[12,12,18,14,23,16,18,17,40,34];
const AT=[{hp:70,sp:150,r:12,rng:420,c:'#3f8cff',h:'#1f4fa8'},{hp:150,sp:105,r:14,rng:380,c:'#2fb7a6',h:'#176b62'},{hp:320,sp:85,r:23,rng:580},{hp:1e9,sp:290,r:16,rng:420},{hp:200,sp:175,r:17,rng:460,c:'#3f8cff',h:'#1f4fa8'}];
let ac;function VMAX(){return[24,40,60][SET.q]}function vcok(){if(ac&&ac.state!='running')VC=0;return VC<VMAX()}function vcd(){VC=Math.max(0,VC-1)}function beep(f,d,t='square',v=.05){if(!SET.snd||!vcok())return;try{ac=ac||new AudioContext();const o=ac.createOscillator(),g=ac.createGain();o.type=t;o.frequency.value=f;g.gain.value=v;g.gain.exponentialRampToValueAtTime(.001,ac.currentTime+d);o.connect(g);g.connect(ac.destination);VC++;o.onended=vcd;o.start();o.stop(ac.currentTime+d)}catch(e){}}
let nb,ls=0,MDp=null;
const SN=[[2200,1.2,.05,.35,160,60,.09,.5,0,0,0],[900,.6,.12,.5,90,32,.28,.9,500,.45,.35],[2800,1,.045,.4,120,50,.1,.55,1200,.25,.15],[2000,1,.05,.28,110,55,.08,.35,0,0,0],[2600,1,.04,.3,130,60,.07,.35,0,0,0],[1100,.8,.06,.3,100,50,.09,.5,0,0,0],[500,.5,.2,.5,70,26,.5,1.1,350,.8,.5],[1600,1.5,.05,.2,0,0,0,0,0,0,0],[1500,1,.045,.25,140,70,.07,.3,0,0,0]];
var MB=null,nbB=null,lsH=0,lsW=0,lsE=0,MF=[],CS=[],VQ=[];
const GN=[[2200,.03,.9,1100,.9,.08,.55,220,80,.07,.55,.35],[1400,.07,1,450,.7,.2,.9,120,38,.25,1,.55],[2600,.045,1,800,.8,.11,.65,160,55,.12,.7,.55],[2400,.035,.8,950,.8,.09,.5,170,65,.08,.5,.45],[2000,.04,.8,700,.8,.1,.55,150,60,.09,.55,.45],[1700,.04,.8,600,.8,.1,.55,130,55,.1,.55,.4],[0,0,0,0,0,0,0,0,0,0,0,0],[2500,.035,.8,900,.8,.09,.5,180,70,.08,.5,.4],[1800,.04,.8,650,.8,.1,.5,140,60,.09,.5,.4]];
/* desbloqueo del audio: el navegador solo lo permite tras un toque o tecla */
/* ---- sonidos reales (opcionales): si existe audio/ se usan en vez de la síntesis ---- */
function ACAP(){return CM?30:18}
function EF(){const n=A.filter(a=>a.t<2).length;return Math.min(2.2,Math.max(1,1+(n-10)*.05))}
var SMP={};
function smpLoad(){if(SMP.__l||!ac||typeof SFX=='undefined')return;SMP.__l=1;for(const k in SFX){const m=/^([a-z_]+?)\d*$/i.exec(k);if(!m)continue;const gname=m[1].toLowerCase();try{zcBuf('sfx',k).then(u=>ac.decodeAudioData(u,b=>{(SMP[gname]=SMP[gname]||[]).push(b)},()=>{})).catch(()=>{})}catch(e){}}}
function smpPlay(gname,h,t,r,gain){const L=gname&&SMP[gname];if(!L||!L.length)return 0;const s=ac.createBufferSource(),gn=ac.createGain();s.buffer=L[Math.random()*L.length|0];s.playbackRate.value=r;gn.gain.value=(gain||1)*h.v;s.connect(gn);gn.connect(h.inp);vreg(h,t+s.buffer.duration/r+.05);s.start(t);return 1}
function vU(){if(RAD.ul||!('speechSynthesis'in window))return;try{RAD.ul=1;speechSynthesis.getVoices();const u=new SpeechSynthesisUtterance(' ');u.volume=0;speechSynthesis.speak(u)}catch(e){}}
function aU(){if(window.ZC_AD)return;vU();try{if(!ac)ac=new AudioContext();if(ac.state!='running')ac.resume();if(ac.state=='running'||ac.state=='suspended'){nbuf();mbus();smpLoad()}}catch(e){}}
for(const ev of['touchstart','touchend','pointerdown','mousedown','keydown','click'])addEventListener(ev,aU,{passive:true});
document.addEventListener('visibilitychange',()=>{if(!document.hidden)aU()});
function nbuf(){if(!ac)return;if(!nb){nb=ac.createBuffer(1,ac.sampleRate*2,ac.sampleRate);const d=nb.getChannelData(0);for(let i=0;i<d.length;i++)d[i]=Math.random()*2-1}if(!nbB){nbB=ac.createBuffer(1,ac.sampleRate*3,ac.sampleRate);const d=nbB.getChannelData(0);let x=0;for(let i=0;i<d.length;i++){x=(x+(Math.random()*2-1)*.06)/1.02;d[i]=x*5}}}
function mbus(){if(MB&&MB.c===ac)return MB;const c=ac,m=c.createGain();m.gain.value=.9*(SET.vol==null?1:SET.vol);const cp=c.createDynamicsCompressor();cp.threshold.value=-10;cp.knee.value=20;cp.ratio.value=3;cp.attack.value=.006;cp.release.value=.3;m.connect(cp);cp.connect(c.destination);
 const len=c.sampleRate*1.7|0,ib=c.createBuffer(2,len,c.sampleRate);for(let ch=0;ch<2;ch++){const d=ib.getChannelData(ch);let lp=0;for(let i=0;i<len;i++){const u=i/len;lp+=((Math.random()*2-1)-lp)*(.7-.6*u);d[i]=lp*Math.pow(1-u,2.4)*1.7}}
 const cv=c.createConvolver();cv.buffer=ib;const rg=c.createGain();rg.gain.value=.45;cv.connect(rg);rg.connect(cp);MB={c,m,cv};return MB}
/* control de voces por tiempo de fin (no se "pierden" nunca) */
function vok(pr){if(!ac||ac.state!='running'){aU();return false}const n=ac.currentTime;let c=0;for(let i=VQ.length-1;i>=0;i--){if(VQ[i]>n)c++;else VQ.splice(i,1)}return c<VMAX()*(pr?2.2:1)}
function vreg(h,e){VQ.push(e);if(e>h.e)h.e=e}
function fin(h){const w=Math.max(0,h.e-ac.currentTime)*1000+400;setTimeout(()=>{for(const n of h.nd){try{n.disconnect()}catch(_){}}},w)}
function chain(o,rv,rg){nbuf();const c=ac,B=mbus(),d=o&&p?Math.hypot(o.x-p.x,o.y-p.y):0,v=o?Math.max(0,1-d/(rg||1000)):1,inp=c.createGain(),lp=c.createBiquadFilter(),nd=[inp,lp];lp.type='lowpass';lp.frequency.value=o?700+17000*Math.pow(v,2.2):20000;inp.connect(lp);let n=lp;
 if(o&&p&&c.createStereoPanner){const sp=c.createStereoPanner();sp.pan.value=Math.max(-1,Math.min(1,(o.x-p.x)/420))*.9;lp.connect(sp);n=sp;nd.push(sp)}
 n.connect(B.m);if(rv){const g=c.createGain();g.gain.value=rv*(.7+.8*(1-v));n.connect(g);g.connect(B.cv);nd.push(g)}return{inp,v:o?Math.pow(v,1.3):1,nd,e:0}}
function nzL(h,t,ty,fr,q,du,g,br){const c=ac,s=c.createBufferSource(),f=c.createBiquadFilter(),gn=c.createGain();s.buffer=br?nbB:nb;f.type=ty;f.frequency.value=fr;f.Q.value=q;gn.gain.setValueAtTime(Math.max(.0003,g*h.v),t);gn.gain.exponentialRampToValueAtTime(.0003,t+du);s.connect(f);f.connect(gn);gn.connect(h.inp);vreg(h,t+du+.05);s.start(t,Math.random()*.5,du+.05)}
function nzS(h,t,f0,f1,q,du,g){const c=ac,s=c.createBufferSource(),f=c.createBiquadFilter(),gn=c.createGain();s.buffer=nb;f.type='bandpass';f.Q.value=q;f.frequency.setValueAtTime(f0,t);f.frequency.exponentialRampToValueAtTime(f1,t+du);gn.gain.setValueAtTime(.0003,t);gn.gain.linearRampToValueAtTime(Math.max(.0003,g*h.v),t+du*.3);gn.gain.exponentialRampToValueAtTime(.0003,t+du);s.connect(f);f.connect(gn);gn.connect(h.inp);vreg(h,t+du+.05);s.start(t,Math.random()*.5,du+.05)}
function tnL(h,t,f0,f1,du,g,ty){const c=ac,o=c.createOscillator(),gn=c.createGain();o.type=ty||'sine';o.frequency.setValueAtTime(f0,t);o.frequency.exponentialRampToValueAtTime(Math.max(20,f1),t+du);gn.gain.setValueAtTime(Math.max(.0003,g*h.v),t);gn.gain.exponentialRampToValueAtTime(.0003,t+du);o.connect(gn);gn.connect(h.inp);vreg(h,t+du+.02);o.start(t);o.stop(t+du+.02)}
function snd(k,o){if(!SET.snd)return;if(o){const nw=performance.now();if(nw-SNw>100){SNw=nw;SNc=0}if(++SNc>(SET.q?10:7))return}const xp=o&&o.ex;if(o&&!xp&&(Math.hypot(o.x-p.x,o.y-p.y)>1000||Math.random()>.7))return;if(!vok(!o||xp))return;
 try{const t=ac.currentTime;if(o&&!xp){if(t-ls<.015)return;ls=t}const r=.92+Math.random()*.16;
  if(k==6){if(xp){const d=Math.hypot(o.x-p.x,o.y-p.y),h=chain(o,1,1700),T=t+Math.min(.4,d/2800),bg=Math.min(1.4,(o.r||80)/80);if(h.v<.02){fin(h);return}if(smpPlay('explosion',h,T,r,1)){fin(h);return}
    tnL(h,T,95*r,24,.9*bg+.3,1.3,'sine');nzL(h,T,'lowpass',520*r,.6,1.1*bg+.2,1,1);nzL(h,T,'highpass',1600,.6,.14,.8);nzL(h,T,'bandpass',1300,.9,.35,.3);
    for(let i=0;i<3;i++)nzL(h,T+.12+Math.random()*.6,'highpass',2800+Math.random()*2000,.7,.05,.14+Math.random()*.1);fin(h)}
   else{const h=chain(o,.5);if(h.v<.03){fin(h);return}if(smpPlay('cohete',h,t,r,1)){fin(h);return}nzS(h,t,260,2400,1.1,.55,.7);tnL(h,t,150*r,45,.2,.8);nzL(h,t,'highpass',1800,.6,.05,.7);fin(h)}return}
  const G=GN[k]||GN[3],h=chain(o,G[11]);if(h.v<.03){fin(h);return}
  {let sg=(k==2&&o&&o.sn&&SMP.francotirador)?'francotirador':(k==2&&o&&o.ro=='mg'&&SMP.ametralladora)?'ametralladora':['pistola','escopeta','fusil','enemigo','ametralladora','subfusil','','subfusil','subfusil'][k];if(!SMP[sg]&&k>=3)sg='fusil';if(smpPlay(sg,h,t,r,1)){fin(h);return}}
  nzL(h,t,'highpass',G[0]*r,.7,G[1],G[2]);nzL(h,t,'bandpass',G[3]*r,G[4],G[5],G[6]);if(!o||h.v>.3)tnL(h,t,G[7]*r,G[8]*r,G[9],G[10]);
  if((k==1||k==2)&&(!o||h.v>.45))nzL(h,t+.01,'lowpass',900,.5,k==1?.4:.3,.16,1);
  if(!o||h.v>.4){nzL(h,t,'highpass',4200*r,.5,.014,.45);if(k!=0&&k!=6)nzL(h,t+(k==1?.1:.075),'bandpass',420*r,.55,k==1?.2:.12,.2,1);if(k==1||k==2)tnL(h,t,70*r,32,.12,.22)}
  fin(h)}catch(e){}}
function sfx(n,o,x){if(!SET.snd)return;const pr=n=='pain'||n=='rl'||n=='ring'||n=='dash'||n=='throw'||n=='empty';if(!vok(pr))return;try{const t=ac.currentTime,r=.92+Math.random()*.16;
 if(n=='hit'||n=='ric'||n=='clang'){if(t-lsH<.035)return;lsH=t}if(n=='whiz'){if(t-lsW<.08)return;lsW=t}if(n=='empty'){if(t-lsE<.3)return;lsE=t}
 const loc=n=='hit'||n=='ric'||n=='clang'||n=='whiz'||n=='shell',h=chain(loc?o:null,n=='whiz'?0:.18);if(h.v<.03){fin(h);return}
 const SM={hit:'impacto',ric:'rebote',clang:'rebote',whiz:'zumbido',pain:'dolor',rl:'recarga',throw:'granada',empty:'vacio',shell:'casquillo',dash:'esquivar'};if(SM[n]&&smpPlay(SM[n],h,t,r,n=='rl'?.9:1)){fin(h);return}
 if(n=='hit'){nzL(h,t,'lowpass',700*r,.8,.07,.5);tnL(h,t,220*r,90,.06,.3);nzL(h,t,'bandpass',2200,1,.025,.2);if(x)tnL(h,t,2600,2300,.035,.08)}
 else if(n=='ric'){nzS(h,t,3800,1400,6,.18,.4);tnL(h,t,2900*r,2000,.12,.1);if(x)tnL(h,t,2600,2300,.035,.08)}
 else if(n=='clang'){tnL(h,t,1250*r,1180,.35,.22,'triangle');tnL(h,t,1900*r,1850,.25,.12);nzL(h,t,'highpass',3000,.6,.04,.4)}
 else if(n=='whiz')nzS(h,t,3200,900,2.5,.14,.45);
 else if(n=='pain'){nzL(h,t,'lowpass',420,.7,.14,.9,1);tnL(h,t,110,45,.18,.7);nzL(h,t,'bandpass',1600,.8,.05,.3);tnL(h,t+.03,4800,4700,.5,.018)}
 else if(n=='ring')tnL(h,t,5200,5000,1.1,.022);
 else if(n=='dash'){nzS(h,t,500,2200,.9,.22,.22);nzL(h,t,'lowpass',500,.6,.1,.3,1)}
 else if(n=='throw'){tnL(h,t,2400,2300,.05,.1);nzS(h,t,400,1300,1,.18,.18)}
 else if(n=='empty'){nzL(h,t,'bandpass',2600,3,.02,.35);tnL(h,t,1400,900,.03,.1,'square')}
 else if(n=='shell'){tnL(h,t,4600,4300,.05,.06);tnL(h,t+.07,5400,5200,.04,.04)}
 else if(n=='rl'){const D=Math.max(.5,p.rt||1.2),ck=(d0,fq,g,du)=>nzL(h,t+d0,'bandpass',fq*r,3,du||.03,g);
  if(x==1){const m=Math.min(6,Math.round(D/.26)),st=(D-.5)/m;for(let i=0;i<m;i++){ck(.1+i*st,2000,.35);tnL(h,t+.12+i*st,500,300,.05,.2)}ck(D-.25,900,.5,.06);nzL(h,t+D-.25,'lowpass',500,.6,.1,.4,1)}
  else if(x==3){ck(.2*D,1200,.45,.05);tnL(h,t+.3*D,300,160,.08,.35);ck(.8*D,2200,.4)}
  else{ck(.18*D,2100,.45);nzL(h,t+.2*D,'lowpass',900,.7,.1,.25,1);ck(.62*D,1700,.5,.04);tnL(h,t+.62*D,260,120,.06,.35);ck(.9*D,2600,.5,.025);tnL(h,t+.9*D,1500,900,.05,.1,'square')}}
 fin(h)}catch(e){}}

if(SET.vz==null)SET.vz=1;if(SET.mus==null)SET.mus=1;
var RAD={tx:'',who:'b',tt:0,pr:0,until:0,last:{},st:null,zm:'',sc:1,na:null,dt:0,ch:20};
const dirN=(dx,dy)=>['este','sureste','sur','suroeste','oeste','noroeste','norte','noreste'][(Math.round(Math.atan2(dy,dx)/(Math.PI/4))+8)%8];
function vList(){try{return speechSynthesis.getVoices().filter(v=>/^es/i.test(v.lang))}catch(e){return[]}}
function vScore(v){const n=v.name+' '+v.lang;let r=0;if(/jorge|diego|juan|pablo|carlos|miguel|ra[uú]l|enrique|andr[eé]s|[aá]lvaro|antonio|ricardo|pedro|lucas|mateo|alejandro|gonzalo|male|hombre|masculin/i.test(n))r+=10;if(/m[oó]nica|paulina|helena|laura|sabina|luc[ií]a|esperanza|mar[ií]a|elena|female|mujer|femenin|dalia|elvira|marina|sof[ií]a|camila|valentina|lupe|paloma|carmen|isabel|google/i.test(n))r-=12;if(/natural|neural|online|premium|enhanced/i.test(n))r+=4;if(/es-(MX|US|419|CL|AR|CO)/i.test(v.lang))r+=2;if(v.localService)r+=1;return r}
function pickVoice(who){const L=vList().sort((a,b)=>vScore(b)-vScore(a));if(!L.length)return null;return who=='s'&&L.length>1&&vScore(L[1])>=vScore(L[0])-3?L[1]:L[0]}
if('speechSynthesis'in window)try{speechSynthesis.onvoiceschanged=()=>{}}catch(e){}
function rsq0(){if(RAD.st){try{RAD.st.stop()}catch(_){}RAD.st=null}}
function rsq(on){if(!ac||ac.state!='running'||!SET.snd)return;try{nbuf();const B=mbus(),t=ac.currentTime,h={inp:B.m,v:1,e:0,nd:[]};nzL(h,t,'bandpass',1800,1.5,.07,on?.3:.22);tnL(h,t,on?1300:900,on?850:600,.04,.06,'square');
 if(on){rsq0();const s=ac.createBufferSource(),fl=ac.createBiquadFilter(),g=ac.createGain();s.buffer=nb;s.loop=true;fl.type='bandpass';fl.frequency.value=2300;fl.Q.value=.9;g.gain.value=.026;s.connect(fl);fl.connect(g);g.connect(B.m);s.start();RAD.st=s;setTimeout(rsq0,9000)}else rsq0()}catch(e){}}
var BB=[];
function bubble(o,tx){BB=BB.filter(b=>b.o!==o);BB.push({o,tx,t:T0+Math.max(2.6,tx.length*.075)});if(BB.length>4)BB.shift()}
function blips(tx,who){try{if(!ac||ac.state!='running')return;const B=mbus(),t0=ac.currentTime,base=who=='b'?150:210;let t=t0,n=0;for(const ch of tx){if(n++>70)break;if(ch==' '){t+=.05;continue}const o=ac.createOscillator(),g=ac.createGain(),bp=ac.createBiquadFilter();o.type='square';o.frequency.value=base*(1+((ch.charCodeAt(0)%7)-3)*.07);bp.type='bandpass';bp.frequency.value=1100;bp.Q.value=.8;g.gain.setValueAtTime(.0003,t);g.gain.linearRampToValueAtTime(.045,t+.01);g.gain.exponentialRampToValueAtTime(.0003,t+.06);o.connect(bp);bp.connect(g);g.connect(B.m);o.start(t);o.stop(t+.07);t+=.062}}catch(e){}}
var VOXB={};
function vdec(k){if(VOXB[k])return VOXB[k];return VOXB[k]=zcBuf('vox',k).then(u=>new Promise((res,rej)=>{try{const p=ac.decodeAudioData(u,res,rej);if(p&&p.catch)p.catch(rej)}catch(e){rej(e)}}))}
function vkey(tx,who,o){const vi=o?(A.indexOf(o)&1):(Math.random()<.5?1:0);let k=(who=='b'?'b':'s'+vi)+'|'+tx;if(!VOX[k]){const a=['b','s0','s1'].map(v=>v+'|'+tx).find(x=>VOX[x]);k=a||null}return k}
function vplay(k,who,o,fb){vdec(k).then(buf=>{if(!ac||ac.state!='running'){fb();return}const t=ac.currentTime+.02,pos=who!='b'&&o,h=chain(pos?o:null,who=='b'?0:.12,900),src=ac.createBufferSource(),hp=ac.createBiquadFilter(),mid=ac.createBiquadFilter(),lp=ac.createBiquadFilter(),g=ac.createGain();
  src.buffer=buf;hp.type='highpass';hp.frequency.value=who=='b'?250:160;mid.type='peaking';mid.frequency.value=who=='b'?1750:2300;mid.Q.value=.85;mid.gain.value=who=='b'?1.5:1;lp.type='lowpass';lp.frequency.value=who=='b'?3800:6200;g.gain.value=(who=='b'?1.25:1.15)*(pos?Math.max(.3,h.v):1);src.connect(hp);hp.connect(mid);mid.connect(lp);lp.connect(g);g.connect(h.inp);
  try{if(RAD.g&&RAD.src){RAD.g.gain.cancelScheduledValues(ac.currentTime);RAD.g.gain.setTargetAtTime(0,ac.currentTime,.012);RAD.src.stop(ac.currentTime+.06)}}catch(_){}RAD.src=src;RAD.g=g;RAD.spoke=1;RAD.clip=1;RAD.err='';if(who=='b'){rsq(1);src.onended=()=>rsq(0)}
  h.e=t+buf.duration;src.start(t);RAD.until=performance.now()/1000+buf.duration+.25;RAD.tt=buf.duration+.25;fin(h)}).catch(()=>fb())}
function say(tx,who,pr,o){if(!o&&who=='s'){const nr=A.filter(a=>a.t<2&&D(a,p)<500);o=nr.length?nr[Math.random()*nr.length|0]:null}
 const k=SET.snd&&SET.vz&&ac&&ac.state=='running'?vkey(tx,who,o):null;
 if(!k){sayT(tx,who,pr,o);return}
 if(o)bubble(o,tx);RAD.tx=tx;RAD.who=who;RAD.tt=Math.max(2.6,tx.length*.075);RAD.pr=pr;RAD.until=performance.now()/1000+RAD.tt;
 vplay(k,who,o,()=>sayT(tx,who,pr,o))}
function sayT(tx,who,pr,o){if(!o&&who=='s'){const nr=A.filter(a=>a.t<2&&D(a,p)<500);o=nr.length?nr[Math.random()*nr.length|0]:null}if(o)bubble(o,tx);RAD.tx=tx;RAD.who=who;RAD.tt=Math.max(2.6,tx.length*.075);RAD.pr=pr;RAD.until=performance.now()/1000+RAD.tt;
 if(!SET.snd||!SET.vz)return;
 if(!('speechSynthesis'in window)){blips(tx,who);return}
 try{const v=pickVoice(who),u=new SpeechSynthesisUtterance(tx),known=v&&vScore(v)>=10;if(v){u.voice=v;u.lang=v.lang}else u.lang='es-MX';
  u.pitch=known?(who=='b'?.9:.98):(who=='b'?.86:.97);u.rate=who=='b'?.96:1.04;u.volume=1;RAD.u=u;RAD.err='';u.onstart=()=>{u._st=1;RAD.spoke=1;rsq(1)};u.onend=()=>rsq(0);u.onerror=e=>{RAD.err=e&&e.error||'error';rsq(0);if(/not-allowed|failed|unavailable/.test(RAD.err)&&!u._st&&!u._bl){u._bl=1;blips(tx,who)}};setTimeout(()=>{if(RAD.u===u&&!u._st&&!u._bl&&SET.snd&&SET.vz){u._bl=1;blips(tx,who)}},1100);
  const go=()=>{try{speechSynthesis.resume();speechSynthesis.speak(u)}catch(_){}};if(speechSynthesis.speaking||speechSynthesis.pending){speechSynthesis.cancel();setTimeout(go,120)}else go()}catch(e){RAD.err=String(e)}}
var XL={"wave1": ["Escuadra, aquí Base. Tenemos movimiento hostil en el perímetro.", "Atención todos. Se acerca el primer contacto, mantengan la calma.", "Aquí Base. El radar detecta actividad enemiga. Tomen posiciones."], "waveG": ["Aquí Base. Contactos entrantes, mantengan la disciplina de fuego.", "Nueva oleada en aproximación. Ajusten sus posiciones.", "Escuadra, preparen munición. Vienen más.", "Aquí Base. Detecto otra columna enemiga.", "Atentos, escuadra. El enemigo se reagrupa."], "waveN": ["Noche cerrada. Usen bengalas y vigilen sus flancos.", "Visibilidad mínima. Disparen solo a lo que vean."], "clr": ["Sector asegurado. Revisen munición.", "Enemigo en retirada. Buen trabajo, escuadra.", "Contacto terminado. Reagrúpense en la base.", "Todo despejado por ahora. Aprovechen para recargar.", "Perímetro seguro. Atiendan a los heridos y reabastezcan."], "z^SOS": ["Aquí Base. Un equipo aliado pide ayuda urgente.", "Señal de auxilio recibida. Necesitan refuerzos ya.", "Equipo aliado rodeado. ¿Pueden ayudarlos?"], "zOBJETIVO: destruye la radio": ["Localizamos su radio. Destrúyanla para cortar los refuerzos.", "Objetivo marcado: radio enemiga. Vayan por ella."], "zRadio destruida": ["Radio enemiga fuera de servicio. Excelente.", "Comunicaciones enemigas cortadas. Buen trabajo."], "zRadio enemiga: llegan": ["Alertaron a sus refuerzos. Prepárense.", "Llegan más hostiles. Mantengan la posición."], "zRefuerzos en camino": ["Refuerzos en camino. Resistan unos segundos más.", "Ayuda en ruta. Aguanten."], "zArtillería en camino": ["Fuego de artillería en camino. Despejen el área.", "Impacto de artillería inminente. ¡Cúbranse!"], "zBombardeo naval": ["Fuego naval en camino. Aléjense de la zona.", "Los barcos abren fuego. Impacto inminente."], "zApoyo aéreo en camino|Escuadrón aéreo": ["Aviones en camino. Mantengan la señal en el objetivo.", "Escuadrón aéreo despegado. Llegan en segundos."], "zTanque aliado": ["Blindado aliado en camino a su posición.", "Tanque desplegado. Tienen cobertura."], "zCamioneta artillada en camino": ["Vehículo ligero en camino con ametralladora.", "Camioneta artillada en ruta a su posición."], "zZona perdida": ["Zona perdida. Todos a la base.", "Perdimos el sector. Reagrúpense."], "zZona asegurada": ["Zona asegurada. Gran trabajo, escuadra.", "Sector tomado. Los aliados se unen a ustedes."], "zEquipo médico": ["Médicos desplegados. Atiendan a los heridos.", "Llegó el equipo médico. Los cubrimos."], "zSuministros recibidos": ["Suministros listos. Recarguen todo.", "Munición repuesta. Sigan adelante."], "zTanque blindado": ["Blindado enemigo a la vista. Usen cohetes.", "Cuidado, tanque hostil. Busquen cobertura."], "zHelicóptero de ataque": ["Helicóptero hostil. Busquen refugio.", "Helicóptero de ataque sobre nosotros. ¡Cúbranse!"], "zJefe derrotado": ["Jefe abatido. Misión cumplida por ahora.", "Objetivo principal neutralizado. Muy bien hecho."], "zNOCHE": ["Noche cerrada. Bengalas listas.", "Poca luz. Usen las bengalas."], "lh": ["Líder, estás en rojo. Retrocede al hospital.", "Vida baja. Regresa a la base de inmediato.", "Líder herido. Necesitas atención médica."], "go": ["Líder caído. Se perdió la señal."], "sn": ["Francotirador enemigo. ¡Agáchense!", "Hay un tirador con mira. Muévanse.", "Cuidado, tirador de élite."], "md": ["Hay un médico enemigo. Háganlo caer.", "Médico hostil. Disparen primero a él."], "ad": ["Perdimos a un compañero. Sigan.", "Soldado caído. Cubran la posición.", "¡Hombre abatido! Aguanten.", "Perdimos a otro. Cuidado."], "cb": ["¡Qué puntería, líder!", "Los está limpiando, líder.", "¡Así, líder, así!", "Impecable. No los deja pasar."], "zParacaidistas en camino": ["Paracaidistas en el aire.", "Tropas aerotransportadas llegando."]},XC={"hu": ["¡Estoy herido!", "Necesito un médico.", "Me dieron, estoy herido.", "¡Médico, me dieron!", "Ayuda, voy mal."], "md": ["Aguanten, los curo.", "Médico en posición.", "Quédate cerca, te cubro.", "Voy a curarlos, agrúpense.", "Tengo vendas, acérquense."], "mg": ["¡Fuego de supresión!", "¡Cubran, tengo la ametralladora!", "Les voy a hacer bajar la cabeza.", "¡Fuego, fuego, fuego!", "Cargando cinta, cúbranme un segundo."], "sn": ["Objetivo a la vista.", "Tengo el tiro.", "Respira y dispara.", "Lo tengo en la mira.", "Un disparo, un blanco."], "sh": ["Escudo arriba, avancen detrás de mí.", "Yo aguanto el frente.", "Cúbranse tras el escudo.", "No pasan de aquí."], "tk": ["Cañón cargado.", "Tanque en posición.", "Objetivo fijado, disparando.", "Blindado listo, cúbranme los flancos."], "tr": ["Artillado listo, ametralladora caliente.", "Vamos a darles guerra.", "Cubro por la derecha.", "Voy a dar una vuelta por el flanco."], "rf": ["Contacto, abran fuego.", "Cubran el flanco.", "Los tengo en la mira.", "Recargando, cúbranme.", "Mantengan la línea.", "Contacto al frente.", "Tengo movimiento a las doce.", "Hostil a la vista, disparo.", "Me quedé sin cargador, cambio.", "Fuego, fuego.", "Los vamos a sacar de aquí.", "¡Cuidado, vienen por la izquierda!", "¡Cuidado, vienen por la derecha!"], "cl": ["Todo tranquilo por aquí.", "Silencio total. No me gusta.", "Ojos abiertos, escuadra.", "Alguien tiene agua.", "Qué quietud. Me pone nervioso.", "Revisen su munición mientras podemos.", "Mantengan la guardia.", "Se siente demasiado calmado.", "Escucho algo a lo lejos.", "Atentos, escuadra, esto no ha terminado."], "k3": ["Buen tiro.", "Uno menos.", "Cayó otro.", "Esa estuvo buena."], "rk": ["Cohete en el tubo, ¡despejen atrás!", "Voy por el blindado.", "Fuego de cohete, cuidado con la onda.", "Cargando otro cohete."]};
function rad(key,L,who,pr,cd,o){const now=performance.now()/1000;if(now-(RAD.last[key]||-99)<cd)return;if(now<RAD.until&&pr<=RAD.pr)return;RAD.last[key]=now;if(XL[key])L=L.concat(XL[key]);RAD.lt=RAD.lt||{};let t=L[Math.random()*L.length|0];if(L.length>1&&t===RAD.lt[key])t=L[(L.indexOf(t)+1+(Math.random()*(L.length-1)|0))%L.length];RAD.lt[key]=t;say(t,who||'b',pr,o)}
const RZ=[[/^SOS/,'b',['Aquí Base. Otro equipo está bajo fuego. Necesitan apoyo.','Pedido de auxilio. Un equipo aliado necesita ayuda.']],[/OBJETIVO: destruye la radio/,'b',['Radio enemiga localizada. Destrúyanla antes de que llamen refuerzos.']],[/Radio destruida/,'b',['Radio enemiga neutralizada. Buen trabajo.']],[/Radio enemiga: llegan/,'b',['Pidieron refuerzos. Prepárense para más contactos.']],[/Refuerzos en camino/,'b',['Refuerzos en camino. Aguanten la posición.']],[/Artillería en camino/,'b',['Artillería en camino. Aléjense del objetivo.']],[/Bombardeo naval/,'b',['Bombardeo naval confirmado. Despejen la zona.']],[/Apoyo aéreo en camino|Escuadrón aéreo/,'b',['Escuadrón aéreo en ruta. Marquen el objetivo.']],[/Paracaidistas en camino/,'s',['Paracaidistas desplegándose.']],[/Tanque aliado/,'b',['Tanque en camino.']],[/Camioneta artillada en camino/,'b',['Camioneta artillada en camino.']],[/Zona perdida/,'b',['Perdimos la zona. Repliéguense.']],[/Zona asegurada/,'b',['Zona asegurada. Buen trabajo, escuadra.']],[/Equipo médico/,'b',['Equipo médico en posición.']],[/Suministros recibidos/,'b',['Suministros entregados. Reabastézcanse.']],[/Tanque blindado/,'b',['Blindado pesado al frente. Concentren el fuego.']],[/Helicóptero de ataque/,'b',['Helicóptero de ataque. ¡A cubierto!']],[/Jefe derrotado/,'b',['Objetivo principal eliminado. Excelente trabajo.']],[/NOCHE/,'b',['Es de noche. Poca visibilidad, usen bengalas.']],[/Empieza a llover/,'b',["Lluvia sobre la zona. Mantengan el agarre.", "Empezó a llover. La visibilidad baja.", "Aquí Base. Tormenta sobre el sector. Cuidado."]],[/Se levanta la niebla/,'b',["Niebla espesa sobre el sector. Cuidado con las emboscadas.", "Visibilidad reducida por niebla. Manténganse juntos.", "Aquí Base. Entra niebla. No se separen."]],[/El clima se despeja/,'b',["El cielo se despeja. Visibilidad recuperada.", "Clima despejado. Vean bien a lo lejos.", "Se acabó la lluvia. Buena visibilidad."]]];
function radW(){const n=wv.n;RAD.dt=5;if(n%5==0)return;rad('wave'+(n==1?'1':n%4==3?'N':'G'),n==1?['Atención escuadra, aquí Base. Contacto enemigo en el perímetro. Mantengan la posición.','Aquí Base. Hostiles en aproximación. Prepárense.']:n%4==3?['Visibilidad casi nula. Usen bengalas, escuadra.','Es de noche. Ojos abiertos.']:['Nueva oleada. Mantengan la línea.','Más hostiles en camino.','Aquí Base. Nueva oleada. Refuercen posiciones.'],'b',2,6)}
function radC(){rad('clr',['Zona despejada. Recarguen y reagrúpense.','Buen trabajo. Tómense un respiro, escuadra.','Perímetro limpio. Atiendan a los heridos.'],'b',2,8)}
function radUpd(dt){RAD.tt-=dt;if(S!='play'||!p||!wv)return;
 if(zm!==RAD.zm){RAD.zm=zm;if(zt>0)for(const[re,w,L]of RZ)if(re.test(zm)){rad('z'+re.source,L,w,re.source.indexOf('JEFE')>=0||/Tanque blindado|Helic/.test(re.source)?4:2,10);break}}
 RAD.sc-=dt;if(RAD.sc>0)return;RAD.sc=.5;
 for(const e of E){if(e.sn&&!e.an){e.an=1;rad('sn',['¡Francotirador! Muévanse, no se queden quietos.','Tirador de élite a la vista. ¡Cuidado!'],'s',3,12)}if(e.md&&!e.an){e.an=1;rad('md',['Médico enemigo a la vista. Elimínenlo primero.'],'s',2,25)}}
 const ns=A.filter(a=>a.t<2).length;if(RAD.na!=null&&ns<RAD.na)rad('ad',['Perdimos a uno. Aliado caído.','¡Hombre herido! Aliado abatido.','Perdimos a un compañero.'],'s',3,9);RAD.na=ns;
 if(p.hp<p.mh*.3&&p.hp>0)rad('lh',['Estás herido, líder. Repliégate a la base.','Salud crítica. Vuelve al hospital de campaña.'],'b',3,28);
 if(cb>=6)rad('cb',['Buen disparo, líder.','Así se hace. Sigan así.','Excelente puntería.'],'s',1,40);else if(cb>=3)rad('cb3',XC.k3,'s',0,16);
 if(RAD.dt>0){RAD.dt-=.5;if(RAD.dt<=0){const L=E.filter(e=>!e.z);if(L.length){let x=0,y=0;for(const e of L){x+=e.x;y+=e.y}x/=L.length;y/=L.length;const d=dirN(x-p.x,y-p.y);rad('dir',['Contactos por el '+d+'.','Hostiles acercándose desde el '+d+'.','Movimiento enemigo al '+d+'.','Enemigos hacia el '+d+'.','Fuerza hostil por el '+d+'.'],'b',2,6)}}}
 RAD.ch-=.5;if(RAD.ch<=0){const nr=A.filter(a=>(a.t<3||a.t==4)&&!a.cv&&D(a,p)<520),o=nr.length?nr[Math.random()*nr.length|0]:null;
 if(E.some(e=>!e.z&&D(e,p)<560)){RAD.ch=6+Math.random()*7;if(o){const R=o.ro,L=o.hp<o.mhp*.4?XC.hu:o.t==1?XC.sh:o.t==2?XC.tk:o.t==4?XC.tr:R=='md'?XC.md:R=='mg'?XC.mg:R=='sn'?XC.sn:R=='rk'?XC.rk:XC.rf;rad('ch',L,'s',0,3,o)}}
 else{RAD.ch=16+Math.random()*14;if(o&&!E.some(e=>!e.z&&D(e,p)<900))rad('calm',XC.cl,'s',0,12,o)}}}
/* ---- ambiente y música que reacciona ---- */
var AM=null,AMi=0,AMb=0,AMt=8,AMu=0,AMboss=0;
function amStart(){if(AM||!ac||ac.state!='running')return;nbuf();const c=ac,B=mbus(),m=c.createGain();m.gain.value=0;m.connect(B.m);
 const w=c.createBufferSource();w.buffer=nbB;w.loop=true;const wf=c.createBiquadFilter();wf.type='bandpass';wf.frequency.value=380;wf.Q.value=.6;const wg=c.createGain();wg.gain.value=.2;w.connect(wf);wf.connect(wg);wg.connect(m);w.start();
 const wl=c.createOscillator(),wlg=c.createGain();wl.frequency.value=.07;wlg.gain.value=160;wl.connect(wlg);wlg.connect(wf.frequency);wl.start();
 const dr=c.createGain();dr.gain.value=.05;const df=c.createBiquadFilter();df.type='lowpass';df.frequency.value=220;df.Q.value=2;
 for(const[fq,ty,g]of[[55,'sawtooth',.5],[55.4,'sawtooth',.5],[27.5,'sine',.9],[82.4,'triangle',.25]]){const o=c.createOscillator(),og=c.createGain();o.type=ty;o.frequency.value=fq;og.gain.value=g;o.connect(og);og.connect(df);o.start()}
 const bo=c.createOscillator(),bg=c.createGain();bo.type='sawtooth';bo.frequency.value=58.27;bg.gain.value=0;bo.connect(bg);bg.connect(df);bo.start();df.connect(dr);dr.connect(m);
 const te=c.createOscillator(),tf=c.createBiquadFilter(),tg=c.createGain();te.type='sawtooth';te.frequency.value=233;tf.type='bandpass';tf.frequency.value=900;tf.Q.value=8;tg.gain.value=0;te.connect(tf);tf.connect(tg);tg.connect(m);te.start();
 const cr=c.createOscillator(),cg=c.createGain(),cm=c.createOscillator(),cmg=c.createGain(),cg2=c.createGain(),cl=c.createOscillator(),clg=c.createGain(),cO=c.createGain();cr.frequency.value=4300;cg.gain.value=.5;cm.type='square';cm.frequency.value=24;cmg.gain.value=.5;cm.connect(cmg);cmg.connect(cg.gain);cg2.gain.value=.5;cl.frequency.value=1.7;clg.gain.value=.5;cl.connect(clg);clg.connect(cg2.gain);cO.gain.value=0;cr.connect(cg);cg.connect(cg2);cg2.connect(cO);cO.connect(m);cr.start();cm.start();cl.start();
 AM={m,wg,dr,df,bg,tg,cO,h:{inp:m,v:1,e:0,nd:[]}}}
function amKick(v){const t=ac.currentTime,h=AM.h;tnL(h,t,64,38,.22,v);tnL(h,t+.19,58,36,.2,v*.7);nzL(h,t,'lowpass',160,.7,.08,v*.5,1)}
function amUpd(dt){if(!ac)return;const on=SET.snd&&SET.mus&&ac.state=='running';if(!on){if(AM)AM.m.gain.setTargetAtTime(0,ac.currentTime,.3);return}
 if(!AM){amStart();if(!AM)return}const t=ac.currentTime,pl=S=='play'&&p&&wv;
 AM.m.gain.setTargetAtTime(S=='play'?.9:S=='pause'?.25:S=='over'?.12:.4,t,.4);
 AMu-=dt;if(AMu<=0){AMu=.25;let raw=0,boss=0;if(pl){let nr=0;for(const e of E)if(!e.z&&D(e,p)<650)nr++;boss=E.some(e=>e.t>7)?1:0;raw=Math.min(1,nr/12+wv.n*.015+(p.hp<p.mh*.3?.25:0)+boss*.3)}
  AMi+=(raw-AMi)*.35;if(boss&&!AMboss){AM.m.gain.cancelScheduledValues(t);AM.m.gain.setValueAtTime(0,t);AM.m.gain.linearRampToValueAtTime(.9,t+1.6);snd(6,{x:p.x+420,y:p.y,ex:1,r:140})}AMboss=boss;
  const nt=pl&&ni>.5;AM.dr.gain.setTargetAtTime(.05+.1*AMi+boss*.12,t,.5);AM.df.frequency.setTargetAtTime(160+AMi*520+boss*260,t,.5);AM.bg.gain.setTargetAtTime(boss?.3:0,t,.4);AM.tg.gain.setTargetAtTime(AMi>.45?(AMi-.4)*.05+boss*.05:0,t,.5);AM.cO.gain.setTargetAtTime(nt&&AMi<.55?.045:0,t,1);AM.wg.gain.setTargetAtTime(.2-.1*AMi,t,.6)}
 if(!pl)return;AMb-=dt;if(AMb<=0&&AMi>.14){AMb=60/(52+AMi*58+AMboss*24);amKick(.1+.28*AMi)}
 AMt-=dt;if(AMt<=0){AMt=14+Math.random()*18;snd(6,{x:p.x+(Math.random()<.5?-1:1)*(1100+Math.random()*500),y:p.y+(Math.random()-.5)*800,ex:1,r:50})}}
function mfl(x,y,a,s){if(MF.length<24)MF.push({x,y,a,s,l:.07,r:Math.random()})}
function cas(o,a,c,sz,own){if(CS.length>70)CS.shift();const ca=a+1.57+(Math.random()-.5)*.7,v=70+Math.random()*80;CS.push({x:o.x+Math.cos(a)*10,y:o.y+Math.sin(a)*10,vx:Math.cos(ca)*v,vy:Math.sin(ca)*v,z:10,vz:140+Math.random()*80,r:Math.random()*6.3,vr:(Math.random()-.5)*30,c,s:sz,g:0,l:7,b:0,own})}
function imp(b,ty,e){const a=Math.atan2(-b.vy,-b.vx),m=ty=='m';if(Q.length<[300,450,650][SET.q]){for(let i=0;i<(m?6:4);i++){const aa=a+(Math.random()-.5)*(m?1.9:1.4),v=(m?160:90)+Math.random()*(m?260:120);Q.push({x:b.x,y:b.y,vx:Math.cos(aa)*v,vy:Math.sin(aa)*v,l:.18+Math.random()*.2,c:m?'#ffe9a8':'#fff0c8',st:1})}
  if(SET.q)for(let i=0;i<(m?1:2);i++)puff(b.x,b.y,m?'#9aa4a8':'#8a7d66',3+Math.random()*2,.3+Math.random()*.2,Math.cos(a)*30+(Math.random()-.5)*40,Math.sin(a)*30+(Math.random()-.5)*40,2.4,.5)}
 sfx(m?(e&&e.t==3?'clang':'ric'):'hit',b,b.e?0:1)}
const K={},TT={};let M=[],MZ=[],BD=[],SC=[],CW=[],FL=[],SM=[],PR=[],ni=0;
const KGR=[['Mover',[['WASD','mover'],['Espacio','esquivar'],['Z','subir/bajar camioneta']]],['Armas',[['Ratón','apuntar y disparar'],['1-4 / rueda','las 4 armas de tu equipo (Armería)'],['R','recargar'],['Q','autoapuntado'],['E','granada'],['T','bengala']]],['Apoyos',[['F','aviones (zona SOS o donde apuntas)'],['G','artillería (22 s)'],['B','paracaidistas (45 s)'],['H','radio de la base (dentro)']]],['Escuadra',[['C','orden: seguir / atacar / defender'],['V','puesto (o clic en el minimapa)'],['X','borrar puestos'],['Y','estrategia']]],['Sistema',[['P','pausa'],['K','ver / ocultar controles']]]];
const khh=KGR.map(([n,L])=>'<div class="g"><b>'+n+'</b>'+L.map(([k,t])=>'<span><kbd>'+k+'</kbd>'+t+'</span>').join('')+'</div>').join('');
kgl.innerHTML=khh;kpl.innerHTML=khh;
addEventListener('keydown',e=>{K[e.code]=1;if(e.code=='KeyK')kpl.classList.toggle('o');if(e.code=='Escape'||e.code=='KeyP')pause();if(S=='play'&&!(typeof MP!='undefined'&&MP.role=='host'&&MP.localPaused)){if(e.code=='KeyR')reload();if(e.code=='KeyQ')aa=!aa;if(e.code=='KeyF')air();if(e.code=='KeyG')mortar();if(e.code=='KeyE')gren();if(e.code=='KeyT')flare();if(e.code=='KeyB')para();if(e.code=='KeyJ'&&typeof miniCars=='function')miniCars();if(e.code=='KeyZ')drive();if(e.code=='Digit4')sw(LO(3));if(e.code=='KeyC')ord();if(e.code=='KeyV')post();if(e.code=='KeyX')clr();if(e.code=='Digit1')sw(LO(0));if(e.code=='Digit2')sw(LO(1));if(e.code=='Digit3')sw(LO(2));if(e.code=='Space')dash()}if(e.code=='Space'||e.code.startsWith('Arrow'))e.preventDefault()});
addEventListener('keyup',e=>K[e.code]=0);
addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY});
cv.addEventListener('mousedown',e=>{if(S=='play'&&(upPick(e.clientX,e.clientY)||hoPick(e.clientX,e.clientY)||stPick(e.clientX,e.clientY)))return;if(S=='play'&&mmPost(e.clientX,e.clientY))return;md=1;mx=e.clientX;my=e.clientY});
addEventListener('mouseup',()=>md=0);
addEventListener('wheel',e=>{if(S=='play')swn(e.deltaY>0?1:-1)});
addEventListener('blur',()=>{if(S=='play')pause()});
addEventListener('touchstart',()=>{touch=1;document.body.classList.add('t')},{passive:true});
cv.addEventListener('touchstart',e=>{e.preventDefault();for(const t of e.changedTouches)if(!(S=='play'&&(upPick(t.clientX,t.clientY)||hoPick(t.clientX,t.clientY)||stPick(t.clientX,t.clientY)||mmPost(t.clientX,t.clientY)))){const sd=t.clientX<W/2?'m':'a',pc=sd=='m'?PM():PA(),sn=Math.hypot(t.clientX-pc.x,t.clientY-pc.y)<130;TT[t.identifier]={s:sd,x0:sn?pc.x:t.clientX,y0:sn?pc.y:t.clientY,x:t.clientX,y:t.clientY}}},{passive:false});
cv.addEventListener('touchmove',e=>{e.preventDefault();for(const t of e.changedTouches){const o=TT[t.identifier];if(o){o.x=t.clientX;o.y=t.clientY}}},{passive:false});
const te=e=>{for(const t of e.changedTouches)delete TT[t.identifier]};
cv.addEventListener('touchend',te);cv.addEventListener('touchcancel',te);
b1.onclick=()=>S=='play'&&swn(1);b2.onclick=()=>S=='play'&&reload();b3.onclick=()=>S=='play'&&dash();b5.onclick=()=>ord();b7.onclick=()=>mortar();b8.onclick=()=>gren();b10.onclick=()=>para();b21.onclick=()=>drive();b22.onclick=()=>flare();bP.onclick=()=>pause();
function fsReq(){const d=document,e=d.documentElement;if(d.fullscreenElement||d.webkitFullscreenElement)return;const r=e.requestFullscreen||e.webkitRequestFullscreen;if(r){const q=r.call(e,{navigationUI:'hide'});if(q&&q.then)q.then(()=>{try{screen.orientation.lock('landscape').catch(()=>{})}catch(x){}}).catch(()=>{})}}
if(matchMedia('(pointer:coarse)').matches){addEventListener('touchend',fsReq,{once:true});go.addEventListener('click',fsReq)}
let UPC=null;
const UP=[['💥','Daño +15%',()=>p.dm*=1.15],['⚡','Cadencia +12%',()=>p.rf=Math.max(.45,p.rf*.88)],['🔄','Recarga -15%',()=>p.rr=Math.max(.45,p.rr*.85)],['👟','Velocidad +8%',()=>p.sv=Math.min(1.5,p.sv*1.08)],['🛡️','Blindaje -12%',()=>p.ar=Math.max(.4,p.ar*.88)],['❤️','Vida máx +20',()=>{p.mh+=20;p.hp+=20}],['💣','Granadas +2',()=>p.gn=Math.min(7,p.gn+2)],['🪖','Aliado extra',()=>{if(A.length<ACAP()){const a=Math.random()*6.3;mkA(0,cl(p.x+Math.cos(a)*120,20,WW-20),cl(p.y+Math.sin(a)*120,20,WH-20))}}],['✚','Curación total',()=>p.hp=p.mh]];
function newUp(){const P=UP.map((u,i)=>i).filter(i=>!(i==7&&A.length>=ACAP()));for(let i=P.length-1;i>0;i--){const j=Math.random()*(i+1)|0;[P[i],P[j]]=[P[j],P[i]]}UPC=P.slice(0,3)}
const upR=i=>({x:W/2-113+i*78,y:H-172,w:70,h:62});
function upApply(i){if(!UPC)return;const u=UP[UPC[i]];u[2]();zm='Mejora: '+u[1];zt=2.5;spark(p.x,p.y,'#5ee6a8',16,160);beep(980,.12,'triangle');UPC=null}
function upPick(x,y){if(!UPC)return 0;for(let i=0;i<3;i++){const r=upR(i);if(x>=r.x&&x<=r.x+r.w&&y>=r.y&&y<=r.y+r.h){upApply(i);return 1}}return 0}
addEventListener('keydown',e=>{if(S=='play'&&UPC){const i=['Digit7','Digit8','Digit9'].indexOf(e.code);if(i>=0)upApply(i)}});
const ST={b:0,s:0,h:0,r:0},SRC={b:'#ff4d6d',s:'#ffd23f',h:'#5ee6a8',r:'#ff9a3d'},SL=['Atacar al jefe','Cazar francotir./médicos','Defender hospital','Atacar la radio'];let SO=0;
const stR=i=>({y:PYo+34+i*32}),elig=()=>A.filter(a=>a.t!=3&&!a.rd&&!a.g).length;
function asg(){let i=0;for(const a of A)a.sr=a.g?'h':0;for(const[k,n]of[['b',ST.b],['s',ST.s],['h',ST.h],['r',ST.r]])for(let j=0;j<n&&i<A.length;){const a=A[i++];if(a.t==3||a.rd||a.g)continue;a.sr=k;j++}}
function stPick(x,y){if(!SO)return 0;if(x<PXo||x>PXo+290||y<PYo||y>PYo+182)return 0;for(let i=0;i<4;i++){const r=stR(i),k='bshr'[i];if(y>=r.y&&y<=r.y+24){if(x>=PXo+186&&x<=PXo+212)ST[k]=Math.max(0,ST[k]-1);else if(x>=PXo+250&&x<=PXo+276&&ST.b+ST.s+ST.h+ST.r<elig())ST[k]++;beep(500,.04,'triangle')}}return 1}
addEventListener('keydown',e=>{if(e.code=='KeyY'&&S=='play'){SO=!SO;if(SO)HO=0}});
let RD=null;
function mkRD(){let x,y;for(let i=0;i<20;i++){x=300+Math.random()*(WW-600);y=300+Math.random()*(WH-600);if(Math.hypot(x-p.x,y-p.y)>1100)break}RD={x,y,hp:300,mhp:300,t:75};zm='OBJETIVO: destruye la radio enemiga (75 s)';zt=5}
let HO=0,HCT=0,HLK=0,HL=[],AVk='',AMk='',RG=1000,RGi=0;const PXo=160,PYo=12;const PM=()=>({x:Math.max(85,W*.11),y:H-Math.max(85,H*.25)}),PA=()=>({x:W-Math.max(85,W*.11),y:H-Math.max(85,H*.25)});const HC={r:0,s:0,e:0,t:0,c:0,n:0,m:0},inBase=o=>Math.abs(o.x-HQ.x)<340&&Math.abs(o.y-HQ.y)<170,bm=()=>.25+.55*(1-Math.min(5,A.filter(a=>a.g).length)/5),GC=a=>({x:HQ.x+((a.gi%3)-1)*150,y:HQ.y+(a.gi<3?-1:1)*140});
function gar(){const G=A.filter(a=>a.g);for(let i=0;i<5;i++)if(!G.some(a=>a.gi==i)&&A.length<ACAP()){const a=mkA(0,HQ.x+(i-2)*30,HQ.y);a.g=1;a.gi=i}}
function togH(){if(S!='play')return;if(!inBase(p)){zm='Entra a la base para usar la radio';zt=2;return}HO=!HO;if(HO){SO=0;HCT=HLK>0?0:4;if(HCT>0)beep(300,.15,'square',.04)}}
const HOP=[['Fusileros (4)','r',8],['Suministros','s',12],['Apoyo aéreo','a',0],['Escudos (2)','e',10],['Tanque aliado','t',15],['Camioneta artillada','c',12],['Bombardeo naval','n',15],['Equipo médico','m',15]],hoXY=i=>[PXo+8+(i%2)*152,PYo+34+(i>>1)*40];
function hot(){let b=null,bn=0;for(const e of E){if(Math.hypot(e.x-p.x,e.y-p.y)>1300)continue;let n=0;for(const f of E)if(Math.hypot(f.x-e.x,f.y-e.y)<240)n++;if(n>bn){bn=n;b=e}}return b?[cl(b.x,50,WW-50),cl(b.y,50,WH-50)]:[cl(p.x+Math.cos(p.a)*450,50,WW-50),cl(p.y+Math.sin(p.a)*450,50,WH-50)]}
function drop(k,n,t0,big){const a=Math.random()*6.3,tx=cl(p.x+Math.cos(a)*170,40,WW-40),ty=cl(p.y+Math.sin(a)*170,40,WH-40);for(let j=0;j<n;j++)RS.push({k,t:t0+j*.45,x:cl(tx+(j%2?18:-18),20,WW-20),y:cl(ty+(j>1?18:-14),20,WH-20)});HL.push({tx,ty,a:Math.random()*6.3,t:0,dr:t0+(n-1)*.45,b:big,sm:0})}
function hpos(h){const t=h.t;let o=-70;if(t<3){const u=1-t/3;o-=1400*u*u}else if(t>6.5){const u=(t-6.5)/3;o+=1400*u*u}return[h.tx+Math.cos(h.a)*o,h.ty+Math.sin(h.a)*o]}
function ah(h){const[x,y]=hpos(h),sc=h.b?1.35:1;if(h.t>3.1&&h.t<h.dr+.9){cx.strokeStyle='rgba(230,225,205,.8)';cx.lineWidth=2;for(const s of[-14,14]){cx.beginPath();cx.moveTo(x+Math.cos(h.a+1.57)*s,y+Math.sin(h.a+1.57)*s);cx.lineTo(h.tx+Math.cos(h.a+1.57)*s*.6,h.ty+Math.sin(h.a+1.57)*s*.6);cx.stroke()}}
 for(const[o,c]of(SET.q?[[24,'rgba(0,0,0,.22)'],[0,0]]:[[0,0]])){cx.save();cx.translate(x+o,y+o*1.4);cx.rotate(h.a);cx.scale(sc,sc);cx.fillStyle=c||'#2d4a3e';cx.fillRect(-60,-3,46,6);cx.fillRect(-66,-8,6,16);cx.fillStyle=c||'#3b6b57';cx.beginPath();cx.ellipse(0,0,34,18,0,0,7);cx.fill();if(!c){cx.fillStyle='#bfe9ff';cx.beginPath();cx.ellipse(17,0,9,10,0,0,7);cx.fill()}cx.globalAlpha=.5;cx.fillStyle=c||'#dfe6e0';cx.rotate(h.t*40);cx.fillRect(-52,-2,104,4);cx.fillRect(-2,-52,4,104);cx.restore()}cx.globalAlpha=1}
function padD(t,c,ty){const X=t?t.x0:c.x,Y=t?t.y0:c.y,dx=t?t.x-t.x0:0,dy=t?t.y-t.y0:0,d=Math.min(50,Math.hypot(dx,dy)),a=Math.atan2(dy,dx),kx=X+Math.cos(a)*d,ky=Y+Math.sin(a)*d;cx.save();cx.globalAlpha=t?1:.85;
 const g=cx.createRadialGradient(X,Y,10,X,Y,58);g.addColorStop(0,'rgba(16,40,64,.3)');g.addColorStop(1,'rgba(10,26,44,.6)');cx.fillStyle=g;cx.beginPath();cx.arc(X,Y,58,0,7);cx.fill();
 cx.strokeStyle='#2a8fd0';cx.lineWidth=3;cx.beginPath();cx.arc(X,Y,58,0,7);cx.stroke();
 cx.strokeStyle='rgba(120,190,240,.35)';cx.lineWidth=1.5;cx.beginPath();cx.arc(X,Y,44,0,7);cx.stroke();
 if(!ty){cx.fillStyle='rgba(150,205,245,.85)';for(let i=0;i<4;i++){const q=i*1.5708;cx.save();cx.translate(X+Math.cos(q)*47,Y+Math.sin(q)*47);cx.rotate(q);cx.beginPath();cx.moveTo(6,0);cx.lineTo(-4,-6);cx.lineTo(-4,6);cx.fill();cx.restore()}}
 else{cx.strokeStyle='rgba(150,205,245,.85)';cx.lineWidth=2;cx.beginPath();cx.arc(X,Y,16,0,7);cx.moveTo(X-32,Y);cx.lineTo(X-10,Y);cx.moveTo(X+10,Y);cx.lineTo(X+32,Y);cx.moveTo(X,Y-32);cx.lineTo(X,Y-10);cx.moveTo(X,Y+10);cx.lineTo(X,Y+32);cx.stroke()}
 if(!(ty&&!t)){const kg=cx.createRadialGradient(kx-6,ky-6,2,kx,ky,24);kg.addColorStop(0,'#5aa9e6');kg.addColorStop(1,'#1d4f86');cx.fillStyle=kg;cx.beginPath();cx.arc(kx,ky,22,0,7);cx.fill();cx.strokeStyle='#8cc7f5';cx.lineWidth=2.5;cx.stroke()}cx.restore()}
function hoAct(i){const k=HOP[i][1],c=HOP[i][2],lf=18-A.length,w=k=='a'?p.ac:HC[k];
 if(w>0){zm=HOP[i][0]+' en espera: '+Math.ceil(w)+' s';return}
 if(k=='a'){air(1);return}
 if(k=='s'){p.res[1]+=10;p.res[2]+=40,ammoX(40);p.res[3]+=1;p.gn=Math.min(7,p.gn+2);p.hp=Math.min(p.mh,p.hp+30);zm='Suministros recibidos'}
 else if(k=='m'){for(const a of A)if(a.t!=3&&a.hp<1e8)a.hp=a.mhp;p.hp=Math.min(p.mh,p.hp+50);zm='Equipo médico: aliados curados'}
 else if(k=='n'){const[tx,ty]=hot();for(let j=0;j<26;j++){const a=Math.random()*6.3,d=Math.sqrt(Math.random())*240;M.push({x:tx+Math.cos(a)*d,y:ty+Math.sin(a)*d,t:3+j*.14+Math.random()*.1})}MZ.push({x:tx,y:ty,l:6});zm='Bombardeo naval: cae en 3 s, aléjate de la zona';beep(200,.6,'sawtooth',.06)}
 else{if(lf<1){zm='Escuadra completa';return}
  if(k=='r'){drop(0,Math.min(4,lf),3.2,0);zm='Refuerzos en camino'}
  else if(k=='e'){drop(1,Math.min(2,lf),3.2,0);zm='Escudos en camino'}
  else if(k=='t'){drop(2,1,4,1);zm='Tanque aliado en camino'}
  else{drop(4,1,4,1);zm='Camioneta artillada en camino'}}
 zm='Base Naval: '+zm;HC[k]=c}
function hoPick(x,y){if(!HO)return 0;if(x<PXo||x>PXo+314||y<PYo||y>PYo+198)return 0;if(y<PYo+34){HO=0;return 1}if(HCT>0)return 1;for(let i=0;i<8;i++){const[X,Y]=hoXY(i);if(x>=X&&x<=X+146&&y>=Y&&y<=Y+36){hoAct(i);zt=2.5;beep(560,.06,'triangle')}}return 1}
addEventListener('keydown',e=>{if(e.code=='KeyH')togH()});b13.onclick=togH;hp.onclick=()=>hs.classList.toggle('o');stg.onclick=()=>document.getElementById('st').classList.toggle('o');b16.onclick=()=>callTap();b20.onclick=()=>{if(S=='play'){SO=!SO;if(SO)HO=0}};
const SM3=[[0,0,1],[.4,-.2,.7],[-.4,.3,.7]],SM1=[[0,0,1]],DP0={x:WW/2,y:WH/2},TXT=[['Mueve con el pulgar izquierdo','Apunta y dispara con el pulgar derecho','Arriba a la derecha: arma, recarga, esquiva y granada','Tus aliados luchan solos. Al terminar cada oleada elige una mejora con el +','Toca Más ▸ para apoyos y la radio de la base'],['Mueve con WASD','Apunta con el ratón y dispara con clic','Recarga con R · cambia de arma con 1-4 o la rueda','Tus aliados luchan solos. Al terminar cada oleada elige una mejora con el +','Tu base (cerco verde) te protege · H radio · Y estrategia · F apoyo aéreo']];let TPi=0,TPt=0;
const sv=()=>{try{localStorage.zcs=JSON.stringify(SET)}catch(e){}};
function note(k,t){if(typeof CM!='undefined'&&CM&&/oleada/i.test(arguments[1]||''))return;if(!(SET.nt>>k&1)){SET.nt|=1<<k;sv();zm=t;zt=4}}
function wsTest(){aU();const nm=[['pistola',0],['escopeta',1],['fusil',2],['ametralladora',4],['subfusil',5],['francotirador',2,{sn:1}],['enemigo',3]];
 if(typeof SFX=='undefined'){ws.textContent='✘ Este archivo NO trae los sonidos reales (falta la carpeta audio/)';return}
 if(!SET.snd){ws.textContent='✘ El sonido está desactivado (botón "Sonido: no")';return}
 let tries=0;const go=()=>{if(!ac||!SMP.pistola){if(++tries<30){ws.textContent='Cargando sonidos…';setTimeout(go,150);return}ws.textContent='✘ Los sonidos no se pudieron cargar en este navegador';return}
  const n=Object.keys(SMP).filter(k=>Array.isArray(SMP[k])).reduce((s,k)=>s+SMP[k].length,0);let i=0;
  const nx=()=>{if(i>=nm.length){ws.textContent='✔ '+n+' sonidos reales cargados';return}const[g,k,ex]=nm[i++];ws.textContent='🔊 '+g+' ('+SMP[g].length+' variantes)';let j=0;const sh=()=>{if(j++<3){snd(k,Object.assign({x:(typeof p!='undefined'&&p?p.x:0),y:(typeof p!='undefined'&&p?p.y:0),ex:1},ex||{}));setTimeout(sh,g=='ametralladora'||g=='subfusil'?160:480)}else setTimeout(nx,900)};sh()};nx()};go()}
function stl(){s6.textContent='Dificultad: '+['Fácil','Normal','Difícil'][SET.dif];s1.textContent='Sonido: '+(SET.snd?'sí':'no');s2.textContent='Calidad: '+['baja','media','alta'][SET.q];s3.textContent='Vibración: '+(SET.vib?'sí':'no');s4.textContent='Tutorial: '+(SET.tut?'sí':'no');s5.textContent='FPS: '+(SET.fps?'sí':'no');s7.textContent='Voces: '+(SET.vz?'sí':'no');s8.textContent='Música: '+(SET.mus?'sí':'no')}
s1.onclick=()=>{SET.snd=+!SET.snd;sv();stl()};s2.onclick=()=>{SET.q=(SET.q+2)%3;sv();stl();rs()};s3.onclick=()=>{SET.vib=+!SET.vib;sv();stl()};s4.onclick=()=>{SET.tut=+!SET.tut;TPi=0;TPt=0;if(SET.tut)SET.nt=0;sv();stl()};s6.onclick=()=>{SET.dif=(SET.dif+1)%3;sv();stl()};s5.onclick=()=>{SET.fps=+!SET.fps;sv();stl()};s7.onclick=()=>{SET.vz=+!SET.vz;sv();stl();if(!SET.vz)try{speechSynthesis.cancel()}catch(_){}};s8.onclick=()=>{SET.mus=+!SET.mus;sv();stl()};s10.onclick=wsTest;s9.onclick=()=>{aU();const v=pickVoice('b');RAD.spoke=0;RAD.clip=0;RAD.err='';vs.textContent='Probando…';say('Aquí Base. Prueba de radio. ¿Me escuchan, escuadra?','b',9);setTimeout(()=>{vs.textContent=!('speechSynthesis'in window)?'Este navegador no tiene voces.':RAD.err?'La voz fue bloqueada ('+RAD.err+'). Toca la pantalla e inténtalo otra vez.':RAD.clip?'Voz de radio incluida en el juego: activa.':RAD.spoke?'Voz activa: '+(v?v.name:'predeterminada')+(SET.vz?'':' (Voces está en «no»)'):v?'La voz '+v.name+' no arrancó. Sube el volumen multimedia y vuelve a probar.':'No hay voces en español instaladas en este dispositivo.'},2200)};stl();
function show(t,m,b){if(typeof campHide=='function')campHide();ov.className='';AVk='';CLk='';b16.style.visibility='hidden';tt.textContent=t;ms.textContent=m;go.textContent=b;ov.style.display='flex';go.focus()}
go.onclick=()=>{if(S=='pause'){ov.style.display='none';S='play';if(CM&&CP)CP.pk=''}else if(CL&&S=='over'){clsStart()}else if(CM&&S=='over'){campStart()}else{if(CM||WW!=5200){CM=0;CL=0;CLS=null;CP=null;genWorld(5200,3400,7,1);TKc.width=Math.ceil(WW/4);TKc.height=Math.ceil(WH/4);MC=null;rs();campHide()}reset();ov.style.display='none'}};
function pause(){if(typeof MP!='undefined'&&(MP.role=='host'||MP.role=='guest')&&MP.conn&&MP.conn.open&&S=='play'){MP.localPaused=!MP.localPaused;if(MP.conn)MP.conn.send({type:'pause',paused:MP.localPaused});if(MP.localPaused)show('Pausa local','Tu compañero sigue jugando.','Reanudar');else ov.style.display='none';return}if(S=='play'){S='pause';try{speechSynthesis.cancel()}catch(_){}try{RAD.src&&RAD.src.stop()}catch(_){}rsq0();show('Pausa','Tu partida sigue donde la dejaste.','Reanudar')}else if(S=='pause')go.onclick()}
function mkA(t,x,y){const T=AT[t];const o={x,y,t,hp:T.hp,mhp:T.hp,a:0,ta:0,cd:1+Math.random(),bc:0,bt:0,bb:3,rx:x,ry:y,rt:0,f:0,sp:T.sp,r:T.r,rs:Math.random()<.5?1:-1,ro:t==0?['md','mg','sn',''][mkN++%4]:''};A.push(o);return o}
function reset(){p={x:WW/2,y:WH/2,r:13,a:0,hp:100,w:LO(0),mag:WP.map(w=>w.m),res:WP.map(w=>w.res0),gn:3,gc:0,fc:0,pc:0,dv:null,rl:0,rt:1,rw:0,cd:0,iv:0,dt:0,dc:0,ac:0,mc:0,mh:100,dm:1,rf:1,rr:1,sv:1,ak:15,ar:1,dx:0,dy:0,mx:0,my:0};MF=[];CS=[];RAD.na=null;RAD.dt=0;RAD.ch=15;E=[];B=[];Q=[];U=[];X=[];A=[];RS=[];AS=[];Z=[];M=[];MZ=[];BD=[];SC=[];CW=[];FL=[];SM=[];PR=[];ni=0;TKx.clearRect(0,0,TKc.width,TKc.height);RN=[];WXn=-1;WXt=0;WXr=0;WXf=0;zt=0;hq=30;od=0;AMB={st:'off',tr:[]};AMBon=0;HF=-9;HM=[];PS=[];dp={x:WW/2,y:WH/2};UPC=null;SLO=0;TPi=0;TPt=0;CD=3.6;CDn=-1;mkFS();ST.b=ST.s=ST.h=ST.r=0;SO=0;RD=null;for(const k in HC)HC[k]=0;HCT=0;HLK=0;HO=0;HL=[];AVk='';CLk='';AMk='';FPSgr=4;FPSlow=0;callReset();b16.style.visibility='hidden';
 mkA(0,p.x-80,p.y+60);mkA(0,p.x+80,p.y+60);mkA(1,p.x,p.y+110);mkA(2,p.x-150,p.y+130);mkA(3,p.x,p.y-200);mkA(4,p.x+150,p.y+130);
 cam.x=cl(p.x-W/2,0,Math.max(0,WW-W));cam.y=cl(p.y-H/2,0,Math.max(0,WH-H));
 wv={n:0,left:0,t:0,brk:.6,msg:0};sc=0;cb=0;ct=0;sh=0;HC.r=HC.s=0;HO=0;gar();S='play'}
function air(au){if(S!='play'||p.ac>0)return;au=au===1;let tx,ty,sm=0,z=null;
 if(Z.length){const ne=q=>E.filter(e=>e.z===q).length;
  // Durante un SOS, F siempre apoya al equipo que pidió ayuda; no desplaza al jugador.
  for(const q of Z)if(!q.done&&(!z||ne(q)>ne(z)))z=q}
 if(z){tx=z.x;ty=z.y;sm=1;zm='Escuadrón aéreo rumbo a la zona SOS'}else{if(au)[tx,ty]=hot();else{tx=cl(touch?p.x+Math.cos(p.a)*450:mx+cam.x,50,WW-50);ty=cl(touch?p.y+Math.sin(p.a)*450:my+cam.y,50,WH-50)}zm='Apoyo aéreo en camino'}
 const a=Math.atan2(ty-p.y,tx-p.x);
 for(const o of sm?[-90,90]:[0])AS.push({x:tx-Math.cos(a)*1500-Math.sin(a)*o,y:ty-Math.sin(a)*1500+Math.cos(a)*o,a,tx:tx-Math.sin(a)*o,ty:ty+Math.cos(a)*o,bd:0,l:4.9,sm});
 p.ac=p.ak;zt=3;beep(440,.4,'sawtooth',.06)}
function mortar(){if(S!='play'||p.mc>0)return;
 const tx=cl(touch?p.x+Math.cos(p.a)*450:mx+cam.x,50,WW-50),ty=cl(touch?p.y+Math.sin(p.a)*450:my+cam.y,50,WH-50);
 for(let i=0;i<14;i++){const a=Math.random()*6.3,d=Math.sqrt(Math.random())*190;M.push({x:tx+Math.cos(a)*d,y:ty+Math.sin(a)*d,t:1.4+i*.18+Math.random()*.1})}
 MZ.push({x:tx,y:ty,l:4});p.mc=22;zm='Artillería en camino: cae en 1,5 s';zt=2.5;beep(300,.5,'sawtooth',.05)}
function aim(d){return[cl(touch?p.x+Math.cos(p.a)*d:mx+cam.x,30,WW-30),cl(touch?p.y+Math.sin(p.a)*d:my+cam.y,30,WH-30)]}
function gren(){if(S!='play'||p.gn<1||p.gc>0)return;const[tx,ty]=aim(320),dx=tx-p.x,dy=ty-p.y,d=Math.min(460,Math.hypot(dx,dy)),a=Math.atan2(dy,dx),v=d/.473;p.gn--;p.gc=.8;B.push({x:p.x,y:p.y,vx:Math.cos(a)*v,vy:Math.sin(a)*v,l:1.2,e:0,d:32,sp:95,k:8,gr:1});sfx('throw')}
function flare(){if(S!='play'||p.fc>0)return;const[tx,ty]=aim(400);FL.push({x:tx,y:ty,l:16,t:.5});p.fc=6;zm='Bengala lanzada';zt=1.5;beep(900,.25,'sine',.05)}
function para(){if(S!='play'||p.pc>0)return;if(A.length>=ACAP()){zm='Escuadra completa';zt=2;return}const[tx,ty]=aim(300);for(let i=0;i<4;i++){const a=i*1.57+.5;PR.push({x:tx+Math.cos(a)*40,y:ty+Math.sin(a)*40,t:2.5+i*.15})}p.pc=45;zm='Paracaidistas en camino';zt=2.5;beep(200,.4,'sawtooth',.05)}
function drive(){if(S!='play')return;if(p.dv){const T=p.dv;p.dv=null;p.x=T.x+34;p.y=T.y;zm='Bajaste de la camioneta';zt=2;return}
 const T=A.filter(a=>a.t==4&&!a.z).sort((u,v)=>D(u,p)-D(v,p))[0];if(!T||D(T,p)>140){zm='Acércate a una camioneta aliada y pulsa Z';zt=2.5;return}
 p.dv=T;A.filter(a=>a.t<2&&!a.z&&!a.rd&&!a.pt&&D(a,T)<600).sort((u,v)=>D(u,T)-D(v,T)).slice(0,3).forEach((a,i)=>{a.rd=T;a.ri=i-1});zm='Conduces la camioneta: Z para bajar';zt=2.5;beep(150,.2,'sawtooth',.05)}
function post(wx,wy){if(S!='play')return;if(PS.length>=5){zm='Máximo 5 puestos (X los borra)';zt=2;return}
 const q={x:cl(wx!=null?wx:touch?p.x:mx+cam.x,40,WW-40),y:cl(wy!=null?wy:touch?p.y:my+cam.y,40,WH-40)},L=A.filter(a=>a.t!=3&&!a.z&&!a.pt).sort((u,v)=>D(u,q)-D(v,q)).slice(0,2);
 if(!L.length){zm='No quedan aliados libres para un puesto';zt=2;return}
 PS.push(q);L.forEach(a=>a.pt=q);zm='Puesto '+PS.length+' asignado ('+L.length+' aliados)';zt=2;beep(520,.08,'triangle')}
function clr(){if(S!='play'||!PS.length)return;PS=[];A.forEach(a=>a.pt=null);zm='Puestos borrados: la escuadra vuelve a la orden general';zt=2.5;beep(380,.08,'triangle')}
const MM=()=>{const w=Math.round(Math.max(130,Math.min(200,W*.2))),h=Math.round(w*WH/WW);return{w,h,x:SAI.l,y:SAI.t}};
function mmBase(m){const d=RSd||1;MCk=m.w+'x'+m.h+'x'+d;if(!MC)MC=document.createElement('canvas');MC.width=Math.ceil(m.w*d);MC.height=Math.ceil(m.h*d);const g=MC.getContext('2d');g.setTransform(d,0,0,d,0,0);
 const bg=g.createLinearGradient(0,0,0,m.h);bg.addColorStop(0,'#17323f');bg.addColorStop(1,'#0b1822');g.fillStyle=bg;g.fillRect(0,0,m.w,m.h);
 g.strokeStyle='rgba(42,143,208,.22)';g.lineWidth=1;g.beginPath();for(let i=1;i<6;i++){g.moveTo(m.w*i/6,0);g.lineTo(m.w*i/6,m.h)}for(let i=1;i<4;i++){g.moveTo(0,m.h*i/4);g.lineTo(m.w,m.h*i/4)}g.stroke();
 g.setTransform(d*m.w/WW,0,0,d*m.h/WH,0,0);g.fillStyle='rgba(0,0,0,.2)';for(const c of CR){g.beginPath();g.arc(c.x,c.y,c.r*1.2,0,7);g.fill()}
 g.fillStyle='#8f7a55';for(const t of TR)g.fillRect(t.x-14,t.y-14,t.w+28,t.h+28);g.fillStyle='#a3aaad';for(const r of RU)g.fillRect(r.x,r.y,r.w,r.h)}
function mmPost(x,y){const m=MM();if(x<m.x||x>m.x+m.w||y<m.y||y>m.y+m.h)return 0;if(AMB.st=='pick'){ambPick((x-m.x)/m.w*WW,(y-m.y)/m.h*WH);return 1}post(cl((x-m.x)/m.w*WW,40,WW-40),cl((y-m.y)/m.h*WH,40,WH-40));return 1}
function ord(){if(S!='play')return;if(AMB.st=='approach'||AMB.st=='ready'||AMB.st=='ring'){zm='Emboscada en curso';zt=2;return}od=(od+1)%(CM?4:3);if(od==2)dp={x:p.x,y:p.y};if(od==3&&!ambStart())od=0;if(od!=3)AMB.st='off';if(od!=3)zm='Escuadra: '+['seguir','atacar','defender aquí'][od];zt=2.5;beep(600,.08,'triangle')}
function sw(i){if(p.w!=i){p.w=i;p.rl=0;beep(500,.04,'triangle')}}
function reload(){const w=WP[p.w];if(p.rl>0||p.mag[p.w]>=w.m||p.res[p.w]<=0)return;p.rl=p.rt=w.rt*p.rr;p.rw=p.w;sfx('rl',null,WP[p.w].rs)}
function dash(){if(p.dc>0||p.dv)return;const l=Math.hypot(p.mx,p.my);p.dx=l?p.mx/l:Math.cos(p.a);p.dy=l?p.my/l:Math.sin(p.a);p.dt=.16;p.dc=1.1;p.iv=.2;sfx('dash')}
function shoot(){const w=WP[p.w];if(p.rl>0||p.cd>0)return;if(p.mag[p.w]<=0){if(p.res[p.w]<=0)sfx('empty');reload();return}sh=Math.max(sh,p.w==3?2.4:.7);
 p.mag[p.w]--;p.fired=1;p.cd=w.r*p.rf;
 for(let i=0;i<w.pel;i++){const a=p.a+(Math.random()-.5)*w.sp;B.push({x:p.x+Math.cos(p.a)*28,y:p.y+Math.sin(p.a)*28,vx:Math.cos(a)*w.v,vy:Math.sin(a)*w.v,l:w.life,e:0,d:w.d*p.dm,k:w.rk?6:p.w,sp:w.rk?110:0})}
 sh=Math.max(sh,w.pel>1?7:2.5);snd(w.rk?6:w.sk?w.sk[0]:p.w,w.sk&&w.sk[1]?Object.assign({x:p.x,y:p.y,ex:1},w.sk[1]):undefined);const kk=w.kk,ca=p.a+1.6+Math.random()*.4;cam.x-=Math.cos(p.a)*kk;cam.y-=Math.sin(p.a)*kk;if(!w.rk)cas(p,p.a,w.cc,w.cs,1);mfl(p.x+Math.cos(p.a)*30,p.y+Math.sin(p.a)*30,p.a,w.fl);if(w.rk&&SET.q)for(let i=0;i<5;i++)puff(p.x-Math.cos(p.a)*10,p.y-Math.sin(p.a)*10,'#b9b4aa',6,.7,-Math.cos(p.a)*120+(Math.random()-.5)*60,-Math.sin(p.a)*120+(Math.random()-.5)*60,2.2,.7);
 if(p.mag[p.w]<=0)reload()}
function fireB(o,a,v,d,sp,spl,k){const r=(Math.random()-.5)*sp,c=a+r;B.push({x:o.x+Math.cos(a)*28,y:o.y+Math.sin(a)*28,vx:Math.cos(c)*v,vy:Math.sin(c)*v,l:spl?1.2:1,e:0,d:d*(AMBon>0&&o!==p&&o.t<2?1.5:1),sp:spl||0,k});snd(k,o);if(o.t!==3){mfl(o.x+Math.cos(a)*30,o.y+Math.sin(a)*30,a,o.t==2?2.2:o.t==4?1.2:.9);if(o.t===0&&o.ro!='rk'&&Math.random()<.4)cas(o,a,'#d9a441',3.4,0)}}
function hurt(n){if(typeof MP!='undefined'&&MP.role=='host'&&MP.localPaused)return;if(p.iv>0||p.dt>0)return;if(inT(p))n*=.5;if(p.dv)n*=.4;if(inBase(p))n*=bm();n*=p.ar*[.7,1,1.3][SET.dif];p.hp-=n;p.iv=.55;sh=10;HF=T0;sfx('pain');if(SET.vib&&navigator.vibrate)navigator.vibrate(35);
 if(p.hp<=0){S='over';if(CM)try{localStorage.removeItem('zcc')}catch(e){}rad('go',['Líder abatido. Perdimos contacto. Repliegue general.'],'b',9,0);if(sc>best){best=sc;try{localStorage.zc=best}catch(e){}}show(CL?clsTitle():CM?'Caíste en el Día '+campClock().d:'Caíste en la oleada '+wv.n,CL?clsStats():CM?campStats():'Puntos: '+sc+' · Mejor: '+best,'Jugar de nuevo')}}
function dmgA(a,n,b){if(a._mp){if(a._mpPaused)return;a.hp-=n;a.f=.1;return}if(a.amb&&(AMB.st=='approach'||AMB.st=='ready'))return;if(a.t==1&&b){const g=Math.atan2(-b.vy,-b.vx);let d=g-a.a;d=Math.atan2(Math.sin(d),Math.cos(d));if(Math.abs(d)<1.1){spark(b.x,b.y,'#cfe3ea',4,140);return}}
 if(inT(a))n*=.5;if(a.z)n*=.7;a.hp-=n;a.f=.1;if(a.hp<=0){if(a===p.dv)p.dv=null;A.splice(A.indexOf(a),1);if(a.t<2)bdPush(a.x,a.y,a.a+(Math.random()-.5)*1.4,AT[a.t].c,AT[a.t].h,1.05);spark(a.x,a.y,'#3f8cff',22,260);RS.push({t:12,k:a.t})}}
function spark(x,y,c,n,s){if(Q.length>[250,400,600][SET.q])return;if(!SET.q)n=Math.ceil(n/2);for(let i=0;i<n;i++){const a=Math.random()*6.3,v=(.3+Math.random())*s;Q.push({x,y,vx:Math.cos(a)*v,vy:Math.sin(a)*v,l:.4+Math.random()*.4,c})}}
function ex(x,y,r,d,en){if(RD&&!en&&Math.hypot(RD.x-x,RD.y-y)<r+22)RD.hp-=d*4;X.push({x,y,r,l:.35});for(let i=0,n=Math.min(7,3+(r/30|0));i<n;i++)puff(x+(Math.random()-.5)*r*.6,y+(Math.random()-.5)*r*.6,'#3d3f40',r*.14+Math.random()*r*.1,1.4+Math.random()*1.2,(Math.random()-.5)*26,-14-Math.random()*20,1.1,.9);SC.push({x,y,r:r*.55,t:30});if(r>=95){SM.push({x,y,r:r*.9,l:9});if(SM.length>14)SM.shift()}if(SC.length>80)SC.shift();spark(x,y,'#6b7377',8,120);spark(x,y,'#ffb347',18,280);sh=Math.max(sh,10*Math.max(0,1-Math.hypot(x-p.x,y-p.y)/700));snd(6,{x,y,ex:1,r});if(Math.hypot(x-p.x,y-p.y)<r*1.15)sfx('ring');
 if(en){if(Math.hypot(p.x-x,p.y-y)<r+p.r)hurt(d);for(const a of A.slice())if(a.t!=3&&Math.hypot(a.x-x,a.y-y)<r+a.r)dmgA(a,d)}
 else for(const o of E)if(o.hp>0&&Math.hypot(o.x-x,o.y-y)<r+o.r)hit(o,d)}
function hit(e,d){if(inT(e))d*=.6;e.hp-=d;e.f=.08;if(e.hp<=0)kill(e)}
function pickT(){const n=wv.n;for(const[k,w,pr,cap]of[[7,3,.1,Math.min(3,n-1)],[6,5,.1,Math.min(6,n-2)],[5,8,.03,Math.min(2,(n-5)/3|0)],[4,6,.06,Math.min(3,(n-3)/3|0)],[3,4,.12,Math.min(4,n-2)],[2,3,.1+n*.01,99],[1,2,.35,99]])if(n>=w&&Math.random()<pr&&E.filter(e=>e.t==k).length<cap)return k;return 0}
function mkE(x,y,t,z){const h=t==8?260+wv.n*14:t==9?220+wv.n*12:HP[t]+(n6()?1:0),o={x,y,t,z,hp:h,mhp:h,sp:SP[t]*(t==5?1:1+wv.n*.03),r:RR[t],cd:1+Math.random(),f:0,cc:0,a:0,ta:0,bc:0,bt:0,bb:3};E.push(o);return o}
function n6(){return wv.n>6}
function spawn(t){let x,y;for(let i=0;i<6;i++){const a=Math.random()*6.3,d=560+Math.random()*250;x=cl(p.x+Math.cos(a)*d,20,WW-20);y=cl(p.y+Math.sin(a)*d,20,WH-20);if(Math.hypot(x-p.x,y-p.y)>400)break}const e=mkE(x,y,t==null?pickT():t);if(t==null&&e.t==0&&wv.n>=3){const r=Math.random();if(r<.08){e.sn=1;note(4,'Francotirador: la línea roja avisa, muévete')}else if(r<.15){e.md=1;e.hp=e.mhp=6;note(3,'Médico enemigo: cura a otros, mátalo primero')}}return e}
function boss(){const k=wv.n/5|0,tk=k%2==1,e=spawn(tk?8:9);
 for(let i=0;i<3+k;i++)mkE(cl(e.x+(Math.random()-.5)*220,20,WW-20),cl(e.y+(Math.random()-.5)*220,20,WH-20),pickT());
 if(wv.n>=20)spawn(tk?9:8);
 zm=tk?'¡JEFE! Tanque blindado con escolta':'¡JEFE! Helicóptero de ataque con escolta';zt=5;beep(110,.6,'sawtooth',.08)}
let FSt=[];
function mkFS(){FSt=[];for(let i=0;i<9;i++){let x,y;for(let k=0;k<30;k++){x=250+Math.random()*(WW-500);y=250+Math.random()*(WH-500);if(Math.hypot(x-HQ.x,y-HQ.y)>700&&Math.hypot(x-WW/2,y-WH/2)>500)break}FSt.push({x,y,a:Math.random()*6.3,k:i%3,r:.8+Math.random()*.5})}}
function fsDraw(){for(const f of FSt){if(off(f,170))continue;const t=T0,s=f.r;cx.save();cx.translate(f.x,f.y);cx.fillStyle='#1a272d';cx.beginPath();cx.arc(0,0,48*s,0,7);cx.fill();cx.strokeStyle='#33505c';cx.lineWidth=3;cx.stroke();cx.rotate(f.a);
 if(f.k==0){cx.fillStyle='#2a2f31';cx.fillRect(-30*s,-13*s,60*s,26*s);cx.fillStyle='#1d2123';cx.fillRect(-10*s,-9*s,24*s,18*s);cx.fillStyle='#14171a';cx.fillRect(-30*s,-13*s,8*s,26*s)}
 else if(f.k==1){cx.fillStyle='#3a4146';cx.fillRect(-26*s,-15*s,52*s,30*s);cx.fillStyle='#2a3034';cx.beginPath();cx.arc(2*s,0,11*s,0,7);cx.fill();cx.fillRect(10*s,-2*s,34*s,4*s)}
 else{cx.fillStyle='#6b5d3f';for(let i=-4;i<=4;i++){cx.beginPath();cx.ellipse(Math.sin(i*.4)*10*s+34*s*Math.cos(i*.3),i*8*s,9*s,5*s,i*.3,0,7);cx.fill()}cx.fillStyle='#22282b';cx.fillRect(-26*s,-6*s,22*s,12*s)}
 cx.restore();
 if(f.k<2){for(let i=0;i<3;i++){cx.globalAlpha=.55+.35*Math.sin(t*9+i*2+f.x);cx.fillStyle=i?'#ffb347':'#ff6a2a';cx.beginPath();cx.arc(f.x+(i-1)*7*s,f.y-2*s-Math.abs(Math.sin(t*7+i))*6,(7-i*1.5)*s,0,7);cx.fill()}for(let i=0;i<5;i++){const u=(t*.25+i*.2+f.x*.001)%1;cx.globalAlpha=(1-u)*.4;cx.fillStyle='#262626';cx.beginPath();cx.arc(f.x+Math.sin(t*.6+i)*10*u*3,f.y-u*130,(8+u*26)*s,0,7);cx.fill()}cx.globalAlpha=1}
 if(Math.sin(t*5+f.x*.01)>.93){cx.strokeStyle='rgba(255,230,150,.9)';cx.lineWidth=2;cx.beginPath();const a=f.a+(Math.sin(f.y)>0?1:-1)*(1+Math.sin(t*3)*.3);cx.moveTo(f.x+Math.cos(a)*30,f.y+Math.sin(a)*30);cx.lineTo(f.x+Math.cos(a)*90,f.y+Math.sin(a)*90);cx.stroke()}}}
function mkZ(){note(0,'SOS: aliados en peligro, ve a la zona marcada');let x,y;for(let i=0;i<20;i++){x=300+Math.random()*(WW-600);y=300+Math.random()*(WH-600);if(Math.hypot(x-p.x,y-p.y)>1000)break}
 const z={x,y,t:110};Z.push(z);for(const[t,ox]of[[0,-40],[0,40],[0,0],[1,70],...(wv.n>=3?[[4,-80]]:[])]){const o=mkA(t,x+ox,y+(ox%2?30:-30));o.z=z;o.mhp*=2;o.hp=o.mhp}
 for(let i=0;i<Math.round((8+wv.n*2)*EF());i++){const a=Math.random()*6.3,d=420+Math.random()*120;mkE(cl(x+Math.cos(a)*d,20,WW-20),cl(y+Math.sin(a)*d,20,WH-20),pickT(),z)}
 callStart(z)}
function unload(e){e.un=1;for(let i=0;i<3;i++)mkE(e.x+(Math.random()-.5)*50,e.y+(Math.random()-.5)*50,0,e.z);spark(e.x,e.y,'#c9a36a',10,120)}
function kill(e){if(e.t>7){for(let i=0;i<4;i++)U.push({x:e.x+(Math.random()-.5)*90,y:e.y+(Math.random()-.5)*90,k:i%2?'a':'h',l:14});X.push({x:e.x,y:e.y,r:130,l:.5});spark(e.x,e.y,'#ffb347',50,380);sh=16;zm='¡Jefe derrotado!';zt=3;SLO=1.2}
 if(e.t==7&&!e.un)unload(e);if(e.t<2&&Math.random()<.45)CW.push({x:e.x,y:e.y,a:e.a,c:EC[e.t],h:EH[e.t],s:1,cw:1,wp:0,t:1.1+Math.random()*.1});else if(e.t<5)bdPush(e.x,e.y,e.a+(Math.random()-.5)*1.4,EC[e.t],EH[e.t],e.t==2?1.5:1);spark(e.x,e.y,EC[e.t],14,220);beep(70+Math.random()*30,.15,'square',.07);sh=Math.max(sh,e.t>1?9:3);
 cb++;ct=2.2;sc+=[10,25,60,50,150,120,80,90,600,700][e.t]*Math.min(5,1+Math.floor(cb/5));
 if(Math.random()<Math.min(.8,.2+e.t*.15))U.push({x:e.x,y:e.y,k:Math.random()<.45?'h':'a',l:12})}
const sg=(o,b)=>{let q=Math.atan2(-b.vy,-b.vx)-o.a;q=Math.atan2(Math.sin(q),Math.cos(q));return Math.abs(q)<1.1};
function near(o,L){let b=null,m=Infinity;const x=o.x,y=o.y;for(const t of L){const dx=x-t.x,dy=y-t.y,d=dx*dx+dy*dy;if(d<m){m=d;b=t}}return b?[b,Math.sqrt(m)]:[null,1e9]}
/* vehículos: el cuerpo gira despacio como un carro real; la torreta apunta por separado */
function vTurn(a,to,rate,dt){const d=Math.atan2(Math.sin(to-a.a),Math.cos(to-a.a));a.a+=cl(d,-rate*dt,rate*dt);return d}
function vAim(a,to,dt,rt){rt=rt||7;const d=Math.atan2(Math.sin(to-a.ta),Math.cos(to-a.ta));a.ta+=cl(d,-rt*dt,rt*dt)}
function vSteer(a,gx,gy,dt,rv,rt){if(Math.hypot(gx,gy)<.01)return 1;let h=Math.atan2(gy,gx);if(rv)h+=Math.PI;const d=vTurn(a,h,rt||2.2,dt);return .3+.7*Math.max(0,Math.cos(d))}
function upd(dt){if(typeof miniUpd=='function')miniUpd(dt);
 let ix=(K.KeyD||K.ArrowRight?1:0)-(K.KeyA||K.ArrowLeft?1:0),iy=(K.KeyS||K.ArrowDown?1:0)-(K.KeyW||K.ArrowUp?1:0),fire=md,ta=null;
 if(touch)for(const id in TT){const t=TT[id],dx=t.x-t.x0,dy=t.y-t.y0;if(t.s=='m'){ix=dx/50;iy=dy/50}else if(Math.hypot(dx,dy)>(SET.dz||12)){ta=Math.atan2(dy,dx);fire=1}}
 if(typeof MP!='undefined'&&MP.role==='guest')return;if(typeof MP!='undefined'&&MP.role==='host'&&MP.localPaused){ix=iy=fire=0;ta=null}
 const l=Math.hypot(ix,iy);if(l>1){ix/=l;iy/=l}p.mx=ix;p.my=iy;
 const sp=p.dt>0?760:260*p.sv,vx=p.dt>0?p.dx:ix,vy=p.dt>0?p.dy:iy;
 if(p.dv){const T=p.dv;const vk=l>.1?vSteer(T,ix,iy,dt,0):1;T.x=cl(T.x+ix*330*dt*vk,24,WW-24);T.y=cl(T.y+iy*330*dt*vk,24,WH-24);T.ta=p.a;p.x=T.x;p.y=T.y}else{p.x=cl(p.x+vx*sp*dt,16,WW-16);p.y=cl(p.y+vy*sp*dt,16,WH-16)}
 if((vx||vy)&&Math.random()<dt*(p.dt>0?40:12))Q.push({x:p.x-vx*10,y:p.y-vy*10,vx:-vx*40+(Math.random()-.5)*30,vy:-vy*40+(Math.random()-.5)*30,l:.4,c:'rgba(170,160,135,.7)'});
 const k=Math.min(1,dt*9);const mpM=typeof MP!='undefined'&&MP.role==='host'&&MP.remote&&MP.view==='video',mpCX=mpM?(p.x+MP.remote.x)/2:p.x,mpCY=mpM?(p.y+MP.remote.y)/2:p.y;cam.x+=(cl(mpCX-W/2,0,Math.max(0,WW-W))-cam.x)*k;cam.y+=(cl(mpCY-H/2,0,Math.max(0,WH-H))-cam.y)*k;
 if(typeof MP!='undefined'&&MP.role==='host'&&MP.localPaused){}else if(ta!==null)p.a=aimT(ta,dt);else if(touch){if(l>.2&&!p.dv){let da=Math.atan2(iy,ix)-p.a;da=Math.atan2(Math.sin(da),Math.cos(da));p.a+=cl(da,-14*dt,14*dt)}}else if(!touch){const[t,d]=aa?near(p,E):[null,0];p.a=t&&d<750?Math.atan2(t.y-p.y,t.x-p.x):Math.atan2(my+cam.y-p.y,mx+cam.x-p.x)}
 if(Math.hypot(p.x-HQ.x,p.y-HQ.y)<90&&p.hp<p.mh)p.hp=Math.min(p.mh,p.hp+p.mh/hq*dt);p.ac-=dt;p.mc-=dt;p.fc-=dt;p.pc-=dt;p.nc=(p.nc||0)-dt;p.gc-=dt;p.cd-=dt;p.iv-=dt;p.dt-=dt;p.dc-=dt;
 if(p.rl>0){p.rl-=dt;if(p.rl<=0){const w=WP[p.rw],tk=Math.min(w.m-p.mag[p.rw],p.res[p.rw]);p.mag[p.rw]+=tk;p.res[p.rw]-=tk}}
 if(fire)shoot();
 if(ct>0){ct-=dt;if(ct<=0)cb=0}
 if(!CM){if(wv.brk>0){wv.brk-=dt;if(wv.brk<=0){wv.n++;wv.left=Math.round((12+wv.n*8)*[.75,1,1.3][SET.dif]*EF());wv.t=0;wv.msg=2.2;radW();if(wv.n>=2&&wv.n%5&&wv.n%3==2&&!RD)mkRD();if(wv.n>=2){const k=Math.min(3,1+(wv.n/3|0))-Z.length;for(let i=0;i<k;i++)mkZ()}if(wv.n%5==0)boss();if(wv.n%4==3){zm='NOCHE: poca visibilidad · T lanza bengalas';zt=5}}}
 else{wv.t-=dt;if(wv.left>0&&wv.t<=0&&E.length<[35,50,90][SET.q]){spawn();wv.left--;wv.t=Math.max([.45,.3,.15][SET.q],.8-wv.n*.05)*[1.25,1,.8][SET.dif]}
  else if(!wv.left&&!E.some(e=>!e.z)){wv.brk=3;newUp();gar();radC();p.hp=Math.min(p.mh,p.hp+15);p.res[1]+=6;p.res[2]+=20,ammoX(20);p.res[3]+=1;p.gn=Math.min(5,p.gn+2)}}}else campUpd(dt);
 wv.msg-=dt;zt-=dt;
 for(const m of M){m.t-=dt;if(m.t<=0){ex(m.x,m.y,85,15);m.d=1}}M=M.filter(m=>!m.d);for(const z of MZ)z.l-=dt;MZ=MZ.filter(z=>z.l>0);bdTick(dt);for(const c of SC)c.t-=dt;SC=SC.filter(c=>c.t>0);
 for(const f of FL){f.l-=dt;f.t-=dt}FL=FL.filter(f=>f.l>0);for(const q of SM)q.l-=dt;SM=SM.filter(q=>q.l>0);
 for(const q of PR){q.t-=dt;if(q.t<=0){if(A.length<ACAP())mkA(0,q.x,q.y);spark(q.x,q.y,'#c9a36a',10,120);q.d=1}}PR=PR.filter(q=>!q.d);
 for(const c of CW){c.t-=dt;c.wp+=dt*7;c.x+=Math.cos(c.a)*26*dt;c.y+=Math.sin(c.a)*26*dt;if(c.t<=0){bdPush(c.x,c.y,c.a,c.c,c.h,1);c.d=1}}CW=CW.filter(c=>!c.d);
 ni+=(((CM?campNight():wv.n%4==3&&wv.brk<=0)?1:0)-ni)*Math.min(1,dt*1.5);
 if(p.dv&&Math.hypot(p.mx,p.my)>.3)for(const e of E)if(e.t<5&&D(e,p.dv)<32)hit(e,90*dt);
 // aliados
 for(const r of RS){r.t-=dt;if(r.t<=0){const a=Math.random()*6.3;if(A.length<(r.z?30:18)){const ax=r.x!=null?r.x:cl(p.x+Math.cos(a)*170,20,WW-20),ay=r.y!=null?r.y:cl(p.y+Math.sin(a)*170,20,WH-20);const oo=mkA(r.k,ax,ay);if(r.z){oo.z=r.z;oo.mhp*=1.5;oo.hp=oo.mhp}if(r.x!=null)spark(ax,ay,'#5ee6a8',8,120)}r.k=-1}}RS=RS.filter(r=>r.k>=0);
 for(const h of HL){h.t+=dt;h.sm-=dt;if(h.sm<=0&&SET.q&&Q.length<300&&h.t<h.dr){h.sm=.1;Q.push({x:h.tx,y:h.ty,vx:(Math.random()-.5)*20,vy:-50-Math.random()*30,l:.9,c:'#5ee6a8'})}}HL=HL.filter(h=>h.t<9.5);
 asg();for(let ai=0,an=A.length;ai<an;ai++){const a=A[ai];if(!a)continue;if(a._mp)continue;const T=AT[a.t];a.f-=dt;a.cd-=dt;if(a===p.dv)continue;if(a.cv){campConvoy(a,dt);continue}if(a.amb&&AMB.st=='approach'&&a.ambDelay>0){a.ambDelay-=dt;continue}if(a.ro=='md'){for(const o of A)if(o!==a&&o.hp<o.mhp&&D(o,a)<130)o.hp=Math.min(o.mhp,o.hp+3*dt);if(p.hp<p.mh&&D(p,a)<130)p.hp=Math.min(p.mh,p.hp+3*dt)}
  if(a.rd){if(p.dv!==a.rd||!A.includes(a.rd))a.rd=null;else{const V=a.rd,[q,dd]=near(a,E);a.x=V.x-Math.cos(V.a)*9-Math.sin(V.a)*a.ri*7;a.y=V.y-Math.sin(V.a)*9+Math.cos(V.a)*a.ri*7;if(q&&dd<T.rng){a.a=Math.atan2(q.y-a.y,q.x-a.x);if(a.t==0&&a.cd<=0){a.cd=.28;fireB(a,a.a,800,1,.08,0,2)}}else a.a=V.a;continue}}let[t,d]=near(a,E),lim=a.z?900:a.pt?T.rng+150:a.sr=='h'?T.rng+150:od==1?1e9:od==2?T.rng+150:900,has=t&&d<lim;if(a.amb&&(AMB.st=='approach'||AMB.st=='ready'))has=0;if(a.g&&D(a,HQ)>460)has=0;if(a.sr=='b'||a.sr=='s'||a.sr=='r'){const w=a.sr=='b'?E.find(e=>e.t>7):a.sr=='r'?RD:near(a,E.filter(e=>e.sn||e.md))[0];if(w){t=w;d=D(a,w);has=1}}if(a.amb&&(AMB.st=='approach'||AMB.st=='ready'))has=0;
  if(a.t==3){let ga;if(has)ga=Math.atan2(t.y-a.y,t.x-a.x);else ga=Math.atan2(p.y-a.y,p.x-a.x)+(D(a,p)<420?1.3:0);
   let da=ga-a.a;da=Math.atan2(Math.sin(da),Math.cos(da));a.a+=cl(da,-2.2*dt,2.2*dt);
   a.x=cl(a.x+Math.cos(a.a)*a.sp*dt,0,WW);a.y=cl(a.y+Math.sin(a.a)*a.sp*dt,0,WH);a.bb-=dt;
   if(a.bc>0){a.bt-=dt;if(a.bt<=0){a.bt=.06;a.bc--;fireB(a,a.a,900,1,.08,0,7)}}
   else if(has&&d<420&&Math.abs(da)<.35&&a.cd<=0){a.bc=8;a.cd=2.5}
   if(has&&d<170&&a.bb<=0){a.bb=3.5;B.push({x:a.x,y:a.y,vx:0,vy:0,l:.55,e:0,d:5,sp:100})}
   continue}
  a.hc=0;if(a.hp<a.mhp*.4&&!a.z&&!a.go&&!a.amb){a.go=1;a.ox=(Math.random()-.5)*90;a.oy=(Math.random()-.5)*60}let gx=0,gy=0;
  a.rv=0;if(has){const ga=Math.atan2(t.y-a.y,t.x-a.x);if(a.t==4)vAim(a,ga,dt);else if(a.t==2)vAim(a,ga,dt,3.4);else a.a=a.ta=ga;const m=d>T.rng*.75?1:d<T.rng*.35?-.7:0;a.rv=m<0;gx=Math.cos(ga)*m;gy=Math.sin(ga)*m;if(!m&&a.t!=2&&a.t!=4){gx=-Math.sin(ga)*.5*a.rs;gy=Math.cos(ga)*.5*a.rs}}
  else{const truckEnRoute=CM&&CP&&CP.rush&&CP.cvs.some(m=>m.f===CP.rush);const RU2=CM&&CP&&CP.rush&&!truckEnRoute&&!a.g&&!a.z&&!a.pt&&a.sr!='h'&&a.t!=4?CP.rush:null,ambDest=a.amb&&AMB.st=='approach'?a.pt:null;a.rt-=dt;if(a.rt<=0){a.rt=ambDest?1:RU2?1:3+Math.random()*3;const c=ambDest||(a.g?GC(a):RU2||a.z||a.pt||(a.sr=='h'?HQ:od==2?dp:p)),w=ambDest?0:a.g?110:RU2?160:a.sr=='h'?200:a.pt?200:od==2?260:600;a.rx=c.x+(Math.random()-.5)*w;a.ry=c.y+(Math.random()-.5)*w}
   const dx=a.rx-a.x,dy=a.ry-a.y,dd=Math.hypot(dx,dy);if(dd>20){gx=dx/dd;gy=dy/dd;if(a.t!=4)a.a=a.ta=Math.atan2(dy,dx)}}
  if(a.go){const dx=HQ.x+a.ox-a.x,dy=HQ.y+a.oy-a.y,dd=Math.hypot(dx,dy);if(dd>12){gx=dx/dd;gy=dy/dd;if(!has&&a.t!=4&&a.t!=2)a.a=a.ta=Math.atan2(dy,dx)}else{gx=gy=0;a.hp=Math.min(a.mhp,a.hp+a.mhp/hq*dt);a.hc=1;if(a.hp>=a.mhp*.98)a.go=0}}
  if(a.t==4||a.t==2){const k=vSteer(a,gx,gy,dt,a.rv,a.t==2?1.5:0);gx*=k;gy*=k;if(!has)vAim(a,a.a,dt,a.t==2?3.4:0)}
  let mul=1;if(a.amb&&AMB.st=='approach'){mul=Math.min(12,campSpd()*1.08/a.sp)}else if(CM&&CP&&!has&&!a.z&&!a.g&&!a.pt&&!a.cv&&a.sr!='h'&&(CP.rush||D(a,p)>320)){const want=Math.min(430,Math.max(a.sp*1.8,campSpd()*1.08));mul=Math.min(a.t==2?2.2:99,want/a.sp)}const SX=mul*a.sp*dt;a.x=cl(a.x+gx*SX,10,WW-10);a.y=cl(a.y+gy*SX,10,WH-10);
  if(a.t==1&&a.bc>0){a.bt-=dt;if(a.bt<=0){a.bt=.07;a.bc--;fireB(a,a.a,780,1,.1,0,4)}}
  if(has&&d<T.rng){
   if(a.t==0&&a.cd<=0){const r=a.ro;if(r=='rk'){a.cd=2.6;fireB(a,a.a,620,5,0,85,6)}else{a.cd=r=='mg'?.13:r=='sn'?.8:.28;fireB(a,a.a,r=='sn'?1100:800,r=='sn'?3:1,r=='sn'?.015:r=='mg'?.14:.08,0,2)}}
   if(a.t==4&&a.cd<=0&&Math.cos(a.ta-Math.atan2(t.y-a.y,t.x-a.x))>.97){a.cd=.16;fireB(a,a.ta,820,1,.14,0,2)}
   if(a.t==1&&!a.bc&&a.cd<=0){a.bc=10;a.cd=3.2}
   if(a.t==2&&a.cd<=0&&Math.cos(a.ta-Math.atan2(t.y-a.y,t.x-a.x))>.985){a.cd=2.2;fireB(a,a.ta,620,4,0,70,6)}}}
 // enemigos
 for(const z of Z){z.t-=dt;const mine=E.filter(e=>e.z===z).length,al=A.filter(a=>a.z===z).length;
  if(!mine){sc+=300+(z.arr?200:0);p.hp=Math.min(p.mh,p.hp+30);p.res[1]+=8;p.res[2]+=30,ammoX(30);p.res[3]+=1;zm='Zona asegurada: parte de su equipo se une a ti';zt=4;z.ok=1;A.filter(a=>a.z===z).forEach((a,i)=>{if(A.length<=ACAP())a.z=null;else A.splice(A.indexOf(a),1)});z.done=1}
  else if((!al&&!callHold(z))||z.t<=0){zm=z.pv&&!z.arr?'Llegaste tarde: zona perdida':'Zona perdida';zt=3;z.ko=1;A.filter(a=>a.z===z).forEach(a=>{if(A.length<=ACAP())a.z=null;else A.splice(A.indexOf(a),1)});E.forEach(e=>{if(e.z===z)e.z=null});z.done=1}}
 Z=Z.filter(z=>!z.done);PS=PS.filter(q=>A.some(a=>a.pt===q));
 for(const q of PS){q.cd=(q.cd||0)-dt;const[t,d]=near(q,E);if(t&&d<520){q.ga=Math.atan2(t.y-q.y,t.x-q.x);if(q.cd<=0&&A.some(a=>a.pt===q&&D(a,q)<150)){q.cd=.12;fireB(q,q.ga,820,1.5,.1,0,2)}}}
 if(SET.tut&&TPi<5){TPt+=dt;let ad=TPt>[9,10,7,8,9][TPi];if(TPi==0&&D(p,DP0)>200)ad=1;if(TPi==1&&p.fired)ad=1;if(ad){TPi++;TPt=0;if(TPi>=5){SET.tut=0;sv()}}}
 for(const k in HC)HC[k]-=dt;callUpd(dt);{const k2=p.w+':'+p.mag[p.w]+':'+p.res[p.w]+':'+p.gn;if(k2!==AMk){AMk=k2;amN.textContent=p.mag[p.w]+'/'+(p.res[p.w]==1/0?'∞':p.res[p.w]);gcN.textContent=p.gn}}if(HCT>0){HCT-=dt;if(HCT<=0){HCT=0;HLK=30;beep(700,.12,'sine',.05)}}else HLK-=dt;if(HO&&!inBase(p))HO=0;if(inBase(p)&&p.hp<p.mh)p.hp=Math.min(p.mh,p.hp+p.mh/50*dt);
 if(RD){RD.t-=dt;if(RD.hp<=0){sc+=500;p.hp=Math.min(p.mh,p.hp+40);p.res[1]+=8;p.res[2]+=30,ammoX(30);p.res[3]+=1;zm='Radio destruida: +500 puntos y suministros';zt=3.5;ex(RD.x,RD.y,90,10);RD=null}else if(RD.t<=0){zm='Radio enemiga: llegan refuerzos';zt=3.5;wv.left+=8;RD=null}}
 const ocultos=AMB.st=='pick'||AMB.st=='approach'||AMB.st=='ready';const hostPaused=typeof MP!='undefined'&&MP.role==='host'&&MP.localPaused;const TL=[...(hostPaused?[]:[p]),...A.filter(a=>a.t!=3)];if(typeof MP!='undefined'&&MP.role==='host'&&MP.remote&&!MP.remote._mpPaused)TL.push(MP.remote);
 const DT0=dt,FR=++FRc,FAR=Math.max(W,H)*.9,FAR2=FAR*FAR,AMBR2=AMBR*AMBR,ambX=AMB.tx,ambY=AMB.ty,ECELL=256,EGRID=new Map;for(const o of E){const k=(o.x/ECELL|0)*100000+(o.y/ECELL|0);let q=EGRID.get(k);if(!q)EGRID.set(k,q=[]);q.push(o)}let EI=0;for(const e of E){EI++;if(ocultos&&(e.x-ambX)*(e.x-ambX)+(e.y-ambY)*(e.y-ambY)<=AMBR2)continue;if(e.stun>0){e.stun-=DT0;continue}const px=e.x-p.x,py=e.y-p.y,far=SET.q<2&&e.t<5&&px*px+py*py>FAR2;if(far&&(FR+EI)%3){e.dta=(e.dta||0)+DT0;continue}const dt=far?DT0+(e.dta||0):DT0;if(far){e.dta=0;e.cd=Math.max(e.cd,.6)}const[t,d]=near(e,TL),dx=t.x-e.x,dy=t.y-e.y,ux=dx/(d||1),uy=dy/(d||1);e.f-=dt;e.cc-=dt;let m=1;e.a=Math.atan2(dy,dx);if(e.hold){if(d>e.ag&&e.hp>=e.mhp)continue;e.hold=0;if(e.gp)for(const o of E)if(o.gp===e.gp)o.hold=0}
  if(e.t==5){let da=e.a;e.a=e.pa||0;da-=e.a;da=Math.atan2(Math.sin(da),Math.cos(da));e.a+=cl(da,-2*dt,2*dt);e.pa=e.a;e.x=cl(e.x+Math.cos(e.a)*e.sp*dt,0,WW);e.y=cl(e.y+Math.sin(e.a)*e.sp*dt,0,WH);e.cd-=dt;e.bb-=dt;
   if(e.bc>0){e.bt-=dt;if(e.bt<=0){e.bt=.08;e.bc--;B.push({x:e.x,y:e.y,vx:Math.cos(e.a)*520,vy:Math.sin(e.a)*520,l:1.2,e:1,d:8,k:7});snd(7,e)}}
   else if(d<380&&Math.abs(da)<.3&&e.cd<=0){e.bc=6;e.cd=3}
   if(d<150&&e.bb<=0){e.bb=4;B.push({x:e.x,y:e.y,vx:0,vy:0,l:.55,e:1,d:15,sp:90})}
   continue}
  if(e.t==3){m=d>240?1:d<150?-.6:0;e.cd-=dt;if(e.bc>0){e.bt-=dt;if(e.bt<=0){e.bt=.08;e.bc--;const c=e.a+(Math.random()-.5)*.12;B.push({x:e.x+Math.cos(e.a)*28,y:e.y+Math.sin(e.a)*28,vx:Math.cos(c)*600,vy:Math.sin(c)*600,l:1.5,e:1,d:6,k:4});snd(4,e)}}else if(e.cd<=0&&d<380){e.bc=10;e.cd=3.4}}
  if(e.t==4){const aim=Math.atan2(dy,dx);if(e.bh==null){e.bh=aim;e.ta=aim}e.a=e.bh;m=d>420?1:d<260?-.5:0;e.vk=vSteer(e,ux*m,uy*m,dt,m<0,1.4);e.bh=e.a;vAim(e,aim,dt,3.2);e.cd-=dt;if(e.cd<=0&&d<560&&Math.cos(e.ta-aim)>.96){e.cd=2.8;B.push({x:e.x+Math.cos(e.ta)*30,y:e.y+Math.sin(e.ta)*30,vx:Math.cos(e.ta)*520,vy:Math.sin(e.ta)*520,l:1.1,e:1,d:12,sp:65,k:6});snd(6,e)}}
  if(e.t==7){const aim=Math.atan2(dy,dx);if(e.bh==null){e.bh=aim;e.ta=aim}e.a=e.bh;m=d>280?1:d<200?-.4:0;e.vk=vSteer(e,ux*m,uy*m,dt,m<0);e.bh=e.a;vAim(e,aim,dt);if(!e.un&&d<340)unload(e);e.cd-=dt;if(e.cd<=0&&d<460&&Math.cos(e.ta-aim)>.96){e.cd=.3;const c=e.ta+(Math.random()-.5)*.2;B.push({x:e.x+Math.cos(e.ta)*22,y:e.y+Math.sin(e.ta)*22,vx:Math.cos(c)*500,vy:Math.sin(c)*500,l:1,e:1,d:4,k:3});snd(3,e)}}
  if(e.t==8){const aim=Math.atan2(dy,dx);if(e.bh==null){e.bh=aim;e.ta=aim}e.a=e.bh;m=d>400?1:d<280?-.5:0;e.vk=vSteer(e,ux*m,uy*m,dt,m<0,1.1);e.bh=e.a;vAim(e,aim,dt,2.6);e.cd-=dt;e.c2=(e.c2||0)-dt;
   if(e.cd<=0&&d<650){e.cd=2.4;for(const o of[-.2,0,.2]){const c=e.ta+o;B.push({x:e.x+Math.cos(c)*50,y:e.y+Math.sin(c)*50,vx:Math.cos(c)*480,vy:Math.sin(c)*480,l:1.5,e:1,d:10,sp:75,k:6})}snd(6,e)}
   if(e.c2<=0&&d<520){e.c2=.16;const c=e.ta+(Math.random()-.5)*.25;B.push({x:e.x+Math.cos(e.ta)*50,y:e.y+Math.sin(e.ta)*50,vx:Math.cos(c)*560,vy:Math.sin(c)*560,l:1,e:1,d:4,k:3});snd(3,e)}}
  if(e.t==9){m=d>330?1:d<230?-.6:0;e.ta=e.a;e.cd-=dt;e.c2=(e.c2||0)-dt;const sw=Math.sin(T0*.9)*90*dt;e.x=cl(e.x-uy*sw,20,WW-20);e.y=cl(e.y+ux*sw,20,WH-20);
   if(e.bc>0){e.bt-=dt;if(e.bt<=0){e.bt=.07;e.bc--;const c=e.a+(Math.random()-.5)*.16;B.push({x:e.x+Math.cos(e.a)*40,y:e.y+Math.sin(e.a)*40,vx:Math.cos(c)*600,vy:Math.sin(c)*600,l:1.2,e:1,d:4,k:3});snd(3,e)}}
   else if(e.cd<=0&&d<560){e.bc=18;e.cd=4}
   if(e.c2<=0&&d<620){e.c2=5.5;for(const o of[-.25,0,.25]){const c=e.a+o;B.push({x:e.x+Math.cos(c)*40,y:e.y+Math.sin(c)*40,vx:Math.cos(c)*450,vy:Math.sin(c)*450,l:1.4,e:1,d:11,sp:70,k:6})}snd(6,e)}}
  if(e.t==6){m=d>180?1:d<110?-.4:0;e.cd-=dt;if(e.cd<=0&&d<420){e.cd=.28;const c=e.a+(Math.random()-.5)*.18;B.push({x:e.x+Math.cos(e.a)*26,y:e.y+Math.sin(e.a)*26,vx:Math.cos(c)*520,vy:Math.sin(c)*520,l:1,e:1,d:4,k:3});snd(3,e)}}
  if(e.sn){m=d>560?1:d<430?-.9:0;if(e.aim>0){if(e.aim>.35)e.la=e.a;e.aim-=dt;if(e.aim<=0){const a=e.la;B.push({x:e.x+Math.cos(a)*18,y:e.y+Math.sin(a)*18,vx:Math.cos(a)*1100,vy:Math.sin(a)*1100,l:1,e:1,d:28,k:2});snd(2,e);e.cd=3.5}}else{e.cd-=dt;if(e.cd<=0&&d<700){e.aim=1.1;e.la=e.a}}}
  if(e.md){let w=null,wd2=360000;const seek=o=>{if(o!==e&&o.t<8&&o.hp<o.mhp){const dx=e.x-o.x,dy=e.y-o.y,q=dx*dx+dy*dy;if(q<wd2){wd2=q;w=o}}};if(E.length>40){const gx=e.x/ECELL|0,gy=e.y/ECELL|0;for(let ix=-3;ix<=3;ix++)for(let iy=-3;iy<=3;iy++){const q=EGRID.get((gx+ix)*100000+gy+iy);if(q)for(const o of q)seek(o)}}else for(const o of E)seek(o);if(w){const wd=Math.sqrt(wd2);if(wd>60){e.x+=(w.x-e.x)/wd*e.sp*dt;e.y+=(w.y-e.y)/wd*e.sp*dt}else{w.hp=Math.min(w.mhp,w.hp+10*dt);if(Math.random()<dt*6)spark(w.x,w.y,'#5ee6a8',2,60)}m=0}else m=d<350?-.7:0}
  if(e.t==0&&!e.sn&&!e.md){e.cd-=dt;if(e.cd<=0&&d<420){e.cd=.55+Math.random()*.25;const c=e.a+(Math.random()-.5)*.22;B.push({x:e.x+Math.cos(e.a)*18,y:e.y+Math.sin(e.a)*18,vx:Math.cos(c)*340,vy:Math.sin(c)*340,l:1.3,e:1,d:4,k:8});snd(8,e)}}
  if(e.t==2){e.cd-=dt;if(e.cd<=0&&d<450){e.cd=.22;const c=e.a+(Math.random()-.5)*.3;B.push({x:e.x+Math.cos(e.a)*30,y:e.y+Math.sin(e.a)*30,vx:Math.cos(c)*420,vy:Math.sin(c)*420,l:1.1,e:1,d:4,k:5});snd(5,e)}}
  if(e.t==1){m=d>270?1:d<210?-.8:0;e.cd-=dt;if(e.cd<=0&&d<420){e.cd=1.8;B.push({x:e.x,y:e.y,vx:ux*270,vy:uy*270,l:3,e:1,d:8,k:3});snd(3,e)}}
  {const vk=(e.t==7||e.t==4||e.t==8)?e.vk:1;e.x=cl(e.x+ux*e.sp*m*dt*vk,20,WW-20);e.y=cl(e.y+uy*e.sp*m*dt*vk,20,WH-20)}if(e.t!=7&&e.t!=4&&e.t!=8)e.a=Math.atan2(dy,dx);
  {const ex0=e.x/ECELL|0,ey0=e.y/ECELL|0;for(let ix=-1;ix<=1;ix++)for(let iy=-1;iy<=1;iy++){const q=EGRID.get((ex0+ix)*100000+ey0+iy);if(!q)continue;for(const o of q)if(o!==e){const ax=e.x-o.x,ay=e.y-o.y;if(ax>100||ax<-100||ay>100||ay<-100)continue;const ad=Math.sqrt(ax*ax+ay*ay);if(ad>0&&ad<e.r+o.r){e.x+=ax/ad*40*dt;e.y+=ay/ad*40*dt}}}}
  if(d<e.r+t.r&&e.cc<=0&&e.t!=9){e.cc=.7;if(t===p)hurt(e.t==2?20:e.t==6?25:e.t>7?30:10);else dmgA(t,e.t==2?14:e.t==6?20:e.t>7?30:8)}}
 // balas
 if(CM)campCollide();for(const b of B){b.x+=b.vx*dt;b.y+=b.vy*dt;b.l-=dt;if(CM&&!b.gr&&b.k!=6&&campTreeHit(b)){campChips(b);b.l=0}if(b.gr){const f=Math.pow(.15,dt);b.vx*=f;b.vy*=f}if(b.g===undefined&&b.e&&!b.gr&&b.k!=6)mfl(b.x,b.y,Math.atan2(b.vy,b.vx),b.k==2?1.4:1);if(b.e&&!b.sp&&!b.wz&&(b.vx*b.vx+b.vy*b.vy)>230000){const wx=b.x-p.x,wy=b.y-p.y;if(wx*wx+wy*wy<3600){b.wz=1;sfx('whiz',b)}}b.g=(b.g||0)+dt;if(b.e&&!b.sp&&b.d<20){if(b.ib==null)b.ib=inBase(b);else if(!b.ib&&inBase(b))b.l=0}if(b.k==6&&Math.random()<.7)Q.push({x:b.x,y:b.y,vx:(Math.random()-.5)*30,vy:(Math.random()-.5)*30,l:.5,c:'#8a8f91'});
  if(b.e){if(nr(b,p,14)&&p.iv<=0&&p.dt<=0){if(!b.sp){hurt(b.d);imp(b,'f')}b.l=0}else for(const a of A)if(a.t!=3&&nr(b,a,a.r+3)){if(!b.sp){dmgA(a,b.d,b);imp(b,'f')}b.l=0;break}
   if(b.sp&&b.l<=0)ex(b.x,b.y,b.sp,b.d,1)}
  else{if(RD&&(b.vx||b.vy)&&!b.gr&&nr(b,RD,24)){if(!b.sp)RD.hp-=b.d;spark(b.x,b.y,'#ffd23f',3,100);b.l=0}if((b.vx||b.vy)&&!b.gr){const bx0=b.x/ECELL|0,by0=b.y/ECELL|0;let target=null,ti=1e9;for(let ix=-1;ix<=1;ix++)for(let iy=-1;iy<=1;iy++){const q=EGRID.get((bx0+ix)*100000+by0+iy);if(!q)continue;for(const e of q)if(e._ix<ti&&e.hp>0&&nr(b,e,e.r+3)){target=e;ti=e._ix}}if(target){const e=target;if(!b.sp){if(HM.length<40&&D(b,p)<650)HM.push({x:b.x,y:b.y,t:T0});if(e.t==3&&sg(e,b))imp(b,'m',e);else{hit(e,b.d);imp(b,e.t>=4?'m':'f',e)}}b.l=0}}
   if(b.sp&&b.l<=0)ex(b.x,b.y,b.sp,b.d)}}
 B=B.filter(b=>b.l>0&&b.x>-40&&b.x<WW+40&&b.y>-40&&b.y<WH+40);E=E.filter(e=>e.hp>0);EGRID.clear();for(let ei=0;ei<E.length;ei++){const e=E[ei];e._ix=ei;const k=(e.x/ECELL|0)*100000+(e.y/ECELL|0);let q=EGRID.get(k);if(!q)EGRID.set(k,q=[]);q.push(e)}
 for(const u of U){u.l-=dt;if(D(u,p)<22){u.l=0;beep(880,.1,'triangle');if(u.k=='h')p.hp=Math.min(p.mh,p.hp+25);else{p.res[1]+=6;p.res[2]+=24,ammoX(24);p.res[3]+=1;p.gn=Math.min(5,p.gn+1)}}}
 U=U.filter(u=>u.l>0);
 for(const q of Q){q.x+=q.vx*dt;q.y+=q.vy*dt;q.vx*=.94;q.vy*=.94;q.l-=dt}Q=Q.filter(q=>q.l>0);for(const m of MF)m.l-=dt;MF=MF.filter(m=>m.l>0);for(const c of CS){if(!c.g){c.x+=c.vx*dt;c.y+=c.vy*dt;c.vz-=620*dt;c.z+=c.vz*dt;c.r+=c.vr*dt;if(c.z<=0){c.z=0;if(c.b<1){c.b++;c.vz=-c.vz*.38;c.vx*=.5;c.vy*=.5;if(c.own)sfx('shell',c)}else{c.g=1;c.vr=0}}}else c.l-=dt}CS=CS.filter(c=>c.l>0);
 for(const s of AS){s.x+=Math.cos(s.a)*650*dt;s.y+=Math.sin(s.a)*650*dt;s.bd-=dt;s.l-=dt;const al=(s.x-s.tx)*Math.cos(s.a)+(s.y-s.ty)*Math.sin(s.a);
  if(s.bd<=0&&(Math.abs(al)<420||(s.sm&&Math.abs(al)<760&&E.some(e=>Math.hypot(e.x-s.x,e.y-s.y)<150)))){s.bd=s.sm?.1:.11;B.push({x:s.x,y:s.y,vx:0,vy:0,l:.55,e:0,d:6,sp:95})}}
 AS=AS.filter(s=>s.l>0);
 if(Math.random()<dt*.6){const a=Math.random()*6.3,d=350+Math.random()*500;X.push({x:p.x+Math.cos(a)*d,y:p.y+Math.sin(a)*d,r:60,l:.35});beep(50,.35,'sawtooth',.03)}
 for(const x of X)x.l-=dt;X=X.filter(x=>x.l>0);
 sh*=.88}
const BS=[['#ffe27a',3,.022],['#ffb347',3,.014],['#bfe9ff',2.5,.045],['#ff6b6b',3.5,.03],['#ff9a3d',3,.035],['#c9a0ff',4,.03],['#ffb347',8,.03],['#fff1a8',2.5,.04],['#ff9a6b',3,.02]],FR=[7,13,9,7,7,8,16,5,6];
function bar(x,y,w,h,f,c){cx.fillStyle='rgba(0,0,0,.4)';cx.fillRect(x,y,w,h);cx.fillStyle=c;cx.fillRect(x,y,w*Math.max(0,Math.min(1,f)),h)}
const GL=[[7,23,3.6],[4,34,4.4],[2,33,4],[-6,38,6.5]];
const TKc=document.createElement('canvas');TKc.width=Math.ceil(WW/4);TKc.height=Math.ceil(WH/4);const TKx=TKc.getContext('2d'),shd=(a,s)=>{const c=Math.cos(a),n=Math.sin(a);return[(SH.x*c+SH.y*n)/s,(-SH.x*n+SH.y*c)/s]};
function trk(a,w,col){if(!SET.q)return;if(a.tx0==null){a.tx0=a.x;a.ty0=a.y}if(S!='play'||Math.hypot(a.x-a.tx0,a.y-a.ty0)<3)return;const nx=-Math.sin(a.a)*w,ny=Math.cos(a.a)*w;TKx.lineCap='round';TKx.strokeStyle=col;TKx.lineWidth=2.2;TKx.beginPath();for(const k of[-1,1]){TKx.moveTo((a.tx0+nx*k)/4,(a.ty0+ny*k)/4);TKx.lineTo((a.x+nx*k)/4,(a.y+ny*k)/4)}TKx.stroke();a.tx0=a.x;a.ty0=a.y}
function mot(o){const d=Math.hypot(o.x-(o.lx==null?o.x:o.lx),o.y-(o.ly==null?o.y:o.ly));o.wp=(o.wp||0)+d*.09;o.mv=(o.mv||0)+(Math.min(1,d/2.2)-(o.mv||0))*.3;o.lx=o.x;o.ly=o.y;
 if(o.cd>(o.pcd==null?o.cd:o.pcd)+.01||(o.bc>0&&o.bc!==o.pbc))o.kk=1;o.pcd=o.cd;o.pbc=o.bc;o.kk=(o.kk||0)*.8;return o}
const KS={P:['#5d5238','#ff7a45','#2a261d'],A:['#26395c','#f2f7ff','#141b2a'],S:['#21463f','#ffd23f','#0e211f'],E0:['#4a2822','#ff3b3b','#1a1210'],E1:['#55440f','#ffd23f','#241c08'],E2:['#35264f','#c9a8ff','#14101c'],E3:['#54200f','#ff9a3d','#1c0e0a']};
const CB=[[-5,-7.5,3.4,2.1,.4],[-3,5.5,3.6,2.4,-.3],[-7.5,.5,2.6,1.8,0],[3.5,-5,2.2,1.5,.6],[2,6,2.4,1.6,-.5]];
function rrect(X,Y,w,h,r){cx.beginPath();if(cx.roundRect)cx.roundRect(X,Y,w,h,r);else cx.rect(X,Y,w,h)}
var BRO=null,FWO=null,NOSH=0,SPn=0;const SPC=new Map();
function manRaw(x,y,a,c,h,s,sd,fl,g,ph,mv,rc,rl,ro,kt){c=uc(c);h=uc(h);g=g||0;ph=ph||0;mv=mv||0;rc=rc||0;kt=KS[kt]?kt:'A';const L=GL[g],sw=Math.sin(ph),br=BRO!=null?BRO:Math.sin(T0*2.6+x*.05)*.5*(1-mv),tc=fl?'#fff':c,dk='rgba(0,0,0,.3)',K=KS[kt],hi=!fl&&SET.q>0,en=kt[0]=='E',gv=en?'#d9b08c':K[2],pl=kt=='P';
 let lx=g?L[1]-11:14,ly=g?-.5:-1.5;if(rl){lx-=8;ly+=4}
 const rk=-rc*2.6,sy=sw*mv*.6;
 cx.save();cx.translate(x,y);cx.rotate(a);cx.scale(s,s);
 if(SET.q&&!NOSH){const q=shd(a,s);cx.fillStyle='rgba(0,0,0,'+.28*SHk+')';cx.beginPath();cx.ellipse(q[0],q[1],10,14,0,0,7);cx.fill()}
 for(const k of[-1,1]){const lg=sw*k*mv*7,yy=k*5.2;cx.fillStyle=tc;cx.beginPath();cx.ellipse(lg-1,yy,7,3.6,0,0,7);cx.fill();
  if(!fl){const pg=cx.createLinearGradient(0,yy-3.6,0,yy+3.6);pg.addColorStop(0,zmx(c,.16));pg.addColorStop(.5,c);pg.addColorStop(1,zmx(c,-.38));cx.fillStyle=pg;cx.fill();
   if(hi){cx.save();cx.beginPath();cx.ellipse(lg-1,yy,7,3.6,0,0,7);cx.clip();cx.globalAlpha=.5;cx.fillStyle=zmx(c,-.42);for(const b of[[-3,-1,2.6,1.5],[2,1,2.8,1.6],[-6,1.4,2.2,1.2]]){cx.beginPath();cx.ellipse(lg+b[0],yy+b[1],b[2],b[3],b[0],0,7);cx.fill()}cx.fillStyle=zmx(c,.24);cx.globalAlpha=.4;cx.beginPath();cx.ellipse(lg+1,yy-1.4,2.2,1.1,.3,0,7);cx.fill();cx.globalAlpha=1;
    cx.strokeStyle='rgba(0,0,0,.32)';cx.lineWidth=.8;cx.beginPath();cx.moveTo(lg-4,yy-2.8);cx.lineTo(lg-3,yy+2.8);cx.moveTo(lg+3.4,yy-2.6);cx.lineTo(lg+2.6,yy+2.6);cx.stroke();cx.restore();
    cx.fillStyle='rgba(0,0,0,.4)';rrect(lg+.2,yy-2.2,3,4.4,1.5);cx.fill();cx.fillStyle='rgba(255,255,255,.1)';cx.fillRect(lg+.6,yy-1.8,1.6,.8)}
   cx.fillStyle='#0b0d0e';rrect(lg+2.2,yy-3.3,7.6,6.6,3);cx.fill();cx.fillStyle='#1f2326';rrect(lg+2.6,yy-2.8,6.6,5.6,2.6);cx.fill();
   if(hi){cx.fillStyle='rgba(255,255,255,.15)';cx.fillRect(lg+3.4,yy-2.4,3.6,.9);cx.fillStyle='#0d0f10';cx.beginPath();cx.ellipse(lg+8,yy,1.7,2.4,0,0,7);cx.fill();cx.strokeStyle='rgba(120,125,120,.45)';cx.lineWidth=.6;cx.beginPath();for(let i=0;i<3;i++){cx.moveTo(lg+4.4+i*1.2,yy-1.8);cx.lineTo(lg+4.4+i*1.2,yy+1.8)}cx.stroke();cx.fillStyle='rgba(0,0,0,.5)';for(let i=0;i<4;i++)cx.fillRect(lg+2.6+i*1.8,yy-3.3,.7,.5)}}}

 // mochila
 {const bc=en?'#3a2a22':'#6e6140';cx.fillStyle=tc;rrect(-14.4,-7.4,8,14.8,2.4);cx.fill();
  if(!fl){const bg=cx.createLinearGradient(-16.8,0,-6.4,0);bg.addColorStop(0,zmx(bc,-.4));bg.addColorStop(.5,bc);bg.addColorStop(1,zmx(bc,.2));cx.fillStyle=bg;cx.fill();
   if(hi){cx.fillStyle=bg;rrect(-17,-6.6,4.4,13.2,2);cx.fill();cx.strokeStyle='rgba(0,0,0,.5)';cx.lineWidth=.8;cx.stroke();
    cx.fillStyle=zmx(bc,-.3);rrect(-17.4,-5.6,2.6,4.2,1.1);cx.fill();rrect(-17.4,1.4,2.6,4.2,1.1);cx.fill();cx.strokeStyle='rgba(255,255,255,.14)';cx.lineWidth=.7;cx.beginPath();cx.moveTo(-16.6,-6.2);cx.lineTo(-13.4,-6.2);cx.stroke();
    cx.strokeStyle='rgba(0,0,0,.4)';cx.lineWidth=.8;cx.beginPath();cx.moveTo(-15.2,-6.4);cx.lineTo(-15.2,6.4);cx.moveTo(-13.4,-6);cx.lineTo(-13.4,6);cx.stroke();
    cx.fillStyle='rgba(0,0,0,.4)';for(let i=0;i<4;i++){cx.fillRect(-16.4,-4.6+i*3,1.7,.7)}
    cx.fillStyle=bg;cx.beginPath();cx.ellipse(-18.2,0,1.5,6,0,0,7);cx.fill();cx.strokeStyle='rgba(0,0,0,.5)';cx.lineWidth=.7;cx.stroke();cx.strokeStyle='rgba(255,255,255,.12)';cx.beginPath();cx.moveTo(-18.8,-4.8);cx.lineTo(-18.8,4.8);cx.stroke();
    cx.fillStyle='rgba(0,0,0,.34)';cx.fillRect(-11.5,-4.8,3.2,3.2);cx.fillRect(-11.5,1.6,3.2,3.2);cx.fillStyle='rgba(255,255,255,.12)';cx.fillRect(-11.5,-4.8,3.2,.8);cx.fillRect(-11.5,1.6,3.2,.8);
    if(pl){cx.strokeStyle=K[1];cx.lineWidth=1.4;cx.beginPath();cx.moveTo(-12.4,-3.2);cx.lineTo(-9.8,0);cx.lineTo(-12.4,3.2);cx.stroke();cx.strokeStyle='#1d2224';cx.lineWidth=.9;cx.beginPath();cx.moveTo(-11,5.6);cx.lineTo(-23-mv*2,9+sw*mv*2.5);cx.stroke();cx.fillStyle=K[1];cx.beginPath();cx.arc(-23-mv*2,9+sw*mv*2.5,1,0,7);cx.fill()}}}}

 // torso y chaleco táctico
 cx.fillStyle=tc;cx.beginPath();cx.ellipse(0,br*.4,8.6,13.6+br*.5,0,0,7);cx.fill();
 if(!fl){{const tg=cx.createRadialGradient(-2.5,br*.4-3,1,0,br*.4,14);tg.addColorStop(0,'rgba(255,255,255,.2)');tg.addColorStop(.55,'rgba(0,0,0,0)');tg.addColorStop(1,'rgba(0,0,0,.42)');cx.fillStyle=tg;cx.beginPath();cx.ellipse(0,br*.4,8.6,13.6+br*.5,0,0,7);cx.fill()}
  if(hi){cx.save();cx.beginPath();cx.ellipse(0,br*.4,8.6,13.6+br*.5,0,0,7);cx.clip();
   if(en){cx.fillStyle='rgba(0,0,0,.36)';for(const b of CB){cx.save();cx.translate(b[0],b[1]);cx.rotate(b[4]+.9);cx.fillRect(-4.4,-.8,8.8,1.7);cx.restore()}}
   else{cx.globalAlpha=.55;cx.fillStyle=zmx(c,-.4);for(const b of[[-5,-8,3.6,2.2,.4],[-3,6,3.8,2.5,-.3],[-8,.6,2.8,1.9,0],[4,-5.4,2.4,1.6,.6],[2.4,6.8,2.6,1.7,-.5],[-1.6,-1.4,2.4,1.5,.9]]){cx.beginPath();cx.ellipse(b[0],b[1],b[2],b[3],b[4],0,7);cx.fill()}
    cx.fillStyle=zmx(c,.26);cx.globalAlpha=.45;for(const b of[[-6.4,-4,2.4,1.5,.2],[1.4,2.4,2.6,1.6,-.6],[-2,9,2.2,1.4,.4],[5,-9,2,1.2,0]]){cx.beginPath();cx.ellipse(b[0],b[1],b[2],b[3],b[4],0,7);cx.fill()}cx.globalAlpha=1}
   cx.restore()}
  const vg=cx.createLinearGradient(-4.6,0,6.4,0);vg.addColorStop(0,zmx(K[0],.2));vg.addColorStop(.5,K[0]);vg.addColorStop(1,zmx(K[0],-.34));
  cx.fillStyle=vg;rrect(-4.6,-9.8+br*.3,11,19.6,3.4);cx.fill();cx.strokeStyle='rgba(0,0,0,.55)';cx.lineWidth=1;cx.stroke();
  cx.fillStyle='rgba(255,255,255,.1)';cx.fillRect(-3.6,-9.2+br*.3,2,18.4);
  if(hi){cx.strokeStyle='rgba(0,0,0,.2)';cx.lineWidth=.6;cx.beginPath();for(let yy=-8;yy<=8;yy+=2){cx.moveTo(-3.8,yy+br*.3);cx.lineTo(5.8,yy+br*.3)}cx.stroke();
   cx.strokeStyle='rgba(0,0,0,.4)';cx.lineWidth=.9;cx.beginPath();cx.moveTo(-1.6,-9.4+br*.3);cx.lineTo(-1.6,9.4+br*.3);cx.stroke()}
  for(const py of[-8.8,-3.6,2.4,7.4]){const ph2=py>0?3.9:4;cx.fillStyle='rgba(0,0,0,.52)';rrect(2.8,py+br*.3,3.8,ph2,.9);cx.fill();if(hi){cx.fillStyle='rgba(255,255,255,.16)';cx.fillRect(2.9,py+br*.3,3.6,.9);cx.fillStyle=K[0];cx.fillRect(3.2,py+br*.3+1.3,3,.6);cx.fillStyle='rgba(0,0,0,.4)';cx.fillRect(4.3,py+br*.3+ph2-1.3,1,1)}}
  if(hi){cx.fillStyle=K[1];cx.fillRect(-3.4,-1.6,2.6,3.2);cx.fillStyle='rgba(0,0,0,.28)';cx.fillRect(-3.4,1.6,2.6,.6);
   cx.strokeStyle='rgba(0,0,0,.45)';cx.lineWidth=1.5;cx.beginPath();cx.moveTo(-6,-9);cx.lineTo(1,-9.6);cx.moveTo(-6,9);cx.lineTo(1,9.6);cx.stroke();cx.strokeStyle='rgba(255,255,255,.1)';cx.lineWidth=.6;cx.beginPath();cx.moveTo(-6,-9.4);cx.lineTo(1,-10);cx.stroke();
   if(en&&kt!='E2'){cx.strokeStyle='rgba(0,0,0,.4)';cx.lineWidth=1.4;cx.beginPath();cx.moveTo(-6,-9);cx.lineTo(6,9);cx.stroke();cx.fillStyle='#d9a441';for(let i=0;i<5;i++)cx.fillRect(-4.6+i*2.3,-7.4+i*3.5,1.4,2)}
   else if(!en){cx.fillStyle='#4f5d2e';cx.beginPath();cx.arc(-1,8.6,1.8,0,7);cx.fill();cx.fillStyle='rgba(255,255,255,.2)';cx.beginPath();cx.arc(-1.6,8,.6,0,7);cx.fill();cx.fillStyle='#c9c9c0';cx.fillRect(-1.5,6.2,1,1);cx.fillStyle='#2b3438';cx.fillRect(-.4,-8.2+br*.3,1.8,3.6)}
   if(kt=='S'){cx.fillStyle=K[1];for(let i=0;i<4;i++)cx.fillRect(-3.6+i*2.6,-9.6,1.5,1.2)}}}

 // brazos: una sola pieza con degradado, codo, puño y hombro fundido
 cx.lineCap='round';cx.lineJoin='round';
 {const A2=[[1,-10,lx+rk,ly+sy,-1],[1,10,14+rk,1.5+sy,1]];
  for(const[sx,sy0,hx,hy,sd2]of A2){const ex=(sx+hx)/2-1.5,ey=(sy0+hy)/2+sd2*3.6,PT=[[sx,sy0,3.6],[ex,ey,3],[hx,hy,2.1]],LL=[],RR=[];
   for(let q=0;q<3;q++){const pa=PT[Math.max(0,q-1)],pb=PT[Math.min(2,q+1)],dx=pb[0]-pa[0],dy=pb[1]-pa[1],dd=Math.hypot(dx,dy)||1,nx=-dy/dd,ny=dx/dd;LL.push([PT[q][0]+nx*PT[q][2],PT[q][1]+ny*PT[q][2]]);RR.push([PT[q][0]-nx*PT[q][2],PT[q][1]-ny*PT[q][2]])}
   cx.beginPath();cx.moveTo(LL[0][0],LL[0][1]);cx.quadraticCurveTo(LL[1][0],LL[1][1],LL[2][0],LL[2][1]);cx.lineTo(RR[2][0],RR[2][1]);cx.quadraticCurveTo(RR[1][0],RR[1][1],RR[0][0],RR[0][1]);cx.closePath();cx.fillStyle=tc;cx.fill();
   if(!fl){const g1=cx.createLinearGradient(sx,sy0,hx,hy);g1.addColorStop(0,'rgba(0,0,0,.30)');g1.addColorStop(.5,'rgba(0,0,0,.05)');g1.addColorStop(1,'rgba(0,0,0,.22)');cx.fillStyle=g1;cx.fill();
    cx.strokeStyle='rgba(255,255,255,.15)';cx.lineWidth=.9;cx.beginPath();cx.moveTo(LL[0][0],LL[0][1]);cx.quadraticCurveTo(LL[1][0],LL[1][1],LL[2][0],LL[2][1]);cx.stroke();
    cx.strokeStyle='rgba(0,0,0,.3)';cx.lineWidth=.9;cx.beginPath();cx.moveTo(ex-.8,ey-2.8);cx.lineTo(ex-.8,ey+2.8);cx.stroke();
    {const an=Math.atan2(hy-ey,hx-ex);cx.save();cx.translate(hx,hy);cx.rotate(an);cx.fillStyle='rgba(0,0,0,.38)';cx.fillRect(-6.2,-2.6,2.4,5.2);cx.restore()}
    cx.strokeStyle=gv;cx.lineWidth=3.4;cx.beginPath();cx.moveTo(ex+(hx-ex)*.82,ey+(hy-ey)*.82);cx.lineTo(hx,hy);cx.stroke();
    if(hi){cx.fillStyle=K[0];cx.beginPath();cx.arc(ex,ey,2.5,0,7);cx.fill();cx.strokeStyle='rgba(0,0,0,.5)';cx.lineWidth=.8;cx.stroke();cx.fillStyle='rgba(255,255,255,.18)';cx.beginPath();cx.arc(ex-.6,ey-.6,1,0,7);cx.fill();
     if(sd2<0){const mx=sx+(ex-sx)*.45,my=sy0+(ey-sy0)*.45;cx.save();cx.translate(mx,my);cx.rotate(Math.atan2(ey-sy0,ex-sx));cx.fillStyle=K[1];cx.fillRect(-1.3,-3,2.6,6);cx.restore()}}}}}
 for(const sg of[-1,1]){const yy=sg*9.8,g2=cx.createRadialGradient(.5,yy,.8,.5,yy,6.4);g2.addColorStop(0,tc);g2.addColorStop(.62,tc);g2.addColorStop(1,fl?'rgba(255,255,255,0)':c+'00');cx.fillStyle=g2;cx.beginPath();cx.ellipse(.5,yy,6.4,5.2,0,0,7);cx.fill();
  if(!fl){const g3=cx.createRadialGradient(-.5,yy-sg*1.2,.4,.5,yy,6);g3.addColorStop(0,'rgba(255,255,255,.14)');g3.addColorStop(.6,'rgba(0,0,0,0)');g3.addColorStop(1,'rgba(0,0,0,.2)');cx.fillStyle=g3;cx.beginPath();cx.ellipse(.5,yy,6,4.9,0,0,7);cx.fill()}}
 if(hi){cx.fillStyle=K[1];cx.globalAlpha=en?.85:1;cx.fillRect(-1.6,-12.6,3.2,2.2);cx.globalAlpha=1;cx.fillStyle='rgba(255,255,255,.2)';cx.fillRect(-1.6,9.4,3.2,1)}
 // arma
 {const wy0=-L[2]/2+sy,wl=L[1]-L[0];
  cx.fillStyle='rgba(0,0,0,.3)';cx.fillRect(L[0]+rk+.9,wy0+1.3,wl,L[2]);
  if(fl)cx.fillStyle='#2b3438';else{const wg=cx.createLinearGradient(0,wy0,0,wy0+L[2]);wg.addColorStop(0,'#69726e');wg.addColorStop(.4,'#2f383c');wg.addColorStop(1,'#12171a');cx.fillStyle=wg}
  cx.fillRect(L[0]+rk,wy0,wl,L[2]);
  if(!fl){cx.fillStyle='rgba(255,255,255,.2)';cx.fillRect(L[0]+rk,wy0,wl,.9);
   if(hi){cx.fillStyle='rgba(0,0,0,.55)';for(let x=L[0]+5;x<L[1]-9;x+=2.1)cx.fillRect(x+rk,wy0-.5,.9,.9);cx.fillStyle='rgba(0,0,0,.4)';cx.fillRect(L[0]+wl*.34+rk,wy0,.8,L[2]);cx.fillRect(L[0]+wl*.62+rk,wy0,.8,L[2])}}
  if(g){const wd=g==1;if(fl)cx.fillStyle='#6b4a2f';else{const sg=cx.createLinearGradient(0,-2.4+sy,0,2.4+sy);if(wd){sg.addColorStop(0,'#9a6e46');sg.addColorStop(1,'#4e341f')}else{sg.addColorStop(0,'#3a4246');sg.addColorStop(1,'#14181a')}cx.fillStyle=sg}cx.fillRect(L[0]-1+rk,-2.4+sy,9,4.8);
   if(wd&&hi){cx.strokeStyle='rgba(40,24,10,.5)';cx.lineWidth=.6;cx.beginPath();cx.moveTo(L[0]+rk,-1+sy);cx.lineTo(L[0]+7+rk,-1.2+sy);cx.moveTo(L[0]+rk,.8+sy);cx.lineTo(L[0]+7+rk,1+sy);cx.stroke()}}
  cx.fillStyle='#0d1113';cx.fillRect(L[1]-6+rk,-1.2+sy,6,2.4);
  if(hi){cx.fillStyle='rgba(255,255,255,.12)';cx.fillRect(L[1]-6+rk,-1.2+sy,6,.6);cx.fillStyle='#050708';cx.fillRect(L[1]-3.4+rk,-1.5+sy,.8,3);cx.fillRect(L[1]-1.8+rk,-1.5+sy,.8,3);
   if(g==2||g==1){cx.fillStyle='#1b2023';cx.fillRect(L[0]+(L[1]-L[0])*.42+rk,L[2]/2-.3+sy,4.2,3.8);cx.fillStyle='rgba(255,255,255,.1)';cx.fillRect(L[0]+(L[1]-L[0])*.42+rk,L[2]/2-.3+sy,4.2,.7)}
   if(g==2&&ro!='sn'){cx.fillStyle='#10161a';cx.fillRect(L[0]+10+rk,-1.9+sy,7.4,3.8);cx.strokeStyle='rgba(120,130,130,.4)';cx.lineWidth=.6;cx.strokeRect(L[0]+10+rk,-1.9+sy,7.4,3.8);cx.fillStyle=en?'#ff6b6b':'#8fd3ff';cx.fillRect(L[0]+16.2+rk,-1.3+sy,1.2,2.6);cx.fillStyle='rgba(255,255,255,.35)';cx.fillRect(L[0]+16.4+rk,-1+sy,.5,1)}
   if(g==3){cx.fillStyle='#d9a441';cx.fillRect(L[1]-12+rk,-L[2]/2+sy,2,L[2]);cx.fillRect(L[1]-22+rk,-L[2]/2+sy,2,L[2]);cx.fillStyle='rgba(255,255,255,.25)';cx.fillRect(L[1]-12+rk,-L[2]/2+sy,2,.8);cx.fillRect(L[1]-22+rk,-L[2]/2+sy,2,.8)}}}

 // cabeza / casco
 const hr=kt=='E2'?7.6:6.8;
 if(hi&&en&&kt!='E2'&&kt!='E3'){const fw=FWO!=null?FWO:Math.sin(T0*9+x)*1.4*mv;cx.fillStyle=K[1];cx.beginPath();cx.moveTo(-5,-1.6);cx.lineTo(-12.5-mv*3,-3.2+fw);cx.lineTo(-10,0+fw*.4);cx.lineTo(-12.5-mv*3,3.4+fw);cx.lineTo(-5,1.6);cx.fill()}
 if(hi&&!en){cx.fillStyle='rgba(0,0,0,.4)';cx.beginPath();cx.arc(-1.2,-6.6+br*.3,1.9,0,7);cx.arc(-1.2,6.6+br*.3,1.9,0,7);cx.fill()}
 cx.save();if(hi&&!fl){cx.fillStyle='rgba(0,0,0,.24)';cx.beginPath();cx.arc(.9,br*.3+1.3,hr+.5,0,7);cx.fill()}
 {const hg=cx.createRadialGradient(-2.2,br*.3-2.6,.6,0,br*.3,hr);hg.addColorStop(0,fl?'#fff':zmx(h,.4));hg.addColorStop(.55,fl?'#fff':h);hg.addColorStop(1,fl?'#fff':zmx(h,-.5));cx.fillStyle=hg;cx.beginPath();cx.arc(0,br*.3,hr,0,7);cx.fill()}
 cx.restore();
 if(!fl){cx.strokeStyle='rgba(0,0,0,.55)';cx.lineWidth=1.3;cx.beginPath();cx.arc(0,br*.3,hr,0,7);cx.stroke();
  if(hi){cx.save();cx.beginPath();cx.arc(0,br*.3,hr-.3,0,7);cx.clip();
   if(!en){cx.globalAlpha=.5;cx.fillStyle=zmx(h,-.46);for(const q of[[-3,2.2,2.4],[1.8,-3.6,2.1],[-1,-1.2,1.7],[3.2,3,2.2],[-4.4,-3,1.8],[0,5,1.7]]){cx.beginPath();cx.ellipse(q[0],q[1]+br*.3,q[2],q[2]*.62,q[0],0,7);cx.fill()}cx.fillStyle=zmx(h,.3);cx.globalAlpha=.4;for(const q of[[-2,-4.2,1.4],[2.6,.4,1.5],[-3.4,3.6,1.3]]){cx.beginPath();cx.ellipse(q[0],q[1]+br*.3,q[2],q[2]*.6,q[0],0,7);cx.fill()}cx.globalAlpha=1;
    cx.strokeStyle='rgba(20,20,14,.4)';cx.lineWidth=.6;cx.beginPath();for(let a=0;a<6;a++){const an=a*1.047+.3;cx.moveTo(0,br*.3);cx.lineTo(Math.cos(an)*hr,Math.sin(an)*hr+br*.3)}cx.stroke()}
   cx.strokeStyle='rgba(12,12,8,.6)';cx.lineWidth=1;cx.beginPath();cx.arc(0,br*.3,hr-1.7,0,7);cx.stroke();cx.restore();
   cx.fillStyle='rgba(255,255,255,.3)';cx.beginPath();cx.ellipse(-2.4,br*.3-2.8,2.3,1.2,-.5,0,7);cx.fill();
   cx.fillStyle='#14181a';rrect(hr-2.6,-1.5+br*.3,2.8,3,.8);cx.fill();cx.fillStyle='rgba(255,255,255,.2)';cx.fillRect(hr-2.4,-1.5+br*.3,2.4,.6);
   cx.strokeStyle='rgba(255,255,255,.14)';cx.lineWidth=1;cx.beginPath();cx.arc(0,br*.3,hr-1.6,2.2,5.3);cx.stroke()}
  if(kt=='P'){cx.fillStyle='#10161a';rrect(4.6,-2.6+br*.3,3,5.2,1);cx.fill();cx.fillStyle='#7dff8a';cx.beginPath();cx.arc(7,-1.1+br*.3,.9,0,7);cx.arc(7,1.1+br*.3,.9,0,7);cx.fill();cx.strokeStyle='#10161a';cx.lineWidth=.9;cx.beginPath();cx.moveTo(-1.2,6.6+br*.3);cx.lineTo(4.2,5.2+br*.3);cx.stroke();cx.fillStyle=K[1];cx.fillRect(-.6,-hr+br*.3,1.2,2)}
  else if(kt=='A'){cx.fillStyle='rgba(15,25,30,.9)';cx.fillRect(3.2,-3.8+br*.3,2.8,7.6);cx.fillStyle='#8fd3ff';cx.fillRect(4.4,-3+br*.3,1.1,6)}
  else if(kt=='S'){cx.fillStyle='rgba(130,210,200,.6)';rrect(3,-4.6+br*.3,3.6,9.2,1.4);cx.fill();cx.strokeStyle='#0e211f';cx.lineWidth=.9;cx.stroke();cx.fillStyle=K[1];cx.fillRect(-4,-1+br*.3,6,2)}
  else if(kt=='E0'){cx.fillStyle='rgba(12,10,10,.92)';cx.fillRect(2.6,-3.4+br*.3,4,6.8);cx.fillStyle=K[1];cx.fillRect(4.2,-2.2+br*.3,1.4,1);cx.fillRect(4.2,1.2+br*.3,1.4,1)}
  else if(kt=='E1'){cx.fillStyle='rgba(0,0,0,.55)';cx.beginPath();cx.ellipse(5.6,br*.3,3,5.4,0,-1.57,1.57);cx.fill();cx.strokeStyle=K[1];cx.lineWidth=1.4;cx.beginPath();cx.arc(0,br*.3,hr-1.2,-1.4,1.4);cx.stroke()}
  else if(kt=='E2'){cx.fillStyle='rgba(10,8,14,.94)';cx.fillRect(1.8,-4.8+br*.3,5.4,9.6);cx.fillStyle=K[1];cx.fillRect(4.6,-3.6+br*.3,1.5,7.2);cx.strokeStyle='rgba(0,0,0,.55)';cx.lineWidth=2;cx.beginPath();cx.moveTo(-6,br*.3);cx.lineTo(1,br*.3);cx.stroke()}
  else if(kt=='E3'){cx.fillStyle='rgba(255,170,90,.5)';rrect(3,-4.8+br*.3,3.8,9.6,1.4);cx.fill();cx.strokeStyle=K[1];cx.lineWidth=1.5;cx.beginPath();cx.moveTo(-5,-3+br*.3);cx.lineTo(0,br*.3);cx.lineTo(-5,3+br*.3);cx.stroke()}}
 cx.fillStyle='rgba(255,255,255,.25)';cx.beginPath();cx.arc(-1,-2+br*.3,2.4,0,7);cx.fill();
 if(sd){cx.lineWidth=5;cx.strokeStyle='#cfe3ea';cx.beginPath();cx.arc(0,0,19,-1.05,1.05);cx.stroke();cx.lineWidth=2;cx.strokeStyle='#5d7a86';cx.beginPath();cx.arc(0,0,21.5,-1.05,1.05);cx.stroke();if(hi){cx.strokeStyle=K[1];cx.lineWidth=1.2;cx.beginPath();cx.arc(0,0,19,-.2,.2);cx.stroke()}}
 if(ro&&!fl){
  if(ro=='md'){cx.fillStyle='#f2efe6';cx.fillRect(-16,-6.5,7,13);cx.fillStyle='#e5484d';cx.fillRect(-14.4,-1,4,2);cx.fillRect(-13.4,-2.7,2,5.4);cx.fillRect(-.9,-3.2+br*.3,1.8,6.4);cx.fillRect(-3.2,-.9+br*.3,6.4,1.8)}
  else if(ro=='sn'){cx.fillStyle='#1d2224';cx.fillRect(L[1]-6+rk,-1,12,2);cx.fillStyle='#10161a';cx.fillRect(L[0]+9+rk,-4.6+sy,10,2.8);cx.fillStyle='#8fd3ff';cx.fillRect(L[0]+18+rk,-4+sy,1.6,1.8);for(let i=0;i<9;i++){const q=i*.7;cx.fillStyle=i%2?'#4a5d2e':'#6b7f3d';cx.beginPath();cx.arc(Math.cos(q)*5.8,Math.sin(q)*5.8+br*.3,2.3,0,7);cx.fill()}}
  else if(ro=='mg'){cx.strokeStyle='#6b4a2f';cx.lineWidth=2.4;cx.beginPath();cx.moveTo(-5,-9);cx.lineTo(5,9);cx.stroke();cx.fillStyle='#d9a441';for(let i=0;i<5;i++)cx.fillRect(-4+i*2.1,-7.5+i*3.6,1.7,2.4);cx.fillStyle='#3d474c';cx.beginPath();cx.arc(L[0]+10+rk,5.5+sy,3.6,0,7);cx.fill();cx.strokeStyle='#2b3438';cx.lineWidth=1.3;cx.beginPath();cx.moveTo(L[1]-8+rk,sy);cx.lineTo(L[1]-3+rk,-4.8+sy);cx.moveTo(L[1]-8+rk,sy);cx.lineTo(L[1]-3+rk,4.8+sy);cx.stroke()}}
 cx.restore()}
var AQe=1/60,AQt=0;
function autoQ(rw){if(S!='play'||CD>0||(typeof MP!='undefined'&&MP.role==='guest'&&performance.now()-(MP.t1||performance.now())<12000)){AQt=0;return}AQe+=(Math.min(rw,.2)-AQe)*.05;AQt+=rw;if(AQt<4)return;AQt=0;if(AQe>1/36&&SET.q>0){SET.q--;SPC.clear();sv();rs();AQe=1/60;zm='Calidad reducida para ir más fluido';zt=3;try{stl()}catch(e){}}}
function mkSp(s,R,c,h,sd,fl,g,ph,mv,rc,rl,ro,kt,br,fw){const w=Math.ceil(65*s*R)+2,hh=Math.ceil(50*s*R)+2,c2=document.createElement('canvas');c2.width=w;c2.height=hh;const old=cx,ox=27*s*R+1,oy=25*s*R+1;
 cx=c2.getContext('2d');cx.setTransform(R,0,0,R,ox,oy);NOSH=1;BRO=br;FWO=fw;
 try{manRaw(0,0,0,c,h,s,sd,fl,g,ph,mv,rc,rl,ro,kt)}finally{cx=old;NOSH=0;BRO=null;FWO=null}
 return{c:c2,ox:ox/R,oy:oy/R,w:w/R,h:hh/R}}
function man(x,y,a,c,h,s,sd,fl,g,ph,mv,rc,rl,ro,kt){g=g||0;ph=ph||0;mv=mv||0;rc=rc||0;kt=KS[kt]?kt:'A';
 const R=Math.max(1,Math.min(2,cv.width/W)),en=kt[0]=='E',mq=mv<.06?0:Math.round(mv*3)/3,swq=mq?Math.round(Math.sin(ph)*3)/3:0,brq=mq?0:Math.round(Math.sin(T0*2.6+x*.05)*2)/4,rq=rc<.08?0:Math.round(rc*3)/3,fwq=(en&&kt!='E2'&&kt!='E3'&&mq)?Math.round(Math.sin(T0*9+x)*2)/2:0,
  key=[c,h,s,sd?1:0,fl?1:0,g,ro||'',kt,mq,swq,brq,rq,rl?1:0,fwq,SET.q>0?1:0,R.toFixed(2)].join('|');
 let sp=SPC.get(key);
 if(sp){SPC.delete(key);SPC.set(key,sp)}
 else{if(SPn>=4){manRaw(x,y,a,c,h,s,sd,fl,g,ph,mv,rc,rl,ro,kt);return}SPn++;sp=mkSp(s,R,c,h,sd,fl,g,Math.asin(swq),mq,rq,rl,ro,kt,brq,fwq*1.4*mq);SPC.set(key,sp);if(SPC.size>360)SPC.delete(SPC.keys().next().value)}
 cx.save();cx.translate(x,y);cx.rotate(a);
 if(SET.q){const q=shd(a,1);cx.fillStyle='rgba(0,0,0,'+.28*SHk+')';cx.beginPath();cx.ellipse(q[0],q[1],10*s,14*s,0,0,7);cx.fill()}
 cx.drawImage(sp.c,-sp.ox,-sp.oy,sp.w,sp.h);cx.restore()}
function limb(P,w,c){cx.lineCap='round';cx.lineJoin='round';cx.lineWidth=w;cx.strokeStyle=c;cx.beginPath();cx.moveTo(P[0],P[1]);for(let i=2;i<P.length;i+=2)cx.lineTo(P[i],P[i+1]);cx.stroke()}
function corpse(b){if(off(b,70))return;const v=b.cw?0:b.v||0,sw=b.cw?Math.sin(b.wp):0,u='rgba(0,0,0,.38)';cx.save();cx.translate(b.x,b.y);cx.rotate(b.a);cx.scale(b.s,b.s);cx.globalAlpha=b.cw?1:Math.min(.92,b.t/2);
 cx.fillStyle='rgba(0,0,0,.3)';cx.beginPath();cx.ellipse(-2,3,22,13,0,0,7);cx.fill();cx.fillStyle='rgba(70,22,22,.45)';cx.beginPath();cx.ellipse(1,2,13,9.5,.3,0,7);cx.fill();
 const LG=b.cw?[[-8,-3,-20-3*sw,-8,-30-4*sw,-5],[-8,3,-20+3*sw,8,-30+4*sw,6]]:v==2?[[-8,-3,-18,-8,-25,-3],[-8,4,-17,10,-27,8]]:v==1?[[-8,-3,-22,-6,-32,-5],[-8,3,-21,5,-31,9]]:[[-8,-3,-23,-9,-33,-7],[-8,3,-22,8,-31,12]];
 for(const L of LG){limb(L,6.6,b.c);limb(L,6.6,u);cx.fillStyle='#16191b';cx.beginPath();cx.ellipse(L[4],L[5],4.2,3.3,Math.atan2(L[5]-L[3],L[4]-L[2]),0,7);cx.fill()}
 cx.save();cx.translate(v==1?-2:6,v==0?-18:17);if(b.cw)cx.scale(0,0);cx.rotate(v==1?-.15:.35);cx.fillStyle='#6b4a2f';cx.fillRect(-16,-2.8,13,5.6);cx.fillStyle='#2b3438';cx.fillRect(-4,-2.2,32,4.4);cx.fillStyle='rgba(255,255,255,.2)';cx.fillRect(-4,-2.2,32,1.1);cx.fillStyle='#0d1113';cx.fillRect(22,-1.3,6,2.6);cx.restore();
 cx.fillStyle=b.c;cx.beginPath();cx.ellipse(0,0,12.5,9,0,0,7);cx.fill();cx.fillStyle=u;cx.fill();
 if(v==0){cx.fillStyle=b.c;cx.fillRect(-10,-6.5,13,13);cx.fillStyle=u;cx.fillRect(-10,-6.5,13,13);cx.fillStyle='rgba(255,255,255,.14)';cx.fillRect(-10,-6.5,13,2.5);cx.strokeStyle='rgba(0,0,0,.4)';cx.lineWidth=1;cx.strokeRect(-10,-6.5,13,13)}
 else{cx.fillStyle='rgba(0,0,0,.3)';cx.beginPath();cx.ellipse(1,0,8,6.5,0,0,7);cx.fill();cx.fillStyle='rgba(0,0,0,.5)';cx.fillRect(3,-6,3.5,4.5);cx.fillRect(3,1.5,3.5,4.5);cx.strokeStyle='rgba(0,0,0,.4)';cx.lineWidth=1.4;cx.beginPath();cx.moveTo(-6,-6);cx.lineTo(6,6);cx.stroke()}
 const AR=b.cw?[[6,-7,14+4*sw,-10,21+5*sw,-6],[6,7,14-4*sw,10,21-5*sw,6]]:v==0?[[6,-7,13,-12,19,-8],[6,7,13,11,19,8]]:v==1?[[5,-8,14,-14,22,-10],[5,7,4,12,-2,10]]:[[5,-8,0,-17,-8,-20],[5,8,13,14,20,12]];
 for(const L of AR){limb(L,5,b.c);limb(L,5,u);cx.fillStyle='#e8c7a4';cx.beginPath();cx.arc(L[4],L[5],2.5,0,7);cx.fill();cx.fillStyle='rgba(0,0,0,.2)';cx.fill()}
 const hy=v==2?-1.5:0;if(v){cx.fillStyle='#d9b08c';cx.beginPath();cx.arc(15.5,hy,5.6,0,7);cx.fill();cx.fillStyle='rgba(0,0,0,.2)';cx.fill()}
 cx.fillStyle=b.h;cx.beginPath();cx.arc(v?12.5:13.5,hy,6.6,0,7);cx.fill();cx.fillStyle='rgba(0,0,0,.25)';cx.fill();cx.strokeStyle='rgba(0,0,0,.45)';cx.lineWidth=1.3;cx.stroke();cx.fillStyle='rgba(255,255,255,.18)';cx.beginPath();cx.arc(v?11.5:12.5,hy-2,2.4,0,7);cx.fill();
 cx.restore()}
function tank(a,k,s){s=s||1;mot(a);trk(a,16*s,'#0c0b09');if(typeof tankSpr=='function'&&tankSpr(a,k,s))return;if(S=='play'&&a.mv>.4&&Math.random()<.18)puff(a.x-Math.cos(a.a)*28*s+(Math.random()-.5)*8,a.y-Math.sin(a.a)*28*s+(Math.random()-.5)*8,'#9a8b72',6*s,.8,-Math.cos(a.a)*20,-Math.sin(a.a)*20,1.6,.5);
 const f=a.f>0,o=(a.wp*11)%8,P=k?{h:'#7b6249',h2:'#5f4b39',ac:'#ff6a4a',cm:['#43331f','#a08a62']}:{h:'#5d6b49',h2:'#485438',ac:'#6cb0ff',cm:['#33402a','#86946a']},hi=!f&&SET.q>0;
 cx.save();cx.translate(a.x,a.y);cx.rotate(a.a);cx.scale(s,s);
 if(SET.q){const q=shd(a.a,s);cx.fillStyle='rgba(0,0,0,'+.3*SHk+')';cx.fillRect(-25+q[0],-15+q[1],50,30)}
 for(const y of[-21,12]){cx.fillStyle=f?'#fff':'#15130e';cx.fillRect(-27,y,54,9);
  if(!f){cx.fillStyle='#2b261b';for(let x=-27+o;x<25;x+=4)cx.fillRect(x,y+.6,2.2,7.8);cx.fillStyle='rgba(255,255,255,.07)';cx.fillRect(-27,y,54,1.2);cx.fillStyle='rgba(0,0,0,.35)';cx.fillRect(-27,y+7.8,54,1.2);
   for(let x=-21;x<=21;x+=7.5){cx.fillStyle='#0b0a07';cx.beginPath();cx.arc(x,y+4.5,3.7,0,7);cx.fill();cx.fillStyle='#4d493a';cx.beginPath();cx.arc(x,y+4.5,2.2,0,7);cx.fill();cx.fillStyle='#15130e';cx.beginPath();cx.arc(x,y+4.5,.8,0,7);cx.fill()}
   cx.fillStyle='#0b0a07';cx.beginPath();cx.arc(-25,y+4.5,4.3,0,7);cx.arc(25,y+4.5,4.3,0,7);cx.fill()}}
 {const g=cx.createLinearGradient(0,-15,0,15);g.addColorStop(0,zmx(P.h,.22));g.addColorStop(.5,P.h);g.addColorStop(1,zmx(P.h,-.32));
  cx.beginPath();cx.moveTo(-25,-15);cx.lineTo(13,-15);cx.lineTo(25,-10);cx.lineTo(25,10);cx.lineTo(13,15);cx.lineTo(-25,15);cx.closePath();cx.fillStyle=f?'#fff':g;cx.fill();
  if(!f){zcamo(P,-25,-15,50,30);
   cx.beginPath();cx.moveTo(-25,-15);cx.lineTo(13,-15);cx.lineTo(25,-10);cx.lineTo(25,10);cx.lineTo(13,15);cx.lineTo(-25,15);cx.closePath();cx.strokeStyle='rgba(0,0,0,.55)';cx.lineWidth=1.2;cx.stroke();
   cx.strokeStyle='rgba(255,255,255,.2)';cx.lineWidth=1;cx.beginPath();cx.moveTo(-24,-14);cx.lineTo(13,-14);cx.lineTo(24,-9.5);cx.stroke();
   cx.strokeStyle='rgba(0,0,0,.4)';cx.lineWidth=.9;cx.beginPath();cx.moveTo(13,-15);cx.lineTo(13,15);cx.moveTo(-9,-11);cx.lineTo(-9,11);cx.stroke();
   cx.fillStyle='rgba(0,0,0,.45)';for(let i=0;i<6;i++)cx.fillRect(-23+i*2.4,-10,1.3,20);
   cx.fillStyle='#1b1c18';cx.beginPath();cx.arc(-26,-8,2.4,0,7);cx.arc(-26,8,2.4,0,7);cx.fill();cx.fillStyle='rgba(255,255,255,.25)';cx.fillRect(-27,-9,1.2,1);
   cx.fillStyle=P.h2;cx.fillRect(-4,-15.8,9,3);cx.fillRect(-4,12.8,9,3);cx.strokeStyle='rgba(0,0,0,.5)';cx.lineWidth=.8;cx.strokeRect(-4,-15.8,9,3);cx.strokeRect(-4,12.8,9,3);
   cx.fillStyle='rgba(20,20,16,.9)';cx.beginPath();cx.arc(19,-3.5,2.6,0,7);cx.fill();cx.strokeStyle='rgba(200,200,180,.4)';cx.lineWidth=.8;cx.stroke();
   cx.fillStyle=P.ac;cx.beginPath();cx.moveTo(-23,-3);cx.lineTo(-17,0);cx.lineTo(-23,3);cx.closePath();cx.fill();
   cx.fillStyle='rgba(60,45,28,.25)';cx.fillRect(-25,12,50,3);cx.fillRect(-25,-15,50,2)}}
 cx.restore();cx.save();cx.translate(a.x,a.y);cx.rotate(a.ta);cx.scale(s,s);
 {const rk=(a.kk||0)*5;
  cx.fillStyle='rgba(0,0,0,.25)';cx.fillRect(3-rk,-2.4,35,6);
  const bg=cx.createLinearGradient(0,-3,0,3);bg.addColorStop(0,'#59605a');bg.addColorStop(.45,'#2a2f2c');bg.addColorStop(1,'#101312');cx.fillStyle=f?'#fff':bg;cx.fillRect(2-rk,-3,34,6);
  if(!f){cx.fillStyle='#2a2f2c';cx.fillRect(22-rk,-4.4,6,8.8);cx.strokeStyle='rgba(0,0,0,.6)';cx.lineWidth=.8;cx.strokeRect(22-rk,-4.4,6,8.8);cx.fillStyle='#111';cx.fillRect(35-rk,-4.4,5.5,8.8);cx.fillStyle='#000';cx.fillRect(37-rk,-4.4,1,8.8);cx.fillRect(39-rk,-4.4,1,8.8);cx.fillStyle='#0a0a0a';cx.fillRect(40-rk,-1.6,1.4,3.2)}
  const tg=cx.createLinearGradient(-14,-12,12,12);tg.addColorStop(0,zmx(P.h2,.18));tg.addColorStop(.6,P.h2);tg.addColorStop(1,zmx(P.h2,-.35));
  cx.beginPath();cx.moveTo(-12,-10);cx.lineTo(4,-12.5);cx.lineTo(12,-7);cx.lineTo(14,0);cx.lineTo(12,7);cx.lineTo(4,12.5);cx.lineTo(-12,10);cx.lineTo(-15,0);cx.closePath();cx.fillStyle=f?'#fff':tg;cx.fill();
  if(!f){cx.save();cx.clip();zcamo(P,-16,-13,32,26);cx.restore();cx.strokeStyle='rgba(0,0,0,.6)';cx.lineWidth=1.2;cx.beginPath();cx.moveTo(-12,-10);cx.lineTo(4,-12.5);cx.lineTo(12,-7);cx.lineTo(14,0);cx.lineTo(12,7);cx.lineTo(4,12.5);cx.lineTo(-12,10);cx.lineTo(-15,0);cx.closePath();cx.stroke();
   cx.strokeStyle='rgba(255,255,255,.18)';cx.lineWidth=1;cx.beginPath();cx.moveTo(-11,-9);cx.lineTo(4,-11.4);cx.lineTo(11,-6.6);cx.stroke();
   cx.fillStyle='#1d201c';cx.beginPath();cx.arc(-4,-5,4,0,7);cx.fill();cx.strokeStyle='rgba(200,205,190,.45)';cx.lineWidth=1;cx.stroke();cx.fillStyle='rgba(255,255,255,.22)';cx.beginPath();cx.arc(-5,-6,1.2,0,7);cx.fill();
   rrect(-8,2,8,6,1.5);cx.fillStyle='#262a25';cx.fill();cx.strokeStyle='rgba(200,205,190,.35)';cx.lineWidth=.8;cx.stroke();
   cx.fillStyle='#2b312b';for(let i=0;i<3;i++)cx.fillRect(7,-11+i*2.4,2.2,1.6);
   cx.strokeStyle='#14170f';cx.lineWidth=1;cx.beginPath();cx.moveTo(-10,9);cx.quadraticCurveTo(-18,8,-23,14);cx.stroke();cx.fillStyle='#14170f';cx.beginPath();cx.arc(-10,9,1.3,0,7);cx.fill();
   cx.strokeStyle='rgba(30,26,18,.5)';cx.lineWidth=1;cx.strokeRect(-14,-9,6,18)}}
 cx.restore()}
function whl(o,f,x0,y0){for(const wx of[x0,x0+25])for(const wy of[-15,10]){rrect(wx,wy,9,6,1.6);cx.fillStyle=f?'#fff':'#17160f';cx.fill();if(!f){cx.fillStyle='#34322a';for(let i=0;i<3;i++)cx.fillRect(wx+((o+i*3)%9),wy,1.3,6);cx.fillStyle='rgba(255,255,255,.1)';cx.fillRect(wx+1,wy,7,1);cx.fillStyle='rgba(60,46,28,.35)';cx.fillRect(wx,wy+(wy<0?4:0),9,2)}}}
function truck(a,k){mot(a);trk(a,12,'#0c0b09');if(S=='play'&&a.mv>.4&&Math.random()<.14)puff(a.x-Math.cos(a.a)*26+(Math.random()-.5)*8,a.y-Math.sin(a.a)*26+(Math.random()-.5)*8,'#9a8b72',5,.7,-Math.cos(a.a)*25,-Math.sin(a.a)*25,1.6,.45);
 if(typeof carDraw=='function'&&carDraw(a,k))return;
 const f=a.f>0,C=k?{t:'#85653f',c:'#5e4528',ac:'#ff6a4a'}:{t:'#5b6945',c:'#46532f',ac:'#6cb0ff'};
 cx.save();cx.translate(a.x,a.y);cx.rotate(a.a);if(SET.q){const q=shd(a.a,1);cx.fillStyle='rgba(0,0,0,'+.28*SHk+')';cx.fillRect(-23+q[0],-12+q[1],46,24)}whl((a.wp*11)%6,f,-15,0);
 {const g=cx.createLinearGradient(0,-12,0,12);g.addColorStop(0,zmx(C.t,.2));g.addColorStop(.5,C.t);g.addColorStop(1,zmx(C.t,-.3));rrect(-23,-12,29,24,3);cx.fillStyle=f?'#fff':g;cx.fill();
  if(!f){cx.strokeStyle='rgba(0,0,0,.5)';cx.lineWidth=1.1;cx.stroke();cx.save();rrect(-23,-12,29,24,3);cx.clip();cx.strokeStyle='rgba(0,0,0,.3)';cx.lineWidth=1.3;for(let x=-19;x<6;x+=6){cx.beginPath();cx.moveTo(x,-12);cx.quadraticCurveTo(x+1.6,0,x,12);cx.stroke()}
   cx.strokeStyle='rgba(255,255,255,.16)';cx.lineWidth=1;for(let x=-18;x<6;x+=6){cx.beginPath();cx.moveTo(x+1.4,-12);cx.quadraticCurveTo(x+3,0,x+1.4,12);cx.stroke()}
   cx.strokeStyle='rgba(20,18,10,.45)';cx.lineWidth=.9;cx.beginPath();cx.moveTo(-23,-6);cx.lineTo(6,-6);cx.moveTo(-23,6);cx.lineTo(6,6);cx.stroke();cx.fillStyle='rgba(60,46,28,.25)';cx.fillRect(-23,8,29,4);cx.restore();
   cx.fillStyle='#2a2b24';cx.fillRect(-24,-12,2,24);cx.fillStyle='#d83a2a';cx.fillRect(-24.4,-10,1.6,2.6);cx.fillRect(-24.4,7.4,1.6,2.6);cx.fillStyle=C.ac;cx.fillRect(-8,-1.8,10,3.6)}}
 cx.fillStyle=f?'#fff':C.c;rrect(6,-12,17,24,2.5);cx.fill();
 if(!f){cx.strokeStyle='rgba(0,0,0,.5)';cx.lineWidth=1.1;cx.stroke();const rg=cx.createLinearGradient(6,0,23,0);rg.addColorStop(0,'rgba(255,255,255,.12)');rg.addColorStop(1,'rgba(0,0,0,.2)');cx.fillStyle=rg;cx.fill();
  cx.fillStyle='rgba(0,0,0,.25)';cx.fillRect(7.5,-10,5,20);cx.strokeStyle='rgba(0,0,0,.35)';cx.lineWidth=.8;cx.beginPath();cx.moveTo(14,-12);cx.lineTo(14,12);cx.moveTo(14,-9);cx.lineTo(23,-9);cx.moveTo(14,9);cx.lineTo(23,9);cx.stroke();
  const gg=cx.createLinearGradient(14,-9,20,9);gg.addColorStop(0,'rgba(190,225,240,.95)');gg.addColorStop(1,'rgba(70,110,130,.9)');cx.fillStyle=gg;cx.fillRect(15.5,-9,4.4,18);cx.fillStyle='rgba(255,255,255,.4)';cx.fillRect(16.4,-8,1,9);cx.strokeStyle='#14170f';cx.lineWidth=1;cx.strokeRect(15.5,-9,4.4,18);
  cx.fillStyle='#16160f';cx.fillRect(14.5,-14.6,4,2.6);cx.fillRect(14.5,12,4,2.6);cx.fillRect(23,-10,1.6,20);
  cx.fillStyle='rgba(255,243,176,.1)';cx.beginPath();cx.moveTo(24,-8);cx.lineTo(70,-22);cx.lineTo(70,-1);cx.moveTo(24,8);cx.lineTo(70,1);cx.lineTo(70,22);cx.fill();
  cx.fillStyle='#fff3b0';cx.beginPath();cx.arc(23,-8,2.5,0,7);cx.arc(23,8,2.5,0,7);cx.fill();cx.strokeStyle='rgba(0,0,0,.5)';cx.lineWidth=.8;cx.stroke()}
 cx.restore();cx.save();cx.translate(a.x,a.y);cx.rotate(a.ta);cx.fillStyle='rgba(0,0,0,.25)';cx.beginPath();cx.arc(-7,1,5.2,0,7);cx.fill();cx.fillStyle='#262c2e';cx.beginPath();cx.arc(-8,0,5,0,7);cx.fill();cx.strokeStyle='rgba(200,205,200,.35)';cx.lineWidth=1;cx.stroke();
 const gb=cx.createLinearGradient(0,-1.8,0,1.8);gb.addColorStop(0,'#5a625e');gb.addColorStop(1,'#14181a');cx.fillStyle=gb;cx.fillRect(-8,-1.8,24,3.6);cx.fillStyle='#3d474c';cx.fillRect(10,-5,3,10);cx.fillStyle='#0a0c0d';cx.fillRect(15,-2.4,2,4.8);cx.restore()}
function car(e){mot(e);trk(e,12,'#0c0b09');const f=e.f>0;cx.save();cx.translate(e.x,e.y);cx.rotate(e.a);if(SET.q){const q=shd(e.a,1);cx.fillStyle='rgba(0,0,0,'+.28*SHk+')';cx.fillRect(-21+q[0],-12+q[1],44,24)}whl((e.wp*11)%6,f,-14,0);
 {const g=cx.createLinearGradient(0,-12,0,12);g.addColorStop(0,'#d6b878');g.addColorStop(.5,'#b89a5c');g.addColorStop(1,'#7e6638');
  cx.beginPath();cx.moveTo(-21,-12);cx.lineTo(10,-12);cx.lineTo(23,-9);cx.lineTo(23,9);cx.lineTo(10,12);cx.lineTo(-21,12);cx.closePath();cx.fillStyle=f?'#fff':g;cx.fill();
  if(!f){cx.strokeStyle='rgba(0,0,0,.5)';cx.lineWidth=1.1;cx.stroke();cx.fillStyle='rgba(60,44,22,.28)';cx.beginPath();cx.ellipse(-8,6,13,5,0,0,7);cx.fill();cx.beginPath();cx.ellipse(8,-8,8,3,0,0,7);cx.fill();
   cx.strokeStyle='rgba(0,0,0,.35)';cx.lineWidth=.9;cx.beginPath();cx.moveTo(10,-12);cx.lineTo(10,12);cx.moveTo(13,-8);cx.lineTo(22,-7);cx.moveTo(13,8);cx.lineTo(22,7);cx.stroke();
   cx.strokeStyle='rgba(255,255,255,.18)';cx.beginPath();cx.moveTo(11,-11.5);cx.lineTo(22,-8.5);cx.stroke();
   const gg=cx.createLinearGradient(10,-9,14,9);gg.addColorStop(0,'rgba(190,225,240,.9)');gg.addColorStop(1,'rgba(70,110,130,.85)');cx.fillStyle=gg;cx.fillRect(10.5,-9,3.2,18);cx.strokeStyle='#241d10';cx.lineWidth=1.2;cx.strokeRect(10.5,-9,3.2,18);
   for(const y of[-7,2.5]){rrect(-14,y,7,4.8,1.4);cx.fillStyle='#2e2619';cx.fill();cx.fillStyle='rgba(255,255,255,.12)';cx.fillRect(-13.4,y+.6,5.6,1)}
   cx.strokeStyle='#2a2a26';cx.lineWidth=1.4;cx.beginPath();cx.moveTo(-3,-11);cx.lineTo(-3,11);cx.stroke();
   cx.fillStyle='#1a1a17';cx.beginPath();cx.arc(-23,0,6.4,0,7);cx.fill();cx.fillStyle='#4a4a44';cx.beginPath();cx.arc(-23,0,3.6,0,7);cx.fill();cx.fillStyle='#1a1a17';cx.beginPath();cx.arc(-23,0,1.4,0,7);cx.fill();cx.strokeStyle='rgba(255,255,255,.14)';cx.lineWidth=1;cx.beginPath();cx.arc(-23,0,5.6,3.6,5.6);cx.stroke();
   cx.fillStyle='#fff3b0';cx.beginPath();cx.arc(23,-8,2,0,7);cx.arc(23,8,2,0,7);cx.fill();cx.fillStyle='#2a2a26';cx.fillRect(23,-4,1.6,8)}}
 cx.fillStyle='rgba(0,0,0,.25)';cx.beginPath();cx.arc(-1,1,7.2,0,7);cx.fill();cx.fillStyle='#262c2e';cx.beginPath();cx.arc(-2,0,7,0,7);cx.fill();cx.strokeStyle='rgba(200,205,200,.3)';cx.lineWidth=1;cx.stroke();
 const gb=cx.createLinearGradient(0,-2,0,2);gb.addColorStop(0,'#5a625e');gb.addColorStop(1,'#14181a');cx.fillStyle=gb;cx.fillRect(-2,-2,26,4);cx.fillStyle='#0a0c0d';cx.fillRect(22,-2.4,2.4,4.8);cx.restore()}
function heli(a){if(S=='play'&&Math.random()<.6){const q=Math.random()*6.3;puff(a.x+Math.cos(q)*60,a.y+Math.sin(q)*60,'#8a8f91',9,.7,Math.cos(q)*60,Math.sin(q)*60,2,.8)}if(SET.q){cx.save();cx.translate(a.x+SH.x*1.8,a.y+SH.y*1.8);cx.rotate(a.a);heliShadow(cx,T0,.25);cx.restore()}
 cx.save();cx.translate(a.x,a.y);cx.rotate(a.a);heliBody(cx,a.f>0,0);heliRotor(cx,T0,'220,230,235',.09,.42);cx.restore()}
const PP=[[24,0],[6,-5],[-2,-30],[-9,-30],[-8,-5],[-20,-12],[-24,-12],[-20,0]];
function puff(x,y,c,s,l,vx,vy,gr,al){if(Q.length<900)Q.push({x,y,vx,vy,l,l0:l,c,s,gr,al})}
function plane(a,k){const pa=a.pa==null?a.a:a.pa,dA=Math.atan2(Math.sin(a.a-pa),Math.cos(a.a-pa));a.pa=a.a;a.bk=(a.bk||0)+(Math.max(-1,Math.min(1,dA*40))-(a.bk||0))*.15;
 if(S=='play')for(const y of[-8.5,8.5])puff(a.x-Math.cos(a.a)*30-Math.sin(a.a)*y,a.y-Math.sin(a.a)*30+Math.cos(a.a)*y,'#e6eef2',4,.7,0,0,1.4,.55);
 const C=k?{b:'#d8b9ad',w:'#c79f92',m:'#ff4d6d',f:'#ff9a3d'}:{b:'#d3dce2',w:'#b8c5ce',m:'#3f8cff',f:'#7fd0ff'},sil=()=>{cx.beginPath();cx.moveTo(30,0);cx.lineTo(20,-3.5);cx.lineTo(9,-4);cx.lineTo(3,-30);cx.lineTo(-8,-31);cx.lineTo(-9,-5);cx.lineTo(-22,-4);cx.lineTo(-28,-13);cx.lineTo(-32,-13);cx.lineTo(-30,0);cx.lineTo(-32,13);cx.lineTo(-28,13);cx.lineTo(-22,4);cx.lineTo(-9,5);cx.lineTo(-8,31);cx.lineTo(3,30);cx.lineTo(9,4);cx.lineTo(20,3.5);cx.closePath()};
 for(const o of SET.q?[1,0]:[0]){cx.save();cx.translate(a.x+(o?SH.x*1.7:0),a.y+(o?SH.y*1.7:0));cx.rotate(a.a);cx.scale(1,1-Math.abs(a.bk)*.14);
  if(o){cx.fillStyle='rgba(0,0,0,.25)';sil();cx.fill()}
  else{cx.fillStyle=C.w;sil();cx.fill();cx.strokeStyle='rgba(0,0,0,.35)';cx.lineWidth=1;cx.stroke();
   cx.fillStyle=C.b;cx.beginPath();cx.moveTo(30,0);cx.quadraticCurveTo(20,-4.6,6,-4.7);cx.lineTo(-24,-3);cx.lineTo(-30,0);cx.lineTo(-24,3);cx.lineTo(6,4.7);cx.quadraticCurveTo(20,4.6,30,0);cx.fill();
   cx.strokeStyle='rgba(0,0,0,.22)';cx.lineWidth=1;cx.beginPath();cx.moveTo(-2,-29);cx.lineTo(-3,-5);cx.moveTo(-2,29);cx.lineTo(-3,5);cx.moveTo(4,-17);cx.lineTo(-8,-17);cx.moveTo(4,17);cx.lineTo(-8,17);cx.moveTo(28,0);cx.lineTo(-26,0);cx.stroke();
   cx.fillStyle='rgba(0,0,0,.14)';cx.fillRect(-9,-29,3,23);cx.fillRect(-9,6,3,23);
   cx.fillStyle=C.m;cx.fillRect(-8,-31,11,2.2);cx.fillRect(-8,28.8,11,2.2);
   for(const y of[-20,20]){cx.fillStyle='#fff';cx.beginPath();cx.arc(-3,y,3.6,0,7);cx.fill();cx.fillStyle=C.m;cx.beginPath();cx.arc(-3,y,2,0,7);cx.fill()}
   cx.fillStyle='#6b777d';cx.fillRect(0,-14,11,2.4);cx.fillRect(0,11.6,11,2.4);cx.fillRect(-1,-25,9,2);cx.fillRect(-1,23,9,2);cx.fillStyle='#ff4d6d';cx.fillRect(10,-14,2,2.4);cx.fillRect(10,11.6,2,2.4);
   for(const y of[-8.5,8.5]){cx.fillStyle='#59656b';cx.beginPath();cx.ellipse(-17,y,8.5,3.4,0,0,7);cx.fill();cx.fillStyle='#1c2428';cx.beginPath();cx.arc(-9.5,y,2.3,0,7);cx.fill();
    const fl=2.6+Math.sin(T0*55+y)*.9;cx.fillStyle=C.f;cx.globalAlpha=.8;cx.beginPath();cx.ellipse(-26-fl,y,fl*1.6,2.2,0,0,7);cx.fill();cx.globalAlpha=1;cx.fillStyle='#fff';cx.beginPath();cx.ellipse(-25.5,y,2.2,1.4,0,0,7);cx.fill()}
   cx.fillStyle=C.m;cx.fillRect(-31,-14.5,6,2.2);cx.fillRect(-31,12.3,6,2.2);
   cx.fillStyle='#2b3438';cx.fillRect(27,-1,8,2);
   cx.fillStyle='#8fd3ff';cx.beginPath();cx.ellipse(13,0,7.5,3.3,0,0,7);cx.fill();cx.strokeStyle='#2b3438';cx.lineWidth=1;cx.stroke();cx.fillStyle='rgba(255,255,255,.6)';cx.fillRect(9,-2.2,5,1.3)}
  cx.restore()}}
function hqDraw(){const x=HQ.x,y=HQ.y;cx.lineCap='round';cx.strokeStyle='#8f7a55';cx.lineWidth=9;cx.setLineDash([14,5]);cx.beginPath();cx.arc(x,y,112,0,7);cx.stroke();cx.strokeStyle='rgba(255,255,255,.18)';cx.lineWidth=3;cx.beginPath();cx.arc(x,y-2,112,0,7);cx.stroke();cx.setLineDash([]);
 for(const[tx,ty]of[[x+150,y-40],[x+150,y+30],[x-160,y-10]]){cx.fillStyle='rgba(0,0,0,.25)';cx.fillRect(tx-27,ty-17,60,42);cx.fillStyle='#6f7f55';cx.fillRect(tx-30,ty-20,60,40);cx.fillStyle='rgba(0,0,0,.2)';cx.fillRect(tx,ty-20,30,40);cx.strokeStyle='#4a5538';cx.lineWidth=2;cx.strokeRect(tx-30,ty-20,60,40);cx.beginPath();cx.moveTo(tx,ty-20);cx.lineTo(tx,ty+20);cx.stroke();cx.fillStyle='#e8e2d0';cx.beginPath();cx.arc(tx-15,ty,8,0,7);cx.fill();cx.fillStyle='#e5484d';cx.fillRect(tx-17.5,ty-5,5,10);cx.fillRect(tx-20,ty-2.5,10,5)}
 cx.fillStyle='rgba(0,0,0,.25)';cx.fillRect(x-64,y-42,140,100);cx.fillStyle='#d9d2c0';cx.fillRect(x-70,y-50,140,100);cx.strokeStyle='#b9b19c';cx.lineWidth=1;cx.beginPath();for(let i=-50;i<=50;i+=20){cx.moveTo(x+i,y-50);cx.lineTo(x+i,y+50)}cx.stroke();
 cx.fillStyle='#9aa3a6';cx.fillRect(x-62,y-42,18,14);cx.fillRect(x+44,y+28,18,14);cx.strokeStyle='#8a7357';cx.lineWidth=5;cx.strokeRect(x-70,y-50,140,100);
 cx.fillStyle='#e5484d';cx.fillRect(x-6,y-22,12,44);cx.fillRect(x-22,y-6,44,12);cx.fillStyle=Math.floor(T0*2)%2?'#ff4d6d':'#6a2030';for(const[px,py]of[[-64,-44],[64,-44],[-64,44],[64,44]]){cx.beginPath();cx.arc(x+px,y+py,3.5,0,7);cx.fill()}
 cx.textAlign='center';cx.font='700 13px system-ui';cx.fillStyle='#d9d2c0';cx.fillText('Hospital de campaña',x,y+72)}
const mkS=(n,f)=>{const c=document.createElement('canvas');c.width=c.height=n;const g=c.getContext('2d');f(g,n/2);return c},
LS=mkS(128,(g,h)=>{const r=g.createRadialGradient(h,h,h*.15,h,h,h);r.addColorStop(0,'rgba(0,0,0,1)');r.addColorStop(1,'rgba(0,0,0,0)');g.fillStyle=r;g.fillRect(0,0,h*2,h*2)}),
SS=mkS(128,(g,h)=>{const r=g.createRadialGradient(h,h,h*.1,h,h,h);r.addColorStop(0,'rgba(120,128,132,1)');r.addColorStop(1,'rgba(120,128,132,0)');g.fillStyle=r;g.fillRect(0,0,h*2,h*2)}),
FS=mkS(100,(g,h)=>{const r=g.createRadialGradient(h,h,2,h,h,h);r.addColorStop(0,'rgba(255,200,120,.55)');r.addColorStop(1,'rgba(255,120,60,0)');g.fillStyle=r;g.fillRect(0,0,h*2,h*2)}),
LC=mkS(256,(g,h)=>{const lg=g.createLinearGradient(0,0,h*2,0);lg.addColorStop(0,'rgba(0,0,0,1)');lg.addColorStop(.5,'rgba(0,0,0,.7)');lg.addColorStop(1,'rgba(0,0,0,0)');g.fillStyle=lg;if('filter'in g)g.filter='blur(7px)';g.beginPath();g.moveTo(0,h-5);g.lineTo(h*2-8,h-h*.6);g.lineTo(h*2-8,h+h*.6);g.lineTo(0,h+5);g.closePath();g.fill()}),
nr=(a,b,r)=>{const x=a.x-b.x,y=a.y-b.y;return x<r&&x>-r&&y<r&&y>-r&&x*x+y*y<r*r},
off=(o,m)=>o.x<cam.x-m||o.x>cam.x+W+m||o.y<cam.y-m||o.y>cam.y+H+m;
function menuDraw(){
 const t=T0,k=Math.max(.7,H/360),land=W>H*1.15,s0=Math.max(1.2,Math.min(3.1,land?H/135:Math.min(W/135,H/230))),bx=land?W*.69:W/2+s0*20,by=land?H*.55:H*.34,s=s0;
 cx.fillStyle='#1b2a30';cx.fillRect(0,0,W,H);
 const gg=cx.createRadialGradient(bx,by,10,bx,by,Math.max(W,H)*.7);gg.addColorStop(0,'#2b4049');gg.addColorStop(1,'#16222a');cx.fillStyle=gg;cx.fillRect(0,0,W,H);
 cx.strokeStyle='rgba(60,92,104,.35)';cx.lineWidth=1;cx.beginPath();for(let x=0;x<W;x+=64){cx.moveTo(x,0);cx.lineTo(x,H)}for(let y=0;y<H;y+=64){cx.moveTo(0,y);cx.lineTo(W,y)}cx.stroke();
 if(!MDp){MDp=[];for(let i=0;i<150;i++)MDp.push([Math.random(),Math.random(),1+Math.random()*2.4,Math.random()*6.3])}
 cx.fillStyle='rgba(0,0,0,.16)';for(const q of MDp){cx.beginPath();cx.ellipse(q[0]*W,q[1]*H,q[2]*k*1.6,q[2]*k,q[3],0,7);cx.fill()}
 for(const[a,b,r]of[[.1,.28,38],[.9,.7,46],[.24,.86,26],[.82,.16,30],[.55,.9,22]]){const x=W*a,y=H*b,rr=r*k;cx.fillStyle='#142027';cx.beginPath();cx.arc(x,y,rr,0,7);cx.fill();cx.strokeStyle='#3b5967';cx.lineWidth=3;cx.stroke();cx.fillStyle='rgba(0,0,0,.3)';cx.beginPath();cx.arc(x+2,y+2,rr*.62,0,7);cx.fill()}
 // trinchera de sacos
 const sbn=11;for(let i=0;i<sbn;i++){const an=Math.PI*(.62+i/(sbn-1)*.76),rx=bx-s*22+Math.cos(an)*s*98,ry=by+Math.sin(an)*s*66;cx.save();cx.translate(rx,ry);cx.rotate(an+1.57);cx.fillStyle='#6a5c42';cx.beginPath();cx.ellipse(0,0,s*7.5,s*4.1,0,0,7);cx.fill();cx.strokeStyle='#3d3424';cx.lineWidth=1.6;cx.stroke();cx.fillStyle='rgba(255,255,255,.1)';cx.beginPath();cx.ellipse(0,-s*1.2,s*5,s*1.3,0,0,7);cx.fill();cx.restore()}
 // sombra de helicóptero
 {const hp=(t%26)/26;if(hp<.5){const u=hp/.5,hx=-220+u*(W+440),hy=H*.22+Math.sin(u*3)*H*.08;cx.save();cx.translate(hx,hy);cx.rotate(.18);cx.scale(k*1.7,k*1.7);heliShadow(cx,t,.26);cx.restore()}}
 // formación del escuadrón
 const aim=-.3,sq=[[22,0,1,'#d9d2c0','#cdbf99',aim+Math.sin(t*.8)*.04,0,2,'','P'],[-22,-36,.9,AT[0].c,AT[0].h,aim-.08+Math.sin(t*.9+2)*.04,0,2,'','A'],[-22,36,.92,AT[1].c,AT[1].h,aim+.1+Math.sin(t*.7+1)*.04,1,2,'','S'],[-62,-14,.9,AT[0].c,AT[0].h,aim-.05+Math.sin(t*.6)*.05,0,2,'md','A'],[-62,24,.9,AT[0].c,AT[0].h,aim+.04+Math.sin(t*.75+3)*.04,0,2,'mg','A']];
 const bt=t%3.4,burst=bt<1,sp=.095,fire=burst&&(bt%sp)<.04;
 for(const q of sq){const sc=s*q[2],px=bx+q[0]*s,py=by+q[1]*s,sh=(q[9]=='P'||q[8]=='mg')&&fire;man(px,py,q[5],q[3],q[4],sc,q[6],0,q[7],0,0,sh?1:0,0,q[8],q[9])}
 // fuego, trazadoras y destellos
 for(const q of sq){if(!(q[9]=='P'||q[8]=='mg')||!burst)continue;const sc=s*q[2],px=bx+q[0]*s,py=by+q[1]*s,c=Math.cos(q[5]),n=Math.sin(q[5]),mx=px+c*33*sc,my=py+n*33*sc;
  cx.save();cx.globalCompositeOperation='lighter';cx.lineCap='round';
  const n0=Math.floor(bt/sp);for(let i=Math.max(0,n0-2);i<=n0;i++){const u=(bt-i*sp)*2600;if(u<0||u>2200)continue;cx.strokeStyle='rgba(255,220,120,.85)';cx.lineWidth=2.2;cx.beginPath();cx.moveTo(mx+c*u,my+n*u);cx.lineTo(mx+c*(u+90),my+n*(u+90));cx.stroke()}
  if(fire){const f=1.4*sc;cx.drawImage(FS,mx-50*f,my-50*f,100*f,100*f);cx.fillStyle='rgba(255,240,200,.9)';cx.beginPath();cx.arc(mx+c*3,my+n*3,3*sc,0,7);cx.fill()}cx.restore()}
 // explosión lejana: destello y onda de luz
 {const P=6.8,ev=Math.floor(t/P),ph=t-ev*P;if(ph<1.3){const fx=((ev*7919)%97)/97,fy=((ev*104729)%89)/89,ex=W*(land?.12+fx*.55:.1+fx*.8),ey=H*(.12+fy*.5),u=ph/1.3,e=Math.pow(1-u,2);cx.save();cx.globalCompositeOperation='lighter';const r=(120+u*220)*k,gx=cx.createRadialGradient(ex,ey,2,ex,ey,r);gx.addColorStop(0,'rgba(255,190,110,'+.55*e+')');gx.addColorStop(1,'rgba(255,100,40,0)');cx.fillStyle=gx;cx.fillRect(0,0,W,H);cx.fillStyle='rgba(255,150,80,'+.07*e+')';cx.fillRect(0,0,W,H);cx.restore()}}
 // humo y brasas
 for(let i=0;i<12;i++){const u=((t*.045+i*.083)%1),x=((i*173)%100)/100*W+Math.sin(t*.4+i)*30*k,y=H*(1.1-u*1.3),r=(40+u*110)*k;cx.globalAlpha=Math.sin(u*3.14)*.2;cx.drawImage(SS,x-r,y-r,r*2,r*2)}cx.globalAlpha=1;
 for(let i=0;i<34;i++){const u=((t*(.05+(i%5)*.012)+i*.0617)%1),x=(((i*97)%100)/100*W+Math.sin(t*.7+i)*26+u*40)%W,y=H*(1.04-u*1.05),a=Math.sin(u*3.14)*(.35+.25*Math.sin(t*5+i));cx.fillStyle='rgba(255,'+(130+i%4*25)+',70,'+a+')';cx.fillRect(x,y,1.6+i%3,1.6+i%3)}
 const g=cx.createRadialGradient(W/2,H/2,Math.min(W,H)*.3,W/2,H/2,Math.max(W,H)*.75);g.addColorStop(0,'rgba(0,0,0,0)');g.addColorStop(1,'rgba(0,0,0,.55)');cx.fillStyle=g;cx.fillRect(0,0,W,H);
}
/* ===== REALISMO: terreno natural, cráteres con borde y relieve, rocas, hierba y grano ===== */
var GRN=null,GP1=null,GP2=null,CRSp={},RKs={},GRAIN=null,GRAINp=null;
function _pn(m,seed){const L=new Float32Array(m*m);let s=seed>>>0;for(let i=0;i<m*m;i++){s=(Math.imul(s,1664525)+1013904223)>>>0;L[i]=s/4294967296}
  return(u,v)=>{const x=u*m,y=v*m,xi=Math.floor(x),yi=Math.floor(y),fx=x-xi,fy=y-yi,sx=fx*fx*(3-2*fx),sy=fy*fy*(3-2*fy),x1=(xi+1)%m,y1=(yi+1)%m,x0=xi%m,y0=yi%m,
    a=L[y0*m+x0],b=L[y0*m+x1],c=L[y1*m+x0],d=L[y1*m+x1];return a+(b-a)*sx+(c-a)*sy+(a-b-c+d)*sx*sy}}
function _ss(a,b,x){x=Math.max(0,Math.min(1,(x-a)/(b-a)));return x*x*(3-2*x)}
function groundTex(){
  if(GRN)return GRN;
  const N=640,c=document.createElement('canvas');c.width=c.height=N;const g=c.getContext('2d'),id=g.createImageData(N,N),d=id.data,gm=new Float32Array(N*N);
  const n1=_pn(4,11),n2=_pn(8,23),n3=_pn(16,37),n4=_pn(32,41),n5=_pn(64,59),n6=_pn(128,73);
  let rs=12345;const rnd=()=>{rs=(Math.imul(rs,1664525)+1013904223)>>>0;return rs/4294967296};
  for(let y=0;y<N;y++)for(let x=0;x<N;x++){const u=x/N,v=y/N,
    a=n1(u,v)*.55+n2(u,v)*.45,b=n3(u,v)*.5+n4(u,v)*.5,cc=n5(u,v)*.5+n6(u,v)*.5,r=rnd(),
    g0=_ss(.26,.52,a),dry=_ss(.38,.72,b),
    gr=0,R0=52+dry*44,G0=70+dry*24,B0=38+dry*16,R1=96-cc*18,G1=78-cc*14,B1=56-cc*10,
    R=R1+(R0-R1)*g0,G=G1+(G0-G1)*g0,B=B1+(B0-B1)*g0,lum=.7+cc*.6+(r-.5)*.12,i=(y*N+x)*4;
    d[i]=Math.min(255,R*lum);d[i+1]=Math.min(255,G*lum);d[i+2]=Math.min(255,B*lum);d[i+3]=255;gm[y*N+x]=g0}
  g.putImageData(id,0,0);
  const wrap=(x,y,r,fn)=>{for(const ox of[0,N,-N])for(const oy of[0,N,-N]){const X=x+ox,Y=y+oy;if(X>-r&&X<N+r&&Y>-r&&Y<N+r)fn(X,Y)}};
  g.lineCap='round';
  /* hojas de hierba */
  const gc=['rgba(30,48,22,.55)','rgba(70,96,44,.5)','rgba(104,120,60,.45)','rgba(126,118,66,.4)','rgba(24,38,18,.5)'];
  for(let i=0;i<8100*GRD.hierba;i++){const x=rnd()*N,y=rnd()*N;if(gm[(y|0)*N+(x|0)]<.45&&rnd()<.85)continue;const l=3+rnd()*6,an=-1.57+(rnd()-.5)*1.1,col=gc[(rnd()*gc.length)|0];
    g.strokeStyle=col;g.lineWidth=.7+rnd()*.7;wrap(x,y,l,(X,Y)=>{g.beginPath();g.moveTo(X,Y);g.quadraticCurveTo(X+Math.cos(an)*l*.5+(rnd()-.5)*2,Y+Math.sin(an)*l*.5,X+Math.cos(an)*l,Y+Math.sin(an)*l);g.stroke()})}
  /* tierra: granos y piedritas */
  for(let i=0;i<1400*GRD.granos;i++){const x=rnd()*N,y=rnd()*N,r=.5+rnd()*1.1;if(gm[(y|0)*N+(x|0)]>.7&&rnd()<.7)continue;
    wrap(x,y,r+2,(X,Y)=>{g.fillStyle='rgba(20,14,8,.35)';g.beginPath();g.ellipse(X+.6,Y+.8,r*1.2,r*.9,0,0,7);g.fill();g.fillStyle='rgba(170,160,136,'+(.3+rnd()*.35)+')';g.beginPath();g.ellipse(X,Y,r,r*.8,rnd()*3,0,7);g.fill()})}
  for(let i=0;i<72*GRD.piedras;i++){const x=rnd()*N,y=rnd()*N,r=1.6+rnd()*3.2;if(gm[(y|0)*N+(x|0)]>.8)continue;
    wrap(x,y,r+3,(X,Y)=>{g.fillStyle='rgba(12,10,8,.38)';g.beginPath();g.ellipse(X+1.4,Y+1.8,r*1.15,r*.85,.3,0,7);g.fill();const gr=g.createRadialGradient(X-r*.35,Y-r*.4,.2,X,Y,r);gr.addColorStop(0,'#aaa696');gr.addColorStop(1,'#4d4a42');g.fillStyle=gr;g.beginPath();g.ellipse(X,Y,r,r*.82,.3,0,7);g.fill()})}
  /* mancha de gran escala (hierba cortada, barro, hierba oscura) */
  const M=640,c2=document.createElement('canvas');c2.width=c2.height=M;const g2=c2.getContext('2d'),id2=g2.createImageData(M,M),e=id2.data,m1=_pn(3,5),m2=_pn(6,17),m3=_pn(12,29),m4=_pn(24,43);
  for(let y=0;y<M;y++)for(let x=0;x<M;x++){const u=x/M,v=y/M,a=m1(u,v)*.5+m2(u,v)*.3+m3(u,v)*.2,b=m3(u,v)*.4+m4(u,v)*.6,i=(y*M+x)*4,
    mud=_ss(.6,.78,a),lush=_ss(.55,.72,1-a)*.9,dry=_ss(.52,.7,b)*.6;let R=0,G=0,B=0,A=0;
    if(mud>.01){R=44;G=34;B=24;A=mud*.55}else if(lush>.01){R=26;G=46;B=24;A=lush*.42}else if(dry>.02){R=122;G=112;B=66;A=dry*.3}
    e[i]=R;e[i+1]=G;e[i+2]=B;e[i+3]=Math.max(0,Math.min(255,A*255))}
  g2.putImageData(id2,0,0);const c3=document.createElement('canvas');c3.width=c3.height=1280;const g3=c3.getContext('2d');g3.imageSmoothingEnabled=true;g3.drawImage(c2,0,0,1280,1280);
  const c4=document.createElement('canvas');c4.width=c4.height=1280;const g4=c4.getContext('2d');for(let yy=0;yy<2;yy++)for(let xx=0;xx<2;xx++)g4.drawImage(c,xx*N,yy*N);g4.drawImage(c3,0,0);GRN=[c,c4];GP1=cx.createPattern(c,'repeat');GP2=cx.createPattern(c4,'repeat');return GRN}
function groundFill(){
  groundTex();const x0=Math.max(0,cam.x-24),y0=Math.max(0,cam.y-24),x1=Math.min(WW,cam.x+W+24),y1=Math.min(WH,cam.y+H+24);
  cx.fillStyle=SET.q>0?GP2:GP1;cx.fillRect(x0,y0,x1-x0,y1-y0)}
function craterSpr(r){
  const k=Math.max(8,Math.round(r/3)*3);if(CRSp[k])return CRSp[k];
  const S=Math.ceil(k*3.6),c=document.createElement('canvas');c.width=c.height=S;const g=c.getContext('2d'),m=S/2;let rs=k*77+5;const rnd=()=>{rs=(Math.imul(rs,1664525)+1013904223)>>>0;return rs/4294967296};
  const ang=[];for(let i=0;i<24;i++)ang.push(1+(rnd()-.5)*.14);
  const blob=(rad,sc)=>{g.beginPath();for(let i=0;i<=24;i++){const a=i/24*6.2832,rr=rad*ang[i%24]*(sc||1);i?g.lineTo(m+Math.cos(a)*rr,m+Math.sin(a)*rr*.94):g.moveTo(m+Math.cos(a)*rr,m+Math.sin(a)*rr*.94)}g.closePath()};
  /* hollín y tierra removida */
  let gr=g.createRadialGradient(m,m,k*.6,m,m,k*1.75);gr.addColorStop(0,'rgba(12,10,8,.7)');gr.addColorStop(.55,'rgba(40,30,20,.45)');gr.addColorStop(1,'rgba(40,30,20,0)');g.fillStyle=gr;g.fillRect(0,0,S,S);
  /* borde elevado de tierra */
  blob(k*1.22);gr=g.createRadialGradient(m-k*.3,m-k*.3,k*.5,m,m,k*1.28);gr.addColorStop(0,'#8a7556');gr.addColorStop(.7,'#5b4a36');gr.addColorStop(1,'#3a2e22');g.fillStyle=gr;g.fill();
  g.strokeStyle='rgba(20,14,8,.6)';g.lineWidth=1.4;g.stroke();
  /* cuenco interior */
  blob(k*.95);gr=g.createRadialGradient(m+k*.18,m+k*.2,k*.05,m,m,k*.98);gr.addColorStop(0,'#14100c');gr.addColorStop(.55,'#241b13');gr.addColorStop(1,'#4a3b2a');g.fillStyle=gr;g.fill();
  /* sombra interna del lado de la luz */
  g.save();blob(k*.95);g.clip();gr=g.createLinearGradient(m-k,m-k,m+k*.6,m+k*.6);gr.addColorStop(0,'rgba(0,0,0,.55)');gr.addColorStop(.55,'rgba(0,0,0,0)');g.fillStyle=gr;g.fillRect(0,0,S,S);g.restore();
  /* terrones y piedras en el borde */
  for(let i=0;i<k*1.3;i++){const a=rnd()*6.28,rr=k*(1.05+rnd()*.55),x=m+Math.cos(a)*rr,y=m+Math.sin(a)*rr,s=.8+rnd()*2.4;g.fillStyle='rgba(12,9,6,.35)';g.beginPath();g.ellipse(x+1,y+1.3,s*1.1,s*.8,0,0,7);g.fill();g.fillStyle=rnd()<.5?'#6a5840':'#8c8472';g.beginPath();g.ellipse(x,y,s,s*.8,rnd()*3,0,7);g.fill()}
  return CRSp[k]=c}
function craterDraw(c){const s=craterSpr(c.r),k=Math.max(8,Math.round(c.r/3)*3),S=s.width,sc=c.r/k/1.12;cx.drawImage(s,c.x-S/2*sc,c.y-S/2*sc,S*sc,S*sc)}
function rockSpr(v){if(RKs[v])return RKs[v];const S=48,c=document.createElement('canvas');c.width=c.height=S;const g=c.getContext('2d');let rs=v*131+7;const rnd=()=>{rs=(Math.imul(rs,1664525)+1013904223)>>>0;return rs/4294967296};
  const pts=[];const n=7+v%3;for(let i=0;i<n;i++){const a=i/n*6.2832,r=.82+rnd()*.3;pts.push([24+Math.cos(a)*18*r,24+Math.sin(a)*13*r])}
  g.fillStyle='rgba(8,8,6,.35)';g.beginPath();pts.forEach((p,i)=>g[i?'lineTo':'moveTo'](p[0]+2.4,p[1]+3));g.fill();
  g.beginPath();pts.forEach((p,i)=>g[i?'lineTo':'moveTo'](p[0],p[1]));g.closePath();const gr=g.createRadialGradient(17,15,2,24,24,22);gr.addColorStop(0,'#b0ada0');gr.addColorStop(.55,'#706d62');gr.addColorStop(1,'#34322c');g.fillStyle=gr;g.fill();g.strokeStyle='rgba(10,10,8,.5)';g.lineWidth=1;g.stroke();
  g.strokeStyle='rgba(255,255,240,.22)';g.lineWidth=1;g.beginPath();g.moveTo(pts[0][0]-3,pts[0][1]-1);g.lineTo(pts[1][0]-4,pts[1][1]-2);g.stroke();
  g.strokeStyle='rgba(0,0,0,.3)';g.beginPath();g.moveTo(22,20);g.lineTo(27,29);g.lineTo(24,33);g.stroke();return RKs[v]=c}
function decalDraw(d){
  if(d.k==0){const s=rockSpr(((d.a*10)|0)%6),z=d.r*2.4;cx.save();cx.translate(d.x,d.y);cx.rotate(d.a);cx.drawImage(s,-z/2,-z*.3,z,z*.6);cx.restore()}
  else if(d.k==1){const sw=Math.sin(T0*1.6+d.x*.05)*1.2;cx.lineCap='round';
    for(let i=-3;i<=3;i++){const h=d.r*(.7+((i*7+d.a*5)%3)*.2),bx=d.x+i*1.6;cx.strokeStyle=i%2?'#40602f':'#2c4622';cx.lineWidth=1.3;cx.beginPath();cx.moveTo(bx,d.y);cx.quadraticCurveTo(bx+i*.9+sw*.5,d.y-h*.6,bx+i*1.6+sw,d.y-h);cx.stroke()}
    cx.strokeStyle='rgba(150,150,80,.55)';cx.lineWidth=1;cx.beginPath();cx.moveTo(d.x+1,d.y);cx.quadraticCurveTo(d.x+2+sw*.5,d.y-d.r*.5,d.x+3+sw,d.y-d.r*.95);cx.stroke()}
  else{cx.save();cx.translate(d.x,d.y);cx.rotate(d.a);cx.lineCap='round';cx.strokeStyle='rgba(0,0,0,.25)';cx.lineWidth=3;cx.beginPath();cx.moveTo(-d.r+1,1.6);cx.lineTo(d.r+1,1.6);cx.stroke();
    cx.strokeStyle='#5a4630';cx.lineWidth=2.4;cx.beginPath();cx.moveTo(-d.r,0);cx.lineTo(d.r,0);cx.stroke();cx.strokeStyle='#8a7050';cx.lineWidth=.9;cx.beginPath();cx.moveTo(-d.r,-.6);cx.lineTo(d.r,-.6);cx.moveTo(d.r*.2,0);cx.lineTo(d.r*.6,-d.r*.5);cx.stroke();cx.restore()}}
function grainDraw(){
  if(!GRAIN){const c=document.createElement('canvas');c.width=c.height=192;const g=c.getContext('2d'),id=g.createImageData(192,192),d=id.data;for(let i=0;i<192*192;i++){const v=Math.random()*255|0,a=Math.abs(v-128)/128;d[i*4]=d[i*4+1]=d[i*4+2]=v;d[i*4+3]=Math.round(a*a*34)}g.putImageData(id,0,0);GRAIN=c;GRAINp=cx.createPattern(c,'repeat')}
  cx.save();cx.translate((Math.random()*192)|0,(Math.random()*192)|0);cx.fillStyle=GRAINp;cx.fillRect(-192,-192,W+384,H+384);cx.restore();
  cx.fillStyle='rgba(255,208,150,.035)';cx.fillRect(0,0,W,H)}
setTimeout(function(){try{groundTex()}catch(e){}},500);

var _uc={};
function uc(c){if(!c||typeof c!=='string'||c[0]!=='#'||c.length!==7)return c;if(_uc[c])return _uc[c];const n=parseInt(c.slice(1),16),r=n>>16&255,g=n>>8&255,b=n&255,y=r*.3+g*.59+b*.11,m=.4,o=v=>Math.max(0,Math.min(255,Math.round((v+(y-v)*m)*.9)));return _uc[c]='#'+[o(r),o(g),o(b)].map(v=>v.toString(16).padStart(2,'0')).join('')}
function zmx(c,t){const n=parseInt(c.slice(1),16),r=n>>16&255,g=n>>8&255,b=n&255,T=t>0?255:0,a=Math.abs(t),o=v=>Math.round(v+(T-v)*a);return'#'+[o(r),o(g),o(b)].map(v=>v.toString(16).padStart(2,'0')).join('')}
function zcamo(P,x,y,w,h){cx.save();cx.beginPath();cx.rect(x,y,w,h);cx.clip();const B=[[-14,-6,9,5,.4],[-2,8,10,5,-.3],[8,-8,7,4,.8],[16,5,8,4.5,.2],[-20,6,7,4,-.6],[2,-2,8,3.4,.9]];for(let i=0;i<B.length;i++){const b=B[i];cx.fillStyle=i%2?P.cm[1]:P.cm[0];cx.globalAlpha=i%2?.34:.5;cx.beginPath();cx.ellipse(b[0],b[1],b[2],b[3],b[4],0,7);cx.fill()}cx.globalAlpha=1;cx.restore()}
var SSD=mkS(128,(g,h)=>{const r=g.createRadialGradient(h,h,h*.1,h,h,h);r.addColorStop(0,'rgba(34,32,30,.95)');r.addColorStop(.55,'rgba(46,44,42,.6)');r.addColorStop(1,'rgba(52,50,48,0)');g.fillStyle=r;g.fillRect(0,0,h*2,h*2)});
function expDraw(x){
  if(off(x,x.r*2.4))return;if(!x.l0)x.l0=x.l;const p0=Math.max(0,Math.min(1,1-x.l/x.l0)),e=1-Math.pow(1-p0,2.2),R=x.r;
  cx.save();cx.globalCompositeOperation='lighter';cx.globalAlpha=Math.min(1,(1-p0)*1.3);cx.drawImage(FS,x.x-R*2.1,x.y-R*2.1,R*4.2,R*4.2);
  {const rr=R*(.35+.85*e),a=Math.max(0,1-p0*1.15),g=cx.createRadialGradient(x.x,x.y,rr*.05,x.x,x.y,rr);g.addColorStop(0,'rgba(255,250,225,'+a+')');g.addColorStop(.3,'rgba(255,196,90,'+a*.9+')');g.addColorStop(.7,'rgba(220,80,20,'+a*.55+')');g.addColorStop(1,'rgba(120,30,10,0)');cx.globalAlpha=1;cx.fillStyle=g;cx.beginPath();cx.arc(x.x,x.y,rr,0,7);cx.fill()}
  cx.restore();
  if(p0>.15){const a=Math.min(.6,(p0-.15)*1.3)*Math.min(1,(1-p0)*2.2+.15),rr=R*(.55+.7*e);cx.globalAlpha=a;cx.drawImage(SSD,x.x-rr,x.y-rr-p0*R*.3,rr*2,rr*2);cx.globalAlpha=1}
  cx.strokeStyle='rgba(235,220,190,'+(.5*(1-p0))+')';cx.lineWidth=2+R*.05*(1-p0);cx.beginPath();cx.arc(x.x,x.y,R*(.4+1.35*e),0,7);cx.stroke()}

function draw(){SPn=0;
 cx.fillStyle='#121c21';cx.fillRect(0,0,W,H);
 if(!p){menuDraw();return}
 if(wv&&WXn!=wv.n){WXn=wv.n;const t=wv.n<2?0:[0,0,1,2][Math.random()*4|0];if(t!=WXt){zm=t==1?'Empieza a llover':t==2?'Se levanta la niebla':'El clima se despeja';zt=3;if(t)note(2,'El clima cambia entre oleadas')}WXt=t}
 {const ph=((T0/150+(wv?wv.n:0)*.15)%1),cs=Math.abs(Math.cos(Math.PI*ph)),sd=Math.PI*(.15+.7*ph),SL=5+18*cs;sunPh=ph;SH.x=Math.cos(sd)*SL;SH.y=Math.sin(sd)*SL;SHk=Math.max(.3,1-(typeof ni=='number'?Math.min(1,ni):0)*.7)}
 cx.save();cx.translate(-cam.x+(sh>.3?(Math.random()-.5)*sh:0),-cam.y+(sh>.3?(Math.random()-.5)*sh:0));
 groundFill();
 if(SET.q&&S=='play'&&Math.abs(T0-TKt)>.5){TKt=T0;TKx.globalCompositeOperation='destination-out';TKx.fillStyle='rgba(0,0,0,.12)';TKx.fillRect(0,0,TKc.width,TKc.height);TKx.globalCompositeOperation='source-over'}
 if(SET.q){const sx=Math.max(0,cam.x/4),sy=Math.max(0,cam.y/4),sw=Math.min(TKc.width-sx,W/4+2),sh2=Math.min(TKc.height-sy,H/4+2);if(sw>0&&sh2>0){cx.globalAlpha=.5;cx.drawImage(TKc,sx,sy,sw,sh2,sx*4,sy*4,sw*4,sh2*4);cx.globalAlpha=1}}
 
 if(CM)campGround();for(const c of CR){if(c.x<cam.x-80||c.x>cam.x+W+80||c.y<cam.y-80||c.y>cam.y+H+80)continue;craterDraw(c)}
 for(const d of SET.q?DC:[]){if(d.x<cam.x-20||d.x>cam.x+W+20||d.y<cam.y-20||d.y>cam.y+H+20)continue;decalDraw(d)}
 for(const c of SC){if(off(c,c.r+10))continue;cx.globalAlpha=Math.min(.55,c.t/8);cx.fillStyle='#0c1519';cx.beginPath();cx.arc(c.x,c.y,c.r,0,7);cx.fill()}cx.globalAlpha=1;
 for(const t of TR){if(t.x>cam.x+W+20||t.y>cam.y+H+20||t.x+t.w<cam.x-20||t.y+t.h<cam.y-20)continue;cx.fillStyle='#3b2f25';cx.fillRect(t.x,t.y,t.w,t.h);cx.strokeStyle='#2c2219';cx.lineWidth=2;cx.beginPath();if(t.w>t.h){for(let x=t.x+10;x<t.x+t.w;x+=12){cx.moveTo(x,t.y+3);cx.lineTo(x,t.y+t.h-3)}}else{for(let y=t.y+10;y<t.y+t.h;y+=12){cx.moveTo(t.x+3,y);cx.lineTo(t.x+t.w-3,y)}}cx.stroke();cx.strokeStyle='rgba(0,0,0,.35)';cx.lineWidth=5;cx.strokeRect(t.x+2,t.y+2,t.w-4,t.h-4);cx.lineCap='round';cx.strokeStyle='#7f6b4a';cx.lineWidth=9;cx.setLineDash([13,5]);cx.strokeRect(t.x-3,t.y-3,t.w+6,t.h+6);cx.strokeStyle='#a99070';cx.lineWidth=3;cx.strokeRect(t.x-3,t.y-5,t.w+6,t.h+6);cx.setLineDash([])}
 fsDraw();for(const r of RU){if(r.x>cam.x+W+20||r.y>cam.y+H+20||r.x+r.w<cam.x-20||r.y+r.h<cam.y-20)continue;cx.fillStyle='#22282b';cx.fillRect(r.x,r.y,r.w,r.h);cx.fillStyle='#2e3639';for(let i=0;i<r.w;i+=22)cx.fillRect(r.x+i+2,r.y+3,19,r.h-6);cx.fillStyle='rgba(0,0,0,.35)';cx.beginPath();cx.arc(r.x+r.w*.65,r.y+r.h*.4,r.h*.3,0,7);cx.fill();cx.strokeStyle='#8b9093';cx.lineWidth=10;cx.setLineDash([46+r.g,20,30,16]);cx.strokeRect(r.x,r.y,r.w,r.h);cx.setLineDash([]);for(const q of r.b){cx.fillStyle=q[4]<.5?'#7b6a5a':'#4c5256';cx.fillRect(r.x+q[0]-q[2]/2,r.y+q[1]-q[3]/2,q[2],q[3])}}
 cx.strokeStyle='#5ee6a8';cx.lineWidth=3;cx.globalAlpha=.3;cx.beginPath();cx.arc(HQ.x,HQ.y,90,0,7);cx.stroke();cx.globalAlpha=1;
 cx.strokeStyle='rgba(94,230,168,.18)';cx.lineWidth=3;cx.setLineDash([18,12]);cx.strokeRect(HQ.x-340,HQ.y-170,680,340);cx.setLineDash([]);hqDraw();
 for(const q of PS){cx.strokeStyle='#6cc4ff';cx.lineWidth=3;cx.setLineDash([10,8]);cx.beginPath();cx.arc(q.x,q.y,90,0,7);cx.stroke();cx.setLineDash([]);cx.fillStyle='#6cc4ff';cx.font='900 16px system-ui';cx.textAlign='center';cx.fillText('PUESTO '+(PS.indexOf(q)+1),q.x,q.y-100);cx.strokeStyle='#cfd8dc';cx.lineWidth=5;cx.lineCap='round';cx.beginPath();cx.moveTo(q.x,q.y);cx.lineTo(q.x+Math.cos(q.ga||0)*22,q.y+Math.sin(q.ga||0)*22);cx.stroke();cx.fillStyle='#3a4448';cx.beginPath();cx.arc(q.x,q.y,9,0,7);cx.fill()}
 if(od==2){cx.strokeStyle='#6cc4ff';cx.lineWidth=3;cx.setLineDash([10,8]);cx.beginPath();cx.arc(dp.x,dp.y,70,0,7);cx.stroke();cx.setLineDash([]);cx.fillStyle='#6cc4ff';cx.font='900 16px system-ui';cx.textAlign='center';cx.fillText('DEFENDER',dp.x,dp.y-80)}
 cx.strokeStyle='#ff7a45';cx.lineWidth=6;cx.strokeRect(0,0,WW,WH);
 if(CM)fxWorld();campWorld();for(const z of Z){cx.beginPath();cx.arc(z.x,z.y,320,0,7);cx.fillStyle='rgba(108,196,255,.07)';cx.fill();cx.strokeStyle='#6cc4ff';cx.lineWidth=4;cx.setLineDash([16,12]);cx.globalAlpha=.6+.3*Math.sin(T0*4);cx.stroke();cx.setLineDash([]);const rr=(T0*180)%320;cx.strokeStyle='#ff4d6d';cx.lineWidth=3;cx.globalAlpha=1-rr/320;cx.beginPath();cx.arc(z.x,z.y,rr,0,7);cx.stroke();cx.globalAlpha=1;cx.fillStyle='#ff4d6d';cx.font='900 30px Impact,sans-serif';cx.textAlign='center';cx.fillText('SOS',z.x,z.y-70)}
 cx.textAlign='center';cx.font='700 12px system-ui';
 for(const u of U){const bb=Math.sin(T0*5+u.x)*2;cx.globalAlpha=u.l<3?(Math.floor(T0*8)%2?1:.3):1;cx.fillStyle=u.k=='h'?'rgba(94,230,168,.22)':'rgba(143,211,255,.22)';cx.beginPath();cx.arc(u.x,u.y,16+bb,0,7);cx.fill();cx.fillStyle='rgba(0,0,0,.3)';cx.fillRect(u.x-7,u.y-3,18,14);
 if(u.k=='h'){cx.fillStyle='#f4efe6';cx.fillRect(u.x-9,u.y-8,18,14);cx.fillStyle='#e5484d';cx.fillRect(u.x-2,u.y-6,4,10);cx.fillRect(u.x-5,u.y-3,10,4)}else{cx.fillStyle='#6b7a45';cx.fillRect(u.x-9,u.y-8,18,14);cx.fillStyle='#d9a441';for(let q=0;q<3;q++)cx.fillRect(u.x-6+q*5,u.y-5,3,7);cx.strokeStyle='#3d4727';cx.lineWidth=1.5;cx.strokeRect(u.x-9,u.y-8,18,14)}}
 cx.globalAlpha=1;
 for(const h of HL)if(h.t<h.dr+.3){const r=24+Math.sin(T0*6)*5;cx.strokeStyle='#5ee6a8';cx.lineWidth=3;cx.globalAlpha=.8;cx.beginPath();cx.arc(h.tx,h.ty,r,0,7);cx.stroke();cx.setLineDash([6,6]);cx.beginPath();cx.arc(h.tx,h.ty,r+14,0,7);cx.stroke();cx.setLineDash([]);cx.globalAlpha=1}
 for(const z of MZ){cx.strokeStyle='#ffb347';cx.lineWidth=3;cx.setLineDash([12,10]);cx.globalAlpha=.5;cx.beginPath();cx.arc(z.x,z.y,215,0,7);cx.stroke();cx.setLineDash([]);cx.globalAlpha=1}
 for(const m of M)if(m.t<.7){cx.strokeStyle='#ff9a3d';cx.lineWidth=2;cx.globalAlpha=m.t<.4?.95:.5;cx.beginPath();cx.arc(m.x,m.y,85,0,7);cx.stroke();if(m.t<.4){cx.fillStyle='rgba(255,120,60,.2)';cx.fill()}cx.globalAlpha=1}
 for(const s of AS){cx.strokeStyle='#ff4d6d';cx.lineWidth=3;cx.globalAlpha=.5+.4*Math.sin(T0*10);cx.beginPath();cx.moveTo(s.tx-Math.cos(s.a)*420,s.ty-Math.sin(s.a)*420);cx.lineTo(s.tx+Math.cos(s.a)*420,s.ty+Math.sin(s.a)*420);cx.stroke();cx.beginPath();cx.arc(s.tx,s.ty,100,0,7);cx.stroke();cx.globalAlpha=1}
 for(const b of BD)corpse(b);for(const b of CW)corpse(b);cx.globalAlpha=1;
 if(typeof miniDraw=='function')miniDraw();for(const a of A)if(a.t!=3&&!a.rd&&!off(a,130)){if(a.t==4)truck(a);else if(a.t==2)tank(a);else man(a.x,a.y,a.a,AT[a.t].c,AT[a.t].h,1.05,a.t==1,a.f>0,a.ro=='rk'?3:2,(mot(a),a.wp),a.mv,a.kk,0,a.ro,a.t==1?'S':'A');if(a.sr){cx.fillStyle=SRC[a.sr];cx.fillRect(a.x-4,a.y-a.r-18,8,3)}if(a.hp<a.mhp)bar(a.x-15,a.y-a.r-12,30,4,a.hp/a.mhp,a.hc?'#5ee6a8':'#6cc4ff');if(a.t<2&&!a.hc&&a.hp<a.mhp*.35){const pu=.5+.5*Math.sin(T0*7+a.x),bx=a.x+14,by=a.y-a.r-30-pu*2;cx.fillStyle='rgba(18,24,28,.9)';cx.beginPath();cx.arc(bx,by,8.5,0,7);cx.fill();cx.strokeStyle='rgba(255,122,69,'+(.5+.5*pu)+')';cx.lineWidth=2;cx.stroke();cx.fillStyle='#ff7a45';cx.font='900 12px system-ui';cx.fillText('!',bx,by+4.3)}if(a.hc){cx.fillStyle='#5ee6a8';cx.font='900 18px system-ui';cx.fillText('+',a.x,a.y-a.r-16)}}
 for(const e of E){if(off(e,e.t>7?220:130))continue;if(e.t==4)tank(e,1);else if(e.t==6)car(e);else if(e.t==7)truck(e,1);else if(e.t==8)tank(e,1,1.8);else if(e.t<5)man(e.x,e.y,e.a,e.sn?'#3d5a3d':e.md?'#e8e4d0':EC[e.t],e.sn?'#243824':e.md?'#a9a58a':EH[e.t],e.t==2?1.5:1,e.t==3,e.f>0,[0,2,2,2][e.t],(mot(e),e.wp),e.mv,e.kk,0,e.sn?'sn':e.md?'md':e.t==2?'mg':'',e.sn||e.md?'E0':'E'+e.t);if(e.md){cx.fillStyle='#5ee6a8';cx.font='900 18px system-ui';cx.fillText('+',e.x,e.y-e.r-8)}if(e.sn){cx.fillStyle='#ff4d6d';cx.font='900 11px system-ui';cx.fillText('FRANCOTIRADOR',e.x,e.y-e.r-8)}if(e.t>1){const bw=e.t>7?90:36;bar(e.x-bw/2,e.y-e.r-14,bw,e.t>7?7:4,e.hp/e.mhp,'#ff4d6d')}if(e.t>7){cx.fillStyle='#ff4d6d';cx.font='900 13px system-ui';cx.fillText(e.t==8?'TANQUE JEFE':'HELICÓPTERO JEFE',e.x,e.y-e.r-24)}}
 cx.lineCap='round';
 if(RD&&!off(RD,80)){cx.fillStyle='rgba(0,0,0,.3)';cx.fillRect(RD.x-20,RD.y-12,44,34);cx.fillStyle='#2b3438';cx.fillRect(RD.x-22,RD.y-20,44,34);cx.fillStyle='#46545a';cx.fillRect(RD.x-16,RD.y-14,32,10);cx.strokeStyle='#9aa5aa';cx.lineWidth=3;cx.beginPath();cx.moveTo(RD.x,RD.y-20);cx.lineTo(RD.x,RD.y-52);cx.moveTo(RD.x-10,RD.y-40);cx.lineTo(RD.x+10,RD.y-40);cx.stroke();if(Math.floor(T0*3)%2){cx.fillStyle='#ff4d6d';cx.beginPath();cx.arc(RD.x,RD.y-54,4,0,7);cx.fill()}bar(RD.x-28,RD.y+22,56,5,RD.hp/RD.mhp,'#ffd23f')}
 for(const e of E)if(e.aim>0){cx.strokeStyle='rgba(255,40,60,'+(.3+.5*(1-e.aim/1.1))+')';if(CL){cx.lineWidth=3;cx.beginPath();cx.arc(e.x,e.y,24+4*Math.sin(T0*14),0,7)}else{cx.lineWidth=1.5;cx.beginPath();cx.moveTo(e.x,e.y);cx.lineTo(e.x+Math.cos(e.la)*900,e.y+Math.sin(e.la)*900)}cx.stroke()}
 for(const b of B){if(off(b,60))continue;if(b.gr){cx.fillStyle='#3d4727';cx.beginPath();cx.arc(b.x,b.y,5,0,7);cx.fill();cx.fillStyle='#ffd23f';cx.fillRect(b.x-1,b.y-7,2,3);continue}if(!b.vx&&!b.vy){cx.fillStyle='#222';cx.beginPath();cx.arc(b.x,b.y,6,0,7);cx.fill();continue}const q=b.k!=null?b.k:b.e?3:0,z=BS[q],tx=b.x-b.vx*z[2],ty=b.y-b.vy*z[2];
  if(q==6){const an=Math.atan2(b.vy,b.vx),fl=.8+Math.random()*.5;cx.save();cx.translate(b.x,b.y);cx.rotate(an);cx.globalCompositeOperation='lighter';cx.globalAlpha=.9;cx.drawImage(FS,-8-18*fl,-18*fl,36*fl,36*fl);cx.fillStyle='#ffb347';cx.beginPath();cx.moveTo(-8,-2.5);cx.lineTo(-8-14*fl,0);cx.lineTo(-8,2.5);cx.fill();cx.globalCompositeOperation='source-over';cx.globalAlpha=1;cx.fillStyle='#8b9296';cx.fillRect(-8,-2.2,15,4.4);cx.fillStyle='#4a5256';cx.fillRect(-8,-4,3,8);cx.fillStyle=b.e?'#ff9a3d':'#c0392b';cx.beginPath();cx.moveTo(7,-2.2);cx.lineTo(12,0);cx.lineTo(7,2.2);cx.fill();cx.fillStyle='rgba(255,255,255,.35)';cx.fillRect(-7,-1.8,13,1);cx.restore();continue}
  BQ[q].push(b.x,b.y,tx,ty)}bFlush();
 cx.globalAlpha=p.iv>0&&Math.floor(T0*20)%2?.35:1;
 if(!p.dv)man(p.x,p.y,p.a,'#d9d2c0','#cdbf99',1.05,0,0,GMg(p.w),(mot(p),p.wp),p.mv,p.kk,p.rl>0,GMr(p.w),'P');cx.globalAlpha=.5;cx.strokeStyle='#fff';cx.lineWidth=2;cx.beginPath();cx.arc(p.x,p.y,19,0,7);cx.stroke();cx.globalAlpha=1;
 for(const q of Q){if(off(q,10))continue;cx.globalAlpha=Math.min(1,q.l*(q.s?q.al||1.2:2.5));cx.fillStyle=q.c;if(q.s){cx.beginPath();cx.arc(q.x,q.y,q.s*(1+(q.l0-q.l)*(q.gr||1.5)),0,7);cx.fill()}else if(q.st){cx.strokeStyle=q.c;cx.lineWidth=1.6;cx.beginPath();cx.moveTo(q.x,q.y);cx.lineTo(q.x-q.vx*.035,q.y-q.vy*.035);cx.stroke()}else cx.fillRect(q.x-2,q.y-2,4,4)}
 for(const c of CS){if(off(c,10))continue;cx.globalAlpha=Math.min(1,c.l*.7);if(c.z>.5){cx.fillStyle='rgba(0,0,0,.3)';cx.fillRect(c.x-1,c.y,c.s*.6,1.4)}cx.save();cx.translate(c.x,c.y-c.z*.45);cx.rotate(c.r);cx.fillStyle=c.c;cx.fillRect(-c.s/2,-1.1,c.s,2.2);cx.fillStyle='rgba(255,255,255,.55)';cx.fillRect(-c.s/2,-1.1,c.s,.7);if(c.c=='#c0392b'){cx.fillStyle='#d9a441';cx.fillRect(-c.s/2,-1.1,1.6,2.2)}cx.restore()}cx.globalAlpha=1;
 if(MF.length){cx.save();cx.globalCompositeOperation='lighter';for(const m of MF){if(off(m,40))continue;const u=m.l/.07,sc=m.s;cx.save();cx.translate(m.x,m.y);cx.rotate(m.a);cx.globalAlpha=Math.min(1,u*1.3);cx.drawImage(FS,-26*sc,-26*sc,52*sc,52*sc);cx.fillStyle='rgba(255,224,150,.95)';cx.beginPath();cx.moveTo(-3,0);cx.lineTo(8*sc,-3.4*sc);cx.lineTo((22+m.r*10)*sc,0);cx.lineTo(8*sc,3.4*sc);cx.closePath();cx.fill();cx.fillStyle='rgba(255,170,70,.8)';for(const sg of[-1,1]){cx.beginPath();cx.moveTo(2,0);cx.lineTo(9*sc,sg*7*sc);cx.lineTo(7*sc,sg*1.2*sc);cx.closePath();cx.fill()}cx.fillStyle='#fff';cx.beginPath();cx.arc(2,0,2.6*sc,0,7);cx.fill();cx.restore()}cx.restore()}
 cx.globalAlpha=1;
 for(const x of X)expDraw(x)
 for(const a of A)if(a.t==3)plane(a);for(const e of E){if(e.t==5)plane(e,1);else if(e.t==9)heli(e)}for(const s of AS)plane(s);for(const h of HL)ah(h);
 for(const a of A)if(a.rd)man(a.x,a.y,a.a,AT[a.t].c,AT[a.t].h,1.05,0,a.f>0,2,0,0,a.kk,0,a.ro,'A');if(typeof MP!='undefined'&&MP.role==='host'&&MP.remote){const r=MP.remote;man(r.x,r.y,r.a,'#6cc4ff','#1f4fa8',1.15,0,r.f>0,r.w|0,(mot(r),r.wp),r.mv,r.kk,0,0,'A')}if(typeof MP!='undefined'&&MP.role==='guest'&&MP.ho){const h=MP.ho;man(h.x,h.y,h.a,'#ff7a45','#8a2d0b',1.15,0,0,h.w|0,(mot(h),h.wp),h.mv,h.kk,0,0,'A')}
 for(const f of FL){cx.drawImage(FS,f.x-50,f.y-50);cx.fillStyle='#fff3b0';cx.beginPath();cx.arc(f.x,f.y-(f.t>0?f.t*80:0),4+Math.sin(T0*20)*.8,0,7);cx.fill()}
 for(const q of PR)chute(q.x,q.y,Math.max(0,Math.min(1,q.t/2.5)),1,Math.sin(T0*2+q.x)*.12,1);if(CL)clsDropDraw();
 for(const s of SM){const a=Math.min(.8,s.l/3)*Math.min(1,(9-s.l)*3),rr=s.r*(1+(9-s.l)*.04);for(const[ox,oy,k]of(SET.q?SM3:SM1)){const X0=s.x+ox*rr,Y0=s.y+oy*rr;cx.globalAlpha=a;cx.drawImage(SS,X0-rr*k,Y0-rr*k,rr*k*2,rr*k*2);cx.globalAlpha=1}}
 cx.restore();
 if(ni>.02){nx.globalCompositeOperation='source-over';nx.clearRect(0,0,W,H);nx.fillStyle='rgba(4,9,16,'+.8*ni+')';nx.fillRect(0,0,W,H);nx.globalCompositeOperation='destination-out';
  const lt=(x,y,r,a)=>{const sx=x-cam.x,sy=y-cam.y;if(sx<-r||sx>W+r||sy<-r||sy>H+r||a<=0)return;nx.globalAlpha=Math.min(1,a);nx.drawImage(LS,sx-r,sy-r,r*2,r*2);nx.globalAlpha=1};const cone=(x,y,a,rg,al)=>{const sx=x-cam.x,sy=y-cam.y;if(sx<-rg||sx>W+rg||sy<-rg||sy>H+rg)return;nx.save();nx.translate(sx,sy);nx.rotate(a);nx.globalAlpha=al;nx.drawImage(LC,0,-rg*.5,rg,rg);nx.restore()};
  lt(p.x,p.y,150,1);cone(p.x,p.y,p.a,380,1);for(const a of A){lt(a.x,a.y,a.t==3?150:70,.8);if(a.t<2||a.t==4)cone(a.x,a.y,a.a,a.t==4?440:240,.7)}for(const m of MF)lt(m.x,m.y,60*m.s+50,m.l/.07);for(let i=0;i<B.length&&i<40;i++){const b=B[i];if(!b.gr&&(b.vx||b.vy))lt(b.x,b.y,36,.35)}for(const f of FL)lt(f.x,f.y,420+Math.sin(T0*9)*12,Math.min(1,f.l/2)*Math.min(1,(16-f.l)*2+.3));for(const x of X)lt(x.x,x.y,x.r*2.4,x.l*3);for(const z of Z)lt(z.x,z.y,150,.5);for(const t of AS)lt(t.x,t.y,110,.7);
  nx.globalCompositeOperation='source-over';cx.drawImage(NC,0,0,W,H);cx.save();cx.globalCompositeOperation='lighter';{const gl=(x,y,r,a)=>{const sx=x-cam.x,sy=y-cam.y;if(sx<-r||sx>W+r||sy<-r||sy>H+r||a<=0)return;cx.globalAlpha=Math.min(1,a)*ni;cx.drawImage(FS,sx-r,sy-r,r*2,r*2)};for(const m of MF)gl(m.x,m.y,70*m.s+30,m.l/.07);for(const x of X)gl(x.x,x.y,x.r*2.2,x.l*2);for(const fl of FL)gl(fl.x,fl.y,230,Math.min(1,fl.l/2)*.7)}cx.restore()}
 {BB=BB.filter(b=>b.t>T0&&A.includes(b.o));cx.font='600 11px system-ui';cx.textAlign='center';for(const b of BB){const sx=b.o.x-cam.x,sy=b.o.y-cam.y-34;if(sx<-60||sx>W+60||sy<-20||sy>H+20)continue;const t2=b.tx.length>34?b.tx.slice(0,32)+'…':b.tx,w2=Math.min(200,cx.measureText(t2).width+14);cx.globalAlpha=Math.min(1,(b.t-T0)*2);cx.fillStyle='rgba(8,18,30,.84)';rrect(sx-w2/2,sy-14,w2,20,6);cx.fill();cx.strokeStyle='#2a8fd0';cx.lineWidth=1;cx.stroke();cx.beginPath();cx.moveTo(sx-4,sy+6);cx.lineTo(sx,sy+12);cx.lineTo(sx+4,sy+6);cx.fillStyle='rgba(8,18,30,.84)';cx.fill();cx.fillStyle='#e8f4ff';cx.fillText(t2,sx,sy);cx.globalAlpha=1}}
 {const w=Math.pow(Math.abs(Math.cos(Math.PI*sunPh)),3)*.16;if(w>.01&&SET.q){cx.fillStyle='rgba(255,140,50,'+w+')';cx.fillRect(0,0,W,H)}}
 {WXr+=((WXt==1?1:0)-WXr)*.01;WXf+=((WXt==2?1:0)-WXf)*.01;
  if(WXf>.02){const px=p.x-cam.x,py=p.y-cam.y,SZ=Math.max(W,H);if(!FG||FGk!=W+'x'+H){FG=document.createElement('canvas');FG.width=FG.height=128;const f2=FG.getContext('2d'),k=64/SZ,g=f2.createRadialGradient(64,64,90*k,64,64,SZ*.55*k);g.addColorStop(0,'rgba(190,205,210,0)');g.addColorStop(.55,'rgba(190,205,210,.42)');g.addColorStop(1,'rgba(190,205,210,.68)');f2.fillStyle=g;f2.fillRect(0,0,128,128);FGk=W+'x'+H}cx.globalAlpha=WXf;cx.drawImage(FG,px-SZ,py-SZ,SZ*2,SZ*2);cx.globalAlpha=1;cx.fillStyle='rgba(215,225,228,'+.1*WXf+')';for(let i=0;i<(SET.q?5:0);i++){const x=((T0*14+i*277)%(W+400))-200,y=(i*131+40)%H;cx.beginPath();cx.ellipse(x,y,220,70,0,0,7);cx.fill()}}
  if(WXr>.02){cx.fillStyle='rgba(12,22,38,'+.2*WXr+')';cx.fillRect(0,0,W,H);const RNn=[70,120,170][SET.q];if(RN.length>RNn)RN.length=RNn;while(RN.length<RNn)RN.push({x:Math.random()*W,y:Math.random()*H,l:10+Math.random()*14,v:700+Math.random()*400});cx.strokeStyle='rgba(190,210,235,'+.5*WXr+')';cx.lineWidth=1.2;cx.beginPath();for(const r of RN){r.y+=r.v*.016;r.x-=r.v*.2*.016;if(r.y>H){r.y=-20;r.x=Math.random()*(W+120)}cx.moveTo(r.x,r.y);cx.lineTo(r.x+r.l*.2,r.y-r.l)}cx.stroke()}}
 if(SET.q){if(!VG||VGk!=W+'x'+H){VG=cx.createRadialGradient(W/2,H/2,Math.min(W,H)*.4,W/2,H/2,Math.max(W,H)*.72);VG.addColorStop(0,'rgba(0,0,0,0)');VG.addColorStop(1,'rgba(0,0,0,.38)');VGk=W+'x'+H}cx.fillStyle=VG;cx.fillRect(0,0,W,H)}if(SET.q>1)grainDraw();if(S=='play'&&p.hp<p.mh*.3&&p.hp>0){const hb=Math.pow(.5+.5*Math.sin(T0*7.5),3),dg=cx.createRadialGradient(W/2,H/2,Math.min(W,H)*.28,W/2,H/2,Math.max(W,H)*.7);dg.addColorStop(0,'rgba(190,20,40,0)');dg.addColorStop(1,'rgba(190,20,40,'+(.22+.3*hb)*(1-p.hp/(p.mh*.3)*.5)+')');cx.fillStyle=dg;cx.fillRect(0,0,W,H)}
 if(SET.fps){cx.textAlign='center';cx.font='700 11px system-ui';cx.fillStyle='#e8f4ff';cx.fillText(Math.round(FPSv)+' FPS · '+['baja','media','alta'][SET.q]+' · '+E.length+' enem.',W/2,12)}
 if(S=='play')callDraw();
 if(SET.q){if(!VGc||VGc.w!=W||VGc.h!=H){const c2=document.createElement('canvas');c2.width=W>>1;c2.height=H>>1;const g=c2.getContext('2d'),gr=g.createRadialGradient(c2.width/2,c2.height/2,Math.min(c2.width,c2.height)*.45,c2.width/2,c2.height/2,Math.hypot(c2.width,c2.height)*.55);gr.addColorStop(0,'rgba(0,0,0,0)');gr.addColorStop(1,'rgba(0,0,0,.42)');g.fillStyle=gr;g.fillRect(0,0,c2.width,c2.height);VGc={c:c2,w:W,h:H}}cx.drawImage(VGc.c,0,0,W,H)}
 // HUD
{const m=MM(),mk=m.w+'x'+m.h+'x'+RSd;cx.textAlign='left';cx.fillStyle='#f4efe6';cx.font='700 16px "Trebuchet MS",sans-serif';
bar(m.x+4,m.y+m.h+8,m.w-8,8,p.hp/p.mh,p.hp>p.mh*.3?'#5ee6a8':'#ff4d6d');cx.fillStyle='#f4efe6';
if(!touch){const tx0=m.x+m.w+16;cx.fillText((CM?campTxt():'Oleada '+wv.n)+'   Puntos '+sc,tx0,30);cx.fillText('Aliados '+A.length+' · '+['Seguir','Atacar','Defender','Emboscar'][od]+(PS.length?' · '+PS.length+' puestos':''),tx0,52);if(cb>1){cx.fillStyle='#ffd23f';cx.fillText('Combo x'+Math.min(5,1+Math.floor(cb/5))+' ('+cb+')',tx0,74)}}
if(!MC||MCk!=mk)mmBase(m);
const x=m.x,y=m.y,w=m.w,h=m.h,R=14,pth=(n)=>{n=n||0;const X=x+n,Y=y+n,Wd=w-2*n,Hd=h-2*n;cx.beginPath();cx.moveTo(X,Y);cx.lineTo(X+Wd,Y);cx.lineTo(X+Wd,Y+Hd-R);cx.arcTo(X+Wd,Y+Hd,X+Wd-R,Y+Hd,R);cx.lineTo(X,Y+Hd);cx.closePath()};
cx.save();cx.shadowColor='rgba(42,143,208,.45)';cx.shadowBlur=14;pth();cx.fillStyle='#0c1a24';cx.fill();cx.restore();
cx.save();pth();cx.clip();cx.drawImage(MC,x,y,w,h);
const kx=w/WW,ky=h/WH,P=o=>[x+o.x*kx,y+o.y*ky];
for(const z of Z){const[a,b]=P(z),r=5+((T0*10)%6);cx.strokeStyle='rgba(108,196,255,'+(1-(r-5)/6)*.8+')';cx.lineWidth=1.5;cx.beginPath();cx.arc(a,b,r,0,7);cx.stroke();cx.fillStyle='#6cc4ff';cx.beginPath();cx.arc(a,b,2.6,0,7);cx.fill()}if(CM)campMM(P);
for(const q of PS){const[a,b]=P(q);cx.fillStyle='#6cc4ff';cx.fillRect(a-3,b-3,6,6);cx.strokeStyle='#fff';cx.lineWidth=1;cx.strokeRect(a-3,b-3,6,6)}
{const[a,b]=P(HQ);cx.fillStyle='#e8f4ff';cx.beginPath();cx.arc(a,b,5.5,0,7);cx.fill();cx.fillStyle='#e5484d';cx.fillRect(a-1,b-3.5,2,7);cx.fillRect(a-3.5,b-1,7,2)}
if(RD){const[a,b]=P(RD),q=4+Math.sin(T0*6)*1.2;cx.fillStyle='#ffd23f';cx.beginPath();cx.moveTo(a,b-q);cx.lineTo(a+q,b);cx.lineTo(a,b+q);cx.lineTo(a-q,b);cx.fill()}
for(const e of E){const[a,b]=P(e);cx.fillStyle='#ff4d6d';if(e.t>7){cx.beginPath();cx.arc(a,b,3.8,0,7);cx.fill();cx.strokeStyle='#fff';cx.lineWidth=1;cx.stroke()}else cx.fillRect(a-1.1,b-1.1,2.2,2.2)}
for(const a0 of A){const[a,b]=P(a0),q=a0.t==3?3.4:a0.t>=2?3:2.2;cx.fillStyle='#6cc4ff';cx.fillRect(a-q/2,b-q/2,q,q)}
for(const f of FL){const[a,b]=P(f);cx.fillStyle='#ffd23f';cx.beginPath();cx.arc(a,b,1.6,0,7);cx.fill()}
{const vw=Math.min(w,W*kx),vh=Math.min(h,H*ky),vx=cl(x+cam.x*kx,x,x+w-vw),vy=cl(y+cam.y*ky,y,y+h-vh);cx.fillStyle='rgba(244,239,230,.08)';cx.fillRect(vx,vy,vw,vh);cx.strokeStyle='rgba(244,239,230,.65)';cx.lineWidth=1;cx.strokeRect(vx+.5,vy+.5,vw-1,vh-1)}
{const[a,b]=P(p);cx.save();cx.translate(a,b);cx.rotate(p.a);cx.fillStyle='#5ee6a8';cx.strokeStyle='#08141c';cx.lineWidth=1.5;cx.beginPath();cx.moveTo(6,0);cx.lineTo(-4,-4);cx.lineTo(-2,0);cx.lineTo(-4,4);cx.closePath();cx.stroke();cx.fill();cx.restore()}
const gl=cx.createLinearGradient(x,y,x,y+h);gl.addColorStop(0,'rgba(255,255,255,.08)');gl.addColorStop(.45,'rgba(255,255,255,0)');cx.fillStyle=gl;cx.fillRect(x,y,w,h);cx.restore();
cx.save();pth(1.25);cx.strokeStyle='#2a8fd0';cx.lineWidth=2.5;cx.stroke();cx.restore();
cx.strokeStyle='#8fd3ff';cx.lineWidth=2;cx.beginPath();cx.moveTo(x+w-15,y+4);cx.lineTo(x+w-4,y+4);cx.lineTo(x+w-4,y+15);cx.moveTo(x+4,y+h-15);cx.lineTo(x+4,y+h-4);cx.lineTo(x+15,y+h-4);cx.stroke();
cx.textBaseline='alphabetic'}
const w=WP[p.w];cx.textAlign=touch?'center':'left';cx.fillStyle='#f4efe6';cx.font=(touch?'700 16px ':'700 20px ')+'"Trebuchet MS",sans-serif';
 if(!touch)cx.fillText(w.n+'  '+p.mag[p.w]+' / '+(p.res[p.w]==1/0?'∞':p.res[p.w]),16,H-30);
 if(!touch){cx.font='13px system-ui';cx.globalAlpha=.7;cx.fillText('Q autoapuntado: '+(aa?'sí':'no'),16,H-52);cx.globalAlpha=1}
 if(!touch){cx.font='700 14px system-ui';cx.fillStyle=p.ac>0?'#f4efe6':'#5ee6a8';cx.fillText((touch?'':'F ')+'Apoyo aéreo: '+(p.ac>0?Math.ceil(p.ac)+' s':'listo'),16,H-74);cx.fillStyle=p.mc>0?'#f4efe6':'#ffb347';cx.fillText((touch?'':'G ')+'Artillería: '+(p.mc>0?Math.ceil(p.mc)+' s':'lista'),16,H-96);cx.fillStyle='#f4efe6';cx.fillText((touch?'':'E ')+'Granadas '+p.gn+' · '+(touch?'':'T ')+'Bengala '+(p.fc>0?Math.ceil(p.fc)+' s':'lista')+' · '+(touch?'':'B ')+'Paracaidistas '+(p.pc>0?Math.ceil(p.pc)+' s':'listos')+' · '+(touch?'':'J ')+'Minicarros '+((p.nc||0)>0?Math.ceil(p.nc)+' s':'listos')+(p.dv?' · Z bajar':''),16,H-118)}
 if(p.rl>0)bar(touch?W/2-75:16,touch?H-18:H-22,150,6,1-p.rl/p.rt,'#6cc4ff');
 bar(touch?W/2-75:16,touch?H-10:H-14,150,4,1-Math.max(0,p.dc)/1.1,'#ffd23f');
 const bs=E.find(e=>e.t>7);if(bs){cx.textAlign='center';cx.font='900 14px system-ui';cx.fillStyle='#ff4d6d';cx.fillText(bs.t==8?'TANQUE JEFE':'HELICÓPTERO JEFE',W/2,16);bar(W/2-160,22,320,10,bs.hp/bs.mhp,'#ff4d6d')}
 if(RD){cx.textAlign='center';cx.font='700 14px system-ui';cx.fillStyle='#ffd23f';cx.fillText('RADIO ENEMIGA '+Math.ceil(RD.t)+' s · a '+Math.round(D(p,RD)/10)*10+' m',W/2,50)}
 if(CD>0){const yo=CD<=.6,n=yo?'¡YA!':''+Math.ceil(CD-.6),fr=yo?CD/.6:((CD-.6)%1||1);cx.save();cx.textAlign='center';cx.textBaseline='middle';cx.globalAlpha=Math.min(1,.3+fr);cx.font='900 '+Math.round(H*(.16+.12*fr))+'px Impact,"Arial Black",sans-serif';cx.lineWidth=6;cx.strokeStyle='rgba(20,8,2,.8)';cx.fillStyle=yo?'#5ee6a8':'#ffb35c';cx.strokeText(n,W/2,H*.42);cx.fillText(n,W/2,H*.42);cx.restore()}
 if(SET.tut&&TPi<5){const tx=TXT[touch?0:1][TPi];cx.font='700 14px system-ui';const tw=cx.measureText(tx).width+28;cx.fillStyle='rgba(10,18,22,.75)';cx.fillRect(W/2-tw/2,touch?H-96:H-52,tw,28);cx.fillStyle='#f4efe6';cx.textAlign='center';cx.fillText(tx,W/2,touch?H-77:H-33)}
 if(HO){const x=PXo,y=PYo;cx.fillStyle='rgba(10,18,22,.86)';cx.fillRect(x,y,314,198);cx.strokeStyle='#5ee6a8';cx.lineWidth=2;cx.strokeRect(x,y,314,198);cx.textAlign='left';cx.font='900 13px system-ui';cx.fillStyle='#5ee6a8';
 if(HCT>0){cx.fillText('BASE NAVAL · CONECTANDO'+'.'.repeat(1+(T0*3|0)%3),x+12,y+24);const f=1-HCT/4;cx.fillStyle='rgba(244,239,230,.15)';cx.fillRect(x+12,y+50,290,12);cx.fillStyle='#5ee6a8';cx.fillRect(x+12,y+50,290*f,12);cx.font='700 12px system-ui';cx.fillStyle='#f4efe6';const M1='Aquí Base Naval, te copiamos.',M2='Preparando refuerzos…',nn=Math.floor(Math.max(0,f-.15)*1.25*(M1.length+M2.length));cx.fillText(f<.3?'Buscando señal…':M1.slice(0,nn),x+12,y+86);if(f>=.3&&nn>M1.length)cx.fillText(M2.slice(0,nn-M1.length),x+12,y+106);for(let i=0;i<Math.floor(16*(1-f));i++){cx.fillStyle='rgba(244,239,230,'+(Math.random()*.3)+')';cx.fillRect(x+12+Math.random()*270,y+130+Math.random()*50,8+Math.random()*30,2)}}
 else{cx.fillText((touch?'BASE NAVAL · toca aquí: cerrar':'BASE NAVAL · REFUERZOS (H cierra)'),x+10,y+20);for(let i=0;i<8;i++){const[X,Y]=hoXY(i),k=HOP[i][1],w=k=='a'?p.ac:HC[k];cx.fillStyle='rgba(244,239,230,.12)';cx.fillRect(X,Y,146,36);cx.textAlign='left';cx.font='700 12px system-ui';cx.fillStyle='#f4efe6';cx.fillText(HOP[i][0],X+8,Y+15);cx.font='700 11px system-ui';cx.fillStyle=w>0?'#ffb347':'#5ee6a8';cx.fillText(w>0?Math.ceil(w)+' s':'listo',X+8,Y+30)}}}
 if(SO){const x=PXo,y=PYo,L=elig(),u=ST.b+ST.s+ST.h+ST.r;cx.fillStyle='rgba(10,18,22,.82)';cx.fillRect(x,y,290,182);cx.strokeStyle='#6cc4ff';cx.lineWidth=2;cx.strokeRect(x,y,290,182);cx.textAlign='left';cx.font='900 13px system-ui';cx.fillStyle='#6cc4ff';cx.fillText('ESTRATEGIA (Y cierra)',x+10,y+20);for(let i=0;i<4;i++){const r=stR(i),k='bshr'[i];cx.font='700 12px system-ui';cx.textAlign='left';cx.fillStyle=SRC[k];cx.fillText(SL[i],x+10,r.y+17);for(let j=0;j<2;j++){cx.fillStyle='rgba(244,239,230,.15)';cx.fillRect(x+186+j*64,r.y,26,24);cx.fillStyle='#f4efe6';cx.font='900 18px system-ui';cx.textAlign='center';cx.fillText(j?'+':'-',x+199+j*64,r.y+19)}cx.font='900 15px system-ui';cx.fillStyle='#f4efe6';cx.fillText(ST[k],x+231,r.y+18)}cx.textAlign='left';cx.font='11px system-ui';cx.fillStyle='#9ab';cx.fillText('Resto de la escuadra ('+(L-u)+') sigue la orden C',x+10,y+170)}
 if(UPC){const pu=.5+.5*Math.sin(T0*5);cx.textAlign='center';cx.font='700 12px system-ui';cx.fillStyle='#5ee6a8';cx.fillText((touch?'MEJORA':'MEJORA: elige una (7 · 8 · 9 o clic)'),W/2,upR(0).y-8);for(let i=0;i<3;i++){const r=upR(i),u=UP[UPC[i]],hv=!touch&&mx>=r.x&&mx<=r.x+r.w&&my>=r.y&&my<=r.y+r.h;cx.fillStyle=hv?'rgba(30,60,50,.92)':'rgba(10,18,22,.78)';cx.fillRect(r.x,r.y,r.w,r.h);cx.strokeStyle='rgba(94,230,168,'+(.45+.55*pu)+')';cx.lineWidth=hv?3:2;cx.strokeRect(r.x,r.y,r.w,r.h);cx.font='22px system-ui';cx.fillStyle='#fff';cx.fillText(u[0],r.x+r.w/2,r.y+31);cx.font='700 10px system-ui';cx.fillStyle='#f4efe6';cx.fillText(u[1],r.x+r.w/2,r.y+r.h-8);cx.fillStyle='#5ee6a8';cx.beginPath();cx.arc(r.x+r.w-8,r.y+8,8,0,7);cx.fill();cx.fillStyle='#0b1a14';cx.font='900 13px system-ui';cx.fillText('+',r.x+r.w-8,r.y+13);if(!touch){cx.fillStyle='#9ab';cx.font='10px system-ui';cx.fillText(7+i,r.x+10,r.y+13)}}}
 if(CM)feelDraw();campHUD();if(wv.msg>0&&!CM){cx.textAlign='center';cx.font='900 34px Impact,sans-serif';cx.fillStyle='rgba(244,239,230,'+Math.min(1,wv.msg)+')';cx.fillText('Oleada '+wv.n,W/2,H*.3)}
 if(wv.brk>0&&wv.n>0&&!CM){cx.textAlign='center';cx.font='700 14px system-ui';cx.fillStyle='#5ee6a8';cx.fillText('Oleada superada',W/2,H*.3)}
 if(RAD.tt>0&&RAD.tx&&S=='play'){const mw=touch?Math.max(250,Math.min(540,W-470)):Math.max(260,Math.min(460,W*.4)),fn='600 16px "Barlow Condensed","Trebuchet MS",system-ui';cx.font=fn;cx.textAlign='left';const ws=RAD.tx.split(' '),ln=[];let cur='';for(const w of ws){const t2=cur?cur+' '+w:w;if(cx.measureText(t2).width>mw-26&&cur){ln.push(cur);cur=w}else cur=t2}ln.push(cur);
  const bh=16+ln.length*19+8,bx=touch?W/2-mw/2:W-mw-16,by=H-(touch?96:24)-bh,al=Math.min(1,RAD.tt*3),col=RAD.who=='b'?'#6cc4ff':'#ffb35c';cx.globalAlpha=al;cx.fillStyle='rgba(8,14,18,.82)';cx.fillRect(bx,by,mw,bh);cx.fillStyle=col;cx.fillRect(bx,by,4,bh);cx.font='700 12px "Barlow Condensed",system-ui';cx.fillText(RAD.who=='b'?'BASE':'ESCUADRA',bx+14,by+15);cx.font=fn;cx.fillStyle='#f4efe6';ln.forEach((t3,i)=>cx.fillText(t3,bx+14,by+31+i*19));cx.globalAlpha=1}
 if(zt>0){cx.textAlign='center';cx.font='700 14px system-ui';cx.fillStyle='#6cc4ff';cx.fillText(zm,W/2,H*.38)}
 for(const z of Z){const sx=z.x-cam.x,sy=z.y-cam.y;if(sx<0||sx>W||sy<0||sy>H){const a=Math.atan2(sy-H/2,sx-W/2),qx=cl(W/2+Math.cos(a)*W,40,W-40),qy=cl(H/2+Math.sin(a)*H,60,H-60);cx.save();cx.translate(qx,qy);cx.rotate(a);cx.fillStyle='#6cc4ff';cx.beginPath();cx.moveTo(14,0);cx.lineTo(-10,-10);cx.lineTo(-10,10);cx.fill();cx.restore();cx.textAlign='center';cx.font='700 12px system-ui';cx.fillText('SOS '+Math.round(D(z,p)/10)+' m',qx,qy+(qy>H/2?-16:26))}}
 if(touch){let tm_=null,ta_=null;for(const id in TT){const t=TT[id];if(t.s=='m')tm_=t;else ta_=t}padD(tm_,PM(),0);padD(ta_,PA(),1)}
 else if(S=='play'){cx.strokeStyle='#f4efe6';cx.lineWidth=2;cx.beginPath();cx.arc(mx,my,9,0,7);cx.moveTo(mx-15,my);cx.lineTo(mx-5,my);cx.moveTo(mx+5,my);cx.lineTo(mx+15,my);cx.moveTo(mx,my-15);cx.lineTo(mx,my-5);cx.moveTo(mx,my+5);cx.lineTo(mx,my+15);cx.stroke()}}
{const b=document.getElementById('bs');if(b)b.textContent=best?'Tu mejor puntaje: '+best:'Aún sin récord. Haz que cuente.'}
const CDB=[[b3,()=>p.dc/1.1],[b8,()=>p.gn<1?1:p.gc/.8],[b7,()=>p.mc/22],[b10,()=>p.pc/45],[b22,()=>p.fc/6],[b2,()=>p.rl>0?p.rl/(p.rt||1):0]],cdv=new Map();
function cdUI(){if(!p)return;for(const[el,fn]of CDB){let v=Math.max(0,Math.min(1,fn()||0));v=Math.round(v*40)/40;const o=cdv.get(el);if(o!==v){cdv.set(el,v);el.style.setProperty('--cd',v);if(v==0&&o>0&&el!==b2){el.classList.add('pop');setTimeout(()=>el.classList.remove('pop'),380)}}}
 const w=WP[p.w],lo=p.mag[p.w]<=Math.ceil(w.m*.25)&&p.res[p.w]>0||p.mag[p.w]==0;b1.classList.toggle('lo',!!lo)}
let last=performance.now();
// Multitouch: los botones reaccionan al tocar (no al soltar) y sin depender del clic,
// así funcionan mientras mantienes joystick y apuntado con otros dedos.
document.querySelectorAll('.gb').forEach(el=>{const f=el.onclick;if(!f)return;el.addEventListener('touchstart',e=>{e.preventDefault();if(SET.vib&&navigator.vibrate)try{navigator.vibrate(el.id=='b3'?14:8)}catch(_){}f.call(el,e)},{passive:false})});
function fpsT(r){if(typeof MP!='undefined'&&MP.role==='guest'&&performance.now()-(MP.t1||performance.now())<12000){FPSlow=0;return}if(S!='play'){FPSlow=0;FPSgr=Math.max(FPSgr,1.5);return}if(r>.25||r<=0)return;FPSv+=(1/r-FPSv)*.08;if(FPSgr>0){FPSgr-=r;FPSlow=0;return}if(FPSv<40)FPSlow+=r;else FPSlow=0;if(FPSlow>=3&&SET.q>0){SET.q--;sv();stl();rs();zm='Calidad ajustada: '+['baja','media'][SET.q];zt=4;FPSlow=0;FPSgr=5;FPSv=50}}
(function f(n){const rw=(n-last)/1000;let dt=Math.min(.05,rw);last=n;fpsT(rw);autoQ(rw);if(!(typeof MP!='undefined'&&MP.role==='guest')){radUpd(dt);amUpd(dt)}if(SLO>0){SLO-=dt;dt*=.3}if(S=='play'){T0+=dt;if(CD>.6){const n=Math.ceil(CD-.6);if(n!==CDn){CDn=n;beep(600,.12,'square',.05)}CD-=dt}else{if(CDn!==0){CDn=0;beep(900,.25,'square',.06)}if(typeof MP!='undefined'&&MP.role==='guest')mpGuestTick(dt);else upd(dt);if(CD>0)CD-=dt}}else if(S=='menu')T0+=dt;if(touch&&S=='play')cdUI();if(S!==LSt){LSt=S;document.body.classList.toggle('mn',S=='menu')}if((S=='play'||S=='menu'||!PD)&&!(typeof MP!='undefined'&&MP.role==='guest'&&MP.vid))draw();PD=S=='play'?0:1;requestAnimationFrame(f)})(last);
