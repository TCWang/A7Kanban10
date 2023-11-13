import{_}from"./nuxt-img.fe1705b7.js";import{o as h,c as i,b as a,a as t,t as n,e as b,w as l,v as r,i as d,u,n as f,f as x,B as v,z as k}from"./entry.3177b98b.js";import{u as w}from"./useShops.576272b3.js";import{u as y}from"./vue.f36acd1f.94914273.js";import"./shops.7ce26cbb.js";import"./typecs.b72571d9.js";const $={class:"mt-2 flex flex-col md:flex-row"},q={class:"w-full md:w-1/2"},j={class:"mt-1"},B={class:"text-slate-500 text-lg mt-3 border-b pb-5 justify-between"},D={class:"flex-col"},L={class:""},N=["href"],O={class:""},S={class:""},T={class:"flex flex-row space-x-4"},G=["href"],V=["href"],C=["href"],I=["href"],E={class:"flex flex-row space-x-4"},R=["href"],z=t("button",{class:"bg-blue-500 hover:bg-blue-700 text-white hover:text-yellow-200 rounded-lg px-4 py-2"}," 推薦 ",-1),F=[z],H=["href"],W=t("button",{class:"bg-blue-500 hover:bg-blue-700 text-white hover:text-yellow-200 rounded-lg px-4 py-2"}," 推薦 2 ",-1),A=[W],J={__name:"Detail",props:{shop:Object},setup(e){return(c,o)=>{const s=_;return h(),i("div",$,[a(s,{src:`https://kgptltaqnkidtcqkathb.supabase.co/storage/v1/object/public/a7-images/shop/${e.shop.figure}`,class:"w-full md:w-1/2 md:px-4",alt:""},null,8,["src"]),t("div",q,[t("h1",j,n(e.shop.type)+" - "+n(e.shop.name),1),t("div",B,[t("div",D,[t("p",L,[b(" 地址: "),t("a",{href:e.shop.google},n(e.shop.address),9,N)]),t("p",O,"電話: "+n(e.shop.telphone),1),t("p",S,"營業時間: "+n(e.shop.hours),1)]),t("p",T,[l(t("a",{href:e.shop.web},[a(s,{class:"h-12 hover:scale-150",src:"https://kgptltaqnkidtcqkathb.supabase.co/storage/v1/object/public/a7-images/logo/LOG-01-Web.jpeg"})],8,G),[[r,e.shop.web]]),l(t("a",{href:e.shop.facebook},[a(s,{class:"h-12 hover:scale-150",src:`https://kgptltaqnkidtcqkathb.supabase.co/storage/v1/object/public/a7-images/logo/LOG-01-Facebook.png
            `})],8,V),[[r,e.shop.facebook]]),l(t("a",{href:e.shop.line},[a(s,{class:"h-12 hover:scale-150",src:"https://kgptltaqnkidtcqkathb.supabase.co/storage/v1/object/public/a7-images/logo/LOG-01-Line.png"})],8,C),[[r,e.shop.line]]),l(t("a",{href:e.shop.ig},[a(s,{class:"h-12 hover:scale-150",src:"https://kgptltaqnkidtcqkathb.supabase.co/storage/v1/object/public/a7-images/logo/LOG-01-Ig.png"})],8,I),[[r,e.shop.ig]])])]),t("div",E,[e.shop.suggestion?(h(),i("a",{key:0,href:e.shop.suggestion},F,8,R)):d("",!0),e.shop.suggestion2?(h(),i("a",{key:1,href:e.shop.suggestion2},A,8,H)):d("",!0)])])])}}},K=J,M={class:"container mb-4 mr-8 flex justify-end"},P={__name:"Back",props:{area:Text},setup(e){return(c,o)=>(h(),i("div",M,[t("button",{onClick:o[0]||(o[0]=s=>("navigateTo"in c?c.navigateTo:u(f))(`area/${e.area}/shop`)),class:"btn btn-primary"}," 回列表清單 ")]))}},Q=P,U={key:0},X=t("h1",null,"店家介紹",-1),ce={__name:"[name]-[id]",setup(e){const{shops:c}=w(),o=x(),s=v(()=>c.find(p=>p.id===o.params.id));if(!s.value)throw k({statusCode:404,message:`Restaurant with ID of ${o.params.id} does not exist`});return y({title:`商店黃頁:${o.params.name}`}),(p,Y)=>{const g=K,m=Q;return u(s)?(h(),i("div",U,[X,a(g,{shop:u(s)},null,8,["shop"]),a(m,{area:u(s).area},null,8,["area"])])):d("",!0)}}};export{ce as default};
