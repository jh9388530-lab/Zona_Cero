/* Campaña, Clasificatoria y Emboscada fueron eliminadas del juego.
   El motor (js/10) todavía consulta estas variables; aquí quedan fijas en "modo apagado". */
var CM=0,CL=0,CP=null,CLS=null,CLQ=11,AMB={st:'off',sq:[]},AMBon=0;const AMBR=870;
function campHide(){}function campStart(){}function campUpd(){}function campHUD(){}function campMM(){}function campWorld(){}
function campGround(){}function campChips(){}function campConvoy(){}function campCollide(){return 0}function campTreeHit(){return false}
function campNight(){return 0}function campSpd(){return 0}function campTxt(){return ''}function campStats(){return ''}
function campClock(){return{d:1,h:0,m:0}}
function clsStart(){}function clsStats(){return ''}function clsTitle(){return ''}function clsRank(){return 1}function clsAlive(){return 0}
function ambStart(){return 0}function ambPick(){}
