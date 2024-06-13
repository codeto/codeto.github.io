import{j as o,u as K,F as G,a as v}from"./@emotion-63839449.js";import{P as w,a as z,z as ne,D as P,F as Se}from"./index-b17d22e5.js";import"./lodash-88fe09e6.js";import{h as y}from"./moment-a468e1f9.js";import{l as n,by as ve,K as re,b0 as we,ao as We,at as Fe,i as b,A,M as E,X as Y,j as ce,a as q,E as X,S as V,I as x,a3 as Le,bG as xe,a5 as be}from"./index-c2ded735.js";import"./file-saver-40cf32a9.js";import{B as se}from"./index-881eef42.js";import{r as p}from"./react-4fd50329.js";import{P as Ae}from"./prop-types-1172f4d5.js";import{F as D,u as H}from"./index-687ba9e6.js";import"./react-redux-896b353b.js";import"./@firebase-43527ee1.js";import{u as Ee}from"./react-router-a4308f7b.js";import{i as Ye}from"./intersectPeriodTime-5a3f0a94.js";import{T as Ce}from"./index-3a1629f9.js";import{c as de}from"./convertNumberToDateTime-e1623b31.js";import{b as k,R as I,B as le,T as Me}from"./antd-f9eae174.js";import{I as me}from"./index-43183512.js";import"./hoist-non-react-statics-23d96a9a.js";import"./react-is-e8e5dbb3.js";import"./@babel-b64fd0f9.js";import"./stylis-79144faa.js";import"./react-router-dom-2a8f5f6d.js";import"./history-a1882333.js";import"./resolve-pathname-e210f2ac.js";import"./tiny-invariant-dd7d57d2.js";import"./account-86ffff50.js";import"./libphonenumber-js-0d5a9c92.js";import"./react-infinite-scroll-component-e33646cb.js";import"./classnames-4ba1ba1a.js";import"./redux-10bbab4c.js";import"./react-dom-40621ea0.js";import"./scheduler-765c72db.js";import"./@redux-saga-8bafe09b.js";import"./redux-logger-e1c9ca90.js";import"./dompurify-8e338605.js";import"./query-string-f5cca1e7.js";import"./decode-uri-component-4138e85d.js";import"./split-on-first-4f1167c8.js";import"./filter-obj-2ed190f4.js";import"./oidc-client-7da0eaf7.js";import"./firebase-878887a2.js";import"./rc-pagination-c1e6a0ac.js";import"./rc-picker-2e3d5fe5.js";import"./rc-util-0bc219f3.js";import"./rc-trigger-570b13ec.js";import"./rc-motion-ae889c42.js";import"./rc-align-e5d7b12e.js";import"./dom-align-ecb06dd6.js";import"./resize-observer-polyfill-0f9f8adb.js";import"./rc-resize-observer-b9ad4e29.js";import"./@ant-design-cba9d434.js";import"./@ctrl-fb5a5473.js";import"./rc-tabs-dfd19a56.js";import"./rc-dropdown-5378dd0a.js";import"./rc-menu-b15ebfe9.js";import"./rc-overflow-6be96612.js";import"./rc-select-564caf01.js";import"./rc-virtual-list-8a7b82a6.js";import"./rc-collapse-11b7d3c4.js";import"./shallowequal-4542d6f7.js";import"./rc-drawer-317f0b4d.js";import"./@rc-component-5a112e55.js";import"./rc-field-form-ef5549aa.js";import"./async-validator-dee29e8b.js";import"./scroll-into-view-if-needed-6b992d05.js";import"./compute-scroll-into-view-183f845a.js";import"./rc-image-e0357917.js";import"./rc-dialog-b1d1f07b.js";import"./rc-input-number-8bc068f7.js";import"./rc-rate-c64cf0d5.js";import"./rc-steps-2d1924c7.js";import"./rc-switch-b4e96de7.js";import"./rc-table-191ecc42.js";import"./rc-checkbox-018e8052.js";import"./rc-tree-67773537.js";import"./rc-tree-select-cb7eccc3.js";import"./copy-to-clipboard-64585c8c.js";import"./toggle-selection-93f4ad84.js";import"./rc-textarea-d01adcbb.js";import"./rc-input-02c2c2ba.js";import"./rc-upload-3ab0f08a.js";import"./rc-notification-d13dc43b.js";import"./rc-progress-4f1a7096.js";import"./rc-tooltip-08fa4217.js";import"./use-sync-external-store-5d1b6592.js";import"./idb-cdd1a92f.js";import"./path-to-regexp-ef8d5544.js";const J={time:y().startOf("month")},fe="MONDAY",ue="TUESDAY",pe="WEDNESDAY",he="THURSDAY",ye="FRIDAY",ge="SATURDAY",_e="SUNDAY",M=[{label:n.amenities_serve_day_monday,value:fe},{label:n.amenities_serve_day_tuesday,value:ue},{label:n.amenities_serve_day_wednesday,value:pe},{label:n.amenities_serve_day_thursday,value:he},{label:n.amenities_serve_day_friday,value:ye},{label:n.amenities_serve_day_saturday,value:ge},{label:n.amenities_serve_day_sunday,value:_e}],De=ve(M,"value"),W=p.createContext({idBuilding:0,formFilter:void 0,filter:{...J},setFilter:()=>{},listWorkTime:[],setListWorkTime:()=>{},listDayOff:[],setListDayOff:()=>{},getListDayOffStatus:{isFetching:!1},setGetListDayOffStatus:()=>{},getListWorkTimeStatus:{isFetching:!1},setGetListWorkTimeStatus:()=>{},modalAddDayOff:void 0,showModalAddDayOff:()=>{},hideModalAddDayOff:()=>{},modalUpdateDayOff:void 0,showModalUpdateDayOff:()=>{},hideModalUpdateDayOff:()=>{},workSchedulePermissionWrite:!1}),Q=({children:t})=>{const{idBuilding:a}=Ee(),[e,r]=p.useState({isFetching:!1}),[i,s]=p.useState({isFetching:!1}),[l,d]=p.useState({...J}),[c,m]=p.useState([]),[g,h]=p.useState([]),[u]=D.useForm(),[T,O,_]=re(),[f,L,S]=re(),{getPermissionByModuleCode:Z}=we(),F=Z(We),N=(F==null?void 0:F[Fe])??!1,ee={filter:l,setFilter:d,listWorkTime:c,setListWorkTime:m,listDayOff:g,setListDayOff:h,idBuilding:a,formFilter:u,getListWorkTimeStatus:e,setGetListWorkTimeStatus:r,getListDayOffStatus:i,setGetListDayOffStatus:s,modalAddDayOff:T,showModalAddDayOff:O,hideModalAddDayOff:_,modalUpdateDayOff:f,showModalUpdateDayOff:L,hideModalUpdateDayOff:S,workSchedulePermissionWrite:N};return o(W.Provider,{value:ee,children:t})};Q.propTypes={children:Ae.node};Q.defaultProps={children:o("div",{})};const Pe=Q,Te=`${ce}/work-day`,Ie=Te,Ue=Te,Be=async t=>await b({type:A,payload:{apiUrl:Ie,method:E.GET,options:{headers:{[Y]:t}}}}),Re=async(t,a)=>await b({type:A,payload:{apiUrl:Ue,body:a,method:E.POST,options:{headers:{[Y]:t}}}}),Ve=async(t,a)=>{try{const e=await Re(t,a);return{code:e.code,codeLanguage:e.codeLanguage}}catch(e){return{code:e.code,codeLanguage:e.codeLanguage}}},He=(t,a)=>{const e={};return t.forEach(r=>{var l;const i=a[`workTimes-${r}`];(l=i[0]).periodWorkTime??(l.periodWorkTime=[]);const s=[];i==null||i.forEach(d=>{const c=y(d.periodWorkTime[0]),m=y(d.periodWorkTime[1]);c<m&&s.push({startTime:c.hour()*100+c.minute(),endTime:m.hour()*100+m.minute()}),c>=m}),e[r]=s}),e},$e=t=>{const{id:a,unitGroupId:e,dayInWeek:r,workTimes:i}=t,s={},l={};i==null||i.forEach(c=>{const{startTime:m,endTime:g}=c,h=de(m),u=de(g),T=`${r}`;s[T]=s[T]||[],s[T].push({startTime:m,startTimeFormat:h.time,endTimeFormat:u.time});const O=`${m}-${g}`;l[O]||(l[O]={periodWorkTime:[h==null?void 0:h.dateTime,u==null?void 0:u.dateTime]})});const d=De[r].label||"";return{id:a,unitGroupId:e,dayInWeek:r,dayInWeekFormat:d,periodWorkTime:Object.values(l).map(c=>({...c}))}},Ne=t=>{const{value:a}=t,e=De[a].label||"";return{dayInWeek:a,dayInWeekFormat:e,periodWorkTime:""}},je=async t=>{var a;try{const e=await Be(t),r=[fe,ue,pe,he,ye,ge,_e];return e.data.sort((i,s)=>r.indexOf(i.dayInWeek)-r.indexOf(s.dayInWeek)),{code:e.code,codeLanguage:e.codeLanguage,data:(a=e==null?void 0:e.data)==null?void 0:a.map(i=>$e(i)),dayInWeek:M==null?void 0:M.map(i=>Ne(i))}}catch(e){return{code:e.code,codeLanguage:e.codeLanguage,data:[]}}},$=`${ce}/day-off`,Ge=`${$}`,Ke=$,ze=t=>`${$}/${t}`,qe=t=>`${$}/${t}`,Xe=async(t,a)=>await b({type:A,payload:{apiUrl:Ke,body:a,method:E.POST,options:{headers:{[Y]:t}}}}),Je=async(t,a,e)=>await b({type:A,payload:{apiUrl:ze(a),body:e,method:E.PUT,options:{headers:{[Y]:t}}}}),Qe=async(t,a)=>await b({type:A,payload:{apiUrl:qe(a),method:E.DELETE,options:{headers:{[Y]:t}}}}),Ze=async(t,a)=>await b({type:A,payload:{apiUrl:Ge,method:E.GET,options:{headers:{[Y]:t},params:{...a}}}}),et=t=>{const{id:a,unitGroupId:e,content:r,startTime:i,endTime:s}=t;return{id:a,unitGroupId:e,content:r,startTime:i,endTime:s,dayOff:`${i?y(i).format("DD/MM/YYYY"):""}${s?` - ${y(s).format("DD/MM/YYYY")}`:""}`}},tt=async(t,a)=>{var e,r;try{const{time:i}=a,s=await Ze(t,{time:((e=y(i))==null?void 0:e.startOf("month").toISOString())??void 0});return{code:s.code,codeLanguage:s.codeLanguage,data:(r=s==null?void 0:s.data)==null?void 0:r.map(l=>et(l))}}catch(i){return{code:i.code,codeLanguage:i.codeLanguage,data:[]}}},C=()=>{const{idBuilding:t,setListWorkTime:a,setGetListWorkTimeStatus:e,setGetListDayOffStatus:r,setListDayOff:i}=p.useContext(W);return{changeDataTableWorkTime:async()=>{var c;e({isFetching:!0});const d=await je(t);a(((c=d==null?void 0:d.data)==null?void 0:c.length)>0?d==null?void 0:d.data:d==null?void 0:d.dayInWeek),e({isFetching:!1})},changeDataTableDayOff:async d=>{r({isFetching:!0});const c=await tt(t,d);i(c.data??[]),r({isFetching:!1})}}},ot=()=>{const{layoutScrollRef:t}=p.useContext(q),{idBuilding:a,listWorkTime:e,getListWorkTimeStatus:r,workSchedulePermissionWrite:i}=p.useContext(W),{changeDataTableWorkTime:s}=C(),l=K(),[d]=D.useForm(),c=[...M],m=c==null?void 0:c.map(_=>_==null?void 0:_.value),[g,h]=p.useState({isFetching:!1,code:void 0,codeLanguage:void 0});H(g.code,g.codeLanguage,{message:n.success,description:n.update_work_time_success});const u=async()=>{if(d.setFieldsValue({...X(d.getFieldsValue(),{})}),await d.validateFields()){const f=d.getFieldsValue(),L=He(m,f);h({isFetching:!0,code:void 0,codeLanguage:void 0});const S=await Ve(a,L);h({isFetching:!1,code:S.code,codeLanguage:S.codeLanguage}),V.includes(S.code)&&await s()}},T={offsetScroll:l.offsetScrollX,getContainer:()=>t.current},O={};return m.forEach(_=>{const f=e==null?void 0:e.find(S=>S.dayInWeek===_),L=(f==null?void 0:f.periodWorkTime)||[];O[`workTimes-${_}`]=L.length>0?L:[{periodWorkTime:[]}]}),{loading:r.isFetching,isFetchingSaveWorkTime:g==null?void 0:g.isFetching,dataSource:e,sticky:T,workSchedulePermissionWrite:i,initialsValue:O,handleSaveWorkTime:u,formSaveWorkTime:d}};function at(){const{loading:t,dataSource:a,sticky:e,initialsValue:r,formSaveWorkTime:i,handleSaveWorkTime:s,workSchedulePermissionWrite:l,isFetchingSaveWorkTime:d}=ot(),c=K(),m=[{title:n.day_of_the_week,key:"dayInWeekFormat",dataIndex:"dayInWeekFormat",fixed:"left",width:100},{title:n.amenities_type_pre_order_by_period_time,key:"periodWorkTime",dataIndex:"periodWorkTime",render:(g,h)=>o(D,{layout:"vertical",form:i,name:"formSaveWorkTime",initialValues:r,children:o(k,{span:24,children:o(D.List,{name:`workTimes-${h.dayInWeek}`,children:(u,{add:T,remove:O})=>{const _=[];for(let f=0;f<u.length;f+=1)_.push([`workTimes-${h.dayInWeek}`,u[f].name,"periodWorkTime"]);return o(G,{children:u.map((f,L)=>o(I,{gutter:[8,8],children:o(k,{flex:"1 0 0",style:{width:"100%"},children:v(I,{gutter:[12,0],children:[o(k,{span:20,children:o(D.Item,{label:n.working_shift,name:[f.name,"periodWorkTime"],fieldKey:[f.fieldKey,"periodWorkTime"],dependencies:_,rules:[{required:(u==null?void 0:u.length)>1},({getFieldValue:S})=>({validator(Z,F){if(!F||F.length===0)return Promise.resolve();const N=y(F[0]).toDate().getTime();if(y(F[1]).toDate().getTime()-N===0)return Promise.reject(n.start_time_must_lower_than_the_end_time);const te=S(`workTimes-${h.dayInWeek}`),oe=f.name,{periodWorkTime:j}=te[oe],U=[...te].filter((B,R)=>R!==oe);let ae=!1;if(U&&U.length)for(let B=0;B<U.length;B+=1){const{periodWorkTime:R}=U[B],ie=Number(y(j[0]).format("HHmm")),Oe=Number(y(j[1]).format("HHmm")),ke=Number(y(R[1]).format("HHmm"));if(Ye(j,R)){ae=!0;break}if(ie===Oe)return Promise.reject(n.start_time_must_lower_than_the_end_time);if(ie===ke)return Promise.reject(n.the_start_time_of_the_current_shift_must_be_greater_than_the_end_time_of_the_previous_shift)}return ae?Promise.reject(n.period_time_existed):Promise.resolve()}})],children:o(Ce.RangePicker,{placeholder:[n.start_time,n.end_time],format:"HH:mm",fluid:"true",allowClear:u.length===1,minuteStep:15,getPopupContainer:S=>S.parentNode})},f.key)}),o(k,{span:4,children:v(D.Item,{label:o("div",{}),children:[u.length>1?o(x,{onClick:()=>{u.length>1&&O(f.name)},name:"icon-minus-circle-outlined",style:{fontSize:c.iconSize}}):null,f.name!==u.length-1?null:o(x,{onClick:()=>{T({periodWorkTime:[]})},name:"icon-plus-circle-outlined",style:{marginLeft:u.length>1?"10px":"",fontSize:c.iconSize}})]})})]})})},f.key))})}})})})}].filter(Boolean);return v(G,{children:[o("div",{style:{textAlign:"right",margin:"0 12px 12px 12px"},children:l?o(le,{type:"primary",icon:o(x,{name:"icon-calendar-outlined"}),onClick:()=>{s()},loading:d,children:n.save_work_schedule},"save"):null}),o("div",{style:{height:"100vh",overflowY:"scroll"},children:o(w.Table,{columns:m,dataSource:a,loading:t,pagination:!1,sticky:e})})]})}const it=async(t,a)=>{try{const e=await Qe(t,a);return{code:e.code,codeLanguage:e.codeLanguage}}catch(e){return{code:e.code,codeLanguage:e.codeLanguage}}},nt=()=>{const{layoutScrollRef:t}=p.useContext(q),{idBuilding:a,listDayOff:e,getListDayOffStatus:r,showModalUpdateDayOff:i,filter:s,workSchedulePermissionWrite:l}=p.useContext(W),{changeDataTableDayOff:d}=C(),c=K(),[m,g]=p.useState({isFetching:!1,code:void 0,codeLanguage:void 0});H(m.code,m.codeLanguage,{message:n.success,description:n.delete_day_off_success});const h=e,u=_=>{i({..._})},T=_=>{z.confirm({cancelText:n.cancel,okText:n.confirm,title:n.confirm,content:`${n.do_you_want_to_delete_day_off}`,onOk:async()=>{g({isFetching:!0,code:void 0,codeLanguage:void 0});const f=await it(a,_.id);return g({isFetching:!1,code:f.code,codeLanguage:f.codeLanguage}),V.includes(f.code)?(await d(s),Promise.resolve()):Promise.reject()},afterClose:()=>{g({isFetching:!1,code:void 0,codeLanguage:void 0})}})},O={offsetScroll:c.offsetScrollX,getContainer:()=>t.current};return{loading:r.isFetching,dataSource:h,sticky:O,handleDeleteDayOff:T,handleUpdateDayOff:u,workSchedulePermissionWrite:l}};function rt(){const{loading:t,dataSource:a,sticky:e,handleUpdateDayOff:r,workSchedulePermissionWrite:i,handleDeleteDayOff:s}=nt(),l=[{title:n.title,key:"content",dataIndex:"content",fixed:"left",render:(d,c)=>{const m=d;return(m==null?void 0:m.length)>20?o(Me,{title:m,placement:"topLeft",children:o("div",{style:{width:"200px",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:m})}):o("div",{style:{width:"200px",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:m})}},{title:n.day_off,key:"dayOff",dataIndex:"dayOff",align:"left"},i?{title:n.actions,key:"actions",align:"center",width:120,render:(d,c)=>v(G,{children:[o(x,{title:n.update,css:m=>({marginRight:`${m.margin.xs}px`,fontSize:m.iconSize}),name:"icon-edit-outlined",onClick:()=>{r(c)}}),o(x,{title:n.delete,css:m=>({fontSize:m.iconSize}),name:"icon-minus-circle-outlined",onClick:()=>{s(c)}})]})}:null].filter(Boolean);return o("div",{style:{height:"calc(100vh - 100px)",overflowY:"scroll"},children:o(w.Table,{columns:l,dataSource:a,loading:t,pagination:!1,sticky:e})})}const st=()=>{const{showModalAddDayOff:t,workSchedulePermissionWrite:a,listDayOff:e}=p.useContext(W);return{workSchedulePermissionWrite:a,handleAddDayOff:async()=>{t()},totalRecord:e==null?void 0:e.length}};function dt(){const{workSchedulePermissionWrite:t,handleAddDayOff:a,totalRecord:e}=st(),r=Le(),i=[t?o(le,{type:"primary",icon:o(x,{name:"icon-calendar-outlined"}),onClick:()=>{r({action:xe,label:be}),a()},children:n.add_day_off},"add"):null].filter(Boolean);return o(w.ActionBox,{actions:i,total:e})}const ct=()=>{const{setFilter:t,formFilter:a}=p.useContext(W),{changeDataTableDayOff:e}=C();return{onSearch:async i=>{t({...i}),await e(i)},formFilter:a}},lt=()=>{const{onSearch:t,formFilter:a}=ct(),e=p.useMemo(()=>[{label:n.month_day_off,key:"time",component:o(P,{allowClear:!1,fluid:"true",picker:"month",format:ne,placeholder:ne,getPopupContainer:r=>r.parentNode}),visible:!0}],[]);return o(Se,{initialValues:J,filters:e,onSearch:t,formData:a,visibleFilterBox:!0,size:"small"})},mt=async(t,a)=>{try{const{content:e,startTime:r,endTime:i}=a,s={content:e??"",startTime:r?y(r).startOf("day").toDate():void 0,endTime:i?y(i).endOf("day").toDate():void 0},l=await Xe(t,s);return{code:l.code,codeLanguage:l.codeLanguage}}catch(e){return{code:e.code,codeLanguage:e.codeLanguage}}},ft=()=>{const{hideModalAddDayOff:t,idBuilding:a,filter:e}=p.useContext(W),{changeDataTableDayOff:r}=C(),[i,s]=p.useState({isFetching:!1,code:void 0,codeLanguage:void 0}),[l]=D.useForm();H(i.code,i.codeLanguage,{message:n.success,description:n.add_day_off_success},()=>{t()});const d=async()=>{if(l.setFieldsValue({...X(l.getFieldsValue(),{})}),await l.validateFields()){const g=l.getFieldsValue();s({isFetching:!0,code:void 0,codeLanguage:void 0});const h=await mt(a,g);s({isFetching:!1,code:h.code,codeLanguage:h.codeLanguage}),V.includes(h.code)&&await r(e)}},c={content:"",startTime:"",endTime:""};return{loading:i.isFetching,formAddDayOff:l,handleAddDayOff:d,hideModalAddDayOff:t,initialValues:c}},ut=()=>{const{loading:t,formAddDayOff:a,handleAddDayOff:e,hideModalAddDayOff:r,initialValues:i}=ft();return o(z,{title:n.add_day_off,okText:n.add,cancelText:n.cancel,open:!0,onOk:e,onCancel:r,okButtonProps:{disabled:t,loading:t},width:"40%",children:o(D,{layout:"vertical",form:a,name:"formAddDayOff",initialValues:i,children:v(I,{gutter:16,children:[o(k,{span:"24",children:o(D.Item,{label:n.title,name:"content",rules:[{required:!0}],children:o(me,{fluid:"true",placeholder:n.title,allowClear:"true"})})}),o(k,{span:"12",children:o(D.Item,{dependencies:["endTime"],rules:[{required:!0},({getFieldValue:s})=>({validator(l,d){return d&&s("endTime")&&y(d).startOf("day").isAfter(s("endTime"))?Promise.reject(n.day_off_start_time_must_be_less_than_or_equal_to_day_off_end_time):Promise.resolve()}})],label:n.start_time_day_off,name:"startTime",children:o(P,{fluid:"true",placeholder:"DD/MM/YYYY",format:"DD/MM/YYYY"})})}),o(k,{span:"12",children:o(D.Item,{dependencies:["startTime"],rules:[{required:!0},({getFieldValue:s})=>({validator(l,d){const c=s("startTime");return c&&d&&y(d).isBefore(c,"days")?Promise.reject(n.day_off_start_time_must_be_less_than_or_equal_to_day_off_end_time):Promise.resolve()}})],label:n.end_time_day_off,name:"endTime",children:o(P,{fluid:"true",placeholder:"DD/MM/YYYY",format:"DD/MM/YYYY"})})})]})})})},pt=async(t,a,e)=>{try{const{content:r,startTime:i,endTime:s}=e,l={content:r??"",startTime:i?y(i).startOf("day").toDate():void 0,endTime:s?y(s).endOf("day").toDate():void 0},d=await Je(t,a,l);return{code:d.code,codeLanguage:d.codeLanguage}}catch(r){return{code:r.code,codeLanguage:r.codeLanguage}}},ht=()=>{const{modalUpdateDayOff:t,hideModalUpdateDayOff:a,idBuilding:e,filter:r}=p.useContext(W),{changeDataTableDayOff:i}=C(),{id:s}=t==null?void 0:t.data,[l,d]=p.useState({isFetching:!1,code:void 0,codeLanguage:void 0}),[c]=D.useForm();H(l.code,l.codeLanguage,{message:n.success,description:n.update_day_off_success},()=>{a()});const m=async()=>{if(c.setFieldsValue({...X(c.getFieldsValue(),{})}),await c.validateFields()){const _=c.getFieldsValue();d({isFetching:!0,code:void 0,codeLanguage:void 0});const f=await pt(e,s,_);d({isFetching:!1,code:f.code,codeLanguage:f.codeLanguage}),V.includes(f.code)&&await i(r)}},{startTime:g,endTime:h,content:u}=t==null?void 0:t.data,T={content:u??"",startTime:y(g)??"",endTime:y(h)??""};return{loading:l.isFetching,formUpdateDayOff:c,handleUpdateDayOff:m,hideModalUpdateDayOff:a,initialValues:T}},yt=()=>{const{loading:t,formUpdateDayOff:a,handleUpdateDayOff:e,hideModalUpdateDayOff:r,initialValues:i}=ht();return o(z,{title:n.update_day_off,okText:n.update,cancelText:n.cancel,open:!0,onOk:e,onCancel:r,okButtonProps:{disabled:t,loading:t},width:"50%",children:o(D,{layout:"vertical",form:a,name:"formUpdateDayOff",initialValues:i,children:v(I,{gutter:16,children:[o(k,{span:"24",children:o(D.Item,{label:n.title,name:"content",rules:[{required:!0}],children:o(me,{fluid:"true",placeholder:n.title})})}),o(k,{span:"12",children:o(D.Item,{dependencies:["endTime"],rules:[{required:!0},({getFieldValue:s})=>({validator(l,d){return d&&s("endTime")&&y(d).startOf("day").isAfter(s("endTime"))?Promise.reject(n.day_off_start_time_must_be_less_than_or_equal_to_day_off_end_time):Promise.resolve()}})],label:n.start_time_day_off,name:"startTime",children:o(P,{fluid:"true",placeholder:"DD/MM/YYYY",format:"DD/MM/YYYY",allowClear:!1})})}),o(k,{span:"12",children:o(D.Item,{dependencies:["startTime"],rules:[{required:!0},({getFieldValue:s})=>({validator(l,d){const c=s("startTime");return c&&d&&y(d).isBefore(c,"days")?Promise.reject(n.day_off_start_time_must_be_less_than_or_equal_to_day_off_end_time):Promise.resolve()}})],label:n.end_time_day_off,name:"endTime",children:o(P,{fluid:"true",placeholder:"DD/MM/YYYY",format:"DD/MM/YYYY",allowClear:!1})})})]})})})},gt=()=>{const{modalAddDayOff:t,modalUpdateDayOff:a,filter:e}=p.useContext(W),{setTitlePage:r}=p.useContext(q),{changeDataTableWorkTime:i,changeDataTableDayOff:s}=C();return p.useEffect(()=>(r(n.configs_work_schedules),(async()=>await i())(),()=>{r("")}),[]),p.useEffect(()=>((async()=>await s(e))(),()=>{}),[]),{isShowModalAddDayOff:t.isShow,isShowModalUpdateDayOff:a.isShow}},_t=()=>{const{isShowModalAddDayOff:t,isShowModalUpdateDayOff:a}=gt();return v(w.Wrapper,{children:[v(I,{gutter:[8,8],css:e=>({marginTop:e.margin.sm}),children:[o(k,{span:12,children:v(w.Container,{children:[o(se.Header,{css:e=>({fontWeight:e.fontWeight.bold,fontSize:"22px",color:e.textColor,padding:"7px 10px"}),borderBottom:!0,children:n.work_schedule}),o(w.Content,{children:o(at,{})})]})}),o(k,{span:12,children:v(w.Container,{children:[o(se.Header,{css:e=>({fontWeight:e.fontWeight.bold,fontSize:"22px",color:e.textColor,padding:"7px 10px"}),children:n.day_off}),o(lt,{}),o(w.Header,{children:o(dt,{})}),o(w.Content,{children:o(rt,{})})]})})]}),t?o(ut,{}):null,a?o(yt,{}):null]})},ta=()=>o(Pe,{children:o(_t,{})});export{ta as default};