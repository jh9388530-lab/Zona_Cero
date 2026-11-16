
/* ===== EDITOR DE CONTROLES (igual que Comando Selva): arrastra cada botón, +/− tamaño, guardar ===== */
(function(){
var C={key:"zonaCero_controls_v1",base:"var(--bs,1)",
 css:"body.ceOn #ov{display:none!important}",
 els:function(){return [].filter.call(document.querySelectorAll(".gb"),function(b){return b.id&&!b.closest(".pn");}).map(function(b){return [b.id,b];});},
 pre:function(){var B=document.body;this.t=B.classList.contains("t");this.m=B.classList.contains("mn");B.classList.add("t");B.classList.remove("mn");},
 post:function(){var B=document.body;if(!this.t)B.classList.remove("t");if(this.m)B.classList.add("mn");},
 mount:function(b){document.getElementById("mr").appendChild(b);}};
var L={},W={},on=false,dr=null,bar=null,reg=[];
try{L=JSON.parse(localStorage.getItem(C.key)||"{}")||{};}catch(e){L={};}
var st=document.createElement("style");
st.textContent="#ceBar{position:fixed;top:calc(6px + env(safe-area-inset-top,0px));left:50%;transform:translateX(-50%);z-index:2147483000;background:rgba(5,8,5,.92);border:2px solid #ffd45c;border-radius:12px;padding:8px 12px;display:flex;flex-wrap:wrap;gap:6px 8px;align-items:center;justify-content:center;max-width:96vw;color:#fff;font:600 12px system-ui,sans-serif;text-align:center}#ceBar b{color:#ffd45c;font-size:13px;letter-spacing:1px}#ceBar span{flex-basis:100%;opacity:.85}#ceBar button{background:#263047;color:#fff;border:2px solid #ffffff44;border-radius:8px;padding:7px 12px;font:800 12px system-ui,sans-serif;cursor:pointer}#ceBar button[data-a=sv]{background:#ffd45c;color:#1b1500}body.ceOn,body.ceOn *{touch-action:none!important}body.ceOn [data-ce]{outline:2px dashed #ffd45c;outline-offset:3px;pointer-events:auto!important;opacity:1!important}body.ceOn,body.ceOn *{cursor:default!important}body.ceOn #ceBar button{cursor:pointer!important}body.ceOn [data-ce],body.ceOn [data-ce] *{cursor:move!important}#ceToast{position:fixed;left:50%;top:50%;transform:translate(-50%,-50%);background:rgba(0,0,0,.85);color:#ffcc33;padding:14px 22px;border:2px solid #7a5400;border-radius:8px;font:800 15px system-ui,sans-serif;z-index:2147483001;pointer-events:none}"+(C.css||"");
document.head.appendChild(st);
function sc(s){return C.base?"calc("+C.base+" * "+s+")":String(s);}
function put(el,o){el.style.translate=(o.x||0)+"px "+(o.y||0)+"px";el.style.scale=sc(o.s||1);}
function clr(el){el.style.translate="";el.style.scale="";}
function ap(m){C.els().forEach(function(p){if(m[p[0]])put(p[1],m[p[0]]);else clr(p[1]);});}
function vis(el){return el.getClientRects().length>0;}
function toast(t){var d=document.createElement("div");d.id="ceToast";d.textContent=t;document.body.appendChild(d);setTimeout(function(){d.remove();},1400);}
function hit(t){for(var i=0;i<reg.length;i++)if(reg[i][1].contains(t))return reg[i];return null;}
function blk(e){
  if(!on||(bar&&bar.contains(e.target)))return;
  e.stopImmediatePropagation();
  if(e.cancelable)e.preventDefault();
  if(e.type==="pointerdown"){
    var h=hit(e.target);
    if(h){var o=W[h[0]]||(W[h[0]]={x:0,y:0,s:1});dr={k:h[0],el:h[1],x:e.clientX,y:e.clientY,ox:o.x||0,oy:o.y||0,id:e.pointerId};}
  }else if(e.type==="pointermove"&&dr&&e.pointerId===dr.id){
    var q=W[dr.k];q.x=dr.ox+(e.clientX-dr.x);q.y=dr.oy+(e.clientY-dr.y);put(dr.el,q);
  }else if(e.type==="pointerup"||e.type==="pointercancel"){dr=null;}
}
["pointerdown","pointermove","pointerup","pointercancel","mousedown","mousemove","mouseup","touchstart","touchmove","touchend","touchcancel","click","dblclick","contextmenu","wheel"].forEach(function(t){window.addEventListener(t,blk,{capture:true,passive:false});});
function open(){
  if(on)return;on=true;
  if(C.pre)C.pre();
  document.body.classList.add("ceOn");
  W=JSON.parse(JSON.stringify(L));
  reg=C.els().filter(function(p){return vis(p[1]);});
  reg.forEach(function(p){p[1].setAttribute("data-ce","1");});
  ap(W);
  bar=document.createElement("div");bar.id="ceBar";
  bar.innerHTML='<b>EDITAR CONTROLES</b><span>Arrastra cada botón · + / − cambia el tamaño</span><button data-a="up">+</button><button data-a="dn">−</button>'+(C.alt?'<button data-a="al">'+(C.altText||"CAMBIAR")+'</button>':'')+'<button data-a="rs">RESTAURAR</button><button data-a="sv">GUARDAR</button><button data-a="cl">CERRAR</button>';
  bar.addEventListener("click",function(e){
    var a=e.target.getAttribute&&e.target.getAttribute("data-a");if(!a)return;
    if(a==="up"||a==="dn"){reg.forEach(function(p){var o=W[p[0]]||(W[p[0]]={x:0,y:0,s:1});o.s=Math.max(.6,Math.min(1.6,(o.s||1)+(a==="up"?.1:-.1)));put(p[1],o);});}
    else if(a==="al"){C.alt();reg.forEach(function(p){p[1].removeAttribute("data-ce");});reg=C.els().filter(function(p){return vis(p[1]);});reg.forEach(function(p){p[1].setAttribute("data-ce","1");});ap(W);}
    else if(a==="rs"){W={};reg.forEach(function(p){clr(p[1]);});}
    else close(a==="sv");
  });
  document.body.appendChild(bar);
}
function close(save){
  if(!on)return;on=false;dr=null;
  if(save){L=W;try{localStorage.setItem(C.key,JSON.stringify(L));}catch(e){}}
  ap(L);
  reg.forEach(function(p){p[1].removeAttribute("data-ce");});reg=[];
  document.body.classList.remove("ceOn");
  if(C.post)C.post();
  if(bar){bar.remove();bar=null;}
  if(save)toast("✓ Controles guardados");
}
var btn=document.createElement("button");btn.id="ceOpen";btn.type="button";btn.textContent="🎮 Editar controles";
C.mount(btn);
btn.addEventListener("click",function(e){e.preventDefault();open();});
if(C.watch){var w=document.querySelector(C.watch);if(w)new MutationObserver(function(){if(!on)ap(L);}).observe(w,{childList:true});}
ap(L);
})();
