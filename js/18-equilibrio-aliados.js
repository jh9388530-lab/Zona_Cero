/* Equilibrio de aliados: en Oleadas y Campaña también aguantan más (la Clasificatoria ya fija la vida de sus bots) */
(function(){
  const _mkA=mkA;
  mkA=function(t,x,y){const a=_mkA(t,x,y);
    if(!CL&&t!=2&&a.mhp<1e8){const f=[1.6,1.45,1.25][SET.dif==null?1:SET.dif];a.hp=a.mhp=Math.round(a.mhp*f)}
    return a};
})();
