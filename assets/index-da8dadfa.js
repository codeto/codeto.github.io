import{j as g,a as z,u as Ft,F as wt}from"./@emotion-63839449.js";import{o as dt,P as N,D as vt,T as St}from"./index-b17d22e5.js";import{a9 as U,s as W,b0 as Dt,K as ot,aS as Lt,at as yt,bv as bt,ag as Ct,l as s,S as gt,a3 as ut,I as G,dq as Tt,a5 as V,gU as mt,bI as pt,bG as At,cP as at,cf as rt,a as ht,a1 as xt}from"./index-c2ded735.js";import{r as R}from"./react-4fd50329.js";import"./react-redux-896b353b.js";import{u as _t}from"./useTableCheckbox-753d19b2.js";import{h as L}from"./moment-a468e1f9.js";import"./lodash-88fe09e6.js";import"./file-saver-40cf32a9.js";import"./@firebase-43527ee1.js";import{P as Et}from"./prop-types-1172f4d5.js";import{F as It,u as j}from"./index-687ba9e6.js";import{j as H,P as nt,R as O,k as st,N as Mt}from"./constants-d0d23bbb.js";import{u as kt,d as Yt,a as Ot}from"./react-router-a4308f7b.js";import{d as Nt}from"./downloadFileFromUrl-79614833.js";import{d as Bt,e as Gt,g as Vt,p as Qt,a as Ut}from"./cardRegistrationForm-c181ed24.js";import{B as Q,a as ct}from"./antd-f9eae174.js";import{I as J,S as K}from"./index-43183512.js";import{u as Wt}from"./useQuery-d54d310a.js";import{c as jt}from"./compareObject-7b349d22.js";import{M as tt}from"./index-6a3b7dc6.js";import{f as $t}from"./formatNumberWithPrecision-689b8fea.js";import{p as Z}from"./printHtml-6274ec45.js";import"./hoist-non-react-statics-23d96a9a.js";import"./react-is-e8e5dbb3.js";import"./@babel-b64fd0f9.js";import"./stylis-79144faa.js";import"./react-router-dom-2a8f5f6d.js";import"./history-a1882333.js";import"./resolve-pathname-e210f2ac.js";import"./tiny-invariant-dd7d57d2.js";import"./account-86ffff50.js";import"./index-881eef42.js";import"./libphonenumber-js-0d5a9c92.js";import"./react-infinite-scroll-component-e33646cb.js";import"./redux-10bbab4c.js";import"./react-dom-40621ea0.js";import"./classnames-4ba1ba1a.js";import"./scheduler-765c72db.js";import"./@redux-saga-8bafe09b.js";import"./redux-logger-e1c9ca90.js";import"./dompurify-8e338605.js";import"./query-string-f5cca1e7.js";import"./decode-uri-component-4138e85d.js";import"./split-on-first-4f1167c8.js";import"./filter-obj-2ed190f4.js";import"./oidc-client-7da0eaf7.js";import"./firebase-878887a2.js";import"./rc-pagination-c1e6a0ac.js";import"./rc-picker-2e3d5fe5.js";import"./rc-util-0bc219f3.js";import"./rc-trigger-570b13ec.js";import"./rc-motion-ae889c42.js";import"./rc-align-e5d7b12e.js";import"./dom-align-ecb06dd6.js";import"./resize-observer-polyfill-0f9f8adb.js";import"./rc-resize-observer-b9ad4e29.js";import"./@ant-design-cba9d434.js";import"./@ctrl-fb5a5473.js";import"./rc-tabs-dfd19a56.js";import"./rc-dropdown-5378dd0a.js";import"./rc-menu-b15ebfe9.js";import"./rc-overflow-6be96612.js";import"./rc-select-564caf01.js";import"./rc-virtual-list-8a7b82a6.js";import"./rc-collapse-11b7d3c4.js";import"./shallowequal-4542d6f7.js";import"./rc-drawer-317f0b4d.js";import"./@rc-component-5a112e55.js";import"./rc-field-form-ef5549aa.js";import"./async-validator-dee29e8b.js";import"./scroll-into-view-if-needed-6b992d05.js";import"./compute-scroll-into-view-183f845a.js";import"./rc-image-e0357917.js";import"./rc-dialog-b1d1f07b.js";import"./rc-input-number-8bc068f7.js";import"./rc-rate-c64cf0d5.js";import"./rc-steps-2d1924c7.js";import"./rc-switch-b4e96de7.js";import"./rc-table-191ecc42.js";import"./rc-checkbox-018e8052.js";import"./rc-tree-67773537.js";import"./rc-tree-select-cb7eccc3.js";import"./copy-to-clipboard-64585c8c.js";import"./toggle-selection-93f4ad84.js";import"./rc-textarea-d01adcbb.js";import"./rc-input-02c2c2ba.js";import"./rc-upload-3ab0f08a.js";import"./rc-notification-d13dc43b.js";import"./rc-progress-4f1a7096.js";import"./rc-tooltip-08fa4217.js";import"./use-sync-external-store-5d1b6592.js";import"./idb-cdd1a92f.js";import"./path-to-regexp-ef8d5544.js";import"./index-f7aef2cc.js";const k=R.createContext({registrationFormPermissionWrite:!1,registrationFormPermissionExport:!1,registrationFormPermissionRead:!1,idBuilding:0,formFilter:void 0,getListRegistrationFormStatus:{isFetching:!1},setGetListRegistrationFormStatus:()=>{},filter:{...H},setFilter:()=>{},tableData:{records:[],totalRecord:0},setTableData:()=>{},tableSelection:{isSelectAllItem:!1,isShowQuestionSelectAll:!1,selectedRowsCache:[],selectedRowKeysCache:[],selectedRowKeys:[],byId:{}},resetDataTableSelection:()=>{},onSelectRow:()=>{},onSelectAllRowOfPage:()=>{},selectAllRowComponent:()=>{},tablePagination:{current:U,limit:W},setTablePagination:()=>{},modalPrintListRegistrationForm:void 0,showModalPrintListRegistrationForm:()=>{},hideModalPrintListRegistrationForm:()=>{},modalDetailRegistrationForm:void 0,showModalDetailRegistrationForm:()=>{},hideModalDetailRegistrationForm:()=>{}}),et=({children:t})=>{const{getPermissionByModuleCode:n}=Dt(),{idBuilding:e}=kt(),[c,a]=R.useState({isFetching:!1}),[r,d]=R.useState({...H}),[i,f]=R.useState({records:[],totalRecord:0}),[u,p,P,w,l]=_t({dataRows:i.records,rowKey:"id",totalRows:i.totalRecord}),[F,o]=R.useState({current:1,limit:W}),[v]=It.useForm(),[T,y,A]=ot(),[M,B,m]=ot(),h=n(Lt),b=(h==null?void 0:h[yt])??!1,D=(h==null?void 0:h[bt])??!1,S=(h==null?void 0:h[Ct])??!1,x={registrationFormPermissionWrite:b,registrationFormPermissionExport:D,registrationFormPermissionRead:S,idBuilding:e,formFilter:v,getListRegistrationFormStatus:c,setGetListRegistrationFormStatus:a,filter:r,setFilter:d,tableData:i,setTableData:f,tableSelection:u,resetDataTableSelection:p,onSelectRow:P,onSelectAllRowOfPage:w,selectAllRowComponent:l,tablePagination:F,setTablePagination:o,modalPrintListRegistrationForm:T,showModalPrintListRegistrationForm:y,hideModalPrintListRegistrationForm:A,modalDetailRegistrationForm:M,showModalDetailRegistrationForm:B,hideModalDetailRegistrationForm:m};return g(k.Provider,{value:x,children:t})};et.propTypes={children:Et.node};et.defaultProps={children:g("div",{})};const Kt=et,ft=async({idBuilding:t,idRegistrationForms:n,filter:e,isAll:c})=>{try{let a={};if(e&&c){const{apartment:d,code:i,registrant:f,createdAt:u}=e,p=u==null?void 0:u[0],P=u==null?void 0:u[1];a={unit:d||void 0,register:f||void 0,code:i||void 0,from:p?L(p).toDate():void 0,to:P?L(P).toDate():void 0}}const r=await Bt({idBuilding:t,ids:c?void 0:n,filter:c?a:void 0,isCheckAll:c});return{code:r.code,codeLanguage:r.codeLanguage}}catch(a){return{code:a.code,codeLanguage:a.codeLanguage}}},qt=async(t,n)=>{try{const{apartment:e,code:c,registrant:a,createdAt:r,status:d}=n,i=r==null?void 0:r[0],f=r==null?void 0:r[1],u=await Gt(t,{unit:e||void 0,register:a||void 0,code:c||void 0,from:i?L(i).toDate():void 0,to:f?L(f).toDate():void 0,status:d||void 0});return{code:u.code,codeLanguage:u.codeLanguage,data:u.data}}catch(e){return{code:e.code,codeLanguage:e.codeLanguage,data:void 0}}},zt=t=>{var n,e,c,a,r,d;return{id:t.id,key:t.id,code:t.code,registerAt:t.registerAt||t.createdAt,createdAt:t.createdAt,registrant:{id:(t==null?void 0:t.registerId)??"",name:(t==null?void 0:t.registerName)??"",email:(t==null?void 0:t.registerEmail)??"",phone:(t==null?void 0:t.registerPhone)??""},creator:{id:(n=t==null?void 0:t.creator)==null?void 0:n.id,name:((e=t==null?void 0:t.creator)==null?void 0:e.fullName)??""},deletedBy:{id:(c=t==null?void 0:t.deletedBy)==null?void 0:c.id,name:((a=t==null?void 0:t.deletedBy)==null?void 0:a.fullName)??""},apartment:{id:(t==null?void 0:t.unitId)??"",name:((r=t==null?void 0:t.unit)==null?void 0:r.name)??""},note:(t==null?void 0:t.note)??"",actions:((d=t==null?void 0:t.cardFormActions)==null?void 0:d.map(i=>({id:i.id,type:i.type,slot:i.slot,card:{id:i.cardId,code:i.cardCode,owner:i.cardOwner,registrationPlate:i.registrationPlate,parkingType:i.parkingType}})))??[],deletedAt:t.deletedAt}},X=async({filter:t,idBuilding:n,limit:e,page:c})=>{try{const{apartment:a,code:r,registrant:d,createdAt:i,status:f}=t,u=i==null?void 0:i[0],p=i==null?void 0:i[1],P=await Vt({filter:{unit:a||void 0,register:d||void 0,code:r||void 0,from:u?L(u).toDate():void 0,to:p?L(p).toDate():void 0,status:f||void 0},idBuilding:n,limit:e,page:c});return{code:P.code,codeLanguage:P.codeLanguage,data:P.data.map(w=>zt(w)),totalRecord:P.totalRecord}}catch(a){return{code:a.code,codeLanguage:a.codeLanguage,data:[],totalRecord:0}}},Ht=()=>{const{idBuilding:t,showModalPrintListRegistrationForm:n,registrationFormPermissionExport:e,registrationFormPermissionRead:c,registrationFormPermissionWrite:a,selectAllRowComponent:r,tableSelection:d,filter:i,resetDataTableSelection:f,setGetListRegistrationFormStatus:u,tablePagination:p,setTableData:P}=R.useContext(k),{isSelectAllItem:w,selectedRowKeysCache:l}=d,F=Yt(),[o,v]=R.useState({isFetching:!1,code:void 0,codeLanguage:void 0}),[T,y]=R.useState({isFetching:!1,code:void 0,codeLanguage:void 0});j(o.code,o.codeLanguage,{message:s.success,description:s.export_data_success}),j(T.code,T.codeLanguage,{message:s.success,description:s.delete_data_success});const A=async()=>{dt({onCancel:()=>{y({isFetching:!1,code:void 0,codeLanguage:void 0})},isAll:w,onOk:async()=>{y({isFetching:!0,code:void 0,codeLanguage:void 0});const D=await ft({idBuilding:t,idRegistrationForms:l,isAll:w,filter:i});if(y({isFetching:!1,code:D.code,codeLanguage:D.codeLanguage}),gt.includes(D.code)){f(),u({isFetching:!0});const S=await X({filter:{...i},idBuilding:t,limit:p.limit,page:p.current});return P({records:S.data,totalRecord:S.totalRecord}),u({isFetching:!1}),Promise.resolve()}return Promise.reject()},questionText:s.do_you_want_to_delete_registration_form,totalItem:l.length})},M=()=>{n()},B=async()=>{v({isFetching:!0,code:void 0,codeLanguage:void 0});const D=await qt(t,i);D.data&&Nt(D.data,document,"thong-tin-phieu-dang-ky.xlsx"),v({isFetching:!1,code:D.code,codeLanguage:D.codeLanguage})},m=()=>{F.push(`/buildings/${t}/card-registration-form/add`)},h=!w&&l.length===0,b=!w&&l.length===0;return[h,b,e,c,a,o.isFetching,r,B,m,M,A]};function Xt(){const[t,n,e,c,a,r,d,i,f,u,p]=Ht(),P=ut(),w=[e?g(Q,{css:l=>({marginRight:l.margin.xs}),loading:r,type:"primary",ghost:!0,icon:g(G,{name:"icon-download-outlined"}),onClick:()=>{P({action:Tt,label:V}),i()},children:s.export},"export"):null,c?g(Q,{css:l=>({marginRight:l.margin.xs}),disabled:n,type:"primary",ghost:!0,icon:g(G,{name:"icon-print-outlined"}),onClick:()=>{P({action:mt,label:V}),u()},children:s.print},"print"):null,a?g(Q,{css:l=>({marginRight:l.margin.xs}),disabled:t,type:"primary",icon:g(G,{name:"icon-minus-circle-outlined"}),onClick:()=>{P({action:pt,label:V}),p()},children:s.delete},"delete"):null,a?g(Q,{type:"primary",icon:g(G,{name:"icon-plus-circle-outlined"}),onClick:()=>{P({action:At,label:V}),f()},children:s.register},"add"):null];return g(N.ActionBox,{actions:w,total:d()})}const it=()=>{const{getAllQuery:t,setQuery:n}=Wt(),{setTablePagination:e,setFilter:c,formFilter:a}=R.useContext(k);return{getQueryParamsRegistration:()=>{var T,y,A,M;const{limit:i,page:f,code:u,status:p,registrant:P,apartment:w,createdAtFrom:l,createdAtTo:F}=t(),o={pagination:{limit:i&&+i||W,page:f&&+f||U},filter:{code:u||"",registrant:P||"",apartment:w||"",createdAt:l&&F?[L(l,"DD/MM/YYYY",!0),L(F,"DD/MM/YYYY",!0)]:[],status:p||""}};e({limit:o.pagination.limit,current:o.pagination.page}),c({...o.filter}),a.setFieldsValue({...o.filter});const v={limit:o.pagination.limit,page:o.pagination.page,code:(T=o.filter)==null?void 0:T.code,registrant:(y=o.filter)==null?void 0:y.registrant,apartment:(A=o.filter)==null?void 0:A.apartment,status:(M=o.filter)==null?void 0:M.status,createdAtFrom:"",createdAtTo:""};return Array.isArray(o.filter.createdAt)&&o.filter.createdAt.length&&(v.createdAtFrom=L(o.filter.createdAt[0]).format("DD/MM/YYYY"),v.createdAtTo=L(o.filter.createdAt[1]).format("DD/MM/YYYY")),n(v),o},setQueryParamsRegistration:({limit:i=W,page:f=U,filter:u=H})=>{const{code:p="",registrant:P="",apartment:w="",createdAt:l=null,status:F=""}=u,o={limit:i,page:f,code:p,registrant:P,apartment:w,status:F,createdAtFrom:"",createdAtTo:""};Array.isArray(l)&&l.length&&(o.createdAtFrom=L(l[0]).format("DD/MM/YYYY"),o.createdAtTo=L(l[1]).format("DD/MM/YYYY")),n(o)}}},Rt=()=>{const{idBuilding:t,setTableData:n,setGetListRegistrationFormStatus:e}=R.useContext(k);return{changeDataTable:async({filter:a,limit:r,page:d})=>{e({isFetching:!0});const i=await X({filter:{...a},idBuilding:t,limit:r,page:d});n({records:i.data,totalRecord:i.totalRecord}),e({isFetching:!1})}}},Jt=()=>{const{filter:t,formFilter:n,tablePagination:e}=R.useContext(k),{setQueryParamsRegistration:c}=it(),{changeDataTable:a}=Rt();return[async d=>{const i=jt(d,t);i&&await a({filter:{...d},limit:e.limit,page:e.current}),i||c({limit:W,page:U,filter:{...d}})},n]},Zt=()=>{const[t,n]=Jt(),e=R.useMemo(()=>[{label:s.form_code,key:"code",component:g(J,{placeholder:s.form_code,fluid:"true"}),visible:!0},{label:s.registrant,key:"registrant",component:g(J,{placeholder:s.registrant,fluid:"true"}),visible:!0},{label:s.unit,key:"apartment",component:g(J,{placeholder:s.unit,fluid:"true"}),visible:!0},{label:s.created_at,key:"createdAt",component:g(vt.RangePicker,{placeholder:["DD/MM/YYYY","DD/MM/YYYY"],fluid:"true",format:["DD/MM/YYYY","DD/MM/YYYY"],getPopupContainer:c=>c.parentNode}),visible:!0},{label:s.status1,key:"status",component:z(K,{fluid:"true",getPopupContainer:c=>c.parentNode,children:[g(K.Option,{value:"",children:s.all_status},""),g(K.Option,{value:at,children:s.active},at),g(K.Option,{value:rt,children:s.inactive},rt)]}),visible:!0}],[]);return g(N.FilterBox,{defaultFilter:H,filters:e,formData:n,onSearch:t})},te=()=>{const{layoutScrollRef:t}=R.useContext(ht),{getListRegistrationFormStatus:n,idBuilding:e,registrationFormPermissionWrite:c,registrationFormPermissionRead:a,tableData:r,tablePagination:d,showModalDetailRegistrationForm:i,tableSelection:f,onSelectRow:u,onSelectAllRowOfPage:p,resetDataTableSelection:P,setGetListRegistrationFormStatus:w,filter:l,setTableData:F}=R.useContext(k),{setQueryParamsRegistration:o}=it(),{isUserCs:v}=xt(),T=Ft(),[y,A]=R.useState({isFetching:!1,code:void 0,codeLanguage:void 0});j(y.code,y.codeLanguage,{message:s.success,description:s.delete_data_success});const M=async(C,E)=>{let{limit:I,current:$}=d;$!==C?$=C:I!==E&&($=U,I=E,P()),o({limit:I,page:$,filter:l})},B=async C=>{dt({onCancel:()=>{A({isFetching:!1,code:void 0,codeLanguage:void 0})},isAll:!1,onOk:async()=>{A({isFetching:!0,code:void 0,codeLanguage:void 0});const E=await ft({idBuilding:e,idRegistrationForms:[C.id],isAll:!1});if(A({isFetching:!1,code:E.code,codeLanguage:E.codeLanguage}),gt.includes(E.code)){P(),w({isFetching:!0});const I=await X({filter:{...l},idBuilding:e,limit:d.limit,page:d.current});return F({records:I.data,totalRecord:I.totalRecord}),w({isFetching:!1}),Promise.resolve()}return Promise.reject()},questionText:s.do_you_want_to_delete_registration_form,totalItem:1})},m=C=>{i({...C})},{selectedRowKeys:h}=f,b=r.records,D=C=>C.deletedAt?"disabled":"",S={current:d.current,pageSize:d.limit,total:r.totalRecord,showQuickJumper:!0,showSizeChanger:!0,onChange:M},x={offsetScroll:T.offsetScrollX,getContainer:()=>t.current},_={scrollToFirstRowOnChange:!0},Y={selectedRowKeys:h,onSelect:u,onSelectAll:p,fixed:!0};return[c,a,n.isFetching,b,D,S,_,x,Y,m,B,v]};function ee(){const[t,n,e,c,a,r,d,i,f,u,p,P]=te(),w=ut(),l=[{title:s.form_code,key:"code",dataIndex:"code",fixed:"left",width:150},{title:s.register_at,key:"registerAt",dataIndex:"registerAt",width:150,render:F=>F?L(F).format("DD/MM/YYYY"):""},{title:s.registrant,key:"registrant",width:150,render:(F,o)=>{const v=o.registrant.name;return v&&P?"***":v}},{title:s.unit,key:"apartment",width:150,render:(F,o)=>o.apartment.name},{title:s.creator,key:"creator",width:150,render:(F,o)=>o.creator.name},{title:s.created_at,key:"createdAt",dataIndex:"createdAt",width:100,render:F=>F?L(F).format("DD/MM/YYYY"):""},{title:s.note,key:"note",dataIndex:"note",width:250},{title:s.deleted_by,key:"deletedBy",width:150,render:(F,o)=>{var v;return((v=o==null?void 0:o.deletedBy)==null?void 0:v.name)??""}},{title:s.deleted_at,key:"deletedAt",dataIndex:"deletedAt",width:100,render:(F,o)=>F?L(F).format("DD/MM/YYYY"):""},{title:s.actions,key:"action",fixed:"right",align:"center",width:100,render:(F,o)=>z(wt,{children:[t?g(G,{css:v=>({marginRight:v.margin.sm,fontSize:v.iconSize}),onClick:()=>{w({action:mt,label:V}),u(o)},name:"icon-print-outlined",title:s.print}):null,n&&!o.deletedAt?g(G,{css:v=>({fontSize:v.iconSize}),onClick:()=>{w({action:pt,label:V}),p(o)},name:"icon-minus-circle-outlined",title:s.delete}):null]})}];return g(N.Table,{columns:l,dataSource:c,loading:e,pagination:r,rowClassName:a,scroll:{...d,x:l.reduce((F,o)=>F+o.width,0)},sticky:i,rowSelection:f})}const Pt=async(t,n)=>{try{const e=await Qt(t,n);return{code:e.code,codeLanguage:e.codeLanguage,data:e.data}}catch(e){return{code:e.code,codeLanguage:e.codeLanguage,data:void 0}}},q=async({idBuilding:t,idRegistrationForms:n})=>{try{const e=await Ut({idBuilding:t,registerFormIds:n});return{code:e.code,codeLanguage:e.codeLanguage,data:e.data}}catch(e){return{code:e.code,codeLanguage:e.codeLanguage,data:void 0}}},ie=()=>{const{filter:t,tableData:n,tableSelection:e,hideModalPrintListRegistrationForm:c,idBuilding:a}=R.useContext(k),{selectedRowKeysCache:r,selectedRowsCache:d,isSelectAllItem:i}=e,[f,u]=R.useState({isFetching:!1,code:void 0,codeLanguage:void 0}),[p,P]=R.useState({isFetching:!1,code:void 0,codeLanguage:void 0}),[w,l]=R.useState([]),[F,o]=R.useState(0),[v,T]=R.useState();j(f.code,f.codeLanguage);const y=m=>{p.isFetching&&(m.preventDefault(),m.returnValue="")};return R.useEffect(()=>((async()=>{i&&window.addEventListener("beforeunload",y),u({isFetching:!0,code:void 0,codeLanguage:void 0});const m=await Pt(a,r[0]);T(m.data),u({isFetching:!1,code:m.code,codeLanguage:m.codeLanguage})})(),()=>{window.removeEventListener("beforeunload",y)}),[]),[p,w,F,f,v,m=>()=>{Z(m.html);const h={...m,status:nt},{index:b}=h,D=[...w];D.splice(b,1,h),l(D)},async()=>{var D;o(0),P({isFetching:!0});const m={};let h=0;if(i){const{totalRecord:S}=n,x=Math.round(S/O);let _=1;for(;_<=x;){const Y=await X({filter:{...t},idBuilding:a,limit:O,page:_}),C=(D=Y.data)==null?void 0:D.map(I=>I.id),E=await q({idBuilding:a,idRegistrationForms:C});m[h]||(m[h]={html:"",total:0,listRegistrationForm:[]}),m[h].html+=E.data,m[h].total+=1,m[h].listRegistrationForm=m[h].listRegistrationForm.concat(Y.data),m[h].total>st&&(h+=1),_+=1,o(Math.floor(_*100/x))}}else if(r.length>100){let S=1;const x=Math.ceil(r.length/O);for(;S<=x;){const _=(S-1)*O>r.length-1?r.length-1:(S-1)*O,Y=_+O-1>r.length-1?r.length-1:_+O-1,C=r.slice(_,Y),E=d.slice(_,Y),I=await q({idBuilding:a,idRegistrationForms:C});m[h]||(m[h]={html:"",total:0,listRegistrationForm:[]}),m[h].html+=I.data,m[h].total+=1,m[h].listRegistrationForm=m[h].listRegistrationForm.concat(E),m[h].total>st&&(h+=1),S+=1,o(Math.floor(S*100/x))}}else{const S=await q({idBuilding:a,idRegistrationForms:r});m[h]={html:S.data,total:1,listRegistrationForm:d},o(100)}const b=Object.keys(m).map((S,x)=>({index:x,content:`${m[S].listRegistrationForm[0].code} - ${m[S].listRegistrationForm[m[S].listRegistrationForm.length-1].code}`,numberOfInvoice:m[S].listRegistrationForm.length,status:Mt,html:m[S].html}));l(b),b.length===1&&(Z(b[0].html),l([{...b[0],status:nt}])),P({isFetching:!1})},()=>{c()}]},{Progress:oe}=tt,lt="PRINTED",ae=()=>{const[t,n,e,c,a,r,d,i]=ie(),f=[{title:"#",dataIndex:"index",key:"index",render:p=>Number(p)+1},{title:s.label.content,dataIndex:"content",key:"content",render:(p,P)=>g(Q,{type:"link",onClick:r(P),style:{paddingLeft:0},children:p})},{title:s.label.number_of_invoice,dataIndex:"numberOfInvoice",key:"numberOfInvoice",render:p=>$t(p)},{title:s.label.status,dataIndex:"status",key:"status",render:p=>g(ct.Text,{strong:!0,style:{color:p===lt?"#52c41a":"#ff4d4f"},children:p===lt?s.label.printed:s.label.not_printed})}],u=R.useMemo(()=>g(oe,{isShow:t.isFetching||n.length>0,percent:e,isProcessing:t.isFetching,children:g(St,{title:()=>g(ct.Text,{strong:!0,children:s.label.print_list}),columns:f,dataSource:n,pagination:{pageSize:5}})}),[e,t,n]);return g(tt,{visible:!0,title:s.print,loading:t.isFetching,onOk:d,onCancel:i,okText:s.print,maskClosable:!t.isFetching,disabledButtonOk:t.isFetching,disabledButtonCancel:t.isFetching,isLoadingPreview:c.isFetching,afterPreview:u,html:a||"<div />"})},re=()=>{const{hideModalDetailRegistrationForm:t,idBuilding:n,modalDetailRegistrationForm:e}=R.useContext(k),{data:c}=e,[a,r]=R.useState({isFetching:!1,code:void 0,codeLanguage:void 0}),[d,i]=R.useState({isFetching:!1,code:void 0,codeLanguage:void 0}),[f,u]=R.useState();j(a.code,a.codeLanguage);const p=l=>{d.isFetching&&(l.preventDefault(),l.returnValue="")};return R.useEffect(()=>((async()=>{r({isFetching:!0,code:void 0,codeLanguage:void 0});const l=await Pt(n,c.id);u(l.data),r({isFetching:!1,code:l.code,codeLanguage:l.codeLanguage})})(),()=>{window.removeEventListener("beforeunload",p)}),[]),[d,a,f,async()=>{i({isFetching:!0});const l=await q({idBuilding:n,idRegistrationForms:[c.id]});l.data&&Z(l.data),i({isFetching:!1})},()=>{t()}]},ne=()=>{const[t,n,e,c,a]=re();return g(tt,{visible:!0,title:s.print,loading:t.isFetching,onOk:c,onCancel:a,okText:s.print,maskClosable:!t.isFetching,disabledButtonOk:t.isFetching,disabledButtonCancel:t.isFetching,isLoadingPreview:n.isFetching,html:e||"<div />"})},se=()=>{const{setTitlePage:t,setVisibleFilterBox:n,setVisibleSearchBox:e}=R.useContext(ht),{modalPrintListRegistrationForm:c,modalDetailRegistrationForm:a}=R.useContext(k),{search:r}=Ot(),{getQueryParamsRegistration:d}=it(),{changeDataTable:i}=Rt();return R.useEffect(()=>(t(s.card_registration_form),e(!0),()=>{t(""),e(!1),n(!1)}),[]),R.useEffect(()=>{(async()=>{const{pagination:f,filter:u}=d();r&&await i({filter:{...u},limit:f.limit,page:f.page})})()},[r]),[c.isShow,a.isShow]},ce=()=>{const[t,n]=se();return z(N.Wrapper,{children:[g(Zt,{}),z(N.Container,{children:[g(N.Header,{children:g(Xt,{})}),g(N.Content,{children:g(ee,{})})]}),t?g(ae,{}):null,n?g(ne,{}):null]})},Hi=()=>g(Kt,{children:g(ce,{})});export{Hi as default};
