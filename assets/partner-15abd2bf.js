import{i as n,A as c,M as r,X as a,j as i,ea as E,e4 as T}from"./index-c2ded735.js";const p=`${i}/partner`,y=`${p}/list`,_=p,R=e=>`${p}/${e}`,A=e=>`${p}/${e}`,l=`${p}/import-data`,h=`${p}/export-data`,S=async({idBuilding:e,filter:s,page:o,limit:t})=>{const P={[a]:e},d={...s,page:o,limit:t};return n({type:c,payload:{apiUrl:y,method:r.GET,options:{params:d,headers:P}}})},U=async(e,s)=>{const o={[a]:e};return n({type:c,payload:{apiUrl:_,body:{...s},method:r.POST,options:{headers:o}}})},u=async(e,s,o)=>{const t={[a]:e};return n({type:c,payload:{apiUrl:R(s),body:{...o},method:r.PUT,options:{headers:t}}})},D=async(e,s)=>{const o={[a]:e};return n({type:c,payload:{apiUrl:A(s),method:r.DELETE,options:{headers:o}}})};async function L(e,s){const o={[a]:e};return n({type:E,payload:{apiUrl:l,method:r.POST,file:s,options:{headers:o}}})}const N=async(e,s)=>{const o={[a]:e},t={...s};return n({type:T,payload:{apiUrl:h,method:r.GET,options:{headers:o,params:t}}})};export{U as a,D as d,N as e,S as g,L as i,u};