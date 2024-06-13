import{i as o,A as p,M as n,X as c,eQ as h,j as C,eR as $,eS as O,e4 as b,eT as u}from"./index-c2ded735.js";const L=`${h}/payment-service/v1/payment-methods/web`,N=`${h}/payment-service/v1/payment-orders/unitgroup-service/vnpay-smart-spos`,j=async({idBuilding:e})=>await o({type:p,payload:{apiUrl:L,method:n.GET,options:{headers:{[c]:e}}}}),w=async({unitId:e,idBuilding:s,bills:t,payerId:a,paymentMethodId:r})=>await o({type:p,payload:{apiUrl:N,body:{cyhomeBillIds:t,residentId:a,paymentMethodId:r,unitId:e},method:n.POST,options:{headers:{[c]:s}}}}),D=`${u}/bills-service/v1`,Y=`${u}/bills-service/v2`,G=`${Y}/payment/offline`,f=`${D}/payment/offline-multi-unit`,i=`${C}/receipt`,V=`${i}/manual`,g=e=>`${i}/${e}`,B=`${i}/list`,x=i,W=`${i}/export-data`,X=i,H=`${i}/sum-payment`,F=async(e,s)=>{const{debtBillId:t,bills:a,paymentMethod:r,address:d,actuallyPaid:y,payer:l,payerId:E,paymentMethodId:T,cashier:m,labelId:_,fundId:S,unitId:I,serviceId:R,createdAt:A,isPaymentToUnitAccount:v,isPaymentUsingUnitAccount:U,voucherDay:M}=s;let P=null;return[$,O].includes(r)?P=await w({unitId:I,idBuilding:e,payerId:E,bills:a,paymentMethodId:T}):P=await o({type:p,payload:{apiUrl:G,body:{debtBillId:t,bills:a,paymentMethod:r,address:d,actuallyPaid:y,payer:l,cashier:m,labelId:_,fundId:S,unitId:I,createdAt:A,isPaymentToUnitAccount:v,isPaymentUsingUnitAccount:U,voucherDay:M,serviceId:R},method:n.POST,options:{headers:{[c]:e}}}}),P},k=async(e,s)=>{const{paymentMethod:t,payer:a,cashier:r,labelId:d,fundId:y,createdAt:l,voucherDay:E,unitIds:T,serviceIds:m}=s;return await o({type:p,payload:{apiUrl:f,body:{paymentMethod:t,payer:a,cashier:r,labelId:d,fundId:y,createdAt:l,voucherDay:E,unitIds:T,serviceIds:m},method:n.POST,options:{headers:{[c]:e}}}})},q=async({body:e,headers:s})=>await o({type:p,payload:{apiUrl:V,body:e,method:n.POST,options:{headers:s}}}),z=async({idBuilding:e,receipt:s})=>{const{id:t,...a}=s;return await o({type:p,payload:{apiUrl:g(t),body:{...a},method:n.PUT,options:{headers:{[c]:e}}}})},J=async({idBuilding:e,filter:s,page:t,limit:a})=>await o({type:p,payload:{apiUrl:B,method:n.GET,options:{params:{...s,page:t,limit:a},headers:{[c]:e}}}}),K=async({idBuilding:e,idReceipt:s})=>await o({type:p,payload:{apiUrl:`${x}/${s}`,method:n.GET,options:{headers:{[c]:e},bodyType:"html"}}}),Z=async({filter:e,idBuilding:s})=>await o({type:b,payload:{apiUrl:W,method:n.GET,options:{headers:{[c]:s},params:{...e}}}}),ee=async({idReceipt:e,reason:s,bills:t,isAllBill:a,idBuilding:r})=>await o({type:p,payload:{apiUrl:`${X}/${e}`,method:n.DELETE,body:{reason:s,bills:t,isAllBill:a},options:{headers:{[c]:r}}}}),se=async({idBuilding:e,filter:s})=>await o({type:p,payload:{apiUrl:H,method:n.GET,options:{params:{...s},headers:{[c]:e}}}});export{j as a,k as b,J as c,se as d,Z as e,q as f,K as g,ee as h,F as p,z as u};
