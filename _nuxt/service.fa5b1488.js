import{u as g}from"./useServices.875e7779.js";import{g as x,f as v,h as k,o as s,c as a,i as u,a as e,t as d,u as p,F as y,r as $,n as C,b as l,j as h,e as f,_ as B}from"./entry.590c42e4.js";import{_ as N}from"./nuxt-img.b0362d27.js";import{_ as S}from"./nuxt-error-boundary.5bf52362.js";import{u as j}from"./vue.f36acd1f.c1e08e81.js";import"./services.c32f0ac2.js";import"./typecs.b72571d9.js";const F={class:"shadow border w-[200px] mr-10 z-30 h-[140px] md:h-[156px]"},V={class:"p-2 flex justify-auto relative cursor-pointer border-b"},T=e("h3",{class:"mr-2"},"種類",-1),q={key:0,class:"absolute border shadow left-44 p-5 top-2 -m-1 w-[240px] flex justify-between flex-wrap bg-white"},z=["onClick"],A={__name:"SideBar",setup(w){const{areas:b,typecs:m}=g();x("");const o=x({typec:!1,area:!1,station:!1}),c=v();k();const n=t=>{o.value[t]=!o.value[t]},_=t=>{n("typec"),C(`/area/${c.params.area}/service/${t}`)};return(t,i)=>(s(),a("div",F,[u("",!0),e("div",V,[T,e("h3",{class:"text-blue-400 capitalize",onClick:i[2]||(i[2]=r=>n("typec"))},d(p(c).params.typec||"所有類別"),1),p(o).typec?(s(),a("div",q,[(s(!0),a(y,null,$(p(m),r=>(s(),a("h4",{key:r,class:"hover:text-yellow-700 hover:text-bold w-1/3",onClick:O=>_(r)},d(r),9,z))),128))])):u("",!0)]),u("",!0)]))}},E=A,G={class:"mt-2 flex flex-col"},L={class:"flex flex-col md:flex-row"},R={class:"flex flex-row"},D=e("div",{class:"max-w-sm mb-2"},[f(" 資料來源: "),e("ul",null,[e("li",null,[e("a",{href:"https://www.facebook.com/groups/1604090173145820"},"Facebook A7重劃區工商服務")]),e("li",null,[e("a",{href:"https://www.facebook.com/groups/a7xinlinkou"},"Facebook A7新林口－社區網站")])]),f(" 目前只提供長期登載的廣告，對短期張貼廣告將在下一階段開放自行登載看板！ ")],-1),H={class:"text-center mx-auto flex flex-col"},I=e("h1",{class:"text-5xl text-red-600 mb-4"},"Sorry Something went wrong",-1),M=["onClick"],Y={__name:"service",setup(w){return v(),j({title:"生活指引-在地服務"}),(b,m)=>{const o=E,c=N,n=B,_=S;return s(),a("div",G,[l(_,null,{error:h(({error:t})=>[e("div",H,[I,e("code",null,d(t),1),e("button",{class:"text-white bg-blue-400 px-10 py-3 rounded mt-4",onClick:i=>t.value=null}," Go Back ",8,M)])]),default:h(()=>[e("div",L,[e("div",R,[l(o),l(c,{src:"https://kgptltaqnkidtcqkathb.supabase.co/storage/v1/object/public/a7-images/logo/LOG-03-localservice.jpeg",alt:"",class:"w-[150px] md:w-[200px] h-[150px] md:h-[200px] rounded-xl"})]),D]),l(n)]),_:1})])}}};export{Y as default};
