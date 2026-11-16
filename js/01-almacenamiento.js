/*gj-storage*/(function(){try{var R=window.localStorage,P="gj:zona:",ks=function(){return Object.keys(R).filter(function(k){return k.indexOf(P)===0})};
var X=new Proxy({},{get:function(_,k){if(k==="getItem")return function(a){return R.getItem(P+a)};if(k==="setItem")return function(a,v){R.setItem(P+a,v)};
if(k==="removeItem")return function(a){R.removeItem(P+a)};if(k==="clear")return function(){ks().forEach(function(x){R.removeItem(x)})};
if(k==="key")return function(i){var a=ks()[i];return a===undefined?null:a.slice(P.length)};if(k==="length")return ks().length;
if(typeof k!=="string")return undefined;var v=R.getItem(P+k);return v===null?undefined:v},
set:function(_,k,v){R.setItem(P+k,String(v));return true},deleteProperty:function(_,k){R.removeItem(P+k);return true},
has:function(_,k){return R.getItem(P+k)!==null},ownKeys:function(){return ks().map(function(x){return x.slice(P.length)})},
getOwnPropertyDescriptor:function(_,k){return R.getItem(P+k)===null?undefined:{value:R.getItem(P+k),enumerable:true,configurable:true}}});
Object.defineProperty(window,"localStorage",{configurable:true,get:function(){return X}});}catch(e){}})();