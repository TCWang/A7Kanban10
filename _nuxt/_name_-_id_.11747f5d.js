import{_}from"./nuxt-img.cf0cf375.js";import{o as a,c as i,b as o,a as t,t as r,e as b,w as l,v as h,i as u,u as d,n as f,f as p,B as x,z as k}from"./entry.bba65d38.js";import{u as w}from"./useServices.186f542d.js";import{u as y}from"./vue.f36acd1f.06af717e.js";import"./services.45f1bc9e.js";import"./typecs.b72571d9.js";const q={class:"mt-2 flex flex-col md:flex-row"},$={class:"w-full md:w-1/2"},j={class:"mt-1"},L={class:"text-slate-500 text-lg mt-3 border-b pb-5 justify-between"},T={class:"flex-col"},B={class:""},D=["href"],N={class:""},O={class:""},S={class:"flex flex-row space-x-4"},G=["href"],V=["href"],C=["href"],H=["href"],I={class:"flex flex-row space-x-4"},E=["href"],M=t("button",{class:"bg-blue-500 hover:bg-blue-700 text-white hover:text-yellow-200 rounded-lg px-4 py-2"}," 推薦 ",-1),R=[M],z=["href"],A=t("button",{class:"bg-blue-500 hover:bg-blue-700 text-white hover:text-yellow-200 rounded-lg px-4 py-2"}," 推薦 2 ",-1),F=[A],W=["innerHTML"],J={__name:"Detail",props:{service:Object},setup(e){return(n,c)=>{const s=_;return a(),i("div",q,[o(s,{src:`https://kgptltaqnkidtcqkathb.supabase.co/storage/v1/object/public/a7-images/service/${e.service.figure}`,class:"w-full md:w-1/2 md:px-4",alt:""},null,8,["src"]),t("div",$,[t("h1",j,r(e.service.type)+" - "+r(e.service.name),1),t("div",L,[t("div",T,[t("p",B,[b(" 地址: "),t("a",{href:e.service.google},r(e.service.address),9,D)]),t("p",N,"電話: "+r(e.service.telphone),1),t("p",O,"營業時間: "+r(e.service.hours),1)]),t("p",S,[l(t("a",{href:e.service.web},[o(s,{class:"h-12 hover:scale-150",src:"https://kgptltaqnkidtcqkathb.supabase.co/storage/v1/object/public/a7-images/logo/LOG-01-Web.jpeg"})],8,G),[[h,e.service.web]]),l(t("a",{href:e.service.facebook},[o(s,{class:"h-12 hover:scale-150",src:`https://kgptltaqnkidtcqkathb.supabase.co/storage/v1/object/public/a7-images/logo/LOG-01-Facebook.png
            `})],8,V),[[h,e.service.facebook]]),l(t("a",{href:e.service.line},[o(s,{class:"h-12 hover:scale-150",src:"https://kgptltaqnkidtcqkathb.supabase.co/storage/v1/object/public/a7-images/logo/LOG-01-Line.png"})],8,C),[[h,e.service.line]]),l(t("a",{href:e.service.ig},[o(s,{class:"h-12 hover:scale-150",src:"https://kgptltaqnkidtcqkathb.supabase.co/storage/v1/object/public/a7-images/logo/LOG-01-Ig.png"})],8,H),[[h,e.service.ig]])])]),t("div",I,[e.service.suggestion?(a(),i("a",{key:0,href:e.service.suggestion},R,8,E)):u("",!0),e.service.suggestion2?(a(),i("a",{key:1,href:e.service.suggestion2},F,8,z)):u("",!0)]),e.service.description?(a(),i("div",{key:0,class:"mt-2",innerHTML:e.service.description},null,8,W)):u("",!0)])])}}},K=J,P={class:"container mb-4 mr-8 flex justify-end"},Q={__name:"Back",props:{area:Text},setup(e){return(n,c)=>(a(),i("div",P,[t("button",{onClick:c[0]||(c[0]=s=>("navigateTo"in n?n.navigateTo:d(f))("/area/0.A7重劃區/service")),class:"btn btn-primary"}," 回列表清單 ")]))}},U=Q,X={key:0},Y=t("h1",null,"服務介紹",-1),ie={__name:"[name]-[id]",setup(e){const{services:n}=w(),c=p(),s=x(()=>n.find(v=>v.id===c.params.id));if(!s.value)throw k({statusCode:404,message:`Restaurant with ID of ${c.params.id} does not exist`});return y({title:`在地服務:${c.params.name}`}),(v,Z)=>{const g=K,m=U;return d(s)?(a(),i("div",X,[Y,o(g,{service:d(s)},null,8,["service"]),o(m,{area:d(s).area},null,8,["area"])])):u("",!0)}}};export{ie as default};
