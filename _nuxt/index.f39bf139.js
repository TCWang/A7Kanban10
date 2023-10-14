import{_ as m}from"./nuxt-img.69497abf.js";import{a as u,b as d,c as t,d as n,t as l,w as c,v as i,u as b,n as _,F as x,k as f,l as p,p as y,B as h}from"./entry.f93c7535.js";import{u as v}from"./useGbuyings.3dbbcc11.js";import{_ as k}from"./nuxt-error-boundary.f874fe35.js";import{u as w}from"./vue.f36acd1f.ee199fae.js";const $={class:"flex flex-row h-full bg-zinc-100 rounded-2xl shadow-md"},q={class:"p-4 flex flex-col"},C={class:""},B={class:"mt-auto"},G=["href"],j={class:"flex flex-row space-x-4"},L=["href"],N=["href"],O=["href"],S={__name:"Card",props:{gbuying:Object},setup(e){return(o,r)=>{const s=m;return u(),d("div",{class:"flex-row flex-wrap shadow border-hidden mb-1 cursor-pointer w-[400px] md:w-[500px] h-[190px] md:h-[220px]",onClick:r[0]||(r[0]=g=>("navigateTo"in o?o.navigateTo:b(_))(`/gbuying/${e.gbuying.name}`))},[t("div",$,[n(s,{src:`https://kgptltaqnkidtcqkathb.supabase.co/storage/v1/object/public/a7-images/gbuying/${e.gbuying.figure}`,alt:"",class:"w-[120px] md:w-[200px] h-[120px] md:h-[200px] rounded-xl transform hover:scale-110 duration-200"},null,8,["src"]),t("div",q,[t("div",null,[t("h3",C,l(e.gbuying.name),1),t("p",B,[t("a",{href:e.gbuying.google},l(e.gbuying.address),9,G)]),c(t("p",{class:"mt-auto"}," 電話; "+l(e.gbuying.telphone),513),[[i,e.gbuying.telphone]]),c(t("p",{class:"mt-auto"}," 營業: "+l(e.gbuying.hours),513),[[i,e.gbuying.hours]])]),t("div",j,[c(t("a",{href:e.gbuying.web},[n(s,{class:"h-12 hover:scale-150",src:"https://kgptltaqnkidtcqkathb.supabase.co/storage/v1/object/public/a7-images/logo/LOG-01-Web.jpeg"})],8,L),[[i,e.gbuying.web]]),c(t("a",{href:e.gbuying.facebook},[n(s,{class:"h-12 hover:scale-150",src:`https://kgptltaqnkidtcqkathb.supabase.co/storage/v1/object/public/a7-images/logo/LOG-01-Facebook.png
            `})],8,N),[[i,e.gbuying.facebook]]),c(t("a",{href:e.gbuying.line},[n(s,{class:"h-12 hover:scale-150",src:"https://kgptltaqnkidtcqkathb.supabase.co/storage/v1/object/public/a7-images/logo/LOG-01-Line.png"})],8,O),[[i,e.gbuying.line]])])])])])}}},F=S,T={class:"flex flex-row flex-wrap"},D={__name:"Cards",setup(e){const{gbuyings:o}=v();return(r,s)=>{const g=F;return u(),d("div",T,[(u(!0),d(x,null,f(b(o),a=>(u(),p(g,{key:a.id,gbuying:a},null,8,["gbuying"]))),128))])}}},E=D,V={class:"mt-2"},z=t("h1",null,"A7團購 匯總",-1),A={class:"text-center mx-auto flex flex-col"},H=t("h1",{class:"text-5xl text-red-600 mb-4"},"Sorry Something went wrong",-1),I=["onClick"],Q={__name:"index",setup(e){return y(),w({title:"團購熱搜"}),(o,r)=>{const s=E,g=k;return u(),d("div",V,[n(g,null,{error:h(({error:a})=>[t("div",A,[H,t("code",null,l(a),1),t("button",{class:"text-white bg-blue-400 px-10 py-3 rounded mt-4",onClick:R=>a.value=null}," Go Back ",8,I)])]),default:h(()=>[z,n(s)]),_:1})])}}};export{Q as default};
