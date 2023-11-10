import{_ as b}from"./nuxt-img.a8083c4d.js";import{o as r,c as n,b as i,a as s,t as h,w as o,v as a,e as f,i as u,u as d,n as _,f as k,B as x,z as p}from"./entry.953ac625.js";import{u as w}from"./useServices.875e7779.js";import{u as y}from"./vue.f36acd1f.40091d6a.js";import"./services.c32f0ac2.js";import"./typecs.b72571d9.js";const q={class:"mt-2 flex flex-col md:flex-row"},$={class:"w-full md:w-1/2"},j={class:"mt-1"},L={class:"mt-3 border-b pb-5 justify-between"},T={class:"flex-col"},B={class:""},D=["href"],N={class:"flex flex-row space-x-4"},O=["href"],S=["href"],G=["href"],V=["href"],C={class:"flex flex-row space-x-4"},H=["href"],I=s("button",{class:"bg-blue-500 hover:bg-blue-700 text-white hover:text-yellow-200 rounded-lg px-4 py-2"}," 推薦 ",-1),E=[I],M=["href"],R=s("button",{class:"bg-blue-500 hover:bg-blue-700 text-white hover:text-yellow-200 rounded-lg px-4 py-2"}," 推薦 2 ",-1),z=[R],A=["innerHTML"],F={__name:"Detail",props:{service:Object},setup(e){return(l,c)=>{const t=b;return r(),n("div",q,[i(t,{src:`https://kgptltaqnkidtcqkathb.supabase.co/storage/v1/object/public/a7-images/service/${e.service.figure}`,class:"w-full md:w-1/2 md:px-4",alt:""},null,8,["src"]),s("div",$,[s("h3",j,h(e.service.type)+" - "+h(e.service.name),1),s("div",L,[s("div",T,[o(s("p",B,[f(" 地址: "),s("a",{href:e.service.google},h(e.service.address),9,D)],512),[[a,e.service.address]]),o(s("p",{class:""},"電話: "+h(e.service.telphone),513),[[a,e.service.telphone]]),o(s("p",{class:""},"營業時間: "+h(e.service.hours),513),[[a,e.service.hours]])]),s("p",N,[o(s("a",{href:e.service.web},[i(t,{class:"h-12 hover:scale-150",src:"https://kgptltaqnkidtcqkathb.supabase.co/storage/v1/object/public/a7-images/logo/LOG-01-Web.jpeg"})],8,O),[[a,e.service.web]]),o(s("a",{href:e.service.facebook},[i(t,{class:"h-12 hover:scale-150",src:`https://kgptltaqnkidtcqkathb.supabase.co/storage/v1/object/public/a7-images/logo/LOG-01-Facebook.png
            `})],8,S),[[a,e.service.facebook]]),o(s("a",{href:e.service.line},[i(t,{class:"h-12 hover:scale-150",src:"https://kgptltaqnkidtcqkathb.supabase.co/storage/v1/object/public/a7-images/logo/LOG-01-Line.png"})],8,G),[[a,e.service.line]]),o(s("a",{href:e.service.ig},[i(t,{class:"h-12 hover:scale-150",src:"https://kgptltaqnkidtcqkathb.supabase.co/storage/v1/object/public/a7-images/logo/LOG-01-Ig.png"})],8,V),[[a,e.service.ig]])])]),s("div",C,[e.service.suggestion?(r(),n("a",{key:0,href:e.service.suggestion},E,8,H)):u("",!0),e.service.suggestion2?(r(),n("a",{key:1,href:e.service.suggestion2},z,8,M)):u("",!0)]),e.service.description?(r(),n("div",{key:0,class:"mt-2",innerHTML:e.service.description},null,8,A)):u("",!0)])])}}},W=F,J={class:"container mb-4 mr-8 flex justify-end"},K={__name:"Back",props:{area:Text},setup(e){return(l,c)=>(r(),n("div",J,[s("button",{onClick:c[0]||(c[0]=t=>("navigateTo"in l?l.navigateTo:d(_))("/area/0.A7重劃區/service")),class:"btn btn-primary"}," 回列表清單 ")]))}},P=K,Q={key:0},U=s("h1",null,"服務介紹",-1),oe={__name:"[name]-[id]",setup(e){const{services:l}=w(),c=k(),t=x(()=>l.find(v=>v.id===c.params.id));if(!t.value)throw p({statusCode:404,message:`Restaurant with ID of ${c.params.id} does not exist`});return y({title:`在地服務:${c.params.name}`}),(v,X)=>{const m=W,g=P;return d(t)?(r(),n("div",Q,[U,i(m,{service:d(t)},null,8,["service"]),i(g,{area:d(t).area},null,8,["area"])])):u("",!0)}}};export{oe as default};
