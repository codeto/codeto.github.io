import{j as i,u as W,a as x,F as A}from"./@emotion-63839449.js";import{P as T,D as J,a as Q}from"./index-b17d22e5.js";import{r as p}from"./react-4fd50329.js";import{P as q}from"./prop-types-1172f4d5.js";import{a9 as R,s as E,K as Z,b0 as ee,aH as te,bv as oe,I as ie,l as m,i as $,e4 as ne,M,X as L,A as G,j as re,a as K,b1 as B}from"./index-c2ded735.js";import"./react-redux-896b353b.js";import"./lodash-88fe09e6.js";import{h as ae}from"./moment-a468e1f9.js";import"./file-saver-40cf32a9.js";import{u as se}from"./useService-37d60dc0.js";import"./@firebase-43527ee1.js";import{u as V}from"./react-router-a4308f7b.js";import{B as ce,a as P,n as de,P as le}from"./antd-f9eae174.js";import{I as pe,S as Y}from"./index-43183512.js";import{u as me,a as ue}from"./xlsx-0fb7ed70.js";import"./hoist-non-react-statics-23d96a9a.js";import"./react-is-e8e5dbb3.js";import"./@babel-b64fd0f9.js";import"./stylis-79144faa.js";import"./react-router-dom-2a8f5f6d.js";import"./history-a1882333.js";import"./resolve-pathname-e210f2ac.js";import"./tiny-invariant-dd7d57d2.js";import"./account-86ffff50.js";import"./index-687ba9e6.js";import"./index-881eef42.js";import"./libphonenumber-js-0d5a9c92.js";import"./react-infinite-scroll-component-e33646cb.js";import"./classnames-4ba1ba1a.js";import"./redux-10bbab4c.js";import"./react-dom-40621ea0.js";import"./scheduler-765c72db.js";import"./@redux-saga-8bafe09b.js";import"./redux-logger-e1c9ca90.js";import"./dompurify-8e338605.js";import"./query-string-f5cca1e7.js";import"./decode-uri-component-4138e85d.js";import"./split-on-first-4f1167c8.js";import"./filter-obj-2ed190f4.js";import"./oidc-client-7da0eaf7.js";import"./firebase-878887a2.js";import"./rc-pagination-c1e6a0ac.js";import"./rc-picker-2e3d5fe5.js";import"./rc-util-0bc219f3.js";import"./rc-trigger-570b13ec.js";import"./rc-motion-ae889c42.js";import"./rc-align-e5d7b12e.js";import"./dom-align-ecb06dd6.js";import"./resize-observer-polyfill-0f9f8adb.js";import"./rc-resize-observer-b9ad4e29.js";import"./@ant-design-cba9d434.js";import"./@ctrl-fb5a5473.js";import"./rc-tabs-dfd19a56.js";import"./rc-dropdown-5378dd0a.js";import"./rc-menu-b15ebfe9.js";import"./rc-overflow-6be96612.js";import"./rc-select-564caf01.js";import"./rc-virtual-list-8a7b82a6.js";import"./rc-collapse-11b7d3c4.js";import"./shallowequal-4542d6f7.js";import"./rc-drawer-317f0b4d.js";import"./@rc-component-5a112e55.js";import"./rc-field-form-ef5549aa.js";import"./async-validator-dee29e8b.js";import"./scroll-into-view-if-needed-6b992d05.js";import"./compute-scroll-into-view-183f845a.js";import"./rc-image-e0357917.js";import"./rc-dialog-b1d1f07b.js";import"./rc-input-number-8bc068f7.js";import"./rc-rate-c64cf0d5.js";import"./rc-steps-2d1924c7.js";import"./rc-switch-b4e96de7.js";import"./rc-table-191ecc42.js";import"./rc-checkbox-018e8052.js";import"./rc-tree-67773537.js";import"./rc-tree-select-cb7eccc3.js";import"./copy-to-clipboard-64585c8c.js";import"./toggle-selection-93f4ad84.js";import"./rc-textarea-d01adcbb.js";import"./rc-input-02c2c2ba.js";import"./rc-upload-3ab0f08a.js";import"./rc-notification-d13dc43b.js";import"./rc-progress-4f1a7096.js";import"./rc-tooltip-08fa4217.js";import"./use-sync-external-store-5d1b6592.js";import"./idb-cdd1a92f.js";import"./path-to-regexp-ef8d5544.js";const F={unitName:"",serviceIds:[],monthSelected:ae()},b=p.createContext({idBuilding:0,advancePaymentGetsStatus:{isFetching:!1},setAdvancePaymentGetsStatus:()=>{},filter:{...F},setFilter:()=>{},tableData:{records:[],totalRecord:0,services:[],totalRow:{}},setTableData:()=>{},tablePagination:{current:R,limit:E},setTablePagination:()=>{},services:[],getServices:()=>{},formExport:void 0,showFormExport:()=>{},hideFormExport:()=>{},totalRow:{},setTotalRow:()=>{},getTotalRowStatus:{isFetching:!1},setGetTotalRowStatus:()=>{}}),D=({children:n})=>{var C;const{idBuilding:a}=V(),[t,r]=p.useState({isFetching:!1}),[e,l]=p.useState({...F}),[o,d]=p.useState({records:[],totalRecord:0,services:[]}),[s,u]=p.useState({}),[c,h]=p.useState({isFetching:!1}),[g,f]=p.useState({current:R,limit:E}),[y,I,S]=Z(),{services:k,getServices:_}=se(),{getPermissionByModuleCode:w}=ee(),v=((C=w(te))==null?void 0:C[oe])??!1,O={idBuilding:a,advancePaymentGetsStatus:t,setAdvancePaymentGetsStatus:r,filter:e,setFilter:l,tableData:o,setTableData:d,tablePagination:g,setTablePagination:f,services:k,getServices:_,formExport:y,showFormExport:I,hideFormExport:S,accountsReceivableReportPermissionExport:v,totalRow:s,setTotalRow:u,getTotalRowStatus:c,setGetTotalRowStatus:h};return i(b.Provider,{value:O,children:n})};D.propTypes={children:q.node};D.defaultProps={children:i("div",{})};const he=D,ge=()=>{const{tableData:n,showFormExport:a,accountsReceivableReportPermissionExport:t}=p.useContext(b),r=()=>{a()};return[n.totalRecord,r,t]},fe=()=>{const[n,a,t]=ge(),r=[t?i(ce,{ghost:!0,type:"primary",onClick:()=>a(),icon:i(ie,{name:"icon-download-outlined"}),css:e=>({marginRight:e.margin.xs}),children:m.export},"export"):null].filter(Boolean);return i(T.ActionBox,{actions:r,total:n})},j=`${re}/report-v2`,z=`${j}/paid-before`,xe=`${j}/paid-before/total`,ye=`${z}/export`;async function Pe({filter:n,idBuilding:a,page:t,limit:r}){return await $({type:G,payload:{apiUrl:z,method:M.GET,options:{headers:{[L]:a},params:{...n,page:t,limit:r}}}})}async function Ie(n,a){return await $({type:G,payload:{apiUrl:xe,method:M.GET,options:{headers:{[L]:a},params:{...n}}}})}async function Te({idBuilding:n,filter:a}){return await $({type:ne,payload:{apiUrl:ye,method:M.GET,options:{params:{...a},headers:{[L]:n}}}})}const be=(n,a)=>{const{id:t,name:r}=n,e={id:t,unitName:r??"",key:`key.${t}`};return a.forEach(l=>{const o=l.id,d=`paidBeForeInOpening-${o}`;e[d]=n[d]||0;const s=`depositInPeriod-${o}`;e[s]=n[s]||0;const u=`deductInPeriod-${o}`;e[u]=n[u]||0;const c=`paidBeForeInClosing-${o}`;e[c]=n[c]||0}),e},X=async({filter:n,pagination:a,idBuilding:t})=>{var g,f;const{current:r,limit:e}=a,{unitName:l,serviceIds:o,monthSelected:d}=n,s=await Pe({filter:{unitName:l||void 0,serviceIds:o!=null&&o.length?o:void 0,monthSelected:d.format("YYYYMM")},idBuilding:t,limit:e,page:r}),u=((g=s==null?void 0:s.data)==null?void 0:g.services)??[];return u.push({id:"total",name:m.label.total1.toUpperCase()}),[(((f=s==null?void 0:s.data)==null?void 0:f.units)??[]).map(y=>be(y,u)),u,s.totalRecord]},we=(n,a)=>{const t={id:"total",unitName:m.total,key:"key.total"};return a.forEach(r=>{const e=r.id,l=`paidBeForeInOpening-${e}`;t[l]=n[l]||0;const o=`depositInPeriod-${e}`;t[o]=n[o]||0;const d=`deductInPeriod-${e}`;t[d]=n[d]||0;const s=`paidBeForeInClosing-${e}`;t[s]=n[s]||0}),t},H=async(n,a,t)=>{try{const{unitName:r,serviceIds:e,monthSelected:l}=n,o={unitName:r||void 0,serviceIds:e!=null&&e.length?e:void 0,monthSelected:l.format("YYYYMM")},d=await Ie(o,a);return we((d==null?void 0:d.data)??{},t)}catch{return{}}},U=()=>{const{idBuilding:n,setTablePagination:a,setTableData:t,setAdvancePaymentGetsStatus:r,setTotalRow:e,setGetTotalRowStatus:l}=p.useContext(b);return{changeDataTable:async({filter:s,pagination:u})=>{const{current:c,limit:h}=u;r({isFetching:!0,code:void 0,codeLanguage:void 0}),a({current:c,limit:h});const[g,f,y]=await X({filter:s,idBuilding:n,pagination:u});return t({records:g,totalRecord:y,services:f}),r({isFetching:!1,code:void 0,codeLanguage:void 0}),{services:f}},changeTotalRow:async(s,u)=>{l({isFetching:!0});const c=await H(s,n,u);c&&Object.keys(c).length&&e(c),l({isFetching:!1})}}},Fe=()=>{const{setFilter:n,services:a,getTotalRowStatus:t,advancePaymentGetsStatus:r}=p.useContext(b),{changeDataTable:e,changeTotalRow:l}=U(),o=async s=>{n(s);const{services:u}=await e({filter:{...s},pagination:{current:R,limit:E}});l({...s},u)},d=p.useMemo(()=>!!(r!=null&&r.isFetching||t.isFetching),[r.isFetching,t.isFetching]);return[o,a,d]},Re=()=>{const[n,a,t]=Fe(),r=p.useMemo(()=>[{label:m.unit,key:"unitName",component:i(pe,{placeholder:m.unit,disabled:t}),visible:!0},{label:m.service,key:"serviceIds",component:i(Y,{placeholder:m.service,fluid:"true",getPopupContainer:e=>e.parentNode,mode:"multiple",disabled:t,children:a.map(e=>i(Y.Option,{value:e.id,children:e.name},e.id))}),visible:!0},{label:m.month,key:"monthSelected",component:i(J,{disabled:t,placeholder:m.month,fluid:"true",picker:"month",format:"MM/YYYY",allowClear:!1,getPopupContainer:e=>e.parentNode}),visible:!0,fixed:!0}],[a,t]);return i(T.FilterBox,{defaultFilter:F,filters:r,onSearch:n})},Ee=()=>{const{filter:n,advancePaymentGetsStatus:a,tableData:t,tablePagination:r,totalRow:e,getTotalRowStatus:l}=p.useContext(b),{layoutScrollRef:o}=p.useContext(K),{changeDataTable:d}=U(),s=W(),u=async(g,f)=>{r.current!==g?await d({filter:{...n},pagination:{current:g,limit:r.limit}}):r.limit!==f&&await d({filter:{...n},pagination:{current:r.current,limit:f}})},c=p.useMemo(()=>({defaultPageSize:E,defaultCurrent:R,pageSize:r.limit,current:r.current,total:t.totalRecord+Math.ceil(t.totalRecord/r.limit),showQuickJumper:!0,showSizeChanger:!0,onChange:u}),[r,t.totalRecord]),h={offsetScroll:s.offsetScrollX,getContainer:()=>o.current};return{dataSource:t.records,totalRow:e,loadingTotalRow:l.isFetching,loading:a.isFetching,pagination:c,sticky:h,services:t.services,filter:n}},Se=()=>{const{dataSource:n,loading:a,pagination:t,sticky:r,services:e,totalRow:l,loadingTotalRow:o}=Ee(),d=p.useMemo(()=>[{key:"unit",dataIndex:"",title:m.unit,width:150,fixed:"left",children:[{key:"",dataIndex:"",width:150,title:"",fixed:"left",children:[{key:"total",dataIndex:"unitName",width:150,title:m.total,fixed:"left"}]}]},...e.map(c=>({key:c.id,dataIndex:c.id,align:"center",title:c.name,children:[{key:"opening_paid_before",dataIndex:"",title:m.opening_paid_before,width:150,align:"center",children:[{key:`paidBeForeInOpening-${c.id}`,dataIndex:`paidBeForeInOpening-${c.id}`,title:o?i(B,{isLoading:!0,zIndex:1}):i(P.NegativeNumber,{children:l[`paidBeForeInOpening-${c.id}`]||0}),width:150,align:"right",render:h=>i(P.NegativeNumber,{children:h})}]},{key:"deposit_in_period",dataIndex:"",title:m.deposit_in_period,width:150,align:"center",children:[{key:`depositInPeriod-${c.id}`,dataIndex:`depositInPeriod-${c.id}`,title:o?i(B,{isLoading:!0,zIndex:1}):i(P.NegativeNumber,{children:l[`depositInPeriod-${c.id}`]||0}),width:150,align:"right",render:h=>i(P.NegativeNumber,{children:h})}]},{key:"deduct_in_period",dataIndex:"",title:m.deduct_in_period,width:150,align:"center",children:[{key:`deductInPeriod-${c.id}`,dataIndex:`deductInPeriod-${c.id}`,title:o?i(B,{isLoading:!0,zIndex:1}):i(P.NegativeNumber,{children:l[`deductInPeriod-${c.id}`]||0}),width:150,align:"right",render:h=>i(P.NegativeNumber,{children:h})}]},{key:"closing_paid_before",dataIndex:"",title:m.closing_paid_before,width:150,align:"center",children:[{key:`paidBeForeInClosing-${c.id}`,dataIndex:`paidBeForeInClosing-${c.id}`,title:o?i(B,{isLoading:!0,zIndex:1}):i(P.NegativeNumber,{children:l[`paidBeForeInClosing-${c.id}`]||0}),width:150,align:"right",render:h=>i(P.NegativeNumber,{children:h})}]}]}))],[e,l,o]),s=p.useMemo(()=>{let u=0;return d.forEach(c=>{c.width&&(u+=c.width)}),{scrollToFirstRowOnChange:!0,x:u}},[d]);return i(T.Table,{columns:d,dataSource:n,loading:a,pagination:t,sticky:r,scroll:s})},N=100,_e=()=>{const{idBuilding:n}=V(),{hideFormExport:a,tableData:t,filter:r}=p.useContext(b),[e,l]=p.useState({isFetching:!1}),[o,d]=p.useState(0),[s,u]=p.useState({}),[c,h]=p.useState([]),[g,f]=p.useState(!1);return p.useEffect(()=>{(async()=>{l({isFetching:!0}),d(0);const y=[];let I=1;const S=t.totalRecord+Math.ceil(t.totalRecord/N),k=Math.floor(S/N)+1;let _=0;const w=await H(r,n,t.services);for(w&&Object.keys(w).length&&u(w),await Te({idBuilding:n,filter:{...r}});I<=k;){const[v]=await X({filter:r,idBuilding:n,pagination:{current:I,limit:N}});if(v.length>0){v.forEach(C=>{y.push({...C})}),I+=1;const O=N/S*100;_+=O,d(Math.round(_))}else break}h(y),f(!0)})()},[]),p.useEffect(()=>{g&&setTimeout(()=>{const y=document.getElementById("tableExcel"),I=me.table_to_book(y);ue(I,"bao-cao-thu-truoc.xlsx"),l({isFetching:!1}),de.success({message:m.success,description:m.export_data_success}),a()},3e3)},[g]),[e.isFetching,o,t.services,c,s]},ve=()=>{const[n,a,t,r,e]=_e(),l=p.useMemo(()=>x("table",{id:"tableExcel",hidden:!0,children:[x("thead",{children:[x("tr",{children:[i("td",{rowSpan:2,style:{textAlign:"center"},children:"#"}),i("td",{rowSpan:2,children:m.unit}),t.map((o,d)=>i("td",{colSpan:4,t:"s",children:o.name},d))]}),i("tr",{children:t.map(()=>x(A,{children:[i("td",{children:m.opening_paid_before}),i("td",{children:m.deposit_in_period}),i("td",{children:m.deduct_in_period}),i("td",{children:m.closing_paid_before})]}))})]}),x("tbody",{children:[e&&Object.keys(e).length?x("tr",{children:[i("td",{colSpan:2,children:m.total}),t.map(o=>x(A,{children:[i("td",{children:(e==null?void 0:e[`paidBeForeInOpening-${o.id}`])??0}),i("td",{children:(e==null?void 0:e[`depositInPeriod-${o.id}`])??0}),i("td",{children:(e==null?void 0:e[`deductInPeriod-${o.id}`])??0}),i("td",{children:(e==null?void 0:e[`paidBeForeInClosing-${o.id}`])??0})]}))]},"total"):null,r.map((o,d)=>x("tr",{children:[i("td",{children:d+1}),i("td",{t:"s",children:o.unitName}),t.map(s=>x(A,{children:[i("td",{children:(o==null?void 0:o[`paidBeForeInOpening-${s.id}`])??0}),i("td",{children:(o==null?void 0:o[`depositInPeriod-${s.id}`])??0}),i("td",{children:(o==null?void 0:o[`deductInPeriod-${s.id}`])??0}),i("td",{children:(o==null?void 0:o[`paidBeForeInClosing-${s.id}`])??0})]}))]},o.key))]})]}),[r,t,e]);return x(Q,{open:!0,okText:m.export,cancelText:m.cancel,okButtonProps:{loading:n,disabled:n},footer:null,closable:!1,children:[i(le,{strokeColor:{from:"#108ee9",to:"#87d068"},percent:a,status:"active"}),l]})},Ce=()=>{const{getServices:n,idBuilding:a,formExport:t}=p.useContext(b),{setVisibleFilterBox:r,setTitlePage:e}=p.useContext(K),{changeDataTable:l,changeTotalRow:o}=U();return p.useEffect(()=>(r(!0),e(m.advance_payment),(async()=>{const[{services:d}]=await Promise.all([l({filter:{...F},pagination:{current:R,limit:E}}),n({idBuilding:a})]);o({...F},d)})(),()=>{r(!1),e("")}),[]),{isShowFormExport:t.isShow}},Be=()=>{const{isShowFormExport:n}=Ce();return x(T.Wrapper,{children:[i(Re,{}),x(T.Container,{children:[i(T.Header,{children:i(fe,{})}),i(T.Content,{children:i(Se,{})})]}),n&&i(ve,{})]})},mo=()=>i(he,{children:i(Be,{})});export{mo as default};