import{F as a}from"./file-saver-40cf32a9.js";import{w as u,u as f,S as b}from"./xlsx-0fb7ed70.js";const h=o=>{const{_table:c}=b,n={},e={s:{c:1e7,r:1e7},e:{c:0,r:0}};for(let t=0;t!==o.length;t+=1)for(let s=0;s!==o[t].length;s+=1){e.s.r>t&&(e.s.r=t),e.s.c>s&&(e.s.c=s),e.e.r<t&&(e.e.r=t),e.e.c<s&&(e.e.c=s);const r={v:o[t][s]};if(r.v==null)return n;const l=f.encode_cell({c:s,r:t});typeof r.v=="number"?r.t="n":typeof r.v=="boolean"?r.t="b":r.v instanceof Date?(r.t="n",r.z=c[14]):r.t="s",n[l]=r}return e.s.c<1e7&&(n["!ref"]=f.encode_range(e)),n},p=o=>{const c=new ArrayBuffer(o.length),n=new Uint8Array(c);for(let e=0;e!==o.length;e+=1)n[e]=o.charCodeAt(e)&255;return c},m=(o,c,n,e)=>{let t=o;if(e.substr(0,4)===".xls"){const s={SheetNames:[],Sheets:{}},r=h(o);s.SheetNames.push("sheet 1"),s.Sheets["sheet 1"]=r;const l={bookType:e.substr(1,3)+(e.substr(4)||"m"),bookSST:!1,type:"binary"},i=u(s,l);t=p(i)}a.saveAs(new Blob([t],{type:`${c};UTF-8`}),`${n}.xlsx`,{autoBom:!0})};export{m as e};