import{j as n,a as v,u as be,F as De,b as pe}from"./@emotion-63839449.js";import{o as me,P as G,l as ie,D as Ue,a as Ie,p as k,q as N}from"./index-b17d22e5.js";import{a9 as V,s as Q,b0 as Ve,K as ue,aR as Be,at as $e,bv as qe,eh as Ge,l as o,S as ee,cP as ce,cf as H,a3 as Re,I as F,dq as Qe,a5 as se,dP as ze,bG as We,ed as je,a8 as he,ee as Ke,ef as Je,a as xe,a1 as Xe,bw as Ee,bH as Ze,bI as He,cd as et}from"./index-c2ded735.js";import{r as A}from"./react-4fd50329.js";import"./react-redux-896b353b.js";import{u as tt}from"./useTableCheckbox-753d19b2.js";import{h as y}from"./moment-a468e1f9.js";import"./lodash-88fe09e6.js";import"./file-saver-40cf32a9.js";import"./@firebase-43527ee1.js";import{P as te}from"./prop-types-1172f4d5.js";import{F as K,u as j}from"./index-687ba9e6.js";import{D as J,A as fe,a as Ce,b as Pe,c as at,C as ot,d as Fe,e as Me,f as M,g as _e,h as nt,i as X}from"./constants-d0d23bbb.js";import{u as it,a as rt}from"./react-router-a4308f7b.js";import{d as st}from"./downloadFileFromUrl-79614833.js";import{g as Oe}from"./getPageByTotalAndLimit-7f60b558.js";import{g as dt,d as ct,e as lt,u as ut,a as mt,b as gt,c as pt,f as ht,h as ft}from"./cardWareHouse-505c9ae3.js";import{u as Ct}from"./useQuery-d54d310a.js";import{B as re,D as _t,g as Ye,w as Se,Q as ye,S as wt,b as x,R as Tt,q as At}from"./antd-f9eae174.js";import{I as de,S as Z}from"./index-43183512.js";import{c as we}from"./compareObject-7b349d22.js";import{I as Lt}from"./index-9ef224b9.js";import{I as St}from"./index-0335a746.js";import"./hoist-non-react-statics-23d96a9a.js";import"./react-is-e8e5dbb3.js";import"./@babel-b64fd0f9.js";import"./stylis-79144faa.js";import"./react-router-dom-2a8f5f6d.js";import"./history-a1882333.js";import"./resolve-pathname-e210f2ac.js";import"./tiny-invariant-dd7d57d2.js";import"./account-86ffff50.js";import"./index-881eef42.js";import"./libphonenumber-js-0d5a9c92.js";import"./react-infinite-scroll-component-e33646cb.js";import"./redux-10bbab4c.js";import"./react-dom-40621ea0.js";import"./classnames-4ba1ba1a.js";import"./scheduler-765c72db.js";import"./@redux-saga-8bafe09b.js";import"./redux-logger-e1c9ca90.js";import"./dompurify-8e338605.js";import"./query-string-f5cca1e7.js";import"./decode-uri-component-4138e85d.js";import"./split-on-first-4f1167c8.js";import"./filter-obj-2ed190f4.js";import"./oidc-client-7da0eaf7.js";import"./firebase-878887a2.js";import"./rc-pagination-c1e6a0ac.js";import"./rc-picker-2e3d5fe5.js";import"./rc-util-0bc219f3.js";import"./rc-trigger-570b13ec.js";import"./rc-motion-ae889c42.js";import"./rc-align-e5d7b12e.js";import"./dom-align-ecb06dd6.js";import"./resize-observer-polyfill-0f9f8adb.js";import"./rc-resize-observer-b9ad4e29.js";import"./@ant-design-cba9d434.js";import"./@ctrl-fb5a5473.js";import"./rc-tabs-dfd19a56.js";import"./rc-dropdown-5378dd0a.js";import"./rc-menu-b15ebfe9.js";import"./rc-overflow-6be96612.js";import"./rc-select-564caf01.js";import"./rc-virtual-list-8a7b82a6.js";import"./rc-collapse-11b7d3c4.js";import"./shallowequal-4542d6f7.js";import"./rc-drawer-317f0b4d.js";import"./@rc-component-5a112e55.js";import"./rc-field-form-ef5549aa.js";import"./async-validator-dee29e8b.js";import"./scroll-into-view-if-needed-6b992d05.js";import"./compute-scroll-into-view-183f845a.js";import"./rc-image-e0357917.js";import"./rc-dialog-b1d1f07b.js";import"./rc-input-number-8bc068f7.js";import"./rc-rate-c64cf0d5.js";import"./rc-steps-2d1924c7.js";import"./rc-switch-b4e96de7.js";import"./rc-table-191ecc42.js";import"./rc-checkbox-018e8052.js";import"./rc-tree-67773537.js";import"./rc-tree-select-cb7eccc3.js";import"./copy-to-clipboard-64585c8c.js";import"./toggle-selection-93f4ad84.js";import"./rc-textarea-d01adcbb.js";import"./rc-input-02c2c2ba.js";import"./rc-upload-3ab0f08a.js";import"./rc-notification-d13dc43b.js";import"./rc-progress-4f1a7096.js";import"./rc-tooltip-08fa4217.js";import"./use-sync-external-store-5d1b6592.js";import"./idb-cdd1a92f.js";import"./path-to-regexp-ef8d5544.js";import"./exportExcel-837be6ed.js";import"./xlsx-0fb7ed70.js";import"./regex-deefadac.js";import"./uuid-4a60fe23.js";const O=A.createContext({cardWarehousePermissionWrite:!1,cardWarehousePermissionExport:!1,idBuilding:0,formFilter:void 0,getListCardStatus:{isFetching:!1},setGetListCardStatus:()=>{},filter:{...J},setFilter:()=>{},tableData:{records:[],totalRecord:0},setTableData:()=>{},tableSelection:{isSelectAllItem:!1,isShowQuestionSelectAll:!1,selectedRowsCache:[],selectedRowKeysCache:[],selectedRowKeys:[],byId:{}},resetDataTableSelection:()=>{},onSelectRow:()=>{},onSelectAllRowOfPage:()=>{},selectAllRowComponent:()=>{},tablePagination:{current:V,limit:Q},setTablePagination:()=>{},listContractTemplate:[],setListContractTemplate:()=>{},modalAddCard:void 0,showModalAddCard:()=>{},hideModalAddCard:()=>{},modalUpdateCard:void 0,showModalUpdateCard:()=>{},hideModalUpdateCard:()=>{},modalImportCard:void 0,showModalImportCard:()=>{},hideModalImportCard:()=>{},modalDetailCard:void 0,showModalDetailCard:()=>{},hideModalDetailCard:()=>{}}),Te=({children:e})=>{const{getPermissionByModuleCode:t}=Ve(),{idBuilding:a}=it(),[r,l]=A.useState({isFetching:!1}),[s,h]=A.useState({...J}),[i,m]=A.useState({records:[],totalRecord:0}),[g,u,w,p,c]=tt({dataRows:i.records,rowKey:"id",totalRows:i.totalRecord}),[C,f]=A.useState({current:V,limit:Q}),[d,_]=A.useState([]),[L]=K.useForm(),[D,T,S]=ue(),[R,I,E]=ue(),[U,z,ne]=ue(),[le,b,Y]=ue(),B=t(Be),P=(B==null?void 0:B[$e])??!1,$=(B==null?void 0:B[qe])??!1,q={cardWarehousePermissionWrite:P,cardWarehousePermissionExport:$,idBuilding:a,formFilter:L,getListCardStatus:r,setGetListCardStatus:l,filter:s,setFilter:h,tableData:i,setTableData:m,tableSelection:g,resetDataTableSelection:u,onSelectRow:w,onSelectAllRowOfPage:p,selectAllRowComponent:c,tablePagination:C,setTablePagination:f,listContractTemplate:d,setListContractTemplate:_,modalAddCard:D,showModalAddCard:T,hideModalAddCard:S,modalUpdateCard:R,showModalUpdateCard:I,hideModalUpdateCard:E,modalImportCard:U,showModalImportCard:z,hideModalImportCard:ne,modalDetailCard:le,showModalDetailCard:b,hideModalDetailCard:Y};return n(O.Provider,{value:q,children:e})};Te.propTypes={children:te.node};Te.defaultProps={children:n("div",{})};const yt=Te,vt=e=>{var t,a,r;return{id:e.id,createdAt:e==null?void 0:e.createdAt,updatedAt:e==null?void 0:e.updatedAt,inactiveAt:e==null?void 0:e.inactiveAt,deletedAt:e==null?void 0:e.deletedAt,registrationPlate:((t=e==null?void 0:e.contract)==null?void 0:t.registrationPlate)??"",contractTemplateId:(a=e==null?void 0:e.contract)==null?void 0:a.contractTemplateId,contractId:(r=e==null?void 0:e.contract)==null?void 0:r.id,type:e==null?void 0:e.type}},bt=e=>{var t,a,r,l,s,h,i,m,g,u,w;return{id:e.id,key:e.id,code:(e==null?void 0:e.code)??"",createdAt:e==null?void 0:e.createdAt,updatedAt:e==null?void 0:e.updatedAt,inactiveAt:e==null?void 0:e.inactiveAt,deletedAt:e==null?void 0:e.deletedAt,creator:{id:(t=e==null?void 0:e.creator)==null?void 0:t.id,name:((a=e==null?void 0:e.creator)==null?void 0:a.fullName)??""},owner:{id:(r=e==null?void 0:e.owner)==null?void 0:r.id,name:((l=e==null?void 0:e.owner)==null?void 0:l.fullName)??""},apartment:{id:(s=e==null?void 0:e.unit)==null?void 0:s.id,name:((h=e==null?void 0:e.unit)==null?void 0:h.name)??"",buildStatus:((i=e==null?void 0:e.unit)==null?void 0:i.buildStatus)??""},status:(e==null?void 0:e.status)??"",type:(e==null?void 0:e.type)??"",note:(e==null?void 0:e.note)??"",target:((m=e==null?void 0:e.slots)==null?void 0:m.map(p=>vt(p)))??[],registrationPlate:((w=(u=(g=e==null?void 0:e.slots)==null?void 0:g.find(p=>p.type===Ge))==null?void 0:u.contract)==null?void 0:w.registrationPlate)??""}},ke=async({idBuilding:e,filter:t,limit:a,page:r})=>{try{const{apartment:l,cardCode:s,cardType:h,cardOwner:i,status:m,createdAt:g}=t,u=g==null?void 0:g[0],w=g==null?void 0:g[1],p=await dt({idBuilding:e,filter:{unit:l||void 0,owner:i||void 0,type:h?[h]:void 0,code:s||void 0,status:m||void 0,from:u?y(u).toDate():void 0,to:w?y(w).toDate():void 0},limit:a,page:r});return{code:p.code,codeLanguage:p.codeLanguage,data:p.data.map(c=>bt(c)),totalRecord:p.totalRecord}}catch(l){return{code:l.code,codeLanguage:l.codeLanguage,data:[],totalRecord:0}}},ae=()=>{const{idBuilding:e,setTableData:t,setGetListCardStatus:a}=A.useContext(O);return{changeDataTable:async({filter:l,limit:s,page:h})=>{a({isFetching:!0});const i=await ke({idBuilding:e,filter:{...l},limit:s,page:h});t({records:i.data,totalRecord:i.totalRecord}),a({isFetching:!1})}}},oe=()=>{const{getAllQuery:e,setQuery:t}=Ct(),{setTablePagination:a,setFilter:r,formFilter:l}=A.useContext(O);return{getQueryParamsCard:()=>{var L,D,T,S,R;const{limit:i,page:m,cardCode:g,status:u,cardType:w,apartment:p,cardOwner:c,createdAtFrom:C,createdAtTo:f}=e(),d={pagination:{limit:i&&+i||Q,page:m&&+m||V},filter:{cardCode:g||"",cardType:w||"",apartment:p||"",cardOwner:c||"",createdAt:C&&f&&y(C,"DD/MM/YYYY",!0).isValid()&&y(f,"DD/MM/YYYY",!0).isValid()?[y(C,"DD/MM/YYYY",!0),y(f,"DD/MM/YYYY",!0)]:[],status:u||""}};a({limit:d.pagination.limit,current:d.pagination.page}),r({...d.filter}),l.setFieldsValue({...d.filter});const _={limit:d.pagination.limit,page:d.pagination.page,cardCode:(L=d.filter)==null?void 0:L.cardCode,cardType:(D=d.filter)==null?void 0:D.cardType,apartment:(T=d.filter)==null?void 0:T.apartment,cardOwner:(S=d.filter)==null?void 0:S.cardOwner,status:(R=d.filter)==null?void 0:R.status,createdAtFrom:"",createdAtTo:""};return d.filter.createdAt&&Array.isArray(d.filter.createdAt)&&d.filter.createdAt.length&&(_.createdAtFrom=y(d.filter.createdAt[0]).format("DD/MM/YYYY"),_.createdAtTo=y(d.filter.createdAt[1]).format("DD/MM/YYYY")),t(_),d},setQueryParamsCard:({limit:i=Q,page:m=V,filter:g=J})=>{const{cardCode:u="",cardType:w="",apartment:p="",createdAt:c=null,cardOwner:C="",status:f=""}=g,d={limit:i,page:m,cardCode:u,cardType:w,apartment:p,cardOwner:C,status:f,createdAtFrom:"",createdAtTo:""};c&&Array.isArray(c)&&c.length&&(d.createdAtFrom=y(c[0]).format("DD/MM/YYYY"),d.createdAtTo=y(c[1]).format("DD/MM/YYYY")),t(d)}}},Ne=async({idBuilding:e,idCards:t,filter:a,isAll:r})=>{try{let l={};if(a&&r){const{apartment:h,cardCode:i,cardType:m,cardOwner:g,status:u,createdAt:w}=a,p=w==null?void 0:w[0],c=w==null?void 0:w[1];l={unit:h||void 0,owner:g||void 0,type:m||void 0,code:i||void 0,status:u||void 0,from:p?y(p).toDate():void 0,to:c?y(c).toDate():void 0}}const s=await ct({idBuilding:e,ids:r?void 0:t,filter:r?l:void 0,isCheckAll:r});return{code:s.code,codeLanguage:s.codeLanguage}}catch(l){return{code:l.code,codeLanguage:l.codeLanguage}}},Dt=async(e,t)=>{try{const{apartment:a,cardCode:r,cardType:l,cardOwner:s,status:h,createdAt:i}=t,m=i==null?void 0:i[0],g=i==null?void 0:i[1],u=await lt(e,{unit:a||void 0,owner:s||void 0,type:l?[l]:void 0,code:r||void 0,status:h||void 0,from:m?y(m).toDate():void 0,to:g?y(g).toDate():void 0});return{code:u.code,codeLanguage:u.codeLanguage,data:u.data}}catch(a){return{code:a.code,codeLanguage:a.codeLanguage,data:void 0}}},It=async({idBuilding:e,idCards:t,status:a,filter:r,isAll:l})=>{try{const{apartment:s,cardCode:h,cardType:i,cardOwner:m,status:g,createdAt:u}=r,w=u==null?void 0:u[0],p=u==null?void 0:u[1],c=await ut({idBuilding:e,idCards:l?[]:t,status:a,filter:l?{unit:s||void 0,owner:m||void 0,type:i||void 0,code:h||void 0,status:g||void 0,from:w?y(w).toDate():void 0,to:p?y(p).toDate():void 0}:void 0,isAll:l});return{code:c.code,codeLanguage:c.codeLanguage}}catch(s){return{code:s.code,codeLanguage:s.codeLanguage}}},Rt=()=>{const{idBuilding:e,filter:t,tablePagination:a,showModalAddCard:r,cardWarehousePermissionWrite:l,cardWarehousePermissionExport:s,selectAllRowComponent:h,tableSelection:i,resetDataTableSelection:m,tableData:g,showModalImportCard:u}=A.useContext(O),{changeDataTable:w}=ae(),{setQueryParamsCard:p}=oe(),{isSelectAllItem:c,selectedRowKeysCache:C}=i,[f,d]=A.useState({isFetching:!1,code:void 0,codeLanguage:void 0}),[_,L]=A.useState({isFetching:!1,code:void 0,codeLanguage:void 0}),[D,T]=A.useState({isFetching:!1,code:void 0,codeLanguage:void 0});j(f.code,f.codeLanguage,{message:o.success,description:o.export_data_success}),j(_.code,_.codeLanguage,{message:o.success,description:o.update_status_data_success}),j(D.code,D.codeLanguage,{message:o.success,description:o.delete_data_success});const S=async()=>{const b=Oe(g.totalRecord-C.length,a.limit,a.current),Y=a.current===b;Y&&await w({limit:a.limit,page:a.current,filter:{...t}}),Y||p({limit:a.limit,page:b,filter:{...t}})},R=async b=>{L({isFetching:!0,code:void 0,codeLanguage:void 0});const Y=await It({filter:t,idBuilding:e,idCards:C,isAll:c,status:b});return L({isFetching:!1,code:Y.code,codeLanguage:Y.codeLanguage}),ee.includes(Y.code)?(m(),S(),Promise.resolve()):Promise.reject()},I=async()=>{T({isFetching:!0,code:void 0,codeLanguage:void 0});const b=await Ne({filter:t,idBuilding:e,idCards:C,isAll:c});return T({isFetching:!1,code:b.code,codeLanguage:b.codeLanguage}),ee.includes(b.code)?(m(),S(),Promise.resolve()):Promise.reject()},E=async({key:b})=>{b===fe?me({onCancel:()=>{L({isFetching:!1,code:void 0,codeLanguage:void 0})},isAll:c,onOk:()=>R(ce),questionText:o.do_you_want_to_active_card,totalItem:C.length}):b===Ce?me({onCancel:()=>{L({isFetching:!1,code:void 0,codeLanguage:void 0})},isAll:c,onOk:()=>R(H),questionText:o.do_you_want_to_inactive_card,totalItem:C.length}):b===Pe&&me({onCancel:()=>{T({isFetching:!1,code:void 0,codeLanguage:void 0})},isAll:c,onOk:()=>I(),questionText:o.do_you_want_to_delete_card,totalItem:C.length})},U=()=>{u()},z=async()=>{d({isFetching:!0,code:void 0,codeLanguage:void 0});const b=await Dt(e,t);b.data&&st(b.data,document,"thong-tin-the.xlsx"),d({isFetching:!1,code:b.code,codeLanguage:b.codeLanguage})},ne=()=>{r()};return[!c&&C.length===0,l,s,f.isFetching,h,E,U,z,ne,t]},{Item:xt}=Ye;function Et(){const[e,t,a,r,l,s,h,i,m,g]=Rt(),u=Re(),w=()=>n(Ye,{onClick:({key:c})=>{c===fe?u({action:je,label:he}):c===Ce?u({action:Ke,label:he}):c===Pe&&u({action:Je,label:he}),s({key:c})},children:at.map(({value:c,label:C})=>n(xt,{disabled:(c===fe||c===Ce)&&g.status===c,children:C},c))}),p=[t?n(_t,{disabled:e,dropdownRender:()=>w(),children:v(re,{css:c=>({marginRight:c.margin.xs}),type:"primary",ghost:!0,children:[o.actions," ",n(F,{name:"icon-arrow-down-outlined"})]})},"actions"):null,a?n(re,{css:c=>({marginRight:c.margin.xs}),loading:r,type:"primary",ghost:!0,icon:n(F,{name:"icon-download-outlined"}),onClick:()=>{u({action:Qe,label:se}),i()},children:o.export},"export"):null,t?n(re,{css:c=>({marginRight:c.margin.xs}),type:"primary",icon:n(F,{name:"icon-upload-outlined"}),onClick:()=>{u({action:ze,label:se}),h()},children:o.import},"import"):null,t?n(re,{type:"primary",icon:n(F,{name:"icon-plus-circle-outlined"}),onClick:()=>{u({action:We,label:se}),m()},children:o.add},"add"):null];return n(G.ActionBox,{actions:p,total:l()})}const Pt=()=>{const{formFilter:e,filter:t,tablePagination:a,resetDataTableSelection:r}=A.useContext(O),{setQueryParamsCard:l}=oe(),{changeDataTable:s}=ae();return[async i=>{r();const m=we(i,t);m&&await s({filter:{...i},limit:a.limit,page:a.current}),m||l({limit:Q,page:V,filter:{...i}})},J,e]},Ft=()=>{const[e,t,a]=Pt(),r=A.useMemo(()=>[{label:o.unit,key:"apartment",component:n(de,{placeholder:o.unit,fluid:"true"}),visible:!0},{label:o.card_code,key:"cardCode",component:n(de,{placeholder:o.card_code,fluid:"true"}),visible:!0},{label:o.card_type,key:"cardType",component:v(Z,{fluid:"true",getPopupContainer:l=>l.parentNode,children:[n(Z.Option,{value:"",children:o.all_type},"card_type_0"),ot.map(({label:l,value:s})=>n(Z.Option,{value:s,children:l},s))]}),visible:!0},{label:o.card_owner,key:"cardOwner",component:n(de,{placeholder:o.card_owner,fluid:"true"}),visible:!0},{label:o.status1,key:"status",component:v(Z,{fluid:"true",getPopupContainer:l=>l.parentNode,children:[n(Z.Option,{value:"",children:o.all_status},"status_0"),Fe.map(({label:l,value:s})=>n(Z.Option,{value:s,children:l},s))]}),visible:!0},{label:o.created_at,key:"createdAt",component:n(Ue.RangePicker,{placeholder:[ie,ie],fluid:"true",format:[ie,ie],getPopupContainer:l=>l.parentNode}),visible:!0}],[]);return n(G.FilterBox,{defaultFilter:t,filters:r,formData:a,onSearch:e})},Mt=()=>{const{layoutScrollRef:e}=A.useContext(xe),{idBuilding:t,cardWarehousePermissionWrite:a,getListCardStatus:r,tableData:l,tablePagination:s,showModalUpdateCard:h,showModalDetailCard:i,tableSelection:m,onSelectRow:g,onSelectAllRowOfPage:u,listContractTemplate:w,resetDataTableSelection:p,formFilter:c,filter:C}=A.useContext(O),{changeDataTable:f}=ae(),{setQueryParamsCard:d}=oe(),_=be(),{isUserCs:L}=Xe(),[D,T]=A.useState({isFetching:!1,code:void 0,codeLanguage:void 0});j(D.code,D.codeLanguage,{message:o.success,description:o.delete_data_success});const S=async(P,$)=>{let{limit:q,current:W}=s;W!==P?W=P:q!==$&&(W=V,q=$,p()),d({limit:q,page:W,filter:{...C}})},R=P=>{i({...P})},I=P=>{h({...P})},E=async P=>{me({onCancel:()=>{T({isFetching:!1,code:void 0,codeLanguage:void 0})},isAll:!1,onOk:async()=>{T({isFetching:!0,code:void 0,codeLanguage:void 0});const $=await Ne({idBuilding:t,idCards:[P.id],isAll:!1});if(T({isFetching:!1,code:$.code,codeLanguage:$.codeLanguage}),ee.includes($.code)){p();const q=Oe(l.totalRecord-1,s.limit,s.current);c.resetFields();const W=s.current===q;return W&&await f({limit:s.limit,page:s.current,filter:{...C}}),W||d({limit:s.limit,page:q,filter:{...C}}),Promise.resolve()}return Promise.reject()},questionText:o.do_you_want_to_delete_card,totalItem:1})},{selectedRowKeys:U}=m,z=l.records,ne=P=>(P==null?void 0:P.status)===H?"disabled":"",le={current:s.current,pageSize:s.limit,total:l.totalRecord,showQuickJumper:!0,showSizeChanger:!0,onChange:S},b={offsetScroll:_.offsetScrollX,getContainer:()=>e.current},Y={scrollToFirstRowOnChange:!0},B={selectedRowKeys:U,onSelect:g,onSelectAll:u,fixed:!0};return[a,r.isFetching,w,z,ne,le,Y,b,B,R,I,E,L]};var Ot={name:"1hcx8jb",styles:"padding:0"};function Yt(){const[e,t,a,r,l,s,h,i,m,g,u,w,p]=Mt(),c=Re(),C=[{title:o.card_code,key:"code",dataIndex:"code",fixed:"left",width:150,render:(f,d)=>n(re,{css:Ot,onClick:()=>g(d),type:"link",children:f.length>15?`${f.slice(0,15)}...`:f})},{title:o.unit,key:"apartment",width:150,render:(f,d)=>d.apartment.name},{title:o.build_status,key:"buildStatus",width:150,render:(f,d)=>{var _;return((_=Ee[d.apartment.buildStatus])==null?void 0:_.name)??""}},{title:o.card_type,key:"cardType",width:150,render:(f,d)=>{var _;return((_=Me[d.type])==null?void 0:_.label)??""}},{title:o.card_owner,key:"cardOwner",width:150,render:(f,d)=>{const _=d.owner.name;return p&&_?"***":_}},{title:o.target,key:"target",width:100,render:(f,d)=>{const _=[];for(let L=0;L<d.target.length;L+=1){const D=d.target[L];if(D.contractTemplateId){const T=a.find(S=>S.id===D.contractTemplateId);(T==null?void 0:T.parkingType)===M.BICYCLE?_.push(n(F,{name:"icon-directions-bike-outlined",css:S=>({marginRight:S.margin.xss,fontSize:S.iconSize}),title:o.bicycle},"icon-directions-bike-outlined")):(T==null?void 0:T.parkingType)===M.CAR?_.push(n(F,{name:"icon-car-outlined",css:S=>({marginRight:S.margin.xss,fontSize:S.iconSize}),title:o.car},"icon-car-outlined")):(T==null?void 0:T.parkingType)===M.MOTORBIKE&&_.push(n(F,{name:"icon-two-wheeler-outlined",css:S=>({marginRight:S.margin.xss,fontSize:S.iconSize}),title:o.motorbike},"icon-two-wheeler-outlined"))}else _.push(n(F,{name:"icon-meeting-room-outlined",css:T=>({marginRight:T.margin.xss,fontSize:T.iconSize}),title:o.elevator},"icon-meeting-room-outlined"))}return _}},{title:o.registration_plate,key:"registrationPlate",dataIndex:"registrationPlate",width:150},{title:o.status1,key:"status",dataIndex:"status",width:150,render:(f,d)=>{var _,L;return(d==null?void 0:d.status)===H?n(Se,{color:"red",children:(_=_e[f])==null?void 0:_.label}):n(Se,{color:"success",children:(L=_e[f])==null?void 0:L.label})}},{title:o.creator,key:"creator",width:150,render:(f,d)=>d.creator.name},{title:o.created_at,key:"createdAt",dataIndex:"createdAt",width:150,render:f=>f?y(f).format("DD/MM/YYYY"):""},{title:o.date_of_stop_using,key:"inactiveAt",dataIndex:"inactiveAt",width:150,render:f=>f?y(f).format("DD/MM/YYYY"):""},e?{title:o.actions,key:"action",fixed:"right",align:"center",width:100,render:(f,d)=>v(De,{children:[(d==null?void 0:d.status)!==H?n(F,{css:_=>({fontSize:_.iconSize}),onClick:()=>{c({action:Ze,label:se}),u(d)},name:"icon-edit-outlined",title:o.update}):null,(d==null?void 0:d.status)!==H?n(F,{css:_=>({fontSize:_.iconSize,marginLeft:_.margin.sm}),onClick:()=>{c({action:He,label:se}),w(d)},name:"icon-minus-circle-outlined",title:o.delete}):null]})}:null].filter(Boolean);return n(G.Table,{columns:C,dataSource:r,loading:t,pagination:s,rowClassName:l,scroll:{...h,x:C.reduce((f,d)=>f+d.width,0)},sticky:i,rowSelection:m})}const ge=e=>{const{isDisabledCode:t=!1}=e;return v(De,{children:[n(K.Item,{rules:[{required:!0}],label:o.card_code,name:"code",children:n(de,{fluid:"true",placeholder:o.card_code,disabled:t})}),n(K.Item,{label:o.note,name:"note",children:n(de.TextArea,{rows:"3",fluid:"true",placeholder:o.note})})]})};ge.propTypes={isDisabledCode:te.bool};ge.defaultProps={isDisabledCode:!1};const kt=async(e,t)=>{try{const a=await mt(e,t);return{code:a.code,codeLanguage:a.codeLanguage}}catch(a){return{code:a.code,codeLanguage:a.codeLanguage}}},Nt=()=>{const{hideModalAddCard:e,idBuilding:t,filter:a,tablePagination:r,formFilter:l}=A.useContext(O),{changeDataTable:s}=ae(),{setQueryParamsCard:h}=oe(),[i,m]=A.useState({isFetching:!1,code:void 0,codeLanguage:void 0}),[g]=K.useForm();j(i.code,i.codeLanguage,{message:o.success,description:o.add_data_success},()=>{e()});const u=async()=>{if(await g.validateFields()){m({isFetching:!0,code:void 0,codeLanguage:void 0});const C=await kt(t,g.getFieldsValue());if(ee.includes(C.code)){const f=g.getFieldValue("code"),d={limit:r.limit,page:r.current,filter:{...a}},_={limit:Q,page:V,filter:{...J,cardCode:f}};l.resetFields();const L=we(_,d);L&&await s({limit:r.limit,page:r.current,filter:{...a}}),L||h({..._})}m({isFetching:!1,code:C.code,codeLanguage:C.codeLanguage})}},w=()=>e(),p={code:void 0,note:void 0};return[i.isFetching,p,g,u,w]},Ut=()=>{const[e,t,a,r,l]=Nt();return n(Ie,{title:o.add_card,open:!0,onOk:r,onCancel:l,okText:o.confirm,cancelText:o.cancel,okButtonProps:{disabled:e,loading:e},children:n(K,{layout:"vertical",name:"formAddCard",form:a,initialValues:t,children:n(ge,{})})})},Vt=async(e,t)=>{try{const a=await gt(e,t);return{code:a.code,codeLanguage:a.codeLanguage}}catch(a){return{code:a.code,codeLanguage:a.codeLanguage}}},Bt=()=>{var f;const{hideModalUpdateCard:e,idBuilding:t,setGetListCardStatus:a,setTableData:r,filter:l,tablePagination:s,modalUpdateCard:h}=A.useContext(O),{data:i}=h,[m,g]=A.useState({isFetching:!1,code:void 0,codeLanguage:void 0}),[u]=K.useForm();j(m.code,m.codeLanguage,{message:o.success,description:o.update_data_success},()=>{e()});const w=async()=>{if(await u.validateFields()){g({isFetching:!0,code:void 0,codeLanguage:void 0});const _=await Vt(t,{id:i.id,...u.getFieldsValue()});if(ee.includes(_.code)){a({isFetching:!0});const L=await ke({filter:{...l},idBuilding:t,limit:s.limit,page:s.current});r({records:L.data,totalRecord:L.totalRecord}),a({isFetching:!1})}g({isFetching:!1,code:_.code,codeLanguage:_.codeLanguage})}},p=()=>e(),c={code:i.code,note:i.note},C=(((f=i==null?void 0:i.target)==null?void 0:f.length)??0)>0;return[m.isFetching,c,u,w,p,C]},$t=()=>{const[e,t,a,r,l,s]=Bt();return n(Ie,{title:o.update_card,open:!0,onOk:r,onCancel:l,okText:o.confirm,cancelText:o.cancel,okButtonProps:{disabled:e,loading:e},children:n(K,{layout:"vertical",name:"formUpdateCard",form:a,initialValues:t,children:n(ge,{isDisabledCode:s})})})},qt=(e,t)=>{var l,s;const a=t==null?void 0:t[e==null?void 0:e.index],r={errorDescription:(l=e==null?void 0:e.errorDescription)!=null&&l.length?e==null?void 0:e.errorDescription:void 0,...a};if((s=r==null?void 0:r.errorDescription)!=null&&s.length)return r},Gt=async({idBuilding:e,listData:t})=>{var a;try{const r={},l=t==null?void 0:t.map(i=>{var m;return r[i==null?void 0:i.index]=i,{...i,status:i!=null&&i.status?(m=nt[i==null?void 0:i.status])==null?void 0:m.value:void 0,code:(i==null?void 0:i.code)||void 0,note:(i==null?void 0:i.note)||void 0,createdAt:i!=null&&i.createdAt?y(i==null?void 0:i.createdAt,ie).toDate():void 0}}),s=await pt({idBuilding:e,listData:l}),h=[];return(a=s==null?void 0:s.data)==null||a.forEach(i=>{const m=qt(i,r);m!=null&&m.errorDescription&&h.push(m)}),{code:s==null?void 0:s.code,codeLanguage:s==null?void 0:s.codeLanguage,data:h}}catch(r){return{code:r==null?void 0:r.code,codeLanguage:r==null?void 0:r.codeLanguage,data:[]}}},{rules:Qt}=St,{dateImportRule:zt}=Qt,Wt=100;var ve;const jt=[{name:"#",key:"index",rules:{type:"number",required:!0},isRequiredColumn:!0},{name:o.card_code,key:"code",rules:{type:"string",required:!0,max:50},isRequiredColumn:!0},{name:o.created_at,key:"createdAt",rules:{...zt,required:!0},isRequiredColumn:!0},{name:o.status1,key:"status",rules:{required:!0,type:"enum",enum:(ve=Fe)==null?void 0:ve.map(e=>e.label)},isRequiredColumn:!0},{name:o.note,key:"note",rules:{type:"string",max:3e3},isRequiredColumn:!0}],Kt=()=>{const{hideModalImportCard:e,idBuilding:t,formFilter:a,tablePagination:r,filter:l}=A.useContext(O),{setQueryParamsCard:s}=oe(),{changeDataTable:h}=ae(),[i,m]=A.useState(0),[g,u]=A.useState({isFetching:!1,code:void 0,codeLanguage:void 0,totalSuccess:0,totalFailed:0,errors:[],data:[]});return j(g.code,g.codeLanguage,{message:o.success,description:o.import_data_success}),[jt,g,async c=>{var D;u({isFetching:!0,code:void 0,codeLanguage:void 0,totalSuccess:0,totalFailed:0,errors:[]});let C=[],f=0;const d={code:500,codeLanguage:null,errors:[]};for(let T=0;T<(c==null?void 0:c.length);T+=1)if(C.push(c[T]),C.length===Wt||T===(c==null?void 0:c.length)-1){f+=C==null?void 0:C.length;const{code:S,codeLanguage:R,data:I}=await Gt({idBuilding:t,listData:C});d.code=S,d.codeLanguage=R,d.errors=[...d.errors,...I],C=[],m(Math.floor(f*100/(c==null?void 0:c.length)))}m(0);const _=(D=d==null?void 0:d.errors)==null?void 0:D.length,L=f-_;if(ee.includes(d.code)){a.resetFields();const T={limit:r.limit,page:r.current,filter:{...l}},S={limit:Q,page:V,filter:{...J}},R=we(S,T);R&&await h({limit:Q,page:V,filter:{...J}}),R||s({...S})}u({isFetching:!1,code:d==null?void 0:d.code,codeLanguage:d==null?void 0:d.codeLanguage,totalFailed:_,totalSuccess:L,errors:d==null?void 0:d.errors})},()=>e(),i]},Jt=()=>{const[e,t,a,r,l]=Kt();return n(Lt,{headers:e,onClose:r,onOk:a,visible:!0,fileNameTemplate:o.card_info_template,code:t.code,codeLanguage:t.codeLanguage,loading:t.isFetching,numberSuccess:(t==null?void 0:t.totalSuccess)??0,numberFail:(t==null?void 0:t.totalFailed)??0,problemResponseServerDataSource:(t==null?void 0:t.errors)??[],percentImport:l})},Ae=({activities:e})=>n(ye,{children:e.map((t,a)=>n(ye.Item,{children:v("span",{children:[n("b",{children:t.actionDate}),": ",n("b",{children:t.creator})," ",t.content]})},a))});Ae.propTypes={activities:te.arrayOf(te.any)};Ae.defaultProps={activities:[]};function Le({histories:e}){const t=[{title:o.unit,key:"apartment",dataIndex:"apartment",width:150},{title:o.card_owner,key:"cardOwner",dataIndex:"cardOwner",width:150},{title:o.register_type,key:"registerType",dataIndex:"registerType",width:150},{title:o.registration_plate,key:"registrationPlate",dataIndex:"registrationPlate",width:150},{title:o.vehicle_type,key:"vehicleType",dataIndex:"vehicleType",width:150},{title:o.vehicle_color,key:"vehicleColor",dataIndex:"vehicleColor",width:150},{title:o.created_at,key:"createdAt",dataIndex:"createdAt",width:150},{title:o.creator,key:"creator",dataIndex:"creator",width:150},{title:o.note,key:"note",dataIndex:"note",width:150}];return n(G.Table,{columns:t,dataSource:e,scroll:{x:t.reduce((a,r)=>a+r.width,0)}})}Le.propTypes={histories:te.arrayOf(te.any)};Le.defaultProps={histories:[]};const Xt=e=>{var r,l,s,h,i,m,g,u,w,p,c,C,f,d,_,L,D,T,S,R;const t={id:e.id,actionDate:y(e.actionDate).format("DD/MM/YYYY HH:mm"),creator:((l=(r=e==null?void 0:e.employee)==null?void 0:r[0])==null?void 0:l.fullName)??"",content:""},a=(e==null?void 0:e.action)??"";if(a==="create")t.content=o.card_log_create;else if(a==="update"){const I=((s=e==null?void 0:e.previousData)==null?void 0:s.code)??"",E=((h=e==null?void 0:e.changedData)==null?void 0:h.code)??"";t.content=`${o.card_log_update} ${o.from.toLowerCase()} ${I} ${o.activity_to} ${E}`}else if(a==="update-status"){const I=((i=e==null?void 0:e.changedData)==null?void 0:i.status)??ce;t.content=`${o.card_log_update_status} ${o.activity_to} 
                  ${I===ce?o.staff_status_active.toLowerCase():""}
                  ${I===H?o.staff_status_inactive.toLowerCase():""}
                  `}else if(a==="create-card-slot"){const I=(u=(g=(m=e==null?void 0:e.contract)==null?void 0:m[0])==null?void 0:g.requiredInfo)==null?void 0:u.find(z=>z.key==="registration_plate"),E=((c=(p=(w=e==null?void 0:e.contract)==null?void 0:w[0])==null?void 0:p.contractTemplate)==null?void 0:c.parkingType)??M.ELEVATOR,U=((d=(f=(C=e==null?void 0:e.contract)==null?void 0:C[0])==null?void 0:f.contractTemplate)==null?void 0:d.name)??"";t.content=`${o.card_log_add_card_slot}
                  ${E===M.ELEVATOR?o.elevator:`${U} (${I.value})`}`}else if(a==="delete-card-slot"){const I=(D=(L=(_=e==null?void 0:e.contract)==null?void 0:_[0])==null?void 0:L.requiredInfo)==null?void 0:D.find(U=>U.key==="registration_plate"),E=((R=(S=(T=e==null?void 0:e.contract)==null?void 0:T[0])==null?void 0:S.contractTemplate)==null?void 0:R.parkingType)??M.ELEVATOR;t.content=`${o.card_log_delete_card_slot} 
                  ${E===M.MOTORBIKE?`${o.motorbike} (${I.value})`:""}
                  ${E===M.BICYCLE?`${o.bicycle} (${I.value})`:""}
                  ${E===M.CAR?`${o.car} (${I.value})`:""}
                  ${E===M.ELEVATOR?o.elevator:""}`}return t},Zt=async(e,t)=>{try{const a=await ht(e,t);return{code:a.code,codeLanguage:a.codeLanguage,data:a.data.map(r=>Xt(r)),totalRecord:a.totalRecord}}catch(a){return{code:a.code,codeLanguage:a.codeLanguage,data:[],totalRecord:0}}},Ht=e=>{var l,s,h,i,m;if(((e==null?void 0:e.action)??"").indexOf("slot")!==-1){const g=e.additionalData;if(g){const u={key:`card-${e.id}`,apartment:"",cardOwner:"",registrationPlate:"",vehicleType:"",vehicleColor:"",createdAt:y(e.actionDate).format("DD/MM/YYYY HH:mm"),creator:(e==null?void 0:e.employee[0].fullName)??"",registerType:o.staff_status_active,note:g.note,children:[]},w=g.slots||[];w.length===1&&(u.children=void 0);for(let p=0;p<w.length;p+=1){const c=w[p];if(p===0)u.apartment=g.cardUnit,u.cardOwner=g.cardOwner,u.registrationPlate=c.registrationPlate,u.vehicleType=c.vehicleType!==M.ELEVATOR?c.vehicleType:o.elevator,u.vehicleColor=c.color,c.status===X.REGISTER?u.registerType=o.new_registration:c.status===X.CANCEL?u.registerType=o.cancel:c.status===X.INTEGRATE&&(u.registerType=o.integrate);else{const C={key:`cardSlot-${p}`,apartment:"",cardOwner:"",registrationPlate:c.registrationPlate,vehicleType:c.vehicleType!==M.ELEVATOR?c.vehicleType:o.elevator,vehicleColor:c.color,createdAt:y(e.actionDate).format("DD/MM/YYYY HH:mm"),creator:((l=e==null?void 0:e.employee[0])==null?void 0:l.fullName)??"",registerType:o.staff_status_active,note:""};c.status===X.REGISTER?C.registerType=o.new_registration:c.status===X.CANCEL?C.registerType=o.cancel:c.status===X.INTEGRATE&&(C.registerType=o.integrate),u.children.push(C)}}return u}}const a=e.previousData,r=((s=e==null?void 0:e.changedData)==null?void 0:s.status)??ce;return{key:`card-${e.id}`,apartment:((h=a==null?void 0:a.unit)==null?void 0:h.name)??"",cardOwner:((i=a==null?void 0:a.owner)==null?void 0:i.fullName)??"",registrationPlate:"",vehicleType:"",vehicleColor:"",createdAt:y(e.actionDate).format("DD/MM/YYYY HH:mm"),creator:((m=e==null?void 0:e.employee[0])==null?void 0:m.fullName)??"",registerType:r===ce?o.staff_status_active:o.staff_status_inactive,note:a.note}},ea=async(e,t)=>{try{const a=await ft(e,t);return{code:a.code,codeLanguage:a.codeLanguage,data:a.data.map(r=>Ht(r)),totalRecord:a.totalRecord}}catch(a){return{code:a.code,codeLanguage:a.codeLanguage,data:[],totalRecord:0}}},ta=()=>{const{modalDetailCard:e,hideModalDetailCard:t,idBuilding:a}=A.useContext(O),{data:r}=e,[l,s]=A.useState(!1),[h,i]=A.useState([]),[m,g]=A.useState([]);return A.useEffect(()=>{(async()=>{s(!0);const[u,w]=await Promise.all([Zt(a,r.id),ea(a,r.id)]);i(u.data),g(w.data),s(!1)})()},[]),[l,r,h,m,t]};var aa={name:"gaqdqq",styles:"width:100%;height:100%;display:flex;justify-content:center;align-items:center"},oa={name:"s5xdrg",styles:"display:flex;align-items:center"},na={name:"s5xdrg",styles:"display:flex;align-items:center"},ia={name:"s5xdrg",styles:"display:flex;align-items:center"};const ra=()=>{var h,i,m;const[e,t,a,r,l]=ta(),s=be();return n(At,{width:"50%",title:o.detail_card,placement:"right",onClose:l,visible:!0,children:e?n("div",{css:aa,children:n(wt,{})}):v(Tt,{gutter:[s.margin.xs,s.margin.md],children:[n(x,{span:"24",children:v("div",{css:oa,children:[n(F,{name:"icon-info-circle-filled",css:pe({fontSize:s.iconSize,marginRight:s.margin.xs},"","")}),n("span",{children:n("b",{children:o.information})})]})}),v(x,{span:12,children:[n(k,{children:o.card_code}),n(N,{children:t.code||"-"})]}),v(x,{span:12,children:[n(k,{children:o.card_type}),n(N,{children:((h=Me[t.type])==null?void 0:h.label)??"-"})]}),v(x,{span:12,children:[n(k,{children:o.card_owner}),n(N,{children:t.owner.name||"-"})]}),v(x,{span:12,children:[n(k,{children:o.status1}),n(N,{children:((i=_e[t.status])==null?void 0:i.label)??"-"})]}),v(x,{span:12,children:[n(k,{children:o.creator}),n(N,{children:t.creator.name||"-"})]}),v(x,{span:12,children:[n(k,{children:o.created_at}),n(N,{children:t.createdAt?y(t.createdAt).format("DD/MM/YYYY HH:mm"):"-"})]}),v(x,{span:24,children:[n(k,{children:o.date_of_stop_using}),n(N,{children:t.inactiveAt?y(t.inactiveAt).format("DD/MM/YYYY HH:mm"):"-"})]}),v(x,{span:24,children:[n(k,{children:o.note}),n(N,{children:t.note||"-"})]}),v(x,{span:12,children:[n(k,{children:o.unit}),n(N,{children:t.apartment.name||"-"})]}),v(x,{span:12,children:[n(k,{children:o.build_status}),n(N,{children:((m=Ee[t.apartment.buildStatus])==null?void 0:m.name)??"-"})]}),n(x,{span:"24",children:v("div",{css:na,children:[n(F,{name:"icon-history-outlined",css:pe({fontSize:s.iconSize,marginRight:s.margin.xs},"","")}),n("span",{children:n("b",{children:o.history_usage})})]})}),n(x,{span:"24",children:n(Le,{histories:r})}),n(x,{span:"24",children:v("div",{css:ia,children:[n(F,{name:"icon-list-outlined",css:pe({fontSize:s.iconSize,marginRight:s.margin.xs},"","")}),n("span",{children:n("b",{children:o.activities})})]})}),n(x,{span:"24",children:n(Ae,{activities:a})})]})})},sa=e=>{var t;return{id:e.id,name:e.name,parkingType:((t=e==null?void 0:e.formula)==null?void 0:t.parkingType)??""}},da=async e=>{try{const t=await et({idBuilding:e});return{code:t.code,codeLanguage:t.codeLanguage,data:t.data.map(a=>sa(a))}}catch(t){return{code:t.code,codeLanguage:t.codeLanguage,data:[]}}},ca=()=>{const{setTitlePage:e,setVisibleFilterBox:t,setVisibleSearchBox:a}=A.useContext(xe),{idBuilding:r,modalAddCard:l,modalUpdateCard:s,modalDetailCard:h,modalImportCard:i,setListContractTemplate:m}=A.useContext(O),{search:g}=rt(),{getQueryParamsCard:u}=oe(),{changeDataTable:w}=ae();return A.useEffect(()=>(e(o.card_warehouse),a(!0),(async()=>{const p=await da(r);m(p.data)})(),()=>{e(""),a(!1),t(!1)}),[]),A.useEffect(()=>{(async()=>{const{pagination:p,filter:c}=u();g&&await w({filter:{...c},limit:p.limit,page:p.page})})()},[g]),[l.isShow,s.isShow,h.isShow,i.isShow]},la=()=>{const[e,t,a,r]=ca();return v(G.Wrapper,{children:[n(Ft,{}),v(G.Container,{children:[n(G.Header,{children:n(Et,{})}),n(G.Content,{children:n(Yt,{})})]}),e?n(Ut,{}):null,t?n($t,{}):null,r?n(Jt,{}):null,a?n(ra,{}):null]})},an=()=>n(yt,{children:n(la,{})});export{an as default};