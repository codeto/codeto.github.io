import{j as a}from"./@emotion-63839449.js";import{M as l}from"./index-6a3b7dc6.js";import{p as c}from"./printHtml-6274ec45.js";import"./react-4fd50329.js";import"./react-redux-896b353b.js";import{l as i}from"./index-c2ded735.js";import"./lodash-88fe09e6.js";import"./moment-a468e1f9.js";import"./file-saver-40cf32a9.js";import"./@firebase-43527ee1.js";import{P as t}from"./prop-types-1172f4d5.js";function r({formReceipt:e,hideFormReceipt:p}){const{data:o}=e;function m(){p()}function n(){c(o.htmlPrint)}return a(l,{title:i.label.detail,visible:!0,onOk:n,onCancel:m,okText:i.button.print,html:o.htmlPrint})}r.propTypes={formReceipt:t.objectOf(t.any),hideFormReceipt:t.func};r.defaultProps={formReceipt:void 0,hideFormReceipt:()=>{}};export{r as F};
