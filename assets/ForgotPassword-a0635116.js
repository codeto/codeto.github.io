import{a as i,j as r,c as l}from"./@emotion-63839449.js";import{r as s}from"./react-4fd50329.js";import{L as h}from"./react-router-dom-2a8f5f6d.js";import{l as o,I as y}from"./index-c2ded735.js";import"./lodash-88fe09e6.js";import"./moment-a468e1f9.js";import"./file-saver-40cf32a9.js";import{F as e,u as v}from"./index-687ba9e6.js";import"./react-redux-896b353b.js";import"./@firebase-43527ee1.js";import{I as w}from"./index-43183512.js";import{f as x}from"./account-86ffff50.js";import{L as F,a as L}from"./Layout-1f163094.js";import{a as n,A as _,B as S}from"./antd-f9eae174.js";import"./hoist-non-react-statics-23d96a9a.js";import"./react-is-e8e5dbb3.js";import"./@babel-b64fd0f9.js";import"./stylis-79144faa.js";import"./classnames-4ba1ba1a.js";import"./react-router-a4308f7b.js";import"./prop-types-1172f4d5.js";import"./history-a1882333.js";import"./resolve-pathname-e210f2ac.js";import"./tiny-invariant-dd7d57d2.js";import"./path-to-regexp-ef8d5544.js";import"./redux-10bbab4c.js";import"./react-dom-40621ea0.js";import"./scheduler-765c72db.js";import"./@redux-saga-8bafe09b.js";import"./redux-logger-e1c9ca90.js";import"./dompurify-8e338605.js";import"./query-string-f5cca1e7.js";import"./decode-uri-component-4138e85d.js";import"./split-on-first-4f1167c8.js";import"./filter-obj-2ed190f4.js";import"./oidc-client-7da0eaf7.js";import"./firebase-878887a2.js";import"./rc-pagination-c1e6a0ac.js";import"./rc-picker-2e3d5fe5.js";import"./rc-util-0bc219f3.js";import"./rc-trigger-570b13ec.js";import"./rc-motion-ae889c42.js";import"./rc-align-e5d7b12e.js";import"./dom-align-ecb06dd6.js";import"./resize-observer-polyfill-0f9f8adb.js";import"./rc-resize-observer-b9ad4e29.js";import"./@ant-design-cba9d434.js";import"./@ctrl-fb5a5473.js";import"./rc-tabs-dfd19a56.js";import"./rc-dropdown-5378dd0a.js";import"./rc-menu-b15ebfe9.js";import"./rc-overflow-6be96612.js";import"./rc-select-564caf01.js";import"./rc-virtual-list-8a7b82a6.js";import"./rc-collapse-11b7d3c4.js";import"./shallowequal-4542d6f7.js";import"./rc-drawer-317f0b4d.js";import"./@rc-component-5a112e55.js";import"./rc-field-form-ef5549aa.js";import"./async-validator-dee29e8b.js";import"./scroll-into-view-if-needed-6b992d05.js";import"./compute-scroll-into-view-183f845a.js";import"./rc-image-e0357917.js";import"./rc-dialog-b1d1f07b.js";import"./rc-input-number-8bc068f7.js";import"./rc-rate-c64cf0d5.js";import"./rc-steps-2d1924c7.js";import"./rc-switch-b4e96de7.js";import"./rc-table-191ecc42.js";import"./rc-checkbox-018e8052.js";import"./rc-tree-67773537.js";import"./rc-tree-select-cb7eccc3.js";import"./copy-to-clipboard-64585c8c.js";import"./toggle-selection-93f4ad84.js";import"./rc-textarea-d01adcbb.js";import"./rc-input-02c2c2ba.js";import"./rc-upload-3ab0f08a.js";import"./rc-notification-d13dc43b.js";import"./rc-progress-4f1a7096.js";import"./rc-tooltip-08fa4217.js";import"./use-sync-external-store-5d1b6592.js";import"./idb-cdd1a92f.js";import"./index-881eef42.js";const b=l("div",{target:"edtcjnx1"})({name:"hkh81z",styles:"margin-top:8px"}),I=l(y,{target:"edtcjnx0"})({name:"6sug3x",styles:"margin-top:3px"});var j={name:"f7ic6w",styles:"font-family:Bold;margin-left:5px"},k={name:"zl1inp",styles:"display:flex;justify-content:center"},A={name:"lokw8e",styles:"margin-top:30px;margin-bottom:15px;width:40%"},P={name:"1azakc",styles:"text-align:center"},z={name:"1d3w5wq",styles:"width:100%"};const po=()=>{const[c]=e.useForm(),[m,a]=s.useState({isFetching:!1,code:void 0,codeLanguage:void 0}),[d,p]=s.useState(!1);v(m.code,m.codeLanguage,null,()=>p(!0));const g=async f=>{p(!1),a({isFetching:!0,code:void 0,codeLanguage:void 0});const{email:u}=f;try{const t=await x(u);a({isFetching:!1,code:t.code,codeLanguage:t.codeLanguage})}catch(t){a({isFetching:!1,code:t.code,codeLanguage:t.codeLanguage})}};return i(F,{children:[r(n,{children:o.description.recovery_password}),i("div",{children:[d&&r(b,{children:r(_,{message:o.confirm_recover_password,type:"info"})}),i(e,{form:c,name:"forgotPasswordForm",onFinish:g,css:z,scrollToFirstError:!0,layout:"vertical",children:[r(e.Item,{name:"email",label:o.label.email,rules:[{type:"email"},{required:!0}],children:r(w,{prefix:r(I,{name:"icon-mail-outlined"}),placeholder:o.label.email})}),r(e.Item,{css:P,children:r(S,{htmlType:"submit",css:A,type:"primary",size:"large",loading:m.isFetching,children:o.label.confirm})})]})]}),r(L,{}),i("div",{css:k,children:[r(n,{children:o.label.already_have_a_account}),r(h,{to:"/login",css:j,children:o.label.login})]})]})};export{po as default};
