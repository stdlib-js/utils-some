"use strict";var o=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var n=o(function(p,s){
var v=require('@stdlib/assert-is-collection/dist'),m=require('@stdlib/assert-is-positive-integer/dist').isPrimitive,u=require('@stdlib/error-tools-fmtprodmsg/dist');function f(e,r){var t,a,i;if(!v(e))throw new TypeError(u('1XfAh',e));if(!m(r))throw new TypeError(u('1Xf45',r));for(a=e.length,t=0,i=0;i<a;i++)if(e[i]&&(t+=1,t===r))return!0;return!1}s.exports=f
});var g=n();module.exports=g;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
