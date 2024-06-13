import{h as N,i as L,j as $,k as j,a as I,e as A}from"./@babel-b64fd0f9.js";import{r as t}from"./react-4fd50329.js";import{s as F,h as K,I as M,t as T}from"./rc-util-0bc219f3.js";import{i as V}from"./resize-observer-polyfill-0f9f8adb.js";var c=new Map;function X(e){e.forEach(function(i){var r,o=i.target;(r=c.get(o))===null||r===void 0||r.forEach(function(n){return n(o)})})}var O=new V(X);function Y(e,i){c.has(e)||(c.set(e,new Set),O.observe(e)),c.get(e).add(i)}function q(e,i){c.has(e)&&(c.get(e).delete(i),c.get(e).size||(O.unobserve(e),c.delete(e)))}var G=function(e){N(r,e);var i=L(r);function r(){return $(this,r),i.apply(this,arguments)}return j(r,[{key:"render",value:function(){return this.props.children}}]),r}(t.Component),m=t.createContext(null);function J(e){var i=e.children,r=e.onBatchResize,o=t.useRef(0),n=t.useRef([]),a=t.useContext(m),v=t.useCallback(function(d,s,u){o.current+=1;var l=o.current;n.current.push({size:d,element:s,data:u}),Promise.resolve().then(function(){l===o.current&&(r==null||r(n.current),n.current=[])}),a==null||a(d,s,u)},[r,a]);return t.createElement(m.Provider,{value:v},i)}function Q(e,i){var r=e.children,o=e.disabled,n=t.useRef(null),a=t.useRef(null),v=t.useContext(m),d=typeof r=="function",s=d?r(n):r,u=t.useRef({width:-1,height:-1,offsetWidth:-1,offsetHeight:-1}),l=!d&&t.isValidElement(s)&&F(s),C=l?s.ref:null,D=t.useMemo(function(){return K(C,n)},[C,n]),b=function(){return M(n.current)||M(a.current)};t.useImperativeHandle(i,function(){return b()});var z=t.useRef(e);z.current=e;var E=t.useCallback(function(f){var w=z.current,_=w.onResize,P=w.data,k=f.getBoundingClientRect(),g=k.width,p=k.height,h=f.offsetWidth,R=f.offsetHeight,x=Math.floor(g),y=Math.floor(p);if(u.current.width!==x||u.current.height!==y||u.current.offsetWidth!==h||u.current.offsetHeight!==R){var W={width:x,height:y,offsetWidth:h,offsetHeight:R};u.current=W;var S=h===Math.round(g)?g:h,B=R===Math.round(p)?p:R,H=I(I({},W),{},{offsetWidth:S,offsetHeight:B});v==null||v(H,f,P),_&&Promise.resolve().then(function(){_(H,f)})}},[]);return t.useEffect(function(){var f=b();return f&&!o&&Y(f,E),function(){return q(f,E)}},[n.current,o]),t.createElement(G,{ref:a},l?t.cloneElement(s,{ref:D}):s)}var U=t.forwardRef(Q),Z="rc-observer-key";function ee(e,i){var r=e.children,o=typeof r=="function"?[r]:T(r);return o.map(function(n,a){var v=(n==null?void 0:n.key)||"".concat(Z,"-").concat(a);return t.createElement(U,A({},e,{key:v,ref:a===0?i:void 0}),n)})}var re=t.forwardRef(ee);re.Collection=J;export{re as R};
