/* SOS en oleadas: el avión de ayuda (F o el botón) manda 2 aviones a la zona.
   Usa globales de game.js: Z, A, say, note, air, b16, ayT, SET, p. */
let CLk='';
function callPending(){return Z.find(z=>!z.done)}
function callStart(z){
  say('¡Capitán, nos rodean! Necesitamos refuerzos.','s',2,A.find(a=>a.z===z&&a.t<2));
  if(SET.nt>>8&1){zm='SOS: pulsa F o el avión para mandar 2 aviones';zt=4}
  else note(8,'SOS: pulsa F o el avión para mandar 2 aviones');
  CLk=''
}
function callKey(){const z=callPending();return (z?1:0)+':'+(p.ac>0?Math.ceil(p.ac):0)}
function callUpd(){
  const k=callKey();
  if(k!==CLk){
    CLk=k;
    const z=callPending();
    b16.style.visibility=(z||p.ac>0)?'visible':'hidden';
    b16.classList.toggle('bl',!!z&&p.ac<=0);
    ayT.textContent=p.ac>0?Math.ceil(p.ac)+' s':'¡Ayuda!'
  }
}
function callDraw(){}
function callTap(){air()}
function callReset(){CLk=''}
function callHold(){return 0}
function callPanel(){}
