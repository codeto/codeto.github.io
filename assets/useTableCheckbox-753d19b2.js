import{j as u,a as _}from"./@emotion-63839449.js";import{r as C}from"./react-4fd50329.js";import{l as j}from"./lodash-88fe09e6.js";import{l as g,Y as B}from"./index-c2ded735.js";import{B as Q,a as L}from"./antd-f9eae174.js";const W=d=>{const{isShow:y,isSelectAll:f,totalItemSelected:b,totalItem:s,onSelectAllItemTable:w,textSelectRow:r,textSelectAllRow:R}=d,[p]=B();let A=u("div",{style:{display:"flex",flexDirection:"row",alignItems:"center"},children:u("span",{style:{fontWeight:p.fontWeightBold,verticalAlign:"middle",color:p.blackColor},children:s})});return(b>0||f)&&(A=_(L.Text,{children:[u("span",{style:{color:p.labelColor},dangerouslySetInnerHTML:{__html:f?r.replace("{totalItemSelected}",s).replace("{totalItem}",`<span
          style='font-weight: ${p.fontWeightBold}; color: #000'
        >
          ${s}
        </span>`):r.replace("{totalItemSelected}",b).replace("{totalItem}",`<span
                style='font-weight: ${p.fontWeightBold}; color: #000'
              >
                ${s}
              </span>`)}}),b>0&&u(Q,{style:{padding:"0 0 0 5px",height:0,border:0},type:"link",onClick:()=>w(y&&!f),children:s===b?"":y&&!f&&R.replace("{totalItem}",s)||g.deselect_all_rows})]})),A};function Y(d){const{dataRows:y,rowKey:f,totalRows:b}=d,[s,w]=C.useState({isSelectAllItem:!1,isShowQuestionSelectAll:!1,selectedRowsCache:[],selectedRowKeysCache:[],selectedRowKeys:[],byId:{}}),[r,R]=C.useState({}),[p,A]=C.useState({}),x=(e,i="key",h={})=>{const c={},n=h;e.forEach(m=>{const t=[];t.push(m),n[m[i]]=m;let S;for(;t.length;)if(S=t.pop(),!S.children)c[S[i]]=[...t.map(l=>l[i])];else{const l=j.find(S.children,a=>!c[a[i]]);l?(t.push(S),t.push(l),n[S[i]]=S,n[l[i]]=l):t.pop()}});const o={};return Object.keys(c).forEach(m=>{c[m].forEach(t=>{o[t]||(o[t]=[]),o[t].push(m)})}),[c,o,n]},O=e=>!!r[e.key],I=e=>Object.keys(e).map(i=>isNaN(i)?i:Number(i)).filter(Boolean);C.useEffect(()=>{const e=s.selectedRowKeys,[i,h,c]=x(y,f,s.byId),n={},o={};[...s.selectedRowKeysCache].forEach(t=>{o[t]||(o[t]=t)}),y.forEach(t=>{var S,l;s.isSelectAllItem||(o[t[f]]&&(n[t[f]]=t[f],(S=h==null?void 0:h[t==null?void 0:t[f]])==null||S.forEach(a=>{n[a]=a})),Object.keys(n).length!==e.length&&e.forEach(a=>{c[a]&&(n[a]=a)})),s.isSelectAllItem&&(n[t[f]]=t[f],o[t[f]]=t[f],(l=h==null?void 0:h[t==null?void 0:t[f]])==null||l.forEach(a=>{n[a]=a,o[a]=a}))});const m=Object.keys(o).map(t=>c[t]).filter(Boolean);R(i),A(h),w({...s,byId:c,selectedRowsCache:m,selectedRowKeysCache:I({...o}),selectedRowKeys:I({...n})})},[y,f,s.byId,s.isSelectAllItem]);const T=()=>{w({isSelectAllItem:!1,isShowQuestionSelectAll:!1,selectedRowsCache:[],selectedRowKeysCache:[],selectedRowKeys:[],byId:s.byId??{}})},k=(e,i)=>{var m,t,S;const h=O(e),c={},n={};[...s.selectedRowKeys].forEach(l=>{c[l]||(c[l]=l)}),[...s.selectedRowKeysCache].forEach(l=>{n[l]||(n[l]=l)}),i&&(c[e.key]=e.key,n[e.key]=e.key,h&&((m=r==null?void 0:r[e==null?void 0:e.key])==null||m.forEach(l=>{const a=p[l],E=j.intersection(I(c),a);a.length&&E.length&&E.length===a.length&&(c[l]=l,n[l]=l)})),h||p[e.key].forEach(a=>{c[a]=a,n[a]=a})),i||(delete c[e.key],delete n[e.key],h&&((t=r==null?void 0:r[e==null?void 0:e.key])==null||t.forEach(l=>{delete c[l],delete n[l]})),h||(S=p==null?void 0:p[e==null?void 0:e.key])==null||S.forEach(l=>{delete c[l],delete n[l]}));const o=Object.keys(n).map(l=>s.byId[l]).filter(Boolean);w({...s,isSelectAllItem:!1,isShowQuestionSelectAll:!1,selectedRowsCache:o,selectedRowKeysCache:I({...n}),selectedRowKeys:I({...c})})},D=(e,i)=>{const h=i.filter(Boolean).map(o=>o[f]),c={};[...s.selectedRowKeysCache].forEach(o=>{c[o]||(c[o]=o)}),e&&h.forEach(o=>{c[o]=o}),e||s.selectedRowKeys.forEach(o=>{delete c[o]});const n=Object.keys(c).map(o=>s.byId[o]).filter(Boolean);w({...s,isShowQuestionSelectAll:e,isSelectAllItem:!1,selectedRowsCache:n,selectedRowKeysCache:I({...c}),selectedRowKeys:h})},K=e=>{w(e?{...s,isSelectAllItem:!0}:{...s,isSelectAllItem:!1,isShowQuestionSelectAll:!1,selectedRowsCache:[],selectedRowKeysCache:[],selectedRowKeys:[]})};return[s,T,k,D,(e={})=>{const{totalItemSelected:i=s.selectedRowKeysCache.length,textSelectRow:h=g.you_selected_rows,textSelectAllRow:c=g.select_all_rows}=e;return u(W,{isShow:s.isShowQuestionSelectAll,isSelectAll:s.isSelectAllItem,totalItemSelected:i,totalItem:b,textSelectRow:h,textSelectAllRow:c,onSelectAllItemTable:K})}]}export{Y as u};