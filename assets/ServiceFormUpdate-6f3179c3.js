import{j as a,a as T}from"./@emotion-63839449.js";import{r as d}from"./react-4fd50329.js";import{P as u}from"./prop-types-1172f4d5.js";import{B as x}from"./index-881eef42.js";import{F as _,u as H}from"./index-687ba9e6.js";import"./lodash-88fe09e6.js";import"./moment-a468e1f9.js";import{a as J,l as n,bS as k,bU as y,bV as Q,Y as W,bX as Z,E as ee,bY as b}from"./index-c2ded735.js";import"./file-saver-40cf32a9.js";import{u as oe,a as m}from"./react-redux-896b353b.js";import"./@firebase-43527ee1.js";import{S as ie,a as re,b as te,c as ae,d as ne,e as se}from"./ServiceFormFormula-574b99c2.js";import{b as me,i as ce,u as pe,h as le,j as de,k as ue}from"./service.actions-6bb0261f.js";import{x as c,B as L,y as fe}from"./antd-f9eae174.js";import"./hoist-non-react-statics-23d96a9a.js";import"./react-is-e8e5dbb3.js";import"./@babel-b64fd0f9.js";import"./stylis-79144faa.js";import"./classnames-4ba1ba1a.js";import"./redux-10bbab4c.js";import"./react-router-dom-2a8f5f6d.js";import"./react-router-a4308f7b.js";import"./history-a1882333.js";import"./resolve-pathname-e210f2ac.js";import"./tiny-invariant-dd7d57d2.js";import"./path-to-regexp-ef8d5544.js";import"./react-dom-40621ea0.js";import"./scheduler-765c72db.js";import"./@redux-saga-8bafe09b.js";import"./redux-logger-e1c9ca90.js";import"./dompurify-8e338605.js";import"./query-string-f5cca1e7.js";import"./decode-uri-component-4138e85d.js";import"./split-on-first-4f1167c8.js";import"./filter-obj-2ed190f4.js";import"./oidc-client-7da0eaf7.js";import"./firebase-878887a2.js";import"./rc-pagination-c1e6a0ac.js";import"./rc-picker-2e3d5fe5.js";import"./rc-util-0bc219f3.js";import"./rc-trigger-570b13ec.js";import"./rc-motion-ae889c42.js";import"./rc-align-e5d7b12e.js";import"./dom-align-ecb06dd6.js";import"./resize-observer-polyfill-0f9f8adb.js";import"./rc-resize-observer-b9ad4e29.js";import"./@ant-design-cba9d434.js";import"./@ctrl-fb5a5473.js";import"./rc-tabs-dfd19a56.js";import"./rc-dropdown-5378dd0a.js";import"./rc-menu-b15ebfe9.js";import"./rc-overflow-6be96612.js";import"./rc-select-564caf01.js";import"./rc-virtual-list-8a7b82a6.js";import"./rc-collapse-11b7d3c4.js";import"./shallowequal-4542d6f7.js";import"./rc-drawer-317f0b4d.js";import"./@rc-component-5a112e55.js";import"./rc-field-form-ef5549aa.js";import"./async-validator-dee29e8b.js";import"./scroll-into-view-if-needed-6b992d05.js";import"./compute-scroll-into-view-183f845a.js";import"./rc-image-e0357917.js";import"./rc-dialog-b1d1f07b.js";import"./rc-input-number-8bc068f7.js";import"./rc-rate-c64cf0d5.js";import"./rc-steps-2d1924c7.js";import"./rc-switch-b4e96de7.js";import"./rc-table-191ecc42.js";import"./rc-checkbox-018e8052.js";import"./rc-tree-67773537.js";import"./rc-tree-select-cb7eccc3.js";import"./copy-to-clipboard-64585c8c.js";import"./toggle-selection-93f4ad84.js";import"./rc-textarea-d01adcbb.js";import"./rc-input-02c2c2ba.js";import"./rc-upload-3ab0f08a.js";import"./rc-notification-d13dc43b.js";import"./rc-progress-4f1a7096.js";import"./rc-tooltip-08fa4217.js";import"./use-sync-external-store-5d1b6592.js";import"./idb-cdd1a92f.js";import"./index-43183512.js";import"./index-b17d22e5.js";import"./account-86ffff50.js";import"./libphonenumber-js-0d5a9c92.js";import"./react-infinite-scroll-component-e33646cb.js";import"./formatNumberWithPrecision-689b8fea.js";import"./currency-cb786ed8.js";const B=({history:v,match:h,location:f})=>{var P;const{setTitlePage:E,layoutScrollRef:S}=d.useContext(J),p=oe(),l=Number((P=h==null?void 0:h.params)==null?void 0:P.idBuilding)||0,[t]=_.useForm(),[V]=W(),[r]=d.useState(f.state&&f.state.service),[D,g]=d.useState(!0),[F,I,A]=[m(e=>{var o,i;return(i=(o=e==null?void 0:e.configService)==null?void 0:o.update)==null?void 0:i.isLoading}),m(e=>{var o,i;return(i=(o=e==null?void 0:e.configService)==null?void 0:o.update)==null?void 0:i.code}),m(e=>{var o,i;return(i=(o=e==null?void 0:e.configService)==null?void 0:o.update)==null?void 0:i.codeLanguage})],[j,R,G]=[m(e=>{var o,i;return(i=(o=e==null?void 0:e.configService)==null?void 0:o.contractTemplateByFormula)==null?void 0:i.isLoading}),m(e=>{var o,i;return(i=(o=e==null?void 0:e.configService)==null?void 0:o.contractTemplateByPromotion)==null?void 0:i.isLoading}),m(e=>{var o,i;return(i=(o=e==null?void 0:e.configService)==null?void 0:o.contractTemplateBySurcharge)==null?void 0:i.isLoading})],[O,q]=[m(e=>{var o;return(o=e==null?void 0:e.configService)==null?void 0:o.icons.isLoading}),m(e=>{var o;return(o=e==null?void 0:e.configService)==null?void 0:o.icons.data})];d.useEffect(()=>{var e;(e=S==null?void 0:S.current)==null||e.scrollTo(0,0)},[]);const C=()=>{v.replace(`/buildings/${l}/configs-services`)};H(I,A,{message:n.success,description:n.update_data_success},()=>{p(ce()),v.replace(`/buildings/${l}/configs-services`)}),d.useEffect(()=>(E(n.label.service_updates),f.state&&f.state.service?p(me()):C(),()=>{E("")}),[]),d.useEffect(()=>{(r==null?void 0:r.serviceType)===k?g(!0):g(!1)},[r]);const w=()=>{const e=Z(t);t.setFieldsValue({...e}),t.submit()},Y=async()=>{var o,i;if(t.setFieldsValue({...ee(t.getFieldsValue(),{})}),await t.validateFields()){const s=t.getFieldsValue(),z={...s,id:r.id,isAddFromDefaultService:r.isAddFromDefaultService,paymentExpiredDate:(o=s==null?void 0:s.paymentExpired)==null?void 0:o.date,paymentExpiredMonth:(i=s==null?void 0:s.paymentExpired)==null?void 0:i.month};F||p(pe({service:{...z},unitGroupId:l}))}},M=(e,o)=>{if(e.serviceType){e.serviceType===k?g(!0):g(!1);const i=["formulas"];t.resetFields(i)}},N=e=>o=>{const i=t.getFieldValue("formulas");i[e]={formulaType:o,formula:[{from:0}]},t.setFieldsValue({formulas:i})},U=(e,o,i)=>{const s=b({remove:o,index:i,description:n.formula_cannot_delete});p(le({id:e,unitGroupId:l,callback:s}))},X=(e,o,i)=>{const s=b({remove:o,index:i,description:n.surcharge_cannot_delete});p(de({id:e,unitGroupId:l,callback:s}))},K=(e,o,i)=>{const s=b({remove:o,index:i,description:n.promotion_cannot_delete});p(ue({id:e,unitGroupId:l,callback:s}))},$=[a(c.Panel,{header:n.label.general_information,children:a(ie,{form:t,isEdit:!0,isDefaultService:r==null?void 0:r.isAddFromDefaultService,isParking:!0,isShowCheckbox:D})},"1"),a(c.Panel,{header:n.label.formula,children:a(re,{form:t,name:"formulas",onChangeFormulaType:N,isEdit:!0,isParking:(r==null?void 0:r.systemCode)===y,onDeleteFormula:U,isLoadingDelete:j})},"2"),a(c.Panel,{header:n.label.surcharge,children:a(te,{form:t,name:"surcharges",isEdit:!0,onDeleteSurcharge:X,isLoadingDelete:G})},"3"),a(c.Panel,{header:n.label.promotion,children:a(ae,{form:t,name:"promotions",isEdit:!0,onDeletePromotion:K,isLoadingDelete:R})},"4"),a(c.Panel,{header:n.label.information_require,children:a(ne,{form:t,name:"requiredInfo",isEdit:!0,isParking:(r==null?void 0:r.systemCode)===y})},"5"),a(c.Panel,{header:n.label.icon,children:a(se,{form:t,name:"icon",isEdit:!0,isParking:(r==null?void 0:r.systemCode)===y,isLoading:O,icons:q})},"6")];return T(_,{layout:"vertical",name:"updateServiceForm",initialValues:Q(r),onFinish:Y,form:t,requiredMark:!1,onValuesChange:M,scrollToFirstError:!0,children:[a(c,{defaultActiveKey:["1","2","3","4","5","6"],children:$.map(e=>e)}),a(fe,{offsetBottom:0,children:a(x,{style:{background:"white"},children:T(x.Footer,{borderTop:!0,style:{textAlign:"right"},children:[a(L,{onClick:C,style:{marginRight:V.padding},children:n.cancel}),a(L,{loading:F,disabled:F,onClick:w,type:"primary",children:n.confirm})]})})})]})};B.propTypes={history:u.objectOf(u.any),match:u.objectOf(u.any),location:u.objectOf(u.any)};B.defaultProps={history:{},match:{},location:{}};export{B as default};
