import{_ as d}from"./nuxt-img.deb13c0e.js";import{g as n,o as u,c as i,w as p,x as m,u as c,a as t,C as h,y as f,n as b,b as r}from"./entry.7e97c70a.js";import{u as g}from"./vue.f36acd1f.173ce3b1.js";const w={class:"w-full text-lg sm:text-xl md:text-2xl xl:text-3xl rounded-xl bg-white flex justify-between overflow-hidden drop-shadow-2xl mx-auto"},v={__name:"SearchBar",setup(x){const e=n(""),s=n(!1),l=()=>{if(!e.value)return s.value=!0;b(`/city/${e.value}/restaurant`)};return(o,a)=>(u(),i("div",w,[p(t("input",{type:"text",class:h(["py-3 px-5 w-full text-lg sm:text-xl md:text-2xl xl:text-3xl rounded-full focus:outline-none",c(s)?"border-red-500 border":""]),placeholder:"請以 A7, A8, A9, 桃園 搜尋 ...","onUpdate:modelValue":a[0]||(a[0]=_=>f(e)?e.value=_:null)},null,2),[[m,c(e)]]),t("button",{class:"bg-sky-500 px-5 text-white w-[100px]",onClick:l}," 搜尋 ")]))}},k=v,y={class:"max-w-6xl"},A=t("h1",null,"A7新林口-社區網站: 生活指引資訊平台",-1),B=t("p",null,"A7 重劃區 生活指引資訊平台",-1),j={class:"relative h-screen w-full bg-no-repeat bg-cover bg-bottom bg-[url('https://kgptltaqnkidtcqkathb.supabase.co/storage/v1/object/public/a7-images/logo/LOG-03-RestaurantBanner1.jpeg')]"},q={class:"z-10 absolute w-full h-full flex justify-center items-center"},C={class:"text-center w-5/6 md:w-4/5 xl:w-3/4"},R=t("p",{class:"text-lg sm:text-xl md:text-2xl xl:text-3xl mb-10 text-white"}," 大林口 找餐廳 ",-1),z=t("div",{class:"z-1 absolute w-full h-full bg-black opacity-30"},null,-1),$={__name:"index",setup(x){return g({title:"A7-生活指引",meta:[{name:"description",content:"A7新林口-社區網站: 生活指引資訊平台 "}]}),(e,s)=>{const l=d,o=k;return u(),i("div",y,[A,r(l,{src:"https://kgptltaqnkidtcqkathb.supabase.co/storage/v1/object/public/a7-images/logo/LOG-03-a7kanban10.png",class:"flex flex-row w-20",alt:"A7-生活指引 QRCode"}),B,t("div",j,[t("div",q,[t("div",C,[R,r(o)])]),z])])}}};export{$ as default};
