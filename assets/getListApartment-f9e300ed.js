import{dk as A,a9 as r,s as L}from"./index-c2ded735.js";const u=o=>({id:o==null?void 0:o.id,name:(o==null?void 0:o.name)??""}),T=async({idBuilding:o,filter:d={},page:s=r,limit:a=L})=>{try{const{name:c=""}=d,{code:e,codeLanguage:t,data:i,totalRecord:n}=await A({filter:{name:c||void 0},idBuilding:o,limit:a,page:s});return{code:e,codeLanguage:t,data:i.map(g=>u(g)),totalRecord:n}}catch({code:c,codeLanguage:e}){return{code:c,codeLanguage:e,data:[]}}};export{T as g};
