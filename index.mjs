// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import{isPrimitive as e}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-integer@v0.1.0-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-array-like-object@v0.1.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.1.0-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@v0.1.0-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.1.0-esm/index.mjs";function n(n,o){var m,a,d,f,l,j,h,p,v,N;if(1===arguments.length)m=[0,0],h=n;else{if(!r(n))throw new TypeError(i("1IZ9a,Hy",n));m=n,h=o}if(!e(h))throw new TypeError(i("1IZ9b,Hn",h));return d=new s(h),v=h-1,l=0,j=0,N=-1,p=0,b;function b(e){var r,s;if(0===arguments.length)return 0===p?null:(m[0]=j,1===p?t(l)?m[1]=NaN:m[1]=0:m[1]=p<h?l/(p-1):l/v,m);if(N=(N+1)%h,t(e))p=h,j=NaN,l=NaN;else{if(p<h)return d[N]=e,l+=(a=e-j)*(e-(j+=a/(p+=1))),m[0]=j,m[1]=1===p?0:l/(p-1),m;if(1===p)return j=e,l=0,m[0]=e,m[1]=0,m;if(t(d[N])){for(p=1,j=e,l=0,r=0;r<h;r++)if(r!==N){if(s=d[r],t(s)){p=h,j=NaN,l=NaN;break}l+=(a=s-j)*(s-(j+=a/(p+=1)))}}else!1===t(l)&&(f=d[N],l+=(a=e-f)*(f-j+(e-(j+=a/h))))}return d[N]=e,m[0]=j,m[1]=l/v,m}}export{n as default};
//# sourceMappingURL=index.mjs.map
