import{_ as m,u as _}from"./useRestaurants.336d9247.js";import{m as c,q as u,v as a,s as e,t as i,y as k,B as o,C as r,N as h,H as p,c as x,O as v,D as b}from"./entry.c0ad3eb7.js";import{u as w}from"./vue.f36acd1f.72bde740.js";const q={class:"mt-2 flex flex-col md:flex-row"},y={class:"w-full md:w-1/2"},j={class:"mt-1"},L={class:"text-slate-500 text-lg mt-3 border-b pb-5 justify-between"},O={class:"flex-col"},G={class:""},N=["href"],$={class:""},D={class:""},B={class:"flex flex-row space-x-4"},C=["href"],H=["href"],R=["href"],V=["href"],F=["href"],I=["href"],U={class:"flex flex-row space-x-4"},z=["href"],E=e("button",{class:"bg-blue-500 hover:bg-blue-700 text-white hover:text-yellow-200 rounded-lg px-4 py-2"}," 查閱菜單 ",-1),S=[E],A=["href"],P=e("button",{class:"bg-blue-500 hover:bg-blue-700 text-white hover:text-yellow-200 rounded-lg px-4 py-2"}," 推薦 ",-1),T=[P],W=["href"],J=e("button",{class:"bg-blue-500 hover:bg-blue-700 text-white hover:text-yellow-200 rounded-lg px-4 py-2"}," 推薦 2 ",-1),K=[J],M={__name:"Hero",props:{restaurant:Object},setup(t){return(n,l)=>{const s=m;return c(),u("div",q,[a(s,{src:`https://kgptltaqnkidtcqkathb.supabase.co/storage/v1/object/public/a7-images/restaurant/${t.restaurant.figure}`,class:"w-full md:w-1/2 md:px-4",alt:""},null,8,["src"]),e("div",y,[e("h1",j,i(t.restaurant.name),1),e("div",L,[e("div",O,[e("p",G,[k(" 地址: "),e("a",{href:t.restaurant.google},i(t.restaurant.address),9,N)]),e("p",$,"電話: "+i(t.restaurant.telphone),1),e("p",D,"營業時間: "+i(t.restaurant.hours),1)]),e("p",B,[o(e("a",{href:t.restaurant.web},[a(s,{class:"h-12 hover:scale-150",src:"https://kgptltaqnkidtcqkathb.supabase.co/storage/v1/object/public/a7-images/logo/LOG-01-Web.jpeg"})],8,C),[[r,t.restaurant.web]]),o(e("a",{href:t.restaurant.facebook},[a(s,{class:"h-12 hover:scale-150",src:`https://kgptltaqnkidtcqkathb.supabase.co/storage/v1/object/public/a7-images/logo/LOG-01-Facebook.png
            `})],8,H),[[r,t.restaurant.facebook]]),o(e("a",{href:t.restaurant.line},[a(s,{class:"h-12 hover:scale-150",src:"https://kgptltaqnkidtcqkathb.supabase.co/storage/v1/object/public/a7-images/logo/LOG-01-Line.png"})],8,R),[[r,t.restaurant.line]]),o(e("a",{href:t.restaurant.ig},[a(s,{class:"h-12 hover:scale-150",src:"https://kgptltaqnkidtcqkathb.supabase.co/storage/v1/object/public/a7-images/logo/LOG-01-Ig.png"})],8,V),[[r,t.restaurant.ig]]),o(e("a",{href:t.restaurant.uber},[a(s,{class:"h-12 hover:scale-150",src:"https://kgptltaqnkidtcqkathb.supabase.co/storage/v1/object/public/a7-images/logo/LOG-01-Uber.jpeg"})],8,F),[[r,t.restaurant.uber]]),o(e("a",{href:t.restaurant.panda},[a(s,{class:"h-12 hover:scale-150",src:"https://kgptltaqnkidtcqkathb.supabase.co/storage/v1/object/public/a7-images/logo/LOG-01-Panda.png"})],8,I),[[r,t.restaurant.panda]])])]),e("div",U,[t.restaurant.menu?(c(),u("a",{key:0,href:t.restaurant.menu},S,8,z)):h("",!0),t.restaurant.suggestion?(c(),u("a",{key:1,href:t.restaurant.suggestion},T,8,A)):h("",!0),t.restaurant.suggestion2?(c(),u("a",{key:2,href:t.restaurant.suggestion2},K,8,W)):h("",!0)])])])}}},Q=M,X=()=>{function t(n){return n.charAt(0).toUpperCase()+n.slice(1)}return{capitalizeFirstLetter:t}},Y={key:0},Z=e("p",null,"餐廳介紹",-1),ot={__name:"[name]-[id]",setup(t){const{restaurants:n}=_(),l=p(),{capitalizeFirstLetter:s}=X(),d=x(()=>n.find(g=>g.id===l.params.id));if(!d.value)throw v({statusCode:404,message:`Restaurant with ID of ${l.params.id} does not exist`});return w({title:s(l.params.name)}),(g,tt)=>{const f=Q;return b(d)?(c(),u("div",Y,[Z,a(f,{restaurant:b(d)},null,8,["restaurant"])])):h("",!0)}}};export{ot as default};