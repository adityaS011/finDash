(()=>{var e={};e.id=553,e.ids=[553],e.modules={2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},1017:e=>{"use strict";e.exports=require("path")},7310:e=>{"use strict";e.exports=require("url")},3010:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>i.a,__next_app__:()=>m,originalPathname:()=>x,pages:()=>c,routeModule:()=>p,tree:()=>d}),s(7757),s(9321),s(5866),s(1506);var r=s(3191),a=s(8716),n=s(7922),i=s.n(n),o=s(5231),l={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>o[e]);s.d(t,l);let d=["",{children:["(dashboard-pages)",{children:["payments",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,7757)),"C:\\Users\\HP\\Desktop\\finDash\\finDash\\app\\(dashboard-pages)\\payments\\page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(s.bind(s,9321)),"C:\\Users\\HP\\Desktop\\finDash\\finDash\\app\\(dashboard-pages)\\layout.tsx"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,5866,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,7481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(s.bind(s,1506)),"C:\\Users\\HP\\Desktop\\finDash\\finDash\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,5866,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,7481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["C:\\Users\\HP\\Desktop\\finDash\\finDash\\app\\(dashboard-pages)\\payments\\page.tsx"],x="/(dashboard-pages)/payments/page",m={require:s,loadChunk:()=>Promise.resolve()},p=new r.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/(dashboard-pages)/payments/page",pathname:"/payments",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},5700:(e,t,s)=>{Promise.resolve().then(s.bind(s,9027))},6589:(e,t,s)=>{Promise.resolve().then(s.bind(s,5883))},3564:(e,t,s)=>{Promise.resolve().then(s.t.bind(s,2994,23)),Promise.resolve().then(s.t.bind(s,6114,23)),Promise.resolve().then(s.t.bind(s,9727,23)),Promise.resolve().then(s.t.bind(s,9671,23)),Promise.resolve().then(s.t.bind(s,1868,23)),Promise.resolve().then(s.t.bind(s,4759,23))},6178:()=>{},9027:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>o});var r=s(326),a=s(3343),n=s(7577);let i=()=>Array.from({length:27},(e,t)=>({name:`Person ${t+1}`,category:`Category ${Math.ceil((t+1)/3)}`,pendingAmount:`$${(1e3*Math.random()+50).toFixed(2)}`})),o=()=>{let[e,t]=(0,n.useState)([]);(0,n.useEffect)(()=>{t(i())},[]);let[s,o]=(0,n.useState)(1),l=Math.ceil(e.length/10),d=e.slice((s-1)*10,10*s);return(0,r.jsxs)("div",{className:"px-4 md:px-12 pt-8 pb-10 w-full bg-gray-200 min-h-screen",children:[r.jsx("h1",{className:"text-center text-3xl font-bold p-4 text-[#065f46]",children:"Payments"}),r.jsx("div",{className:"overflow-x-auto shadow-lg rounded-lg",children:(0,r.jsxs)("table",{className:"min-w-full bg-white",children:[r.jsx("thead",{children:(0,r.jsxs)("tr",{children:[r.jsx("th",{className:"px-6 py-3 border-b-2 border-gray-200 bg-green-600 text-left text-xs font-semibold text-white uppercase tracking-wider",children:"Name"}),r.jsx("th",{className:"px-6 py-3 border-b-2 border-gray-200 bg-green-600 text-left text-xs font-semibold text-white uppercase tracking-wider",children:"Expense Category"}),r.jsx("th",{className:"px-6 py-3 border-b-2 border-gray-200 bg-green-600 text-left text-xs font-semibold text-white uppercase tracking-wider",children:"Pending Amount"}),r.jsx("th",{className:"px-6 py-3 border-b-2 border-gray-200 bg-green-600 text-left text-xs font-semibold text-white uppercase tracking-wider",children:"Action"})]})}),r.jsx("tbody",{className:"bg-white",children:d.map((e,t)=>(0,r.jsxs)("tr",{className:"hover:bg-green-50",children:[r.jsx("td",{className:"px-6 py-4 border-b border-gray-200 text-sm font-medium text-gray-900",children:e.name}),r.jsx("td",{className:"px-6 py-4 border-b border-gray-200 text-sm text-gray-600",children:e.category}),r.jsx("td",{className:"px-6 py-4 border-b border-gray-200 text-sm text-gray-600",children:e.pendingAmount}),r.jsx("td",{className:"px-6 py-4 border-b border-gray-200 text-sm",children:r.jsx("button",{className:"bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg",children:"Payment"})})]},t))})]})}),r.jsx(a.Z,{currentPage:s,totalPages:l,onPrevious:()=>{s>1&&o(s-1)},onNext:()=>{s<l&&o(s+1)}})]})}},3343:(e,t,s)=>{"use strict";s.d(t,{Z:()=>a});var r=s(326);s(7577);let a=({currentPage:e,totalPages:t,onPrevious:s,onNext:a})=>(0,r.jsxs)("div",{className:"flex justify-between items-center mt-4 px-4",children:[r.jsx("button",{onClick:s,disabled:1===e,className:`bg-green-500 text-white font-semibold py-2 px-4 rounded-lg ${1===e?"opacity-50 cursor-not-allowed":"hover:bg-green-600"}`,children:"Previous"}),(0,r.jsxs)("span",{className:"text-gray-700",children:["Page ",e," of ",t]}),r.jsx("button",{onClick:a,disabled:e===t,className:`bg-green-500 text-white font-semibold py-2 px-4 rounded-lg ${e===t?"opacity-50 cursor-not-allowed":"hover:bg-green-600"}`,children:"Next"})]})},5883:(e,t,s)=>{"use strict";s.d(t,{default:()=>c});var r=s(326),a=s(5047),n=s(9497),i=s(3440),o=s(6226),l=s(7577);let d=[{icon:i.J9Y,label:"Home",route:"/"},{icon:i.qO$,label:"Timelines",route:"/timelines"},{icon:i.aj4,label:"Payments",route:"/payments"},{icon:i.hVn,label:"Directory",route:"/directory"},{icon:i.oFW,label:"Financials",route:"/financials"},{icon:i.b7W,label:"Settings",route:"/settings"}],c=()=>{let[e,t]=(0,l.useState)(!1),s=()=>{t(!e)},c=(0,a.useRouter)(),x=(0,a.usePathname)(),m=e=>{c.push(e)},p=e=>x===e||"/"===x&&"/"===e?"text-green-500":"text-gray-700";return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:"md:hidden z-100 fixed top-0 left-0 right-0 border-b border-l  shadow-md bg-gray-200 text-gray-700 flex justify-between items-center p-4 z-40",children:[r.jsx(o.default,{src:"/logo.png",alt:"Fintech Logo",width:100,height:100}),r.jsx("button",{onClick:s,className:"text-gray-700 focus:outline-none",children:e?r.jsx(n.G,{icon:i.QQm,size:"lg"}):r.jsx(n.G,{icon:i.xiG,size:"lg"})})]}),(0,r.jsxs)("div",{className:`${e?"translate-x-0":"-translate-x-full"} md:translate-x-0 transition-transform fixed md:relative top-0 left-0 h-screen overflow-hidden bg-gray-200 text-gray-700 w-52 p-4 z-40`,children:[r.jsx("div",{className:"rounded flex w-32 h-12 p-2 mt-2 mb-4",children:r.jsx(o.default,{src:"/logo.png",alt:"Fintech Logo",width:100,height:100})}),r.jsx("ul",{className:"space-y-2 pt-4 text-md px-2",children:d.map((e,t)=>(0,r.jsxs)("li",{className:`py-2 cursor-pointer ${p(e.route)}`,onClick:()=>m(e.route),children:[r.jsx(n.G,{icon:e.icon,className:"mr-2"})," ",e.label]},t))}),r.jsx("hr",{className:"h-0.5 bg-slate-300"}),(0,r.jsxs)("button",{className:"bg-black text-white font-semibold p-2 m-4 rounded-l-full rounded-br-full absolute bottom-0 left-0",children:[r.jsx(n.G,{icon:i.RLE,className:"mr-2"}),"Get Help"]})]}),e&&r.jsx("div",{className:"fixed inset-0 bg-black opacity-50 z-30 md:hidden",onClick:s}),r.jsx("div",{className:"fixed bottom-0 z-50 left-0 right-0 bg-gray-200 flex justify-around items-center p-2 md:hidden",children:d.map((e,t)=>r.jsx("button",{className:`text-gray-700 ${p(e.route)}`,onClick:()=>m(e.route),children:r.jsx(n.G,{icon:e.icon,size:"lg"})},t))})]})}},9321:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>i,metadata:()=>n});var r=s(9510);let a=(0,s(8570).createProxy)(String.raw`C:\Users\HP\Desktop\finDash\finDash\app\components\Sidebar.tsx#default`),n={title:"Fin Dashboard",description:"Automation for your growing business"};async function i({children:e}){return r.jsx(r.Fragment,{children:(0,r.jsxs)("div",{className:"flex flex-col md:flex-row h-full bg-gray-200 text-gray-800",children:[r.jsx("div",{className:"fixed w-fit z-50 border-l border border-gray-300",children:r.jsx(a,{})}),r.jsx("hr",{className:"h-0.5 bg-slate-300"}),(0,r.jsxs)("div",{className:"flex-grow md:ml-52 mt-6 md:mt-0 h-screen overflow-auto no-scrollbar",children:[e," "]})]})})}},7757:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>r});let r=(0,s(8570).createProxy)(String.raw`C:\Users\HP\Desktop\finDash\finDash\app\(dashboard-pages)\payments\page.tsx#default`)},1506:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>d,metadata:()=>l});var r=s(9510),a=s(7523),n=s.n(a),i=s(2298),o=s.n(i);s(7272);let l={title:"Create Next App",description:"Generated by create next app"};function d({children:e}){return r.jsx("html",{lang:"en",children:r.jsx("body",{className:`${n().variable} ${o().variable} antialiased`,children:e})})}},7481:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>a});var r=s(6621);let a=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,r.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]},7272:()=>{}};var t=require("../../../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),r=t.X(0,[948,936,79],()=>s(3010));module.exports=r})();