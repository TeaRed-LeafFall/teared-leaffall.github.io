import{d as h,u as d,U as v,O as y,o as c,b as w,w as b,l as n,c as p,t as l,e as u,s as m,ab as A,ac as x,ad as L,ae as P,af as k,ag as C,ah as $,ai as E,aj as T,ak as D,al as M,j as R,y as j,am as V,an as O,ao as S,$ as B}from"./chunks/framework.f7ea1c6c.js";import{t as g}from"./chunks/theme.e2de1b04.js";const U={key:0,class:"page-msg-container"},F={key:0,class:"page-msg"},H={key:1,class:"page-msg"},I={key:2,class:"page-msg"},N=h({__name:"MyLayout",setup(t){const{frontmatter:e}=d(),{isDark:a}=d(),s=()=>"startViewTransition"in document&&window.matchMedia("(prefers-reduced-motion: no-preference)").matches;return v("toggle-appearance",async({clientX:o,clientY:i})=>{if(!s()){a.value=!a.value;return}const f=[`circle(0px at ${o}px ${i}px)`,`circle(${Math.hypot(Math.max(o,innerWidth-o),Math.max(i,innerHeight-i))}px at ${o}px ${i}px)`];await document.startViewTransition(async()=>{a.value=!a.value,await y()}).ready,document.documentElement.animate({clipPath:a.value?f.reverse():f},{duration:300,easing:"ease-in",pseudoElement:`::view-transition-${a.value?"old":"new"}(root)`})}),(o,i)=>(c(),w(n(g).Layout,null,{"doc-before":b(()=>[n(e).author||n(e).date||n(e).tags?(c(),p("div",U,[n(e).author?(c(),p("div",F,"作者: "+l(n(e).author),1)):u("",!0),n(e).date?(c(),p("div",H,"编写时间: "+l(n(e).date),1)):u("",!0),n(e).tags?(c(),p("div",I,"标签: "+l(n(e).tags.join(", ")),1)):u("",!0)])):u("",!0)]),_:1}))}});const G={extends:g,lastUpdated:!0,cleanUrls:!0,markdown:{container:{tipLabel:"提示",warningLabel:"警告",dangerLabel:"危险",infoLabel:"信息",detailsLabel:"详细信息"}},Layout:N,enhanceApp({app:t,router:e,siteData:a}){}};function _(t){if(t.extends){const e=_(t.extends);return{...e,...t,async enhanceApp(a){e.enhanceApp&&await e.enhanceApp(a),t.enhanceApp&&await t.enhanceApp(a)}}}return t}const r=_(G),W=h({name:"VitePressApp",setup(){const{site:t}=d();return R(()=>{j(()=>{document.documentElement.lang=t.value.lang,document.documentElement.dir=t.value.dir})}),V(),O(),S(),r.setup&&r.setup(),()=>B(r.Layout)}});async function X(){const t=q(),e=Y();e.provide(x,t);const a=L(t.route);return e.provide(P,a),e.component("Content",k),e.component("ClientOnly",C),Object.defineProperties(e.config.globalProperties,{$frontmatter:{get(){return a.frontmatter.value}},$params:{get(){return a.page.value.params}}}),r.enhanceApp&&await r.enhanceApp({app:e,router:t,siteData:$}),{app:e,router:t,data:a}}function Y(){return E(W)}function q(){let t=m,e;return T(a=>{let s=D(a),o=null;return s&&(t&&(e=s),(t||e===s)&&(s=s.replace(/\.js$/,".lean.js")),o=M(()=>import(s),[])),m&&(t=!1),o},r.NotFound)}m&&X().then(({app:t,router:e,data:a})=>{e.go().then(()=>{A(e.route,a.site),t.mount("#app")})});export{X as createApp};
