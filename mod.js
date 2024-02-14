// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var r=Object.defineProperty;function t(e){return"number"==typeof e}function i(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function n(e,r,t){var n=!1,a=r-e.length;return a<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=t?e+i(a):i(a)+e,n&&(e="-"+e)),e}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function c(e){var r,i,c;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(i=e.arg,c=parseInt(i,10),!isFinite(c)){if(!t(i))throw new Error("invalid integer. Value: "+i);c=0}return c<0&&("u"===e.specifier||10!==r)&&(c=4294967295+c+1),c<0?(i=(-c).toString(r),e.precision&&(i=n(i,e.precision,e.padRight)),i="-"+i):(i=c.toString(r),c||e.precision?e.precision&&(i=n(i,e.precision,e.padRight)):i="",e.sign&&(i=e.sign+i)),16===r&&(e.alternate&&(i="0x"+i),i=e.specifier===o.call(e.specifier)?o.call(i):a.call(i)),8===r&&e.alternate&&"0"!==i.charAt(0)&&(i="0"+i),i}function s(e){return"string"==typeof e}var l=Math.abs,p=String.prototype.toLowerCase,u=String.prototype.toUpperCase,f=String.prototype.replace,g=/e\+(\d)$/,d=/e-(\d)$/,h=/^(\d+)$/,w=/^(\d+)e/,v=/\.0$/,b=/\.0*e/,y=/(\..*[^0])0*e/;function m(e){var r,i,n=parseFloat(e.arg);if(!isFinite(n)){if(!t(e.arg))throw new Error("invalid floating-point number. Value: "+i);n=e.arg}switch(e.specifier){case"e":case"E":i=n.toExponential(e.precision);break;case"f":case"F":i=n.toFixed(e.precision);break;case"g":case"G":l(n)<1e-4?((r=e.precision)>0&&(r-=1),i=n.toExponential(r)):i=n.toPrecision(e.precision),e.alternate||(i=f.call(i,y,"$1e"),i=f.call(i,b,"e"),i=f.call(i,v,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return i=f.call(i,g,"e+0$1"),i=f.call(i,d,"e-0$1"),e.alternate&&(i=f.call(i,h,"$1."),i=f.call(i,w,"$1.e")),n>=0&&e.sign&&(i=e.sign+i),i=e.specifier===u.call(e.specifier)?u.call(i):p.call(i)}function E(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function k(e,r,t){var i=r-e.length;return i<0?e:e=t?e+E(i):E(i)+e}var S=String.fromCharCode,x=isNaN,_=Array.isArray;function F(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function I(e){var r,t,i,a,o,l,p,u,f;if(!_(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(l="",p=1,u=0;u<e.length;u++)if(s(i=e[u]))l+=i;else{if(r=void 0!==i.precision,!(i=F(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+i+"`.");for(i.mapping&&(p=i.mapping),t=i.flags,f=0;f<t.length;f++)switch(a=t.charAt(f)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===i.width){if(i.width=parseInt(arguments[p],10),p+=1,x(i.width))throw new TypeError("the argument for * width at position "+p+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(r&&"*"===i.precision){if(i.precision=parseInt(arguments[p],10),p+=1,x(i.precision))throw new TypeError("the argument for * precision at position "+p+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,r=!1)}switch(i.arg=arguments[p],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(i.padZeros=!1),i.arg=c(i);break;case"s":i.maxWidth=r?i.precision:-1;break;case"c":if(!x(i.arg)){if((o=parseInt(i.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=x(o)?String(i.arg):S(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(i.precision=6),i.arg=m(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=n(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=k(i.arg,i.width,i.padRight)),l+=i.arg||"",p+=1}return l}var N=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function V(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function T(e){var r,t,i,n;for(t=[],n=0,i=N.exec(e);i;)(r=e.slice(n,N.lastIndex-i[0].length)).length&&t.push(r),t.push(V(i)),n=N.lastIndex,i=N.exec(e);return(r=e.slice(n)).length&&t.push(r),t}function j(e){return"string"==typeof e}function A(e){var r,t;if(!j(e))throw new TypeError(A("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[T(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return I.apply(null,r)}var $=Object.prototype,O=$.toString,C=$.__defineGetter__,R=$.__defineSetter__,P=$.__lookupGetter__,Z=$.__lookupSetter__;var W=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,t){var i,n,a,o;if("object"!=typeof e||null===e||"[object Array]"===O.call(e))throw new TypeError(A("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===O.call(t))throw new TypeError(A("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((n="value"in t)&&(P.call(e,r)||Z.call(e,r)?(i=e.__proto__,e.__proto__=$,delete e[r],e[r]=t.value,e.__proto__=i):e[r]=t.value),a="get"in t,o="set"in t,n&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&C&&C.call(e,r,t.get),o&&R&&R.call(e,r,t.set),e};function G(e,r,t){W(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function L(e){return"number"==typeof e}var U="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function X(){return U&&"symbol"==typeof Symbol.toStringTag}var z=Object.prototype.toString;var M=Object.prototype.hasOwnProperty;function Y(e,r){return null!=e&&M.call(e,r)}var q="function"==typeof Symbol?Symbol:void 0,B="function"==typeof q?q.toStringTag:"";var D=X()?function(e){var r,t,i;if(null==e)return z.call(e);t=e[B],r=Y(e,B);try{e[B]=void 0}catch(r){return z.call(e)}return i=z.call(e),r?e[B]=t:delete e[B],i}:function(e){return z.call(e)},H=Number,J=H.prototype.toString;var K=X();function Q(e){return"object"==typeof e&&(e instanceof H||(K?function(e){try{return J.call(e),!0}catch(e){return!1}}(e):"[object Number]"===D(e)))}function ee(e){return L(e)||Q(e)}G(ee,"isPrimitive",L),G(ee,"isObject",Q);var re=Number.POSITIVE_INFINITY,te=H.NEGATIVE_INFINITY,ie=Math.floor;function ne(e){return ie(e)===e}function ae(e){return e<re&&e>te&&ne(e)}function oe(e){return L(e)&&ae(e)}function ce(e){return Q(e)&&ae(e.valueOf())}function se(e){return oe(e)||ce(e)}function le(e){return oe(e)&&e>0}function pe(e){return ce(e)&&e.valueOf()>0}function ue(e){return le(e)||pe(e)}G(se,"isPrimitive",oe),G(se,"isObject",ce),G(ue,"isPrimitive",le),G(ue,"isObject",pe);function fe(e){return"object"==typeof e&&null!==e&&"number"==typeof e.length&&ne(e.length)&&e.length>=0&&e.length<=4294967295}function ge(e){return e!=e}var de=Object.prototype.toString;var he="function"==typeof Symbol?Symbol:void 0,we="function"==typeof he?he.toStringTag:"";var ve=X()?function(e){var r,t,i;if(null==e)return de.call(e);t=e[we],r=Y(e,we);try{e[we]=void 0}catch(r){return de.call(e)}return i=de.call(e),r?e[we]=t:delete e[we],i}:function(e){return de.call(e)},be="function"==typeof Float64Array;var ye="function"==typeof Float64Array?Float64Array:null;var me="function"==typeof Float64Array?Float64Array:void 0;var Ee=function(){var e,r,t;if("function"!=typeof ye)return!1;try{r=new ye([1,3.14,-3.14,NaN]),t=r,e=(be&&t instanceof Float64Array||"[object Float64Array]"===ve(t))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){e=!1}return e}()?me:function(){throw new Error("not implemented")};function ke(e){return"number"==typeof e}function Se(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function xe(e,r,t){var i=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+Se(n):Se(n)+e,i&&(e="-"+e)),e}var _e=String.prototype.toLowerCase,Fe=String.prototype.toUpperCase;function Ie(e){var r,t,i;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,i=parseInt(t,10),!isFinite(i)){if(!ke(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&("u"===e.specifier||10!==r)&&(i=4294967295+i+1),i<0?(t=(-i).toString(r),e.precision&&(t=xe(t,e.precision,e.padRight)),t="-"+t):(t=i.toString(r),i||e.precision?e.precision&&(t=xe(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===Fe.call(e.specifier)?Fe.call(t):_e.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function Ne(e){return"string"==typeof e}var Ve=Math.abs,Te=String.prototype.toLowerCase,je=String.prototype.toUpperCase,Ae=String.prototype.replace,$e=/e\+(\d)$/,Oe=/e-(\d)$/,Ce=/^(\d+)$/,Re=/^(\d+)e/,Pe=/\.0$/,Ze=/\.0*e/,We=/(\..*[^0])0*e/;function Ge(e){var r,t,i=parseFloat(e.arg);if(!isFinite(i)){if(!ke(e.arg))throw new Error("invalid floating-point number. Value: "+t);i=e.arg}switch(e.specifier){case"e":case"E":t=i.toExponential(e.precision);break;case"f":case"F":t=i.toFixed(e.precision);break;case"g":case"G":Ve(i)<1e-4?((r=e.precision)>0&&(r-=1),t=i.toExponential(r)):t=i.toPrecision(e.precision),e.alternate||(t=Ae.call(t,We,"$1e"),t=Ae.call(t,Ze,"e"),t=Ae.call(t,Pe,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=Ae.call(t,$e,"e+0$1"),t=Ae.call(t,Oe,"e-0$1"),e.alternate&&(t=Ae.call(t,Ce,"$1."),t=Ae.call(t,Re,"$1.e")),i>=0&&e.sign&&(t=e.sign+t),t=e.specifier===je.call(e.specifier)?je.call(t):Te.call(t)}function Le(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function Ue(e,r,t){var i=r-e.length;return i<0?e:e=t?e+Le(i):Le(i)+e}var Xe=String.fromCharCode,ze=isNaN,Me=Array.isArray;function Ye(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function qe(e){var r,t,i,n,a,o,c,s,l;if(!Me(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",c=1,s=0;s<e.length;s++)if(Ne(i=e[s]))o+=i;else{if(r=void 0!==i.precision,!(i=Ye(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+i+"`.");for(i.mapping&&(c=i.mapping),t=i.flags,l=0;l<t.length;l++)switch(n=t.charAt(l)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===i.width){if(i.width=parseInt(arguments[c],10),c+=1,ze(i.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(r&&"*"===i.precision){if(i.precision=parseInt(arguments[c],10),c+=1,ze(i.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,r=!1)}switch(i.arg=arguments[c],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(i.padZeros=!1),i.arg=Ie(i);break;case"s":i.maxWidth=r?i.precision:-1;break;case"c":if(!ze(i.arg)){if((a=parseInt(i.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=ze(a)?String(i.arg):Xe(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(i.precision=6),i.arg=Ge(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=xe(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=Ue(i.arg,i.width,i.padRight)),o+=i.arg||"",c+=1}return o}var Be=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function De(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function He(e){var r,t,i,n;for(t=[],n=0,i=Be.exec(e);i;)(r=e.slice(n,Be.lastIndex-i[0].length)).length&&t.push(r),t.push(De(i)),n=Be.lastIndex,i=Be.exec(e);return(r=e.slice(n)).length&&t.push(r),t}function Je(e){return"string"==typeof e}function Ke(e){var r,t,i;if(!Je(e))throw new TypeError(Ke("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=He(e),(t=new Array(arguments.length))[0]=r,i=1;i<t.length;i++)t[i]=arguments[i];return qe.apply(null,t)}function Qe(e,r){var t,i,n,a,o,c,s,l,p,u;if(1===arguments.length)t=[0,0],s=e;else{if(!fe(e))throw new TypeError(Ke("invalid argument. Output argument must be an array-like object. Value: `%s`.",e));t=e,s=r}if(!le(s))throw new TypeError(Ke("invalid argument. Window size must be a positive integer. Value: `%s`.",s));return n=new Ee(s),p=s-1,o=0,c=0,u=-1,l=0,f;function f(e){var r,f;if(0===arguments.length)return 0===l?null:(t[0]=c,1===l?ge(o)?t[1]=NaN:t[1]=0:t[1]=l<s?o/(l-1):o/p,t);if(u=(u+1)%s,ge(e))l=s,c=NaN,o=NaN;else{if(l<s)return n[u]=e,o+=(i=e-c)*(e-(c+=i/(l+=1))),t[0]=c,t[1]=1===l?0:o/(l-1),t;if(1===l)return c=e,o=0,t[0]=e,t[1]=0,t;if(ge(n[u])){for(l=1,c=e,o=0,r=0;r<s;r++)if(r!==u){if(ge(f=n[r])){l=s,c=NaN,o=NaN;break}o+=(i=f-c)*(f-(c+=i/(l+=1)))}}else!1===ge(o)&&(a=n[u],o+=(i=e-a)*(a-c+(e-(c+=i/s))))}return n[u]=e,t[0]=c,t[1]=o/p,t}}export{Qe as default};
//# sourceMappingURL=mod.js.map
