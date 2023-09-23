// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function t(r){return"number"==typeof r}function n(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function i(r,e,t){var i=!1,a=e-r.length;return a<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+n(a):n(a)+r,i&&(r="-"+r)),r}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function c(r){var e,n,c;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,c=parseInt(n,10),!isFinite(c)){if(!t(n))throw new Error("invalid integer. Value: "+n);c=0}return c<0&&("u"===r.specifier||10!==e)&&(c=4294967295+c+1),c<0?(n=(-c).toString(e),r.precision&&(n=i(n,r.precision,r.padRight)),n="-"+n):(n=c.toString(e),c||r.precision?r.precision&&(n=i(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===o.call(r.specifier)?o.call(n):a.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function l(r){return"string"==typeof r}var u=Math.abs,s=String.prototype.toLowerCase,f=String.prototype.toUpperCase,p=String.prototype.replace,g=/e\+(\d)$/,d=/e-(\d)$/,h=/^(\d+)$/,y=/^(\d+)e/,b=/\.0$/,v=/\.0*e/,w=/(\..*[^0])0*e/;function m(r){var e,n,i=parseFloat(r.arg);if(!isFinite(i)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+n);i=r.arg}switch(r.specifier){case"e":case"E":n=i.toExponential(r.precision);break;case"f":case"F":n=i.toFixed(r.precision);break;case"g":case"G":u(i)<1e-4?((e=r.precision)>0&&(e-=1),n=i.toExponential(e)):n=i.toPrecision(r.precision),r.alternate||(n=p.call(n,w,"$1e"),n=p.call(n,v,"e"),n=p.call(n,b,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=p.call(n,g,"e+0$1"),n=p.call(n,d,"e-0$1"),r.alternate&&(n=p.call(n,h,"$1."),n=p.call(n,y,"$1.e")),i>=0&&r.sign&&(n=r.sign+n),n=r.specifier===f.call(r.specifier)?f.call(n):s.call(n)}function _(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function E(r,e,t){var n=e-r.length;return n<0?r:r=t?r+_(n):_(n)+r}var S=String.fromCharCode,N=isNaN,j=Array.isArray;function I(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function k(r){var e,t,n,a,o,u,s,f,p;if(!j(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(u="",s=1,f=0;f<r.length;f++)if(l(n=r[f]))u+=n;else{if(e=void 0!==n.precision,!(n=I(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+n+"`.");for(n.mapping&&(s=n.mapping),t=n.flags,p=0;p<t.length;p++)switch(a=t.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===n.width){if(n.width=parseInt(arguments[s],10),s+=1,N(n.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[s],10),s+=1,N(n.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[s],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=c(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!N(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=N(o)?String(n.arg):S(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=m(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=E(n.arg,n.width,n.padRight)),u+=n.arg||"",s+=1}return u}var x=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function F(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function O(r){var e,t,n,i;for(t=[],i=0,n=x.exec(r);n;)(e=r.slice(i,x.lastIndex-n[0].length)).length&&t.push(e),t.push(F(n)),i=x.lastIndex,n=x.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function T(r){return"string"==typeof r}function A(r){var e,t,n;if(!T(r))throw new TypeError(A("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=O(r),(t=new Array(arguments.length))[0]=e,n=1;n<t.length;n++)t[n]=arguments[n];return k.apply(null,t)}var V=Object.prototype,P=V.toString,$=V.__defineGetter__,C=V.__defineSetter__,R=V.__lookupGetter__,Z=V.__lookupSetter__;var G=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var n,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===P.call(r))throw new TypeError(A("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===P.call(t))throw new TypeError(A("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(R.call(r,e)||Z.call(r,e)?(n=r.__proto__,r.__proto__=V,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),a="get"in t,o="set"in t,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&$&&$.call(r,e,t.get),o&&C&&C.call(r,e,t.set),r};function W(r,e,t){G(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function L(r){return"number"==typeof r}var U="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function H(){return U&&"symbol"==typeof Symbol.toStringTag}var M=Object.prototype.toString;var X=Object.prototype.hasOwnProperty;var Y="function"==typeof Symbol?Symbol:void 0,z="function"==typeof Y?Y.toStringTag:"";var q=H()?function(r){var e,t,n,i,a;if(null==r)return M.call(r);t=r[z],a=z,e=null!=(i=r)&&X.call(i,a);try{r[z]=void 0}catch(e){return M.call(r)}return n=M.call(r),e?r[z]=t:delete r[z],n}:function(r){return M.call(r)},B=Number,D=B.prototype.toString;var J=H();function K(r){return"object"==typeof r&&(r instanceof B||(J?function(r){try{return D.call(r),!0}catch(r){return!1}}(r):"[object Number]"===q(r)))}function Q(r){return L(r)||K(r)}W(Q,"isPrimitive",L),W(Q,"isObject",K);var rr=Number.POSITIVE_INFINITY,er=B.NEGATIVE_INFINITY,tr=Math.floor;function nr(r){return tr(r)===r}function ir(r){return r<rr&&r>er&&nr(r)}function ar(r){return L(r)&&ir(r)}function or(r){return K(r)&&ir(r.valueOf())}function cr(r){return ar(r)||or(r)}function lr(r){return ar(r)&&r>0}function ur(r){return or(r)&&r.valueOf()>0}function sr(r){return lr(r)||ur(r)}W(cr,"isPrimitive",ar),W(cr,"isObject",or),W(sr,"isPrimitive",lr),W(sr,"isObject",ur);function fr(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&nr(r.length)&&r.length>=0&&r.length<=4294967295}function pr(r){return r!=r}var gr=Object.prototype.toString;var dr=Object.prototype.hasOwnProperty;var hr="function"==typeof Y?Y.toStringTag:"";var yr=H()?function(r){var e,t,n,i,a;if(null==r)return gr.call(r);t=r[hr],a=hr,e=null!=(i=r)&&dr.call(i,a);try{r[hr]=void 0}catch(e){return gr.call(r)}return n=gr.call(r),e?r[hr]=t:delete r[hr],n}:function(r){return gr.call(r)},br="function"==typeof Float64Array;var vr="function"==typeof Float64Array?Float64Array:null;var wr="function"==typeof Float64Array?Float64Array:void 0;var mr=function(){var r,e,t;if("function"!=typeof vr)return!1;try{e=new vr([1,3.14,-3.14,NaN]),t=e,r=(br&&t instanceof Float64Array||"[object Float64Array]"===yr(t))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?wr:function(){throw new Error("not implemented")};function _r(){var r,e=arguments,t=e[0],n="https://stdlib.io/e/"+t+"?";for(r=1;r<e.length;r++)n+="&arg[]="+encodeURIComponent(e[r]);return n}function Er(r,e){var t,n,i,a,o,c,l,u,s,f;if(1===arguments.length)t=[0,0],l=r;else{if(!fr(r))throw new TypeError(_r("1IZ9a,Hy",r));t=r,l=e}if(!lr(l))throw new TypeError(_r("1IZ9b,Hn",l));return i=new mr(l),s=l-1,o=0,c=0,f=-1,u=0,p;function p(r){var e,p;if(0===arguments.length)return 0===u?null:(t[0]=c,1===u?pr(o)?t[1]=NaN:t[1]=0:t[1]=u<l?o/(u-1):o/s,t);if(f=(f+1)%l,pr(r))u=l,c=NaN,o=NaN;else{if(u<l)return i[f]=r,o+=(n=r-c)*(r-(c+=n/(u+=1))),t[0]=c,t[1]=1===u?0:o/(u-1),t;if(1===u)return c=r,o=0,t[0]=r,t[1]=0,t;if(pr(i[f])){for(u=1,c=r,o=0,e=0;e<l;e++)if(e!==f){if(pr(p=i[e])){u=l,c=NaN,o=NaN;break}o+=(n=p-c)*(p-(c+=n/(u+=1)))}}else!1===pr(o)&&(a=i[f],o+=(n=r-a)*(a-c+(r-(c+=n/l))))}return i[f]=r,t[0]=c,t[1]=o/s,t}}export{Er as default};
//# sourceMappingURL=mod.js.map
