(()=>{var e={};e.id=752,e.ids=[752],e.modules={2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},1017:e=>{"use strict";e.exports=require("path")},7310:e=>{"use strict";e.exports=require("url")},949:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>n.a,__next_app__:()=>x,originalPathname:()=>m,pages:()=>c,routeModule:()=>h,tree:()=>d}),s(2516),s(9321),s(5866),s(1506);var a=s(3191),r=s(8716),i=s(7922),n=s.n(i),l=s(5231),o={};for(let e in l)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>l[e]);s.d(t,o);let d=["",{children:["(dashboard-pages)",{children:["settings",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,2516)),"C:\\Users\\HP\\Desktop\\finDash\\finDash\\app\\(dashboard-pages)\\settings\\page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(s.bind(s,9321)),"C:\\Users\\HP\\Desktop\\finDash\\finDash\\app\\(dashboard-pages)\\layout.tsx"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,5866,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,7481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(s.bind(s,1506)),"C:\\Users\\HP\\Desktop\\finDash\\finDash\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,5866,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,7481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["C:\\Users\\HP\\Desktop\\finDash\\finDash\\app\\(dashboard-pages)\\settings\\page.tsx"],m="/(dashboard-pages)/settings/page",x={require:s,loadChunk:()=>Promise.resolve()},h=new a.AppPageRouteModule({definition:{kind:r.x.APP_PAGE,page:"/(dashboard-pages)/settings/page",pathname:"/settings",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},2193:(e,t,s)=>{Promise.resolve().then(s.bind(s,4333))},6589:(e,t,s)=>{Promise.resolve().then(s.bind(s,5883))},3564:(e,t,s)=>{Promise.resolve().then(s.t.bind(s,2994,23)),Promise.resolve().then(s.t.bind(s,6114,23)),Promise.resolve().then(s.t.bind(s,9727,23)),Promise.resolve().then(s.t.bind(s,9671,23)),Promise.resolve().then(s.t.bind(s,1868,23)),Promise.resolve().then(s.t.bind(s,4759,23))},6178:()=>{},4333:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>i});var a=s(326),r=s(7577);let i=()=>{let[e,t]=(0,r.useState)({username:"johndoe",email:"johndoe@example.com"}),[s,i]=(0,r.useState)({emailNotifications:!0,smsNotifications:!1}),[n,l]=(0,r.useState)({twoFactorAuth:!1}),o=e=>{let{name:s,value:a}=e.target;t(e=>({...e,[s]:a}))},d=e=>{let{name:t,checked:s}=e.target;i(e=>({...e,[t]:s}))};return a.jsx("div",{className:"w-full flex flex-row justify-center items-center mb-6",children:(0,a.jsxs)("div",{className:"px-6 py-8 w-[800px] bg-gray-200 min-h-screen ",children:[a.jsx("h1",{className:"text-center text-4xl font-bold mb-8 text-green-700",children:"Settings"}),(0,a.jsxs)("div",{className:"bg-white p-6 shadow-lg rounded-lg mb-8",children:[a.jsx("h2",{className:"text-2xl font-bold text-gray-800 mb-4",children:"Account"}),(0,a.jsxs)("div",{className:"space-y-4",children:[(0,a.jsxs)("div",{className:"flex flex-col",children:[a.jsx("label",{className:"text-gray-700 font-semibold",children:"Username"}),a.jsx("input",{type:"text",name:"username",value:e.username,onChange:o,className:"border rounded-lg p-2 mt-1 text-gray-700"})]}),(0,a.jsxs)("div",{className:"flex flex-col",children:[a.jsx("label",{className:"text-gray-700 font-semibold",children:"Email"}),a.jsx("input",{type:"email",name:"email",value:e.email,onChange:o,className:"border rounded-lg p-2 mt-1 text-gray-700"})]})]})]}),(0,a.jsxs)("div",{className:"bg-white p-6 shadow-lg rounded-lg mb-8",children:[a.jsx("h2",{className:"text-2xl font-bold text-gray-800 mb-4",children:"Notifications"}),(0,a.jsxs)("div",{className:"space-y-4",children:[(0,a.jsxs)("div",{className:"flex items-center",children:[a.jsx("input",{type:"checkbox",name:"emailNotifications",checked:s.emailNotifications,onChange:d,className:"h-4 w-4 text-green-600"}),a.jsx("label",{className:"ml-2 text-gray-700 font-semibold",children:"Email Notifications"})]}),(0,a.jsxs)("div",{className:"flex items-center",children:[a.jsx("input",{type:"checkbox",name:"smsNotifications",checked:s.smsNotifications,onChange:d,className:"h-4 w-4 text-green-600"}),a.jsx("label",{className:"ml-2 text-gray-700 font-semibold",children:"SMS Notifications"})]})]})]}),(0,a.jsxs)("div",{className:"bg-white p-6 shadow-lg rounded-lg",children:[a.jsx("h2",{className:"text-2xl font-bold text-gray-800 mb-4",children:"Security"}),a.jsx("div",{className:"space-y-4",children:(0,a.jsxs)("div",{className:"flex items-center",children:[a.jsx("input",{type:"checkbox",name:"twoFactorAuth",checked:n.twoFactorAuth,onChange:e=>{let{name:t,checked:s}=e.target;l(e=>({...e,[t]:s}))},className:"h-4 w-4 text-green-600"}),a.jsx("label",{className:"ml-2 text-gray-700 font-semibold",children:"Two-Factor Authentication"})]})})]})]})})}},5883:(e,t,s)=>{"use strict";s.d(t,{default:()=>c});var a=s(326),r=s(5047),i=s(9497),n=s(3440),l=s(6226),o=s(7577);let d=[{icon:n.J9Y,label:"Home",route:"/"},{icon:n.qO$,label:"Timelines",route:"/timelines"},{icon:n.aj4,label:"Payments",route:"/payments"},{icon:n.hVn,label:"Directory",route:"/directory"},{icon:n.oFW,label:"Financials",route:"/financials"},{icon:n.b7W,label:"Settings",route:"/settings"}],c=()=>{let[e,t]=(0,o.useState)(!1),s=()=>{t(!e)},c=(0,r.useRouter)(),m=(0,r.usePathname)(),x=e=>{c.push(e)},h=e=>m===e||"/"===m&&"/"===e?"text-green-500":"text-gray-700";return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{className:"md:hidden z-100 fixed top-0 left-0 right-0 border-b border-l  shadow-md bg-gray-200 text-gray-700 flex justify-between items-center p-4 z-40",children:[a.jsx(l.default,{src:"/logo.png",alt:"Fintech Logo",width:100,height:100}),a.jsx("button",{onClick:s,className:"text-gray-700 focus:outline-none",children:e?a.jsx(i.G,{icon:n.QQm,size:"lg"}):a.jsx(i.G,{icon:n.xiG,size:"lg"})})]}),(0,a.jsxs)("div",{className:`${e?"translate-x-0":"-translate-x-full"} md:translate-x-0 transition-transform fixed md:relative top-0 left-0 h-screen overflow-hidden bg-gray-200 text-gray-700 w-52 p-4 z-40`,children:[a.jsx("div",{className:"rounded flex w-32 h-12 p-2 mt-2 mb-4",children:a.jsx(l.default,{src:"/logo.png",alt:"Fintech Logo",width:100,height:100})}),a.jsx("ul",{className:"space-y-2 pt-4 text-md px-2",children:d.map((e,t)=>(0,a.jsxs)("li",{className:`py-2 cursor-pointer ${h(e.route)}`,onClick:()=>x(e.route),children:[a.jsx(i.G,{icon:e.icon,className:"mr-2"})," ",e.label]},t))}),a.jsx("hr",{className:"h-0.5 bg-slate-300"}),(0,a.jsxs)("button",{className:"bg-black text-white font-semibold p-2 m-4 rounded-l-full rounded-br-full absolute bottom-0 left-0",children:[a.jsx(i.G,{icon:n.RLE,className:"mr-2"}),"Get Help"]})]}),e&&a.jsx("div",{className:"fixed inset-0 bg-black opacity-50 z-30 md:hidden",onClick:s}),a.jsx("div",{className:"fixed bottom-0 z-50 left-0 right-0 bg-gray-200 flex justify-around items-center p-2 md:hidden",children:d.map((e,t)=>a.jsx("button",{className:`text-gray-700 ${h(e.route)}`,onClick:()=>x(e.route),children:a.jsx(i.G,{icon:e.icon,size:"lg"})},t))})]})}},9321:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>n,metadata:()=>i});var a=s(9510);let r=(0,s(8570).createProxy)(String.raw`C:\Users\HP\Desktop\finDash\finDash\app\components\Sidebar.tsx#default`),i={title:"Fin Dashboard",description:"Automation for your growing business"};async function n({children:e}){return a.jsx(a.Fragment,{children:(0,a.jsxs)("div",{className:"flex flex-col md:flex-row h-full bg-gray-200 text-gray-800",children:[a.jsx("div",{className:"fixed w-fit z-50 border-l border border-gray-300",children:a.jsx(r,{})}),a.jsx("hr",{className:"h-0.5 bg-slate-300"}),(0,a.jsxs)("div",{className:"flex-grow md:ml-52 mt-6 md:mt-0 h-screen overflow-auto no-scrollbar",children:[e," "]})]})})}},2516:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>a});let a=(0,s(8570).createProxy)(String.raw`C:\Users\HP\Desktop\finDash\finDash\app\(dashboard-pages)\settings\page.tsx#default`)},1506:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>d,metadata:()=>o});var a=s(9510),r=s(7523),i=s.n(r),n=s(2298),l=s.n(n);s(7272);let o={title:"Create Next App",description:"Generated by create next app"};function d({children:e}){return a.jsx("html",{lang:"en",children:a.jsx("body",{className:`${i().variable} ${l().variable} antialiased`,children:e})})}},7481:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>r});var a=s(6621);let r=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,a.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]},7272:()=>{}};var t=require("../../../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),a=t.X(0,[948,936,79],()=>s(949));module.exports=a})();