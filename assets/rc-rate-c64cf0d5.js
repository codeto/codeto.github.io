import{h as H,i as D,j as S,k as x,a as V,d as F}from"./@babel-b64fd0f9.js";import{R as h}from"./react-4fd50329.js";import{K as y,I as K}from"./rc-util-0bc219f3.js";import{c as E}from"./classnames-4ba1ba1a.js";function L(v){var f=v.pageXOffset,i="scrollLeft";if(typeof f!="number"){var n=v.document;f=n.documentElement[i],typeof f!="number"&&(f=n.body[i])}return f}function $(v){var f,i,n=v.ownerDocument,e=n.body,o=n&&n.documentElement,a=v.getBoundingClientRect();return f=a.left,i=a.top,f-=o.clientLeft||e.clientLeft||0,i-=o.clientTop||e.clientTop||0,{left:f,top:i}}function I(v){var f=$(v),i=v.ownerDocument,n=i.defaultView||i.parentWindow;return f.left+=L(n),f.left}var B=function(v){H(i,v);var f=D(i);function i(){var n;S(this,i);for(var e=arguments.length,o=new Array(e),a=0;a<e;a++)o[a]=arguments[a];return n=f.call.apply(f,[this].concat(o)),n.onHover=function(r){var s=n.props,l=s.onHover,t=s.index;l(r,t)},n.onClick=function(r){var s=n.props,l=s.onClick,t=s.index;l(r,t)},n.onKeyDown=function(r){var s=n.props,l=s.onClick,t=s.index;r.keyCode===13&&l(r,t)},n}return x(i,[{key:"getClassName",value:function(){var e=this.props,o=e.prefixCls,a=e.index,r=e.value,s=e.allowHalf,l=e.focused,t=a+1,u=o;return r===0&&a===0&&l?u+=" ".concat(o,"-focused"):s&&r+.5>=t&&r<t?(u+=" ".concat(o,"-half ").concat(o,"-active"),l&&(u+=" ".concat(o,"-focused"))):(u+=t<=r?" ".concat(o,"-full"):" ".concat(o,"-zero"),t===r&&l&&(u+=" ".concat(o,"-focused"))),u}},{key:"render",value:function(){var e=this.onHover,o=this.onClick,a=this.onKeyDown,r=this.props,s=r.disabled,l=r.prefixCls,t=r.character,u=r.characterRender,p=r.index,d=r.count,c=r.value,g=typeof t=="function"?t(this.props):t,C=h.createElement("li",{className:this.getClassName()},h.createElement("div",{onClick:s?null:o,onKeyDown:s?null:a,onMouseMove:s?null:e,role:"radio","aria-checked":c>p?"true":"false","aria-posinset":p+1,"aria-setsize":d,tabIndex:s?-1:0},h.createElement("div",{className:"".concat(l,"-first")},g),h.createElement("div",{className:"".concat(l,"-second")},g)));return u&&(C=u(C,this.props)),C}}]),i}(h.Component);function k(){}var O=function(v){H(i,v);var f=D(i);function i(n){var e;S(this,i),e=f.call(this,n),e.stars=void 0,e.rate=void 0,e.onHover=function(a,r){var s=e.props.onHoverChange,l=e.getStarValue(r,a.pageX),t=e.state.cleanedValue;l!==t&&e.setState({hoverValue:l,cleanedValue:null}),s(l)},e.onMouseLeave=function(){var a=e.props.onHoverChange;e.setState({hoverValue:void 0,cleanedValue:null}),a(void 0)},e.onClick=function(a,r){var s=e.props.allowClear,l=e.state.value,t=e.getStarValue(r,a.pageX),u=!1;s&&(u=t===l),e.onMouseLeave(),e.changeValue(u?0:t),e.setState({cleanedValue:u?t:null})},e.onFocus=function(){var a=e.props.onFocus;e.setState({focused:!0}),a&&a()},e.onBlur=function(){var a=e.props.onBlur;e.setState({focused:!1}),a&&a()},e.onKeyDown=function(a){var r=a.keyCode,s=e.props,l=s.count,t=s.allowHalf,u=s.onKeyDown,p=s.direction,d=p==="rtl",c=e.state.value;r===y.RIGHT&&c<l&&!d?(t?c+=.5:c+=1,e.changeValue(c),a.preventDefault()):r===y.LEFT&&c>0&&!d||r===y.RIGHT&&c>0&&d?(t?c-=.5:c-=1,e.changeValue(c),a.preventDefault()):r===y.LEFT&&c<l&&d&&(t?c+=.5:c+=1,e.changeValue(c),a.preventDefault()),u&&u(a)},e.saveRef=function(a){return function(r){e.stars[a]=r}},e.saveRate=function(a){e.rate=a};var o=n.value;return o===void 0&&(o=n.defaultValue),e.stars={},e.state={value:o,focused:!1,cleanedValue:null},e}return x(i,[{key:"componentDidMount",value:function(){var e=this.props,o=e.autoFocus,a=e.disabled;o&&!a&&this.focus()}},{key:"getStarDOM",value:function(e){return K(this.stars[e])}},{key:"getStarValue",value:function(e,o){var a=this.props,r=a.allowHalf,s=a.direction,l=s==="rtl",t=e+1;if(r){var u=this.getStarDOM(e),p=I(u),d=u.clientWidth;(l&&o-p>d/2||!l&&o-p<d/2)&&(t-=.5)}return t}},{key:"focus",value:function(){var e=this.props.disabled;e||this.rate.focus()}},{key:"blur",value:function(){var e=this.props.disabled;e||this.rate.blur()}},{key:"changeValue",value:function(e){var o=this.props.onChange;"value"in this.props||this.setState({value:e}),o(e)}},{key:"render",value:function(){for(var e=this.props,o=e.count,a=e.allowHalf,r=e.style,s=e.id,l=e.prefixCls,t=e.disabled,u=e.className,p=e.character,d=e.characterRender,c=e.tabIndex,g=e.direction,C=this.state,R=C.value,b=C.hoverValue,_=C.focused,w=[],N=t?"".concat(l,"-disabled"):"",m=0;m<o;m+=1)w.push(h.createElement(B,{ref:this.saveRef(m),index:m,count:o,disabled:t,prefixCls:"".concat(l,"-star"),allowHalf:a,value:b===void 0?R:b,onClick:this.onClick,onHover:this.onHover,key:m,character:p,characterRender:d,focused:_}));var M=E(l,N,u,F({},"".concat(l,"-rtl"),g==="rtl"));return h.createElement("ul",{className:M,style:r,id:s,onMouseLeave:t?null:this.onMouseLeave,tabIndex:t?-1:c,onFocus:t?null:this.onFocus,onBlur:t?null:this.onBlur,onKeyDown:t?null:this.onKeyDown,ref:this.saveRate,role:"radiogroup"},w)}}],[{key:"getDerivedStateFromProps",value:function(e,o){return"value"in e&&e.value!==void 0?V(V({},o),{},{value:e.value}):o}}]),i}(h.Component);O.defaultProps={defaultValue:0,count:5,allowHalf:!1,allowClear:!0,style:{},prefixCls:"rc-rate",onChange:k,character:"★",onHoverChange:k,tabIndex:0,direction:"ltr"};export{O as R};