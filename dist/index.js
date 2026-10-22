"use strict";var o=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(i){throw (r=0, i)}};};var n=o(function(p,s){
var v=require('@stdlib/assert-is-collection/dist'),m=require('@stdlib/assert-is-positive-integer/dist').isPrimitive,u=require('@stdlib/error-tools-fmtprodmsg/dist');function f(e,r){var i,a,t;if(!v(e))throw new TypeError(u('1XfAh',e));if(!m(r))throw new TypeError(u('1Xf45',r));for(a=e.length,i=0,t=0;t<a;t++)if(e[t]&&(i+=1,i===r))return!0;return!1}s.exports=f
});var g=n();module.exports=g;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
