/* Portada de carga REAL: cada recurso suma su parte cuando está listo (fuentes, servicios, sonidos, voces por archivo y juego) */
(function(){const c=document.getElementById('cv0'),bar=document.getElementById('cvb'),tx=document.getElementById('cvt');if(!c)return;
  const t0=performance.now(),W={fu:20,sf:30,vz:0,jg:50},P={fu:0,sf:0,vz:0,jg:0};let msg='Cargando…',fined=0;
  const paint=()=>{let t=0;for(const k in W)t+=W[k]*P[k];t=Math.round(t);bar.style.width=t+'%';tx.textContent=msg+' · '+t+'%'};
  const done=(k,m)=>{P[k]=1;if(m)msg=m;paint()};
  const fin=()=>{if(fined)return;fined=1;const w=Math.max(0,600-(performance.now()-t0));setTimeout(()=>{c.classList.add('x');setTimeout(()=>c.remove(),500)},w)};
  paint();
  const fonts=(document.fonts&&document.fonts.ready?document.fonts.ready:Promise.resolve()).then(()=>done('fu','Fuentes listas'));
  const sfx=new Promise(r=>{let n=0;const i=setInterval(()=>{if(typeof SFX!='undefined'||++n>60){clearInterval(i);r()}},100)}).then(()=>done('sf','Sonidos listos'));
  /* Las voces de radio (4 MB) se bajan en segundo plano cuando ya se puede jugar */
  function bgVoices(){const ks=Object.keys(typeof VOX!='undefined'?VOX:{});let i=0;const one=()=>{if(i>=ks.length)return;return zcBuf('vox',ks[i++]).catch(()=>{}).then(()=>new Promise(r=>setTimeout(r,60))).then(one)};one();one();one()}
  setTimeout(bgVoices,6000);
  const vz=Promise.resolve();
  Promise.all([fonts,sfx,vz]).then(()=>{done('jg','Listo');fin()});
  setTimeout(fin,20000);
})();
