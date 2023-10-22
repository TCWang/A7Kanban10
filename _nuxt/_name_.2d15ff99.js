import{_ as d}from"./nuxt-img.303c84f5.js";import{f as g,h as r,j as s,i as e,k as i,z as m,l as a,v as c,J as f,I as p,B as y,d as x,c as k,b as h,H as v}from"./entry.0aa63d5b.js";import{_ as w}from"./nuxt-link.144531bd.js";import{u as L}from"./useGbuyings.ee17c0f2.js";import{u as $}from"./vue.f36acd1f.870519e4.js";const H={class:"mt-2 flex flex-col md:flex-row"},j={class:"md:w-2/3"},q={class:"mt-1"},G={class:"text-slate-500 text-lg mt-3 border-b pb-5 justify-between"},T={class:"flex-col"},B={class:""},M=["href"],N={class:"flex flex-row space-x-4"},O=["href"],V=["href"],C=["href"],D=e("h4",null,"商品內容",-1),E=["innerHTML"],I=e("h4",null,"訂購方式",-1),S=["innerHTML"],z=e("h4",null,"付款方法",-1),F=["innerHTML"],J={__name:"Hero",props:{gbuying:Object},setup(t){return(u,o)=>{const n=d;return g(),r("div",H,[s(n,{src:`https://kgptltaqnkidtcqkathb.supabase.co/storage/v1/object/public/a7-images/gbuying/${t.gbuying.figure}`,class:"w-[150px] h-[150px] md:w-[200px] md:h-[200px] px-1 md:px-4",alt:""},null,8,["src"]),e("div",j,[e("h1",q,i(t.gbuying.name),1),e("div",G,[e("div",T,[e("p",B,[m(" 地址: "),e("a",{href:t.gbuying.google},i(t.gbuying.address),9,M)]),a(e("p",{class:""},"電話: "+i(t.gbuying.telphone),513),[[c,t.gbuying.telphone]]),a(e("p",{class:""},"營業時間: "+i(t.gbuying.hours),513),[[c,t.gbuying.hours]])]),e("p",N,[a(e("a",{href:t.gbuying.web},[s(n,{class:"h-12 hover:scale-150",src:"https://kgptltaqnkidtcqkathb.supabase.co/storage/v1/object/public/a7-images/logo/LOG-01-Web.jpeg"})],8,O),[[c,t.gbuying.web]]),a(e("a",{href:t.gbuying.facebook},[s(n,{class:"h-12 hover:scale-150",src:`https://kgptltaqnkidtcqkathb.supabase.co/storage/v1/object/public/a7-images/logo/LOG-01-Facebook.png
            `})],8,V),[[c,t.gbuying.facebook]]),a(e("a",{href:t.gbuying.line},[s(n,{class:"h-12 hover:scale-150",src:"https://kgptltaqnkidtcqkathb.supabase.co/storage/v1/object/public/a7-images/logo/LOG-01-Line.png"})],8,C),[[c,t.gbuying.line]])]),D,e("p",{innerHTML:t.gbuying.goods},null,8,E),I,e("p",{innerHTML:t.gbuying.order},null,8,S),z,e("p",{innerHTML:t.gbuying.payment},null,8,F)])])])}}},R=J,W={},A={class:"container mb-4 mr-8 flex justify-end"},K=e("button",{class:"btn btn-primary"},"回列表清單",-1);function P(t,u){const o=w;return g(),r("div",A,[s(o,{to:"/gbuying"},{default:p(()=>[K]),_:1})])}const Q=f(W,[["render",P]]),U={key:0},X=e("h1",null,"團購介紹",-1),oe={__name:"[name]",setup(t){const{gbuyings:u}=L(),o=y(),n=x(()=>u.find(l=>l.name===o.params.name));if(!n.value)throw k({statusCode:404,message:`Group Buying  with name of ${o.params.name} does not exist`});return $({title:`團購熱搜:${o.params.name}`}),(l,Y)=>{const b=R,_=Q;return h(n)?(g(),r("div",U,[X,s(b,{gbuying:h(n)},null,8,["gbuying"]),s(_)])):v("",!0)}}};export{oe as default};