import{i as a,A as n,M as t,X as i,j as p}from"./index-c2ded735.js";const r=`${p}/unit-group-config`,d=s=>`${r}/${s}`,y=async(s,e)=>await a({type:n,payload:{apiUrl:r,method:t.GET,options:{headers:{[i]:e},params:{...s}}}}),U=async(s,e)=>await a({type:n,payload:{apiUrl:r,method:t.POST,body:s,options:{headers:{[i]:e}}}}),g=async(s,e,o)=>await a({type:n,payload:{apiUrl:d(s),method:t.PUT,body:e,options:{headers:{[i]:o}}}});export{U as a,y as g,g as u};
