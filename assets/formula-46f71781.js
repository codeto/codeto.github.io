import{h as i}from"./moment-a468e1f9.js";import{l as e,by as E,c6 as n}from"./index-c2ded735.js";import"./lodash-88fe09e6.js";import"./file-saver-40cf32a9.js";const m="ACTIVE",D="INACTIVE";m+"",e.active,D+"",e.inactive;const t="NO_RESERVATION",T="TIME_FRAME",I="SLOT_TIME";t+"",e.amenities_type_not_pre_order,T+"",e.amenities_type_pre_order_by_period_time,I+"",e.amenities_type_pre_order_by_time;e.amenities_type_not_pre_order,e.amenities_type_pre_order_by_period_time,e.amenities_type_pre_order_by_time;const d=15,y=30,M=60;e.amenities_pre_order_time_distance_15_minute,e.amenities_pre_order_time_distance_30_minute,e.amenities_pre_order_time_distance_1_hour;const O=0,o=1,p=2,b=3,L=4,U=5,P=6;e.amenities_serve_day_monday,e.amenities_serve_day_tuesday,e.amenities_serve_day_wednesday,e.amenities_serve_day_thursday,e.amenities_serve_day_friday,e.amenities_serve_day_saturday,e.amenities_serve_day_sunday;const k="HOUR",C="DAY";e.hour,e.date;const F="CHECKOUT";e.payment_method_at_the_counter;const Y="WEEK",v="MONTH";e.one_week.toLowerCase(),e.one_month.toLowerCase();const V="REFUND",H="NO_REFUND",B=[{key:V,label:e.refundable},{key:H,label:e.not_refundable}];E(B,"key");const w="PERCENT",W="FIXED_PRICE",j=[{key:w,label:e.percent_symbol},{key:W,label:e.fixed}];E(j,"key");i(),i(),i("07:00","HH:mm"),i("23:00","HH:mm");const A="ACCEPT",a="REJECT",G="CANCEL",h="ORDER_DETAIL",s="PENDING",S="WAITING_FOR_CANCELLED",R="WAITING_FOR_COMPLETED",N="APPROVED",c="COMPLETED",l="CANCELLED",r="ALL",x=[{key:s,label:e.unconfirmed,color:"default"},{key:S,label:e.waiting_cancel,color:"yellow"},{key:R,label:e.waiting_finish,color:"default"},{key:N,label:e.confirmed,color:"green"},{key:c,label:e.finished,color:"red"},{key:l,label:e.canceled,color:"red"},{key:r,label:e.all,color:"default"}],ee=E(x,"key");s+"",e.unconfirmed,S+"",e.waiting_cancel,R+"",e.waiting_finish,N+"",e.confirmed,c+"",e.finished,l+"",e.canceled,r+"",e.all;e.accept,e.reject;const _e={code:"",name:"",unitName:"",groupName:"",orderTime:[],usageTime:[]};A+"",e.approve_amenities_order_success,e.confirm_approve_order,e.you_are_approving_order,a+"",e.reject_amenities_order_success,e.confirm_reject_order,e.you_are_rejecting_order,G+"",e.reject_amenities_order_success,e.confirm_cancel_order,e.you_are_cancelling_order;const X="UNAVAILABLE",f="AVAILABLE",q="OUT_OF_SLOTS",J=[{key:X,label:e.unavailable},{key:f,label:e.available},{key:q,label:e.out_of_slots}];E(J,"key");const K="UNPAID",u="PAID",z=[{key:K,label:e.unpaid,color:"default"},{key:u,label:e.label.paid,color:"green"}];E(z,"key");const Ee=_=>({id:_==null?void 0:_.id,name:_==null?void 0:_.name,price:Number(_==null?void 0:_.price),priceFormat:_!=null&&_.price?n(Number(_.price)):0,type:_==null?void 0:_.type}),ie=_=>({to:_==null?void 0:_.to,from:_==null?void 0:_.from,name:_==null?void 0:_.name,price:_==null?void 0:_.price,priceFormat:_!=null&&_.price?n(Number(_.price)):0});export{_e as A,X as S,r as a,s as b,ee as c,Ee as d,ie as e,h as f,q as g,f as h};
