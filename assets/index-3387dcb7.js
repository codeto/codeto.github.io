import{j as a,a as M,F as Me,b as Re,c as W}from"./@emotion-63839449.js";import{d as X,Q as H,C as fe,w as ke,P as B,a as Ee}from"./index-b17d22e5.js";import{B as we}from"./index-881eef42.js";import{F as _,u as Te}from"./index-687ba9e6.js";import{b0 as Be,K as Oe,aQ as Le,at as Ne,gL as _e,gM as Pe,s as Y,a9 as V,l as I,I as D,S as N,cP as P,gN as Ue,gO as He,cf as J,b1 as Se,gP as De,a as Z,a0 as ve,D as ee,x as $,gQ as Ve,gR as je,a1 as Ye,dk as $e,gS as We,gT as Ge}from"./index-c2ded735.js";import{I as Ce,S as he}from"./index-43183512.js";import"./lodash-88fe09e6.js";import{h as O}from"./moment-a468e1f9.js";import"./file-saver-40cf32a9.js";import{r as u}from"./react-4fd50329.js";import{P as m}from"./prop-types-1172f4d5.js";import"./react-redux-896b353b.js";import"./@firebase-43527ee1.js";import{u as be}from"./react-router-a4308f7b.js";import{b as U,R as G,r as ze,h as te,S as se,G as qe,I as oe,j as Qe,B as pe}from"./antd-f9eae174.js";import{I as Ie}from"./react-infinite-scroll-component-e33646cb.js";import{M as Ke,a as Je,b as Fe,c as Xe,d as Ze,e as et}from"./chat-dae5776c.js";import"./parser-56b7e8bd.js";import{P as Ae}from"./parse-6fcf23d5.js";import"./hoist-non-react-statics-23d96a9a.js";import"./react-is-e8e5dbb3.js";import"./@babel-b64fd0f9.js";import"./stylis-79144faa.js";import"./react-router-dom-2a8f5f6d.js";import"./history-a1882333.js";import"./resolve-pathname-e210f2ac.js";import"./tiny-invariant-dd7d57d2.js";import"./account-86ffff50.js";import"./libphonenumber-js-0d5a9c92.js";import"./redux-10bbab4c.js";import"./react-dom-40621ea0.js";import"./classnames-4ba1ba1a.js";import"./scheduler-765c72db.js";import"./@redux-saga-8bafe09b.js";import"./redux-logger-e1c9ca90.js";import"./dompurify-8e338605.js";import"./query-string-f5cca1e7.js";import"./decode-uri-component-4138e85d.js";import"./split-on-first-4f1167c8.js";import"./filter-obj-2ed190f4.js";import"./oidc-client-7da0eaf7.js";import"./firebase-878887a2.js";import"./rc-pagination-c1e6a0ac.js";import"./rc-picker-2e3d5fe5.js";import"./rc-util-0bc219f3.js";import"./rc-trigger-570b13ec.js";import"./rc-motion-ae889c42.js";import"./rc-align-e5d7b12e.js";import"./dom-align-ecb06dd6.js";import"./resize-observer-polyfill-0f9f8adb.js";import"./rc-resize-observer-b9ad4e29.js";import"./@ant-design-cba9d434.js";import"./@ctrl-fb5a5473.js";import"./rc-tabs-dfd19a56.js";import"./rc-dropdown-5378dd0a.js";import"./rc-menu-b15ebfe9.js";import"./rc-overflow-6be96612.js";import"./rc-select-564caf01.js";import"./rc-virtual-list-8a7b82a6.js";import"./rc-collapse-11b7d3c4.js";import"./shallowequal-4542d6f7.js";import"./rc-drawer-317f0b4d.js";import"./@rc-component-5a112e55.js";import"./rc-field-form-ef5549aa.js";import"./async-validator-dee29e8b.js";import"./scroll-into-view-if-needed-6b992d05.js";import"./compute-scroll-into-view-183f845a.js";import"./rc-image-e0357917.js";import"./rc-dialog-b1d1f07b.js";import"./rc-input-number-8bc068f7.js";import"./rc-rate-c64cf0d5.js";import"./rc-steps-2d1924c7.js";import"./rc-switch-b4e96de7.js";import"./rc-table-191ecc42.js";import"./rc-checkbox-018e8052.js";import"./rc-tree-67773537.js";import"./rc-tree-select-cb7eccc3.js";import"./copy-to-clipboard-64585c8c.js";import"./toggle-selection-93f4ad84.js";import"./rc-textarea-d01adcbb.js";import"./rc-input-02c2c2ba.js";import"./rc-upload-3ab0f08a.js";import"./rc-notification-d13dc43b.js";import"./rc-progress-4f1a7096.js";import"./rc-tooltip-08fa4217.js";import"./use-sync-external-store-5d1b6592.js";import"./idb-cdd1a92f.js";import"./path-to-regexp-ef8d5544.js";const z={keyword:""},A=u.createContext({chatPermissionWrite:!1,idBuilding:0,formFilter:void 0,filter:{...z},setFilter:()=>{},listRoom:[],setListRoom:()=>{},roomSelected:void 0,setRoomSelected:()=>{},getListRoomStatus:{isFetching:!1},setGetListRoomStatus:()=>{},isEndOfRoomList:!1,setIsEndOfRoomList:()=>{},modalAddRoomChat:void 0,showModalAddRoomChat:()=>{},hideModalAddRoomChat:()=>{}}),ae=({children:e})=>{var L;const{getPermissionByModuleCode:o}=Be(),{idBuilding:t}=be(),[s,i]=u.useState({...z}),[c,r]=u.useState({isFetching:!1}),[h,p]=u.useState([]),[g,l]=u.useState({id:0,status:"",title:"",code:"",unit:""}),[n,x]=u.useState(!1),[f,d,y]=Oe(),[R]=_.useForm(),w={chatPermissionWrite:((L=o(Le))==null?void 0:L[Ne])??!1,idBuilding:t,formFilter:R,filter:s,setFilter:i,listRoom:h,setListRoom:p,roomSelected:g,setRoomSelected:l,getListRoomStatus:c,setGetListRoomStatus:r,isEndOfRoomList:n,setIsEndOfRoomList:x,modalAddRoomChat:f,showModalAddRoomChat:d,hideModalAddRoomChat:y};return a(A.Provider,{value:w,children:e})};ae.propTypes={children:m.node};ae.defaultProps={children:a("div",{})};const tt=ae,st=e=>{var o,t;return{id:e.roomId,key:e.roomId,name:(e==null?void 0:e.name)??"",unitName:(e==null?void 0:e.unitName)??"",unitId:((o=e==null?void 0:e.unitIds)==null?void 0:o[0])??"",status:(e==null?void 0:e.status)??"",content:(e==null?void 0:e.content)??"",latestMessageAt:((t=e==null?void 0:e.latestMessageDate)==null?void 0:t.iso)??(e==null?void 0:e.createdAt)??"",isHaveNewMessage:(e==null?void 0:e.unread)>0}},ot=async({idBuilding:e,filter:o,page:t,limit:s})=>{try{const{keyword:i}=o,c=await _e({idBuilding:e,filter:{keyword:i||void 0,requestBy:"EMPLOYEE",roomType:"UNIT"},page:t,limit:s});return{code:c.code,codeLanguage:c.codeLanguage,data:c.data.map(r=>st(r)),loadMore:c.readmore}}catch(i){return{code:i.code,codeLanguage:i.codeLanguage,data:[]}}},ie=async(e,o)=>{try{const t=await Pe(e,o);return{code:t.code,codeLanguage:t.codeLanguage}}catch(t){return{code:t.code,codeLanguage:t.codeLanguage,data:[]}}},q=()=>{const{setGetListRoomStatus:e,idBuilding:o,listRoom:t,setListRoom:s,roomSelected:i,setRoomSelected:c,setIsEndOfRoomList:r}=u.useContext(A);return[async(p,g,l=!1)=>{var x,f;e({isFetching:!0});const n=await ot({filter:{...g},idBuilding:o,limit:Y,page:p});if(n.data.length>0){let d=[...t,...n.data];l&&(d=[...n.data]);let y=!1;for(let R=0;R<d.length;R+=1)if(d[R].id===i.id){y=!0;break}y||(c({...d==null?void 0:d[0]}),(x=d==null?void 0:d[0])!=null&&x.isHaveNewMessage&&await ie(o,(f=d==null?void 0:d[0])==null?void 0:f.id)),s(d)}e({isFetching:!1}),r(n.loadMore)}]},at=()=>{const{showModalAddRoomChat:e,formFilter:o}=u.useContext(A),[t]=q();return[o,z,async(c,r)=>{await t(V-1,r,!0)},()=>{e()}]};var it={name:"1d3w5wq",styles:"width:100%"};const nt=()=>{const[e,o,t,s]=at();return a(_,{initialValues:o,onValuesChange:X(t),form:e,name:"form_filter",children:M(G,{gutter:[12,0],children:[a(U,{flex:"1 0 0",css:it,children:a(_.Item,{name:"keyword",noStyle:!0,children:a(Ce.Search,{placeholder:I.filter,fluid:"true"})})}),a(U,{children:a(D,{css:i=>({fontSize:i.iconSize}),name:"icon-edit-outlined",onClick:s})})]})})},rt=()=>{const{idBuilding:e,filter:o,getListRoomStatus:t,listRoom:s,setListRoom:i,roomSelected:c,setRoomSelected:r,isEndOfRoomList:h}=u.useContext(A),[p]=q(),g=async()=>{await p(s.length,o)},l=async n=>{if(n.isHaveNewMessage){const x=await ie(e,n.id);if(N.includes(x.code)){const f=[...s];for(let d=0;d<f.length;d+=1)if(f[d].id===n.id){f[d].isHaveNewMessage=!1;break}i(f)}}r({...n,isHaveNewMessage:!1})};return[t.isFetching,!h,s,c,g,l]};var dt={name:"sqkazh",styles:"align-items:center;& .ant-list-item-meta-title{margin-bottom:0;}"},ct={name:"13dbbpr",styles:"position:absolute;top:50%;translate:transformY(-50%);right:12px;.ant-badge-dot{width:12px;height:12px;background-color:#3487cb;}"},lt={name:"fhxb3m",styles:"display:flex;flex-direction:row;align-items:center"},ut={name:"974d2w",styles:"position:absolute;top:50%;width:100%;height:100%;text-align:center"};const gt=()=>{const[e,o,t,s,i,c]=rt();return M(Me,{children:[a(Ie,{dataLength:t.length,next:i,hasMore:o,scrollableTarget:"scrollableListRoom",children:a(H,{split:!0,dataSource:t,renderItem:r=>{var h,p,g,l;return a(H.Item,{css:n=>({cursor:"pointer",backgroundColor:s&&s.id===r.id?"#ddd":"",padding:`${n.padding.xs}px`,position:"relative"}),onClick:()=>c(r),extra:a(ze,{css:ct,dot:r.isHaveNewMessage}),children:a(H.Item.Meta,{css:dt,avatar:M(te,{size:"large",css:n=>({backgroundColor:n.color.primary,display:"flex",alignItems:"center"}),children:[(p=(h=r==null?void 0:r.name)==null?void 0:h[0])==null?void 0:p.toUpperCase(),(l=(g=r==null?void 0:r.name)==null?void 0:g[1])==null?void 0:l.toUpperCase()]}),title:a("div",{css:lt,children:a("h4",{css:n=>({color:n.color.link,wordBreak:"keep-all",fontFamily:r.isHaveNewMessage?n.fontWeight.bold:"inherit",margin:0}),children:r.name})}),description:M("div",{children:[a("p",{css:n=>({whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",width:"100%",fontFamily:r.isHaveNewMessage?n.fontWeight.bold:"inherit",color:n.textColor,margin:0}),children:r.content}),a("h5",{css:n=>({color:n.disabledColor,margin:0}),children:r.latestMessageAt?O(r.latestMessageAt).format("DD/MM/YYYY HH:mm"):"-"})]})})},r.id)}})}),e?a("div",{css:ut,children:a(se,{})}):null]})},ft=async(e,o,t)=>{try{let s;return t===P?s=await Ue(e,o):s=await He(e,o),{code:s.code,codeLanguage:s.codeLanguage}}catch(s){return{code:s.code,codeLanguage:s.codeLanguage,data:[]}}},ht=()=>{const{roomSelected:e,idBuilding:o,listRoom:t,setListRoom:s,setRoomSelected:i}=u.useContext(A),[c,r]=u.useState({isFetching:!1}),h=async p=>{r({isFetching:!0,code:void 0,codeLanguage:void 0});const g=p?P:J,l=await ft(o,e.id,p?P:J);if(N.includes(l.code)){const n=[...t];for(let x=0;x<n.length;x+=1)if(n[x].id===e.id){n[x].status=g;break}s(n),i({...e,status:g})}r({isFetching:!1,code:l.code,codeLanguage:l.codeLanguage})};return[c.isFetching,e,h]};var pt={name:"1w5wln4",styles:"width:100%;display:flex;flex-direction:column;justify-content:center"},mt={name:"s5xdrg",styles:"display:flex;align-items:center"};const xt=()=>{var p,g;const{chatPermissionWrite:e}=u.useContext(A),[o,t,s]=ht(),{name:i,content:c,latestMessageAt:r,status:h}=t;return M(G,{gutter:[12,0],children:[a(fe,{centerVertical:!0,children:M(te,{size:{xs:16,sm:24,md:32,lg:40,xl:48,xxl:56},css:l=>({backgroundColor:l.color.primary,display:"flex",alignItems:"center"}),children:[((p=i==null?void 0:i[0])==null?void 0:p.toUpperCase())??"A",((g=i==null?void 0:i[1])==null?void 0:g.toUpperCase())??"V"]})}),M(U,{flex:"1 0 0",css:pt,children:[a("div",{css:mt,children:a("span",{css:l=>({color:l.color.link,wordBreak:"keep-all",margin:0}),children:i})}),a("p",{css:l=>({whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",width:"100%",color:l.textColor,margin:`${l.margin.xss}px 0 0 0`}),children:c||"-"}),a("h5",{css:l=>({color:l.disabledColor,margin:`${l.margin.xss}px 0 0 0`}),children:r?O(r).format("DD/MM/YYYY HH:mm"):"-"})]}),a(fe,{centerVertical:!0,children:e?a(qe,{loading:o,checked:h===P,onChange:s}):null})]})};var yt={name:"m8bbtt",styles:"height:100px;width:112px;position:relative;&:hover .image-remove-icon{display:block;}"},Mt={name:"16t7yfy",styles:"z-index:1;position:absolute;top:-13px;right:-8px;display:none;line-height:0;cursor:pointer;background-color:#42c39a;padding:1px 5px 0;border-radius:50%"};const ne=({onInputMessageChange:e,handleSendMessage:o,message:t,mediaList:s,handleRemoveMedia:i,handleUploadMedia:c,loadingMediaList:r,sendMessageBoxRef:h,onFocusSendMessageBox:p})=>{const g=()=>{o()},l=n=>{!n.shiftKey&&(n.key==="Enter"||n.keyCode===13)&&(n.preventDefault(),o())};return M("div",{children:[a(Ce.TextArea,{ref:h,onChange:e,css:n=>Re("border:0px;border-top-left-radius:",n.borderRadius,"px;border-top-right-radius:",n.borderRadius,"px;&:focus{outline:0;box-shadow:none;}",""),autoSize:{minRows:2,maxRows:6},onKeyUp:l,onPressEnter:l,onFocus:p,placeholder:I.message,value:t,maxLength:Ke}),s.length?a(G,{gutter:[12,12],css:n=>({padding:n.padding.xs}),children:s.map((n,x)=>{var f,d;return M(U,{css:yt,children:[a(Se,{isLoading:n.status==="uploading"}),a("div",{className:"image-remove-icon",css:Mt,children:a(D,{name:"icon-close-outlined",onClick:()=>i(n)})}),a(oe,{css:y=>({borderRadius:y.borderRadius,border:`1px solid ${y.borderColor}`}),height:"100%",width:"100%",src:((d=(f=n==null?void 0:n.response)==null?void 0:f.data)==null?void 0:d.url)??null,placeholder:!0})]},x)})}):null,M("div",{css:n=>({display:"flex",flexDirection:"row",justifyContent:"flex-end",alignItems:"center",padding:`${n.padding.xss}px ${n.padding.sm}px`,borderTop:`1px solid ${n.borderColor}`}),children:[a(ke,{accept:"image/*",showUploadList:!1,fileList:s,multiple:!0,onChange:c,module:Le,children:a(D,{css:n=>({fontSize:n.iconSize}),name:"icon-attachment-outlined",title:I.attachments})}),a(D,{css:n=>({marginLeft:n.margin.xs,fontSize:n.iconSize}),name:"icon-send-outlined",onClick:g,disabled:r,title:I.send})]})]})};ne.propTypes={onInputMessageChange:m.func,handleSendMessage:m.func,message:m.string,mediaList:m.arrayOf(m.objectOf(m.any)),handleRemoveMedia:m.func,handleUploadMedia:m.func,loadingMediaList:m.bool,sendMessageBoxRef:m.oneOfType([m.func,m.shape({current:m.instanceOf(Element)}),m.objectOf(m.any)]),onFocusSendMessageBox:m.func};ne.defaultProps={onInputMessageChange:()=>{},handleSendMessage:()=>{},message:"",mediaList:[],handleRemoveMedia:()=>{},handleUploadMedia:()=>{},loadingMediaList:!1,sendMessageBoxRef:()=>{},onFocusSendMessageBox:()=>{}};const Rt=()=>a("div",{css:e=>({top:0,left:0,position:"absolute",width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center",zIndex:1,backgroundColor:e.backgroundContent})}),re=u.createContext({idBuilding:0,messages:[],setMessages:()=>{}}),de=({children:e})=>{const{idBuilding:o}=be(),[t,s]=u.useState([]),i={idBuilding:o,messages:t,setMessages:s};return a(re.Provider,{value:i,children:e})};de.propTypes={children:m.node};de.defaultProps={children:a("div",{})};const me=async(e,o,t)=>{try{const{content:s,images:i,messageType:c,deviceToken:r}=t,h=await De(e,o,{content:s,images:i,type:c,deviceToken:r});return{code:h.code,codeLanguage:h.codeLanguage}}catch(s){return{code:s.code,codeLanguage:s.codeLanguage,data:[]}}},wt=()=>{const{currentUser:e}=u.useContext(Z),{setRoomSelected:o,setListRoom:t,listRoom:s,roomSelected:i,chatPermissionWrite:c}=u.useContext(A),{idBuilding:r,setMessages:h,messages:p}=u.useContext(re),{getChatBadges:g}=ve(),[l,n]=u.useState(""),[x,f]=u.useState([]),[d,y]=u.useState(!1),R=u.useRef(null);u.useEffect(()=>{R&&R.current&&R.current.focus({cursor:"end"})},[i]);const E=async()=>{if(!d&&i.status===P){const C=await ee(),S=new Date;let v,j;const F=[...p];if(l&&(v={id:S.getTime(),createdAt:S,content:l,images:[],type:Je,deviceToken:localStorage.getItem($)||C,idSender:e.id,loading:!0,error:!1},F.push(v),n("")),x.length&&(j={id:S.getTime()+1,createdAt:S,content:"",images:x.map(T=>{var b,ge;return((ge=(b=T==null?void 0:T.response)==null?void 0:b.data)==null?void 0:ge.url)??void 0}).filter(Boolean),type:Fe,deviceToken:localStorage.getItem($)||C,idSender:e.id,loading:!0,error:!1},F.push(j),f([])),h(F),v){const T=await me(r,i.id,v);for(let b=0;b<F.length;b+=1)if(F[b].id===v.id){F[b].loading=!1,N.includes(T.code)||(F[b].error=!0);break}}if(j){const T=await me(r,i.id,j);for(let b=0;b<F.length;b+=1)if(F[b].id===v.id){F[b].loading=!1,N.includes(T.code)||(F[b].error=!0);break}}h(F)}},w=({fileList:C})=>{const S=C.filter(v=>v.status!=="done").length!==0;y(S),f(C)},L=C=>{const S=x.filter(v=>v.uid!==C.uid);f(S)},k=C=>{const S=C.target.value;n(S)},Q=async()=>{if(i.isHaveNewMessage){const C=await ie(r,i.id);if(N.includes(C.code)){const S=[...s];for(let v=0;v<S.length;v+=1)if(S[v].id===i.id){S[v].isHaveNewMessage=!1;break}t(S),o({...i,isHaveNewMessage:!1})}await g(r)}},{status:K}=i;return[c,d,K,R,l,x,k,E,L,w,Q]},Lt=()=>{const[e,o,t,s,i,c,r,h,p,g,l]=wt();return M("div",{css:n=>({border:"1px solid #ddd",borderRadius:n.margin.xss,position:"relative",minHeight:88}),children:[t&&t===P&&e?a(ne,{onInputMessageChange:r,handleSendMessage:h,message:i,mediaList:c,handleRemoveMedia:p,handleUploadMedia:g,loadingMediaList:o,sendMessageBoxRef:s,onFocusSendMessageBox:l}):null,t&&t===J?a(Rt,{}):null]})},xe=(e,o)=>{const t=e==null?void 0:e.type,s=e==null?void 0:e.name;return t===Ze&&s||t===et?o?"***":s:I.label.deleted_account},St=W("span",{target:"ejqdhwc3"})(({position:e,theme:o})=>({backgroundColor:e==="left"?"#F1F0F0":"#d3ebff",color:e==="left"?"#4A4A4A":"#FFFFF",borderRadius:10,borderTopRightRadius:e==="left"?10:0,borderTopLeftRadius:e==="left"?0:10,borderBottomLeftRadius:10,borderBottomRightRadius:10,padding:"12px",width:"fit-content",wordBreak:"break-word",whiteSpace:"pre-wrap",lineHeight:"1.5"}),""),vt=W("div",{target:"ejqdhwc2"})(({position:e})=>({display:"flex",flexDirection:e==="left"?"row":"row-reverse",flex:"2"}),""),Ct=W("div",{target:"ejqdhwc1"})(({position:e})=>({alignItems:e==="left"?"flex-start":"flex-end",margin:e==="left"?"0 0 0 15px":"0 15px 0 0",display:"flex",flexDirection:"column",maxWidth:"80%"}),""),bt=W(oe,{target:"ejqdhwc0"})(({position:e})=>({width:"auto",height:"120px",objectFit:"cover",border:"1px solid #ddd",borderRadius:"3px",marginLeft:e==="right"?"6px":"0",marginRight:e==="left"?"6px":"0",marginBottom:"6px",minWidth:"100px"}),""),ce=({position:e,currentMember:o,message:t,isUserCs:s})=>M(vt,{position:e,children:[e==="left"&&a("div",{children:a(te,{src:Xe(o==null?void 0:o.avatar,36,36)||"/assets/images/default-avatar.jpg",width:"36px",height:"36px"})}),M(Ct,{position:e,children:[e==="left"&&M("small",{children:[xe(o,s),", ",O(t.createdAt).format("HH:mm")]}),e==="right"&&M("small",{children:[xe(o,s),",",O(t.createdAt).format("HH:mm")]}),t.type===Fe?a("div",{css:Re({display:"flex",flexDirection:e==="left"?"row":"row-reverse",flexWrap:"wrap"},"",""),children:a(oe.PreviewGroup,{children:t.images.map(i=>a(bt,{placeholder:!0,fallback:"/assets/images/image-error.png",position:e,src:i},i))})}):M(Me,{children:[a(St,{position:e,children:t.content}),t.loading?a(Se,{onlyIcon:!0,isLoading:!0,width:"11px",height:"11px"}):null,t.success?null:a(D,{style:{fontSize:11,color:"red",marginTop:3},name:"exclamation-circle"})]})]})]}),le=({currentMember:e,item:o,position:t,isUserCs:s})=>a(ce,{position:t,currentMember:e,message:o,isUserCs:s});ce.propTypes={position:m.string,currentMember:m.objectOf(m.any),message:m.objectOf(m.any),isUserCs:m.bool};ce.defaultProps={position:"left",currentMember:void 0,message:{createdAt:new Date,content:"",type:"",images:[],loading:!1,success:!0},isUserCs:!1};le.propTypes={currentMember:m.objectOf(m.any),item:m.objectOf(m.any),position:m.string,isUserCs:m.bool};le.defaultProps={currentMember:void 0,item:void 0,position:"left",isUserCs:!1};const ue=e=>{var o;return{key:e.id||e.objectId,id:e.id||e.objectId,content:e.content,createdAt:e.createdAt,deviceToken:e.deviceToken,images:((o=e==null?void 0:e.extraData)==null?void 0:o.images)??[],isRead:e.isRead,idMessage:e.messageId,readUserIds:e.readUserIds,idRoom:e.roomId,idSender:e.senderId,type:e.type,idUnit:e.unitId||e.cyUnitId,loading:!1,success:!0}},ye=async({idBuilding:e,idRoom:o,page:t,limit:s})=>{try{const i=await Ve({idBuilding:e,idRoom:o,page:t,limit:s});return{code:i.code,codeLanguage:i.codeLanguage,data:i.data.map(c=>ue(c)),loadMore:i.readmore}}catch(i){return{code:i.code,codeLanguage:i.codeLanguage,data:[]}}},It=e=>{var o,t,s;return{id:e.id,key:e.id,name:(e==null?void 0:e.fullName)??"",avatar:e.avatar,type:e.type,unit:{id:(o=e==null?void 0:e.unit)==null?void 0:o.id,name:((t=e==null?void 0:e.unit)==null?void 0:t.name)??""},unitName:((s=e==null?void 0:e.unit)==null?void 0:s.name)??"",idUser:e.userId,role:e.role}},Ft=async(e,o)=>{try{const t=await je(e,o);return{code:t.code,codeLanguage:t.codeLanguage,data:t.data.reduce((s,i)=>(s[i.userId]=It(i),s),{})}}catch(t){return{code:t.code,codeLanguage:t.codeLanguage,data:[]}}};function At(){const{currentUser:e}=u.useContext(Z),{roomSelected:o}=u.useContext(A),{idBuilding:t,messages:s,setMessages:i}=u.useContext(re),{isUserCs:c}=Ye(),[r,h]=u.useState({}),[p,g]=u.useState(!1),[l,n]=u.useState(),[x,f]=u.useState({isFetching:!1}),[d,y]=u.useState({isFetching:!1}),R=async w=>{const L=new Ae.Query("Message");L.equalTo("cyUnitGroupId",Number(t)),L.equalTo("roomId",w);const k=await L.subscribe(),Q=await ee();return k.on("create",K=>{const C=K.toJSON();C.deviceToken!==(localStorage.getItem($)||Q)&&n(ue(C))}),k};u.useEffect(()=>{let w;return o.id&&((async()=>{f({isFetching:!0});const L=await Ft(t,o.unitId);h(L.data),f({isFetching:!1})})(),(async()=>{y({isFetching:!0});const L=await ye({idBuilding:t,idRoom:o.id,limit:Y,page:V-1});i([...L.data]),g(L.loadMore),y({isFetching:!1})})(),(async()=>w=await R(o.id))()),()=>{w&&w.unsubscribe()}},[o.id]),u.useEffect(()=>{if(l){const w=[...s];let L=!1;for(let k=0;k<w.length;k+=1)if(w[k].id===l.id){L=!0;break}L||(w.push(l),i(w))}},[l]);const E=async()=>{if(!d.isFetching){y({isFetching:!0});const w=await ye({idBuilding:t,idRoom:o.id,limit:Y,page:s.length+1});w.data.length>0&&i([...w.data,...s]),g(w.loadMore),y({isFetching:!1})}};return[d.isFetching,x.isFetching,!p,e.id,s,r,E,c]}var kt={name:"79azp8",styles:"display:flex;flex-direction:column-reverse"},Et={name:"ti75j2",styles:"margin:0"},Tt={name:"9a0nws",styles:"position:absolute;top:50%;width:100%;height:100%;text-align:center;z-index:2"};function Bt(){const[e,o,t,s,i,c,r,h]=At();return M(Ie,{dataLength:i.length,next:X(r,1e3),css:kt,inverse:!0,hasMore:t,scrollableTarget:"scrollableListMessage",children:[a(H,{split:!1,dataSource:i,renderItem:(p,g)=>{const{idSender:l}=p,n=c[l],x=g===0?void 0:i[g-1],f=!x||x&&O(x.createdAt).startOf("day").diff(O(p.createdAt).startOf("day"))?O(p.createdAt).format("DD/MM/YYYY"):null;let d="right";return s!==l&&(d="left"),M("div",{children:[f?a(Qe,{style:{margin:0},children:a("h5",{css:Et,children:f})}):null,a(H.Item,{style:{padding:"10px 0px"},children:a(le,{currentUserId:s,currentMember:n,item:p,position:d,isUserCs:h})},g)]},p.id)}}),e||o?a("div",{css:Tt,children:a(se,{})}):null]})}var Ot={name:"6v2dj9",styles:"flex-direction:column-reverse"};const Nt=()=>a(B.Wrapper,{children:M(B.Container,{children:[a(B.Header,{borderBottom:!0,children:a(xt,{})}),a(we.Content,{id:"scrollableListMessage",scrollY:!0,css:Ot,children:a(Bt,{})}),a(B.Footer,{children:a(Lt,{})})]})}),_t=()=>a(de,{children:a(Nt,{})}),Pt=e=>{var o,t;return{id:e==null?void 0:e.id,key:e==null?void 0:e.id,name:(e==null?void 0:e.name)??"",floorId:(o=e==null?void 0:e.floor)==null?void 0:o.id,floorName:((t=e==null?void 0:e.floor)==null?void 0:t.name)??""}},Ut=async({idBuilding:e,filter:o,page:t,limit:s})=>{try{const{name:i}=o,c=await $e({idBuilding:e,filter:{name:i||void 0},page:t,limit:s});return{code:c.code,codeLanguage:c.codeLanguage,data:c.data.map(r=>Pt(r)),totalRecord:c.totalRecord}}catch(i){return{code:i.code,codeLanguage:i.codeLanguage,data:[],totalRecord:0}}},Ht=async(e,o)=>{try{const t=await We(e,o);return{code:t.code,codeLanguage:t.codeLanguage}}catch(t){return{code:t.code,codeLanguage:t.codeLanguage,data:[]}}},Dt=()=>{const{hideModalAddRoomChat:e,idBuilding:o,formFilter:t}=u.useContext(A),[s]=_.useForm(),[i,c]=u.useState({isFetching:!1,code:void 0,codeLanguage:void 0}),[r,h]=u.useState([]),[p,g]=u.useState({isFetching:!1}),[l]=q(),n=async d=>{g({isFetching:!0});const y=await Ut({idBuilding:o,page:V,limit:Y,filter:{name:d}});h(y.data),g({isFetching:!1})},x=async()=>{let d="";for(let R=0;R<r.length;R+=1)s.getFieldValue("apartment")===r[R].id&&(d=r[R].name);c({isFetching:!0,code:void 0,codeLanguage:void 0});const y=await Ht(o,{name:d,unitId:s.getFieldValue("apartment")});N.includes(y.code)&&(t.setFieldsValue({keyword:d}),await l(V-1,{keyword:d},!0)),c({isFetching:!1,code:y.code,codeLanguage:y.codeLanguage})},f=()=>e();return Te(i.code,i.codeLanguage,{message:I.label.success,description:I.create_room_chat_success},()=>{e()}),u.useEffect(()=>{(async()=>await n(""))()},[]),[p.isFetching,i.isFetching,s,r,n,f,x]},Vt=()=>{const[e,o,t,s,i,c,r]=Dt();return a(Ee,{title:I.new_communicate_thread,open:!0,onCancel:c,footer:[a(pe,{onClick:c,children:I.label.cancel},"back"),a(pe,{type:"primary",onClick:r,loading:o,children:I.label.add},"submit")],children:a(_,{layout:"vertical",form:t,initialValues:{apartment:null},scrollToFirstError:!0,children:a(_.Item,{label:I.unit,name:"apartment",rules:[{required:!0}],children:a(he,{fluid:"true",placeholder:I.unit,showSearch:!0,onSearch:X(i),filterOption:!1,loading:e,dropdownRender:h=>e?a("div",{style:{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"},children:a(se,{})}):h,children:s.map(h=>a(he.Option,{value:h.id,children:h.name},h.id))})})})})},jt=async(e,o,t)=>{try{const s=await Ge(e,o,t);return{code:s.code,codeLanguage:s.codeLanguage}}catch(s){return{code:s.code,codeLanguage:s.codeLanguage,data:[]}}},Yt=()=>{const{setTitlePage:e,setVisibleFilterBox:o,setVisibleSearchBox:t}=u.useContext(Z),{idBuilding:s,listRoom:i,setListRoom:c,roomSelected:r,modalAddRoomChat:h}=u.useContext(A),{getChatBadges:p}=ve(),[g,l]=u.useState(),[n]=q();async function x(){const f=new Ae.Query("Message");f.equalTo("cyUnitGroupId",Number(s));const d=await f.subscribe(),y=await ee();return d.on("create",R=>{const E=R.toJSON();E.deviceToken!==(localStorage.getItem($)||y)&&((async()=>await p(s))(),l({...ue(E)}))}),d}return u.useEffect(()=>{e(I.resident_communicate),o(!1),t(!1);let f;return(async()=>f=await x())(),(async()=>await n(V-1,z))(),()=>{f&&f.unsubscribe()}},[]),u.useEffect(()=>{if(g){const f=[...i];let d=!1;g.idRoom===r.idRoom&&jt(s,r.idRoom,g.id);for(let y=0;y<f.length;y+=1)if(f[y].idRoom===g.idRoom){f[y].isHaveNew=!g.idRoom===r.idRoom,d=!0;break}d&&c(f),l(void 0)}},[g]),[h.isShow]},$t=()=>{const[e]=Yt();return M(B.Wrapper,{gutter:[12,0],style:{flex:1},children:[M(G,{style:{flex:1},gutter:[0,0],children:[a(U,{span:6,style:{display:"flex",flexDirection:"column",flex:1},children:M(B.Container,{children:[a(B.Header,{children:a(nt,{})}),a(we.Content,{id:"scrollableListRoom",scrollY:!0,children:a(gt,{})})]})}),a(U,{span:18,style:{display:"flex",flexDirection:"column",flex:1},children:a(_t,{})})]}),e?a(Vt,{}):null]})},bo=()=>a(tt,{children:a($t,{})});export{bo as default};