import{i as n,A as t,M as d,X as E,j as h,cJ as S,cK as l,d8 as f,d9 as v,d7 as Y,g as I,da as M}from"./index-c2ded735.js";import"./lodash-88fe09e6.js";import{h as U}from"./moment-a468e1f9.js";import"./file-saver-40cf32a9.js";const P=`${h}/utility-service/pms/v1/utility-group`,R=`${h}/utility-service/pms/v1/utility`,D=`${P}`,O=a=>`${P}/${a}`,g=`${P}`,$=a=>`${P}/${a}`,F=`${R}`,L=a=>`${R}/${a}`;async function H({idBuilding:a,filter:e,page:s,limit:o}){return await n({type:t,payload:{apiUrl:D,method:d.GET,options:{params:{...e,page:s,limit:o},headers:{[E]:a}}}})}async function X(a,e){return await n({type:t,payload:{apiUrl:g,method:d.POST,body:{...a},options:{headers:{[E]:e}}}})}async function j(a,e,s){return await n({type:t,payload:{apiUrl:$(a),method:d.PUT,body:{...e},options:{headers:{[E]:s}}}})}async function J(a,e){return await n({type:t,payload:{apiUrl:O(a),method:d.GET,options:{headers:{[E]:e}}}})}async function K(a,e){return await n({type:t,payload:{apiUrl:F,method:d.POST,body:{...a},options:{headers:{[E]:e}}}})}async function W(a,e,s){return await n({type:t,payload:{apiUrl:L(a),method:d.PUT,body:{...e},options:{headers:{[E]:s}}}})}const b=(a,e)=>e===S?[{name:"",price:Number(a.amenitiesPeriodTimePrice)}]:e===l?a.amenitiesFormulas.map((o,c)=>{var A,T,_;return{name:"",price:Number(o.amenitiesFormulaPrice),from:Number(((_=(T=(A=a==null?void 0:a.amenitiesFormulas)==null?void 0:A[c-1])==null?void 0:T.amenitiesFormula)==null?void 0:_.to)??0),to:c!==a.amenitiesFormulas.length-1?Number(o.amenitiesFormula.to):null}}):[],m=a=>a===S?f:a===l?v:"",w=a=>{let{periodTimeServes:e}=a;return(!Array.isArray(e)||!e.length)&&(e=[{startTime:700,endTime:2300,dayInWeek:Y,formulaType:m(a.type),formulas:b(a.type)}]),{...a,periodTimeServes:e,name:a.name[I()]||a.name.en||a.name.vi}},q=a=>{var e,s,o,c,A,T,_,N,p;return{...a,id:a==null?void 0:a.id,key:a==null?void 0:a.id,amenitiesGroupLogo:a.coverPhoto,amenitiesGroupName:((e=a==null?void 0:a.name)==null?void 0:e[I()])??((s=a==null?void 0:a.name)==null?void 0:s.en)??((o=a==null?void 0:a.name)==null?void 0:o.vi),amenitiesGroupType:M[a.type],amenitiesGroupViewAppear:a.priorityInApp,amenitiesGroupStatus:a.status,name:((c=a==null?void 0:a.name)==null?void 0:c[I()])??((A=a==null?void 0:a.name)==null?void 0:A.en)??((T=a==null?void 0:a.name)==null?void 0:T.vi),children:(_=a==null?void 0:a.utilities)==null?void 0:_.sort((r,y)=>U(r.createdAt).isBefore(y.createdAt)?-1:0).map(r=>({id:r==null?void 0:r.id,key:`${a==null?void 0:a.id}-${r==null?void 0:r.id}`,amenitiesGroupLogo:"",amenitiesGroupName:r.name[I()]||r.name.en||r.name.vi,amenitiesGroupType:M[r.type],amenitiesGroupViewAppear:"",amenitiesGroupStatus:r.status,relationship:"CHILDREN"})),amenities:((p=(N=a==null?void 0:a.utilities)==null?void 0:N.map(r=>w(r)))==null?void 0:p.sort((r,y)=>U(r.createdAt).isBefore(y.createdAt)?-1:0))??[]}};export{J as a,X as b,q as c,m as d,b as e,K as f,H as g,w as h,W as i,j as u};