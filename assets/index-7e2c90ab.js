import{u as me,a as p,j as e,b as I,F as Me}from"./@emotion-63839449.js";import{r as E}from"./react-4fd50329.js";import"./lodash-88fe09e6.js";import{h as m}from"./moment-a468e1f9.js";import{I as pe,l as r,G as Ye,dy as je,H as ie,dz as R,h as b,dA as qe,dB as Le,F as he,dx as $e,dC as ze,dD as He,Y as We,E as Ve}from"./index-c2ded735.js";import{b as ue,D as u,l as s,u as Ge,d as te,e as ae}from"./index-b17d22e5.js";import"./file-saver-40cf32a9.js";import{P as i}from"./prop-types-1172f4d5.js";import{B as w}from"./index-881eef42.js";import{F as t}from"./index-687ba9e6.js";import{a as oe,u as fe}from"./react-redux-896b353b.js";import"./@firebase-43527ee1.js";import{I as l,S as U}from"./index-43183512.js";import{R as ge,b as a,f as le,S as Je,y as Ke,B as de}from"./antd-f9eae174.js";import{s as se,r as Qe}from"./residentForm.actions-733a7807.js";var Xe={name:"fhxb3m",styles:"display:flex;flex-direction:row;align-items:center"};const Ze=()=>{const c=me();return p("div",{children:[p("div",{css:Xe,children:[e(pe,{name:"icon-dynamic-feed-outlined",css:I({fontSize:c.iconSize,marginRight:c.margin.xs,color:c.color.primary},"","")}),e(ue,{css:I({color:c.color.primary,fontWeight:c.fontWeight.bold},"",""),children:r.other_information})]}),e("div",{children:p(ge,{gutter:[c.margin.sm,0],children:[e(a,{span:12,children:e(t.Item,{name:"occupation",label:r.occupation,children:e(l,{placeholder:r.occupation})})}),e(a,{span:12,children:e(t.Item,{name:"nationality",label:r.nationality,children:e(l,{placeholder:r.nationality})})}),e(a,{span:12,children:e(t.Item,{name:"company",label:r.company,children:e(l,{placeholder:r.company})})}),e(a,{span:12,children:e(t.Item,{name:"taxCode",label:r.tax_code,children:e(l,{placeholder:r.tax_code})})}),e(a,{span:12,children:e(t.Item,{name:"visa",label:r.visa,children:e(l,{placeholder:r.visa})})}),e(a,{span:12,children:e(t.Item,{name:"visaExpiredDay",label:r.issue_date_of_visa,children:e(u,{fluid:"true",format:s,placeholder:s})})}),e(a,{span:12,children:e(t.Item,{name:"addedToFamilyRegisterDay",label:r.entry_date_of_registration,children:e(u,{fluid:"true",format:s,placeholder:s})})}),e(a,{span:12,children:e(t.Item,{name:"temporaryRegistrationNumber",label:r.temporary_residence_card_no,children:e(l,{placeholder:r.temporary_residence_card_no})})}),e(a,{span:12,children:e(t.Item,{name:"temporaryRegistrationDate",label:r.registration_date_of_temporary_residence,dependencies:["temporaryRegistrationEnd"],rules:[({getFieldValue:f})=>({validator(N,_){return!_||!f("temporaryRegistrationEnd")||m(_).isSameOrBefore(m(f("temporaryRegistrationEnd")))?Promise.resolve():Promise.reject(r.registration_date_invalid)}})],children:e(u,{fluid:"true",format:s,placeholder:s})})}),e(a,{span:12,children:e(t.Item,{name:"temporaryRegistrationEnd",label:r.expiration_date_of_temporary_residence,children:e(u,{fluid:"true",format:s,placeholder:s})})}),e(a,{span:12,children:e(t.Item,{name:"relationship",label:r.relationship,children:e(l,{placeholder:r.relationship})})}),e(a,{span:12,children:e(t.Item,{name:"note",label:r.note,children:e(l,{placeholder:r.note})})})]})})]})},{Option:ce}=U;var er={name:"fhxb3m",styles:"display:flex;flex-direction:row;align-items:center"};const B=c=>{const{unitId:f,unitName:N,isShowRentDetail:_}=c,h=me(),[v]=[oe(o=>o.residentForm.units),oe(o=>o.residentForm.countryCodes)],F=fe(),{currentBuilding:x}=Ge(),[C,g]=E.useState({isFetching:!1}),P=te(o=>{g({isFetching:!0}),F(se({idBuilding:x.id,filter:{name:o},refreshState:()=>{g({isFetching:!1})}}))});E.useEffect(()=>{g({isFetching:!0}),F(se({idBuilding:x.id,filter:{name:N},refreshState:()=>{g({isFetching:!1})}}))},[N]);const T=E.useMemo(()=>!!f,[f]);return p("div",{css:I({marginBottom:h.margin.xs},"",""),children:[p("div",{css:er,children:[e(pe,{name:"icon-info-circle-filled",css:I({fontSize:h.iconSize,marginRight:h.margin.xs,color:h.color.primary},"","")}),e(ue,{css:I({color:h.color.primary,fontWeight:h.fontWeight.bold},"",""),children:r.general_information})]}),e("div",{children:p(ge,{gutter:[h.padding.sm,0],children:[e(a,{span:12,children:e(t.Item,{name:"fullName",label:r.full_name,rules:[{required:!0}],children:e(l,{placeholder:r.full_name})})}),e(a,{span:12,children:e(t.Item,{name:"gender",label:r.gender,rules:[{required:!0}],children:e(le.Group,{children:Ye.map(o=>e(le,{value:o.id,children:o.name},o.id))})})}),e(a,{span:12,children:e(t.Item,{name:"birthday",label:r.birthday,children:e(u,{fluid:"true",format:s,placeholder:s})})}),e(a,{span:12,children:e(t.Item,{name:"identifier",label:r.id_card_or_pass_port,children:e(l,{placeholder:r.id_card_or_pass_port})})}),e(a,{span:12,children:e(t.Item,{name:"unitId",label:r.unit,rules:[{required:!0}],children:e(U,{disabled:T,allowClear:!0,showSearch:!0,placeholder:r.select_apartment,filterOption:!1,loading:C.isFetching,onSearch:te(P),style:{width:"100%"},dropdownRender:o=>C.isFetching?e("div",{style:{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"},children:e(Je,{})}):o,children:v.map(({id:o,name:d})=>e(ce,{value:o,children:d},o))})})}),e(a,{span:12,children:e(t.Item,{name:"role",label:r.role,rules:[{required:!0}],children:e(U,{fluid:"true",placeholder:r.select_role,children:je.map(o=>e(ce,{value:o.id,children:o.name},o.id))})})}),e(a,{span:12,children:e(t.Item,{name:"idPlace",label:r.issue_at,children:e(l,{placeholder:r.issue_at})})}),e(a,{span:12,children:e(t.Item,{name:"idDate",label:r.issue_date,children:e(u,{fluid:"true",format:s,placeholder:s})})}),e(a,{span:12,children:e(t.Item,{name:"phone",label:r.phone,rules:[{validator:async(o,d)=>{if(d&&d.phoneNumber&&!ie(d.phoneNumber))throw new Error(r.phone_invalid)}}],children:e(l.PhoneInput,{placeholder:r.phone})})}),e(a,{span:12,children:e(t.Item,{name:"phoneNotUseApp",label:r.secondary_phone,rules:[{validator:async(o,d)=>{if(d&&d.phoneNumber&&!ie(d.phoneNumber))throw new Error(r.phone_invalid)}}],children:e(l.PhoneInput,{placeholder:r.secondary_phone})})}),e(a,{span:12,children:e(t.Item,{name:"email",label:r.email,rules:[{type:"email"}],children:e(l,{placeholder:r.email})})}),e(a,{span:12,children:e(t.Item,{name:"backupEmail",label:r.label.secondary_email,rules:[{type:"email"}],children:e(l,{placeholder:r.label.secondary_email})})}),e(a,{span:24,children:e(t.Item,{name:"address",label:r.address,children:e(l,{placeholder:r.address})})}),_&&p(Me,{children:[e(a,{span:12,children:e(t.Item,{name:"rentDate",label:r.label.rent_date,dependencies:["rentDuedate"],rules:[({getFieldValue:o})=>({validator(d,S){return S&&o("rentDuedate")&&m(S).isAfter(o("rentDuedate"))?Promise.reject(r.status.rent_date_invalid):Promise.resolve()}})],children:e(u,{fluid:"true",format:"DD/MM/YYYY"})})}),e(a,{span:12,children:e(t.Item,{name:"rentDuedate",label:r.label.rent_due_date,children:e(u,{fluid:"true",format:"DD/MM/YYYY"})})})]})]})})]})};B.propTypes={unitId:i.number,unitName:i.string,isShowRentDetail:i.bool};B.defaultProps={unitId:null,unitName:"",isShowRentDetail:!1};var rr={name:"pfjone",styles:"background:white"};const k=c=>{const{isFetching:f,onClickConfirm:N,onClickCancel:_}=c,{fullName:h,birthday:v,gender:F,phone:x,phoneNotUseApp:C,phoneNotUseAppCode:g,email:P,backupEmail:T,address:o,identifier:d,idPlace:S,idDate:O,unitId:M,unitName:ye,role:Y,rentDate:j,rentDuedate:q,phoneCode:L,occupation:be,company:_e,taxCode:De,relationship:Ie,nationality:Ne,visa:Re,visaExpiredDay:$,temporaryRegistrationNumber:Ee,addedToFamilyRegisterDay:z,temporaryRegistrationDate:H,temporaryRegistrationEnd:W,landsoftId:ve,contractLandsoftId:Fe,note:xe}=c,Ce=fe(),[Se]=We(),[D]=t.useForm(),[Ae,Pe]=E.useState(Y===R);return E.useEffect(()=>()=>{Ce(Qe())},[]),e(t,{style:{display:"flex",flexDirection:"column",flex:1,height:"100%"},name:"buildingForm",scrollToFirstError:!0,layout:"vertical",onFinish:async()=>{var V,G,J,K,Q,X,Z,ee;if(D.setFieldsValue({...Ve(D.getFieldsValue(),{})}),await D.validateFields()){const n=D.getFieldsValue(),{fullName:Te}=n,y=Te.split(" "),we=y[0],Ue=y.length>1?y[y.length-1]:"",Be=y.length>2?y.reduce((re,Oe,ne)=>ne>0&&ne<y.length-1?`${re+Oe} `:re,"").trim():"",ke={...n,firstName:Ue,lastName:we,middleName:Be,phone:(V=n==null?void 0:n.phone)!=null&&V.phoneNumber?`0${(G=n==null?void 0:n.phone)==null?void 0:G.phoneNumber}`:"",phoneCode:(J=n==null?void 0:n.phone)!=null&&J.phoneNumber?(K=n==null?void 0:n.phone)==null?void 0:K.countryCode:b,phoneNotUseApp:(Q=n==null?void 0:n.phoneNotUseApp)!=null&&Q.phoneNumber?`0${(X=n==null?void 0:n.phoneNotUseApp)==null?void 0:X.phoneNumber}`:"",phoneNotUseAppCode:(Z=n==null?void 0:n.phoneNotUseApp)!=null&&Z.phoneNumber?(ee=n==null?void 0:n.phoneNotUseApp)==null?void 0:ee.countryCode:b,rentDate:n.role===R?n.rentDate:null,rentDuedate:n.role===R?n.rentDuedate:null,backupEmail:n!=null&&n.backupEmail?n==null?void 0:n.backupEmail:null,email:n!=null&&n.email?n==null?void 0:n.email:null};N(ke)}},form:D,onValuesChange:A=>{A.unitId&&D.resetFields(["role"]),A.role&&Pe(A.role===R)},initialValues:{fullName:h,birthday:v&&m(v),gender:F,prefix:b,phone:{phoneNumber:ae(x,L),countryCode:L||b},phoneNotUseApp:{phoneNumber:ae(C,g),countryCode:g||b},email:P,backupEmail:T,address:o,identifier:d,idPlace:S,idDate:O&&m(O),unitId:M,role:Y,rentDate:j&&m(j),rentDuedate:q&&m(q),occupation:be,company:_e,taxCode:De,relationship:Ie,nationality:Ne,visa:Re,visaExpiredDay:$&&m($),temporaryRegistrationNumber:Ee,addedToFamilyRegisterDay:z&&m(z),temporaryRegistrationDate:H&&m(H),temporaryRegistrationEnd:W&&m(W),landsoftId:ve,contractLandsoftId:Fe,note:xe},children:p(w,{style:{flex:1},children:[p(w.Content,{scrollY:!0,children:[e(B,{unitName:ye,unitId:M,isShowRentDetail:Ae}),e(Ze,{})]}),e(Ke,{offsetBottom:0,children:e("div",{css:rr,children:p(w.Footer,{borderTop:!0,style:{textAlign:"right"},children:[e(de,{onClick:_,css:I("margin-right:",Se.padding,";",""),children:r.label.cancel}),e(de,{htmlType:"submit",loading:f,type:"primary",children:r.label.confirm})]})})})]})})};k.propTypes={isFetching:i.bool.isRequired,onClickConfirm:i.func.isRequired,onClickCancel:i.func.isRequired,fullName:i.string,birthday:i.string,gender:i.oneOf([qe,Le,he]),phone:i.string,phoneCode:i.string,phoneNotUseApp:i.string,phoneNotUseAppCode:i.string,email:i.string,backupEmail:i.string,address:i.string,identifier:i.string,idPlace:i.string,idDate:i.string,unitId:i.number,unitName:i.string,role:i.oneOf([$e,R,ze,He]),rentDate:i.string,rentDuedate:i.string,occupation:i.string,company:i.string,taxCode:i.string,relationship:i.string,nationality:i.string,visa:i.string,visaExpiredDay:i.string,temporaryRegistrationNumber:i.string,addedToFamilyRegisterDay:i.string,temporaryRegistrationDate:i.string,temporaryRegistrationEnd:i.string,landsoftId:i.number,contractLandsoftId:i.number,note:i.string};k.defaultProps={fullName:void 0,birthday:void 0,gender:he,phone:void 0,phoneCode:b,phoneNotUseApp:void 0,phoneNotUseAppCode:b,email:void 0,backupEmail:void 0,address:void 0,identifier:void 0,idPlace:void 0,idDate:void 0,unitId:void 0,unitName:void 0,role:void 0,rentDate:void 0,rentDuedate:void 0,occupation:void 0,company:void 0,taxCode:void 0,relationship:void 0,nationality:void 0,visa:void 0,visaExpiredDay:void 0,temporaryRegistrationNumber:void 0,addedToFamilyRegisterDay:void 0,temporaryRegistrationDate:void 0,temporaryRegistrationEnd:void 0,landsoftId:void 0,contractLandsoftId:void 0,note:void 0};const _r=k;export{_r as F};