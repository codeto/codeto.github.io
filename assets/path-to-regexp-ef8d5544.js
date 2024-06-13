import{g as D}from"./classnames-4ba1ba1a.js";var h={exports:{}},F=Array.isArray||function(r){return Object.prototype.toString.call(r)=="[object Array]"},E=F;h.exports=C;h.exports.parse=R;h.exports.compile=P;h.exports.tokensToFunction=b;h.exports.tokensToRegExp=A;var O=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function R(r,e){for(var t=[],p=0,c=0,n="",u=e&&e.delimiter||"/",i;(i=O.exec(r))!=null;){var g=i[0],l=i[1],f=i.index;if(n+=r.slice(c,f),c=f+g.length,l){n+=l[1];continue}var a=r[c],o=i[2],v=i[3],x=i[4],S=i[5],s=i[6],T=i[7];n&&(t.push(n),n="");var U=o!=null&&a!=null&&a!==o,I=s==="+"||s==="*",j=s==="?"||s==="*",y=i[2]||u,$=x||S;t.push({name:v||p++,prefix:o||"",delimiter:y,optional:j,repeat:I,partial:U,asterisk:!!T,pattern:$?N($):T?".*":"[^"+d(y)+"]+?"})}return c<r.length&&(n+=r.substr(c)),n&&t.push(n),t}function P(r,e){return b(R(r,e),e)}function G(r){return encodeURI(r).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function J(r){return encodeURI(r).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function b(r,e){for(var t=new Array(r.length),p=0;p<r.length;p++)typeof r[p]=="object"&&(t[p]=new RegExp("^(?:"+r[p].pattern+")$",w(e)));return function(c,n){for(var u="",i=c||{},g=n||{},l=g.pretty?G:encodeURIComponent,f=0;f<r.length;f++){var a=r[f];if(typeof a=="string"){u+=a;continue}var o=i[a.name],v;if(o==null)if(a.optional){a.partial&&(u+=a.prefix);continue}else throw new TypeError('Expected "'+a.name+'" to be defined');if(E(o)){if(!a.repeat)throw new TypeError('Expected "'+a.name+'" to not repeat, but received `'+JSON.stringify(o)+"`");if(o.length===0){if(a.optional)continue;throw new TypeError('Expected "'+a.name+'" to not be empty')}for(var x=0;x<o.length;x++){if(v=l(o[x]),!t[f].test(v))throw new TypeError('Expected all "'+a.name+'" to match "'+a.pattern+'", but received `'+JSON.stringify(v)+"`");u+=(x===0?a.prefix:a.delimiter)+v}continue}if(v=a.asterisk?J(o):l(o),!t[f].test(v))throw new TypeError('Expected "'+a.name+'" to match "'+a.pattern+'", but received "'+v+'"');u+=a.prefix+v}return u}}function d(r){return r.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function N(r){return r.replace(/([=!:$\/()])/g,"\\$1")}function m(r,e){return r.keys=e,r}function w(r){return r&&r.sensitive?"":"i"}function H(r,e){var t=r.source.match(/\((?!\?)/g);if(t)for(var p=0;p<t.length;p++)e.push({name:p,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return m(r,e)}function K(r,e,t){for(var p=[],c=0;c<r.length;c++)p.push(C(r[c],e,t).source);var n=new RegExp("(?:"+p.join("|")+")",w(t));return m(n,e)}function W(r,e,t){return A(R(r,t),e,t)}function A(r,e,t){E(e)||(t=e||t,e=[]),t=t||{};for(var p=t.strict,c=t.end!==!1,n="",u=0;u<r.length;u++){var i=r[u];if(typeof i=="string")n+=d(i);else{var g=d(i.prefix),l="(?:"+i.pattern+")";e.push(i),i.repeat&&(l+="(?:"+g+l+")*"),i.optional?i.partial?l=g+"("+l+")?":l="(?:"+g+"("+l+"))?":l=g+"("+l+")",n+=l}}var f=d(t.delimiter||"/"),a=n.slice(-f.length)===f;return p||(n=(a?n.slice(0,-f.length):n)+"(?:"+f+"(?=$))?"),c?n+="$":n+=p&&a?"":"(?="+f+"|$)",m(new RegExp("^"+n,w(t)),e)}function C(r,e,t){return E(e)||(t=e||t,e=[]),t=t||{},r instanceof RegExp?H(r,e):E(r)?K(r,e,t):W(r,e,t)}var X=h.exports;const q=D(X);export{q as p};
