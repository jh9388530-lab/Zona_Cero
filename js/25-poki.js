/* Integración con Poki SDK.
   - gameLoadingFinished al terminar la carga
   - gameplayStart / gameplayStop según el estado real de la partida (sin repetir eventos)
   - commercialBreak al volver a jugar (reanudar, reintentar, nueva partida), con sonido e input bloqueados durante el anuncio
   Si el SDK no carga (bloqueador de anuncios, sin conexión) el juego funciona igual. */
(function(){
  const sdk=()=>window.PokiSDK,safe=f=>{try{return f()}catch(e){}};
  let gp=false,ad=false,started=false,loaded=false;
  safe(()=>sdk()&&sdk().init&&sdk().init().catch(()=>{}));

  /* fin de carga */
  const li=setInterval(()=>{if(!document.getElementById('cv0')&&!loaded){loaded=true;clearInterval(li);safe(()=>sdk().gameLoadingFinished())}},300);

  /* táctil forzado en tablets/móviles (sin esperar al primer toque) */
  if(window.matchMedia&&matchMedia('(pointer:coarse)').matches)safe(()=>dispatchEvent(new Event('touchstart')));

  /* gameplayStart / gameplayStop */
  setInterval(()=>{
    const playing=!ad&&S=='play';
    if(playing&&!gp){gp=true;started=true;safe(()=>sdk().gameplayStart())}
    else if(!playing&&gp){gp=false;safe(()=>sdk().gameplayStop())}
  },150);

  /* audio e input durante anuncios */
  const mute=m=>safe(()=>{window.ZC_AD=m;if(m&&window.speechSynthesis)speechSynthesis.cancel();if(typeof ac!='undefined'&&ac)m?ac.suspend():ac.resume()});
  const block=e=>{if(ad){e.stopImmediatePropagation();e.preventDefault()}};
  ['keydown','keyup','pointerdown','mousedown','touchstart'].forEach(t=>addEventListener(t,block,{capture:true,passive:false}));

  /* commercialBreak antes de volver a jugar */
  const go0=go.onclick;
  go.onclick=function(){
    if(ad)return;
    const st=S,self=this,run=()=>go0.apply(self,arguments);
    if(!started||st=='play'||!sdk()||!sdk().commercialBreak){run();return}
    ad=true;
    let p;try{p=sdk().commercialBreak(()=>mute(true))}catch(e){p=Promise.resolve()}
    Promise.resolve(p).catch(()=>{}).then(()=>{mute(false);ad=false;run()});
  };

  /* que el navegador no desplace la página de Poki */
  addEventListener('keydown',e=>{if(['ArrowUp','ArrowDown',' '].includes(e.key)&&!(e.target&&/^(INPUT|TEXTAREA|SELECT)$/.test(e.target.tagName)))e.preventDefault()});
  addEventListener('wheel',e=>{if(!(e.target&&e.target.closest&&e.target.closest('.pn,#ov')))e.preventDefault()},{passive:false});
})();
