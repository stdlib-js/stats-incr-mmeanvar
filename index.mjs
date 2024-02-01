// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import{isPrimitive as e}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-integer@v0.1.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-array-like-object@v0.1.0-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.1.1-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@v0.1.1-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@v0.1.1-esm/index.mjs";function n(n,a){var m,l,o,d,f,u,j,p,v,h;if(1===arguments.length)m=[0,0],j=n;else{if(!t(n))throw new TypeError(i("invalid argument. Output argument must be an array-like object. Value: `%s`.",n));m=n,j=a}if(!e(j))throw new TypeError(i("invalid argument. Window size must be a positive integer. Value: `%s`.",j));return o=new s(j),v=j-1,f=0,u=0,h=-1,p=0,g;function g(e){var t,s;if(0===arguments.length)return 0===p?null:(m[0]=u,1===p?r(f)?m[1]=NaN:m[1]=0:m[1]=p<j?f/(p-1):f/v,m);if(h=(h+1)%j,r(e))p=j,u=NaN,f=NaN;else{if(p<j)return o[h]=e,f+=(l=e-u)*(e-(u+=l/(p+=1))),m[0]=u,m[1]=1===p?0:f/(p-1),m;if(1===p)return u=e,f=0,m[0]=e,m[1]=0,m;if(r(o[h])){for(p=1,u=e,f=0,t=0;t<j;t++)if(t!==h){if(s=o[t],r(s)){p=j,u=NaN,f=NaN;break}f+=(l=s-u)*(s-(u+=l/(p+=1)))}}else!1===r(f)&&(d=o[h],f+=(l=e-d)*(d-u+(e-(u+=l/j))))}return o[h]=e,m[0]=u,m[1]=f/v,m}}export{n as default};
//# sourceMappingURL=index.mjs.map
