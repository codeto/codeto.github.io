import{k as xe,j as Ve,d as D,e as re,b as Ye,c as G,_ as ze}from"./@babel-b64fd0f9.js";import{r as o}from"./react-4fd50329.js";import{c as ae}from"./classnames-4ba1ba1a.js";import{F as Je,w as Qe,e as Re,G as ne,h as Ze,K as H}from"./rc-util-0bc219f3.js";function ie(){return typeof BigInt=="function"}function w(e){var t=e.trim(),n=t.startsWith("-");n&&(t=t.slice(1)),t=t.replace(/(\.\d*[^0])0*$/,"$1").replace(/\.0*$/,"").replace(/^0+/,""),t.startsWith(".")&&(t="0".concat(t));var s=t||"0",i=s.split("."),c=i[0]||"0",g=i[1]||"0";c==="0"&&g==="0"&&(n=!1);var f=n?"-":"";return{negative:n,negativeStr:f,trimStr:s,integerStr:c,decimalStr:g,fullStr:"".concat(f).concat(s)}}function ue(e){var t=String(e);return!Number.isNaN(Number(t))&&t.includes("e")}function P(e){var t=String(e);if(ue(e)){var n=Number(t.slice(t.indexOf("e-")+2)),s=t.match(/\.(\d+)/);return s!=null&&s[1]&&(n+=s[1].length),n}return t.includes(".")&&se(t)?t.length-t.indexOf(".")-1:0}function W(e){var t=String(e);if(ue(e)){if(e>Number.MAX_SAFE_INTEGER)return String(ie()?BigInt(e).toString():Number.MAX_SAFE_INTEGER);if(e<Number.MIN_SAFE_INTEGER)return String(ie()?BigInt(e).toString():Number.MIN_SAFE_INTEGER);t=e.toFixed(P(t))}return w(t).fullStr}function se(e){return typeof e=="number"?!Number.isNaN(e):e?/^\s*-?\d+(\.\d+)?\s*$/.test(e)||/^\s*-?\d+\.\s*$/.test(e)||/^\s*-?\.\d+\s*$/.test(e):!1}function Ce(e){var t=typeof e=="number"?W(e):w(e).fullStr,n=t.includes(".");return n?w(t.replace(/(\d)\.(\d)/g,"$1$2.")).fullStr:e+"0"}var et=function(){function e(t){if(Ve(this,e),this.origin="",this.number=void 0,this.empty=void 0,!t&&t!==0||!String(t).trim()){this.empty=!0;return}this.origin=String(t),this.number=Number(t)}return xe(e,[{key:"negate",value:function(){return new e(-this.toNumber())}},{key:"add",value:function(n){if(this.isInvalidate())return new e(n);var s=Number(n);if(Number.isNaN(s))return this;var i=this.number+s;if(i>Number.MAX_SAFE_INTEGER)return new e(Number.MAX_SAFE_INTEGER);if(i<Number.MIN_SAFE_INTEGER)return new e(Number.MIN_SAFE_INTEGER);var c=Math.max(P(this.number),P(s));return new e(i.toFixed(c))}},{key:"isEmpty",value:function(){return this.empty}},{key:"isNaN",value:function(){return Number.isNaN(this.number)}},{key:"isInvalidate",value:function(){return this.isEmpty()||this.isNaN()}},{key:"equals",value:function(n){return this.toNumber()===(n==null?void 0:n.toNumber())}},{key:"lessEquals",value:function(n){return this.add(n.negate().toString()).toNumber()<=0}},{key:"toNumber",value:function(){return this.number}},{key:"toString",value:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;return n?this.isInvalidate()?"":W(this.number):this.origin}}]),e}(),tt=function(){function e(t){if(Ve(this,e),this.origin="",this.negative=void 0,this.integer=void 0,this.decimal=void 0,this.decimalLen=void 0,this.empty=void 0,this.nan=void 0,!t&&t!==0||!String(t).trim()){this.empty=!0;return}if(this.origin=String(t),t==="-"){this.nan=!0;return}var n=t;if(ue(n)&&(n=Number(n)),n=typeof n=="string"?n:W(n),se(n)){var s=w(n);this.negative=s.negative;var i=s.trimStr.split(".");this.integer=BigInt(i[0]);var c=i[1]||"0";this.decimal=BigInt(c),this.decimalLen=c.length}else this.nan=!0}return xe(e,[{key:"getMark",value:function(){return this.negative?"-":""}},{key:"getIntegerStr",value:function(){return this.integer.toString()}},{key:"getDecimalStr",value:function(){return this.decimal.toString().padStart(this.decimalLen,"0")}},{key:"alignDecimal",value:function(n){var s="".concat(this.getMark()).concat(this.getIntegerStr()).concat(this.getDecimalStr().padEnd(n,"0"));return BigInt(s)}},{key:"negate",value:function(){var n=new e(this.toString());return n.negative=!n.negative,n}},{key:"add",value:function(n){if(this.isInvalidate())return new e(n);var s=new e(n);if(s.isInvalidate())return this;var i=Math.max(this.getDecimalStr().length,s.getDecimalStr().length),c=this.alignDecimal(i),g=s.alignDecimal(i),f=(c+g).toString(),N=w(f),S=N.negativeStr,d=N.trimStr,m="".concat(S).concat(d.padStart(i+1,"0"));return new e("".concat(m.slice(0,-i),".").concat(m.slice(-i)))}},{key:"isEmpty",value:function(){return this.empty}},{key:"isNaN",value:function(){return this.nan}},{key:"isInvalidate",value:function(){return this.isEmpty()||this.isNaN()}},{key:"equals",value:function(n){return this.toString()===(n==null?void 0:n.toString())}},{key:"lessEquals",value:function(n){return this.add(n.negate().toString()).toNumber()<=0}},{key:"toNumber",value:function(){return this.isNaN()?NaN:Number(this.toString())}},{key:"toString",value:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;return n?this.isInvalidate()?"":w("".concat(this.getMark()).concat(this.getIntegerStr(),".").concat(this.getDecimalStr())).fullStr:this.origin}}]),e}();function p(e){return ie()?new tt(e):new et(e)}function L(e,t,n){var s=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1;if(e==="")return"";var i=w(e),c=i.negativeStr,g=i.integerStr,f=i.decimalStr,N="".concat(t).concat(f),S="".concat(c).concat(g);if(n>=0){var d=Number(f[n]);if(d>=5&&!s){var m=p(e).add("".concat(c,"0.").concat("0".repeat(n)).concat(10-d));return L(m.toString(),t,n,s)}return n===0?S:"".concat(S).concat(t).concat(f.padEnd(n,"0").slice(0,n))}return N===".0"?S:"".concat(S).concat(N)}var nt=200,rt=600;function at(e){var t=e.prefixCls,n=e.upNode,s=e.downNode,i=e.upDisabled,c=e.downDisabled,g=e.onStep,f=o.useRef(),N=o.useRef();N.current=g;var S=function(I,U){I.preventDefault(),N.current(U);function M(){N.current(U),f.current=setTimeout(M,nt)}f.current=setTimeout(M,rt)},d=function(){clearTimeout(f.current)};if(o.useEffect(function(){return d},[]),Je())return null;var m="".concat(t,"-handler"),h=ae(m,"".concat(m,"-up"),D({},"".concat(m,"-up-disabled"),i)),E=ae(m,"".concat(m,"-down"),D({},"".concat(m,"-down-disabled"),c)),R={unselectable:"on",role:"button",onMouseUp:d,onMouseLeave:d};return o.createElement("div",{className:"".concat(m,"-wrap")},o.createElement("span",re({},R,{onMouseDown:function(I){S(I,!0)},"aria-label":"Increase Value","aria-disabled":i,className:h}),n||o.createElement("span",{unselectable:"on",className:"".concat(t,"-handler-up-inner")})),o.createElement("span",re({},R,{onMouseDown:function(I){S(I,!1)},"aria-label":"Decrease Value","aria-disabled":c,className:E}),s||o.createElement("span",{unselectable:"on",className:"".concat(t,"-handler-down-inner")})))}function it(e,t){var n=o.useRef(null);function s(){try{var c=e.selectionStart,g=e.selectionEnd,f=e.value,N=f.substring(0,c),S=f.substring(g);n.current={start:c,end:g,value:f,beforeTxt:N,afterTxt:S}}catch{}}function i(){if(e&&n.current&&t)try{var c=e.value,g=n.current,f=g.beforeTxt,N=g.afterTxt,S=g.start,d=c.length;if(c.endsWith(N))d=c.length-n.current.afterTxt.length;else if(c.startsWith(f))d=f.length;else{var m=f[S-1],h=c.indexOf(m,S-1);h!==-1&&(d=h+1)}e.setSelectionRange(d,d)}catch(E){Qe(!1,"Something warning of cursor restore. Please fire issue about this: ".concat(E.message))}}return[s,i]}const ut=function(){var e=o.useRef(0),t=function(){Re.cancel(e.current)};return o.useEffect(function(){return t},[]),function(n){t(),e.current=Re(function(){n()})}};var st=["prefixCls","className","style","min","max","step","defaultValue","value","disabled","readOnly","upHandler","downHandler","keyboard","controls","stringMode","parser","formatter","precision","decimalSeparator","onChange","onInput","onPressEnter","onStep"],_e=function(t,n){return t||n.isEmpty()?n.toString():n.toNumber()},ke=function(t){var n=p(t);return n.isInvalidate()?null:n},ot=o.forwardRef(function(e,t){var n,s=e.prefixCls,i=s===void 0?"rc-input-number":s,c=e.className,g=e.style,f=e.min,N=e.max,S=e.step,d=S===void 0?1:S,m=e.defaultValue,h=e.value,E=e.disabled,R=e.readOnly,V=e.upHandler,I=e.downHandler,U=e.keyboard,M=e.controls,Me=M===void 0?!0:M,oe=e.stringMode,K=e.parser,A=e.formatter,C=e.precision,_=e.decimalSeparator,X=e.onChange,j=e.onInput,Y=e.onPressEnter,z=e.onStep,Ae=Ye(e,st),le="".concat(i,"-input"),O=o.useRef(null),Fe=o.useState(!1),ce=G(Fe,2),fe=ce[0],de=ce[1],y=o.useRef(!1),F=o.useRef(!1),T=o.useRef(!1),Te=o.useState(function(){return p(h??m)}),ve=G(Te,2),v=ve[0],me=ve[1];function $e(a){h===void 0&&me(a)}var J=o.useCallback(function(a,r){if(!r)return C>=0?C:Math.max(P(a),P(d))},[C,d]),Q=o.useCallback(function(a){var r=String(a);if(K)return K(r);var l=r;return _&&(l=l.replace(_,".")),l.replace(/[^\w.-]+/g,"")},[K,_]),ge=o.useRef(""),Ne=o.useCallback(function(a,r){if(A)return A(a,{userTyping:r,input:String(ge.current)});var l=typeof a=="number"?W(a):a;if(!r){var u=J(l,r);if(se(l)&&(_||u>=0)){var b=_||".";l=L(l,b,u)}}return l},[A,J,_]),Be=o.useState(function(){var a=m??h;return v.isInvalidate()&&["string","number"].includes(ze(a))?Number.isNaN(a)?"":a:Ne(v.toString(),!1)}),Se=G(Be,2),$=Se[0],he=Se[1];ge.current=$;function B(a,r){he(Ne(a.isInvalidate()?a.toString(!1):a.toString(!r),r))}var k=o.useMemo(function(){return ke(N)},[N,C]),x=o.useMemo(function(){return ke(f)},[f,C]),pe=o.useMemo(function(){return!k||!v||v.isInvalidate()?!1:k.lessEquals(v)},[k,v]),be=o.useMemo(function(){return!x||!v||v.isInvalidate()?!1:v.lessEquals(x)},[x,v]),qe=it(O.current,fe),ye=G(qe,2),Pe=ye[0],Ue=ye[1],Ee=function(r){return k&&!r.lessEquals(k)?k:x&&!x.lessEquals(r)?x:null},Z=function(r){return!Ee(r)},ee=function(r,l){var u=r,b=Z(u)||u.isEmpty();if(!u.isEmpty()&&!l&&(u=Ee(u)||u,b=!0),!R&&!E&&b){var q=u.toString(),te=J(q,l);return te>=0&&(u=p(L(q,".",te)),Z(u)||(u=p(L(q,".",te,!0)))),u.equals(v)||($e(u),X==null||X(u.isEmpty()?null:_e(oe,u)),h===void 0&&B(u,l)),u}return v},Ke=ut(),Ie=function a(r){if(Pe(),he(r),!F.current){var l=Q(r),u=p(l);u.isNaN()||ee(u,!0)}j==null||j(r),Ke(function(){var b=r;K||(b=r.replace(/。/g,".")),b!==r&&a(b)})},Oe=function(){F.current=!0},Ge=function(){F.current=!1,Ie(O.current.value)},He=function(r){Ie(r.target.value)},De=function(r){var l;if(!(r&&pe||!r&&be)){y.current=!1;var u=p(T.current?Ce(d):d);r||(u=u.negate());var b=(v||p(0)).add(u.toString()),q=ee(b,!1);z==null||z(_e(oe,q),{offset:T.current?Ce(d):d,type:r?"up":"down"}),(l=O.current)===null||l===void 0||l.focus()}},we=function(r){var l=p(Q($)),u=l;l.isNaN()?u=v:u=ee(l,r),h!==void 0?B(v,!1):u.isNaN()||B(u,!1)},Le=function(){y.current=!0},We=function(r){var l=r.which,u=r.shiftKey;y.current=!0,u?T.current=!0:T.current=!1,l===H.ENTER&&(F.current||(y.current=!1),we(!1),Y==null||Y(r)),U!==!1&&!F.current&&[H.UP,H.DOWN].includes(l)&&(De(H.UP===l),r.preventDefault())},Xe=function(){y.current=!1,T.current=!1},je=function(){we(!1),de(!1),y.current=!1};return ne(function(){v.isInvalidate()||B(v,!1)},[C]),ne(function(){var a=p(h);me(a);var r=p(Q($));(!a.equals(r)||!y.current||A)&&B(a,y.current)},[h]),ne(function(){A&&Ue()},[$]),o.createElement("div",{className:ae(i,c,(n={},D(n,"".concat(i,"-focused"),fe),D(n,"".concat(i,"-disabled"),E),D(n,"".concat(i,"-readonly"),R),D(n,"".concat(i,"-not-a-number"),v.isNaN()),D(n,"".concat(i,"-out-of-range"),!v.isInvalidate()&&!Z(v)),n)),style:g,onFocus:function(){de(!0)},onBlur:je,onKeyDown:We,onKeyUp:Xe,onCompositionStart:Oe,onCompositionEnd:Ge,onBeforeInput:Le},Me&&o.createElement(at,{prefixCls:i,upNode:V,downNode:I,upDisabled:pe,downDisabled:be,onStep:De}),o.createElement("div",{className:"".concat(le,"-wrap")},o.createElement("input",re({autoComplete:"off",role:"spinbutton","aria-valuemin":f,"aria-valuemax":N,"aria-valuenow":v.isInvalidate()?null:v.toString(),step:d},Ae,{ref:Ze(O,t),className:le,value:$,onChange:He,disabled:E,readOnly:R}))))});ot.displayName="InputNumber";export{ot as I};
