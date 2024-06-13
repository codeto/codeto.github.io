import{j as t,u as Ue,a as L,b as Le,F as re}from"./@emotion-63839449.js";import{F as M}from"./index-687ba9e6.js";import{B as Ne}from"./index-881eef42.js";import{l as D,D as ae,C as Ye,k as He,P as X,d as je,T as qe,F as Xe,a as Ze}from"./index-b17d22e5.js";import{r as I}from"./react-4fd50329.js";import{P as q}from"./prop-types-1172f4d5.js";import{K as et,fp as j,by as tt,a1 as it,E as rt,fq as ie,fr as ce,fs as Z,l as n,I as ot,e9 as Se,e8 as fe,ft as Ge,e7 as We,b1 as at,fu as nt,a9 as G,s as ee,c6 as Te,eh as st,ec as _e}from"./index-c2ded735.js";import"./react-redux-896b353b.js";import{u as lt}from"./useTableCheckbox-753d19b2.js";import{h as d}from"./moment-a468e1f9.js";import"./lodash-88fe09e6.js";import"./file-saver-40cf32a9.js";import{u as ct}from"./useService-37d60dc0.js";import"./@firebase-43527ee1.js";import{k as dt,l as mt}from"./bill-d9d0423c.js";import{k as pt}from"./contract-2ad66738.js";import{S as ut,L as te,C as ke,e as he,f as Ve,T as ft,g as ht,h as vt,i as gt}from"./constants-1272f83b.js";import{u as ve}from"./react-router-a4308f7b.js";import{n as ue,b as z,B as yt,R as ne,G as $e,k as Ct,P as St}from"./antd-f9eae174.js";import{S as H,I as ze}from"./index-43183512.js";import{c as Q}from"./calculateClosing-26527bc8.js";import"./hoist-non-react-statics-23d96a9a.js";import"./react-is-e8e5dbb3.js";import"./@babel-b64fd0f9.js";import"./stylis-79144faa.js";import"./react-router-dom-2a8f5f6d.js";import"./history-a1882333.js";import"./resolve-pathname-e210f2ac.js";import"./tiny-invariant-dd7d57d2.js";import"./account-86ffff50.js";import"./libphonenumber-js-0d5a9c92.js";import"./react-infinite-scroll-component-e33646cb.js";import"./classnames-4ba1ba1a.js";import"./redux-10bbab4c.js";import"./react-dom-40621ea0.js";import"./scheduler-765c72db.js";import"./@redux-saga-8bafe09b.js";import"./redux-logger-e1c9ca90.js";import"./dompurify-8e338605.js";import"./query-string-f5cca1e7.js";import"./decode-uri-component-4138e85d.js";import"./split-on-first-4f1167c8.js";import"./filter-obj-2ed190f4.js";import"./oidc-client-7da0eaf7.js";import"./firebase-878887a2.js";import"./rc-pagination-c1e6a0ac.js";import"./rc-picker-2e3d5fe5.js";import"./rc-util-0bc219f3.js";import"./rc-trigger-570b13ec.js";import"./rc-motion-ae889c42.js";import"./rc-align-e5d7b12e.js";import"./dom-align-ecb06dd6.js";import"./resize-observer-polyfill-0f9f8adb.js";import"./rc-resize-observer-b9ad4e29.js";import"./@ant-design-cba9d434.js";import"./@ctrl-fb5a5473.js";import"./rc-tabs-dfd19a56.js";import"./rc-dropdown-5378dd0a.js";import"./rc-menu-b15ebfe9.js";import"./rc-overflow-6be96612.js";import"./rc-select-564caf01.js";import"./rc-virtual-list-8a7b82a6.js";import"./rc-collapse-11b7d3c4.js";import"./shallowequal-4542d6f7.js";import"./rc-drawer-317f0b4d.js";import"./@rc-component-5a112e55.js";import"./rc-field-form-ef5549aa.js";import"./async-validator-dee29e8b.js";import"./scroll-into-view-if-needed-6b992d05.js";import"./compute-scroll-into-view-183f845a.js";import"./rc-image-e0357917.js";import"./rc-dialog-b1d1f07b.js";import"./rc-input-number-8bc068f7.js";import"./rc-rate-c64cf0d5.js";import"./rc-steps-2d1924c7.js";import"./rc-switch-b4e96de7.js";import"./rc-table-191ecc42.js";import"./rc-checkbox-018e8052.js";import"./rc-tree-67773537.js";import"./rc-tree-select-cb7eccc3.js";import"./copy-to-clipboard-64585c8c.js";import"./toggle-selection-93f4ad84.js";import"./rc-textarea-d01adcbb.js";import"./rc-input-02c2c2ba.js";import"./rc-upload-3ab0f08a.js";import"./rc-notification-d13dc43b.js";import"./rc-progress-4f1a7096.js";import"./rc-tooltip-08fa4217.js";import"./use-sync-external-store-5d1b6592.js";import"./idb-cdd1a92f.js";import"./path-to-regexp-ef8d5544.js";const se=I.createContext({formProgressCreateBill:void 0,showFormProgressCreateBill:()=>{},hideFormProgressCreateBill:()=>{},formCreateBill:void 0,progressCreateBill:100,setProgressCreateBill:()=>{},createListBillStatus:{isFetching:!1,code:void 0,codeLanguage:void 0},setCreateListBillStatus:()=>{},serviceActives:[],setServiceActives:()=>{},serviceCanCreateBill:[],setServiceCanCreateBill:()=>{},contractSelected:void 0,setContractSelected:()=>{},tableData:{records:[],totalRecord:0},setTableData:()=>{},tableSelection:void 0,resetDataTableSelection:()=>{},onSelectRow:()=>{},onSelectAllRowOfPage:()=>{},selectAllRowComponent:()=>{},serviceInUses:[],getServiceInUses:()=>{},loadingService:!1,apartmentKeyword:"",setApartmentKeyword:()=>{}}),Ae=e=>{const{children:i}=e,[r,l]=I.useState({isFetching:!1,code:void 0,codeLanguage:void 0}),[p,a]=I.useState({records:[],totalRecord:0}),[o,u]=I.useState([]),[g,v]=I.useState([]),[f,y]=I.useState(),[F,c]=I.useState(100),[C,s,A]=et(),[B]=M.useForm(),[O,_,T,h,b]=lt({dataRows:p.records,rowKey:"id",totalRows:p.totalRecord}),[P,w]=I.useState(""),{serviceInUses:S,getServiceInUses:m,loading:R}=ct(),E={formProgressCreateBill:C,showFormProgressCreateBill:s,hideFormProgressCreateBill:A,formCreateBill:B,progressCreateBill:F,setProgressCreateBill:c,createListBillStatus:r,setCreateListBillStatus:l,serviceActives:o,setServiceActives:u,serviceCanCreateBill:g,setServiceCanCreateBill:v,contractSelected:f,setContractSelected:y,tableData:p,setTableData:a,tableSelection:O,resetDataTableSelection:_,onSelectRow:T,onSelectAllRowOfPage:h,selectAllRowComponent:b,serviceInUses:S,getServiceInUses:m,loadingService:R,apartmentKeyword:P,setApartmentKeyword:w};return t(se.Provider,{value:E,children:i})};Ae.propTypes={children:q.node};Ae.defaultProps={children:t("div",{})};const Tt=Ae,ye=async({targets:e,incurredCreatedFor:i,type:r,creator:l,idBuilding:p})=>{try{let a;if(r===j)a=await dt({targets:e,isAll:!1,incurredCreatedFor:i,idBuilding:p,creator:l});else{const{startDate:o,endDate:u,feePeriodType:g}=e[0];a=await mt({startDate:o,endDate:u,targets:e,type:r,idBuilding:p,isAll:!1,incurredCreatedFor:i,feePeriodType:g,creator:l})}return{code:a.code,codeLanguage:a.codeLanguage}}catch(a){return{code:a.code,codeLanguage:a.codeLanguage}}},_t=({selectedRowKeysCache:e,selectedRowsCache:i,byId:r,feeServiceCreateType:l})=>{if(l===j)return[...i];const p=e.map(o=>r==null?void 0:r[o]).filter(o=>(o==null?void 0:o.typeRow)==="CONTRACT"),a={};for(let o=0;o<p.length;o+=1){const u=p[o];a[u.apartmentId]||(a[u.apartmentId]={id:u.apartmentId,contracts:[]}),a[u.apartmentId].contracts.push({...u,id:u.contractId})}return Object.values(a)},At=({feeServiceCreateType:e,services:i,period:r})=>{let l=[];return e===j?l=i.map(p=>p.active?{id:p.service,startDate:p.period[0].toDate(),endDate:p.period[1].toDate()}:null).filter(Boolean):l=[{id:i==null?void 0:i[0],startDate:d(r[0]).toDate(),endDate:d(r[1]).toDate()}],l},Pt=e=>{var i,r,l,p,a,o,u,g,v,f,y,F;return{id:e.id,key:e.id,registrationPlate:(e==null?void 0:e.registrationPlate)??"",totalPayment:(e==null?void 0:e.totalPayment)??0,service:{id:(i=e==null?void 0:e.service)==null?void 0:i.id,name:((r=e==null?void 0:e.service)==null?void 0:r.name)??"",identifier:(e==null?void 0:e.identifier)??"",type:(e==null?void 0:e.serviceType)??""},contractTemplate:{id:(l=e==null?void 0:e.contractTemplate)==null?void 0:l.id,name:((p=e==null?void 0:e.contractTemplate)==null?void 0:p.name)??"",formula:(a=e==null?void 0:e.contractTemplate)!=null&&a.formula?{formula:(u=(o=e==null?void 0:e.contractTemplate)==null?void 0:o.formula)==null?void 0:u.formula,formulaType:(v=(g=e==null?void 0:e.contractTemplate)==null?void 0:g.formula)==null?void 0:v.formulaType}:null,parkingType:((y=(f=e==null?void 0:e.contractTemplate)==null?void 0:f.formula)==null?void 0:y.parkingType)??""},apartmentId:e==null?void 0:e.unitId,startDate:(e==null?void 0:e.startDate)??"",startDateFormat:e!=null&&e.startDate?d(e==null?void 0:e.startDate).format(D):"",deActiveAt:(e==null?void 0:e.deActiveAt)??"",deActiveAtFormat:e!=null&&e.deActiveAt?d(e==null?void 0:e.deActiveAt).format(D):"",status:(e==null?void 0:e.status)??"",statusFormat:e!=null&&e.status?(F=ut[e==null?void 0:e.status])==null?void 0:F.name:""}},wt=e=>{var i;return{id:e==null?void 0:e.id,key:e==null?void 0:e.id,name:(e==null?void 0:e.name)??"",floor:{id:e==null?void 0:e.floorId,name:(e==null?void 0:e.floorName)??""},contracts:((i=e==null?void 0:e.contracts)==null?void 0:i.map(r=>Pt(r)))??[]}},oe=async({filter:e,idBuilding:i,page:r,limit:l})=>{const{apartment:p,resident:a,service:o,vehicleType:u,status:g,startDate:v,deActiveAt:f}=e;try{const y=await pt({idBuilding:i,filter:{unitName:p||void 0,residentName:a||void 0,serviceId:o||void 0,parkingType:u||void 0,status:g||void 0,startDateFrom:v!=null&&v.length?d(v[0]).startOf("day").toDate():void 0,startDateTo:v!=null&&v.length?d(v[1]).endOf("day").toDate():void 0,deActiveAtFrom:f!=null&&f.length?d(f[0]).startOf("day").toDate():void 0,deActiveAtTo:f!=null&&f.length?d(f[1]).endOf("day").toDate():void 0},page:r,limit:l});return{code:y.code,codeLanguage:y.codeLanguage,data:y.data.map(F=>wt(F)),totalRecord:y.totalRecord}}catch(y){return{code:y.code,codeLanguage:y.codeLanguage,data:[],totalRecord:0}}},Ke=({unitsSelected:e,serviceActives:i})=>{var a;const r=[],l=i.map(o=>o.id),p=tt(i,"id");for(let o=0;o<e.length;o+=1){const u=e[o],{contracts:g,id:v}=u;for(let f=0;f<g.length;f+=1){const y=g[f];if(l.includes((a=y==null?void 0:y.service)==null?void 0:a.id)){const{service:F,id:c,contractTemplate:C}=y,{id:s,serviceType:A}=F,{id:B}=C,{startDate:O,endDate:_}=p[s];r.push({serviceId:s,serviceType:A,startDate:O,endDate:_,unitId:v,contractId:c,contractTemplateId:B})}}}return r},Ft=()=>{const{currentEmployee:e}=it(),{idBuilding:i}=ve(),{formCreateBill:r,apartmentKeyword:l,showFormProgressCreateBill:p,setProgressCreateBill:a,tableSelection:o,hideFormProgressCreateBill:u,contractSelected:g,tableData:v,serviceActives:f}=I.useContext(se),{isSelectAllItem:y,selectedRowKeysCache:F,selectedRowsCache:c,byId:C}=o,s=async O=>{if(F.length>0){p(),a(0);const _=At({feeServiceCreateType:O,services:O===j?r.getFieldValue("services"):[r.getFieldValue("service")],period:O===j?null:r.getFieldValue("period")}),T=_t({byId:C,feeServiceCreateType:O,selectedRowKeysCache:F,selectedRowsCache:c}),h=r.getFieldValue("feeNotificationPeriod").format("YYYYMM");if(y){const b=v.totalRecord,P=Math.ceil(b/te)+1,w=Math.ceil(te/b*100);let S=0,m=1;for(;m<=P;){const R=await oe({filter:{apartment:l,service:f&&f.length===1?f[0].id:void 0},idBuilding:i,limit:te,page:m});if(R.data&&R.data.length>0){const E=Ke({incurredCreatedFor:h,serviceActives:_,unitsSelected:R.data});await ye({idBuilding:i,incurredCreatedFor:h,targets:E,type:O,creator:e.id}),m+=1,S+=Number(w),a(S)}else break}}else{const b=Ke({incurredCreatedFor:h,serviceActives:_,unitsSelected:T}),P=Math.ceil(b.length/te)+1,w=Math.ceil(te/b.length*100);let S=0,m=1;for(;m<=P;){const R=[...b].splice((m-1)*te,te);if(R.length)await ye({idBuilding:i,incurredCreatedFor:h,targets:R,type:O,creator:e.id}),m+=1,S+=Number(w),a(S);else break}}a(100),ue.success({message:n.success,description:n.create_service_fee_success}),u()}else ue.success({message:n.label.error,description:n.you_have_not_yet_selected_any_apartment})},A=async O=>{if(g){p();const _=r.getFieldValue("feeNotificationPeriod").format("YYYYMM"),T=r.getFieldValue("period"),h=[{serviceId:g.serviceId,serviceType:g.serviceType,startDate:d(T[0]).toDate(),endDate:d(T[1]).toDate(),unitId:g.unitId,contractId:g.contractId,contractTemplateId:g.contractTemplateId}];await ye({idBuilding:i,incurredCreatedFor:_,targets:h,type:O}),u(),ue.success({message:n.success,description:n.create_service_fee_success})}else ue.error({message:n.label.error,description:n.you_have_not_yet_selected_any_fee})};return[async()=>{if(r.setFieldsValue({...rt(r.getFieldsValue(),{})}),await r.validateFields()){const _=r.getFieldValue("feeServiceCreateType");[ie,ce,j,Z].includes(_)?await s(_):await A(_)}}]},It=()=>{const[e]=Ft(),i=Ue();return L(ne,{css:Le({paddingBottom:i.padding.sm},"",""),gutter:[i.margin.sm,0],children:[t(z,{span:"12",children:t("p",{css:Le({margin:0,fontWeight:i.fontWeight.bold,fontSize:i.heading.three},"",""),children:n.auto_create_service_fee})}),t(z,{span:"12",style:{textAlign:"right"},children:t(yt,{onClick:e,icon:t(ot,{name:"icon-plus-circle-outlined"}),type:"primary",children:n.create_service_fee})})]})},Pe=({serviceCanCreateBill:e,onActiveServiceChange:i,onAllActiveServiceChange:r,activeAllService:l})=>{const p=Ue();return L(re,{children:[L(ne,{gutter:[24,0],style:{marginBottom:p.margin.sm},children:[L(z,{span:"20",children:[n.service,":"]}),t(z,{span:"4",style:{display:"flex",justifyContent:"end"},children:t($e,{checked:l,onChange:r})})]}),t(M.List,{name:"services",children:a=>t(re,{children:a.map(o=>t(M.Item,{noStyle:!0,shouldUpdate:!0,children:({getFieldValue:u})=>{const g=u("feeNotificationPeriod"),v=u(["services",o.fieldKey,"service"]),f=e.find(s=>s.id===v),{feePeriodType:y,serviceType:F}=f;let c=d(g).startOf("month"),C;return F===Se&&(y!==fe&&(y===Ge&&(c=d(c).subtract(1,"month")),C=d(c).add(1,"month").endOf("month")),y===fe&&(c=d(c).subtract(2,"month"),C=d(c).add(2,"month").endOf("month"))),F!==Se&&(c=d(c).subtract(2,"month").add(1,"day"),y===We&&(c=d(c).add(1,"month")),y===fe&&(c=d(c).subtract(1,"month")),C=d(c).add(2,"month").endOf("month")),L(re,{children:[t(ne,{gutter:[12,0],children:t(z,{span:"24",children:t(M.Item,{label:`${n.opening} - ${n.closing}`,name:[o.name,"period"],fieldKey:[o.fieldKey,"period"],disabled:!u(["services",o.fieldKey,"active"]),rules:[{required:!0},{validator:(s,A)=>{if(A&&A.length>1){const B=d(A[0]).startOf("day");if(d(A[1]).add(1,"day").startOf("day").diff(B,"month",!0)!==1)return Promise.reject(n.opening_or_closing_invalid)}return Promise.resolve()}}],children:t(ae.RangePicker,{format:["DD/MM/YYYY","DD/MM/YYYY"],placeholder:["DD/MM/YYYY","DD/MM/YYYY"],fluid:"true",disabledDate:s=>s<c||s>C,allowClear:!1})})})}),L(ne,{gutter:[24,0],children:[t(Ye,{span:"20",children:t(M.Item,{name:[o.name,"service"],fieldKey:[o.fieldKey,"service"],rules:[{required:!0}],children:t(H,{disabled:!0,fluid:"true",placeholder:n.service,children:e.map(s=>t(H.Option,{value:s.id,children:s.name},s.id))})})}),t(Ye,{span:"4",centerVertical:!0,style:{display:"flex",justifyContent:"end"},children:t(M.Item,{name:[o.name,"active"],fieldKey:[o.fieldKey,"active"],valuePropName:"checked",children:t($e,{onChange:s=>{i(u(["services",o.fieldKey,"service"]),s)}})})})]})]})}},o.fieldKey))})})]})};Pe.propTypes={activeAllService:q.bool,serviceCanCreateBill:q.arrayOf(q.any),onActiveServiceChange:q.func,onAllActiveServiceChange:q.func};Pe.defaultProps={activeAllService:!1,serviceCanCreateBill:[],onActiveServiceChange:()=>{},onAllActiveServiceChange:()=>{}};const we=({serviceCanCreateBill:e})=>L(re,{children:[t(M.Item,{name:"service",label:n.service,children:t(H,{fluid:"true",placeholder:n.service,children:e.map(i=>t(H.Option,{value:i.id,children:i.name},i.id))})}),t(M.Item,{name:"amountMonth",label:n.amount_month,children:t(He,{min:"1",max:"60",fluid:"true",placeholder:n.amount_month})}),t(M.Item,{label:`${n.opening} - ${n.closing}`,name:"period",rules:[{required:!0},({getFieldValue:i})=>({validator(r,l){if(l&&l.length>1){const p=i("amountMonth"),a=d(l[0]).startOf("day");if(d(l[1]).add(1,"day").startOf("day").diff(a,"month",!0)!==p)return Promise.reject(n.opening_or_closing_invalid)}return Promise.resolve()}})],children:t(ae.RangePicker,{allowClear:!1,format:[D,D],placeholder:[D,D],fluid:"true"})})]});we.propTypes={serviceCanCreateBill:q.arrayOf(q.any)};we.defaultProps={serviceCanCreateBill:[]};const Fe=({serviceCanCreateBill:e})=>L(re,{children:[t(M.Item,{name:"service",label:n.service,children:t(H,{fluid:"true",placeholder:n.service,children:e.map(i=>t(H.Option,{value:i.id,children:i.name},i.id))})}),t(M.Item,{name:"amountDate",label:n.amount_date,children:t(He,{min:"1",max:"31",fluid:"true",placeholder:n.amount_date})}),t(M.Item,{label:`${n.opening} - ${n.closing} *`,name:"period",rules:[{required:!0},({getFieldValue:i})=>({validator(r,l){if(l&&l.length>1){const p=d(l[0]).startOf("day");if(d(p).add(1,"month").startOf("day").diff(p,"day",!0)<i("amountDate"))return Promise.reject(n.opening_or_closing_invalid)}return Promise.resolve()}})],children:t(ae.RangePicker,{allowClear:!1,format:[D,D],placeholder:[D,D],fluid:"true"})})]});Fe.propTypes={serviceCanCreateBill:q.arrayOf(q.any)};Fe.defaultProps={serviceCanCreateBill:[]};const Ie=({serviceCanCreateBill:e})=>L(re,{children:[t(M.Item,{name:"service",label:n.service,children:t(H,{fluid:"true",placeholder:n.service,children:e.map(i=>t(H.Option,{value:i.id,children:i.name},i.id))})}),t(M.Item,{label:`${n.opening} - ${n.closing}`,name:"period",rules:[{required:!0}],children:t(ae.RangePicker,{allowClear:!1,format:[D,D],placeholder:[D,D],fluid:"true"})})]});Ie.propTypes={serviceCanCreateBill:q.arrayOf(q.any)};Ie.defaultProps={serviceCanCreateBill:[]};const Rt=()=>{const e=ve(),{idBuilding:i}=e,{loadingService:r,serviceActives:l,getServiceInUses:p,formCreateBill:a,serviceInUses:o,setServiceActives:u,setServiceCanCreateBill:g,serviceCanCreateBill:v}=I.useContext(se),[f,y]=I.useState(!1),F=(C,s)=>{if(s){const A=o.find(B=>B.id===C);u([...l,A].sort((B,O)=>B.name.localeCompare(O.name)))}else u([...l.filter(A=>A.id!==C)])},c=C=>{var s,A;C?(u([...o]),a.setFieldsValue({services:[...(s=a.getFieldValue("services"))==null?void 0:s.map(B=>({...B,active:!0}))]})):(u([]),a.setFieldsValue({services:[...(A=a.getFieldValue("services"))==null?void 0:A.map(B=>({...B,active:!1}))]})),y(C)};return I.useEffect(()=>{p({idBuilding:i})},[]),I.useEffect(()=>{a.setFieldsValue({services:o.map(C=>{let s=d(),A=d();return C.feePeriodType===We?(s=d().add(1,"month").startOf("month"),A=d().add(1,"month").endOf("month")):C.feePeriodType===Ge?(s=d().startOf("month"),A=d().endOf("month")):C.feePeriodType===fe&&(s=d().subtract(1,"month").startOf("month"),A=d().subtract(1,"month").endOf("month")),{service:C.id,period:[s,A],active:!0}})}),u(o),g(o),y(!0)},[o]),{loadingService:r,serviceCanCreateBill:v,onActiveServiceChange:F,onAllActiveServiceChange:c,activeAllService:f}},bt=()=>{const{loadingService:e,serviceCanCreateBill:i,onActiveServiceChange:r,onAllActiveServiceChange:l,activeAllService:p}=Rt();return L("div",{children:[t(at,{isLoading:e}),L(ne,{gutter:[12,0],children:[t(z,{span:"24",children:t(M.Item,{label:n.create_service_fee,rules:[{required:!0}],name:"feeServiceCreateType",children:t(H,{fluid:"true",placeholder:n.create_fee_service,children:nt.map(a=>t(H.Option,{value:a.id,children:a.name},a.id))})})}),t(z,{span:"24",children:t(M.Item,{label:n.fee_notification_period,rules:[{required:!0}],name:"feeNotificationPeriod",children:t(ae,{allowClear:!1,picker:"month",fluid:"true",format:"MM/YYYY",placeholder:"MM/YYYY"})})}),t(z,{span:"24",children:t(M.Item,{noStyle:!0,shouldUpdate:(a,o)=>a.feeServiceCreateType!==o.feeServiceCreateType,children:({getFieldValue:a})=>L("div",{children:[a("feeServiceCreateType")===j?t(Pe,{serviceCanCreateBill:i,onActiveServiceChange:r,onAllActiveServiceChange:l,activeAllService:p}):null,a("feeServiceCreateType")===Z?t(we,{serviceCanCreateBill:i}):null,a("feeServiceCreateType")===ie?t(Fe,{serviceCanCreateBill:i}):null,a("feeServiceCreateType")===ce?t(Ie,{serviceCanCreateBill:i}):null]})})})]})]})},Ot=()=>{const{tableSelection:e,tableData:i,serviceActives:r,setTableData:l,resetDataTableSelection:p,onSelectRow:a,onSelectAllRowOfPage:o,selectAllRowComponent:u,setApartmentKeyword:g}=I.useContext(se),v=ve(),{idBuilding:f}=v,[y,F]=I.useState({...ke}),[c,C]=I.useState({current:G,limit:ee}),[s,A]=I.useState({isFetching:!1}),{selectedRowKeys:B}=e;I.useEffect(()=>{(async()=>{A({isFetching:!0});const P=await oe({filter:{...ke},idBuilding:f,limit:ee,page:G});l({records:P.data,totalRecord:P.totalRecord}),A({isFetching:!1})})()},[]);const O=async(P,w)=>{A({isFetching:!0});let{current:S,limit:m}=c;P!==S?S=P:w!==m&&(S=G,m=w),C({current:S,limit:m});const R=await oe({filter:{...y},idBuilding:f,limit:m,page:S});l({records:R.data,totalRecord:R.totalRecord}),A({isFetching:!1})},_=async P=>{F({...y,apartment:P}),g(P),A({isFetching:!0}),C({current:G,limit:ee});const w=await oe({filter:{...y,apartment:P},idBuilding:f,limit:ee,page:G});l({records:w.data,totalRecord:w.totalRecord}),A({isFetching:!1}),p()},T=I.useMemo(()=>i.records.map(P=>{const w={...P,...r.reduce((S,m)=>(S[`${m.name}_${m.id}`]=0,S),{}),totalPayment:0};for(let S=0;S<P.contracts.length;S+=1){const m=P.contracts[S];w[`${m.service.name}_${m.service.id}`]!==void 0&&w[`${m.service.name}_${m.service.id}`]!==null&&(w[`${m.service.name}_${m.service.id}`]+=Number(m.totalPayment),w.totalPayment+=Number(m.totalPayment))}return w}),[i,r]),h={defaultCurrent:G,pageSize:c.limit,current:c.current,total:i.totalRecord,showQuickJumper:!0,showSizeChanger:!0,onChange:O},b={selectedRowKeys:B,onSelect:a,onSelectAll:o,fixed:!0};return{loadingTable:s.isFetching,serviceActives:r,dataSource:T,pagination:h,rowSelection:b,onApartmentKeywordChange:_,selectAllRowComponent:u}},Dt=()=>{const{loadingTable:e,serviceActives:i,dataSource:r,pagination:l,rowSelection:p,onApartmentKeywordChange:a,selectAllRowComponent:o}=Ot(),u=I.useMemo(()=>[{title:n.unit,dataIndex:"apartment",key:"apartment",width:i.length!==1?150:void 0,fixed:"left",render:(v,f)=>(f==null?void 0:f.name)??""},...i.map(v=>({title:v.name,dataIndex:`${v.name}_${v.id}`,key:`${v.name}_${v.id}`,align:"right",width:i.length!==1?150:void 0,render:f=>f?Te(f):0})),{title:n.total_payment,dataIndex:"totalPayment",key:"totalPayment",align:"right",width:i.length!==1?150:void 0,fixed:"right",render:v=>v?Te(v):0}],[i]),g={x:i.length===1?"max-content":u.reduce((v,f)=>v+f.width)};return L(X.Container,{children:[t(X.Header,{children:t(X.ActionBox,{actions:[t(Ct,{disabled:e,onSearch:je(a),children:t(ze.Search,{placeholder:n.unit,allowClear:!0,disabled:e,loading:e,enterButton:!0})},"apartment")],total:o()})}),t(X.Content,{scrollY:!0,children:t(qe,{columns:u,dataSource:r,loading:e,pagination:l,scroll:g,rowSelection:p,bordered:!0})})]})},Bt=()=>{var de,me,pe,Re;const{tableSelection:e,tableData:i,serviceActives:r,setTableData:l,resetDataTableSelection:p,onSelectRow:a,onSelectAllRowOfPage:o,formCreateBill:u,selectAllRowComponent:g,serviceCanCreateBill:v}=I.useContext(se),{selectedRowKeys:f}=e,[y]=M.useForm(),F=v==null?void 0:v.find(Y=>(Y==null?void 0:Y.identifier)===st),C=((de=u.getFieldsValue())==null?void 0:de.feeServiceCreateType)===j?(pe=(me=u.getFieldsValue())==null?void 0:me.services)==null?void 0:pe.find(Y=>Y.service===(F==null?void 0:F.id)):((Re=u.getFieldsValue())==null?void 0:Re.service)===((F==null?void 0:F.id)??""),s=u.getFieldValue("feeServiceCreateType")===Z,A=u.getFieldValue("feeServiceCreateType")===j,B=ve(),{idBuilding:O}=B,[_,T]=I.useState({...he}),[h,b]=I.useState({current:G,limit:ee}),[P,w]=I.useState({isFetching:!1}),S=Y=>Y.map(K=>{var be,Oe,De,Be,Ee,Me;let x={...K,typeRow:"APARTMENT",totalPayment:0,children:[],apartment:K.name};const{contracts:k=[],id:le}=K;if(((Oe=(be=k==null?void 0:k[0])==null?void 0:be.service)==null?void 0:Oe.serviceType)===_e){const U=k==null?void 0:k[0];x={...x,...U,typeRow:"CONTRACT",totalPayment:Number(U==null?void 0:U.totalPayment),contractId:U==null?void 0:U.id,contractTemplateId:(De=U==null?void 0:U.contractTemplate)==null?void 0:De.id,apartmentId:K.id}}else for(let U=0;U<k.length;U+=1){const W=k[U],{id:xe,contractTemplate:ge,registrationPlate:Je="",totalPayment:Qe=0}=W;x.totalPayment+=Number(W.totalPayment),x.children.push({...W,id:`${le}-${xe}`,key:`${le}-${xe}`,typeRow:"CONTRACT",apartment:C?`${Je}`:`${ge==null?void 0:ge.name}`,totalPayment:Number(Qe),apartmentId:K.id,contractId:W.id,vehicleType:(Be=W==null?void 0:W.contractTemplate)!=null&&Be.parkingType?(Me=ft[(Ee=W==null?void 0:W.contractTemplate)==null?void 0:Ee.parkingType])==null?void 0:Me.name:""})}return x.children.length===0&&delete x.children,x});I.useEffect(()=>((async()=>{var K,x;w({isFetching:!0}),y.resetFields(),T({...he,service:(K=r==null?void 0:r[0])==null?void 0:K.id,status:C?Ve:null}),C&&y.setFieldsValue({status:Ve});const Y=await oe({filter:{...he,service:(x=r==null?void 0:r[0])==null?void 0:x.id},idBuilding:O,limit:ee,page:G});l({records:S(Y.data),totalRecord:Y.totalRecord}),w({isFetching:!1})})(),()=>{p(),l({records:[],totalRecord:0})}),[r]);const m=async(Y,K)=>{w({isFetching:!0});let{current:x,limit:k}=h;Y!==x?x=Y:K!==k&&(x=G,k=K),b({current:x,limit:k});const le=await oe({filter:{..._},idBuilding:O,limit:k,page:x});l({records:S(le.data),totalRecord:le.totalRecord}),w({isFetching:!1})},R=async Y=>{var x,k;w({isFetching:!0}),T({...Y,service:(x=r==null?void 0:r[0])==null?void 0:x.id}),b({current:G,limit:ee}),p();const K=await oe({filter:{...Y,service:(k=r==null?void 0:r[0])==null?void 0:k.id},idBuilding:O,limit:ee,page:G});l({records:S(K.data),totalRecord:K.totalRecord}),w({isFetching:!1})},E={defaultCurrent:1,pageSize:h.limit,current:h.current,total:i.totalRecord,showQuickJumper:!0,showSizeChanger:!0,onChange:m},N={columnWidth:"7%",selectedRowKeys:f,onSelect:a,onSelectAll:o,fixed:!0},$={...N},V={...N},J=s||A?V:$;return{loadingTable:P.isFetching,serviceActives:r,pagination:E,rowSelection:J,onSearch:R,selectAllRowComponent:g,tableSelection:e,dataSource:i.records,isParkingService:C,formFilter:y,isFeeServiceCreateTypeMoreOneMonth:s,isFeeServiceCreateTypeOneMonth:A,tableData:i}},Ce=()=>{const{loadingTable:e,serviceActives:i,pagination:r,rowSelection:l,onSearch:p,selectAllRowComponent:a,tableSelection:o,dataSource:u,isParkingService:g,formFilter:v}=Bt(),f=I.useMemo(()=>[{title:`${n.apartment}/${g?n.registration_plate:n.contract_template}`,dataIndex:"apartment",key:"apartment",fixed:"left",width:170},g?{title:n.vehicle_type,dataIndex:"vehicleType",key:"vehicleType",width:120}:null,g?{title:n.date_of_starting_to_use,dataIndex:"startDateFormat",key:"startDateFormat",align:"left",width:100}:null,g?{title:n.date_of_stop_using,dataIndex:"deActiveAtFormat",key:"deActiveAtFormat",align:"left",width:100}:null,g?{title:n.status1,dataIndex:"statusFormat",key:"statusFormat",align:"left",width:120}:null,{title:n.total_payment,dataIndex:"totalPayment",key:"totalPayment",align:"right",fixed:"right",width:120,render:c=>c?Te(c):0}].filter(Boolean),[i,g]),y=()=>a({totalItemSelected:o.selectedRowKeysCache.map(c=>{var C;return(C=o.byId)==null?void 0:C[c]}).filter(c=>{var C,s;return((C=c==null?void 0:c.service)==null?void 0:C.serviceType)!==_e&&(c==null?void 0:c.typeRow)==="APARTMENT"||((s=c==null?void 0:c.service)==null?void 0:s.serviceType)===_e&&(c==null?void 0:c.typeRow)==="CONTRACT"}).length,textSelectRow:n.you_selected_rows,textSelectAllRow:n.select_all_rows}),F=I.useMemo(()=>{var c,C;return[{label:n.apartment,key:"apartment",component:t(ze,{placeholder:n.apartment}),visible:!0},{label:n.type_vehicle,key:"vehicleType",component:t(H,{allowClear:!0,fluid:"true",mode:"multiple",showSearch:!1,placeholder:n.type_vehicle,listHeight:192,getPopupContainer:s=>s.parentNode,optionFilterProp:"children",children:ht.map(s=>t(H.Option,{value:s.value,children:s.name},s.value))}),visible:g},{label:n.status1,key:"status",component:t(H,{fluid:"true",placeholder:n.status1,autoFocus:!0,listHeight:192,getPopupContainer:s=>s.parentNode,optionFilterProp:"children",children:(C=(c=vt)==null?void 0:c.filter(s=>s.value!==gt))==null?void 0:C.map(s=>t(H.Option,{value:s.value,children:s.name},s.value))}),visible:g},{label:n.date_of_starting_to_use,key:"startDate",component:t(ae.RangePicker,{fluid:!0,placeholder:[D,D],format:[D,D],getPopupContainer:s=>s.parentNode}),visible:g},{label:n.date_of_stop_using,key:"deActiveAt",component:t(ae.RangePicker,{fluid:!0,placeholder:[D,D],format:[D,D],getPopupContainer:s=>s.parentNode}),visible:g}]},[g]);return L(re,{children:[t(Xe,{defaultFilter:{...he},formData:v,filters:F,visibleFilterBox:!0,size:"small",onSearch:je(p)}),L(X.Container,{children:[t(X.Header,{children:t(X.ActionBox,{total:y()})}),t(X.Content,{scrollY:!0,children:t(qe,{columns:f,dataSource:u,loading:e,pagination:r,rowSelection:l,bordered:!0,expandable:{defaultExpandAllRows:!0}})})]})]})},Et=()=>t(M.Item,{noStyle:!0,shouldUpdate:(e,i)=>e.feeServiceCreateType!==i.feeServiceCreateType,children:({getFieldValue:e})=>L("div",{style:{flex:1,display:"flex",flexDirection:"column"},children:[e("feeServiceCreateType")===j?t(Dt,{}):null,e("feeServiceCreateType")===Z?t(Ce,{}):null,e("feeServiceCreateType")===ie?t(Ce,{}):null,e("feeServiceCreateType")===ce?t(Ce,{}):null]})}),Mt=(e,i)=>d(i).endOf("day").diff(d(e).startOf("day"),"days")+1,xt=()=>{const{progressCreateBill:e,formCreateBill:i,serviceInUses:r,setServiceActives:l,setServiceCanCreateBill:p,formProgressCreateBill:a,serviceCanCreateBill:o,setContractSelected:u,resetDataTableSelection:g,setTableData:v,setApartmentKeyword:f}=I.useContext(se),y=_=>{const{feeServiceCreateType:T}=_,h={services:[],feeNotificationPeriod:d(),service:void 0,amountMonth:void 0,amountDate:void 0,period:[],serviceCanCreateBill:[],serviceActives:[]};if(T===j)h.services=r.map(S=>{const m=d(),{opening:R,closing:E}=Q(m,S.feePeriodType,1,"month");return{service:S.id,period:[R,E],active:!0}}),h.serviceCanCreateBill=[...r],h.serviceActives=[...r];else{const S=r.filter(m=>m.serviceType!==Se);if(h.serviceCanCreateBill=[...S],S.length){const m=S[0];h.serviceActives=[m];const{feePeriodType:R,id:E}=m,N=d().startOf("month").startOf("day"),{opening:$,closing:V}=Q(N,R,1,"month");h.service=E,h.period=[$,V],T===Z?h.amountMonth=1:T===ie&&(h.amountDate=Mt($,V))}else h.serviceActives=[]}const{serviceCanCreateBill:b,serviceActives:P,...w}=h;p(b),l(P),i.setFieldsValue({...w}),g(),v({records:[],totalRecord:0}),u(void 0)},F=_=>{const{feeNotificationPeriod:T,feeServiceCreateType:h,service:b,services:P,amountMonth:w,amountDate:S}=_,m={services:[],feeNotificationPeriod:T,service:void 0,amountMonth:void 0,amountDate:void 0,period:[]};if(h===j)m.services=P.map(R=>{const{service:E,active:N}=R,$=o.find(pe=>pe.id===E),{feePeriodType:V}=$,J=d(T).startOf("month"),{opening:de,closing:me}=Q(J,V,1,"month");return{service:E,period:[de,me],active:N,feePeriodType:V}});else{const R=o.find(N=>N.id===b);m.service=b;const E=d(T).startOf("month");if(h===Z){m.amountMonth=w;const{opening:N,closing:$}=Q(E,R.feePeriodType,m.amountMonth,"month");m.period=[N,$]}else if(h===ie){m.amountDate=S;const{opening:N,closing:$}=Q(E,R.feePeriodType,m.amountDate,"day");m.period=[N,$]}else if(h===ce){const{opening:N,closing:$}=Q(E,R.feePeriodType,1,"month");m.period=[N,$]}}i.setFieldsValue({...m})},c=_=>{const{feeNotificationPeriod:T,feeServiceCreateType:h,service:b,amountMonth:P,amountDate:w}=_,S={services:[],feeNotificationPeriod:T,service:b,amountMonth:P,amountDate:w,period:[],serviceActives:[]},m=o.find(V=>V.id===b),{feePeriodType:R}=m;S.serviceActives=[m];const E=d(T).startOf("month").startOf("day");if(h===Z){const{opening:V,closing:J}=Q(E,R,P,"month");S.period=[V,J]}else if(h===ie){const{opening:V,closing:J}=Q(E,R,w,"day");S.period=[V,J]}else if(h===ce){const{opening:V,closing:J}=Q(E,R,1,"month");S.period=[V,J]}const{serviceActives:N,...$}=S;l(N),i.setFieldsValue({...$}),u(void 0)},C=_=>{const{amountMonth:T,period:h}=_,b=d(h[0].toDate()).startOf("day"),P=d(h[0].toDate()).startOf("day").add(T,"month").subtract(1,"day").endOf("day");i.setFieldsValue({period:[b,P]})},s=_=>{const{amountDate:T,period:h}=_,b=d(h[0].toDate()).startOf("day"),P=d(h[0].toDate()).startOf("day").add(T-1,"day").endOf("day");i.setFieldsValue({period:[b,P]})},A=_=>{const{period:T,feeServiceCreateType:h}=_;h===Z?i.setFieldsValue({amountMonth:d(T[1]).add(1,"day").endOf("day").diff(d(T[0]).startOf("day"),"months")}):h===ie&&i.setFieldsValue({amountDate:d(T[1]).endOf("day").diff(d(T[0]).startOf("day"),"days")+1})},B=(_,T)=>{_.feeServiceCreateType?(y(T),f("")):_.feeNotificationPeriod?F(T):_.service?c(T):_.amountMonth?C(T):_.amountDate?s(T):_.period&&A(T)};I.useEffect(()=>{document.title=n.create_service_fee},[]);const O={feeServiceCreateType:j,feeNotificationPeriod:d(),services:[],service:"",amountMonth:0,amountDate:0,period:[]};return{formProgressCreateBill:a,progressCreateBill:e,formCreateBill:i,onValuesChange:B,initialValues:O}},Lt=()=>{const{formProgressCreateBill:e,progressCreateBill:i,formCreateBill:r,onValuesChange:l,initialValues:p}=xt();return L(M,{onValuesChange:l,initialValues:p,layout:"vertical",name:"formCreateBill",form:r,style:{flex:1,height:"100%",display:"flex",flexDirection:"column"},children:[t(It,{}),L(ne,{style:{flex:1},gutter:[12,12],children:[t(z,{style:{flex:1,display:"flex",flexDirection:"column"},span:"6",children:t(Ne,{style:{flex:1},children:t(Ne.Content,{scrollY:!0,children:t(bt,{})})})}),t(z,{style:{flex:1,display:"flex",flexDirection:"column"},span:"18",children:t(Et,{})})]}),t(Ze,{footer:null,closable:!1,open:e.isShow,children:t(St,{strokeColor:{from:"#108ee9",to:"#87d068"},percent:i,status:"active"})})]})},Sr=()=>t(Tt,{children:t(Lt,{})});export{Sr as default};
