// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-collection@v0.1.0-esm/index.mjs";import{isPrimitive as t}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-integer@v0.1.0-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@v0.1.1-esm/index.mjs";function s(s,i){var n,o,m;if(!e(s))throw new TypeError(r("invalid argument. First argument must be a collection. Value: `%s`.",s));if(!t(i))throw new TypeError(r("invalid argument. Second argument must be a positive integer. Value: `%s`.",i));for(o=s.length,n=0,m=0;m<o;m++)if(s[m]&&(n+=1)===i)return!0;return!1}export{s as default};
//# sourceMappingURL=index.mjs.map
