// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-collection@v0.1.0-esm/index.mjs";import{isPrimitive as t}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-integer@v0.1.0-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.1.0-esm/index.mjs";function s(s,i){var o,n,d;if(!r(s))throw new TypeError(e("1XfAh,O3",s));if(!t(i))throw new TypeError(e("1Xf45,IB",i));for(n=s.length,o=0,d=0;d<n;d++)if(s[d]&&(o+=1)===i)return!0;return!1}export{s as default};
//# sourceMappingURL=index.mjs.map
