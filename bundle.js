// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).some=e()}(this,(function(){"use strict";function r(r){if(r.__esModule)return r;var e=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(r).forEach((function(t){var n=Object.getOwnPropertyDescriptor(r,t);Object.defineProperty(e,t,n.get?n:{enumerable:!0,get:function(){return r[t]}})})),e}var e=Math.floor;var t=function(r){return e(r)===r},n=t;var i=function(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&n(r.length)&&r.length>=0&&r.length<=9007199254740991},a="function"==typeof Object.defineProperty?Object.defineProperty:null;var o=function(){try{return a({},"x",{}),!0}catch(r){return!1}},u=Object.defineProperty,c=Object.prototype,s=c.toString,f=c.__defineGetter__,l=c.__defineSetter__,p=c.__lookupGetter__,v=c.__lookupSetter__;var g=function(r,e,t){var n,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===s.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===s.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((i="value"in t)&&(p.call(r,e)||v.call(r,e)?(n=r.__proto__,r.__proto__=c,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),a="get"in t,o="set"in t,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&f&&f.call(r,e,t.get),o&&l&&l.call(r,e,t.set),r},d=u,m=g,h=o()?d:m;var b=function(r,e,t){h(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})},w=b;var y=function(r){return"number"==typeof r};var E=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var j=function(){return E&&"symbol"==typeof Symbol.toStringTag},P=Object.prototype.toString,_=P;var O=function(r){return _.call(r)},T=Object.prototype.hasOwnProperty;var x=function(r,e){return null!=r&&T.call(r,e)},V="function"==typeof Symbol?Symbol.toStringTag:"",S=x,k=V,I=P;var A=O,F=function(r){var e,t,n;if(null==r)return I.call(r);t=r[k],e=S(r,k);try{r[k]=void 0}catch(e){return I.call(r)}return n=I.call(r),e?r[k]=t:delete r[k],n},R=j()?F:A,$=Number,M=$.prototype.toString;var C=R,N=$,B=function(r){try{return M.call(r),!0}catch(r){return!1}},G=j();var L=function(r){return"object"==typeof r&&(r instanceof N||(G?B(r):"[object Number]"===C(r)))},Z=y,W=L;var X=w,z=function(r){return Z(r)||W(r)},U=L;X(z,"isPrimitive",y),X(z,"isObject",U);var Y=z,D=Number.POSITIVE_INFINITY,q=$.NEGATIVE_INFINITY,H=D,J=q,K=t;var Q=function(r){return r<H&&r>J&&K(r)},rr=Y.isPrimitive,er=Q;var tr=function(r){return rr(r)&&er(r)},nr=Y.isObject,ir=Q;var ar=function(r){return nr(r)&&ir(r.valueOf())},or=tr,ur=ar;var cr=w,sr=function(r){return or(r)||ur(r)},fr=ar;cr(sr,"isPrimitive",tr),cr(sr,"isObject",fr);var lr=sr,pr=lr.isPrimitive;var vr=function(r){return pr(r)&&r>0},gr=lr.isObject;var dr=function(r){return gr(r)&&r.valueOf()>0},mr=vr,hr=dr;var br=w,wr=function(r){return mr(r)||hr(r)},yr=dr;br(wr,"isPrimitive",vr),br(wr,"isObject",yr);var Er=wr;var jr=function(r){return"string"==typeof r},Pr=String.prototype.valueOf;var _r=R,Or=function(r){try{return Pr.call(r),!0}catch(r){return!1}},Tr=j();var xr=function(r){return"object"==typeof r&&(r instanceof String||(Tr?Or(r):"[object String]"===_r(r)))},Vr=jr,Sr=xr;var kr=w,Ir=function(r){return Vr(r)||Sr(r)},Ar=xr;kr(Ir,"isPrimitive",jr),kr(Ir,"isObject",Ar);var Fr=Ir;var Rr=function(r){return r!=r},$r=Y.isPrimitive,Mr=Rr;var Cr=function(r){return $r(r)&&Mr(r)},Nr=Y.isObject,Br=Rr;var Gr=function(r){return Nr(r)&&Br(r.valueOf())},Lr=Cr,Zr=Gr;var Wr=w,Xr=function(r){return Lr(r)||Zr(r)},zr=Gr;Wr(Xr,"isPrimitive",Cr),Wr(Xr,"isObject",zr);var Ur=i,Yr=lr.isPrimitive,Dr=Fr.isPrimitive,qr=Xr.isPrimitive;var Hr=function(r,e,t){var n,i,a;if(!Ur(r)&&!Dr(r))throw new TypeError("invalid argument. First argument must be array-like. Value: `"+r+"`.");if(arguments.length<2)throw new Error("insufficient input arguments. Must provide a search value.");if(arguments.length>2){if(!Yr(t))throw new TypeError("invalid argument. Third argument must be an integer. Value: `"+t+"`.");(i=t)<0&&(i=0)}else i=0;if(Dr(r)){if(!Dr(e))throw new TypeError("invalid argument. Second argument must be a string primitive. Value: `"+e+"`.");return-1!==r.indexOf(e,i)}if(n=r.length,qr(e)){for(a=i;a<n;a++)if(qr(r[a]))return!0;return!1}for(a=i;a<n;a++)if(r[a]===e)return!0;return!1},Jr=Hr,Kr=Fr.isPrimitive;var Qr=function(r){if(!Kr(r))throw new TypeError("invalid argument. Must provide a primitive string. Value: `"+r+"`.");return r.toLowerCase()},re=Fr.isPrimitive;var ee=function(r){if(!re(r))throw new TypeError("invalid argument. Must provide a primitive string. Value: `"+r+"`.");return r.toUpperCase()},te=Qr,ne=ee,ie=Fr.isPrimitive;var ae=function(r){return ie(r)&&r===ne(r)&&r!==te(r)},oe=D,ue=q;var ce=function(r){return r==r&&r>ue&&r<oe},se=lr.isPrimitive;var fe=function(r){return se(r)&&r>=0},le=lr.isObject;var pe=function(r){return le(r)&&r.valueOf()>=0},ve=fe,ge=pe;var de=w,me=function(r){return ve(r)||ge(r)},he=pe;de(me,"isPrimitive",fe),de(me,"isObject",he);var be=me.isPrimitive,we=Fr.isPrimitive;var ye=function(r,e){var t,n;if(!we(r))throw new TypeError("invalid argument. First argument must be a string. Value: `"+r+"`.");if(!be(e))throw new TypeError("invalid argument. Second argument must be a nonnegative integer. Value: `"+e+"`.");if(0===r.length||0===e)return"";if(r.length*e>9007199254740991)throw new RangeError("invalid argument. Output string length exceeds maximum allowed string length.");for(t="",n=e;1==(1&n)&&(t+=r),0!==(n>>>=1);)r+=r;return t},Ee=lr.isPrimitive,je=Fr.isPrimitive;var Pe=function(r,e,t){var n,i;if(!je(r))throw new TypeError("invalid argument. First argument must be a string primitive. Value: `"+r+"`.");if(!je(e))throw new TypeError("invalid argument. Second argument must be a string primitive. Value: `"+e+"`.");if(arguments.length>2){if(!Ee(t))throw new TypeError("invalid argument. Third argument must be an integer. Value: `"+t+"`.");n=t<0?r.length+t:t}else n=0;if(0===e.length)return!0;if(n<0||n+e.length>r.length)return!1;for(i=0;i<e.length;i++)if(r.charCodeAt(n+i)!==e.charCodeAt(i))return!1;return!0},_e=ye,Oe=Pe;var Te=function(r,e,t){var n=!1,i=e-r.length;return i<0||(Oe(r,"-")&&(n=!0,r=r.substr(1)),r=t?r+_e("0",i):_e("0",i)+r,n&&(r="-"+r)),r},xe=ae,Ve=ee,Se=Qr,ke=ce,Ie=Y.isPrimitive,Ae=Te;var Fe=function(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!ke(n)){if(!Ie(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=Ae(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=Ae(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=xe(r.specifier)?Ve(t):Se(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t},Re=Fr.isPrimitive,$e=/[-\/\\^$*+?.()|[\]{}]/g;var Me=function(r){var e,t;if(!Re(r))throw new TypeError("invalid argument. Must provide a regular expression string. Value: `"+r+"`.");if("/"===r[0])for(t=r.length-1;t>=0&&"/"!==r[t];t--);return void 0===t||t<=0?r.replace($e,"\\$&"):(e=(e=r.substring(1,t)).replace($e,"\\$&"),r=r[0]+e+r.substring(t))},Ce=/./;var Ne=function(r){return"boolean"==typeof r},Be=Boolean.prototype.toString;var Ge=R,Le=function(r){try{return Be.call(r),!0}catch(r){return!1}},Ze=j();var We=function(r){return"object"==typeof r&&(r instanceof Boolean||(Ze?Le(r):"[object Boolean]"===Ge(r)))},Xe=Ne,ze=We;var Ue=w,Ye=function(r){return Xe(r)||ze(r)},De=We;Ue(Ye,"isPrimitive",Ne),Ue(Ye,"isObject",De);var qe=Ye;var He=function(){return new Function("return this;")()},Je="object"==typeof self?self:null,Ke="object"==typeof window?window:null,Qe="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},rt="object"==typeof Qe?Qe:null;module.exports=rt;var et=qe.isPrimitive,tt=He,nt=Je,it=Ke,at=r(Object.freeze({__proto__:null}));var ot=function(r){if(arguments.length){if(!et(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return tt()}if(nt)return nt;if(it)return it;if(at)return at;throw new Error("unexpected error. Unable to resolve global object.")},ut=ot(),ct=ut.document&&ut.document.childNodes,st=Int8Array,ft=Ce,lt=ct,pt=st;var vt=function(){return"function"==typeof ft||"object"==typeof pt||"function"==typeof lt};var gt=function(){return/^\s*function\s*([^(]*)/i},dt=gt;w(dt,"REGEXP",gt());var mt=dt,ht=R;var bt=Array.isArray?Array.isArray:function(r){return"[object Array]"===ht(r)};var wt=function(r){return null!==r&&"object"==typeof r};w(wt,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(e){var t,n;if(!bt(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(wt));var yt=wt;var Et=R,jt=mt.REGEXP,Pt=function(r){return yt(r)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))};var _t=function(r){var e,t,n;if(("Object"===(t=Et(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=jt.exec(n.toString()))return e[1]}return Pt(r)?"Buffer":t},Ot=_t;var Tt=_t;var xt=function(r){var e;return null===r?"null":"object"===(e=typeof r)?Ot(r).toLowerCase():e},Vt=function(r){return Tt(r).toLowerCase()},St=vt()?Vt:xt;var kt=function(r){return"function"===St(r)},It=RegExp.prototype.exec;var At=R,Ft=function(r){try{return It.call(r),!0}catch(r){return!1}},Rt=j();var $t=Me,Mt=kt,Ct=Fr.isPrimitive,Nt=function(r){return"object"==typeof r&&(r instanceof RegExp||(Rt?Ft(r):"[object RegExp]"===At(r)))};var Bt=ae,Gt=ee,Lt=Qr,Zt=function(r,e,t){if(!Ct(r))throw new TypeError("invalid argument. First argument must be a string primitive. Value: `"+r+"`.");if(Ct(e))e=$t(e),e=new RegExp(e,"g");else if(!Nt(e))throw new TypeError("invalid argument. Second argument must be a string primitive or regular expression. Value: `"+e+"`.");if(!Ct(t)&&!Mt(t))throw new TypeError("invalid argument. Third argument must be a string primitive or replacement function. Value: `"+t+"`.");return r.replace(e,t)},Wt=ce,Xt=Y.isPrimitive,zt=function(r){return Math.abs(r)},Ut=/e\+(\d)$/,Yt=/e-(\d)$/,Dt=/^(\d+)$/,qt=/^(\d+)e/,Ht=/\.0$/,Jt=/\.0*e/,Kt=/(\..*[^0])0*e/;var Qt=function(r){var e,t,n=parseFloat(r.arg);if(!Wt(n)){if(!Xt(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":zt(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=Zt(t,Kt,"$1e"),t=Zt(t,Jt,"e"),t=Zt(t,Ht,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=Zt(t,Ut,"e+0$1"),t=Zt(t,Yt,"e-0$1"),r.alternate&&(t=Zt(t,Dt,"$1."),t=Zt(t,qt,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=Bt(r.specifier)?Gt(t):Lt(t)},rn=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;var en=ye;var tn=Fr.isPrimitive,nn=Jr,an=Rr,on=Fe,un=Qt,cn=function(r){var e,t,n,i,a;for(e=0,n=[],a=rn.exec(r);a;)(t=r.slice(e,rn.lastIndex-a[0].length)).length&&n.push(t),(i=o(a,n.length))&&n.push(i),e=rn.lastIndex,a=rn.exec(r);return(t=r.slice(e)).length&&n.push(t),n;function o(r){return{mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],hasPeriod:"."===r[4],precision:r[5],specifier:r[6]}}},sn=function(r,e,t){var n=e-r.length;return n<0?r:r=t?r+en(" ",n):en(" ",n)+r},fn=Te,ln=String.fromCharCode;var pn=function(r){var e,t,n,i,a,o,u,c,s;if(!tn(r))throw new TypeError("invalid argument. Must provide a string. Value: `"+r+"`.");for(e=cn(r),o="",u=1,c=0;c<e.length;c++)if(n=e[c],tn(n))o+=n;else{for(n.mapping&&(u=n.mapping),t=n.flags,s=0;s<t.length;s++)switch(i=t.charAt(s)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=!nn(t,"-");break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,an(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if("*"===n.precision&&n.hasPeriod){if(n.precision=parseInt(arguments[u],10),u+=1,an(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,n.hasPeriod=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":n.hasPeriod&&(n.padZeros=!1),n.arg=on(n);break;case"s":n.maxWidth=n.hasPeriod?n.precision:-1;break;case"c":if(!an(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=an(a)?String(n.arg):ln(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":n.hasPeriod||(n.precision=6),n.arg=un(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=fn(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=sn(n.arg,n.width,n.padRight)),o+=n.arg||"",u+=1}return o},vn=i,gn=Er.isPrimitive,dn=pn;return function(r,e){var t,n,i;if(!vn(r))throw new TypeError(dn("invalid argument. First argument must be a collection. Value: `%s`.",r));if(!gn(e))throw new TypeError(dn("invalid argument. Second argument must be a positive integer. Value: `%s`.",e));for(n=r.length,t=0,i=0;i<n;i++)if(r[i]&&(t+=1)===e)return!0;return!1}}));
//# sourceMappingURL=bundle.js.map
