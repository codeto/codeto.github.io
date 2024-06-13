import{r as l,R as d}from"./react-4fd50329.js";import{S as p,l as e,b5 as m,B as g}from"./index-c2ded735.js";import{n as s,F as u}from"./antd-f9eae174.js";import"./react-redux-896b353b.js";import"./lodash-88fe09e6.js";import"./moment-a468e1f9.js";import"./file-saver-40cf32a9.js";import"./@firebase-43527ee1.js";import{c as f,j as c}from"./@emotion-63839449.js";const j=(t,n,r,i=()=>{},o=()=>{})=>{l.useEffect(()=>{t&&(p.includes(t)&&!n?(r&&s.success(r),i()):(s.error({message:e.label.error,description:m[n]||m.FAIL}),o()))},[t])},b=t=>f(t,{target:"esdcg8f0"})({name:"1gkc5ui",styles:"& .ant-form-item-label{>label{height:auto;font-weight:500;}}& .ant-form-item-explain{font-size:11px;margin-top:0;}"}),a="'${name}' is not a valid ${type}",$={default:"Validation error on field '${name}'",required:e.status.data_require,enum:"'${name}' must be one of [${enum}]",whitespace:e.validate.space,date:{format:"'${name}' is invalid for format date",parse:"'${name}' could not be parsed as date",invalid:"'${name}' is invalid date"},types:{string:a,method:a,array:a,object:a,number:e.validate.types.number,date:a,boolean:a,integer:e.validate.types.integer,float:a,regexp:a,email:e.validate.types.email,url:e.validate.types.url,hex:a},string:{len:e.validate.string.len,min:e.validate.string.min,max:e.validate.string.max,range:e.validate.string.range},number:{len:e.validate.number.len,min:e.validate.number.min,max:e.validate.number.max,range:e.validate.number.range},array:{len:"'${name}' must be exactly ${len} in length",min:"'${name}' cannot be less than ${min} in length",max:"'${name}' cannot be greater than ${max} in length",range:"'${name}' must be between ${min} and ${max} in length"},pattern:{mismatch:"'${name}' does not match pattern ${pattern}"}},v=t=>{const n=(r,i)=>c(t,{validateMessages:$,...r,ref:i});return d.forwardRef(n)},M=g(u,v,b);export{M as F,j as u,$ as v};
