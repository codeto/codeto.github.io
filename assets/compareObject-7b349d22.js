const a=e=>typeof e=="object"&&e!==null&&!Array.isArray(e),i=(e,n)=>{if(e.length!==n.length)return!1;const s=new Set([...e,...n]);for(const o of s){const c=e.filter(r=>r===o).length,t=n.filter(r=>r===o).length;if(c!==t)return!1}return!0},u=(e,n)=>{const s=Object.keys(e),o=Object.keys(n);if(s.length!==o.length)return!1;for(const c of s){const t=e[c],r=n[c];if(Array.isArray(t)&&Array.isArray(r)){if(!i(t,r))return!1;continue}if(a(t)&&a(r)){if(!u(t,r))return!1;continue}if(t!==r)return!1}return!0};export{u as c};