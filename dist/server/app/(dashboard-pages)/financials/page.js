(()=>{var e={};e.id=382,e.ids=[382],e.modules={2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},1017:e=>{"use strict";e.exports=require("path")},7310:e=>{"use strict";e.exports=require("url")},8872:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>i.a,__next_app__:()=>h,originalPathname:()=>x,pages:()=>c,routeModule:()=>m,tree:()=>d}),s(3783),s(9321),s(5866),s(1506);var a=s(3191),r=s(8716),n=s(7922),i=s.n(n),l=s(5231),o={};for(let e in l)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>l[e]);s.d(t,o);let d=["",{children:["(dashboard-pages)",{children:["financials",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,3783)),"C:\\Users\\HP\\Desktop\\finDash\\finDash\\app\\(dashboard-pages)\\financials\\page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(s.bind(s,9321)),"C:\\Users\\HP\\Desktop\\finDash\\finDash\\app\\(dashboard-pages)\\layout.tsx"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,5866,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,7481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(s.bind(s,1506)),"C:\\Users\\HP\\Desktop\\finDash\\finDash\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,5866,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,7481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["C:\\Users\\HP\\Desktop\\finDash\\finDash\\app\\(dashboard-pages)\\financials\\page.tsx"],x="/(dashboard-pages)/financials/page",h={require:s,loadChunk:()=>Promise.resolve()},m=new a.AppPageRouteModule({definition:{kind:r.x.APP_PAGE,page:"/(dashboard-pages)/financials/page",pathname:"/financials",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},2409:(e,t,s)=>{Promise.resolve().then(s.bind(s,3175))},6589:(e,t,s)=>{Promise.resolve().then(s.bind(s,5883))},3564:(e,t,s)=>{Promise.resolve().then(s.t.bind(s,2994,23)),Promise.resolve().then(s.t.bind(s,6114,23)),Promise.resolve().then(s.t.bind(s,9727,23)),Promise.resolve().then(s.t.bind(s,9671,23)),Promise.resolve().then(s.t.bind(s,1868,23)),Promise.resolve().then(s.t.bind(s,4759,23))},6178:()=>{},3175:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>o});var a=s(326),r=s(3343),n=s(7577);let i=({transaction:e})=>{let{date:t,description:s,amount:r,type:n}=e;return(0,a.jsxs)("div",{className:`flex justify-between items-center border p-4 rounded-lg shadow-sm ${"debit"===n?"bg-red-50":"bg-green-50"}`,children:[(0,a.jsxs)("div",{children:[a.jsx("p",{className:"text-gray-800 font-semibold",children:s}),a.jsx("p",{className:"text-gray-500 text-sm",children:t})]}),a.jsx("p",{className:`text-lg font-bold ${"debit"===n?"text-red-600":"text-green-600"}`,children:r})]})},l=()=>Array.from({length:25},(e,t)=>({date:`2024-09-${String(t+1).padStart(2,"0")}`,description:`Transaction ${t+1}`,amount:`$${(1e3*Math.random()).toFixed(2)}`,type:t%2==0?"debit":"credit"})),o=()=>{let[e,t]=(0,n.useState)([]),[s,o]=(0,n.useState)(1),d=Math.ceil(e.length/8);(0,n.useEffect)(()=>{t(l())},[]);let c=e.slice((s-1)*8,8*s);return(0,a.jsxs)("div",{className:"px-6 py-8 w-full bg-gray-200 min-h-screen",children:[a.jsx("h1",{className:"text-center text-4xl font-bold mb-8 text-green-700",children:"Financial Overview"}),(0,a.jsxs)("div",{className:"flex flex-col md:flex-row gap-2 mb-8",children:[(0,a.jsxs)("div",{className:"bg-white p-3 text-sm shadow-lg rounded-lg h-fit w-60",children:[a.jsx("h2",{className:"text-xl font-semibold text-gray-800",children:"Total Balance"}),a.jsx("p",{className:"text-xl font-bold text-green-600 ",children:"$12,340.00"})]}),(0,a.jsxs)("div",{className:"bg-white p-3 text-sm shadow-lg rounded-lg h-fit w-60",children:[a.jsx("h2",{className:"text-xl font-semibold text-gray-800",children:"GST Due"}),a.jsx("p",{className:"text-xl font-bold text-red-600 ",children:"$1,560.00"})]}),(0,a.jsxs)("div",{className:"bg-white p-3 text-sm shadow-lg rounded-lg h-fit w-60",children:[a.jsx("h2",{className:"text-xl font-semibold text-gray-800",children:"Monthly Expense"}),a.jsx("p",{className:"text-xl font-bold text-yellow-600 ",children:"$4,200.00"})]})]}),(0,a.jsxs)("div",{className:"bg-white p-8 shadow-lg rounded-lg",children:[a.jsx("h2",{className:"text-2xl font-bold text-gray-800 mb-4",children:"Recent Transactions"}),a.jsx("div",{className:"space-y-4",children:c.map((e,t)=>a.jsx(i,{transaction:e},t))}),a.jsx(r.Z,{currentPage:s,totalPages:d,onPrevious:()=>{s>1&&o(s-1)},onNext:()=>{s<d&&o(s+1)}})]})]})}},3343:(e,t,s)=>{"use strict";s.d(t,{Z:()=>r});var a=s(326);s(7577);let r=({currentPage:e,totalPages:t,onPrevious:s,onNext:r})=>(0,a.jsxs)("div",{className:"flex justify-between items-center mt-4 px-4",children:[a.jsx("button",{onClick:s,disabled:1===e,className:`bg-green-500 text-white font-semibold py-2 px-4 rounded-lg ${1===e?"opacity-50 cursor-not-allowed":"hover:bg-green-600"}`,children:"Previous"}),(0,a.jsxs)("span",{className:"text-gray-700",children:["Page ",e," of ",t]}),a.jsx("button",{onClick:r,disabled:e===t,className:`bg-green-500 text-white font-semibold py-2 px-4 rounded-lg ${e===t?"opacity-50 cursor-not-allowed":"hover:bg-green-600"}`,children:"Next"})]})},5883:(e,t,s)=>{"use strict";s.d(t,{default:()=>c});var a=s(326),r=s(5047),n=s(9497),i=s(3440),l=s(6226),o=s(7577);let d=[{icon:i.J9Y,label:"Home",route:"/"},{icon:i.qO$,label:"Timelines",route:"/timelines"},{icon:i.aj4,label:"Payments",route:"/payments"},{icon:i.hVn,label:"Directory",route:"/directory"},{icon:i.oFW,label:"Financials",route:"/financials"},{icon:i.b7W,label:"Settings",route:"/settings"}],c=()=>{let[e,t]=(0,o.useState)(!1),s=()=>{t(!e)},c=(0,r.useRouter)(),x=(0,r.usePathname)(),h=e=>{c.push(e)},m=e=>x===e||"/"===x&&"/"===e?"text-green-500":"text-gray-700";return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{className:"md:hidden z-100 fixed top-0 left-0 right-0 border-b border-l  shadow-md bg-gray-200 text-gray-700 flex justify-between items-center p-4 z-40",children:[a.jsx(l.default,{src:"/logo.png",alt:"Fintech Logo",width:100,height:100}),a.jsx("button",{onClick:s,className:"text-gray-700 focus:outline-none",children:e?a.jsx(n.G,{icon:i.QQm,size:"lg"}):a.jsx(n.G,{icon:i.xiG,size:"lg"})})]}),(0,a.jsxs)("div",{className:`${e?"translate-x-0":"-translate-x-full"} md:translate-x-0 transition-transform fixed md:relative top-0 left-0 h-screen overflow-hidden bg-gray-200 text-gray-700 w-52 p-4 z-40`,children:[a.jsx("div",{className:"rounded flex w-32 h-12 p-2 mt-2 mb-4",children:a.jsx(l.default,{src:"/logo.png",alt:"Fintech Logo",width:100,height:100})}),a.jsx("ul",{className:"space-y-2 pt-4 text-md px-2",children:d.map((e,t)=>(0,a.jsxs)("li",{className:`py-2 cursor-pointer ${m(e.route)}`,onClick:()=>h(e.route),children:[a.jsx(n.G,{icon:e.icon,className:"mr-2"})," ",e.label]},t))}),a.jsx("hr",{className:"h-0.5 bg-slate-300"}),(0,a.jsxs)("button",{className:"bg-black text-white font-semibold p-2 m-4 rounded-l-full rounded-br-full absolute bottom-0 left-0",children:[a.jsx(n.G,{icon:i.RLE,className:"mr-2"}),"Get Help"]})]}),e&&a.jsx("div",{className:"fixed inset-0 bg-black opacity-50 z-30 md:hidden",onClick:s}),a.jsx("div",{className:"fixed bottom-0 z-50 left-0 right-0 bg-gray-200 flex justify-around items-center p-2 md:hidden",children:d.map((e,t)=>a.jsx("button",{className:`text-gray-700 ${m(e.route)}`,onClick:()=>h(e.route),children:a.jsx(n.G,{icon:e.icon,size:"lg"})},t))})]})}},3783:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>a});let a=(0,s(8570).createProxy)(String.raw`C:\Users\HP\Desktop\finDash\finDash\app\(dashboard-pages)\financials\page.tsx#default`)},9321:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>i,metadata:()=>n});var a=s(9510);let r=(0,s(8570).createProxy)(String.raw`C:\Users\HP\Desktop\finDash\finDash\app\components\Sidebar.tsx#default`),n={title:"Fin Dashboard",description:"Automation for your growing business"};async function i({children:e}){return a.jsx(a.Fragment,{children:(0,a.jsxs)("div",{className:"flex flex-col md:flex-row h-full bg-gray-200 text-gray-800",children:[a.jsx("div",{className:"fixed w-fit z-50 border-l border border-gray-300",children:a.jsx(r,{})}),a.jsx("hr",{className:"h-0.5 bg-slate-300"}),(0,a.jsxs)("div",{className:"flex-grow md:ml-52 mt-6 md:mt-0 h-screen overflow-auto no-scrollbar",children:[e," "]})]})})}},1506:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>d,metadata:()=>o});var a=s(9510),r=s(7523),n=s.n(r),i=s(2298),l=s.n(i);s(7272);let o={title:"Create Next App",description:"Generated by create next app"};function d({children:e}){return a.jsx("html",{lang:"en",children:a.jsx("body",{className:`${n().variable} ${l().variable} antialiased`,children:e})})}},7481:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>r});var a=s(6621);let r=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,a.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]},7272:()=>{}};var t=require("../../../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),a=t.X(0,[948,936,79],()=>s(8872));module.exports=a})();