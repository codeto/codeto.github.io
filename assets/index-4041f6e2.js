import{j as a,a as N,u as H,F as X}from"./@emotion-63839449.js";import{A as de,P as B,G as le,a as M,J as ce,j as ue,K as pe}from"./index-b17d22e5.js";import{r as g}from"./react-4fd50329.js";import"./lodash-88fe09e6.js";import"./moment-a468e1f9.js";import{K as W,b0 as me,aq as ge,at as he,l as o,db as ee,a3 as te,I as D,bG as Le,a5 as j,a as ae,S as V,dc as fe,bH as be,bI as ve,n as Fe}from"./index-c2ded735.js";import"./file-saver-40cf32a9.js";import{I as T,S as I}from"./index-43183512.js";import{P as x}from"./prop-types-1172f4d5.js";import{F as L,u as O}from"./index-687ba9e6.js";import"./react-redux-896b353b.js";import"./@firebase-43527ee1.js";import{u as ye}from"./react-router-a4308f7b.js";import{B as we,w as Ge,b as A,z as oe,R as ie,o as q,n as $}from"./antd-f9eae174.js";import"./hoist-non-react-statics-23d96a9a.js";import"./react-is-e8e5dbb3.js";import"./@babel-b64fd0f9.js";import"./stylis-79144faa.js";import"./react-router-dom-2a8f5f6d.js";import"./history-a1882333.js";import"./resolve-pathname-e210f2ac.js";import"./tiny-invariant-dd7d57d2.js";import"./account-86ffff50.js";import"./index-881eef42.js";import"./libphonenumber-js-0d5a9c92.js";import"./react-infinite-scroll-component-e33646cb.js";import"./classnames-4ba1ba1a.js";import"./redux-10bbab4c.js";import"./react-dom-40621ea0.js";import"./scheduler-765c72db.js";import"./@redux-saga-8bafe09b.js";import"./redux-logger-e1c9ca90.js";import"./dompurify-8e338605.js";import"./query-string-f5cca1e7.js";import"./decode-uri-component-4138e85d.js";import"./split-on-first-4f1167c8.js";import"./filter-obj-2ed190f4.js";import"./oidc-client-7da0eaf7.js";import"./firebase-878887a2.js";import"./rc-pagination-c1e6a0ac.js";import"./rc-picker-2e3d5fe5.js";import"./rc-util-0bc219f3.js";import"./rc-trigger-570b13ec.js";import"./rc-motion-ae889c42.js";import"./rc-align-e5d7b12e.js";import"./dom-align-ecb06dd6.js";import"./resize-observer-polyfill-0f9f8adb.js";import"./rc-resize-observer-b9ad4e29.js";import"./@ant-design-cba9d434.js";import"./@ctrl-fb5a5473.js";import"./rc-tabs-dfd19a56.js";import"./rc-dropdown-5378dd0a.js";import"./rc-menu-b15ebfe9.js";import"./rc-overflow-6be96612.js";import"./rc-select-564caf01.js";import"./rc-virtual-list-8a7b82a6.js";import"./rc-collapse-11b7d3c4.js";import"./shallowequal-4542d6f7.js";import"./rc-drawer-317f0b4d.js";import"./@rc-component-5a112e55.js";import"./rc-field-form-ef5549aa.js";import"./async-validator-dee29e8b.js";import"./scroll-into-view-if-needed-6b992d05.js";import"./compute-scroll-into-view-183f845a.js";import"./rc-image-e0357917.js";import"./rc-dialog-b1d1f07b.js";import"./rc-input-number-8bc068f7.js";import"./rc-rate-c64cf0d5.js";import"./rc-steps-2d1924c7.js";import"./rc-switch-b4e96de7.js";import"./rc-table-191ecc42.js";import"./rc-checkbox-018e8052.js";import"./rc-tree-67773537.js";import"./rc-tree-select-cb7eccc3.js";import"./copy-to-clipboard-64585c8c.js";import"./toggle-selection-93f4ad84.js";import"./rc-textarea-d01adcbb.js";import"./rc-input-02c2c2ba.js";import"./rc-upload-3ab0f08a.js";import"./rc-notification-d13dc43b.js";import"./rc-progress-4f1a7096.js";import"./rc-tooltip-08fa4217.js";import"./use-sync-external-store-5d1b6592.js";import"./idb-cdd1a92f.js";import"./path-to-regexp-ef8d5544.js";const F={folderName:void 0,labelName:void 0,labelType:""},E=g.createContext({idBuilding:0,formFilter:void 0,getListLabelStatus:{isFetching:!1},setGetListLabelStatus:()=>{},filter:{...F},setFilter:()=>{},listGroup:[],setListGroup:()=>{},listLabel:[],setListLabel:()=>{},modalAddLabel:void 0,showModalAddLabel:()=>{},hideModalAddLabel:()=>{},modalUpdateGroup:void 0,showModalUpdateGroup:()=>{},hideModalUpdateGroup:()=>{},modalUpdateLabel:void 0,showModalUpdateLabel:()=>{},hideModalUpdateLabel:()=>{},labelPermissionWrite:!1}),J=({children:e})=>{const{idBuilding:i}=ye(),[t,r]=g.useState({isFetching:!1}),[s,n]=g.useState({...F}),[d,c]=g.useState([]),[h,p]=g.useState([]),[l]=L.useForm(),[u,m,y]=W(),[b,w,_]=W(),[v,U,G]=W(),{getPermissionByModuleCode:S}=me(),f=S(ge),C=(f==null?void 0:f[he])??!1,k={idBuilding:i,formFilter:l,getListLabelStatus:t,setGetListLabelStatus:r,filter:s,setFilter:n,listGroup:d,setListGroup:c,listLabel:h,setListLabel:p,modalAddLabel:u,showModalAddLabel:m,hideModalAddLabel:y,modalUpdateGroup:b,showModalUpdateGroup:w,hideModalUpdateGroup:_,modalUpdateLabel:v,showModalUpdateLabel:U,hideModalUpdateLabel:G,labelPermissionWrite:C};return a(E.Provider,{value:k,children:e})};J.propTypes={children:x.node};J.defaultProps={children:a("div",{})};const Se=J,Q=e=>({id:e==null?void 0:e.id,key:e==null?void 0:e.id,name:(e==null?void 0:e.title)??"",shortName:(e==null?void 0:e.abbreviateTitle)??"",type:(e==null?void 0:e.type)??"",color:e==null?void 0:e.color,description:(e==null?void 0:e.description)??"",children:e!=null&&e.isLabel?void 0:(e==null?void 0:e.childs)??[],group:e==null?void 0:e.groupLabelId,isLabel:(e==null?void 0:e.isLabel)??!1}),re=e=>{var t,r,s;const i=[];for(let n=0;n<e.length;n+=1)if(!e[n].isLabel){const d={title:e[n].title,value:e[n].id,children:(t=e[n])==null?void 0:t.childs,isLabel:(r=e[n])==null?void 0:r.isLabel};((s=d==null?void 0:d.children)==null?void 0:s.length)>0&&(d.children=re(d.children)),i.push(d)}return i},ne=e=>{const i=[...e];for(let t=0;t<i.length;t+=1)i[t].childs?(i[t]=Q(i[t]),i[t].children=ne(i[t].children)):i[t]=Q(i[t]);return i},P=async(e,i)=>{try{const{folderName:t,labelName:r,labelType:s}=i,n=await de(e,{titleGroupLabel:t||void 0,titleLabel:r||void 0,type:s||void 0});return{code:n.code,codeLanguage:n.codeLanguage,data:ne(n.data),groupData:re(n.data)}}catch(t){return{code:t.code,codeLanguage:t.codeLanguage,data:[],groupData:[]}}},_e=()=>{const{idBuilding:e,setGetListLabelStatus:i,setFilter:t,setListLabel:r,formFilter:s}=g.useContext(E);return[async d=>{t({...d}),i({isFetching:!0});const c=await P(e,{...d});r(c.data),i({isFetching:!1})},s]},Ae=()=>{const[e,i]=_e(),t=g.useMemo(()=>[{label:o.group_name,key:"folderName",component:a(T,{placeholder:o.group_name,fluid:!0}),visible:!0},{label:o.label_name,key:"labelName",component:a(T,{placeholder:o.label_name,fluid:!0}),visible:!0},{label:o.label_type,key:"labelType",component:N(I,{placeholder:o.type,fluid:!0,children:[a(I.Option,{value:"",children:o.all_label},"label_0"),ee.map(r=>a(I.Option,{value:r.id,children:r.name},r.id))]}),visible:!0}],[]);return a(B.FilterBox,{defaultFilter:F,filters:t,formData:i,onSearch:e})},xe=()=>{const{showModalAddLabel:e,labelPermissionWrite:i}=g.useContext(E);return[i,async()=>{e()}]};function Ue(){const[e,i]=xe(),t=te(),r=[e?a(we,{type:"primary",icon:a(D,{name:"icon-plus-circle-outlined"}),onClick:()=>{t({action:Le,label:j}),i()},children:o.add},"add"):null].filter(Boolean);return a(B.ActionBox,{actions:r})}const Ce=async(e,i,t)=>{try{const r=await le(e,i,t);return{code:r.code,codeLanguage:r.codeLanguage}}catch(r){return{code:r.code,codeLanguage:r.codeLanguage}}},Te=()=>{const{layoutScrollRef:e}=g.useContext(ae),{idBuilding:i,listLabel:t,getListLabelStatus:r,showModalUpdateLabel:s,showModalUpdateGroup:n,setListLabel:d,setListGroup:c,setGetListLabelStatus:h,filter:p,labelPermissionWrite:l}=g.useContext(E),u=H(),[m,y]=g.useState({isFetching:!1,code:void 0,codeLanguage:void 0});O(m.code,m.codeLanguage,{message:o.success,description:o.delete_data_success});const b=t,w=G=>{n({...G})},_=G=>{s({...G})},v=G=>{M.confirm({cancelText:o.cancel,okText:o.confirm,title:o.confirm,content:`${o.do_you_want_to_delete_this_data}?`,onOk:async()=>{y({isFetching:!0,code:void 0,codeLanguage:void 0});const S=await Ce(i,G.id,!G.type);if(y({isFetching:!1,code:S.code,codeLanguage:S.codeLanguage}),V.includes(S.code)){h({isFetching:!0});const f=await P(i,{...p});return d(f.data),c(f.groupData),h({isFetching:!1}),Promise.resolve()}return Promise.reject()},afterClose:()=>{y({isFetching:!1,code:void 0,codeLanguage:void 0})}})},U={offsetScroll:u.offsetScrollX,getContainer:()=>e.current};return[r.isFetching,b,U,v,_,w,l]};function Ee(){const[e,i,t,r,s,n,d]=Te(),c=te(),h=[{title:`${o.group} / ${o.label1}`,key:"name",dataIndex:"name",fixed:"left",render:(p,l)=>l.type?a(X,{children:a(Ge,{color:l.color,children:a("span",{children:p})})}):p},{title:o.short_name,key:"shortName",dataIndex:"shortName",width:100},{title:o.description,key:"description",dataIndex:"description"},{title:o.type,key:"type",dataIndex:"type",width:120,render:p=>{var l;return((l=fe[p])==null?void 0:l.name)??""}},d?{title:o.actions,key:"actions",align:"center",width:100,render:(p,l)=>N(X,{children:[a(D,{title:o.update,css:u=>({marginRight:`${u.margin.xs}px`,fontSize:u.iconSize}),name:"icon-edit-outlined",onClick:()=>{c({action:be,label:j}),l.isLabel?s(l):n(l)}}),a(D,{title:o.delete,css:u=>({fontSize:u.iconSize}),name:"icon-minus-circle-outlined",onClick:()=>{c({action:ve,label:j}),r(l)}})]})}:null].filter(Boolean);return a(B.Table,{columns:h,dataSource:i,loading:e,pagination:null,sticky:t,expandable:{defaultExpandAllRows:!0,expandIcon:({expanded:p,onExpand:l,record:u})=>u.type?null:p?a(D,{css:m=>({fontSize:m.iconSize,marginRight:m.margin.xss}),name:"icon-folder-open2-outlined",onClick:m=>l(u,m)}):a(D,{css:m=>({fontSize:m.iconSize,marginRight:m.margin.xss}),name:"icon-folder-open-outlined",onClick:m=>l(u,m)})}})}const R=({listGroup:e,formName:i})=>{const t=H();return N(ie,{gutter:[t.margin.md,0],children:[a(A,{span:"12",children:a(L.Item,{rules:[{required:!0}],label:o.name,name:"name",children:a(T,{placeholder:o.name})})}),a(A,{span:"12",children:a(L.Item,{rules:[{required:!0}],label:o.short_name,name:"shortName",children:a(T,{placeholder:o.short_name})})}),a(A,{span:"24",children:a(L.Item,{label:o.description,name:"description",children:a(T.TextArea,{fluid:!0,rows:"3",placeholder:o.description})})}),a(A,{span:"24",children:a(L.Item,{label:o.group,name:"group",children:a(oe,{placeholder:o.group,style:{width:"100%"},treeDefaultExpandAll:!0,allowClear:!0,treeLine:{showLine:!1,showLeafIcon:!1},getPopupContainer:()=>document.getElementById(i),treeData:e})})})]})};R.propTypes={listGroup:x.arrayOf(x.any),formName:x.string};R.defaultProps={listGroup:[],formName:""};function Y(e){const{onChange:i,disabled:t,value:r}=e,[s,n]=g.useState(""),d=c=>{n(c),i==null||i(c)};return a("input",{disabled:t,type:"color",onChange:c=>d(c.target.value),value:r||s})}Y.propTypes={onChange:x.func,disabled:x.bool,value:x.string};Y.defaultProps={onChange:()=>{},disabled:!1,value:void 0};const z=({listGroup:e,formName:i})=>{const t=H();return N(ie,{gutter:[t.margin.md,0],children:[a(A,{span:"12",children:a(L.Item,{rules:[{required:!0}],label:o.name,name:"name",children:a(T,{placeholder:o.name})})}),a(A,{span:"12",children:a(L.Item,{rules:[{required:!0}],label:o.short_name,name:"shortName",children:a(T,{placeholder:o.short_name})})}),a(A,{span:"12",children:a(L.Item,{rules:[{required:!0}],label:o.type,name:"type",children:a(I,{placeholder:o.type,fluid:!0,children:ee.map(r=>a(I.Option,{value:r.id,children:r.name},r.id))})})}),a(A,{span:"24",children:a(L.Item,{label:o.description,name:"description",children:a(T.TextArea,{fluid:!0,rows:"3",placeholder:o.description})})}),a(A,{span:"24",children:a(L.Item,{label:o.group,name:"group",children:a(oe,{placeholder:o.group,style:{width:"100%"},treeDefaultExpandAll:!0,allowClear:!1,treeLine:{showLine:!1,showLeafIcon:!1},getPopupContainer:()=>document.getElementById(i),treeData:e})})}),a(A,{span:"12",children:a(L.Item,{label:o.color,name:"color",children:a(Y,{})})})]})};z.propTypes={listGroup:x.arrayOf(x.any),formName:x.string};z.defaultProps={listGroup:[],formName:""};const Z=async(e,i)=>{try{const{name:t,shortName:r,description:s,group:n,isGroup:d=!1,color:c,type:h=Fe}=i,p=await ce(e,{title:t,abbreviateTitle:r,description:s,groupLabelId:n,isGroup:d,color:d?void 0:c||"#000000",type:d?void 0:h});return{code:p.code,codeLanguage:p.codeLanguage}}catch(t){return{code:t.code,codeLanguage:t.codeLanguage}}},Be=()=>{const{getLabels:e,getLabelTree:i}=ue(),{hideModalAddLabel:t,listGroup:r,idBuilding:s,setListGroup:n,setListLabel:d,setGetListLabelStatus:c,setFilter:h,formFilter:p}=g.useContext(E),[l,u]=g.useState({isFetching:!1,code:void 0,codeLanguage:void 0}),[m,y]=g.useState("FOLDER"),[b]=L.useForm(),[w]=L.useForm();O(l.code,l.codeLanguage,{message:o.success,description:o.add_data_success},()=>{t()});const _=f=>{y(f)},v=async()=>{if(await b.validateFields()){u({isFetching:!0,code:void 0,codeLanguage:void 0});const C=await Z(s,{...b.getFieldsValue(),isGroup:!0});if(V.includes(C.code)){h({...F}),p.resetFields(),c({isFetching:!0});const k=await P(s,{...F});d(k.data),n(k.groupData),await e(s),await i(s),c({isFetching:!1}),b.resetFields()}u({isFetching:!1,code:C.code,codeLanguage:C.codeLanguage})}},U=async()=>{if(await w.validateFields()){u({isFetching:!0,code:void 0,codeLanguage:void 0});const C=await Z(s,w.getFieldsValue());h({...F}),p.resetFields(),c({isFetching:!0});const k=await P(s,{...F});d(k.data),await e(s),c({isFetching:!1}),w.resetFields(),u({isFetching:!1,code:C.code,codeLanguage:C.codeLanguage})}},G=async()=>{m==="FOLDER"?await v():m==="LABEL"&&await U()},S=()=>t();return[l.isFetching,m,r,b,w,_,G,S]},Ne=()=>{const[e,i,t,r,s,n,d,c]=Be();return a(M,{title:o.add,okText:o.add,cancelText:o.cancel,open:!0,onOk:d,onCancel:c,okButtonProps:{disabled:e,loading:e},width:"50%",children:N(q,{activeKey:i,onChange:n,children:[a(q.TabPane,{tab:o.group,children:a(L,{layout:"vertical",form:r,name:"formAddGroup",children:a(R,{listGroup:t,formName:"formAddGroup"})})},"FOLDER"),a(q.TabPane,{tab:o.label1,children:a(L,{layout:"vertical",form:s,name:"formAddLabel",children:a(z,{listGroup:t,formName:"formAddLabel"})})},"LABEL")]})})},se=async(e,i)=>{try{const{id:t,name:r,shortName:s,description:n,group:d,isGroup:c=!1,color:h,type:p}=i,l=await pe(e,t,{title:r,abbreviateTitle:s,description:n,groupLabelId:d||null,isGroup:c,color:h||void 0,type:p});return{code:l.code,codeLanguage:l.codeLanguage}}catch(t){return{code:t.code,codeLanguage:t.codeLanguage}}},K=(e,i)=>{let t;for(let r=0;r<e.length;r+=1)if(e[r].value===i){t=e[r];break}else if(e[r].children&&e[r].children.length&&(t=K(e[r].children,i),t!=null&&t.value))break;return t},Pe=()=>{const{hideModalUpdateGroup:e,modalUpdateGroup:i,listGroup:t,idBuilding:r,setListGroup:s,setListLabel:n,setGetListLabelStatus:d,setFilter:c,formFilter:h}=g.useContext(E),[p,l]=g.useState({isFetching:!1,code:void 0,codeLanguage:void 0}),[u]=L.useForm(),{data:m}=i;O(p.code,p.codeLanguage,{message:o.success,description:o.update_data_success},()=>{e()});const y=async()=>{if(await u.validateFields()){const v=u.getFieldsValue();if(m.id===v.group)$.error({message:o.error1,description:o.unable_to_move_the_current_group_into_the_group_itself});else{const U=K(t,m.id);if(K(U==null?void 0:U.children,v==null?void 0:v.group))$.error({message:o.error1,description:o.unable_to_move_the_current_group_into_a_subgroup});else{l({isFetching:!0,code:void 0,codeLanguage:void 0});const S=await se(r,{...u.getFieldsValue(),id:m.id,isGroup:!0});if(V.includes(S.code)){c({...F}),h.resetFields(),d({isFetching:!0});const f=await P(r,{...F});n(f.data),s(f.groupData),d({isFetching:!1})}l({isFetching:!1,code:S.code,codeLanguage:S.codeLanguage})}}}else $.error({message:o.error1,description:o.data_invalid})},b=()=>e(),w={name:m.name,shortName:m.shortName,description:m.description,group:m.group};return[p.isFetching,w,t,u,y,b]},ke=()=>{const[e,i,t,r,s,n]=Pe();return a(M,{title:o.update_group,okText:o.confirm,cancelText:o.cancel,open:!0,onOk:s,onCancel:n,okButtonProps:{disabled:e,loading:e},width:"50%",children:a(L,{initialValues:i,layout:"vertical",form:r,name:"formUpdateGroup",children:a(R,{listGroup:t,formName:"formUpdateGroup"})})})},De=()=>{const{hideModalUpdateLabel:e,modalUpdateLabel:i,listGroup:t,idBuilding:r,setListLabel:s,setGetListLabelStatus:n,setFilter:d,formFilter:c}=g.useContext(E),[h,p]=g.useState({isFetching:!1,code:void 0,codeLanguage:void 0}),[l]=L.useForm(),{data:u}=i;O(h.code,h.codeLanguage,{message:o.success,description:o.update_data_success},()=>{e()});const m=async()=>{if(await l.validateFields()){p({isFetching:!0,code:void 0,codeLanguage:void 0});const _=await se(r,{...l.getFieldsValue(),id:u.id});if(V.includes(_.code)){d({...F}),c.resetFields(),n({isFetching:!0});const v=await P(r,{...F});s(v.data),n({isFetching:!1})}p({isFetching:!1,code:_.code,codeLanguage:_.codeLanguage})}},y=()=>e(),b={name:u.name,shortName:u.shortName,description:u.description,group:u.group,type:u.type,color:u.color};return[h.isFetching,b,t,l,m,y]},Ie=()=>{const[e,i,t,r,s,n]=De();return a(M,{title:o.update_label,okText:o.confirm,cancelText:o.cancel,open:!0,onOk:s,onCancel:n,okButtonProps:{disabled:e,loading:e},width:"50%",children:a(L,{initialValues:i,layout:"vertical",form:r,name:"formUpdateLabel",children:a(z,{listGroup:t,formName:"formUpdateLabel"})})})},Me=()=>{const{idBuilding:e,modalAddLabel:i,modalUpdateLabel:t,modalUpdateGroup:r,setListLabel:s,setListGroup:n,setGetListLabelStatus:d}=g.useContext(E),{setTitlePage:c,setVisibleFilterBox:h,setVisibleSearchBox:p}=g.useContext(ae);return g.useEffect(()=>(c(o.configs_labels),p(!0),(async()=>{d({isFetching:!0});const l=await P(e,{...F});s(l.data),n(l.groupData),d({isFetching:!1})})(),()=>{c(""),p(!1),h(!1)}),[]),[i.isShow,t.isShow,r.isShow]},Ve=()=>{const[e,i,t]=Me();return N(B.Wrapper,{children:[a(Ae,{}),N(B.Container,{children:[a(B.Header,{children:a(Ue,{})}),a(B.Content,{children:a(Ee,{})})]}),e?a(Ne,{}):null,t?a(ke,{}):null,i?a(Ie,{}):null]})},fa=()=>a(Se,{children:a(Ve,{})});export{fa as default};
