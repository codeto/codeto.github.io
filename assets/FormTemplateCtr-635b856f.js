import{j as n,a as A}from"./@emotion-63839449.js";import{r as s}from"./react-4fd50329.js";import"./lodash-88fe09e6.js";import{h as t}from"./moment-a468e1f9.js";import{l as x,Y as oe,b1 as ae,a as re,b0 as ne,an as ie,at as me}from"./index-c2ded735.js";import"./file-saver-40cf32a9.js";import"./react-redux-896b353b.js";import{F as ce,u as se}from"./index-687ba9e6.js";import"./@firebase-43527ee1.js";import{a as pe,s as le}from"./buildingTemplate-dc865780.js";import{I as O}from"./index-43183512.js";import{B as P}from"./index-881eef42.js";import{P as i}from"./prop-types-1172f4d5.js";import{R as de,b as X,B as Z}from"./antd-f9eae174.js";import{u as fe,d as ge}from"./react-router-a4308f7b.js";import"./hoist-non-react-statics-23d96a9a.js";import"./react-is-e8e5dbb3.js";import"./@babel-b64fd0f9.js";import"./stylis-79144faa.js";import"./classnames-4ba1ba1a.js";import"./redux-10bbab4c.js";import"./react-router-dom-2a8f5f6d.js";import"./history-a1882333.js";import"./resolve-pathname-e210f2ac.js";import"./tiny-invariant-dd7d57d2.js";import"./react-dom-40621ea0.js";import"./scheduler-765c72db.js";import"./@redux-saga-8bafe09b.js";import"./redux-logger-e1c9ca90.js";import"./dompurify-8e338605.js";import"./query-string-f5cca1e7.js";import"./decode-uri-component-4138e85d.js";import"./split-on-first-4f1167c8.js";import"./filter-obj-2ed190f4.js";import"./oidc-client-7da0eaf7.js";import"./firebase-878887a2.js";import"./rc-pagination-c1e6a0ac.js";import"./rc-picker-2e3d5fe5.js";import"./rc-util-0bc219f3.js";import"./rc-trigger-570b13ec.js";import"./rc-motion-ae889c42.js";import"./rc-align-e5d7b12e.js";import"./dom-align-ecb06dd6.js";import"./resize-observer-polyfill-0f9f8adb.js";import"./rc-resize-observer-b9ad4e29.js";import"./@ant-design-cba9d434.js";import"./@ctrl-fb5a5473.js";import"./rc-tabs-dfd19a56.js";import"./rc-dropdown-5378dd0a.js";import"./rc-menu-b15ebfe9.js";import"./rc-overflow-6be96612.js";import"./rc-select-564caf01.js";import"./rc-virtual-list-8a7b82a6.js";import"./rc-collapse-11b7d3c4.js";import"./shallowequal-4542d6f7.js";import"./rc-drawer-317f0b4d.js";import"./@rc-component-5a112e55.js";import"./rc-field-form-ef5549aa.js";import"./async-validator-dee29e8b.js";import"./scroll-into-view-if-needed-6b992d05.js";import"./compute-scroll-into-view-183f845a.js";import"./rc-image-e0357917.js";import"./rc-dialog-b1d1f07b.js";import"./rc-input-number-8bc068f7.js";import"./rc-rate-c64cf0d5.js";import"./rc-steps-2d1924c7.js";import"./rc-switch-b4e96de7.js";import"./rc-table-191ecc42.js";import"./rc-checkbox-018e8052.js";import"./rc-tree-67773537.js";import"./rc-tree-select-cb7eccc3.js";import"./copy-to-clipboard-64585c8c.js";import"./toggle-selection-93f4ad84.js";import"./rc-textarea-d01adcbb.js";import"./rc-input-02c2c2ba.js";import"./rc-upload-3ab0f08a.js";import"./rc-notification-d13dc43b.js";import"./rc-progress-4f1a7096.js";import"./rc-tooltip-08fa4217.js";import"./use-sync-external-store-5d1b6592.js";import"./idb-cdd1a92f.js";import"./path-to-regexp-ef8d5544.js";function R(T){const[Y]=oe(),{isFetchingGets:h,header:d,contentPreview:m,footer:e,onChangeHeader:y,onChangeFooter:S,isFetching:H,onClickBtnCancel:v,onClickBtnConfirm:u,templatePermissionWrite:M}=T;return h?n(ae,{width:"50px",height:"50px",isLoading:h}):A(P,{style:{display:"flex",flexDirection:"column",flex:1,height:"100%"},children:[n(P.Content,{style:{display:"flex",flexDirection:"column"},children:n(ce,{style:{display:"flex",flexDirection:"column",flex:1},layout:"vertical",name:"form",children:A(de,{style:{flex:1},gutter:[24,0],children:[A(X,{style:{display:"flex",flexDirection:"column",justifyContent:"space-between"},span:"8",children:[n(O.TextArea,{style:{flex:1,marginBottom:Y.marginSm},value:d,max:1e4,onChange:p=>y(p.target.value)}),n(O.TextArea,{style:{flex:1,marginTop:Y.marginSm},value:e,max:1e4,onChange:p=>S(p.target.value)})]}),n(X,{style:{display:"flex",flexDirection:"column",flex:1},span:"16",children:n("div",{style:{border:"1px solid #ddd",flex:1},children:n("iframe",{title:"iframe",frameBorder:"0",style:{width:"100%",height:"100%"},srcDoc:m})})})]})})}),A(P.Footer,{borderTop:!0,style:{textAlign:"right"},children:[n(Z,{onClick:v,style:{marginRight:Y.margin},children:x.label.cancel}),M?n(Z,{loading:H,type:"primary",onClick:u,children:x.label.confirm}):null]})]})}R.propTypes={isFetchingGets:i.bool,header:i.string,contentPreview:i.string,footer:i.string,onChangeHeader:i.func,onChangeFooter:i.func,isFetching:i.bool,onClickBtnCancel:i.func,onClickBtnConfirm:i.func,templatePermissionWrite:i.bool};R.defaultProps={isFetchingGets:!1,header:"",contentPreview:"",footer:"",onChangeHeader:()=>{},onChangeFooter:()=>{},isFetching:!1,onClickBtnCancel:()=>{},onClickBtnConfirm:()=>{},templatePermissionWrite:!1};const r={avatar:"/assets/images/cyhome-logo.png",name:"Tòa nhà Tam Thanh",address:"Số 1 Thái Hà",district:"Thái Hà",city:"Hà Nội",hotline:"0345888888",email:"support@cyfeer.com",management:{name:"CyHome",address:"Số 1 Thái Hà",district:"Thái Hà",city:"Hà Nội",hotline:"0345888888",email:"support@cyfeer.com"},investor:{name:"CyHome",address:"Số 1 Thái Hà",district:"Thái Hà",city:"Hà Nội",hotline:"0345888888",email:"support@cyfeer.com"},date:new Date},Ye="Nguyễn Văn Tuấn",he="Vũ Thị Lan",ue="0000001",Me="hakcos",ye="A101",ve="Vũ Văn Tuấn";function bt(){const{buildings:T}=s.useContext(re),Y=fe(),h=ge(),{idBuilding:d,nameTemplate:m}=Y,e=s.useMemo(()=>T.find(a=>a.id===d)||{}),[y,S]=s.useState({header:"",body:"",footer:""}),[H,v]=s.useState({isFetching:!1}),[u,M]=s.useState({isFetching:!1,code:void 0,codeLanguage:void 0}),[p,E]=s.useState(""),[D,B]=s.useState(""),[b,k]=s.useState(""),{getPermissionByModuleCode:Q}=ne(),N=Q(ie),z=(N==null?void 0:N[me])??!1;se(u.code,u.codeLanguage,{message:x.success,description:x.save_data_success},()=>{});function $(){h.push(`/buildings/${d}/configs-templates`)}async function _(){var l,c,f,C;const a=[{type:(c=(l=m.split("-"))==null?void 0:l[0])==null?void 0:c.toUpperCase(),templateName:m,header:p||"<div></div>",footer:D||"<div></div>"}];m.includes("sms")&&(a[0]={type:`${(f=m.split("-"))==null?void 0:f[0]}_${(C=m.split("-"))==null?void 0:C[1]}`.toUpperCase(),templateName:m,header:p||"",footer:D||""}),M({isFetching:!0,code:void 0,codeLanguage:void 0});try{const g=await le({templates:a,idBuilding:d});M({isFetching:!1,code:g.code,codeLanguage:g.codeLanguage}),h.push(`/buildings/${d}/configs-templates`)}catch(g){M({isFetching:!1,code:g.code,codeLanguage:g.codeLanguage})}}function o(a){const c=`<%- (invoice|paySlip|receipt)\\.${a.replace(/\./,"\\.")} %>`;return new RegExp(c,"g")}function F(a,{headerInp:l="",footerInp:c=""}){var G,w,K,W,J,U,V,I,j,q,L;const f=e.duePayment?t().date(e.duePayment).format("DD/MM/YYYY"):t().format("DD/MM/YYYY"),C=e.duePayment?t().date(e.duePayment).format("MMMM Do YYYY"):t().format("MMMM Do YYYY"),g=`Nếu sau ngày ${f} cư dân không thực hiện đóng tiền đẩy đủ, ban quản lý sẽ thực hiện ngừng cung cấp dịch vụ`;return a.replace(/<!--header-->/g,l).replace(/<!--footer-->/g,c).replace(/<%- invoice\.resident \? invoice\.resident\.fullName : '' %>/g,ve).replace(o("unitGroup.investor.name"),((G=e==null?void 0:e.investor)==null?void 0:G.name)??r.investor.name).replace(o("unitGroup.management.name"),((w=e==null?void 0:e.management)==null?void 0:w.name)??r.management.name).replace(o("unitGroup.management.address"),((K=e==null?void 0:e.management)==null?void 0:K.address)??r.management.address).replace(o("unitGroup.management.email"),((W=e==null?void 0:e.management)==null?void 0:W.email)??r.management.email).replace(o("unitGroup.management.hotline"),((J=e==null?void 0:e.management)==null?void 0:J.hotline)??r.management.hotline).replace(o("unitGroup.management.city.name"),((V=(U=e==null?void 0:e.management)==null?void 0:U.city)==null?void 0:V.name)??r.management.city).replace(o("unitGroup.management.district.name"),((j=(I=e==null?void 0:e.management)==null?void 0:I.district)==null?void 0:j.name)??r.management.district).replace(o("unitGroup.name"),(e==null?void 0:e.name)??r.name).replace(o("unitGroup.email"),(e==null?void 0:e.email)??r.email).replace(o("unitGroup.hotline"),(e==null?void 0:e.hotline)??r.hotline).replace(o("unitGroup.address"),(e==null?void 0:e.address)??r.address).replace(o("unitGroup.city.name"),((q=e==null?void 0:e.city)==null?void 0:q.name)??r.city).replace(o("unitGroup.district.name"),((L=e==null?void 0:e.district)==null?void 0:L.name)??r.district).replace(/<img.*?id="avatar".*?width="(.*?)".*?height="(.*?)".*?src="(.*?)"[^\\>]+>/g,`<img  width="$1" height="$2" src="${(e==null?void 0:e.avatar)??r.avatar}"/>`).replace(/<img.*?id="qrcode".*?width="(.*?)".*?height="(.*?)".*?src="(.*?)"[^\\>]+>/g,'<img  width="$1" height="$2" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABGCAYAAABxLuKEAAAEaUlEQVR4Xu2b4ZKbQAyDk/d/6HQyd2T2FkufvHA3zYT+agssrGxLsgn32+32uDX/PB5fl9zvd3vleN729+atotPn55jvRc9Z3eS5swuYApkXMElEN+RXMoZCr+5P2TBm7vxc6t/uWbb7XcBMKElgqnok5FUmVVmgMiD9fxftNGOSPe4yJrlIkRsBWBG2Ksu0XEeg/htgKFMcyHPk57W242eu4cCejx3KmAuYybdQKc3RHs+nzCB1fF5PJXskYKeokkr36sFTqSfZfh7vrqWCURq7b9N6SK4/AhgyYEfY30W5qyRH1urs8ZSWINlcWve/uVYLmAexnVmNaneU2vQ2RM7Px0k9TnrPkmsuYOrIo48Za3peIkn7rpHrqBKVhpN1UrYLGDFbknK9YsW3CCoD6JRtvlYNl6oMXum38JptUNXZjCqPjwJmxc67+iVeUjyWNJWkaBV/yXEHZczHArPJtfMkFImUH5wHSRvTZCxJazl/9WoiL2B+vgvYddd/FfWOW65UbJwCpny10u3veqXEbpPUrcxjHLmOJfjnwLi6PKMBJDtAxytucc62AnAEH6/tcIwiPmrWqqlbx/PMpE2bolZhPC6F5QLm6zXzLmOVj6lqnjLDOWKS0DTKY/YpXko4sN1EdjZHm0n8wgrYxEenADPPY5RFJjJz5m2FOFWAnK0nQFRjWtmC+wXMzxC8wCWO6VhwFxEqGdnMTb/BqcYOZE6diklVuoARqjTLNRGq4xKVFZWSEIeQapQSW2TXyI3KO1XnvDgmIaY0ZatNp6WU9j+/DkxSShQ9ks8kCzugUyNK93NeqEW+Hw2Mq7/ZYVKGVMfT/oayIRnS02CtUrb5+eTYoUpHuqECt2oiHVFX/KHsv+OaZGKgShjnMSO6RKCUWZV7XgG7IxTENxcwgJAsJZcNKkKqN3HP0JHjRJIrX3Wkk9/NfC9gvsKJw/CK7I4Q5oqSORJeEQeX4ahKZLRc6jq/QyMBRdwk3xWhJyJQufMfe1MfWXTQTXjj7YBJfjjUldQkc1IZdSXdGVXMmUXX7gZVK7Wryq/KktQLqVSvSpnKv8roGJhkyOTGns68ORKlNSu+oN4tyUYKUDR2OMoPbwnMPHZIVOAI61PaU7RdA0jPNWYnNbXyN3iUak4mHU+9DTDqLcGIKJVSUvNkDmcw3fndtapAUeDl65MLGILOFD01l86DqGVV9o2PSVI7l6uTfpWpkY+hTVAZVKRHazpy/BNgfuO765UkpEzpjDQTw0k8dcrXJ5QxJMHOHCY9W1WylUOueFOV2aEPuTpRdhscH44UMLEJ5MWS0r6A+f6WYJc5yvm6KHY5pHpLoJSDeqfkjUNnWC655ggwVEojuKm0J3ykeGHepCspGqXgZzlEYu74xwNDUa7MGTVxpDQV6GnGJM3kKRnzEcC4TVJdJo0fraHMGYFfHU9EQj5P8jOQOa3TlB2vo9JJbX4HoFOAWbkhqZIzUnSt4piR7EmdOko4n3tKS6Cy4Z2B+QdC4vMKRqtTlAAAAABJRU5ErkJggg=="/>').replace(o("code"),ue).replace(o("unit.code"),Me).replace(o("unit.name"),ye).replace(o("cashier"),he).replace(o("payer"),Ye).replace(/<%- moment\(invoice\.createdAt\)\.format\('M'\) %>/g,t().format("M")).replace(/<%- moment\(invoice\.createdAt\)\.format\('MM-YYYY'\) %>/g,t().format("MM-YYYY")).replace(/<%- moment\(invoice\.createdAt\)\.format\('MM\.YYYY'\) %>/g,t().format("MM.YYYY")).replace(/<%- moment\(invoice\.createdAt\)\.format\('MM\/YYYY'\) %>/g,t().format("MM/YYYY")).replace(/<%- moment\(invoice\.createdAt\)\.format\('MMMM, YYYY'\) %>/g,t().format("MMMM, YYYY")).replace(/<%- moment\(invoice\.createdAt\)\.format\('DD\/MM\/YYYY'\) %>/g,t().format("DD/MM/YYYY")).replace(/<%- moment\(invoice\.createdAt\)\.format\('DD\.MM\.YYYY'\) %>/g,t().format("DD.MM.YYYY")).replace(/<%- moment\(invoice\.createdAt\)\.format\('YYYY'\) %>/g,t().format("YYYY")).replace(/<%- moment\(String\(invoice\.createdFor\), 'YYYYMM'\)\.format\('M\/YYYY'\) %>/g,t().format("M/YYYY")).replace(/<%- moment\(receipt\.createdAt\)\.format\('D'\) %>/g,t().format("D")).replace(/<%- moment\(invoice\.createdAt\)\.format\('D'\) %>/g,t().format("D")).replace(/<%- moment\(paySlip\.createdAt\)\.format\('D'\) %>/g,t().format("D")).replace(/<%- moment\(invoice\.createdAt\)\.format\('DD'\) %>/g,t().format("DD")).replace(/<%- moment\(invoice\.createdAt\)\.subtract\(1, 'months'\)\.format\('DD'\) %>/g,t().subtract(1,"months").format("DD")).replace(/<%- moment\(receipt\.createdAt\)\.format\('DD'\) %>/g,t().format("DD")).replace(/<%- moment\(paySlip\.createdAt\)\.format\('DD'\) %>/g,t().format("DD")).replace(/<%- moment\(invoice\.createdAt\)\.format\('MM'\) %>/g,t().format("MM")).replace(/<%- moment\(invoice\.createdAt\)\.subtract\(1, 'months'\)\.format\('MM'\) %>/g,t().subtract(1,"months").format("MM")).replace(/<%- moment\(receipt\.createdAt\)\.format\('MM'\) %>/g,t().format("MM")).replace(/<%- moment\(paySlip\.createdAt\)\.format\('MM'\) %>/g,t().format("MM")).replace(/<%- moment\(invoice\.createdAt\)\.format\('YYYY'\) %>/g,t().format("YYYY")).replace(/<%- moment\(invoice\.createdAt\)\.subtract\(1, 'months'\)\.format\('YYYY'\) %>/g,t().subtract(1,"months").format("YYYY")).replace(/<%- moment\(receipt\.createdAt\)\.format\('YYYY'\) %>/g,t().format("YYYY")).replace(/<%- moment\(paySlip\.createdAt\)\.format\('YYYY'\) %>/g,t().format("YYYY")).replace(/<%- invoice\.isRemindDebt \? '- NHẮC NỢ' : '' %>/g,"").replace(/<%- invoice\.isRemindDebt \? '- NHẮC NỢ ' : '' %>/g,"").replace(/<%- invoice\.isRemindDebt \? ' - NHẮC NỢ ' : '' %>/g,"").replace(/<%- invoice\.isRemindDebt \? ' - NHẮC NỢ' : '' %>/g,"").replace(/<%- invoice\.isRemindDebt \? '- REMIND DEBT' : '' %>/g,"").replace(/<%- invoice\.isRemindDebt \? ' - REMIND DEBT' : '' %>/g,"").replace(/<%- invoice\.duePaymentShow %>/,f).replace(/<%- invoice\.duePaymentEnglishShow %>/,C).replace(/<%- invoice.extraInfoRemindDebt %>/,g)}function ee(a){E(a),k(F(y.body,{headerInp:a,footerInp:D}))}function te(a){B(a),k(F(y.body,{headerInp:p,footerInp:a}))}return s.useEffect(()=>{(async()=>{v({isFetching:!0});const a=await pe({idBuilding:d,name:m}),{header:l,footer:c,body:f}=a.data;S(a.data),E(l),B(c),k(F(f,{headerInp:l,footerInp:c})),v({isFetching:!1})})()},[]),n(R,{isFetchingGets:H.isFetching,isFetching:u.isFetching,header:p,footer:D,onClickBtnCancel:$,onClickBtnConfirm:_,contentPreview:b,onChangeHeader:ee,onChangeFooter:te,templatePermissionWrite:z})}export{bt as default};