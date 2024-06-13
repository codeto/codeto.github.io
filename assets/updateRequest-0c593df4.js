import{g as I}from"./department-807891d3.js";import{h as p}from"./moment-a468e1f9.js";import{j as L,f as Y,R as B,i as U}from"./constant-e1099cfb.js";import{u as j,a as q,j as a}from"./@emotion-63839449.js";import{P as s}from"./prop-types-1172f4d5.js";import"./lodash-88fe09e6.js";import{l,aN as F,gq as M}from"./index-c2ded735.js";import{D as A,d as H,w as Q,U as $,a as G}from"./index-b17d22e5.js";import"./file-saver-40cf32a9.js";import{F as P}from"./index-687ba9e6.js";import{S as b,I as K}from"./index-43183512.js";import{b as D,c as v,R as w,S as z}from"./antd-f9eae174.js";import{g as J}from"./staff-2880022d.js";const W=e=>({id:e.id,name:e.fullName}),X=e=>{var t;return{id:e.id,name:e.name,receivers:((t=e==null?void 0:e.receivers)==null?void 0:t.map(i=>W(i)))??[]}},me=async e=>{try{const t=await I(e,!0);return{code:t.code,codeLanguage:t.codeLanguage,data:t.data.map(i=>X(i))}}catch(t){return{code:t.code,codeLanguage:t.codeLanguage,data:[]}}},Z=e=>{var t,i,g,S,c,u;return{id:e.id,content:e.description,expiryDate:e.dueDate,receiver:{id:(g=(i=(t=e==null?void 0:e.assignees)==null?void 0:t[0])==null?void 0:i.assignee)==null?void 0:g.id,name:(u=(c=(S=e==null?void 0:e.assignees)==null?void 0:S[0])==null?void 0:c.assignee)==null?void 0:u.fullName},status:e.progressStatus,attachments:e.attachments||[],note:e.note,completeDate:e.actionDate||e.updatedAt,cancelDate:e.actionDate||e.updatedAt,createdAt:e.createdAt}},he=({id:e,code:t,description:i,createdAt:g,dueDate:S,unit:c,department:u,progressStatus:_,tasks:f,actionDate:C,updatedAt:y,review:n,note:r,receiver:m,resident:d,approved:o,employee:h,attachments:x,helpDesk:T})=>{var E;let O=!1;return _===L?O=p(S).isBefore(C||y,"date"):[Y,B].includes(_)&&(O=p(S).isBefore(new Date,"date")),{key:e,id:e,code:t,content:i,requestDate:g,expiryDate:S,updatedDate:y,completeDate:C||y,cancelDate:C||y,resident:d?{id:d==null?void 0:d.id,name:(d==null?void 0:d.fullName)??""}:null,apartment:{id:c==null?void 0:c.id,name:(c==null?void 0:c.name)??"",residents:((E=c==null?void 0:c.residents)==null?void 0:E.map(R=>({...R,name:R.fullName})))??[]},apartmentName:(c==null?void 0:c.name)??"",department:{id:u==null?void 0:u.id,name:(u==null?void 0:u.name)??""},departmentName:(u==null?void 0:u.name)??"",sender:{id:h==null?void 0:h.id,avatar:h==null?void 0:h.avatar,name:h==null?void 0:h.fullName},receiver:{id:m==null?void 0:m.id,avatar:(m==null?void 0:m.avatar)??"/assets/images/default-avatar.jpg",name:(m==null?void 0:m.fullName)??""},approver:{id:o==null?void 0:o.id,avatar:(o==null?void 0:o.avatar)??"/assets/images/default-avatar.jpg",name:(o==null?void 0:o.fullName)??""},status:_,statistics:{total:f.length,completed:f.filter(R=>R.progressStatus===L).length,cancelled:f.filter(R=>R.progressStatus===U).length},isOverDue:O,review:{rank:(n==null?void 0:n.rank)??"",comment:(n==null?void 0:n.comment)??""},note:r||"",tasks:(f==null?void 0:f.map(R=>Z(R)))??[],attachments:x||[],reason:r||"",result:r||"",helpDeskId:(T==null?void 0:T.id)||void 0,helpDeskCode:(T==null?void 0:T.code)||""}},N=({department:e,receiver:t,apartment:i,disabledItem:g,handleSearchApartment:S,photos:c,onChangePhotos:u,onClickPreviewPhoto:_,previewPhoto:f,onClickBtnCloseModalPreviewPhoto:C})=>{const y=j();return q(w,{gutter:[y.margin.xs,0],children:[a(D,{span:24,children:a(P.Item,{name:"expiryDate",rules:[{required:!0},{validator:(n,r)=>r?r&&p(r).isBefore(p().subtract(1,"day"))?Promise.reject(new Error(`${l.min_due_date}: ${p().format("DD/MM/YYYY")}`)):r&&p(r).isBefore(p(),"minutes")?Promise.reject(new Error(`${l.min_due_date}: ${p().format("DD/MM/YYYY HH:mm")}`)):Promise.resolve():Promise.reject(new Error(l.data_require))}],label:l.expiry_date,children:a(A,{disabledDate:n=>p(n).isBefore(p().subtract(1,"day")),fluid:!0,showTime:!0,format:"DD/MM/YYYY HH:mm",placeholder:"DD/MM/YYYY HH:mm",allowClear:!1})})}),a(D,{span:12,children:a(P.Item,{name:"department",rules:[{required:!0}],label:l.department,children:a(b,{disabled:g.includes("department"),loading:e.isFetching,placeholder:l.department,fluid:!0,children:e.records.map(({id:n,name:r})=>a(b.Option,{value:n,children:r},n))})})}),a(D,{span:12,children:a(P.Item,{noStyle:!0,shouldUpdate:(n,r)=>n.department!==r.department,children:({getFieldValue:n})=>{var r,m;return a(P.Item,{name:"receiver",rules:[{required:!0}],label:l.receiver,children:a(b,{loading:t.isFetching,placeholder:l.receiver,fluid:!0,children:((m=(r=t==null?void 0:t.records)==null?void 0:r.filter(d=>d==null?void 0:d.departments.includes(Number(n("department")))))==null?void 0:m.map(({id:d,name:o})=>a(b.Option,{value:d,children:o},d)))??[]})})}})}),a(D,{span:24,children:a(P.Item,{name:"content",rules:[{required:!0}],label:l.content,children:a(K.TextArea,{disabled:g.includes("content"),rows:"4",placeholder:l.content})})}),a(D,{span:24,children:a(P.Item,{name:"requestByResident",valuePropName:"checked",children:a(v,{disabled:g.includes("requestByResident"),children:l.request_by_resident})})}),a(D,{span:24,children:a(P.Item,{shouldUpdate:(n,r)=>n.requestByResident!==r.requestByResident||n.apartment!==r.apartment,noStyle:!0,children:({getFieldValue:n})=>{var r,m,d;return n("requestByResident")?q(w,{gutter:[y.margin.xs,0],children:[a(D,{span:12,children:a(P.Item,{name:"apartment",rules:[{required:!0}],label:l.unit,children:a(b,{disabled:g.includes("apartment"),fluid:!0,showSearch:!0,placeholder:l.select_apartment,filterOption:!1,loading:i.isFetching,onSearch:H(S),dropdownRender:o=>i.isFetching?a("div",{style:{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"},children:a(z,{})}):o,children:i.records.map(({id:o,name:h})=>a(b.Option,{value:o,children:h},o))})})}),a(D,{span:12,children:a(P.Item,{name:"resident",rules:[{required:!0}],label:l.resident,children:a(b,{placeholder:l.resident,disabled:g.includes("resident"),fluid:!0,children:(d=(m=(r=i.records)==null?void 0:r.find(o=>o.id===Number(n("apartment"))))==null?void 0:m.residents)==null?void 0:d.map(({id:o,name:h})=>a(b.Option,{value:o,children:h},o))})})})]}):null}})}),q(D,{span:"24",children:[a(P.Item,{name:"photos",label:l.photos_request,children:a(Q,{fileList:c,listType:"picture-card",accept:"image/*",onChange:u,maxCount:5,onPreview:_,multiple:!0,module:F,children:c.length>=5?null:a($,{})})}),f.isPreview?a(G,{open:!0,title:l.detail,footer:null,onCancel:C,children:a("img",{alt:"example",style:{width:"100%"},src:f.photoPreview})}):null]})]})};N.propTypes={isFetching:s.bool,department:s.objectOf(s.any),receiver:s.objectOf(s.any),apartment:s.objectOf(s.any),handleSearchApartment:s.func,disabledItem:s.arrayOf(s.any),photos:s.arrayOf(s.any),onChangePhotos:s.arrayOf(s.func),previewPhoto:s.arrayOf(s.func),onClickPreviewPhoto:s.arrayOf(s.func),onClickBtnCloseModalPreviewPhoto:s.arrayOf(s.func)};N.defaultProps={isFetching:!1,department:{isFetching:!1,records:[]},receiver:{isFetching:!1,records:[]},apartment:{isFetching:!1,records:[]},handleSearchApartment:()=>{},disabledItem:[],photos:[],onChangePhotos:()=>{},previewPhoto:()=>{},onClickPreviewPhoto:()=>{},onClickBtnCloseModalPreviewPhoto:()=>{}};const V=e=>{var t;return{id:e.id,name:e.fullName,departments:((t=e==null?void 0:e.departments)==null?void 0:t.map(i=>i.id))??[]}},ge=async e=>{try{const t=await J(e);return{code:t.code,codeLanguage:t.codeLanguage,data:t.data.map(i=>V(i))}}catch(t){return{code:t.code,codeLanguage:t.codeLanguage,data:0}}},fe=async(e,t,i)=>{const{expiryDate:g,department:S,receiver:c,content:u,apartment:_,resident:f,requestByResident:C,attachments:y}=i,n={description:u,departmentId:S,receiverId:c,dueDate:p(g).toDate(),attachments:y};C&&(n.unitId=_,n.residentId=f);try{const r=await M(e,t,n);return{code:r.code,codeLanguage:r.codeLanguage}}catch(r){return{code:r.code,codeLanguage:r.codeLanguage}}};export{N as F,ge as a,Z as b,he as c,me as g,fe as u};
