import{a as O,d as k,e as Qe,c as T,k as Mt,j as pt,_ as Pe,b as bt}from"./@babel-b64fd0f9.js";import{r as t}from"./react-4fd50329.js";import{r as je}from"./react-dom-40621ea0.js";import{c as be}from"./classnames-4ba1ba1a.js";import{R as et}from"./rc-resize-observer-b9ad4e29.js";import{e as K,I as yt,a as Re,j as Ge}from"./rc-util-0bc219f3.js";var tt=t.forwardRef(function(e,s){var r=e.height,c=e.offsetY,m=e.offsetX,n=e.children,f=e.prefixCls,d=e.onInnerResize,g=e.innerProps,y=e.rtl,h=e.extra,a={},u={display:"flex",flexDirection:"column"};if(c!==void 0){var i;a={height:r,position:"relative",overflow:"hidden"},u=O(O({},u),{},(i={transform:"translateY(".concat(c,"px)")},k(i,y?"marginRight":"marginLeft",-m),k(i,"position","absolute"),k(i,"left",0),k(i,"right",0),k(i,"top",0),i))}return t.createElement("div",{style:a},t.createElement(et,{onResize:function(S){var v=S.offsetHeight;v&&d&&d()}},t.createElement("div",Qe({style:u,className:be(k({},"".concat(f,"-holder-inner"),f)),ref:s},g),n,h)))});tt.displayName="Filler";function Ue(e,s){var r="touches"in e?e.touches[0]:e;return r[s?"pageX":"pageY"]}var Ze=t.forwardRef(function(e,s){var r,c=e.prefixCls,m=e.rtl,n=e.scrollOffset,f=e.scrollRange,d=e.onStartMove,g=e.onStopMove,y=e.onScroll,h=e.horizontal,a=e.spinSize,u=e.containerSize,i=e.style,R=e.thumbStyle,S=t.useState(!1),v=T(S,2),p=v[0],b=v[1],C=t.useState(null),_=T(C,2),N=_[0],W=_[1],x=t.useState(null),A=T(x,2),D=A[0],Y=A[1],P=!m,Q=t.useRef(),E=t.useRef(),F=t.useState(!1),ee=T(F,2),te=ee[0],U=ee[1],I=t.useRef(),X=function(){clearTimeout(I.current),U(!0),I.current=setTimeout(function(){U(!1)},3e3)},re=f-u||0,oe=u-a||0,ne=re>0,V=t.useMemo(function(){if(n===0||re===0)return 0;var H=n/re;return H*oe},[n,re,oe]),ye=function(z){z.stopPropagation(),z.preventDefault()},le=t.useRef({top:V,dragging:p,pageY:N,startTop:D});le.current={top:V,dragging:p,pageY:N,startTop:D};var se=function(z){b(!0),W(Ue(z,h)),Y(le.current.top),d(),z.stopPropagation(),z.preventDefault()};t.useEffect(function(){var H=function(ve){ve.preventDefault()},z=Q.current,G=E.current;return z.addEventListener("touchstart",H),G.addEventListener("touchstart",se),function(){z.removeEventListener("touchstart",H),G.removeEventListener("touchstart",se)}},[]);var ce=t.useRef();ce.current=re;var fe=t.useRef();fe.current=oe,t.useEffect(function(){if(p){var H,z=function(ve){var de=le.current,xe=de.dragging,ue=de.pageY,Ee=de.startTop;if(K.cancel(H),xe){var he=Ue(ve,h)-ue,ae=Ee;!P&&h?ae-=he:ae+=he;var pe=ce.current,ie=fe.current,Z=ie?ae/ie:0,$=Math.ceil(Z*pe);$=Math.max($,0),$=Math.min($,pe),H=K(function(){y($,h)})}},G=function(){b(!1),g()};return window.addEventListener("mousemove",z),window.addEventListener("touchmove",z),window.addEventListener("mouseup",G),window.addEventListener("touchend",G),function(){window.removeEventListener("mousemove",z),window.removeEventListener("touchmove",z),window.removeEventListener("mouseup",G),window.removeEventListener("touchend",G),K.cancel(H)}}},[p]),t.useEffect(function(){X()},[n]),t.useImperativeHandle(s,function(){return{delayHidden:X}});var j="".concat(c,"-scrollbar"),w={position:"absolute",visibility:te&&ne?null:"hidden"},B={position:"absolute",background:"rgba(0, 0, 0, 0.5)",borderRadius:99,cursor:"pointer",userSelect:"none"};return h?(w.height=8,w.left=0,w.right=0,w.bottom=0,B.height="100%",B.width=a,P?B.left=V:B.right=V):(w.width=8,w.top=0,w.bottom=0,P?w.right=0:w.left=0,B.width="100%",B.height=a,B.top=V),t.createElement("div",{ref:Q,className:be(j,(r={},k(r,"".concat(j,"-horizontal"),h),k(r,"".concat(j,"-vertical"),!h),k(r,"".concat(j,"-visible"),te),r)),style:O(O({},w),i),onMouseDown:ye,onMouseMove:X},t.createElement("div",{ref:E,className:be("".concat(j,"-thumb"),k({},"".concat(j,"-thumb-moving"),p)),style:O(O({},B),R),onMouseDown:se}))});function xt(e){var s=e.children,r=e.setRef,c=t.useCallback(function(m){r(m)},[]);return t.cloneElement(s,{ref:c})}function Et(e,s,r,c,m,n,f){var d=f.getKey;return e.slice(s,r+1).map(function(g,y){var h=s+y,a=n(g,h,{style:{width:c}}),u=d(g);return t.createElement(xt,{key:u,setRef:function(R){return m(g,R)}},a)})}var wt=function(){function e(){pt(this,e),this.maps=void 0,this.id=0,this.maps=Object.create(null)}return Mt(e,[{key:"set",value:function(r,c){this.maps[r]=c,this.id+=1}},{key:"get",value:function(r){return this.maps[r]}}]),e}();function zt(e,s,r){var c=t.useState(0),m=T(c,2),n=m[0],f=m[1],d=t.useRef(new Map),g=t.useRef(new wt),y=t.useRef();function h(){K.cancel(y.current)}function a(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;h();var R=function(){d.current.forEach(function(v,p){if(v&&v.offsetParent){var b=yt(v),C=b.offsetHeight;g.current.get(p)!==C&&g.current.set(p,b.offsetHeight)}}),f(function(v){return v+1})};i?R():y.current=K(R)}function u(i,R){var S=e(i),v=d.current.get(S);R?(d.current.set(S,R),a()):d.current.delete(S),!v!=!R&&(R?s==null||s(i):r==null||r(i))}return t.useEffect(function(){return h},[]),[u,a,g.current,n]}var Lt=10;function _t(e,s,r,c,m,n,f,d){var g=t.useRef(),y=t.useState(null),h=T(y,2),a=h[0],u=h[1];return Re(function(){if(a&&a.times<Lt){if(!e.current){u(function(X){return O({},X)});return}n();var i=a.targetAlign,R=a.originAlign,S=a.index,v=a.offset,p=e.current.clientHeight,b=!1,C=i,_=null;if(p){for(var N=i||R,W=0,x=0,A=0,D=Math.min(s.length-1,S),Y=0;Y<=D;Y+=1){var P=m(s[Y]);x=W;var Q=r.get(P);A=x+(Q===void 0?c:Q),W=A}for(var E=N==="top"?v:p-v,F=D;F>=0;F-=1){var ee=m(s[F]),te=r.get(ee);if(te===void 0){b=!0;break}if(E-=te,E<=0)break}switch(N){case"top":_=x-v;break;case"bottom":_=A-p+v;break;default:{var U=e.current.scrollTop,I=U+p;x<U?C="top":A>I&&(C="bottom")}}_!==null&&f(_),_!==a.lastTop&&(b=!0)}b&&u(function(X){return O(O({},X),{},{times:X.times+1,targetAlign:C,lastTop:_})})}},[a,e.current]),function(i){if(i==null){d();return}if(K.cancel(g.current),typeof i=="number")f(i);else if(i&&Pe(i)==="object"){var R,S=i.align;"index"in i?R=i.index:R=s.findIndex(function(b){return m(b)===i.key});var v=i.offset,p=v===void 0?0:v;u({times:0,index:R,offset:p,originAlign:S})}}}function Ht(e,s,r){var c=e.length,m=s.length,n,f;if(c===0&&m===0)return null;c<m?(n=e,f=s):(n=s,f=e);var d={__EMPTY_ITEM__:!0};function g(R){return R!==void 0?r(R):d}for(var y=null,h=Math.abs(c-m)!==1,a=0;a<f.length;a+=1){var u=g(n[a]),i=g(f[a]);if(u!==i){y=a,h=h||u!==g(f[a+1]);break}}return y===null?null:{index:y,multiple:h}}function Tt(e,s,r){var c=t.useState(e),m=T(c,2),n=m[0],f=m[1],d=t.useState(null),g=T(d,2),y=g[0],h=g[1];return t.useEffect(function(){var a=Ht(n||[],e||[],s);(a==null?void 0:a.index)!==void 0&&(r==null||r(a.index),h(e[a.index])),f(e)},[e]),[y]}var qe=(typeof navigator>"u"?"undefined":Pe(navigator))==="object"&&/Firefox/i.test(navigator.userAgent);const rt=function(e,s){var r=t.useRef(!1),c=t.useRef(null);function m(){clearTimeout(c.current),r.current=!0,c.current=setTimeout(function(){r.current=!1},50)}var n=t.useRef({top:e,bottom:s});return n.current.top=e,n.current.bottom=s,function(f){var d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,g=f<0&&n.current.top||f>0&&n.current.bottom;return d&&g?(clearTimeout(c.current),r.current=!1):(!g||r.current)&&m(),!r.current&&g}};function Ct(e,s,r,c,m){var n=t.useRef(0),f=t.useRef(null),d=t.useRef(null),g=t.useRef(!1),y=rt(s,r);function h(v,p){K.cancel(f.current),n.current+=p,d.current=p,!y(p)&&(qe||v.preventDefault(),f.current=K(function(){var b=g.current?10:1;m(n.current*b),n.current=0}))}function a(v,p){m(p,!0),qe||v.preventDefault()}var u=t.useRef(null),i=t.useRef(null);function R(v){if(e){K.cancel(i.current),i.current=K(function(){u.current=null},2);var p=v.deltaX,b=v.deltaY,C=v.shiftKey,_=p,N=b;(u.current==="sx"||!u.current&&C&&b&&!p)&&(_=b,N=0,u.current="sx");var W=Math.abs(_),x=Math.abs(N);u.current===null&&(u.current=c&&W>x?"x":"y"),u.current==="y"?h(v,N):a(v,_)}}function S(v){e&&(g.current=v.detail===d.current)}return[R,S]}var Dt=14/15;function Pt(e,s,r){var c=t.useRef(!1),m=t.useRef(0),n=t.useRef(null),f=t.useRef(null),d,g=function(u){if(c.current){var i=Math.ceil(u.touches[0].pageY),R=m.current-i;m.current=i,r(R)&&u.preventDefault(),clearInterval(f.current),f.current=setInterval(function(){R*=Dt,(!r(R,!0)||Math.abs(R)<=.1)&&clearInterval(f.current)},16)}},y=function(){c.current=!1,d()},h=function(u){d(),u.touches.length===1&&!c.current&&(c.current=!0,m.current=Math.ceil(u.touches[0].pageY),n.current=u.target,n.current.addEventListener("touchmove",g),n.current.addEventListener("touchend",y))};d=function(){n.current&&(n.current.removeEventListener("touchmove",g),n.current.removeEventListener("touchend",y))},Re(function(){return e&&s.current.addEventListener("touchstart",h),function(){var a;(a=s.current)===null||a===void 0||a.removeEventListener("touchstart",h),d(),clearInterval(f.current)}},[e])}var It=20;function Je(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,r=e/s*100;return isNaN(r)&&(r=0),r=Math.max(r,It),r=Math.min(r,e/2),Math.floor(r)}function kt(e,s,r,c){var m=t.useMemo(function(){return[new Map,[]]},[e,r.id,c]),n=T(m,2),f=n[0],d=n[1],g=function(h){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:h,u=f.get(h),i=f.get(a);if(u===void 0||i===void 0)for(var R=e.length,S=d.length;S<R;S+=1){var v,p=e[S],b=s(p);f.set(b,S);var C=(v=r.get(b))!==null&&v!==void 0?v:c;if(d[S]=(d[S-1]||0)+C,b===h&&(u=S),b===a&&(i=S),u!==void 0&&i!==void 0)break}return{top:d[u-1]||0,bottom:d[i]}};return g}var Ot=["prefixCls","className","height","itemHeight","fullHeight","style","data","children","itemKey","virtual","direction","scrollWidth","component","onScroll","onVirtualScroll","onVisibleChange","innerProps","extraRender","styles"],Nt=[],Yt={overflowY:"auto",overflowAnchor:"none"};function Ft(e,s){var r=e.prefixCls,c=r===void 0?"rc-virtual-list":r,m=e.className,n=e.height,f=e.itemHeight,d=e.fullHeight,g=d===void 0?!0:d,y=e.style,h=e.data,a=e.children,u=e.itemKey,i=e.virtual,R=e.direction,S=e.scrollWidth,v=e.component,p=v===void 0?"div":v,b=e.onScroll,C=e.onVirtualScroll,_=e.onVisibleChange,N=e.innerProps,W=e.extraRender,x=e.styles,A=bt(e,Ot),D=!!(i!==!1&&n&&f),Y=D&&h&&(f*h.length>n||!!S),P=R==="rtl",Q=be(c,k({},"".concat(c,"-rtl"),P),m),E=h||Nt,F=t.useRef(),ee=t.useRef(),te=t.useState(0),U=T(te,2),I=U[0],X=U[1],re=t.useState(0),oe=T(re,2),ne=oe[0],V=oe[1],ye=t.useState(!1),le=T(ye,2),se=le[0],ce=le[1],fe=function(){ce(!0)},j=function(){ce(!1)},w=t.useCallback(function(o){return typeof u=="function"?u(o):o==null?void 0:o[u]},[u]),B={getKey:w};function H(o){X(function(l){var M;typeof o=="function"?M=o(l):M=o;var L=ut(M);return F.current.scrollTop=L,L})}var z=t.useRef({start:0,end:E.length}),G=t.useRef(),Me=Tt(E,w),ve=T(Me,1),de=ve[0];G.current=de;var xe=zt(w,null,null),ue=T(xe,4),Ee=ue[0],he=ue[1],ae=ue[2],pe=ue[3],ie=t.useMemo(function(){if(!D)return{scrollHeight:void 0,start:0,end:E.length-1,offset:void 0};if(!Y){var o;return{scrollHeight:((o=ee.current)===null||o===void 0?void 0:o.offsetHeight)||0,start:0,end:E.length-1,offset:void 0}}for(var l=0,M,L,J,mt=E.length,ge=0;ge<mt;ge+=1){var gt=E[ge],Rt=w(gt),Ae=ae.get(Rt),De=l+(Ae===void 0?f:Ae);De>=I&&M===void 0&&(M=ge,L=l),De>I+n&&J===void 0&&(J=ge),l=De}return M===void 0&&(M=0,L=0,J=Math.ceil(n/f)),J===void 0&&(J=E.length-1),J=Math.min(J+1,E.length-1),{scrollHeight:l,start:M,end:J,offset:L}},[Y,D,I,E,pe,n]),Z=ie.scrollHeight,$=ie.start,Se=ie.end,Ie=ie.offset;z.current.start=$,z.current.end=Se;var nt=t.useState({width:0,height:n}),ke=T(nt,2),q=ke[0],at=ke[1],it=function(l){at({width:l.width||l.offsetWidth,height:l.height||l.offsetHeight})},Oe=t.useRef(),Ne=t.useRef(),ot=t.useMemo(function(){return Je(q.width,S)},[q.width,S]),lt=t.useMemo(function(){return Je(q.height,Z)},[q.height,Z]),we=Z-n,ze=t.useRef(we);ze.current=we;function ut(o){var l=o;return Number.isNaN(ze.current)||(l=Math.min(l,ze.current)),l=Math.max(l,0),l}var Ye=I<=0,Fe=I>=we,st=rt(Ye,Fe),Le=function(){return{x:P?-ne:ne,y:I}},_e=t.useRef(Le()),He=Ge(function(){if(C){var o=Le();(_e.current.x!==o.x||_e.current.y!==o.y)&&(C(o),_e.current=o)}});function $e(o,l){var M=o;l?(je.flushSync(function(){V(M)}),He()):H(M)}function ct(o){var l=o.currentTarget.scrollTop;l!==I&&H(l),b==null||b(o),He()}var Te=function(l){var M=l,L=S-q.width;return M=Math.max(M,0),M=Math.min(M,L),M},ft=Ge(function(o,l){l?(je.flushSync(function(){V(function(M){var L=M+(P?-o:o);return Te(L)})}),He()):H(function(M){var L=M+o;return L})}),vt=Ct(D,Ye,Fe,!!S,ft),We=T(vt,2),Ce=We[0],Xe=We[1];Pt(D,F,function(o,l){return st(o,l)?!1:(Ce({preventDefault:function(){},deltaY:o}),!0)}),Re(function(){function o(M){D&&M.preventDefault()}var l=F.current;return l.addEventListener("wheel",Ce),l.addEventListener("DOMMouseScroll",Xe),l.addEventListener("MozMousePixelScroll",o),function(){l.removeEventListener("wheel",Ce),l.removeEventListener("DOMMouseScroll",Xe),l.removeEventListener("MozMousePixelScroll",o)}},[D]),Re(function(){S&&V(function(o){return Te(o)})},[q.width,S]);var Ve=function(){var l,M;(l=Oe.current)===null||l===void 0||l.delayHidden(),(M=Ne.current)===null||M===void 0||M.delayHidden()},Be=_t(F,E,ae,f,w,function(){return he(!0)},H,Ve);t.useImperativeHandle(s,function(){return{getScrollInfo:Le,scrollTo:function(l){function M(L){return L&&Pe(L)==="object"&&("left"in L||"top"in L)}M(l)?(l.left!==void 0&&V(Te(l.left)),Be(l.top)):Be(l)}}}),Re(function(){if(_){var o=E.slice($,Se+1);_(o,E)}},[$,Se,E]);var dt=kt(E,w,ae,f),ht=W==null?void 0:W({start:$,end:Se,virtual:Y,offsetX:ne,offsetY:Ie,rtl:P,getSize:dt}),St=Et(E,$,Se,S,Ee,a,B),me=null;n&&(me=O(k({},g?"height":"maxHeight",n),Yt),D&&(me.overflowY="hidden",S&&(me.overflowX="hidden"),se&&(me.pointerEvents="none")));var Ke={};return P&&(Ke.dir="rtl"),t.createElement("div",Qe({style:O(O({},y),{},{position:"relative"}),className:Q},Ke,A),t.createElement(et,{onResize:it},t.createElement(p,{className:"".concat(c,"-holder"),style:me,ref:F,onScroll:ct,onMouseEnter:Ve},t.createElement(tt,{prefixCls:c,height:Z,offsetX:ne,offsetY:Ie,scrollWidth:S,onInnerResize:he,ref:ee,innerProps:N,rtl:P,extra:ht},St))),Y&&Z>n&&t.createElement(Ze,{ref:Oe,prefixCls:c,scrollOffset:I,scrollRange:Z,rtl:P,onScroll:$e,onStartMove:fe,onStopMove:j,spinSize:lt,containerSize:q.height,style:x==null?void 0:x.verticalScrollBar,thumbStyle:x==null?void 0:x.verticalScrollBarThumb}),Y&&S&&t.createElement(Ze,{ref:Ne,prefixCls:c,scrollOffset:ne,scrollRange:S,rtl:P,onScroll:$e,onStartMove:fe,onStopMove:j,spinSize:ot,containerSize:q.width,horizontal:!0,style:x==null?void 0:x.horizontalScrollBar,thumbStyle:x==null?void 0:x.horizontalScrollBarThumb}))}var $t=t.forwardRef(Ft);$t.displayName="List";export{$t as L};