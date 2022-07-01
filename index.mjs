// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import{isPrimitive as e}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-integer@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-array-like-object@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@esm/index.mjs";function n(n,o){var m,d,a,f,l,j,h,p,N,g;if(1===arguments.length)m=[0,0],h=n;else{if(!r(n))throw new TypeError(i("0eBAC",n));m=n,h=o}if(!e(h))throw new TypeError(i("0eBAD",h));return a=new s(h),N=h-1,l=0,j=0,g=-1,p=0,u;function u(e){var r,s;if(0===arguments.length)return 0===p?null:(m[0]=j,1===p?t(l)?m[1]=NaN:m[1]=0:m[1]=p<h?l/(p-1):l/N,m);if(g=(g+1)%h,t(e))p=h,j=NaN,l=NaN;else{if(p<h)return a[g]=e,l+=(d=e-j)*(e-(j+=d/(p+=1))),m[0]=j,m[1]=1===p?0:l/(p-1),m;if(1===p)return j=e,l=0,m[0]=e,m[1]=0,m;if(t(a[g])){for(p=1,j=e,l=0,r=0;r<h;r++)if(r!==g){if(s=a[r],t(s)){p=h,j=NaN,l=NaN;break}l+=(d=s-j)*(s-(j+=d/(p+=1)))}}else!1===t(l)&&(f=a[g],l+=(d=e-f)*(f-j+(e-(j+=d/h))))}return a[g]=e,m[0]=j,m[1]=l/N,m}}export{n as default};
//# sourceMappingURL=index.mjs.map
