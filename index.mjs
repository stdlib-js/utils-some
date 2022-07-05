// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-collection@esm/index.mjs";import{isPrimitive as t}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-integer@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@esm/index.mjs";function s(s,i){var o,n,d;if(!r(s))throw new TypeError(e("0lgBO",s));if(!t(i))throw new TypeError(e("0lg4I",i));for(n=s.length,o=0,d=0;d<n;d++)if(s[d]&&(o+=1)===i)return!0;return!1}export{s as default};
//# sourceMappingURL=index.mjs.map
