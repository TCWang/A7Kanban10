import{m as d,q as p,s as e,d as x,r as m,I as f,l as h,H as v,v as _,x as i,t as b,J as w}from"./entry.c0ad3eb7.js";import{u as y}from"./vue.f36acd1f.72bde740.js";const k={class:"shadow border w-64 mr-10 z-30 h-[230px]"},B=e("div",{class:"p-5 flex justify-between relative cursor-pointer border-b"},[e("h3",null,"地區")],-1),$=e("div",{class:"p-5 flex justify-between relative cursor-pointer border-b"},[e("h3",null,"種類")],-1),g=e("div",{class:"p-5 flex justify-between relative cursor-pointer border-b"},[e("h3",null,"價格")],-1),C=[B,$,g],N={__name:"SideBar",setup(a){return(t,c)=>(d(),p("div",k,C))}},S=N,E=x({emits:{error(a){return!0}},setup(a,{slots:t,emit:c}){const n=m(null),s=h();f((r,o,l)=>{if(!s.isHydrating)return c("error",r),s.hooks.callHook("vue:error",r,o,l),n.value=r,!1});function u(){n.value=null}return()=>{var r,o;return n.value?(r=t.error)==null?void 0:r.call(t,{error:n,clearError:u}):(o=t.default)==null?void 0:o.call(t)}}}),H={class:"mt-2 flex flex-col md:flex-row"},j={class:"text-center mx-auto flex flex-col"},A=e("h1",{class:"text-5xl text-red-600 mb-4"},"Sorry Something went wrong",-1),R=["onClick"],z={__name:"restaurant",setup(a){const t=v();return y({title:`生活指引-${t.params.city} 的餐廳`}),(c,n)=>{const s=S,u=w,r=E;return d(),p("div",H,[_(r,null,{error:i(({error:o})=>[e("div",j,[A,e("code",null,b(o),1),e("button",{class:"text-white bg-blue-400 px-10 py-3 rounded mt-4",onClick:l=>o.value=null}," Go Back ",8,R)])]),default:i(()=>[_(s),_(u)]),_:1})])}}};export{z as default};
