import{j as t,u as te,a as v,F as Z,c as ve,b as Ee}from"./@emotion-63839449.js";import{T as Se,r as _e,j as Ve,b as je,d as Ue,D as we,P as De,k as Fe,n as Ce,a as Me}from"./index-b17d22e5.js";import{F as M,u as ke}from"./index-687ba9e6.js";import{F as Ye}from"./index-a492c353.js";import{r as y}from"./react-4fd50329.js";import{P as be}from"./prop-types-1172f4d5.js";import{b0 as We,fG as ze,K as Ae,aC as He,at as Ke,l as d,c6 as j,fH as ne,g as $e,f4 as qe,f1 as Ge,eZ as Xe,ep as Je,a9 as Qe,s as Ze,a1 as Re,dx as et,I as tt,eR as fe,eS as ge,eC as le,cr as Te,a as Le,E as at,S as nt}from"./index-c2ded735.js";import"./react-redux-896b353b.js";import{l as Be}from"./lodash-88fe09e6.js";import{h as K}from"./moment-a468e1f9.js";import"./file-saver-40cf32a9.js";import"./@firebase-43527ee1.js";import{u as st}from"./react-router-a4308f7b.js";import{B as se}from"./index-881eef42.js";import{S as G}from"./index-43183512.js";import{T as it,B as ye,N as xe,R as ie,b as B,S as rt,k as Ie,n as de,a as W,f as pe,y as ot}from"./antd-f9eae174.js";import{o as dt,q as ct,r as lt}from"./bill-d9d0423c.js";import{b as ut}from"./buildDetailBills-28b155ef.js";import{a as mt,g as ht,p as pt}from"./receipt-01489128.js";import"./hoist-non-react-statics-23d96a9a.js";import"./react-is-e8e5dbb3.js";import"./@babel-b64fd0f9.js";import"./stylis-79144faa.js";import"./react-router-dom-2a8f5f6d.js";import"./history-a1882333.js";import"./resolve-pathname-e210f2ac.js";import"./tiny-invariant-dd7d57d2.js";import"./account-86ffff50.js";import"./libphonenumber-js-0d5a9c92.js";import"./react-infinite-scroll-component-e33646cb.js";import"./index-6a3b7dc6.js";import"./index-f7aef2cc.js";import"./printHtml-6274ec45.js";import"./classnames-4ba1ba1a.js";import"./redux-10bbab4c.js";import"./react-dom-40621ea0.js";import"./scheduler-765c72db.js";import"./@redux-saga-8bafe09b.js";import"./redux-logger-e1c9ca90.js";import"./dompurify-8e338605.js";import"./query-string-f5cca1e7.js";import"./decode-uri-component-4138e85d.js";import"./split-on-first-4f1167c8.js";import"./filter-obj-2ed190f4.js";import"./oidc-client-7da0eaf7.js";import"./firebase-878887a2.js";import"./rc-pagination-c1e6a0ac.js";import"./rc-picker-2e3d5fe5.js";import"./rc-util-0bc219f3.js";import"./rc-trigger-570b13ec.js";import"./rc-motion-ae889c42.js";import"./rc-align-e5d7b12e.js";import"./dom-align-ecb06dd6.js";import"./resize-observer-polyfill-0f9f8adb.js";import"./rc-resize-observer-b9ad4e29.js";import"./@ant-design-cba9d434.js";import"./@ctrl-fb5a5473.js";import"./rc-tabs-dfd19a56.js";import"./rc-dropdown-5378dd0a.js";import"./rc-menu-b15ebfe9.js";import"./rc-overflow-6be96612.js";import"./rc-select-564caf01.js";import"./rc-virtual-list-8a7b82a6.js";import"./rc-collapse-11b7d3c4.js";import"./shallowequal-4542d6f7.js";import"./rc-drawer-317f0b4d.js";import"./@rc-component-5a112e55.js";import"./rc-field-form-ef5549aa.js";import"./async-validator-dee29e8b.js";import"./scroll-into-view-if-needed-6b992d05.js";import"./compute-scroll-into-view-183f845a.js";import"./rc-image-e0357917.js";import"./rc-dialog-b1d1f07b.js";import"./rc-input-number-8bc068f7.js";import"./rc-rate-c64cf0d5.js";import"./rc-steps-2d1924c7.js";import"./rc-switch-b4e96de7.js";import"./rc-table-191ecc42.js";import"./rc-checkbox-018e8052.js";import"./rc-tree-67773537.js";import"./rc-tree-select-cb7eccc3.js";import"./copy-to-clipboard-64585c8c.js";import"./toggle-selection-93f4ad84.js";import"./rc-textarea-d01adcbb.js";import"./rc-input-02c2c2ba.js";import"./rc-upload-3ab0f08a.js";import"./rc-notification-d13dc43b.js";import"./rc-progress-4f1a7096.js";import"./rc-tooltip-08fa4217.js";import"./use-sync-external-store-5d1b6592.js";import"./idb-cdd1a92f.js";import"./path-to-regexp-ef8d5544.js";const J=y.createContext({idBuilding:0,isShowActionPayment:!1,formPayment:void 0,formInvoice:void 0,apartmentSelected:void 0,setApartmentSelected:()=>{},tableSelection:{selectedRowKeys:[],selectedRows:[]},setTableSelection:()=>{},listPaymentMethodWeb:[],setListPaymentMethodWeb:()=>{},summary:{receivables:0,total:0,adjustmentDown:0,paidBefore:0,actuallyPaid:0,debt:0},setSummary:()=>{},listBill:[],setListBill:()=>{},adjustmentDownByService:{},setAdjustmentDownByService:()=>{},unitAccountByService:{},setUnitAccountByService:()=>{},modalConfirmPayment:void 0,showModalConfirmPayment:()=>{},hideModalConfirmPayment:()=>{},isHaveAdjustmentDown:!1,isHaveUnitAccount:!1,listServiceForTransfer:[],setListServiceForTransfer:()=>{},isResetApartmentList:!1,setIsResetApartmentList:()=>{},formReceipt:void 0,showFormReceipt:()=>{},hideFormReceipt:()=>{},confirmPaymentStatus:{isFetching:!1,code:void 0,codeLanguage:void 0},setConfirmPaymentStatus:()=>{},totalPaidBefore:0,setTotalPaidBefore:()=>{},isDisplayUnitAccountList:!1,isPaymentVNPAYSPOS:!1,setIsPaymentVNPAYSPOS:()=>{},isAllBillUsePaidBefore:!1}),Pe=({children:e})=>{var oe;const{idBuilding:n}=st(),{getPermissionByModuleCode:a}=We(),[r]=M.useForm(),[s,p]=y.useState(),[f,u]=y.useState(ze),[c,x]=y.useState({}),[S,P]=y.useState({}),[g,w]=y.useState([]),[_,h]=y.useState(!1),[m,D]=y.useState(!1),[N,o]=y.useState({isFetching:!1,code:void 0,codeLanguage:void 0}),[i,l]=y.useState([]),[F,T]=y.useState(0),[I,E]=y.useState({receivables:0,total:0,adjustmentDown:0,paidBefore:0,debt:0,actuallyPaid:0}),[L,Y]=y.useState({selectedRowKeys:[],selectedRows:[]}),[V,C,A]=Ae(),[U,b,$]=Ae(),z=g==null?void 0:g.every(O=>!S[O==null?void 0:O.service.id]||S[O==null?void 0:O.service.id]&&(O==null?void 0:O.adjustmentDown)&&(O==null?void 0:O.actuallyPaid)===0),k=y.useMemo(()=>{var O;return!!((O=Object.values(c))!=null&&O.length)},[c]),q=y.useMemo(()=>{var O;return!!((O=Object.values(S))!=null&&O.length)&&!z},[S]),Q=y.useMemo(()=>{var O,H;return!!((H=(O=Object.values(S))==null?void 0:O.filter(ee=>(ee==null?void 0:ee.total)>0))!=null&&H.length)},[S]),re=((oe=a(He))==null?void 0:oe[Ke])??!1,me=y.useMemo(()=>{var H;let O=!!((H=L==null?void 0:L.selectedRows)!=null&&H.length);return L.selectedRows.forEach(ee=>{ee.paidBefore<=0&&O&&(O=!1)}),O},[L.selectedRows]),he={idBuilding:n,formPayment:r,isShowActionPayment:re,isPaymentVNPAYSPOS:m,setIsPaymentVNPAYSPOS:D,isAllBillUsePaidBefore:me,apartmentSelected:s,setApartmentSelected:p,tableSelection:L,setTableSelection:Y,listPaymentMethodWeb:f,setListPaymentMethodWeb:u,summary:I,setSummary:E,listBill:g,setListBill:w,adjustmentDownByService:c,setAdjustmentDownByService:x,unitAccountByService:S,setUnitAccountByService:P,modalConfirmPayment:V,showModalConfirmPayment:C,hideModalConfirmPayment:A,formReceipt:U,showFormReceipt:b,hideFormReceipt:$,isHaveAdjustmentDown:k,isHaveUnitAccount:q,listServiceForTransfer:i,setListServiceForTransfer:l,isResetApartmentList:_,setIsResetApartmentList:h,confirmPaymentStatus:N,setConfirmPaymentStatus:o,totalPaidBefore:F,setTotalPaidBefore:T,isDisplayUnitAccountList:Q};return t(J.Provider,{value:he,children:e})};Pe.propTypes={children:be.node};Pe.defaultProps={children:null};const ft=Pe,gt=()=>{const{adjustmentDownByService:e}=y.useContext(J);return{dataSource:y.useMemo(()=>Object.values(e),[e])}},yt=()=>{const{dataSource:e}=gt(),n=te(),a=[{title:`${d.reduce} (${d.adjust_down})`,key:"reduce",align:"center",dataIndex:"reduce",width:150,children:[{title:d.service,key:"service",dataIndex:"service",width:150,render:(r,s)=>{var p,f;return(p=s==null?void 0:s.adjustmentDownBills)!=null&&p.length?t(it,{title:(f=s==null?void 0:s.adjustmentDownBills)==null?void 0:f.map((u,c)=>v("div",{children:[c+1,". ",u]},c)),placement:"right",children:t("span",{style:{color:n.color.primary,cursor:"pointer"},children:r})}):t(Z,{children:r})}},{title:d.currently_have,key:"total",dataIndex:"total",width:150,align:"right",render:r=>t("span",{children:j(r)})},{title:d.label.rest,key:"remain",dataIndex:"remain",width:150,align:"right",render:r=>t("span",{children:r>0?j(r):0})}]}];return t(Se,{columns:a,bordered:!0,dataSource:e,pagination:!1,scroll:{scrollToFirstRowOnChange:!0,x:a.reduce((r,s)=>r+s.width,0)}})},vt=()=>{const{unitAccountByService:e}=y.useContext(J);return{dataSource:y.useMemo(()=>Object.values(e),[e])}},St=()=>{const{dataSource:e}=vt(),n=[{title:`${d.service_prepayment}`,key:"servicePrepayment",dataIndex:"servicePrepayment",align:"center",width:150,children:[{title:d.service,key:"service",dataIndex:"service",width:150},{title:d.currently_have,key:"total",dataIndex:"total",width:150,align:"right",render:a=>t("span",{children:j(a)})},{title:d.label.rest,key:"remain",dataIndex:"remain",width:150,align:"right",render:a=>t("span",{children:a>0?j(a):0})}]}];return t(Se,{columns:n,bordered:!0,dataSource:e,pagination:!1,scroll:{scrollToFirstRowOnChange:!0,x:n.reduce((a,r)=>a+r.width,0)}})},ue=()=>{const{setSummary:e,setListBill:n,setAdjustmentDownByService:a,setTableSelection:r,setUnitAccountByService:s}=y.useContext(J);return{updateSummaryInfo:({billsSelected:f=[],billsCurrent:u=[],adjustmentDownByService:c={},unitAccountByService:x={},isRefresh:S=!1,isPaymentVNPAYSPOS:P=!1})=>{const g={receivables:0,total:0,adjustmentDown:0,paidBefore:0,debt:0,actuallyPaid:0},w=[],_={...c},h={...x};(S||P)&&(Object.keys(_).forEach(o=>{_[o].remain=_[o].total}),Object.keys(h).forEach(o=>{h[o].remain=h[o].total}));const m={},D=f.map(o=>{var l,F;const i={...o};if((S||P)&&(i.actuallyPaid=i.total,i.adjustmentDown=0,i.paidBefore=0,i.isDebt=!1),(l=_==null?void 0:_[o==null?void 0:o.service.id])!=null&&l.remain){const T=_[o.service.id].remain,I=T>i.total?i.total:T;_[i.service.id].remain-=I,i.adjustmentDown=I,i.actuallyPaid=i.total-i.adjustmentDown}if((F=h==null?void 0:h[i==null?void 0:i.service.id])!=null&&F.remain&&!P){const T=h[i.service.id].remain,I=T>i.total-i.adjustmentDown?i.total-i.adjustmentDown:T;h[o.service.id].remain-=I,i.paidBefore=I,i.actuallyPaid-=i.paidBefore}return g.receivables+=i.total,g.adjustmentDown+=i.adjustmentDown,g.paidBefore+=i.paidBefore,g.total+=i.actuallyPaid,g.actuallyPaid+=i.actuallyPaid,(o==null?void 0:o.status)!==ne&&w.push(i.id),m[i.id]=i,i}),N=u.map(o=>{var i,l,F,T,I;return{...o,adjustmentDown:((i=m==null?void 0:m[o==null?void 0:o.id])==null?void 0:i.adjustmentDown)||0,paidBefore:((l=m==null?void 0:m[o==null?void 0:o.id])==null?void 0:l.paidBefore)||0,actuallyPaid:((F=m==null?void 0:m[o==null?void 0:o.id])==null?void 0:F.actuallyPaid)||0,isDebt:((T=m==null?void 0:m[o==null?void 0:o.id])==null?void 0:T.isDebt)||!1,isDisabled:!((I=m==null?void 0:m[o==null?void 0:o.id])!=null&&I.paidBefore)}});g.debt=g.total?g.total-g.actuallyPaid:0,r({selectedRowKeys:w,selectedRows:D==null?void 0:D.filter(o=>(o==null?void 0:o.status)!==ne)}),e(g),n(N),a(_),s(h)}}},Ne=e=>{var n,a,r,s,p,f;return{id:e==null?void 0:e.id,key:e==null?void 0:e.id,type:(e==null?void 0:e.type)??"",content:(p=ut({createdFor:e.createdFor,serviceName:(n=e==null?void 0:e.service)==null?void 0:n.name,contractTemplateName:(r=(a=e==null?void 0:e.contract)==null?void 0:a.contractTemplate)==null?void 0:r.name,totalNumberUse:e.totalNumberUse,parentId:e.parentId,registrationPlate:(s=e==null?void 0:e.contract)==null?void 0:s.registrationPlate,type:e.type,adjustmentCreatedFor:e==null?void 0:e.adjustmentCreatedFor}))==null?void 0:p.content,service:{id:e==null?void 0:e.serviceId,name:((f=e==null?void 0:e.service)==null?void 0:f.name)??""},createdFor:e==null?void 0:e.createdFor,adjustmentCreatedFor:e==null?void 0:e.adjustmentCreatedFor,incurredCreatedFor:e==null?void 0:e.incurredCreatedFor,totalPayment:+((e==null?void 0:e.totalPayment)??0),total:((e==null?void 0:e.totalPayment)??0)-((e==null?void 0:e.netRevenue)??0),disabled:(e==null?void 0:e.status)===ne,adjustmentDown:0,paidBefore:0,actuallyPaid:((e==null?void 0:e.totalPayment)??0)-((e==null?void 0:e.netRevenue)??0),isDebt:!1,parentId:e.parentId,status:e==null?void 0:e.status}},Pt=async(e,n)=>{try{const{code:a,codeLanguage:r,data:s}=await dt(e,n),p=s.map(u=>Ne(u)),f={};return p==null||p.forEach(u=>{var S,P;const c=((S=u.service)==null?void 0:S.name)||"",x=((P=u.service)==null?void 0:P.id)||"";f[x]||(f[x]={key:x,service:c,total:0,remain:0,adjustmentDownBills:[]}),f[x].adjustmentDownBills.push(`${u==null?void 0:u.content} (${j(Math.abs(u==null?void 0:u.total))} VND)`),f[x].total+=Math.abs(Number(u==null?void 0:u.total)),f[x].remain+=Math.abs(Number(u==null?void 0:u.total))}),{code:a,codeLanguage:r,data:f}}catch({code:a,codeLanguage:r}){return{code:a,codeLanguage:r,data:[]}}},wt=async(e,n)=>{var a,r;try{const{code:s,codeLanguage:p,data:f}=await ct(e,n),{services:u=[],units:c=[]}=f;let x=0;const S={};return(r=(a=c==null?void 0:c[0])==null?void 0:a.unitAccounts)==null||r.forEach(P=>{var _;const g=((_=u.find(h=>h.id===P.serviceId))==null?void 0:_.name)||"",w=P.serviceId||"";S[w]||(S[w]={key:w,service:g,total:0,remain:0}),S[w].total+=Number(P.balance),S[w].remain+=Number(P.balance),x+=Number(P==null?void 0:P.balance)}),{code:s,codeLanguage:p,data:S,services:u,totalUnitAccount:x}}catch({code:s,codeLanguage:p}){return{code:s,codeLanguage:p,data:[]}}},Ct=$e(),At=e=>({id:e==null?void 0:e.code,name:Ct!=="en"?e==null?void 0:e.name:e==null?void 0:e.enName,paymentMethodId:(e==null?void 0:e.id)??""}),Bt=async({idBuilding:e})=>{try{const{code:n,language:a,data:r}=await mt({idBuilding:e});return{code:n,language:a,data:r.map(s=>At(s))}}catch({code:n,codeLanguage:a}){return{code:n,codeLanguage:a,data:[]}}},xt=e=>({id:e==null?void 0:e.id,name:(e==null?void 0:e.fullName)??"",role:(e==null?void 0:e.role)??""}),It=e=>{var n;return{id:e==null?void 0:e.id,name:(e==null?void 0:e.name)??"",accountBalance:((n=e==null?void 0:e.account)==null?void 0:n.balance)??0,listBill:((e==null?void 0:e.bills)??[]).map(a=>Ne(a)).filter(a=>a.type!==qe).sort((a,r)=>a.incurredCreatedFor<r.incurredCreatedFor?-1:a.incurredCreatedFor>r.incurredCreatedFor?1:K(a.createdAt).isAfter(r.createdAt)?-1:K(a.createdAt).isBefore(r.createdAt)?1:0),listResident:((e==null?void 0:e.residents)??[]).map(a=>xt(a))}},_t=async(e,n)=>{try{const{name:a}=n,{code:r,codeLanguage:s,data:p}=await lt({filterObject:{state:[Ge,Xe],status:[Je,ne],unitName:a||void 0},page:Qe,limit:Ze,idBuilding:e});return{code:r,codeLanguage:s,data:p.map(f=>It(f))}}catch({code:a,codeLanguage:r}){return{code:a,codeLanguage:r,data:[]}}},Dt=()=>{const{idBuilding:e,formPayment:n,apartmentSelected:a,setApartmentSelected:r,listPaymentMethodWeb:s,setListPaymentMethodWeb:p,setListServiceForTransfer:f,isResetApartmentList:u,setIsResetApartmentList:c,summary:x,isDisplayUnitAccountList:S,isHaveAdjustmentDown:P,setTotalPaidBefore:g,totalPaidBefore:w,isPaymentVNPAYSPOS:_}=y.useContext(J),{fundData:h}=_e(),{labelsAccountingData:m}=Ve(),{isUserCs:D}=Re(),{updateSummaryInfo:N}=ue(),[o,i]=y.useState({isFetching:!1,records:[]}),l=async I=>{i({...o,isFetching:!0});const E=await _t(e,{name:I});i({records:E.data,isFetching:!1})},F=I=>{n.setFieldsValue({payer:I.value,payerId:I.key})},T=async I=>{var L,Y;const E=o.records.find(V=>V.id===I);if(E){const{data:V}=await Pt(e,I),{data:C,services:A,totalUnitAccount:U}=await wt(e,I);f(A??[]),g(U||0);const{listResident:b=[]}=E;let $="",z=null;if(b&&b.length){const k=b.find(q=>q.role===et);k?($=D?"***":(k==null?void 0:k.name)??"",z=(k==null?void 0:k.id)??""):($=D?"***":((L=b[0])==null?void 0:L.name)??"",z=((Y=b[0])==null?void 0:Y.id)??"")}N({billsSelected:E.listBill,billsCurrent:E.listBill,adjustmentDownByService:V,unitAccountByService:C,isPaymentVNPAYSPOS:_}),n.setFieldsValue({payer:$,payerId:z}),r({...E})}};return y.useEffect(()=>{(async()=>{const{data:I}=await Bt({idBuilding:e});p([...s,...I])})()},[]),y.useEffect(()=>{(async()=>u&&(l(""),c(!1)))()},[u]),y.useEffect(()=>{(async()=>l(""))()},[]),{listApartment:o.records,loadingListApartment:o.isFetching,listLabel:m,listFund:h,listResident:(a==null?void 0:a.listResident)??[],listPaymentMethodWeb:s,isUserCs:D,handleSearchApartment:l,handleSelectApartment:T,handleSelectPayer:F,summary:x,isDisplayUnitAccountList:S,isHaveAdjustmentDown:P,totalPaidBefore:w}},Ft=ve(G,{target:"e17j5nwj0"})({name:"1l3htcl",styles:".ant-select-selection-item{width:0;}"});var Rt={name:"192s9p1",styles:"display:flex;flex-direction:row;justify-content:center;align-items:center"};const Tt=()=>{const{listApartment:e,loadingListApartment:n,listLabel:a,listFund:r,listResident:s,listPaymentMethodWeb:p,isUserCs:f,handleSearchApartment:u,handleSelectApartment:c,handleSelectPayer:x,summary:S,isDisplayUnitAccountList:P,isHaveAdjustmentDown:g,totalPaidBefore:w}=Dt(),_=te();return v(De.Container,{children:[v(se.Header,{style:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"},size:"small",borderBottom:!0,children:[v("div",{children:[t(tt,{style:{fontSize:_.iconSize,marginRight:_.margin.xs},name:"icon-apartment-outlined"}),t(je,{children:d.payment_info})]}),v("div",{children:[g?t(xe,{trigger:"hover",content:t("div",{style:{width:"400px",maxHeight:"300px",overflowY:"scroll"},children:t(yt,{})}),placement:"bottomRight",children:v(ye,{size:"small",children:[d.reduce,":",t("small",{children:t("b",{style:{color:"rgb(52, 135, 203)",marginLeft:5},children:j(S.adjustmentDown)})})]})}):null,P?t(xe,{trigger:"hover",content:t("div",{style:{width:"400px",maxHeight:"300px",overflowY:"scroll"},children:t(St,{})}),placement:"bottomRight",children:v(ye,{size:"small",style:{marginLeft:4},children:[d.label.paid_before,":",t("small",{children:t("b",{style:{color:"rgb(52, 135, 203)",marginLeft:5},children:j(w)})})]})}):null]})]}),t(se.Content,{children:v(ie,{gutter:[8,0],children:[t(B,{span:"12",children:t(M.Item,{name:"apartment",label:d.label.apartment,rules:[{required:!0}],children:t(G,{allowClear:!0,showSearch:!0,placeholder:d.select_apartment,filterOption:!1,loading:n,onClear:u,onSearch:Ue(u),fluid:"true",dropdownRender:h=>n?t("div",{css:Rt,children:t(rt,{})}):h,onChange:c,children:e==null?void 0:e.map(({id:h,name:m})=>t(G.Option,{value:h,children:m},h))})})}),t(B,{span:"12",children:t(M.Item,{name:"payer",label:d.label.payer,rules:[{required:!0},({getFieldValue:h})=>({validator(m,D){if(!D)return Promise.resolve();const N=h("method");return[fe,ge].includes(N)&&!(s!=null&&s.length)?Promise.reject(new Error(d.unable_to_pay_because_the_apartment_has_no_residents)):Promise.resolve()}})],children:t(Ie,{filterOption:(h,m)=>{var D,N;return((N=(D=m==null?void 0:m.value)==null?void 0:D.toUpperCase())==null?void 0:N.indexOf(h.toUpperCase()))!==-1},placeholder:d.payer,onSelect:(h,m)=>{x(m)},style:{width:"100%"},children:s.map(({id:h,name:m})=>t(Ie.Option,{value:m,children:f?"***":m},`${h}`))})})}),t(M.Item,{name:"payerId"}),t(B,{span:5,children:t(M.Item,{noStyle:!0,shouldUpdate:(h,m)=>h.method!==m.method,children:({getFieldValue:h})=>t(M.Item,{name:"paymentAt",label:d.payment_at,rules:[{required:!0}],disabled:h("method")===le,children:t(we,{fluid:"true",format:"DD/MM/YYYY",disabledDate:m=>m.isAfter(K()),allowClear:!1})})})}),t(B,{span:5,children:t(M.Item,{name:"voucherDay",label:d.label.voucher_day,children:t(we,{fluid:"true",format:"DD/MM/YYYY"})})}),t(B,{span:4,children:t(M.Item,{name:"method",label:d.label.method,rules:[{required:!0}],children:t(G,{fluid:"true",placeholder:d.label.choose_method,children:(p==null?void 0:p.map(h=>t(G.Option,{value:h.id,children:h.name},h.id)))??[]})})}),t(B,{span:5,children:t(M.Item,{noStyle:!0,shouldUpdate:(h,m)=>h.method!==m.method,children:({getFieldValue:h})=>t(M.Item,{name:"fundId",label:d.label.fund,rules:[{required:!0}],children:t(G,{fluid:"true",placeholder:d.label.choose_fund,children:r.filter(m=>{const D=h("method");return[fe,ge].includes(D)?m.method===Te:m.method===D}).map(m=>t(G.Option,{value:m.id,children:m.name},m.id))})})})}),t(B,{span:5,children:t(M.Item,{name:"labelId",label:d.label.label,children:t(Ft,{fluid:"true",placeholder:d.label.choose_label,allowClear:!0,children:a==null?void 0:a.map(h=>t(G.Option,{value:h.id,children:v("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[t("div",{style:{backgroundColor:h.color,width:"30px",height:"18px",borderRadius:"5px",border:"1px solid #D9D9D9"}}),t("div",{children:h.title})]})},h.id))})})})]})})]})},Lt=()=>{const{tableSelection:e,setTableSelection:n,apartmentSelected:a,summary:r,setSummary:s,listBill:p,setListBill:f,adjustmentDownByService:u,unitAccountByService:c,setUnitAccountByService:x,isHaveAdjustmentDown:S,isHaveUnitAccount:P,confirmPaymentStatus:g,isPaymentVNPAYSPOS:w}=y.useContext(J),{updateSummaryInfo:_}=ue(),{layoutScrollRef:h}=y.useContext(Le),m=te(),[D,N]=y.useState([]),[o,i]=y.useState([]),l=(V,C)=>{_({billsSelected:C,billsCurrent:p,adjustmentDownByService:u,unitAccountByService:c,isRefresh:!0,isPaymentVNPAYSPOS:w})};y.useEffect(()=>{if(a&&(p!=null&&p.length)){const V=Be.uniq(p.map(A=>Number(A.incurredCreatedFor))).sort(),C=V.map(A=>({text:K(A,"YYYYMM").format("MM/YYYY"),value:A,disable:!0}));i(C),N(V)}},[a]);const F={selectedRowKeys:e.selectedRowKeys,onChange:l,getCheckboxProps:V=>({disabled:V.disabled||V.status===ne}),columnWidth:20},T={offsetScroll:m.offsetScrollX,getContainer:()=>h.current};return{unitAccountByService:c,rowSelection:F,sticky:T,scroll:{scrollToFirstRowOnChange:!0},filtered:D,filterOptions:o,dataSource:p,isHaveAdjustmentDown:S,isHaveUnitAccount:P,onChangeValuePaidBefore:(V,C)=>{let A=V;A!==null&&!Number.isInteger(A)&&A.toString().includes(".")&&(A=0);const U=C==null?void 0:C.paidBefore,b=[...e.selectedRows],$=e.selectedRows.findIndex(Q=>Q.id===C.id);b[$].paidBefore=A,b[$].actuallyPaid+=U-A,n({selectedRowKeys:e.selectedRowKeys,selectedRows:b});const z=[...p],k=z.findIndex(Q=>Q.id===C.id);z[k].paidBefore=A,z[k].actuallyPaid+=U-A,z[k].isDisabled=!A,f(z),c[C==null?void 0:C.service.id]&&(A>U&&(c[C==null?void 0:C.service.id].remain-=A-U),A<U&&(c[C==null?void 0:C.service.id].remain+=U-A)),x(c);const q={...r};q.paidBefore=r.paidBefore-(U-A),q.total=r.total-(A-U),q.actuallyPaid=r.actuallyPaid-(A-U),s(q)},onChangeTable:(V,C)=>{C&&C.incurredCreatedFor&&(N(C.incurredCreatedFor?C.incurredCreatedFor:Be.uniq(p.map(A=>Number(A.incurredCreatedFor))).sort()),n({selectedRowKeys:[],selectedRows:[]}),s({actuallyPaid:0,receivables:0,total:0,adjustmentDown:0,debt:0,paidBefore:0}))},handleFocusEndText:V=>{const C=V.currentTarget.value.length;V.currentTarget.focus(),setTimeout(()=>{V.target.setSelectionRange(C,C)},0)},loading:g==null?void 0:g.isFetching,isPaymentVNPAYSPOS:w}};var Nt={name:"1e4wlpq",styles:".ant-input-number-handler-wrap{opacity:1;display:block;}.ant-input-number-input-wrap{padding-right:20px;}.ant-input-number-input{text-align:right;}"};const Ot=()=>{var D,N,o;const e=te(),{rowSelection:n,scroll:a,sticky:r,dataSource:s,filterOptions:p,filtered:f,unitAccountByService:u,onChangeTable:c,onChangeValuePaidBefore:x,isHaveAdjustmentDown:S,isHaveUnitAccount:P,handleFocusEndText:g,loading:w,isPaymentVNPAYSPOS:_}=Lt(),h=i=>i.disabled?"disabled":"",m=[{title:`${d.ordinal_numbers} ${(o=(N=(D=d)==null?void 0:D.label)==null?void 0:N.selected)==null?void 0:o.toLowerCase()}`,dataIndex:"ordinalNumber",key:"ordinalNumber",width:50,render:(i,l)=>{var T;const F=(T=n==null?void 0:n.selectedRowKeys)==null?void 0:T.indexOf(l.id);return F!==-1?`${F+1}`:""},align:"center"},{title:d.label.fee,dataIndex:"content",key:"content",width:120,render:(i,l)=>{const{isDebt:F=!1}=l;return t(Z,{children:v("span",{style:{color:F?e.color.warning:e.textColor},children:[i," ",F?`(${d.label.debt})`:""]})})}},{title:d.fee_notification_period_compact,dataIndex:"incurredCreatedFor",key:"incurredCreatedFor",render:i=>t("span",{children:K(i,"YYYYMM").format("MM/YYYY")}),width:50,filters:p,onFilter:(i,l)=>i?String(l.incurredCreatedFor)===String(i):null,filteredValue:f},{title:d.label.cost,dataIndex:"total",key:"total",align:"right",render:i=>t("span",{children:j(i)}),width:80,sorter:(i,l)=>i.total-l.total},S?{title:d.reduce,dataIndex:"adjustmentDown",align:"right",width:80,key:"adjustmentDown",render:i=>t("span",{children:j(i)})}:null,!_&&P?{title:d.label.paid_before,dataIndex:"paidBefore",key:"paidBefore",align:"right",width:80,render:(i,l)=>{var T,I,E,L,Y,V,C;const F=l.total-l.adjustmentDown>=(l.paidBefore||0)+(((I=u==null?void 0:u[(T=l==null?void 0:l.service)==null?void 0:T.id])==null?void 0:I.remain)||0)?(l.paidBefore||0)+(((L=u==null?void 0:u[(E=l==null?void 0:l.service)==null?void 0:E.id])==null?void 0:L.remain)||0):l.total-l.adjustmentDown;return t(Z,{children:t(Fe,{size:"small",style:{textAlign:"right"},onFocus:g,formatter:A=>j(A),min:"0",max:F,onChange:A=>x(A,l),disabled:!u[l.service.id]||u[l.service.id]&&l.adjustmentDown&&l.actuallyPaid===0&&l.paidBefore===0||((V=u==null?void 0:u[(Y=l==null?void 0:l.service)==null?void 0:Y.id])==null?void 0:V.remain)===0&&l.isDisabled||!((C=n==null?void 0:n.selectedRowKeys)!=null&&C.find(A=>A===(l==null?void 0:l.id))),value:l.paidBefore||0,css:Nt})})}}:null,{title:d.label.rest,dataIndex:"actuallyPaid",key:"actuallyPaid",align:"right",width:80,render:(i,l)=>{const{isDebt:F=!1}=l;return t("span",{style:{color:F?e.color.warning:e.textColor},children:j(i)})}}].filter(Boolean);return t(se,{style:{height:"100%"},children:t(se.Content,{scrollY:!0,style:{padding:0},children:t(Se,{rowClassName:h,pagination:!1,columns:m,rowSelection:n,dataSource:s,scroll:{...a,x:m.reduce((i,l)=>i+l.width,0)},bordered:!0,sticky:r,onChange:c,style:{height:"400px"},loading:w})})})},Et=()=>{const{apartmentSelected:e,summary:n,showModalConfirmPayment:a,isHaveAdjustmentDown:r,isHaveUnitAccount:s,setSummary:p,tableSelection:f,isShowActionPayment:u,listBill:c,setListBill:x,setTableSelection:S,formPayment:P,isAllBillUsePaidBefore:g}=y.useContext(J),[w,_]=y.useState(!1),h=N=>{if(_(!N),e){const o={...n};o.actuallyPaid=N,o.debt=o.actuallyPaid||o.actuallyPaid===0?o.total-o.actuallyPaid:0;let i=N;const l={},F=[],T=f.selectedRows.map(E=>{const L={...E};return L.actuallyPaid!==0&&(i-=L.actuallyPaid,L.isDebt=i<0),F.push(L.id),l[L.id]=L,L}),I=c==null?void 0:c.map(E=>{var L;return{...E,isDebt:((L=l==null?void 0:l[E==null?void 0:E.id])==null?void 0:L.isDebt)||!1}});x(I),S({selectedRowKeys:F,selectedRows:T}),p(o)}},m=y.useMemo(()=>!e||f.selectedRowKeys.length===0?!0:g&&n.actuallyPaid===0?!1:n.receivables===n.total&&!n.actuallyPaid?!0:n.receivables-n.paidBefore-(n==null?void 0:n.adjustmentDown)===0?!1:w,[e,n.actuallyPaid,f,w,g]),D=async()=>{var o;if(P.setFieldsValue({...at(P.getFieldsValue(),{})}),await P.validateFields()){const i=(o=f==null?void 0:f.selectedRows)==null?void 0:o.filter(F=>F.isDebt),l=i==null?void 0:i[((i==null?void 0:i.length)??0)-1];if(n.actuallyPaid&&(n.actuallyPaid<0||!Number.isInteger(n.actuallyPaid))){de.error({message:d.error1,description:d.amount_customers_paid_invalid});return}if(n.receivables===n.total&&!n.actuallyPaid){de.error({message:d.error1,description:d.amount_customers_paid_invalid});return}if(n.debt>0&&(l==null?void 0:l.actuallyPaid)<=n.debt&&n.actuallyPaid!==0&&!g){de.error({message:d.error1,description:d.the_debt_invoice_must_have_a_value_greater_than_the_total_debt});return}if(n.debt>0&&i.length>=2&&n.actuallyPaid!==0&&!g){de.error({message:d.error1,description:d.only_debt_one_fee});return}a()}};return y.useEffect(()=>{_(!(n!=null&&n.actuallyPaid))},[n==null?void 0:n.actuallyPaid]),{handleChangeActuallyPaid:h,isHaveAdjustmentDown:r,isHaveUnitAccount:s,isShowActionPayment:u,apartmentSelected:e,disabledButtonPayment:m,summary:n,showModalConfirmPayment:a,confirmPayment:D}},Vt=ve(ie,{target:"ebvyr890"})({name:"1a4vt9r",styles:"margin-top:0px;margin-bottom:0px"}),jt=()=>{const{isHaveAdjustmentDown:e,isHaveUnitAccount:n,apartmentSelected:a,disabledButtonPayment:r,summary:s,handleChangeActuallyPaid:p,isShowActionPayment:f,confirmPayment:u}=Et(),c=te();return t(se,{rise:!0,borderTop:!0,children:t(se.Content,{children:v(ie,{children:[t(B,{span:20,children:v(Vt,{gutter:[c.margin.xs,c.margin.xs],children:[t(B,{span:20,align:"right",children:v("span",{style:{fontWeight:c.fontWeight.bold,fontSize:c.fontSize.md},children:[d.label.must_pay," (VND)"]})}),t(B,{span:4,align:"right",children:t("span",{style:{fontWeight:c.fontWeight.bold,fontSize:c.fontSize.md,color:c.backgroundSidebar},children:j(s==null?void 0:s.receivables)})}),e&&(s!=null&&s.adjustmentDown)?v(Z,{children:[t(B,{span:20,align:"right",children:v("span",{style:{fontWeight:c.fontWeight.bold,fontSize:c.fontSize.md},children:[d.reduce," (VND)"]})}),t(B,{span:4,align:"right",children:t("span",{style:{fontWeight:c.fontWeight.bold,fontSize:c.fontSize.md,color:c.backgroundSidebar},children:j(s==null?void 0:s.adjustmentDown)})})]}):null,n&&(s!=null&&s.paidBefore)?v(Z,{children:[t(B,{span:20,align:"right",children:v("span",{style:{fontWeight:c.fontWeight.bold,fontSize:c.fontSize.md},children:[d.label.paid_before," (VND)"]})}),t(B,{span:4,align:"right",children:t("span",{style:{fontWeight:c.fontWeight.bold,fontSize:c.fontSize.md,color:c.backgroundSidebar},children:j(s==null?void 0:s.paidBefore)})})]}):null,t(B,{span:20,align:"right",children:v("span",{style:{fontWeight:c.fontWeight.bold,fontSize:c.fontSize.md},children:[d.label.total," (VND)"]})}),t(B,{span:4,align:"right",children:t("span",{style:{fontWeight:c.fontWeight.bold,fontSize:c.fontSize.md,color:c.backgroundSidebar},children:j(s==null?void 0:s.total)})}),v(Z,{children:[t(B,{span:20,align:"right",children:v("span",{style:{fontWeight:c.fontWeight.bold,fontSize:c.fontSize.md,display:"block",padding:"4px 0"},children:[d.label.amount_customers_paid," (VND)"]})}),t(B,{span:4,align:"right",children:t(Fe,{onChange:p,min:"0",max:Number.MAX_SAFE_INTEGER,disabled:!a,value:s==null?void 0:s.actuallyPaid,formatter:x=>j(x),css:Ee("color:",c.backgroundSidebar,";.ant-input-number-handler-wrap{display:none;}.ant-input-number-input{text-align:right;}","")})})]}),(s==null?void 0:s.debt)!==0?v(Z,{children:[t(B,{span:20,align:"right",children:v("span",{style:{fontWeight:c.fontWeight.bold,fontSize:c.fontSize.md},children:[s.debt<=0?d.label.rest:d.label.debt," (VND)"]})}),t(B,{span:4,align:"right",children:t("span",{style:{fontWeight:c.fontWeight.bold,fontSize:c.fontSize.md,color:s.debt>0?"red":c.backgroundSidebar},children:j(Math.abs(s.debt))})})]}):null]})}),t(B,{span:4,style:{textAlign:"center",alignSelf:"center"},children:f?t(ye,{type:"primary",size:"large",style:{fontSize:c.fontSize.md},disabled:r,onClick:()=>u(),children:d.payment}):null})]})})})},Oe="CASH_BACK_TO_CUSTOMER",ce="TRANSFER_TO_SERVICE_ACCOUNT",Ut=async(e,n)=>{try{const{code:a,codeLanguage:r,data:s}=await ht({idBuilding:e,idReceipt:n});return{code:a,codeLanguage:r,data:s}}catch({code:a,codeLanguage:r}){return{code:a,codeLanguage:r,data:void 0}}},Mt=async(e,n)=>{try{const{debtBillId:a,bills:r,paymentMethod:s,address:p,actuallyPaid:f,payer:u,payerId:c,paymentMethodId:x,cashier:S,labelId:P,fundId:g,unitId:w,serviceId:_,paymentAt:h,isPaymentToUnitAccount:m,isPaymentUsingUnitAccount:D,voucherDay:N}=n,o=await pt(e,{debtBillId:a,bills:r,paymentMethod:s,address:p,actuallyPaid:f,payer:u,payerId:c,paymentMethodId:x,cashier:S,labelId:P,fundId:g,unitId:w,serviceId:_,createdAt:h,isPaymentToUnitAccount:m,isPaymentUsingUnitAccount:D,voucherDay:N});return{code:o.code,codeLanguage:o.codeLanguage,data:o.data}}catch({code:a,codeLanguage:r}){return{code:a,codeLanguage:r,data:void 0}}},kt=()=>{const{idBuilding:e,hideModalConfirmPayment:n,summary:a,formPayment:r,listServiceForTransfer:s,isHaveAdjustmentDown:p,isHaveUnitAccount:f,tableSelection:u,setApartmentSelected:c,showFormReceipt:x,setIsResetApartmentList:S,confirmPaymentStatus:P,listPaymentMethodWeb:g,setConfirmPaymentStatus:w,isPaymentVNPAYSPOS:_,isAllBillUsePaidBefore:h}=y.useContext(J),{method:m}=r.getFieldsValue("method"),{currentUser:D}=Re(),{updateSummaryInfo:N}=ue(),[o]=M.useForm(),[i,l]=y.useState(!1),[F,T]=y.useState(!1);ke(P.code,P.codeLanguage,{message:d.success,description:d.payment_success},()=>{w({isFetching:!1,code:void 0,codeLanguage:void 0})},()=>{w({isFetching:!1,code:void 0,codeLanguage:void 0})});const I=async()=>{var V,C,A,U,b,$;if(await o.validateFields()){w({isFetching:!0,code:void 0,codeLanguage:void 0}),T(!0);const{payer:z,payerId:k,apartment:q,paymentAt:Q,voucherDay:re,labelId:me,fundId:he}=r.getFieldsValue(),{excessMoneyType:oe,service:O}=o.getFieldsValue(),H=(V=u==null?void 0:u.selectedRows)==null?void 0:V.filter(R=>(R==null?void 0:R.status)!==ne),ee={payer:z,payerId:k,unitId:q,paymentAt:Q?K(Q).toISOString():void 0,voucherDay:re?K(re).toISOString():void 0,labelId:me,fundId:he,bills:_?H==null?void 0:H.map(R=>R==null?void 0:R.id):H==null?void 0:H.map(R=>({id:R==null?void 0:R.id,paidBefore:(R==null?void 0:R.paidBefore)||0})),cashier:D==null?void 0:D.fullName,isPaymentToUnitAccount:oe===ce,serviceId:O,debtBillId:h&&a.actuallyPaid===0?null:(A=(C=u.selectedRows)==null?void 0:C.find(R=>R==null?void 0:R.isDebt))==null?void 0:A.id,actuallyPaid:a.actuallyPaid,paymentMethod:m,paymentMethodId:_&&((U=g==null?void 0:g.find(R=>(R==null?void 0:R.id)===m))==null?void 0:U.paymentMethodId)||void 0},X=await Mt(e,ee);if(w({isFetching:!1,code:X.code,codeLanguage:X.codeLanguage}),nt.includes(X.code)){if(r.resetFields(),(b=X==null?void 0:X.data)!=null&&b.id){const R=await Ut(e,($=X==null?void 0:X.data)==null?void 0:$.id);x({htmlPreview:R==null?void 0:R.data,htmlPrint:R==null?void 0:R.data})}c(void 0),S(!0),N({billsSelected:[],billsCurrent:[],adjustmentDownByService:[],unitAccountByService:[],isRefresh:!0,isPaymentVNPAYSPOS:!1}),T(!1),n()}}},E=Y=>{l(Y.target.value===ce)};y.useEffect(()=>{l(m!==le)},[m]);const L=y.useMemo(()=>({excessMoneyType:m===le?Oe:ce}),[m]);return{formConfirmPayment:o,hideModalConfirmPayment:n,summary:a,paymentMethod:m,services:s,handleConfirmPayment:I,isHaveAdjustmentDown:p,isHaveUnitAccount:f,initialValues:L,onChangeExcessMoney:E,displayService:i,loading:F}},ae=ve(ie,{target:"e1dirxrz0"})({name:"7a42dp",styles:"background:#f7f7f7;padding:5px 10px"}),Yt=()=>{const{formConfirmPayment:e,hideModalConfirmPayment:n,summary:a,services:r,handleConfirmPayment:s,isHaveAdjustmentDown:p,isHaveUnitAccount:f,initialValues:u,onChangeExcessMoney:c,displayService:x,loading:S}=kt(),P=te();return t(Me,{title:d.confirm_payment,open:!0,onCancel:n,okText:d.confirm,cancelText:d.cancel,width:"45%",onOk:s,okButtonProps:{loading:S,disabled:S},children:v(M,{initialValues:u,form:e,layout:"vertical",name:"formConfirmPayment",children:[v(ae,{children:[t(B,{span:"12",children:v(W.Text,{strong:!0,children:[d.receivables," (",d.vnd,"):"]})}),t(B,{span:"12",children:t(W.Text,{strong:!0,children:j(a==null?void 0:a.receivables)??0})})]}),p&&(a!=null&&a.adjustmentDown)?v(ae,{children:[t(B,{span:"12",children:v(W.Text,{strong:!0,children:[d.reduce," (",d.vnd,"):"]})}),t(B,{span:"12",children:t(W.Text,{strong:!0,children:j(a==null?void 0:a.adjustmentDown)??0})})]}):null,f&&(a!=null&&a.paidBefore)?v(ae,{children:[t(B,{span:"12",children:v(W.Text,{strong:!0,children:[d.label.paid_before," (",d.vnd,"):"]})}),t(B,{span:"12",children:t(W.Text,{strong:!0,children:j(a==null?void 0:a.paidBefore)??0})})]}):null,v(ae,{children:[t(B,{span:"12",children:v(W.Text,{strong:!0,children:[d.total," (",d.vnd,"):"]})}),t(B,{span:"12",children:t(W.Text,{strong:!0,children:j(a==null?void 0:a.total)??0})})]}),v(ae,{children:[t(B,{span:"12",children:v(W.Text,{strong:!0,children:[d.label.amount_customers_paid," (",d.vnd,"):"]})}),t(B,{span:"12",children:t(W.Text,{strong:!0,children:j(a==null?void 0:a.actuallyPaid)??0})})]}),(a==null?void 0:a.debt)!==0?v(ae,{children:[t(B,{span:"12",children:v(W.Text,{strong:!0,children:[a.debt<=0?d.label.rest:d.label.debt," (",d.vnd,"):"]})}),t(B,{span:"12",children:t(W.Text,{strong:!0,style:{color:P.color.warning},children:j(Math.abs(a.debt))??0})})]}):null,a.debt<0?t(Z,{children:v(ie,{style:{margin:"15px 0"},children:[v(B,{span:"12",children:[t(W.Text,{strong:!0,children:d.label.excess_money}),t(M.Item,{name:"excessMoneyType",children:v(pe.Group,{onChange:c,children:[t(pe,{value:Oe,children:d.label.cash_back}),t(pe,{value:ce,children:d.label.transfer_for_paid_before})]})})]}),x?t(B,{span:"12",children:t(M.Item,{label:t(W.Text,{style:{fontSize:"14px",marginBottom:"8px"},strong:!0,children:d.service}),rules:[{required:!0}],name:"service",children:t(G,{fluid:"true",placeholder:d.service,allowClear:!0,showSearch:!0,optionFilterProp:"children",filterOption:(g,w)=>Ce(w.children).indexOf(Ce(g))>=0,getPopupContainer:g=>g.parentNode,children:r==null?void 0:r.map(({id:g,name:w})=>t(G.Option,{value:g,children:w},g))})})}):null]})}):null]})})},bt=()=>{const{setTitlePage:e,setVisibleFilterBox:n,setVisibleSearchBox:a}=y.useContext(Le),{formPayment:r,modalConfirmPayment:s,isHaveAdjustmentDown:p,isHaveUnitAccount:f,formReceipt:u,hideFormReceipt:c,tableSelection:x,adjustmentDownByService:S,unitAccountByService:P,setIsPaymentVNPAYSPOS:g,apartmentSelected:w,isPaymentVNPAYSPOS:_}=y.useContext(J),{updateSummaryInfo:h}=ue(),{fundData:m}=_e();y.useEffect(()=>(n(!1),a(!1),()=>{e("")}),[]);const D=(o,i)=>{var l,F,T;if(o.apartment)r.setFieldsValue({paymentAt:K(),voucherDay:K(),payer:"",payerId:null});else if(o.method){const I=[ge,fe].includes(o.method),E=m.filter(L=>{let{method:Y}=o;return I&&(Y=Te),L.method===Y});o.method===le?r.setFieldsValue({paymentAt:K(),fundId:(l=E[0])==null?void 0:l.id}):r.setFieldsValue({fundId:(F=E[0])==null?void 0:F.id}),(T=x.selectedRows)!=null&&T.length&&I!==_&&h({billsSelected:x.selectedRows,billsCurrent:(w==null?void 0:w.listBill)||[],adjustmentDownByService:S,unitAccountByService:P,isRefresh:!0,isPaymentVNPAYSPOS:I}),g(I)}},N={paymentAt:K(),voucherDay:K(),payer:"",payerId:null,method:void 0,fundId:void 0,labelId:void 0};return{formPayment:r,handleChangeValueFormPayment:D,initialValues:N,isHaveAdjustmentDown:p,isHaveUnitAccount:f,isShowModalConfirmPayment:s==null?void 0:s.isShow,isShowFormReceipt:u.isShow,formReceipt:u,hideFormReceipt:c}};var Wt={name:"1qh16tb",styles:"display:flex;flex-direction:column;flex:1;height:100%;gap:2px"},zt={name:"1ykowef",styles:"margin-bottom:0"},Ht={name:"18g08sj",styles:"padding-bottom:0"},Kt={name:"82a6rk",styles:"flex:1"};const $t=()=>{const{formPayment:e,initialValues:n,handleChangeValueFormPayment:a,isShowModalConfirmPayment:r,isShowFormReceipt:s,formReceipt:p,hideFormReceipt:f}=bt(),u=te();return v(De.Wrapper,{children:[v(M,{name:"form_payment",layout:"vertical",form:e,initialValues:n,onValuesChange:a,css:Wt,children:[t(ie,{gutter:[u.margin.xss,u.margin.xss],css:zt,children:t(B,{span:24,css:Ht,children:t(Tt,{})})}),t("div",{css:Kt,children:t(Ot,{})}),t(ot,{offsetBottom:"0",children:t(jt,{})})]}),r?t(Yt,{}):null,s?t(Ye,{formReceipt:p,hideFormReceipt:f}):null]})},Nn=()=>t(ft,{children:t($t,{})});export{Nn as default};
