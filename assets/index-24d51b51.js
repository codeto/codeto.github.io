import{j as A,a as nt,F as xo}from"./@emotion-63839449.js";import{P as V,d as vo,l as dt,D as Qo,Q as st,p as tn,a as en}from"./index-b17d22e5.js";import{r as R}from"./react-4fd50329.js";import{P as on}from"./prop-types-1172f4d5.js";import{l as n,a9 as it,b0 as nn,K as cn,gV as rn,ag as an,a3 as dn,I as fn,dq as Xo,gW as mn,a5 as sn,i as En,A as Tn,M as Cn,j as Ln,X as An,g as gn,t as jo,fm as ln,gX as Nn,cP as $n,cf as yn,s as ct,a as hn}from"./index-c2ded735.js";import"./react-redux-896b353b.js";import{q as Et,r as ot}from"./lodash-88fe09e6.js";import{h as q}from"./moment-a468e1f9.js";import"./file-saver-40cf32a9.js";import"./@firebase-43527ee1.js";import{B as pn,S as zo,h as Rn,n as bn,P as Pn}from"./antd-f9eae174.js";import{S as et}from"./index-43183512.js";import{A as _n,a as On}from"./constants-756f802c.js";import{a as In}from"./staff-2880022d.js";import{u as ft}from"./react-router-a4308f7b.js";import{I as Sn}from"./react-infinite-scroll-component-e33646cb.js";import{e as Dn}from"./exportExcel-837be6ed.js";import"./hoist-non-react-statics-23d96a9a.js";import"./react-is-e8e5dbb3.js";import"./@babel-b64fd0f9.js";import"./stylis-79144faa.js";import"./react-router-dom-2a8f5f6d.js";import"./history-a1882333.js";import"./resolve-pathname-e210f2ac.js";import"./tiny-invariant-dd7d57d2.js";import"./account-86ffff50.js";import"./index-687ba9e6.js";import"./index-881eef42.js";import"./libphonenumber-js-0d5a9c92.js";import"./classnames-4ba1ba1a.js";import"./redux-10bbab4c.js";import"./react-dom-40621ea0.js";import"./scheduler-765c72db.js";import"./@redux-saga-8bafe09b.js";import"./redux-logger-e1c9ca90.js";import"./dompurify-8e338605.js";import"./query-string-f5cca1e7.js";import"./decode-uri-component-4138e85d.js";import"./split-on-first-4f1167c8.js";import"./filter-obj-2ed190f4.js";import"./oidc-client-7da0eaf7.js";import"./firebase-878887a2.js";import"./rc-pagination-c1e6a0ac.js";import"./rc-picker-2e3d5fe5.js";import"./rc-util-0bc219f3.js";import"./rc-trigger-570b13ec.js";import"./rc-motion-ae889c42.js";import"./rc-align-e5d7b12e.js";import"./dom-align-ecb06dd6.js";import"./resize-observer-polyfill-0f9f8adb.js";import"./rc-resize-observer-b9ad4e29.js";import"./@ant-design-cba9d434.js";import"./@ctrl-fb5a5473.js";import"./rc-tabs-dfd19a56.js";import"./rc-dropdown-5378dd0a.js";import"./rc-menu-b15ebfe9.js";import"./rc-overflow-6be96612.js";import"./rc-select-564caf01.js";import"./rc-virtual-list-8a7b82a6.js";import"./rc-collapse-11b7d3c4.js";import"./shallowequal-4542d6f7.js";import"./rc-drawer-317f0b4d.js";import"./@rc-component-5a112e55.js";import"./rc-field-form-ef5549aa.js";import"./async-validator-dee29e8b.js";import"./scroll-into-view-if-needed-6b992d05.js";import"./compute-scroll-into-view-183f845a.js";import"./rc-image-e0357917.js";import"./rc-dialog-b1d1f07b.js";import"./rc-input-number-8bc068f7.js";import"./rc-rate-c64cf0d5.js";import"./rc-steps-2d1924c7.js";import"./rc-switch-b4e96de7.js";import"./rc-table-191ecc42.js";import"./rc-checkbox-018e8052.js";import"./rc-tree-67773537.js";import"./rc-tree-select-cb7eccc3.js";import"./copy-to-clipboard-64585c8c.js";import"./toggle-selection-93f4ad84.js";import"./rc-textarea-d01adcbb.js";import"./rc-input-02c2c2ba.js";import"./rc-upload-3ab0f08a.js";import"./rc-notification-d13dc43b.js";import"./rc-progress-4f1a7096.js";import"./rc-tooltip-08fa4217.js";import"./use-sync-external-store-5d1b6592.js";import"./idb-cdd1a92f.js";import"./path-to-regexp-ef8d5544.js";import"./xlsx-0fb7ed70.js";const mt={manager:void 0,action:"",time:[]},wn=[{value:"CREATE",label:n.created},{value:"UPDATE",label:n.updated},{value:"DELETE",label:n.deleted},{value:"READ",label:n.read},{value:"IMPORT",label:n.import},{value:"EXPORT",label:n.export},{value:"PAYMENT",label:n.paid},{value:"ACTIVE",label:n.active},{value:"INACTIVE",label:n.inactive},{value:"VOTE",label:n.voted},{value:"APPROVAL",label:n.approved},{value:"PUBLIC",label:n.published}],Tt={CREATE:n.created.toLowerCase(),UPDATE:n.updated_info.toLowerCase(),DELETE:n.deleted.toLowerCase(),READ:n.read.toLowerCase(),IMPORT:n.imported.toLowerCase(),EXPORT:n.exported_list.toLowerCase(),PAYMENT:n.paid.toLowerCase(),ACTIVE:n.activate.toLowerCase(),INACTIVE:n.deactivate.toLowerCase(),VOTE:n.voted.toLowerCase(),APPROVAL:n.approved.toLowerCase(),JOIN:n.join.toLowerCase(),PRINT:n.printed.toLowerCase(),SEND:n.sent.toLowerCase(),RESEND_EMAIL:n.resent_email.toLowerCase(),CANCEL:n.canceled.toLowerCase(),APPROVE:n.approved.toLowerCase(),CHECK_IN:n.confirm_in_progress.toLowerCase(),CHECK_OUT:n.confirm_completed.toLowerCase(),COMPLETE:n.completed.toLowerCase(),PUBLIC:n.published.toLowerCase(),REFUND:n.info_updated.toLowerCase(),DEPOSIT:n.info_updated.toLowerCase()},P={user:n.user,"unit-group":n.building,"unit-group-type":n.building_type,service:n.service,unit:n.unit,fund:n.fund,floor:n.floor,position:n.position,resident:n.resident,"contract-template":n.tariff,contract:n.contract,employee:n.staff,department:n.department,bill:n.bill,invoice:n.invoice,receipt:n.receipt,"pay-slip":n.payslip,upload:n.upload,request:n.request,task:n.task,label:n.label1,announcement:n.announcement,installation:n.installation,activity:n.activity,document:n.document,partner:n.partner,asset:n.asset,"payment-online":n.payment_online,cashbook:n.cashbook,card:n.card,"lock-date":n.data_lock_date,visitor:n.request_access,helpdesk:n.help_desk,amenities:n.amenities,"elevator-reservation":n.request_transfer,supply:n.supply,"group-system":n.group_system,system:n.system,"maintenance-schedule":n.maintenance_plan,"unit-group-template":n.template,"unit-account":n.advance_revenue,"card-registration":n.request_card_registration,"construction-registration":n.request_construction_registration,report:n.paid_before,"amenities-merchant":n.amenities_merchant},C={USER:"user",UNIT_GROUP:"unit-group",UNIT_GROUP_TYPE:"unit-group-type",SERVICE:"service",UNIT:"unit",FUND:"fund",FLOOR:"floor",POSITION:"position",RESIDENT:"resident",CONTRACT_TEMPLATE:"contract-template",CONTRACT:"contract",EMPLOYEE:"employee",DEPARTMENT:"department",BILL:"bill",INVOICE:"invoice",RECEIPT:"receipt",PAYSLIP:"pay-slip",UPLOAD:"upload",REQUEST:"request",TASK:"task",LABEL:"label",ANNOUNCEMENT:"announcement",INSTALLATION:"installation",ACTIVITY:"activity",DOCUMENT:"document",PARTNER:"partner",ASSET:"asset",PAYMENT_ONLINE:"payment-online",CASHBOOK:"cashbook",CARD:"card",LOCK_DATE:"lock-date",VISITOR:"visitor",ELEVATOR_RESERVATION:"elevator-reservation",HELP_DESK:"helpdesk",SUPPLY:"supply",GROUP_SYSTEM:"group-system",SYSTEM:"system",MAINTENANCE_SCHEDULE:"maintenance-schedule",ADJUSTMENT:"adjustment",UNIT_GROUP_TEMPLATE:"unit-group-template",UNIT_ACCOUNT:"unit-account",PAYMENT:"payment",CARD_REGISTRATION:"card-registration",CONSTRUCTION_REGISTRATION:"construction-registration",REPORT:"report",AMENITIES_MERCHANT:"amenities-merchant"},a={CREATE:"CREATE",UPDATE:"UPDATE",DELETE:"DELETE",READ:"READ",IMPORT:"IMPORT",EXPORT:"EXPORT",PAYMENT:"PAYMENT",ACTIVE:"ACTIVE",INACTIVE:"INACTIVE",VOTE:"VOTE",APPROVAL:"APPROVAL",JOIN:"JOIN",PRINT:"PRINT",SEND:"SEND",RESEND_EMAIL:"RESEND_EMAIL",CANCEL:"CANCEL",APPROVE:"APPROVE",CHECK_IN:"CHECK_IN",CHECK_OUT:"CHECK_OUT",COMPLETE:"COMPLETE",PUBLIC:"PUBLIC",REFUND:"REFUND",DEPOSIT:"DEPOSIT",IN_PROGRESS:"IN-PROGRESS"},Y=4,Ko="/unit-account-history",G=R.createContext({isEndOfListLogActivity:!1,setIsEndOfListLogActivity:()=>{},filter:{...mt},setFilter:()=>{},getListLogActivityStatus:{isFetching:!1},setGetListLogActivityStatus:()=>{},listLogActivity:[],setListLogActivity:()=>{},listPagination:it,setListPagination:()=>{},modalExportData:void 0,showModalExportData:()=>{},hideModalExportData:()=>{},isShowFilterStaff:!1}),Ct=({children:t})=>{var D;const{getPermissionByModuleCode:i}=nn(),[e,s]=R.useState({isFetching:!1}),[E,L]=R.useState({...mt}),[f,y]=R.useState([]),[N,$]=R.useState(it),[l,h]=R.useState(!1),[O,M,_]=cn(),I=((D=i(rn))==null?void 0:D[an])??!1,b={isEndOfListLogActivity:l,setIsEndOfListLogActivity:h,filter:E,setFilter:L,getListLogActivityStatus:e,setGetListLogActivityStatus:s,listLogActivity:f,setListLogActivity:y,listPagination:N,setListPagination:$,modalExportData:O,showModalExportData:M,hideModalExportData:_,isShowFilterStaff:I};return A(G.Provider,{value:b,children:t})};Ct.propTypes={children:on.node};Ct.defaultProps={children:A("div",{})};const Un=Ct,Mn=()=>{const{showModalExportData:t}=R.useContext(G);return[async()=>{t()}]};function Yn(){const[t]=Mn(),i=dn(),e=[A(pn,{css:s=>({marginRight:s.margin.xs}),type:"primary",ghost:!0,icon:A(fn,{name:"icon-download-outlined"}),gakey:Xo,gacategory:mn,onClick:()=>{i({action:Xo,label:sn}),t()},children:n.export},"export")];return A(V.ActionBox,{actions:e})}const qn=`${Ln}/activity/logs`;async function Wo({idBuilding:t,filter:i,page:e,limit:s}){const E={[An]:t},L={...i,page:e,limit:s};return await En({type:Tn,payload:{apiUrl:qn,method:Cn.GET,options:{headers:E,params:L}}})}function g(t){var e;const i=((e=t==null?void 0:t.response)==null?void 0:e.body)??{};if(!ot(i)&&typeof i=="string")try{return JSON.parse(i)}catch{return{}}return ot(i)?{}:i}function r(t="",i=!1){return i?` ${t}`:`<strong>${t}</strong>`}function Fn(t,i=!1){return t===$n?`${n.label.activity_to} ${r(n.label.active.toLowerCase(),i)}`:t===yn?`${n.label.activity_to} ${r(n.label.inactive.toLowerCase(),i)}`:""}function U(t=[],i=!1,e=!0){let s="";return e?s=` ${r(t.join(", "),i)}`:s=` ${t.join(", ")}`,`${s}`}function Vn(t=[],i=[],e=!1,s=""){let E="",L=` ${n.label.success.toLowerCase()}`,f=` ${n.label.failure.toLowerCase()}`;return t.length>Y?L+=` ${r(t.length,e)} ${s}`:(L=`${s} ${L}`,L+=` ${r(t.toString(),e)}`),i.length>Y?f+=` ${r(i.length,e)} ${s}`:(f=`${s} ${f}`,f+=` ${r(i.toString(),e)}`),t.length>0&&i.length>0&&(E=`${L} ${n.label.and} ${f}`),t.length>0&&i.length===0&&(E=`${L}`),t.length===0&&i.length>0&&(E=`${f}`),E}function Jo(t){return t?q(t,"YYYYMM").format("MM/YYYY"):""}function Gn(t,i=!1){var E,L,f,y,N,$,l,h,O,M,_,I,b,D,u,k,B,H,X,j,K,J,Q,z,W,Z,x,v,S,rt,at,tt,At,gt,lt,Nt,$t,yt,ht,pt,Rt,bt,Pt,_t,Ot,It,St,Dt,wt,Ut,Mt,Yt,qt,Ft,Vt,Gt,ut,kt,Bt,Ht,Xt,jt,Kt,Jt,Qt,zt,Wt,Zt,xt,vt,te,ee,oe,ne,ie,ce,re,ae,de,fe,me,se,Ee,Te,Ce,Le,Ae,ge,le,Ne,$e,ye,he,pe,Re,be,Pe,_e,Oe,Ie,Se,De,we,Ue,Me,Ye,qe,Fe,Ve,Ge,ue,ke,Be,He,Xe,je,Ke,Je,Qe,ze,We,Ze,xe,ve,to,eo,oo,no,io,co,ro,ao,fo,mo,so,Eo,To,Co,Lo,Ao,go,lo,No,$o,yo,ho,po,Ro,bo,Po,_o,Oo,Io,So,Do,wo,Uo,Mo,Yo,qo,Fo,Vo,Go,uo,ko,Bo;let e=P[t.module]?P[t.module].toLowerCase():"";const s=gn();if(t.module===C.UNIT){const{data:o=[]}=g(t),d=[],c=[],m=((L=(E=t==null?void 0:t.request)==null?void 0:E.body)==null?void 0:L.name)??"";if(t.actionName===a.CREATE&&(e+=` ${r(m,i)}`),t.actionName===a.UPDATE&&t.content.indexOf("qr-codes")===-1&&(e+=` ${r(m,i)}`),t.actionName===a.UPDATE&&t.content.indexOf("qr-codes")!==-1&&Array.isArray(o)&&(o.length>Y?e=`${r(o.length,i)} ${e}`:(o.forEach(T=>{c.push(T.name)}),e+=` ${U(c,i)}`)),t.actionName===a.DELETE&&((y=(f=t==null?void 0:t.request)==null?void 0:f.url)!=null&&y.includes(Ko)&&(e="",e+=n.service_advanced_payment_history.toLowerCase()),($=(N=t==null?void 0:t.request)==null?void 0:N.url)!=null&&$.includes(Ko)||(Array.isArray(o)&&o.forEach(T=>{var p,w;T.code||T.errorDescription?d.push(((p=T==null?void 0:T.unit)==null?void 0:p.name)||(T==null?void 0:T.unitId)):c.push((w=T==null?void 0:T.unit)==null?void 0:w.name)}),e=` ${Vn(c,d,i,e)}`)),t.actionName===a.IMPORT){const T=Array.isArray((h=(l=t==null?void 0:t.request)==null?void 0:l.body)==null?void 0:h.data)?(_=(M=(O=t==null?void 0:t.request)==null?void 0:O.body)==null?void 0:M.data)==null?void 0:_.length:(u=(D=(b=(I=t==null?void 0:t.request)==null?void 0:I.body)==null?void 0:b.data)==null?void 0:D.split(","))==null?void 0:u.length;e=`${r(T||"",i)} ${n.apartment.toLowerCase()}`}}if(t.module===C.RESIDENT){if(t.actionName===a.CREATE||t.actionName===a.UPDATE){const o=((H=(B=(k=t==null?void 0:t.response)==null?void 0:k.body)==null?void 0:B.data)==null?void 0:H.fullName)??"";e+=` ${r(o,i)}`}if(t.actionName===a.INACTIVE||t.actionName===a.ACTIVE){const{data:o={}}=g(t),d=(o==null?void 0:o.fullName)??"";e+=` ${r(d,i)}`}if(t.actionName===a.DELETE){const{data:o=[]}=g(t),d=[];Array.isArray(o)&&(o.length>Y?e=`${r(o.length,i)} ${e}`:(o.forEach(c=>{d.push(c.resident.fullName)}),e+=` ${U(d,i)}`))}if(t.actionName===a.IMPORT){const o=Array.isArray((j=(X=t==null?void 0:t.request)==null?void 0:X.body)==null?void 0:j.data)?(Q=(J=(K=t==null?void 0:t.request)==null?void 0:K.body)==null?void 0:J.data)==null?void 0:Q.length:(x=(Z=(W=(z=t==null?void 0:t.request)==null?void 0:z.body)==null?void 0:W.data)==null?void 0:Z.split(","))==null?void 0:x.length;e=`${r(o||"",i)} ${n.resident.toLowerCase()}`}}if(t.module===C.SERVICE){if(t.actionName===a.CREATE){const{data:o={}}=g(t),d=(o==null?void 0:o.name)??"",c=o!=null&&o.createdFor?`${s===jo?n.month.toLowerCase():n.in} ${o!=null&&o.createdFor?r(Jo((v=o==null?void 0:o.createdFor)==null?void 0:v.toString())):""}`:"",m=(S=o==null?void 0:o.unit)!=null&&S.name?`${n.label.for} ${n.label.apartment.toLowerCase()} ${r((rt=o==null?void 0:o.unit)==null?void 0:rt.name,i)}`:"";e+=` ${r(d,i)} ${c} ${m}`}if(t.actionName===a.UPDATE&&t.content.indexOf("status")!==-1){const{data:o={}}=g(t),d=(o==null?void 0:o.name)??"";e+=` ${r(d,i)}`,e=`${n.label.status.toLowerCase()} ${e} ${Fn(o.status,i)}`}if(t.actionName===a.UPDATE&&t.content.indexOf("status")===-1){const o=((tt=(at=t==null?void 0:t.request)==null?void 0:at.body)==null?void 0:tt.name)??"";e+=` ${r(o,i)}`}if(t.actionName===a.DELETE){const{data:o={}}=g(t),d=(o==null?void 0:o.name)??"";e+=` ${r(d,i)}`}}if(t.module===C.FUND){if(t.actionName===a.CREATE||t.actionName===a.UPDATE){const o=((gt=(At=t==null?void 0:t.request)==null?void 0:At.body)==null?void 0:gt.name)??"";e+=` ${r(o,i)}`}if(t.actionName===a.DELETE){const{data:o={}}=g(t),d=(o==null?void 0:o.name)??"";e+=` ${r(d,i)}`}}if(t.module===C.FLOOR){if(t.actionName===a.CREATE||t.actionName===a.UPDATE){const o=((Nt=(lt=t==null?void 0:t.request)==null?void 0:lt.body)==null?void 0:Nt.name)??"";e+=` ${r(o,i)}`}if(t.actionName===a.DELETE){const{data:o={}}=g(t),d=(o==null?void 0:o.name)??"";e+=` ${r(d,i)}`}}if(t.module===C.POSITION){if(t.actionName===a.CREATE||t.actionName===a.UPDATE){const o=((yt=($t=t==null?void 0:t.request)==null?void 0:$t.body)==null?void 0:yt.name)??"";e+=` ${r(o,i)}`}if(t.actionName===a.DELETE){const{data:o={}}=g(t),d=(o==null?void 0:o.name)??"";e+=` ${r(d,i)}`}}if(t.module===C.CONTRACT_TEMPLATE){if(t.actionName===a.CREATE||t.actionName===a.UPDATE){const o=((pt=(ht=t==null?void 0:t.request)==null?void 0:ht.body)==null?void 0:pt.name)??"";e+=` ${r(o,i)}`}if(t.actionName===a.DELETE){const{data:o={}}=g(t),d=(o==null?void 0:o.name)??"";e+=` ${r(d,i)}`}}if(t.module===C.CONTRACT){if(t.actionName===a.CREATE){const{data:o=[]}=g(t),d=[];Array.isArray(o)&&(o.length>Y?e=`${r(o.length,i)} ${e}`:(e=(Rt=n.service)==null?void 0:Rt.toLowerCase(),o.forEach(c=>{var T,p,w;const m=c!=null&&c.createdFor?`${s===jo?n.month.toLowerCase():n.in} ${c!=null&&c.createdFor?r(Jo((T=c==null?void 0:c.createdFor)==null?void 0:T.toString())):""}`:"";d.push(`${r(((p=c==null?void 0:c.service)==null?void 0:p.name)??"",i)} ${m} ${n.label.for} ${n.label.apartment.toLowerCase()} ${r(((w=c==null?void 0:c.unit)==null?void 0:w.name)??"",i)}`)}),e+=` ${U(d,i,!1)}`))}if(t.actionName===a.UPDATE){const{data:o={}}=g(t);e+=` ${((bt=o==null?void 0:o.contractTemplate)==null?void 0:bt.name)??""} ${n.label.for} ${n.label.apartment.toLowerCase()} ${r(((Pt=o==null?void 0:o.unit)==null?void 0:Pt.name)??"",i)}`}if(t.actionName===a.DELETE){const{data:o=[]}=g(t),d=[];if(Array.isArray(o))if(((Ot=(_t=t==null?void 0:t.request)==null?void 0:_t.body)==null?void 0:Ot.isAll)??!1){const c=Et((((St=(It=t==null?void 0:t.response)==null?void 0:It.body)==null?void 0:St.data)??[]).map(m=>{var T;return((T=m==null?void 0:m.contractTemplate)==null?void 0:T.name)??null}).filter(Boolean));e=` ${r(n.label.all.toLowerCase(),i)} ${e} ${n.label.include.toLowerCase()} ${U(c,i,!0)}`}else if(o.length>Y){let c=[],m="";o.forEach(T=>{var p;c.push(((p=T==null?void 0:T.contractTemplate)==null?void 0:p.name)??""),c=Et(c)}),c.forEach((T,p)=>{let w=0;o.forEach(F=>{var Ho;(((Ho=F==null?void 0:F.contractTemplate)==null?void 0:Ho.name)??"")===T&&(w+=1)}),m=`${m} ${r(w,i)} ${e} ${T}`,c.length-1!==p&&(m+=` ${n.label.and}`)}),e=m}else o.forEach(c=>{var m,T;d.push(`${((m=c==null?void 0:c.contractTemplate)==null?void 0:m.name)??""} ${n.label.for} ${n.label.apartment.toLowerCase()} ${r((T=c==null?void 0:c.unit)==null?void 0:T.name,i)}`)}),e+=` ${U(d,i,!1)}`}if(t.actionName===a.ACTIVE||t.actionName===a.INACTIVE)if(((wt=(Dt=t==null?void 0:t.request)==null?void 0:Dt.body)==null?void 0:wt.isAll)??!1)e=` ${r(n.label.all.toLowerCase(),i)} ${e}`;else{const o=((Mt=(Ut=t==null?void 0:t.request)==null?void 0:Ut.body)==null?void 0:Mt.contractTemplateName)??[];if(Array.isArray(o)&&!ot(o)){const d=Et(o);let c="";d.forEach((m,T)=>{let p=0;o.forEach(w=>{w===m&&(p+=1)}),c=`${c} ${r(p,i)} ${e} ${m}`,d.length-1!==T&&(c+=` ${n.label.and}`)}),e=c}}}if(t.module===C.EMPLOYEE){if(t.actionName===a.CREATE||t.actionName===a.UPDATE){const o=((qt=(Yt=t==null?void 0:t.request)==null?void 0:Yt.body)==null?void 0:qt.fullName)??"";e+=` ${r(o,i)}`}if(t.actionName===a.DELETE){const{data:o=[]}=g(t),d=[];Array.isArray(o)&&(o.length>Y?e=`${r(o.length,i)} ${e}`:(o.forEach(c=>{d.push(`${(c==null?void 0:c.fullName)??""}`)}),e+=` ${U(d,i)}`))}}if(t.module===C.DEPARTMENT){if(t.actionName===a.CREATE||t.actionName===a.UPDATE){const o=((Vt=(Ft=t==null?void 0:t.request)==null?void 0:Ft.body)==null?void 0:Vt.name)??"";e+=` ${r(o,i)}`}if(t.actionName===a.DELETE){const{data:o={}}=g(t),d=(o==null?void 0:o.name)??"";e+=` ${r(d,i)}`}}if(t.module===C.BILL){if(t.actionName===a.CREATE&&t.content.indexOf("MANUAL")!==-1){const{data:o=[]}=g(t),d=[];Array.isArray(o)&&(o.length>Y?e=`${n.label.activity_manual} ${r(o.length,i)} ${e}`:(o.forEach(c=>{var m,T;d.push(` ${(c==null?void 0:c.code)??""} ${n.label.for} ${n.label.apartment} ${((T=(m=c==null?void 0:c.bill)==null?void 0:m.unit)==null?void 0:T.name)??""}`)}),e+=` ${n.label.activity_manual} ${U(d,i)}`))}if(t.actionName===a.CREATE&&t.content.indexOf("AUTO")!==-1){const{data:o=[]}=g(t),d=[];Array.isArray(o)&&(o.forEach(c=>{var m,T,p,w,F;c&&c.code===ln&&d.push(` ${((T=(m=c==null?void 0:c.data)==null?void 0:m.bill)==null?void 0:T.code)??""} ${n.label.for} ${n.label.apartment} ${((F=(w=(p=c==null?void 0:c.data)==null?void 0:p.bill)==null?void 0:w.unit)==null?void 0:F.name)??""}`)}),d.length>0?o.length>Y?e=`${n.label.activity_auto} ${r(o.length,i)} ${e}`:e+=` ${n.label.activity_auto} ${U(d,i)}`:e+=` ${n.label.activity_auto} ${n.label.unsuccessful.toLowerCase()}`)}if(t.actionName===a.DELETE){const{data:o=[]}=g(t),d=[];Array.isArray(o)&&(o.length>Y?e=`${r(o.length,i)} ${e}`:(o.forEach(c=>{var m;d.push(((m=c==null?void 0:c.bill)==null?void 0:m.code)??"")}),e+=` ${U(d,i)}`))}if(t.actionName===a.UPDATE){const{dataSuccess:o=[]}=g(t),d=[];Array.isArray(o)&&(o.length>3?e=`${r(o.length,i)} ${e}`:(o.forEach(c=>{d.push((c==null?void 0:c.code)??"")}),e+=` ${U(d,i)}`))}}if(t.module===C.INVOICE&&(t.actionName===a.SEND||t.actionName===a.UPDATE||t.actionName===a.DELETE)){const o=((ut=(Gt=t==null?void 0:t.request)==null?void 0:Gt.body)==null?void 0:ut.name)??"";e+=` ${r(o,i)}`}if(t.module===C.RECEIPT){const{data:o={}}=g(t),d=(((Bt=(kt=t==null?void 0:t.request)==null?void 0:kt.body)==null?void 0:Bt.payer)??"")||((o==null?void 0:o.payer)??""),c=(o==null?void 0:o.code)??"";if((t.actionName===a.UPDATE||t.actionName===a.CANCEL||t.actionName===a.READ)&&(e+=` ${r(c,i)} ${n.label.for} ${r(d,i)}`),t.actionName===a.CREATE)if(t.content.indexOf("MANUAL")!==-1)e+=` ${n.label.activity_manual} ${r(c,i)} ${n.label.for} ${r(d,i)}`;else{const m=((Xt=(Ht=t==null?void 0:t.request)==null?void 0:Ht.body)==null?void 0:Xt.address)??"";e+=m?` ${n.unit.toLowerCase()} ${r(m,i)}`:""}}if(t.module===C.PAYSLIP){const{data:o={},code:d}=g(t),c=((o==null?void 0:o.payer)??"")||(((Kt=(jt=t==null?void 0:t.request)==null?void 0:jt.body)==null?void 0:Kt.payer)??""),m=((o==null?void 0:o.code)??"")||(((Qt=(Jt=t==null?void 0:t.request)==null?void 0:Jt.body)==null?void 0:Qt.code)??"");(t.actionName===a.UPDATE||t.actionName===a.DELETE||t.actionName===a.CANCEL)&&(e+=` ${r(m,i)} ${n.label.for} ${r(c,i)}`),t.actionName===a.CREATE&&(ot(o)||d)&&(e+=` ${n.label.failure.toLowerCase()} ${r(m,i)} ${n.label.for} ${r(c,i)} at ${q(((Wt=(zt=t==null?void 0:t.request)==null?void 0:zt.body)==null?void 0:Wt.createdAt)??"").format("DD/MM/YYYY")}`),t.actionName===a.CREATE&&!ot(o)&&!d&&(e+=` ${r(m,i)} ${n.label.for} ${r(c,i)}`)}if(t.module===C.LABEL){if(t.actionName===a.CREATE||t.actionName===a.UPDATE){const o=((xt=(Zt=t==null?void 0:t.request)==null?void 0:Zt.body)==null?void 0:xt.title)??"";(((te=(vt=t==null?void 0:t.request)==null?void 0:vt.body)==null?void 0:te.isGroup)??!1)&&(e=n.label.folder.toLowerCase()),e+=` ${r(o,i)}`}if(t.actionName===a.DELETE){const o=((oe=(ee=t==null?void 0:t.request)==null?void 0:ee.body)==null?void 0:oe.title)??"",d=((ie=(ne=t==null?void 0:t.request)==null?void 0:ne.body)==null?void 0:ie.isGroup)??!1,c=((ce=t==null?void 0:t.response)==null?void 0:ce.statusCode)??200;d&&(e=n.label.folder.toLowerCase()),e=`${e} ${r(o,i)}`,Nn.includes(c)&&(e=`${e} ${n.status.unsuccessful.toLowerCase()}`)}}if(t.module===C.ANNOUNCEMENT){if(t.actionName===a.CREATE||t.actionName===a.UPDATE){const o=((ae=(re=t==null?void 0:t.request)==null?void 0:re.body)==null?void 0:ae.title)??"";e+=` ${r(o,i)}`}if(t.actionName===a.DELETE){const{data:o={}}=g(t),d=(o==null?void 0:o.title)??"";e+=` ${r(d,i)}`}}if(t.module===C.DOCUMENT){if(t.actionName===a.CREATE||t.actionName===a.UPDATE){const o=((fe=(de=t==null?void 0:t.request)==null?void 0:de.body)==null?void 0:fe.name)??"";e+=` ${r(o,i)}`}if(t.actionName===a.DELETE){const{data:o={}}=g(t),d=(o==null?void 0:o.name)??"";e+=` ${r(d,i)}`}}if(t.module===C.VISITOR){const o=((Ee=(se=(me=t==null?void 0:t.response)==null?void 0:me.body)==null?void 0:se.data)==null?void 0:Ee.code)??"";e+=` ${r(o,i)}`}if(t.module===C.ELEVATOR_RESERVATION){const o=((Le=(Ce=(Te=t==null?void 0:t.response)==null?void 0:Te.body)==null?void 0:Ce.data)==null?void 0:Le.code)??"";e+=` ${r(o,i)}`}if(t.module===C.CARD){const o=((Ae=t==null?void 0:t.request)==null?void 0:Ae.url)??"";if(t.actionName===a.CREATE||t.actionName===a.UPDATE)if(o.indexOf("register")!==-1){const d=((le=(ge=t==null?void 0:t.request)==null?void 0:ge.body)==null?void 0:le.cardFormCode)??"",c=(($e=(Ne=t==null?void 0:t.request)==null?void 0:Ne.body)==null?void 0:$e.unitName)??"";c?e=` ${n.label.registration_form.toLowerCase()} ${n.label.card.toLowerCase()} ${r(d,i)} ${n.label.for} ${n.label.apartment} ${r(c,i)}`:e=` ${n.label.registration_form.toLowerCase()} ${n.label.card.toLowerCase()} ${r(d,i)}`}else{const d=((he=(ye=t==null?void 0:t.request)==null?void 0:ye.body)==null?void 0:he.code)??"";if((((pe=t==null?void 0:t.request)==null?void 0:pe.fullUrl)??"").indexOf("update-multi")!==-1){const m=((be=(Re=t==null?void 0:t.request)==null?void 0:Re.body)==null?void 0:be.labels)??[];e=`${n.label.status1.toLowerCase()} ${r(d,i)} ${e} ${r(U(m,i),i)}`}else e+=` ${r(d,i)}`}if(t.actionName===a.DELETE){const d=((_e=(Pe=t==null?void 0:t.request)==null?void 0:Pe.body)==null?void 0:_e.labels)??[],c=((Ie=(Oe=t==null?void 0:t.request)==null?void 0:Oe.body)==null?void 0:Ie.ids)??[],m=((De=(Se=t==null?void 0:t.request)==null?void 0:Se.body)==null?void 0:De.isCheckAll)??!1,p=o.indexOf("register")!==-1?n.label.registration_form.toLowerCase():n.label.card.toLowerCase();m?e=` ${r(n.label.all.toLowerCase(),i)} ${p}`:d.length>Y?e=`${c.length} ${p}`:e=`${p} ${U(d,i)}`}if(t.actionName===a.PRINT&&(e=` ${n.label.registration_form.toLowerCase()}`),t.actionName===a.IMPORT){const d=Array.isArray((Ue=(we=t==null?void 0:t.request)==null?void 0:we.body)==null?void 0:Ue.data)?(qe=(Ye=(Me=t==null?void 0:t.request)==null?void 0:Me.body)==null?void 0:Ye.data)==null?void 0:qe.length:(ue=(Ge=(Ve=(Fe=t==null?void 0:t.request)==null?void 0:Fe.body)==null?void 0:Ve.data)==null?void 0:Ge.split(","))==null?void 0:ue.length;e=`${r(d||"",i)} ${n.card.toLowerCase()}`}}if(t.module===C.UNIT_GROUP&&(((ke=t==null?void 0:t.request)==null?void 0:ke.url)??"").indexOf(C.LOCK_DATE)!==-1){const d=((He=(Be=t==null?void 0:t.request)==null?void 0:Be.body)==null?void 0:He.lockDataAt)??"",c=d?q(d).format("DD/MM/YYYY-HH:mm"):"";t.actionName===a.CREATE&&(e=`${P["lock-date"]} ${n.label.to2} ${r(c,i)}`),t.actionName===a.UPDATE&&(e=`${P["lock-date"]} ${n.label.to2} ${r(c,i)}`)}if(t.module===C.HELP_DESK){if(t.actionName===a.APPROVE){const o=((Ke=(je=(Xe=t==null?void 0:t.response)==null?void 0:Xe.body)==null?void 0:je.data)==null?void 0:Ke.code)??"";e+=` ${r(o,i)}`}else if(t.actionName===a.COMPLETE){const o=((ze=(Qe=(Je=t==null?void 0:t.response)==null?void 0:Je.body)==null?void 0:Qe.data)==null?void 0:ze.code)??"";e+=` ${r(o,i)}`}}if(t.module===C.GROUP_SYSTEM){if(t.actionName===a.CREATE||t.actionName===a.UPDATE){const o=((xe=(Ze=(We=t==null?void 0:t.response)==null?void 0:We.body)==null?void 0:Ze.data)==null?void 0:xe.name)??"";e+=` ${r(o,i)}`}if(t.actionName===a.DELETE){const{data:o={}}=g(t),d=(o==null?void 0:o.name)??"";e+=` ${r(d,i)}`}}if(t.module===C.SYSTEM){const o=n.belongs_to_the_group_system.toLowerCase();let d="";if(t.actionName===a.CREATE){const c=((eo=(to=(ve=t==null?void 0:t.response)==null?void 0:ve.body)==null?void 0:to.data)==null?void 0:eo.name)??"";d=((io=(no=(oo=t==null?void 0:t.response)==null?void 0:oo.body)==null?void 0:no.data)==null?void 0:io.groupSystemName)??"",e+=` ${r(c,i)} ${o} ${r(d,i)}`}if(t.actionName===a.DELETE||t.actionName===a.UPDATE){const{data:c={}}=g(t),m=(c==null?void 0:c.name)??"";d=((fo=(ao=(ro=(co=t==null?void 0:t.response)==null?void 0:co.body)==null?void 0:ro.data)==null?void 0:ao.groupSystem)==null?void 0:fo.name)??"",e+=` ${r(m,i)} ${o}  ${r(d,i)}`}}if(t.module===C.MAINTENANCE_SCHEDULE){const o=` ${n.of.toLowerCase()} ${n.system.toLowerCase()}`,d=n.belongs_to_the_group_system.toLowerCase();let c="",m="";if(t.actionName===a.CREATE&&(c=((Eo=(so=(mo=t==null?void 0:t.response)==null?void 0:mo.body)==null?void 0:so.data)==null?void 0:Eo.systemName)??"",m=((Lo=(Co=(To=t==null?void 0:t.response)==null?void 0:To.body)==null?void 0:Co.data)==null?void 0:Lo.groupSystemName)??"",e+=` ${o} ${r(c,i)} ${d} ${r(m,i)}`),t.actionName===a.DELETE||t.actionName===a.UPDATE){c=((No=(lo=(go=(Ao=t==null?void 0:t.response)==null?void 0:Ao.body)==null?void 0:go.data)==null?void 0:lo.system)==null?void 0:No.name)??"",m=((Ro=(po=(ho=(yo=($o=t==null?void 0:t.response)==null?void 0:$o.body)==null?void 0:yo.data)==null?void 0:ho.system)==null?void 0:po.groupSystem)==null?void 0:Ro.name)??"";const{data:T={}}=g(t),p=(T==null?void 0:T.name)??"";e+=` ${r(p,i)} ${o} ${r(c,i)} ${d} ${r(m,i)}`}}if(t.module===C.REQUEST&&t.actionName===a.CREATE){const o=((_o=(Po=(bo=t==null?void 0:t.response)==null?void 0:bo.body)==null?void 0:Po.data)==null?void 0:_o.description)??"";e+=` ${r(o,i)}`}if(t.module===C.SUPPLY){if(t.actionName===a.CREATE||t.actionName===a.UPDATE){const o=((Io=(Oo=t==null?void 0:t.request)==null?void 0:Oo.body)==null?void 0:Io.name)??"";e+=` ${r(o,i)}`}if(t.actionName===a.DELETE){const{data:o={}}=g(t),d=(o==null?void 0:o.name)??"";e+=` ${r(d,i)}`}}if(t.module===C.ADJUSTMENT){const{data:o={}}=g(t);if(t.actionName===a.CREATE){if((So=t==null?void 0:t.content)!=null&&So.includes("multi")){const d=((wo=(Do=t==null?void 0:t.request)==null?void 0:Do.body)==null?void 0:wo.length)??0,c=(o==null?void 0:o.length)??0,m=d-c;e=`${n.label.success.toLowerCase()} ${r(m,i)}/${r(d,i)}  ${n.adjustment_voucher.toLowerCase()}`}(Uo=t==null?void 0:t.content)!=null&&Uo.includes("multi")||(e=`${n.label.success.toLowerCase()} ${n.adjustment_voucher.toLowerCase()}`)}}if(t.module===C.UNIT_ACCOUNT){const o=n.for.toLowerCase(),d=n.service.toLowerCase();let c="";if(t.actionName===a.CREATE){const{data:m}=(Mo=t==null?void 0:t.response)==null?void 0:Mo.body,T=((Yo=m==null?void 0:m.service)==null?void 0:Yo.name)??"";c=((qo=m==null?void 0:m.unit)==null?void 0:qo.name)??"",e+=` ${d} ${r(T,i)} ${o} ${r(c,i)}`}if(t.actionName===a.IMPORT){const{data:m}=g(t);(m==null?void 0:m.success)>0&&(e=`${r(m==null?void 0:m.success,i)} ${e}`)}}if(t.module===C.CONSTRUCTION_REGISTRATION){const o=((Go=(Vo=(Fo=t==null?void 0:t.response)==null?void 0:Fo.body)==null?void 0:Vo.data)==null?void 0:Go.code)??"";e+=` ${r(o,i)}`}if(t.module===C.CARD_REGISTRATION){const o=((Bo=(ko=(uo=t==null?void 0:t.response)==null?void 0:uo.body)==null?void 0:ko.data)==null?void 0:Bo.code)??"";e+=` ${r(o,i)}`}return e}function un(t,i=!1){var f,y,N,$,l,h,O,M,_,I,b,D,u,k,B,H,X,j,K,J,Q,z,W,Z,x,v;let e=t.content;const s=t.content.indexOf(" ",7);if(e=e.replace(e.slice(s+1,e.length),Gn(t,i)),e=e.replace("{who}",`${r(t.manager,i)}`),t.actionName===a.CREATE&&[C.CONTRACT,C.SERVICE].includes(t.module))return e=e.replace(t.actionName,n.save_number),e;if(t.actionName===a.EXPORT&&C.SUPPLY===t.module&&(y=(f=t==null?void 0:t.request)==null?void 0:f.fullUrl)!=null&&y.includes("export-inventory-report"))return e=e.replace(t.actionName,n.export_inventory_report.toLowerCase()).replace(P[t.module].toLowerCase(),""),e;if(t.actionName===a.IMPORT&&C.SUPPLY===t.module&&($=(N=t==null?void 0:t.request)==null?void 0:N.fullUrl)!=null&&$.includes("import-available"))return e=e.replace(t.actionName,n.import_available_supply.toLowerCase()).replace(new RegExp(`${P[t.module].toLowerCase()}$`),""),e;if(t.actionName===a.UPDATE&&C.SUPPLY===t.module&&(h=(l=t==null?void 0:t.request)==null?void 0:l.fullUrl)!=null&&h.includes("update-amount")){const S=(_=(M=(O=t==null?void 0:t.response)==null?void 0:O.body)==null?void 0:M.data)==null?void 0:_.name,rt=(b=(I=t==null?void 0:t.request)==null?void 0:I.body)==null?void 0:b.amount,at=(k=(u=(D=t==null?void 0:t.response)==null?void 0:D.body)==null?void 0:u.data)==null?void 0:k.measureUnit,tt=`${r(`${S} ${n.quantity.toLowerCase()} ${rt} ${at}`,i)}`;if(((H=(B=t==null?void 0:t.request)==null?void 0:B.body)==null?void 0:H.type)===_n)return e=e.replace(t.actionName,`${n.import_warehouse.toLowerCase()} ${tt}`).replace(`${P[t.module].toLowerCase()}`,"").replace(/\s+/g," "),e;if(((j=(X=t==null?void 0:t.request)==null?void 0:X.body)==null?void 0:j.type)===On)return e=e.replace(t.actionName,`${n.export_warehouse.toLowerCase()} ${tt}`).replace(`${P[t.module].toLowerCase()}`,"").replace(/\s+/g," "),e}if(t.actionName===a.UPDATE&&C.BILL===t.module)return e=e.replace(t.actionName,n.edited.toLowerCase()).replace(P[t.module].toLowerCase(),n.bills.toLowerCase()),e;if(t.actionName===a.UPDATE&&C.UNIT_ACCOUNT===t.module){const S=(Q=(J=(K=t==null?void 0:t.response)==null?void 0:K.body)==null?void 0:J.data)==null?void 0:Q.name;return e=e.replace(t.actionName,n.transferred_money.toLowerCase()).replace(P[t.module].toLowerCase(),`${r(S,i)}`),e}if(t.actionName===a.CREATE&&t.module===C.PAYMENT)return e=e.replace(t.actionName,`${n.deducted.toLowerCase()} ${n.label.service_advance_payment.toLowerCase()}`),e;const E={[a.IN_PROGRESS]:{text:n.confirm_in_progress.toLowerCase()},[a.COMPLETE]:{text:n.confirm_completed.toLowerCase()}};if(C.CARD_REGISTRATION===t.module){const S=E[t.actionName];S&&(e=e.replace(t.actionName,S.text).replace(P[t.module].toLowerCase(),`${n.request_card_registration.toLowerCase()}`))}const L={[a.IN_PROGRESS]:{text:n.confirm_in_progress.toLowerCase()},[a.COMPLETE]:{text:n.confirm_completed.toLowerCase()}};if(C.CONSTRUCTION_REGISTRATION===t.module){const S=L[t.actionName];S&&(e=e.replace(t.actionName,S.text).replace(P[t.module].toLowerCase(),`${n.request_construction_registration.toLowerCase()}`))}if(t.actionName===a.EXPORT&&C.CONTRACT===t.module){const S=(z=t==null?void 0:t.queryParams)==null?void 0:z.serviceName;return e=e.replace(P[t.module].toLowerCase(),`${r(S,i)}`).replace(t.actionName,n.export_list_contract_of_service.toLowerCase()),e}return t.actionName===a.EXPORT&&t.module===C.CARD?(e=e.replace(t.actionName,`${n.export_list_registration_form.toLowerCase()}`).replace(P[t.module].toLowerCase(),""),e):t.actionName===a.EXPORT&&t.module===C.REQUEST?(e=e.replace(t.actionName,`${n.export_list_task.toLowerCase()}`).replace(P[t.module].toLowerCase(),""),e):t.actionName===a.EXPORT&&((W=t.content)!=null&&W.includes("merchant-amenities"))?(e=(Z=e.replace(t.actionName,Tt[t.actionName]))==null?void 0:Z.replace(P[t.module].toLowerCase(),n.amenities_merchant_orders.toLowerCase()),e):t.actionName===a.EXPORT&&((x=t.content)!=null&&x.includes("operating"))?(e=(v=e.replace(t.actionName,Tt[t.actionName]))==null?void 0:v.replace(P[t.module].toLowerCase(),n.label.financial_report.toLowerCase()),e):(e=e.replace(t.actionName,Tt[t.actionName]),e)}const Zo=(t,i=!1)=>({id:t.id,avatar:"/assets/images/default-avatar.jpg",content:un(t,i),actionAt:t.actionDate,manager:t.manager}),Lt=async({idBuilding:t,filter:i,page:e,limit:s})=>{try{const{manager:E,action:L,time:f}=i,y=f!=null&&f[0]?q(f[0]).format("DD-MM-YYYY"):void 0,N=f!=null&&f[1]?q(f[1]).format("DD-MM-YYYY"):void 0,$=await Wo({idBuilding:t,filter:{manager:E||void 0,feature:L||void 0,from:y,to:N},page:e,limit:s});return{code:$.code,codeLanguage:$.codeLanguage,data:$.data.map(l=>Zo(l))}}catch(E){return{code:E.code,codeLanguage:E.codeLanguage,data:[]}}},kn=({id:t,email:i,fullName:e,phone:s,birthday:E,gender:L,positions:f,cardNumber:y,startWork:N,endWork:$,address:l,note:h,status:O,userId:M})=>{const _=[];return f&&f.forEach(I=>{var b;_.push({department:(b=I==null?void 0:I.department)==null?void 0:b.name,position:I.name})}),{key:t,id:t,email:i,name:e,phone:s,birthday:E,gender:L,positions:f,departments:_,cardNumber:y,startWork:N,endWork:$,address:l,note:h,status:O,userId:M}},Bn=async({idBuilding:t,filter:i})=>{const{name:e}=i;try{const s=await In({filter:{name:e||void 0},idBuilding:t,limit:ct,page:it});return{code:s.code,codeLanguage:s.codeLanguage,data:s.data.map(E=>kn(E)),totalRecord:s.totalRecord}}catch(s){return{code:s.code,codeLanguage:s.codeLanguage,data:[],totalRecord:0}}},Hn=()=>{const{idBuilding:t}=ft(),{setGetListLogActivityStatus:i,setListLogActivity:e,setFilter:s,setIsEndOfListLogActivity:E,isShowFilterStaff:L}=R.useContext(G),[f,y]=R.useState({records:[],isFetching:!1}),N=async l=>{y({...f,isFetching:!0});const h=await Bn({filter:{name:l||""},idBuilding:t});y({records:h.data,isFetching:!1})};R.useEffect(()=>{L&&(async()=>await N())()},[]);const $=async l=>{i({isFetching:!0}),s({...l});const h=await Lt({filter:{...l},idBuilding:t,limit:ct,page:it});h.data.length===0?E(!0):E(!1),e(h.data),i({isFetching:!1})};return[L,f.isFetching,f.records,N,$]},Xn=()=>{const[t,i,e,s,E]=Hn(),L=R.useMemo(()=>[t?{label:n.manager,key:"manager",component:A(et,{allowClear:!0,showSearch:!0,placeholder:n.all_staff,filterOption:!1,loading:i,onSearch:vo(s),style:{width:"100%"},getPopupContainer:f=>f.parentNode,dropdownRender:f=>i?A("div",{style:{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"},children:A(zo,{})}):f,fluid:"true",children:e.map(f=>A(et.Option,{value:f.userId,children:f.name},f.userId))}),visible:!0}:null,{label:n.action,key:"action",component:nt(et,{placeholder:n.action,fluid:"true",getPopupContainer:f=>f.parentNode,children:[A(et.Option,{value:"",children:n.all_action},"action_0"),wn.map(f=>A(et.Option,{value:f.value,children:f.label},f.value))]}),visible:!0},{label:n.time,key:"time",component:A(Qo.RangePicker,{placeholder:[dt,dt],fluid:"true",format:[dt,dt],getPopupContainer:f=>f.parentNode}),visible:!0}].filter(Boolean),[e]);return A(V.FilterBox,{defaultFilter:mt,filters:L,onSearch:E})},jn=()=>{const{idBuilding:t}=ft(),{filter:i,listLogActivity:e,getListLogActivityStatus:s,isEndOfListLogActivity:E,setIsEndOfListLogActivity:L,setGetListLogActivityStatus:f,setListLogActivity:y,setListPagination:N,listPagination:$}=R.useContext(G),l=async()=>{if(!s.isFetching&&!E){f({isFetching:!0});const h=$+1;N(h);const O=await Lt({filter:{...i},idBuilding:t,limit:ct,page:h});O.data.length===0?L(!0):L(!1),y([...e,...O.data]),f({isFetching:!1})}};return[s.isFetching,!E,e,l]};var Kn={name:"sqkazh",styles:"align-items:center;& .ant-list-item-meta-title{margin-bottom:0;}"},Jn={name:"11exufj",styles:"position:absolute;top:0;bottom:0;left:0;right:0;display:flex;justify-content:center;align-items:center"};const Qn=()=>{const[t,i,e,s]=jn();return nt(xo,{children:[A(Sn,{scrollThreshold:.95,dataLength:e.length,next:s,hasMore:i,scrollableTarget:"scrollableListRoom",endMessage:!1,children:A(st,{split:!0,dataSource:e,renderItem:E=>A(st.Item,{css:L=>({cursor:"pointer",padding:`${L.padding.xs}px`,position:"relative"}),children:A(st.Item.Meta,{css:Kn,avatar:A(Rn,{size:"large",src:E.avatar}),title:A("div",{dangerouslySetInnerHTML:{__html:E.content}}),description:A("h5",{css:L=>({color:L.disabledColor,margin:0}),children:E.actionAt||"-"})})},E.id)})}),t?A("div",{css:Jn,children:A(zo,{})}):null]})},zn=async({idBuilding:t,filter:i,page:e,limit:s})=>{try{const{manager:E,action:L,time:f}=i,y=f!=null&&f[0]?q(f[0]).format("DD-MM-YYYY"):void 0,N=f!=null&&f[1]?q(f[1]).format("DD-MM-YYYY"):void 0,$=await Wo({idBuilding:t,filter:{manager:E||void 0,feature:L||void 0,from:y,to:N},page:e,limit:s});return{code:$.code,codeLanguage:$.codeLanguage,data:$.data.map(l=>Zo(l,!0))}}catch(E){return{code:E.code,codeLanguage:E.codeLanguage,data:[]}}},Wn=()=>{const{idBuilding:t}=ft(),{hideModalExportData:i,filter:e}=R.useContext(G),[s,E]=R.useState({isFetching:!1}),[L,f]=R.useState(q()),y=l=>{f(l)},N=async()=>{E({isFetching:!0});const l=[];let h=1;for(;h;){const O=q(L).startOf("month").startOf("day"),M=q(L).endOf("month").endOf("day"),_=await zn({filter:{time:[O,M],manager:e.manager,action:e.action},idBuilding:t,limit:ct,page:h});if(_.data.length>0){const I=l.length;for(let b=0;b<_.data.length;b+=1){const D=[I+b+1];D.push(_.data[b].manager),D.push(_.data[b].content),D.push(_.data[b].actionAt),l.push(D)}h+=1}else h=0}l.unshift(["#","Quản lý","Hoạt động","Ngày tạo"]),Dn(l,"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8","thong-tin-lich-su-hoat-dong",".xlsx"),E({isFetching:!1}),bn.success({description:n.success,message:n.export_data_success})},$=()=>i();return[s.isFetching,L,y,N,$]},Zn=()=>{const[t,i,e,s,E]=Wn();return nt(en,{open:!0,title:n.export_data,okText:n.export,cancelText:n.cancel,onOk:s,onCancel:E,okButtonProps:{loading:t,disabled:t},children:[A(tn,{children:n.month}),A(Qo,{allowClear:!1,picker:"month",format:"MM/YYYY",fluid:!0,value:i,onChange:e,placeholder:n.month}),t?A(Pn,{strokeColor:{from:"#108ee9",to:"#87d068"},percent:100,status:"active",showInfo:!1,css:L=>({marginTop:L.margin.xs})}):null]})},xn=()=>{const{idBuilding:t}=ft(),{setTitlePage:i,setVisibleFilterBox:e,setVisibleSearchBox:s}=R.useContext(hn),{setGetListLogActivityStatus:E,setListLogActivity:L,setIsEndOfListLogActivity:f,modalExportData:y}=R.useContext(G);return R.useEffect(()=>(i(n.activity),s(!0),(async()=>{E({isFetching:!0});const N=await Lt({filter:{...mt},idBuilding:t,limit:ct,page:it});N.data.length===0&&f(!0),L(N.data),E({isFetching:!1})})(),()=>{i(""),s(!1),e(!1)}),[]),[y.isShow]},vn=()=>{const[t]=xn();return nt(V.Wrapper,{children:[A(Xn,{}),nt(V.Container,{style:{position:"relative"},children:[A(V.Header,{children:A(Yn,{})}),A(V.Content,{scrollY:!0,id:"scrollableListRoom",children:A(Qn,{})})]}),t?A(Zn,{}):null]})},Yc=()=>A(Un,{children:A(vn,{})});export{Yc as default};