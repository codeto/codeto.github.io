import{i as o,A as a,M as t,u as i,j as c,b as y}from"./index-c2ded735.js";const n=`${c}/user`,d=`${n}/register`,u=`${n}/login`,l=`${n}/forgot-password`,P=`${n}/set-new-password`,p=`${n}/profile`,S=`${c}/user/logout`,T=`${n}/change-password`,w=`${n}/cipms/verify-account-by-token`,O=`${n}/agree-policy`,U=async()=>new Promise(s=>{grecaptcha.ready(()=>{grecaptcha.execute(y,{action:"submit"}).then(r=>{s(r)})})});async function g(e){return await o({type:a,payload:{apiUrl:d,body:e,method:t.POST}})}async function m(e){const s=await U();return await o({type:a,payload:{apiUrl:u,body:e,method:t.POST,options:{headers:{"X-CAPTCHA-TOKEN":s}}}})}async function E(e){return await o({type:a,payload:{apiUrl:S,body:e,method:t.POST}})}async function h(e){return await o({type:a,payload:{apiUrl:l,body:{email:e},method:t.POST}})}async function A(e,s){return await o({type:a,payload:{apiUrl:P,body:{accessToken:e,password:s},method:t.PUT}})}async function v(e){return await o({type:a,payload:{apiUrl:T,body:{...e},method:t.PUT}})}async function _(){const e=await i.getUser();return await o({type:a,payload:{apiUrl:w,body:{token:(e==null?void 0:e.access_token)??void 0},method:t.POST}})}const b=async e=>await o({type:a,payload:{apiUrl:p,body:{...e},method:t.PUT}}),R=async()=>await o({type:a,payload:{apiUrl:p,method:t.GET}});async function $(){return await o({type:a,payload:{apiUrl:O,method:t.PUT}})}export{m as a,v as b,$ as c,h as f,R as g,E as l,g as r,A as s,b as u,_ as v};