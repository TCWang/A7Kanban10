import{_ as g}from"./nuxt-img.d09dd886.js";import{o as c,c as p,a as s,u,b as i,t as l,w as h,v as d,n as v,F as b,r as _,d as f,e as x,f as k}from"./entry.820096c2.js";import{h as w,a as y,u as $}from"./index.b19d082c.js";import{s as q}from"./shops.2814a0e0.js";import"./vue.f36acd1f.6897b8d5.js";const L={class:"relative shadow border-hidden w-full lg:w-1/2 overflow-hidden mb-5 cursor-pointer h-full"},j=["src"],O={class:"p-4 flex flex-col"},C={class:"text-bold"},F={class:"mt-auto"},A=["href"],B={class:"mt-auto"},S={class:"mt-auto"},G={class:"flex flex-row space-x-4"},N=["href"],T=["href"],z=["href"],V=["href"],D={__name:"Card",props:{shop:Object,favored:Boolean},emits:["favor"],setup(e,{emit:t}){return(o,a)=>{const r=g;return c(),p("div",L,[s("img",{class:"absolute w-7 right-2 top-1 z-20",src:e.favored?u(w):u(y),alt:"",onClick:a[0]||(a[0]=n=>t("favor",e.shop.id))},null,8,j),s("div",{class:"m-2 flex flex-row md:flex-row h-full bg-zinc-100 rounded-2xl shadow-md",onClick:a[1]||(a[1]=n=>("navigateTo"in o?o.navigateTo:u(v))(`/shop/${e.shop.name}-${e.shop.id}`))},[i(r,{src:`https://kgptltaqnkidtcqkathb.supabase.co/storage/v1/object/public/a7-images/shop/${e.shop.figureLogo}`,alt:"",class:"w-[150px] md:w-[200px] h-[150px] md:h-[200px] rounded-xl transform hover:scale-110 duration-200"},null,8,["src"]),s("div",O,[s("div",null,[s("p",C,l(e.shop.type)+" - "+l(e.shop.name),1),s("p",F,[s("a",{href:e.shop.google},l(e.shop.address),9,A)]),s("p",B,"電話: "+l(e.shop.telphone),1),h(s("p",{class:"mt-auto"},"郵箱: "+l(e.shop.email),513),[[d,e.shop.email]]),s("p",S,"營業: "+l(e.shop.hours),1)]),s("div",G,[h(s("a",{href:e.shop.web},[i(r,{class:"h-12 hover:scale-150",src:"https://kgptltaqnkidtcqkathb.supabase.co/storage/v1/object/public/a7-images/logo/LOG-01-Web.jpeg"})],8,N),[[d,e.shop.web]]),h(s("a",{href:e.shop.facebook},[i(r,{class:"h-12 hover:scale-150",src:`https://kgptltaqnkidtcqkathb.supabase.co/storage/v1/object/public/a7-images/logo/LOG-01-Facebook.png
            `})],8,T),[[d,e.shop.facebook]]),h(s("a",{href:e.shop.line},[i(r,{class:"h-12 hover:scale-150",src:"https://kgptltaqnkidtcqkathb.supabase.co/storage/v1/object/public/a7-images/logo/LOG-01-Line.png"})],8,z),[[d,e.shop.line]]),h(s("a",{href:e.shop.ig},[i(r,{class:"h-12 hover:scale-150",src:"https://kgptltaqnkidtcqkathb.supabase.co/storage/v1/object/public/a7-images/logo/LOG-01-Ig.png"})],8,V),[[d,e.shop.ig]])])])])])}}},I=D,E={class:""},R=s("h2",null,"A7重劃區 商店匯總",-1),W=s("p",null,[s("span",{class:"text-red-600"},"可點選照片進入商店詳細介紹"),x(", 請選擇查詢區域及使用下拉選單選擇餐廳種類。 商店依據地址排序, 目前只提供 A7重劃區 的商店黃頁。 ")],-1),H={class:"flex flex-col lg:flex-row flex-wrap"},J={__name:"Cards",props:{shops:Array},setup(e){const t=$("favorite",{}),o=a=>{a in t.value?delete t.value[a]:t.value={...t.value,[a]:!0}};return(a,r)=>{const n=I;return c(),p("div",E,[R,W,s("div",H,[(c(!0),p(b,null,_(e.shops,m=>(c(),f(n,{key:m.id,shop:m,onFavor:o,favored:m.id in u(t)},null,8,["shop","favored"]))),128))])])}}},K=J,M={key:1,class:"text-red-600"},Z={__name:"[[typec]]",setup(e){const t=k(),o={filtered:[...q].filter(a=>t.params.area==="0.A7重劃區"&&(t.params.typec==="所有"||t.params.typec==="")?!0:t.params.area==="0.A7重劃區"?a.type===t.params.typec:t.params.typec==="所有"||t.params.typec===""?a.category===t.params.area:a.category===t.params.area&&a.type===t.params.typec)};return(a,r)=>{const n=K;return c(),p("div",null,[o.filtered.length?(c(),f(n,{key:0,shops:o.filtered},null,8,["shops"])):(c(),p("h1",M,"沒有商店符合搜尋條件"))])}}};export{Z as default};