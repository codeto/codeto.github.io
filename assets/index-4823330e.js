import{c as se,u as le,j as e,a as o,b as L,F as w}from"./@emotion-63839449.js";import{r as T}from"./react-4fd50329.js";import{a as V,u as W}from"./react-redux-896b353b.js";import{B}from"./index-881eef42.js";import{l as de}from"./lodash-88fe09e6.js";import{h as me}from"./moment-a468e1f9.js";import{dv as z,l as i,I as k,b1 as pe,bw as ue,dw as he,Y as H,dx as ge,ai as fe,dy as ye,K as Se,a as Ee,b0 as xe,as as _e,at as ee,ag as te,au as De,aM as Re}from"./index-c2ded735.js";import"./file-saver-40cf32a9.js";import"./@firebase-43527ee1.js";import{T as Te,i as Ie,b as ke,p as v,q as A,C as P,L as Ce,a as b,w as Fe}from"./index-b17d22e5.js";import{R as K,w as Y,b as R,T as ve,G as Ae,B as q,A as Le,o as Me}from"./antd-f9eae174.js";import{u as Z,d as Be}from"./react-router-a4308f7b.js";import{I as Ne}from"./integrated-84091933.js";import{u as J,F as M}from"./index-687ba9e6.js";import{P as N}from"./prop-types-1172f4d5.js";import{a1 as re,T as ze,a2 as ae,Y as Ue}from"./@ant-design-cba9d434.js";import{P as Pe}from"./index-d2c5b7c0.js";import{I as Q,S as ie}from"./index-43183512.js";import{D as ne}from"./document-96ae7510.js";import"./hoist-non-react-statics-23d96a9a.js";import"./react-is-e8e5dbb3.js";import"./@babel-b64fd0f9.js";import"./stylis-79144faa.js";import"./classnames-4ba1ba1a.js";import"./react-dom-40621ea0.js";import"./scheduler-765c72db.js";import"./use-sync-external-store-5d1b6592.js";import"./redux-10bbab4c.js";import"./react-router-dom-2a8f5f6d.js";import"./history-a1882333.js";import"./resolve-pathname-e210f2ac.js";import"./tiny-invariant-dd7d57d2.js";import"./@redux-saga-8bafe09b.js";import"./redux-logger-e1c9ca90.js";import"./dompurify-8e338605.js";import"./query-string-f5cca1e7.js";import"./decode-uri-component-4138e85d.js";import"./split-on-first-4f1167c8.js";import"./filter-obj-2ed190f4.js";import"./oidc-client-7da0eaf7.js";import"./firebase-878887a2.js";import"./rc-pagination-c1e6a0ac.js";import"./rc-picker-2e3d5fe5.js";import"./rc-util-0bc219f3.js";import"./rc-trigger-570b13ec.js";import"./rc-motion-ae889c42.js";import"./rc-align-e5d7b12e.js";import"./dom-align-ecb06dd6.js";import"./resize-observer-polyfill-0f9f8adb.js";import"./rc-resize-observer-b9ad4e29.js";import"./@ctrl-fb5a5473.js";import"./rc-tabs-dfd19a56.js";import"./rc-dropdown-5378dd0a.js";import"./rc-menu-b15ebfe9.js";import"./rc-overflow-6be96612.js";import"./rc-select-564caf01.js";import"./rc-virtual-list-8a7b82a6.js";import"./rc-collapse-11b7d3c4.js";import"./shallowequal-4542d6f7.js";import"./rc-drawer-317f0b4d.js";import"./@rc-component-5a112e55.js";import"./rc-field-form-ef5549aa.js";import"./async-validator-dee29e8b.js";import"./scroll-into-view-if-needed-6b992d05.js";import"./compute-scroll-into-view-183f845a.js";import"./rc-image-e0357917.js";import"./rc-dialog-b1d1f07b.js";import"./rc-input-number-8bc068f7.js";import"./rc-rate-c64cf0d5.js";import"./rc-steps-2d1924c7.js";import"./rc-switch-b4e96de7.js";import"./rc-table-191ecc42.js";import"./rc-checkbox-018e8052.js";import"./rc-tree-67773537.js";import"./rc-tree-select-cb7eccc3.js";import"./copy-to-clipboard-64585c8c.js";import"./toggle-selection-93f4ad84.js";import"./rc-textarea-d01adcbb.js";import"./rc-input-02c2c2ba.js";import"./rc-upload-3ab0f08a.js";import"./rc-notification-d13dc43b.js";import"./rc-progress-4f1a7096.js";import"./rc-tooltip-08fa4217.js";import"./idb-cdd1a92f.js";import"./path-to-regexp-ef8d5544.js";import"./account-86ffff50.js";import"./libphonenumber-js-0d5a9c92.js";import"./react-infinite-scroll-component-e33646cb.js";const Ve=({idBuilding:n,idApartment:t,refreshState:c})=>({type:z.GET.REQUEST,payload:{idBuilding:n,idApartment:t,refreshState:c}}),We=()=>({type:z.REFRESH}),oe=({idBuilding:n,idApartment:t,refreshState:c})=>({type:z.RESIDENT.GETS.REQUEST,payload:{idBuilding:n,idApartment:t,refreshState:c}}),$e=({idBuilding:n,idResident:t,refreshState:c})=>({type:z.RESIDENT.REMOVE.REQUEST,payload:{idBuilding:n,idResident:t,refreshState:c}}),G=({idBuilding:n,idApartment:t,refreshState:c})=>({type:z.DOCUMENT.GETS.REQUEST,payload:{idBuilding:n,idApartment:t,refreshState:c}}),Ye=({idBuilding:n,document:t,refreshState:c})=>({type:z.DOCUMENT.ADD.REQUEST,payload:{idBuilding:n,document:t,refreshState:c}}),we=({idBuilding:n,idDocument:t,refreshState:c})=>({type:z.DOCUMENT.REMOVE.REQUEST,payload:{idBuilding:n,idDocument:t,refreshState:c}}),He=se(K,{target:"ewnn2rj1"})("padding:",n=>n.theme.padding.lg,"px ",n=>n.theme.padding.md,"px;background-color:",n=>n.theme.backgroundContent,";border:1px solid ",n=>n.theme.borderColor,";box-sizing:border-box;border-radius:",n=>n.theme.borderRadius,"px;"),ce=se(Te,{target:"ewnn2rj0"})("border:1px solid ",n=>n.theme.borderColor,";margin-top:12px;");var Qe={name:"fhxb3m",styles:"display:flex;flex-direction:row;align-items:center"};const Ge=()=>{var _,u,h,g,C;const n=le(),t=V(s=>s.apartmentDetail.info),{checkIsUsedIntegrate:c}=Ie(),m=c(Ne),E=(_=t==null?void 0:t.residents)!=null&&_.length?e(Y,{color:"success",children:i.label.in_use}):e(Y,{color:"error",children:i.label.empty}),x=W(),a=Z(),{idApartment:f,idBuilding:p}=a,[y,S]=T.useState({isFetching:!1});return T.useEffect(()=>{S({...y,isFetching:!0}),x(Ve({idApartment:f,idBuilding:p,refreshState:()=>{S({...y,isFetching:!1})}}))},[]),o(B,{children:[o(B.Header,{css:Qe,size:"small",borderBottom:!0,children:[e(k,{name:"icon-business-outlined",css:L({marginRight:n.margin.xs,fontSize:n.iconSize},"","")}),e(ke,{children:i.apartment_detail})]}),o(B.Content,{children:[t?null:e(pe,{isLoading:!0}),o(K,{style:{flex:1},gutter:[0,n.margin.sm],children:[o(R,{span:8,children:[e(v,{children:i.unit}),e(A,{children:(t==null?void 0:t.name)??"-"})]}),o(R,{span:8,children:[e(v,{children:i.floor}),e(A,{children:(t==null?void 0:t.floorName)??"-"})]}),o(R,{span:8,children:[e(v,{children:i.apartment_type}),e(A,{children:((u=t==null?void 0:t.unitType)==null?void 0:u.name)??"-"})]}),o(R,{span:8,children:[e(v,{children:i.status1}),e(A,{children:E||"-"})]}),o(R,{span:8,children:[e(v,{children:i.build_status}),e(A,{children:((h=ue[t==null?void 0:t.buildStatus])==null?void 0:h.name)??"-"})]}),o(R,{span:8,children:[e(v,{children:i.date_of_taking_apartment}),e(A,{children:t!=null&&t.dateOfTakingApartment?me(t==null?void 0:t.dateOfTakingApartment).format("DD/MM/YYYY"):"-"})]}),o(R,{span:8,children:[e(v,{children:i.label.label}),e(A,{children:(g=t==null?void 0:t.labels)!=null&&g.length?(C=t==null?void 0:t.labels)==null?void 0:C.map(s=>{var l;return((l=s==null?void 0:s.title)==null?void 0:l.length)>30?e(ve,{placement:"top",title:s==null?void 0:s.title,children:e("div",{style:{marginBottom:"5px"},children:e(Y,{color:(s==null?void 0:s.color)??"default",style:{display:"block"},children:de.truncate(s==null?void 0:s.title,{length:30})})})},s==null?void 0:s.id):e("div",{style:{marginBottom:"5px"},children:e(Y,{color:(s==null?void 0:s.color)??"default",style:{display:"block"},children:s==null?void 0:s.title})},s==null?void 0:s.id)}):null})]}),o(R,{span:16,children:[e(v,{children:i.note}),e(A,{children:(t==null?void 0:t.note)??"-"})]}),m?o(R,{span:24,children:[e(v,{children:i.intercom_usage}),e(A,{children:e(Ae,{disabled:!0,checked:(t==null?void 0:t.isUsedIntercom)||!1})})]}):null,e(R,{span:"24",children:o(He,{gutter:[0,n.margin.sm],children:[o(P,{centerVertical:!0,span:6,children:[e(k,{css:L({fontSize:n.iconSize,marginRight:n.margin.xs},"",""),name:"icomoon icon-buildings-light",title:i.area}),e("span",{children:(t==null?void 0:t.area)??"-"})]}),o(P,{centerVertical:!0,span:6,children:[e(k,{css:L({fontSize:n.iconSize,marginRight:n.margin.xs},"",""),name:"icon-meeting-room-filled",title:i.direction}),e("span",{children:(t==null?void 0:t.direction)??"-"})]}),o(P,{centerVertical:!0,span:6,children:[e(k,{css:L({fontSize:n.iconSize,marginRight:n.margin.xs},"",""),name:"icon-bathtub-filled",title:i.bathroom}),e("span",{children:(t==null?void 0:t.bathroom)??"-"})]}),o(P,{centerVertical:!0,span:6,children:[e(k,{css:L({fontSize:n.iconSize,marginRight:n.margin.xs},"",""),name:"icon-king-bed-filled",title:i.bedroom}),e("span",{children:(t==null?void 0:t.bedroom)??"-"})]}),o(P,{centerVertical:!0,span:6,children:[e(k,{css:L({fontSize:n.iconSize,marginRight:n.margin.xs},"",""),name:"icon-weekend-filled",title:i.balcony}),e("span",{children:(t==null?void 0:t.balcony)??"-"})]}),o(P,{centerVertical:!0,span:6,children:[e(k,{css:L({fontSize:n.iconSize,marginRight:n.margin.xs},"",""),name:"icon-appstore-filled",title:i.window}),e("span",{children:(t==null?void 0:t.window)??"-"})]})]})})]})]}),e(B.Footer,{})]})},O=({residentPermissionWrite:n,residentPermissionReadEncrypted:t})=>{const c=V(l=>l.apartmentDetail.residents),m=V(l=>l.apartmentDetail.info),E=W(),x=Be(),a=Z(),{idApartment:f,idBuilding:p}=a,[y]=H(),[S,_]=T.useState({isFetching:!1}),[u,h]=T.useState({isFetching:!1,code:void 0,codeLanguage:void 0});J(u.code,u.codeLanguage,{message:i.success,description:i.delete_data_success},()=>{_({isFetching:!0}),E(oe({idBuilding:p,idApartment:f,refreshState:()=>{_({isFetching:!1})}}))}),T.useEffect(()=>{_({isFetching:!0}),E(oe({idBuilding:p,idApartment:f,refreshState:()=>{_({isFetching:!1})}}))},[f]);const g=c.map(l=>({key:l.id,name:l.fullName,position:he[l.role].name,resident:l})),C=l=>{b.confirm({content:`${i.do_you_want_to_delete_this_resident}?`,title:i.confirm,okText:i.confirm,cancelText:i.cancel,onOk(r){return new Promise((d,I)=>{h({code:void 0,codeLanguage:void 0,isFetching:!0}),E($e({idBuilding:p,idResident:l,refreshState:({code:D,codeLanguage:F})=>(h({code:D,codeLanguage:F,isFetching:!1}),D===200&&r(),d)}))})},afterClose:()=>{h({code:void 0,codeLanguage:void 0,isFetching:!1})}})},s=l=>{var r;return(r=l==null?void 0:l.resident)!=null&&r.deletedAt?"disabled":""};return o(w,{children:[o("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center"},children:[e("div",{style:{display:"flex",flexDirection:"row",alignItems:"center"},children:o("span",{style:{fontWeight:y.fontWeightNormal,color:y.labelColor},children:[i.total," ",e("span",{style:{fontWeight:y.fontWeightBold,verticalAlign:"middle",color:y.blackColor},children:c.length})]})}),n?e(q,{onClick:()=>x.push(`/buildings/${p}/residents/add?unitName=${m==null?void 0:m.name}&&unitId=${f}`),type:"primary",ghost:!0,icon:e(re,{}),children:i.add}):null]}),e(ce,{size:"small",loading:S.isFetching,columns:[{title:i.name,key:"name",dataIndex:"name"},{title:i.role,key:"position",dataIndex:"position",width:150},{title:i.actions,key:"actions",dataIndex:"actions",width:120,align:"center",render:(l,r)=>{var d,I;return r.resident.status!=="DISABLED"&&n?o(w,{children:[t?e(Ce,{to:`/buildings/${p}/residents/${(d=r==null?void 0:r.resident)==null?void 0:d.id}/update?unitId=${(I=r==null?void 0:r.resident)==null?void 0:I.unitId}&&unitName=${m==null?void 0:m.name}`,children:e(ze,{style:{marginRight:"12px"}})}):null,e(ae,{onClick:()=>{var D;return C((D=r==null?void 0:r.resident)==null?void 0:D.id)}})]}):null}}],dataSource:g,pagination:!1,scroll:{y:191},emptyHeight:"118px",rowClassName:s})]})};O.propTypes={residentPermissionWrite:N.bool,residentPermissionReadEncrypted:N.bool};O.defaultProps={residentPermissionWrite:!1,residentPermissionReadEncrypted:!1};const X=({data:n,hideModal:t,callbackAfterSuccess:c})=>{const{apartment:m,idBuilding:E}=n,x=W(),[a]=M.useForm(),[f]=H(),[p,y]=T.useState({code:void 0,codeLanguage:void 0,isFetching:!1});J(p.code,p.codeLanguage,{message:i.success,description:i.add_data_success},()=>{t(),c()});const S=async()=>{var h,g,C,s,l,r,d,I;if(await a.validateFields()&&(C=(g=(h=a.getFieldValue("file"))==null?void 0:h.fileList)==null?void 0:g[0])!=null&&C.response){const D=a.getFieldValue("accessRole"),F={name:a.getFieldValue("name"),description:a.getFieldValue("description"),unitRole:Array.isArray(D)?D.join("-"):D,downloadLink:(I=(d=(r=(l=(s=a.getFieldValue("file"))==null?void 0:s.fileList)==null?void 0:l[0])==null?void 0:r.response)==null?void 0:d.data)==null?void 0:I.url,unitId:m.id,type:"UNIT_DOCUMENT"};y({code:void 0,codeLanguage:void 0,isFetching:!0}),x(Ye({idBuilding:E,document:F,refreshState:({code:U,codeLanguage:$})=>{y({code:U,codeLanguage:$,isFetching:!1})}}))}},_=()=>{t()};return e(b,{loading:p.isFetching,title:i.add_document,open:!0,onOk:S,onCancel:_,textOk:i.confirm,textCancel:i.cancel,children:o(M,{requiredMark:!1,layout:"vertical",form:a,name:"form",initialValues:{name:"",apartment:m==null?void 0:m.name,description:"",accessRole:ge},children:[e(M.Item,{rules:[{required:!0}],name:"file",children:o(Fe.Dragger,{maxCount:1,limitSizeFile:ne,module:fe,children:[e(k,{name:"icon-inbox-outlined",style:{fontSize:"48px",color:f.primaryColor}}),e("h3",{children:i.click_or_drag_file_to_this_area_to_upload}),o("p",{style:{color:f.labelColor},children:[i.file_type,": .doc .docx .pdf .jpg..."]})]})}),e(Le,{message:i.error.upload_file_size_limit.replace("{limitSize}",ne),type:"warning",showIcon:!0,closable:!0}),e(M.Item,{rules:[{required:!0}],name:"name",label:`${i.name} *`,children:e(Q,{placeholder:i.name})}),e(M.Item,{name:"description",label:i.description,children:e(Q.TextArea,{placeholder:i.description})}),e(M.Item,{name:"apartment",label:i.unit,children:e(Q,{placeholder:i.unit,disabled:!0})}),e(M.Item,{name:"accessRole",label:i.access_role,children:e(ie,{mode:"multiple",allowClear:!0,fluid:"true",placeholder:i.access_role,children:ye.map(u=>e(ie.Option,{children:u.name},u.id))})})]})})};X.propTypes={data:N.objectOf(N.any),hideModal:N.func,callbackAfterSuccess:N.func};X.defaultProps={data:{},hideModal:()=>{},callbackAfterSuccess:()=>{}};const qe=["jpg","jpeg","png","svg"],j=({documentPermissionWrite:n})=>{const t=V(r=>r.apartmentDetail.documents),c=V(r=>r.apartmentDetail.info),m=W(),[E,x]=T.useState({isFetching:!1}),[a,f]=T.useState({code:void 0,codeLanguage:void 0,isFetching:!1}),[p,y,S]=Se(),_=Z(),{idApartment:u,idBuilding:h}=_,[g]=H();J(a.code,a.codeLanguage,{message:i.success,description:i.delete_data_success},()=>{x({isFetching:!0}),m(G({idBuilding:h,idApartment:u,refreshState:()=>{x({isFetching:!1})}}))}),T.useEffect(()=>{x({isFetching:!0}),m(G({idBuilding:h,idApartment:u,refreshState:()=>{x({isFetching:!1})}}))},[u]);const C=t.map(r=>({key:r.id,name:e(q,{type:"link",onClick:()=>{Pe.open({url:r.downloadLink})},children:r.name}),document:r})),s=r=>{b.confirm({title:i.confirm,content:`${i.do_you_want_to_delete_this_document}?`,okText:i.confirm,cancelText:i.cancel,onOk(d){return new Promise((I,D)=>{f({code:void 0,codeLanguage:void 0,isFetching:!0}),m(we({idBuilding:h,idDocument:r,refreshState:({code:F,codeLanguage:U})=>(f({code:F,codeLanguage:U,isFetching:!1}),F===200&&d(),I)}))})},afterClose:()=>{f({code:void 0,codeLanguage:void 0,isFetching:!1})}})},l=()=>{x({isFetching:!0}),m(G({idBuilding:h,idApartment:u,refreshState:()=>{x({isFetching:!1})}}))};return o(w,{children:[n?o("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center"},children:[e("div",{style:{display:"flex",flexDirection:"row",alignItems:"center"},children:o("span",{style:{fontWeight:g.fontWeightNormal,color:g.labelColor},children:[i.total," ",e("span",{style:{fontWeight:g.fontWeightBold,verticalAlign:"middle",color:g.blackColor},children:t.length})]})}),e(q,{onClick:()=>y({apartment:c,idBuilding:h}),type:"primary",ghost:!0,icon:e(re,{}),children:i.add})]}):null,e(ce,{loading:E.isFetching,style:{marginTop:"12px"},columns:[{title:i.name,key:"name",dataIndex:"name"},{title:i.actions,key:"actions",dataIndex:"actions",width:120,align:"center",render:(r,d)=>{var D,F,U;const I=(D=d==null?void 0:d.document)==null?void 0:D.downloadLink.split(".").pop();return o(w,{children:[e("a",{target:qe.includes(I)||I==="pdf"?"_blank":void 0,rel:"noopener noreferrer",href:(F=d==null?void 0:d.document)==null?void 0:F.downloadLink,download:(U=d==null?void 0:d.document)==null?void 0:U.name,children:e(Ue,{style:{marginRight:"12px"}})}),n?e(ae,{onClick:()=>{var $;return s(($=d==null?void 0:d.document)==null?void 0:$.id)}}):null]})}}],dataSource:C,scroll:{y:191},pagination:!1,emptyHeight:"118px",size:"small"}),p.isShow&&e(X,{callbackAfterSuccess:l,data:p.data,hideModal:S})]})};j.propTypes={documentPermissionWrite:N.bool};j.defaultProps={documentPermissionWrite:!1};const Ci=()=>{const n=V(g=>g.apartmentDetail.info),{setVisibleSearchBox:t,setTitlePage:c}=T.useContext(Ee),{getPermissionByModuleCode:m}=xe(),[E]=H(),x=W();T.useEffect(()=>(t(!1),()=>{t(!0),c(""),x(We())}),[]),T.useEffect(()=>{var g;c(((g=n==null?void 0:n.name)==null?void 0:g.toUpperCase())??i.apartment_detail)},[n]);const a=m(_e),f=(a==null?void 0:a[ee])??!1,p=(a==null?void 0:a[te])??!1,y=(a==null?void 0:a[De])??!1,S=m(Re),_=(S==null?void 0:S[ee])??!1,u=(S==null?void 0:S[te])??!1,h=[p||y?{label:o("span",{children:[e(k,{style:{fontSize:E.fontSizeLarge,marginRight:E.marginSm},name:"icomoon icon-users-light"}),i.residents]}),key:"residents",children:e(O,{residentPermissionWrite:f,residentPermissionReadEncrypted:y})}:null,u?{label:o("span",{children:[e(k,{style:{fontSize:E.fontSizeLarge,marginRight:E.marginSm},name:"icon-DocumentPaper-outlined"}),i.documents]}),key:"documents",children:e(j,{documentPermissionWrite:_})}:null].filter(Boolean);return e("div",{style:{display:"flex",flexDirection:"column",height:"100%"},children:o(K,{gutter:[16,16],children:[e(R,{style:{display:"flex",flexDirection:"column"},span:12,children:e(Ge,{})}),[p,u].includes(!0)?e(R,{style:{display:"flex",flexDirection:"column"},span:12,children:o(B,{style:{height:"100%"},children:[e(B.Content,{style:{paddingTop:0},children:e(Me,{items:h})}),e(B.Footer,{})]})}):null]})})};export{Ci as default};