import{j as o,a as v,c as x}from"./@emotion-63839449.js";import{r as e}from"./react-4fd50329.js";import"./lodash-88fe09e6.js";import"./moment-a468e1f9.js";import{a as L,g as F,L as k,l as i,P,f as T,c as n,e as l}from"./index-c2ded735.js";import"./file-saver-40cf32a9.js";import{F as a,u as b}from"./index-687ba9e6.js";import"./react-redux-896b353b.js";import"./@firebase-43527ee1.js";import{c as E}from"./account-86ffff50.js";import{d as S}from"./react-router-a4308f7b.js";import{a as g,b as d,c as A,B as I}from"./antd-f9eae174.js";import"./hoist-non-react-statics-23d96a9a.js";import"./react-is-e8e5dbb3.js";import"./@babel-b64fd0f9.js";import"./stylis-79144faa.js";import"./classnames-4ba1ba1a.js";import"./redux-10bbab4c.js";import"./react-router-dom-2a8f5f6d.js";import"./history-a1882333.js";import"./resolve-pathname-e210f2ac.js";import"./tiny-invariant-dd7d57d2.js";import"./react-dom-40621ea0.js";import"./scheduler-765c72db.js";import"./@redux-saga-8bafe09b.js";import"./redux-logger-e1c9ca90.js";import"./dompurify-8e338605.js";import"./prop-types-1172f4d5.js";import"./query-string-f5cca1e7.js";import"./decode-uri-component-4138e85d.js";import"./split-on-first-4f1167c8.js";import"./filter-obj-2ed190f4.js";import"./oidc-client-7da0eaf7.js";import"./firebase-878887a2.js";import"./rc-pagination-c1e6a0ac.js";import"./rc-picker-2e3d5fe5.js";import"./rc-util-0bc219f3.js";import"./rc-trigger-570b13ec.js";import"./rc-motion-ae889c42.js";import"./rc-align-e5d7b12e.js";import"./dom-align-ecb06dd6.js";import"./resize-observer-polyfill-0f9f8adb.js";import"./rc-resize-observer-b9ad4e29.js";import"./@ant-design-cba9d434.js";import"./@ctrl-fb5a5473.js";import"./rc-tabs-dfd19a56.js";import"./rc-dropdown-5378dd0a.js";import"./rc-menu-b15ebfe9.js";import"./rc-overflow-6be96612.js";import"./rc-select-564caf01.js";import"./rc-virtual-list-8a7b82a6.js";import"./rc-collapse-11b7d3c4.js";import"./shallowequal-4542d6f7.js";import"./rc-drawer-317f0b4d.js";import"./@rc-component-5a112e55.js";import"./rc-field-form-ef5549aa.js";import"./async-validator-dee29e8b.js";import"./scroll-into-view-if-needed-6b992d05.js";import"./compute-scroll-into-view-183f845a.js";import"./rc-image-e0357917.js";import"./rc-dialog-b1d1f07b.js";import"./rc-input-number-8bc068f7.js";import"./rc-rate-c64cf0d5.js";import"./rc-steps-2d1924c7.js";import"./rc-switch-b4e96de7.js";import"./rc-table-191ecc42.js";import"./rc-checkbox-018e8052.js";import"./rc-tree-67773537.js";import"./rc-tree-select-cb7eccc3.js";import"./copy-to-clipboard-64585c8c.js";import"./toggle-selection-93f4ad84.js";import"./rc-textarea-d01adcbb.js";import"./rc-input-02c2c2ba.js";import"./rc-upload-3ab0f08a.js";import"./rc-notification-d13dc43b.js";import"./rc-progress-4f1a7096.js";import"./rc-tooltip-08fa4217.js";import"./use-sync-external-store-5d1b6592.js";import"./idb-cdd1a92f.js";import"./path-to-regexp-ef8d5544.js";const w=x(I,{target:"eqpfzkz0"})({name:"iqoq9n",styles:"margin-top:20px"});var O={name:"5rqwbi",styles:"height:100%;overflow-y:scroll;background:#f6f6f6"},j={name:"va2k03",styles:"text-align:end"};const ct=()=>{const{accessToken:s}=e.useContext(L),h=F()===k,c=S(),[f]=a.useForm(),[u,y]=e.useState(!1),_=h?P:T,[m,p]=e.useState({isFetching:!1,code:void 0,codeLanguage:void 0});b(m.code,m.codeLanguage,{message:i.success,description:i.confirm_agree_policy_success},()=>c.push("/")),e.useEffect(()=>{s||c.push("/login")},[s]);const C=t=>{y(t.target.checked)};return o("div",{css:O,children:o(a,{form:f,name:"PolicyForm",onFinish:async()=>{const{...t}=n.get(l);p({isFetching:!0,code:void 0,codeLanguage:void 0});try{n.save(l,{...t,user:{accessToken:s}});const r=await E();p({isFetching:!1,code:r.code,codeLanguage:r.codeLanguage})}catch(r){p({isFetching:!1,code:r.code,codeLanguage:r.codeLanguage})}},scrollToFirstError:!0,layout:"vertical",style:{display:"flex",justifyContent:"center",marginTop:"80px"},children:v("div",{style:{width:"70%"},children:[o(g.Text,{css:t=>({color:t.color.primary,fontSize:"22px"}),strong:!0,children:i.terms_of_use_of_the_system}),o(d,{span:"24",css:t=>({marginTop:t.margin.sm,height:"70vh"}),children:o("iframe",{style:{width:"100%",height:"65vh",border:"1px solid #f5f5f5"},title:"policy-page",src:_,frameBorder:"0"})}),o(d,{span:"24",children:o(A,{onChange:C,children:o(g.Text,{strong:!0,children:i.i_have_read_and_agree_to_the_privacy_policy})})}),o(a.Item,{css:j,children:o(w,{disabled:!u,htmlType:"submit",type:"primary",loading:m.isFetching,children:i.confirm})})]})})})};export{ct as default};
