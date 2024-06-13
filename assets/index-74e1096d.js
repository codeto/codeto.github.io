import{j as a,u as Q,a as B,F as X}from"./@emotion-63839449.js";import{P as U,o as ae,a as Y,c as J}from"./index-b17d22e5.js";import{a9 as x,s as w,b0 as ne,K as W,aW as re,at as ie,bv as ce,l as r,a3 as Z,I as k,dq as se,a5 as O,dP as de,bG as le,a as ee,S as z,bH as me,bI as ue,H as K,h as G,w as pe}from"./index-c2ded735.js";import{r as g}from"./react-4fd50329.js";import"./react-redux-896b353b.js";import"./lodash-88fe09e6.js";import"./moment-a468e1f9.js";import"./file-saver-40cf32a9.js";import"./@firebase-43527ee1.js";import{P as he}from"./prop-types-1172f4d5.js";import{F,u as V}from"./index-687ba9e6.js";import{d as ge}from"./downloadFileFromUrl-79614833.js";import{e as Pe,g as ve,d as fe,a as Fe,u as Se,i as be}from"./partner-15abd2bf.js";import{u as D}from"./react-router-a4308f7b.js";import{B as q,b as L,R as xe}from"./antd-f9eae174.js";import{I as b}from"./index-43183512.js";import{I as te}from"./index-0335a746.js";import"./hoist-non-react-statics-23d96a9a.js";import"./react-is-e8e5dbb3.js";import"./@babel-b64fd0f9.js";import"./stylis-79144faa.js";import"./react-router-dom-2a8f5f6d.js";import"./history-a1882333.js";import"./resolve-pathname-e210f2ac.js";import"./tiny-invariant-dd7d57d2.js";import"./account-86ffff50.js";import"./index-881eef42.js";import"./libphonenumber-js-0d5a9c92.js";import"./react-infinite-scroll-component-e33646cb.js";import"./redux-10bbab4c.js";import"./react-dom-40621ea0.js";import"./classnames-4ba1ba1a.js";import"./scheduler-765c72db.js";import"./@redux-saga-8bafe09b.js";import"./redux-logger-e1c9ca90.js";import"./dompurify-8e338605.js";import"./query-string-f5cca1e7.js";import"./decode-uri-component-4138e85d.js";import"./split-on-first-4f1167c8.js";import"./filter-obj-2ed190f4.js";import"./oidc-client-7da0eaf7.js";import"./firebase-878887a2.js";import"./rc-pagination-c1e6a0ac.js";import"./rc-picker-2e3d5fe5.js";import"./rc-util-0bc219f3.js";import"./rc-trigger-570b13ec.js";import"./rc-motion-ae889c42.js";import"./rc-align-e5d7b12e.js";import"./dom-align-ecb06dd6.js";import"./resize-observer-polyfill-0f9f8adb.js";import"./rc-resize-observer-b9ad4e29.js";import"./@ant-design-cba9d434.js";import"./@ctrl-fb5a5473.js";import"./rc-tabs-dfd19a56.js";import"./rc-dropdown-5378dd0a.js";import"./rc-menu-b15ebfe9.js";import"./rc-overflow-6be96612.js";import"./rc-select-564caf01.js";import"./rc-virtual-list-8a7b82a6.js";import"./rc-collapse-11b7d3c4.js";import"./shallowequal-4542d6f7.js";import"./rc-drawer-317f0b4d.js";import"./@rc-component-5a112e55.js";import"./rc-field-form-ef5549aa.js";import"./async-validator-dee29e8b.js";import"./scroll-into-view-if-needed-6b992d05.js";import"./compute-scroll-into-view-183f845a.js";import"./rc-image-e0357917.js";import"./rc-dialog-b1d1f07b.js";import"./rc-input-number-8bc068f7.js";import"./rc-rate-c64cf0d5.js";import"./rc-steps-2d1924c7.js";import"./rc-switch-b4e96de7.js";import"./rc-table-191ecc42.js";import"./rc-checkbox-018e8052.js";import"./rc-tree-67773537.js";import"./rc-tree-select-cb7eccc3.js";import"./copy-to-clipboard-64585c8c.js";import"./toggle-selection-93f4ad84.js";import"./rc-textarea-d01adcbb.js";import"./rc-input-02c2c2ba.js";import"./rc-upload-3ab0f08a.js";import"./rc-notification-d13dc43b.js";import"./rc-progress-4f1a7096.js";import"./rc-tooltip-08fa4217.js";import"./use-sync-external-store-5d1b6592.js";import"./idb-cdd1a92f.js";import"./path-to-regexp-ef8d5544.js";import"./regex-deefadac.js";import"./xlsx-0fb7ed70.js";import"./uuid-4a60fe23.js";const A={partner:void 0,product:void 0},R=g.createContext({assetPartnerPermissionWrite:!1,assetPartnerPermissionExport:!1,formFilter:void 0,filter:{...A},setFilter:()=>{},tableData:{records:[],totalRecord:0},setTableData:()=>{},tablePagination:{current:x,limit:w},setTablePagination:()=>{},getListPartnerStatus:{isFetching:!1},setGetListPartnerStatus:()=>{},modalAddPartner:void 0,showModalAddPartner:()=>{},hideModalAddPartner:()=>{},modalUpdatePartner:void 0,showModalUpdatePartner:()=>{},hideModalUpdatePartner:()=>{},modalImportPartner:void 0,showModalImportPartner:()=>{},hideModalImportPartner:()=>{}}),j=({children:e})=>{const{getPermissionByModuleCode:t}=ne(),[o,n]=g.useState({isFetching:!1}),[i,c]=g.useState({...A}),[l,d]=g.useState({records:[],totalRecord:0}),[s,m]=g.useState({current:x,limit:w}),[u]=F.useForm(),[p,h,P]=W(),[f,v,S]=W(),[N,_,$]=W(),C=t(re),I=(C==null?void 0:C[ie])??!1,E=(C==null?void 0:C[ce])??!1,y={assetPartnerPermissionWrite:I,assetPartnerPermissionExport:E,formFilter:u,filter:i,setFilter:c,tableData:l,setTableData:d,tablePagination:s,setTablePagination:m,getListPartnerStatus:o,setGetListPartnerStatus:n,modalAddPartner:p,showModalAddPartner:h,hideModalAddPartner:P,modalUpdatePartner:f,showModalUpdatePartner:v,hideModalUpdatePartner:S,modalImportPartner:N,showModalImportPartner:_,hideModalImportPartner:$};return a(R.Provider,{value:y,children:e})};j.propTypes={children:he.node};j.defaultProps={children:a("div",{})};const ye=j,Le=async(e,t)=>{try{const{name:o,product:n}=t,{code:i,codeLanguage:c,data:l}=await Pe(e,{companyName:o||void 0,productOrService:n||void 0});return{code:i,codeLanguage:c,data:l}}catch({code:o,codeLanguage:n}){return{code:o,codeLanguage:n,data:void 0}}},we=()=>{const{idBuilding:e}=D(),{filter:t,assetPartnerPermissionExport:o,assetPartnerPermissionWrite:n,tableData:i,showModalAddPartner:c,showModalImportPartner:l}=g.useContext(R),[d,s]=g.useState({isFetching:!1,code:void 0,codeLanguage:void 0});V(d.code,d.codeLanguage,{message:r.success,description:r.export_data_success});const m=()=>{l()},u=async()=>{s({isFetching:!0,code:void 0,codeLanguage:void 0});const h=await Le(e,t);h.data&&ge(h.data,document,"thong-tin-doi-tac.xlsx"),s({isFetching:!1,code:h.code,codeLanguage:h.codeLanguage})},p=()=>{c()};return{assetPartnerPermissionExport:o,assetPartnerPermissionWrite:n,loadingExport:d.isFetching,totalRecord:i.totalRecord,handleImportListPartner:m,handleExportListPartner:u,handleAddPartner:p}};function _e(){const{assetPartnerPermissionExport:e,assetPartnerPermissionWrite:t,loadingExport:o,totalRecord:n,handleImportListPartner:i,handleExportListPartner:c,handleAddPartner:l}=we(),d=Z(),s=[e?a(q,{css:m=>({marginRight:m.margin.xs}),loading:o,type:"primary",ghost:!0,icon:a(k,{name:"icon-download-outlined"}),onClick:()=>{d({action:se,label:O}),c()},children:r.export},"export"):null,t?a(q,{css:m=>({marginRight:m.margin.xs}),type:"primary",icon:a(k,{name:"icon-upload-outlined"}),onClick:()=>{d({action:de,label:O}),i()},children:r.import},"import"):null,t?a(q,{type:"primary",icon:a(k,{name:"icon-plus-circle-outlined"}),onClick:()=>{d({action:le,label:O}),l()},children:r.add},"add"):null];return a(U.ActionBox,{actions:s,total:n})}const Ce=e=>{var t,o,n;return{id:e==null?void 0:e.id,key:e==null?void 0:e.id,name:(e==null?void 0:e.companyName)??"",createdAt:e==null?void 0:e.createdAt,address:(e==null?void 0:e.address)??"",contact:{name:((t=e==null?void 0:e.contactPoint)==null?void 0:t.name)??"",email:((o=e==null?void 0:e.contactPoint)==null?void 0:o.email)??"",phone:((n=e==null?void 0:e.contactPoint)==null?void 0:n.phone)??""},email:(e==null?void 0:e.email)??"",phone:(e==null?void 0:e.phone)??"",product:(e==null?void 0:e.productOrService)??"",note:(e==null?void 0:e.note)??""}},M=async({idBuilding:e,filter:t,page:o,limit:n})=>{try{const{partner:i,productOrService:c}=t,{code:l,codeLanguage:d,data:s,totalRecord:m}=await ve({filter:{companyName:i||void 0,productOrService:c||void 0},idBuilding:e,limit:n,page:o});return{code:l,codeLanguage:d,data:s.map(u=>Ce(u)),totalRecord:m}}catch({code:i,codeLanguage:c}){return{code:i,codeLanguage:c,data:[],totalRecord:0}}},Ie=()=>{const{idBuilding:e}=D(),{setGetListPartnerStatus:t,setFilter:o,formFilter:n,setTableData:i,setTablePagination:c}=g.useContext(R);return[async d=>{t({isFetching:!0}),o(d),c({current:x,limit:w});const s=await M({filter:{...d},idBuilding:e,limit:w,page:x});i({records:s.data,totalRecord:s.totalRecord}),t({isFetching:!1})},n]},Ee=()=>{const[e,t]=Ie(),o=g.useMemo(()=>[{label:r.partner,key:"partner",component:a(b,{placeholder:r.partner}),visible:!0},{label:r.product_or_service,key:"productOrService",component:a(b,{placeholder:r.product_or_service}),visible:!0}],[]);return a(U.FilterBox,{defaultFilter:A,filters:o,formData:t,onSearch:e})},Te=async(e,t)=>{try{const{code:o,codeLanguage:n}=await fe(e,t);return{code:o,codeLanguage:n}}catch({code:o,codeLanguage:n}){return{code:o,codeLanguage:n}}},Ae=()=>{const{idBuilding:e}=D(),{layoutScrollRef:t}=g.useContext(ee),{assetPartnerPermissionWrite:o,getListPartnerStatus:n,tablePagination:i,setTablePagination:c,setGetListPartnerStatus:l,filter:d,setTableData:s,showModalUpdatePartner:m,tableData:u}=g.useContext(R),p=Q(),[h,P]=g.useState({isFetching:!1,code:void 0,codeLanguage:void 0});V(h.code,h.codeLanguage,{message:r.success,description:r.delete_data_success});const f=async(I,E)=>{let{limit:y,current:T}=i;T!==I?T=I:y!==E&&(T=x,y=E),c({limit:y,current:T}),l({isFetching:!0});const H=await M({filter:{...d},idBuilding:e,limit:y,page:T});s({records:H.data,totalRecord:H.totalRecord}),l({isFetching:!1})},v=I=>{m({...I})},S=async I=>{ae({loading:h.isFetching,onCancel:()=>{P({isFetching:!1,code:void 0,codeLanguage:void 0})},isAll:!1,onOk:async()=>{P({isFetching:!0,code:void 0,codeLanguage:void 0});const E=await Te(e,I.id),y=z.includes(E.code);if(y){l({isFetching:!0});const T=await M({filter:{...d},idBuilding:e,limit:i.limit,page:i.current});s({records:T.data,totalRecord:T.totalRecord}),l({isFetching:!1})}return P({isFetching:!1,code:E.code,codeLanguage:E.codeLanguage}),y?Promise.resolve():Promise.reject()},questionText:r.do_you_want_to_delete_partner,totalItem:1})},N=u.records,_={current:i.current,pageSize:i.limit,total:u.totalRecord,showQuickJumper:!0,showSizeChanger:!0,onChange:f},$={offsetScroll:p.offsetScrollX,getContainer:()=>t.current},C={scrollToFirstRowOnChange:!0};return{loading:n.isFetching,assetPartnerPermissionWrite:o,handleUpdatePartner:v,handleDeletePartner:S,dataSource:N,pagination:_,scroll:C,sticky:$}};function Re(){const{loading:e,assetPartnerPermissionWrite:t,handleUpdatePartner:o,handleDeletePartner:n,dataSource:i,pagination:c,scroll:l,sticky:d}=Ae(),s=Z(),m=[{title:r.partner,key:"name",dataIndex:"name",fixed:"left",width:150},{title:r.product_or_service,key:"product",dataIndex:"product",width:150},{title:r.phone,key:"phone",dataIndex:"phone",width:150},{title:r.email,key:"email",dataIndex:"email",width:150},{title:r.contact,key:"contact",width:150,render:(u,p)=>B("div",{children:[a("div",{children:p.contact.name}),a("div",{children:p.contact.email}),a("div",{children:p.contact.phone})]})},{title:r.note,key:"note",dataIndex:"note",width:150},{title:r.actions,key:"action",fixed:"right",align:"center",width:100,render:(u,p)=>a(X,{children:t&&!p.inactiveAt?B(X,{children:[a(k,{css:h=>({fontSize:h.iconSize}),onClick:()=>{s({action:me,label:O}),o(p)},name:"icon-edit-outlined",title:r.update}),a(k,{css:h=>({fontSize:h.iconSize,marginLeft:h.margin.xs}),onClick:()=>{s({action:ue,label:O}),n(p)},name:"icon-minus-circle-outlined",title:r.delete})]}):null})}];return a(U.Table,{columns:m,dataSource:i,loading:e,pagination:c,scroll:{...l,x:m.reduce((u,p)=>u+p.width,0)},sticky:d})}const oe=()=>{const e=Q();return B(xe,{gutter:[e.margin.sm,0],children:[a(L,{span:"12",children:a(F.Item,{name:"name",label:r.partner,rules:[{required:!0}],children:a(b,{placeholder:r.partner})})}),a(L,{span:"12",children:a(F.Item,{name:"product",label:r.product_or_service,rules:[{required:!0}],children:a(b,{placeholder:r.product_or_service})})}),a(L,{span:"12",children:a(F.Item,{name:"phone",label:r.phone,rules:[{validator:async(t,o)=>{if(o&&o.phoneNumber&&!K(o.phoneNumber))throw new Error(r.status.phone_invalid)}}],children:a(b.PhoneInput,{placeholder:r.phone})})}),a(L,{span:"12",children:a(F.Item,{name:"email",label:r.email,rules:[{type:"email"}],children:a(b,{placeholder:r.email})})}),a(L,{span:"12",children:a(F.Item,{name:"contactName",label:r.contact_name,children:a(b,{placeholder:r.contact_name})})}),a(L,{span:"12",children:a(F.Item,{name:"contactEmail",label:r.contact_email,rules:[{type:"email"}],children:a(b,{placeholder:r.contact_email})})}),a(L,{span:"12",children:a(F.Item,{name:"contactPhone",label:r.contact_phone,rules:[{validator:async(t,o)=>{if(o&&o.phoneNumber&&!K(o.phoneNumber))throw new Error(r.status.phone_invalid)}}],children:a(b.PhoneInput,{placeholder:r.contact_phone})})}),a(L,{span:"12"}),a(L,{span:"24",children:a(F.Item,{name:"note",label:r.note,children:a(b.TextArea,{rows:"3",placeholder:r.note})})})]})},Ne=async(e,t)=>{try{const{name:o,product:n,phone:i,email:c,note:l,contactName:d,contactEmail:s,contactPhone:m}=t,u={companyName:o||void 0,productOrService:n||void 0,phone:i!=null&&i.phoneNumber?`${i.countryCode}${i.phoneNumber}`:void 0,email:c||void 0,note:l||void 0,contactPoint:{email:s||void 0,name:d||void 0,phone:m!=null&&m.phoneNumber?`${m.countryCode}${m.phoneNumber}`:void 0}},{code:p,codeLanguage:h}=await Fe(e,u);return{code:p,codeLanguage:h}}catch({code:o,codeLanguage:n}){return{code:o,codeLanguage:n}}},Ue=()=>{const{idBuilding:e}=D(),[t]=F.useForm(),{hideModalAddPartner:o,setGetListPartnerStatus:n,setTableData:i,setFilter:c,setTablePagination:l}=g.useContext(R),[d,s]=g.useState({isFetching:!1,code:void 0,codeLanguage:void 0});V(d.code,d.codeLanguage,{message:r.success,description:r.add_data_success});const m=async()=>{if(await t.validateFields()){s({isFetching:!0,code:void 0,codeLanguage:void 0});const{code:P,codeLanguage:f}=await Ne(e,t.getFieldsValue());if(z.includes(P)){n({isFetching:!0}),c({...A}),l({limit:w,current:x});const{data:v,totalRecord:S}=await M({filter:{...A},idBuilding:e,limit:w,page:x});i({records:v,totalRecord:S}),n({isFetching:!1})}s({isFetching:!1,code:P,codeLanguage:f}),o()}},u=()=>{o()},p={name:void 0,product:void 0,phone:{countryCode:G,phoneCode:G,phoneNumber:void 0},email:void 0,note:void 0,contactName:void 0,contactEmail:void 0,contactPhone:{countryCode:G,phoneCode:G,phoneNumber:void 0}};return{loading:d.isFetching,formAddPartner:t,initialValues:p,handleAddPartner:m,handleCancelAddPartner:u}},Me=()=>{const{loading:e,formAddPartner:t,initialValues:o,handleAddPartner:n,handleCancelAddPartner:i}=Ue();return a(Y,{title:r.add_partner,open:!0,okText:r.add,cancelText:r.cancel,onOk:n,onCancel:i,okButtonProps:{disabled:e,loading:e},width:"50%",children:a(F,{layout:"vertical",initialValues:o,form:t,name:"formAddPartner",children:a(oe,{})})})},De=async(e,t,o)=>{try{const{name:n,product:i,phone:c,email:l,note:d,contactName:s,contactEmail:m,contactPhone:u}=o,p={companyName:n||void 0,productOrService:i||void 0,phone:c!=null&&c.phoneNumber?`${c.countryCode}${c.phoneNumber}`:void 0,email:l||void 0,note:d||void 0,contactPoint:{email:m||void 0,name:s||void 0,phone:u!=null&&u.phoneNumber?`${u.countryCode}${u.phoneNumber}`:void 0}},{code:h,codeLanguage:P}=await Se(e,t,p);return{code:h,codeLanguage:P}}catch({code:n,codeLanguage:i}){return{code:n,codeLanguage:i}}},ke=()=>{const{idBuilding:e}=D(),[t]=F.useForm(),{hideModalUpdatePartner:o,modalUpdatePartner:n,setGetListPartnerStatus:i,setTableData:c,filter:l,tablePagination:d}=g.useContext(R),{data:s}=n,[m,u]=g.useState({isFetching:!1,code:void 0,codeLanguage:void 0});V(m.code,m.codeLanguage,{message:r.success,description:r.update_data_success});const p=async()=>{if(await t.validateFields()){u({isFetching:!0,code:void 0,codeLanguage:void 0});const{code:v,codeLanguage:S}=await De(e,s.id,t.getFieldsValue());if(z.includes(v)){i({isFetching:!0});const{data:N,totalRecord:_}=await M({filter:{...l},idBuilding:e,limit:d.limit,page:d.current});c({records:N,totalRecord:_}),i({isFetching:!1})}u({isFetching:!1,code:v,codeLanguage:S}),o()}},h=()=>{o()},P=g.useMemo(()=>{var S;const f=J(s.phone),v=J((S=s==null?void 0:s.contact)==null?void 0:S.phone);return{name:s.name,product:s.product,phone:{countryCode:f,phoneCode:f,phoneNumber:s.phone.replace(f,"")},email:s.email,note:s.note,contactName:s.contact.name,contactEmail:s.contact.email,contactPhone:{countryCode:v,phoneCode:v,phoneNumber:s.contact.phone.replace(v,"")}}},[s]);return{loading:m.isFetching,initialValues:P,formUpdatePartner:t,handleUpdatePartner:p,handleCancelUpdatePartner:h}},Oe=()=>{const{loading:e,initialValues:t,formUpdatePartner:o,handleUpdatePartner:n,handleCancelUpdatePartner:i}=ke();return a(Y,{title:r.update_partner,open:!0,okText:r.update,cancelText:r.cancel,onOk:n,onCancel:i,okButtonProps:{disabled:e,loading:e},width:"50%",children:a(F,{initialValues:t,layout:"vertical",form:o,name:"formUpdatePartner",children:a(oe,{})})})},Be=async(e,t)=>{var o;try{const{code:n,codeLanguage:i,data:c}=await be(e,t);return{code:n,codeLanguage:i,totalSuccess:(c==null?void 0:c.success)??0,totalFailed:((c==null?void 0:c.errors)??[]).length,errors:((o=c==null?void 0:c.errors)==null?void 0:o.map(l=>({index:l.index,message:l.message,code:l.code})))??[],data:c}}catch({code:n,codeLanguage:i}){return{code:n,codeLanguage:i,totalSuccess:0,totalFailed:0,errors:[],data:void 0}}},{rules:Ve}=te,{phoneImportRule:Ge}=Ve,$e=[{name:"#",rules:{type:"number",required:!0}},{name:"Nhà cung cấp",rules:{type:"string",required:!0,max:50}},{name:"Sản phẩm/Dịch vụ",rules:{type:"string",required:!0,max:255}},{name:"Số điện thoại",rules:Ge},{name:"Email",rules:{type:"string",max:255}},{name:"Ghi chú",rules:{type:"string",max:3e3}},{name:"Tên đầu mối",rules:{type:"string",max:50}},{name:"Email đầu mối",rules:{type:"string",max:255}},{name:"Số điện thoại đầu mối",rules:{type:"string",max:255}}],We=()=>{const{idBuilding:e}=D(),{hideModalImportPartner:t,setGetListPartnerStatus:o,setFilter:n,setTableData:i,setTablePagination:c,formFilter:l}=g.useContext(R),[d,s]=g.useState({isFetching:!1,code:void 0,codeLanguage:void 0,totalSuccess:0,totalFailed:0,errors:[],data:[]});return V(d.code,d.codeLanguage,{message:r.success,description:r.import_data_success}),[$e,d,async p=>{s({isFetching:!0,code:void 0,codeLanguage:void 0,totalSuccess:0,totalFailed:0,errors:[],data:[]});const{code:h,codeLanguage:P,totalSuccess:f,totalFailed:v,errors:S,data:N}=await Be(e,p);if(f!==0){o({isFetching:!0}),n({...A}),l.resetFields(),c({current:x,limit:w});const _=await M({filter:{...A},idBuilding:e,limit:w,page:x});i({records:_.data,totalRecord:_.totalRecord}),o({isFetching:!1})}s({isFetching:!1,code:h,codeLanguage:P,totalSuccess:f,totalFailed:v,errors:S,data:N})},()=>t()]},qe=()=>{const[e,t,o,n]=We();return a(te,{headers:e,onClose:n,onOk:o,visible:!0,fileNameTemplate:"mau-thong-tin-doi-tac",templateUrl:pe.document.mau_thong_tin_doi_tac,code:t.code,codeLanguage:t.codeLanguage,loading:t.isFetching,numberSuccess:(t==null?void 0:t.totalSuccess)??0,numberFail:(t==null?void 0:t.totalFailed)??0,problemResponseServerDataSource:(t==null?void 0:t.errors)??[],errorFile:(t==null?void 0:t.data)??null})},ze=()=>{const{idBuilding:e}=D(),{setTitlePage:t,setVisibleFilterBox:o,setVisibleSearchBox:n}=g.useContext(ee),{setGetListPartnerStatus:i,setTableData:c,modalAddPartner:l,modalUpdatePartner:d,modalImportPartner:s}=g.useContext(R);return g.useEffect(()=>(t(r.partner),n(!0),(async()=>{i({isFetching:!0});const m=await M({filter:{...A},idBuilding:e,limit:w,page:x});c({records:m.data,totalRecord:m.totalRecord}),i({isFetching:!1})})(),()=>{t(""),n(!1),o(!1)}),[]),[l.isShow,d.isShow,s.isShow]},je=()=>{const[e,t,o]=ze();return B(U.Wrapper,{children:[a(Ee,{}),B(U.Container,{children:[a(U.Header,{children:a(_e,{})}),a(U.Content,{children:a(Re,{})})]}),e?a(Me,{}):null,t?a(Oe,{}):null,o?a(qe,{}):null]})},Ao=()=>a(ye,{children:a(je,{})});export{Ao as default};
