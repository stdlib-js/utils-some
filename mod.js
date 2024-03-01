// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var e=Math.floor;function r(r){return e(r)===r}var t=9007199254740991;var i="function"==typeof Object.defineProperty?Object.defineProperty:null;var n=Object.defineProperty;function a(e){return"number"==typeof e}function o(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function c(e,r,t){var i=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+o(n):o(n)+e,i&&(e="-"+e)),e}var s=String.prototype.toLowerCase,l=String.prototype.toUpperCase;function p(e){var r,t,i;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,i=parseInt(t,10),!isFinite(i)){if(!a(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&("u"===e.specifier||10!==r)&&(i=4294967295+i+1),i<0?(t=(-i).toString(r),e.precision&&(t=c(t,e.precision,e.padRight)),t="-"+t):(t=i.toString(r),i||e.precision?e.precision&&(t=c(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===l.call(e.specifier)?l.call(t):s.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}var u=Math.abs,f=String.prototype.toLowerCase,g=String.prototype.toUpperCase,d=String.prototype.replace,h=/e\+(\d)$/,b=/e-(\d)$/,v=/^(\d+)$/,y=/^(\d+)e/,w=/\.0$/,m=/\.0*e/,_=/(\..*[^0])0*e/;function E(e){var r,t,i=parseFloat(e.arg);if(!isFinite(i)){if(!a(e.arg))throw new Error("invalid floating-point number. Value: "+t);i=e.arg}switch(e.specifier){case"e":case"E":t=i.toExponential(e.precision);break;case"f":case"F":t=i.toFixed(e.precision);break;case"g":case"G":u(i)<1e-4?((r=e.precision)>0&&(r-=1),t=i.toExponential(r)):t=i.toPrecision(e.precision),e.alternate||(t=d.call(t,_,"$1e"),t=d.call(t,m,"e"),t=d.call(t,w,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=d.call(t,h,"e+0$1"),t=d.call(t,b,"e-0$1"),e.alternate&&(t=d.call(t,v,"$1."),t=d.call(t,y,"$1.e")),i>=0&&e.sign&&(t=e.sign+t),t=e.specifier===g.call(e.specifier)?g.call(t):f.call(t)}function S(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}var j=String.fromCharCode,k=isNaN,x=Array.isArray;function I(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function T(e){var r,t,i,n,a,o,s,l,u,f,g,d,h;if(!x(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",s=1,l=0;l<e.length;l++)if(i=e[l],"string"==typeof i)o+=i;else{if(r=void 0!==i.precision,!(i=I(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+i+"`.");for(i.mapping&&(s=i.mapping),t=i.flags,u=0;u<t.length;u++)switch(n=t.charAt(u)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===i.width){if(i.width=parseInt(arguments[s],10),s+=1,k(i.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(r&&"*"===i.precision){if(i.precision=parseInt(arguments[s],10),s+=1,k(i.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,r=!1)}switch(i.arg=arguments[s],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(i.padZeros=!1),i.arg=p(i);break;case"s":i.maxWidth=r?i.precision:-1;break;case"c":if(!k(i.arg)){if((a=parseInt(i.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=k(a)?String(i.arg):j(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(i.precision=6),i.arg=E(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=c(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=(f=i.arg,g=i.width,d=i.padRight,h=void 0,(h=g-f.length)<0?f:f=d?f+S(h):S(h)+f)),o+=i.arg||"",s+=1}return o}var O=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function V(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function F(e){var r,t,i,n;for(t=[],n=0,i=O.exec(e);i;)(r=e.slice(n,O.lastIndex-i[0].length)).length&&t.push(r),t.push(V(i)),n=O.lastIndex,i=O.exec(e);return(r=e.slice(n)).length&&t.push(r),t}function N(e){var r,t;if("string"!=typeof e)throw new TypeError(N("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[F(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return T.apply(null,r)}var P=Object.prototype,$=P.toString,A=P.__defineGetter__,C=P.__defineSetter__,R=P.__lookupGetter__,G=P.__lookupSetter__;var Z=function(){try{return i({},"x",{}),!0}catch(e){return!1}}()?n:function(e,r,t){var i,n,a,o;if("object"!=typeof e||null===e||"[object Array]"===$.call(e))throw new TypeError(N("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===$.call(t))throw new TypeError(N("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((n="value"in t)&&(R.call(e,r)||G.call(e,r)?(i=e.__proto__,e.__proto__=P,delete e[r],e[r]=t.value,e.__proto__=i):e[r]=t.value),a="get"in t,o="set"in t,n&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&A&&A.call(e,r,t.get),o&&C&&C.call(e,r,t.set),e};function W(e,r,t){Z(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function X(e){return"number"==typeof e}var L="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function U(){return L&&"symbol"==typeof Symbol.toStringTag}var M=Object.prototype.toString;var Y=Object.prototype.hasOwnProperty;var z="function"==typeof Symbol?Symbol:void 0,q="function"==typeof z?z.toStringTag:"";var B=U()?function(e){var r,t,i,n,a;if(null==e)return M.call(e);t=e[q],a=q,r=null!=(n=e)&&Y.call(n,a);try{e[q]=void 0}catch(r){return M.call(e)}return i=M.call(e),r?e[q]=t:delete e[q],i}:function(e){return M.call(e)},D=Number,H=D.prototype.toString;var J=U();function K(e){return"object"==typeof e&&(e instanceof D||(J?function(e){try{return H.call(e),!0}catch(e){return!1}}(e):"[object Number]"===B(e)))}function Q(e){return X(e)||K(e)}W(Q,"isPrimitive",X),W(Q,"isObject",K);var ee=Number.POSITIVE_INFINITY,re=D.NEGATIVE_INFINITY;function te(e){return e<ee&&e>re&&r(e)}function ie(e){return X(e)&&te(e)}function ne(e){return K(e)&&te(e.valueOf())}function ae(e){return ie(e)||ne(e)}function oe(e){return ie(e)&&e>0}function ce(e){return ne(e)&&e.valueOf()>0}function se(e){return oe(e)||ce(e)}function le(){var e,r=arguments,t="https://stdlib.io/e/"+r[0]+"?";for(e=1;e<r.length;e++)t+="&arg[]="+encodeURIComponent(r[e]);return t}function pe(e,i){var n,a,o,c;if(!("object"==typeof(c=e)&&null!==c&&"number"==typeof c.length&&r(c.length)&&c.length>=0&&c.length<=t))throw new TypeError(le("1XfAh",e));if(!oe(i))throw new TypeError(le("1Xf45",i));for(a=e.length,n=0,o=0;o<a;o++)if(e[o]&&(n+=1)===i)return!0;return!1}W(ae,"isPrimitive",ie),W(ae,"isObject",ne),W(se,"isPrimitive",oe),W(se,"isObject",ce);export{pe as default};
//# sourceMappingURL=mod.js.map
