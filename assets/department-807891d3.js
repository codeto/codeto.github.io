import{i as t,A as o,M as n,X as r,j as E}from"./index-c2ded735.js";const p=`${E}/department`,c=`${p}/list`,T=p,d=e=>`${p}/${e}`,i=e=>`${p}/${e}`,m=async(e,s=!1)=>await t({type:o,payload:{apiUrl:c,method:n.GET,options:{headers:{[r]:e},params:{isIncludePermission:s}}}}),P=async(e,s)=>await t({type:o,payload:{apiUrl:T,method:n.POST,body:s,options:{headers:{[r]:e}}}}),l=async(e,s,a)=>await t({type:o,payload:{apiUrl:d(s),method:n.PUT,body:a,options:{headers:{[r]:e}}}}),A=async(e,s)=>await t({type:o,payload:{apiUrl:i(s),method:n.DELETE,options:{headers:{[r]:e}}}});export{P as a,A as d,m as g,l as u};
