import{P as o}from"./parse-6fcf23d5.js";import{gI as n,gJ as r,gK as s}from"./index-c2ded735.js";o.initialize(n,r);o.serverURL=s;o.LiveQuery.on("open",()=>{console.log("Socket connection established.")});o.LiveQuery.on("close",()=>{console.log("Socket connection closed.")});o.LiveQuery.on("error",e=>{console.log(e)});
