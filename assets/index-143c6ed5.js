import{j as h}from"./@emotion-63839449.js";import{r as m}from"./react-4fd50329.js";import{u as v}from"./react-redux-896b353b.js";import{a as R,l as i}from"./index-c2ded735.js";import{u as F}from"./index-687ba9e6.js";import"./lodash-88fe09e6.js";import{u as x}from"./index-b17d22e5.js";import{h as o}from"./moment-a468e1f9.js";import"./file-saver-40cf32a9.js";import"./@firebase-43527ee1.js";import{q as C}from"./query-string-f5cca1e7.js";import{a as E}from"./residentForm.actions-733a7807.js";import{F as b}from"./index-7e2c90ab.js";import{d as k,a as B}from"./react-router-a4308f7b.js";import"./hoist-non-react-statics-23d96a9a.js";import"./react-is-e8e5dbb3.js";import"./@babel-b64fd0f9.js";import"./stylis-79144faa.js";import"./classnames-4ba1ba1a.js";import"./react-dom-40621ea0.js";import"./scheduler-765c72db.js";import"./use-sync-external-store-5d1b6592.js";import"./redux-10bbab4c.js";import"./react-router-dom-2a8f5f6d.js";import"./history-a1882333.js";import"./resolve-pathname-e210f2ac.js";import"./tiny-invariant-dd7d57d2.js";import"./@redux-saga-8bafe09b.js";import"./antd-f9eae174.js";import"./rc-pagination-c1e6a0ac.js";import"./rc-picker-2e3d5fe5.js";import"./rc-util-0bc219f3.js";import"./rc-trigger-570b13ec.js";import"./rc-motion-ae889c42.js";import"./rc-align-e5d7b12e.js";import"./dom-align-ecb06dd6.js";import"./resize-observer-polyfill-0f9f8adb.js";import"./rc-resize-observer-b9ad4e29.js";import"./@ant-design-cba9d434.js";import"./@ctrl-fb5a5473.js";import"./rc-tabs-dfd19a56.js";import"./rc-dropdown-5378dd0a.js";import"./rc-menu-b15ebfe9.js";import"./rc-overflow-6be96612.js";import"./rc-select-564caf01.js";import"./rc-virtual-list-8a7b82a6.js";import"./rc-collapse-11b7d3c4.js";import"./shallowequal-4542d6f7.js";import"./rc-drawer-317f0b4d.js";import"./@rc-component-5a112e55.js";import"./rc-field-form-ef5549aa.js";import"./async-validator-dee29e8b.js";import"./scroll-into-view-if-needed-6b992d05.js";import"./compute-scroll-into-view-183f845a.js";import"./rc-image-e0357917.js";import"./rc-dialog-b1d1f07b.js";import"./rc-input-number-8bc068f7.js";import"./rc-rate-c64cf0d5.js";import"./rc-steps-2d1924c7.js";import"./rc-switch-b4e96de7.js";import"./rc-table-191ecc42.js";import"./rc-checkbox-018e8052.js";import"./rc-tree-67773537.js";import"./rc-tree-select-cb7eccc3.js";import"./copy-to-clipboard-64585c8c.js";import"./toggle-selection-93f4ad84.js";import"./rc-textarea-d01adcbb.js";import"./rc-input-02c2c2ba.js";import"./rc-upload-3ab0f08a.js";import"./rc-notification-d13dc43b.js";import"./rc-progress-4f1a7096.js";import"./rc-tooltip-08fa4217.js";import"./redux-logger-e1c9ca90.js";import"./dompurify-8e338605.js";import"./prop-types-1172f4d5.js";import"./oidc-client-7da0eaf7.js";import"./firebase-878887a2.js";import"./decode-uri-component-4138e85d.js";import"./split-on-first-4f1167c8.js";import"./filter-obj-2ed190f4.js";import"./idb-cdd1a92f.js";import"./path-to-regexp-ef8d5544.js";import"./account-86ffff50.js";import"./index-43183512.js";import"./index-881eef42.js";import"./libphonenumber-js-0d5a9c92.js";import"./react-infinite-scroll-component-e33646cb.js";function eo(){const n=v(),c=k(),u=B(),{unitId:p,unitName:g}=C.parse(u.search),{currentBuilding:f}=x(),{setTitlePage:a,setVisibleSearchBox:e}=m.useContext(R),[r,s]=m.useState({code:void 0,codeLanguage:void 0,isFetching:!1});m.useEffect(()=>(a(i.add_resident),e(!1),()=>{a(""),e(!0)}),[]);function l(t){s({code:void 0,codeLanguage:void 0,isFetching:!0}),n(E({idBuilding:f.id,resident:{...t,birthday:t.birthday?o(t.birthday).toDate():void 0,idDate:t.idDate?o(t.idDate).toDate():void 0,visaExpiredDay:t.visaExpiredDay?o(t.visaExpiredDay).toDate():void 0,addedToFamilyRegisterDay:t.addedToFamilyRegisterDay?o(t.addedToFamilyRegisterDay).toDate():void 0,temporaryRegistrationDate:t.temporaryRegistrationDate?o(t.temporaryRegistrationDate).toDate():void 0,temporaryRegistrationEnd:t.temporaryRegistrationEnd?o(t.temporaryRegistrationEnd).toDate():void 0},refreshState:({code:y,codeLanguage:D})=>{s({code:y,codeLanguage:D,isFetching:!1})}}))}function d(){c.goBack()}return F(r.code,r.codeLanguage,{message:i.success,description:i.add_data_success},()=>d()),h(b,{title:i.label.add_resident,isFetching:r.isFetching,onClickCancel:d,onClickConfirm:l,unitId:p?Number(p):void 0,unitName:g})}export{eo as default};
