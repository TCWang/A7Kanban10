import{_ as b}from"./nuxt-img.34e23424.js";import{o as u,c as h,a as e,u as g,b as o,t as d,w as c,v as l,n as v,F as p,r as k,d as m,e as x,f as _}from"./entry.b6e35432.js";import{h as w,a as q,u as y}from"./index.856bf738.js";import{r as $}from"./restaurants.307b827d.js";import"./vue.f36acd1f.2834f46c.js";const j={class:"relative shadow border-hidden w-full lg:w-1/2 overflow-hidden mb-5 cursor-pointer h-[220px] md:h-[220px]"},L=["src"],O={class:"p-4 flex flex-col"},C={class:"text-bold"},G={class:"mt-auto"},F=["href"],B={class:"mt-auto"},A={class:"mt-auto"},N={class:"flex flex-row space-x-4"},T=["href"],z=["href"],R=["href"],S=["href"],V=["href"],D=["href"],I=["href"],E={__name:"Card",props:{restaurant:Object,favored:Boolean},emits:["favor"],setup(t,{emit:s}){return(n,a)=>{const r=b;return u(),h("div",j,[e("img",{class:"absolute w-7 right-2 top-1 z-20",src:t.favored?g(w):g(q),alt:"",onClick:a[0]||(a[0]=i=>s("favor",t.restaurant.id))},null,8,L),e("div",{class:"flex flex-row md:flex-row h-full bg-zinc-100 rounded-2xl shadow-md",onClick:a[1]||(a[1]=i=>("navigateTo"in n?n.navigateTo:g(v))(`/restaurant/${t.restaurant.name}-${t.restaurant.id}`))},[o(r,{src:`https://kgptltaqnkidtcqkathb.supabase.co/storage/v1/object/public/a7-images/restaurant/${t.restaurant.figureLogo}`,alt:"",class:"w-[150px] sm:w-[200px] md:w-[250px] lg:w-[300px] h-[150px] sm:h-full rounded-xl transform hover:scale-110 duration-200"},null,8,["src"]),e("div",O,[e("div",null,[e("p",C,d(t.restaurant.type)+" - "+d(t.restaurant.name),1),e("p",G,[e("a",{href:t.restaurant.google},d(t.restaurant.address),9,F)]),e("p",B,"電話; "+d(t.restaurant.telphone),1),e("p",A,"營業: "+d(t.restaurant.hours),1)]),e("div",N,[c(e("a",{href:t.restaurant.web},[o(r,{class:"h-12 hover:scale-150",src:"https://kgptltaqnkidtcqkathb.supabase.co/storage/v1/object/public/a7-images/logo/LOG-01-Web.jpeg"})],8,T),[[l,t.restaurant.web]]),c(e("a",{href:t.restaurant.facebook},[o(r,{class:"h-12 hover:scale-150",src:`https://kgptltaqnkidtcqkathb.supabase.co/storage/v1/object/public/a7-images/logo/LOG-01-Facebook.png
            `})],8,z),[[l,t.restaurant.facebook]]),c(e("a",{href:t.restaurant.line},[o(r,{class:"h-12 hover:scale-150",src:"https://kgptltaqnkidtcqkathb.supabase.co/storage/v1/object/public/a7-images/logo/LOG-01-Line.png"})],8,R),[[l,t.restaurant.line]]),c(e("a",{href:t.restaurant.ig},[o(r,{class:"h-12 hover:scale-150",src:"https://kgptltaqnkidtcqkathb.supabase.co/storage/v1/object/public/a7-images/logo/LOG-01-Ig.png"})],8,S),[[l,t.restaurant.ig]]),c(e("a",{href:t.restaurant.uber},[o(r,{class:"h-12 hover:scale-150",src:"https://kgptltaqnkidtcqkathb.supabase.co/storage/v1/object/public/a7-images/logo/LOG-01-Uber.jpeg"})],8,V),[[l,t.restaurant.uber]]),c(e("a",{href:t.restaurant.panda},[o(r,{class:"h-12 hover:scale-150",src:"https://kgptltaqnkidtcqkathb.supabase.co/storage/v1/object/public/a7-images/logo/LOG-01-Panda.png"})],8,D),[[l,t.restaurant.panda]]),c(e("a",{href:t.restaurant.menu},[o(r,{class:"h-12 hover:scale-150",src:"https://kgptltaqnkidtcqkathb.supabase.co/storage/v1/object/public/a7-images/logo/LOG-01-Menu.jpeg"})],8,I),[[l,t.restaurant.menu]])])])])])}}},M=E,P={class:""},U=e("h2",null,"餐廳推薦",-1),W=e("p",null,[e("span",{class:"text-red-600"},"可點選照片進入餐廳詳細介紹"),x(", 請輸入查詢區域 (A7, A8, A9, 桃園)及使用下拉選單選擇餐廳種類。 餐廳依據地址排序 ")],-1),H={class:"flex flex-col lg:flex-row flex-wrap"},J={__name:"Cards",props:{restaurants:Array},setup(t){const s=y("favorite",{}),n=a=>{a in s.value?delete s.value[a]:s.value={...s.value,[a]:!0}};return(a,r)=>{const i=M;return u(),h("div",P,[U,W,e("div",H,[(u(!0),h(p,null,k(t.restaurants,f=>(u(),m(i,{key:f.id,restaurant:f,onFavor:n,favored:f.id in g(s)},null,8,["restaurant","favored"]))),128))])])}}},K=J,Q={key:1,class:"text-red-600"},at={__name:"[[type]]",setup(t){const s=_(),n={filtered:[...$].filter(a=>s.params.type===""||s.params.type==="所有餐廳"?a.category===s.params.city:a.category===s.params.city&&a.type===s.params.type).sort((a,r)=>a.address.localeCompare(r.address))};return(a,r)=>{const i=K;return u(),h("div",null,[n.filtered.length?(u(),m(i,{key:0,restaurants:n.filtered},null,8,["restaurants"])):(u(),h("h1",Q,"沒有餐廳符合搜尋條件"))])}}};export{at as default};
