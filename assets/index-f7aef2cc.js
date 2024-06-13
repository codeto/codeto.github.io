import{j as a}from"./@emotion-63839449.js";import{P as t}from"./prop-types-1172f4d5.js";const r=i=>{const{html:e,size:l,layout:n,isUseIframe:o}=i;let s=e;return o&&e.indexOf("<html>")===-1&&(s=`<html>
      <head></head>
      <body>${e}</body>
    </html>`),o?a("iframe",{title:"iframe",style:{border:"none",width:"100%",height:"100%"},sandbox:"allow-scripts allow-same-origin",tabIndex:"-1",srcDoc:s}):a("div",{"data-size":l,"data-layout":n,dangerouslySetInnerHTML:{__html:e}})};r.propTypes={html:t.string.isRequired,size:t.oneOf(["A4"]),layout:t.oneOf(["portrait"]),isUseIframe:t.bool};r.defaultProps={size:"A4",layout:"portrait",isUseIframe:!1};export{r as I};
