import{M as f,r as i,Q as _,u as m}from"./entry.2c910bb5.js";const v=f({emits:{error(a){return!0}},setup(a,{slots:r,emit:p}){const n=i(null),o=m();_((e,u,c)=>{if(!o.isHydrating)return p("error",e),o.hooks.callHook("vue:error",e,u,c),n.value=e,!1});function t(){n.value=null}return()=>{var e,u;return n.value?(e=r.error)==null?void 0:e.call(r,{error:n,clearError:t}):(u=r.default)==null?void 0:u.call(r)}}});export{v as _};
