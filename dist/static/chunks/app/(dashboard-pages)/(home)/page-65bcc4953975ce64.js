(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[139],{5903:function(e,s,t){Promise.resolve().then(t.bind(t,3717)),Promise.resolve().then(t.bind(t,2850))},3717:function(e,s,t){"use strict";var l=t(7437),a=t(2265),r=t(6920),n=t(5079),c=t(6648);s.default=e=>{let{mainAccounts:s}=e,[t,i]=(0,a.useState)(null),[x,d]=(0,a.useState)({menuSidebar:!0,businessSection:!0,graph:!0,graphHover:!0,dropdownAccount:!1}),o=e=>{d(s=>({...s,[e]:!s[e]}))},m=e=>{t===e?i(null):i(e)};return(0,l.jsxs)("div",{className:"w-full gap-4 px-3  flex flex-row md:flex-col md:w-fit",children:[(0,l.jsxs)("div",{className:"bg-white px-4 py-3 rounded-lg border-1 h-fit w-fit md:w-56 shadow-lg",children:[(0,l.jsx)("h2",{className:"text-lg px-2 pt-2 font-semibold",children:"Your Accounts"}),(0,l.jsx)("div",{className:"flex flex-col py-3  mt-2 w-fit ",children:s.map(e=>(0,l.jsxs)("div",{children:[(0,l.jsxs)("div",{className:"flex flex-row gap-0 w-fit px-2 ",children:[(0,l.jsx)(c.default,{src:"/user.png",alt:"User",width:100,height:100,className:"w-fit h-8 p-0 rounded-full "}),(0,l.jsx)(c.default,{src:"/user.png",alt:"User",width:100,height:100,className:"w-fit p-0 -ml-7 h-8 rounded-full "}),(0,l.jsx)(c.default,{src:"/user.png",alt:"User",width:100,height:100,className:"w-fit p-0 -ml-7 h-8 rounded-full  "}),(0,l.jsxs)("div",{className:"pl-4 ",children:[(0,l.jsxs)("p",{className:"text-xs text-gray-500 flex cursor-pointer",onClick:()=>m(e.id),children:["Bank Balance",(0,l.jsx)(r.G,{icon:t===e.id?n.FPD:n.gc2,className:"text-gray-400 pt-1 pl-1 w-2"})]}),(0,l.jsxs)("p",{className:"text-2xl font-bold",children:["$",e.bankBalance.toLocaleString()]})]})]}),t===e.id&&(0,l.jsxs)("div",{className:"flex flex-col",children:[(0,l.jsxs)("div",{className:"flex flex-row w-full items-center justify-between gap-2",children:[(0,l.jsx)("p",{className:"text-xs text-gray-700 ",children:"Credit Amount"}),(0,l.jsxs)("div",{className:"flex",children:[(0,l.jsx)(r.G,{icon:n.FPD,className:"text-green-500 pt-1 px-1 text-xl"}),(0,l.jsx)("p",{className:"text-xl",children:"$500"})]})]}),(0,l.jsxs)("div",{className:"flex flex-row w-full items-center justify-between gap-2",children:[(0,l.jsx)("p",{className:"text-xs text-gray-700 ",children:"Debit Amount"}),(0,l.jsxs)("div",{className:"flex",children:[(0,l.jsx)(r.G,{icon:n.r5q,className:"text-red-500 px-1 pt-1 text-xl"}),(0,l.jsx)("p",{className:"text-xl",children:"$500"})]})]})]})]},e.id))})]}),(0,l.jsxs)("div",{className:"text-xl bg-white px-4 py-3 rounded-lg border-1 shadow-lg font-semibold",children:["Assignment Tasks",(0,l.jsxs)("div",{className:"mt-6 flex items-center cursor-pointer",onClick:()=>o("menuSidebar"),children:[(0,l.jsx)(r.G,{icon:x.menuSidebar?n.a3n:n.pL1,className:"mr-2 ".concat(x.menuSidebar?"text-green-500":"text-gray-400")}),(0,l.jsx)("p",{className:"text-sm",children:"Menu/SideBar"})]}),(0,l.jsxs)("div",{className:"mt-3 flex items-center cursor-pointer",onClick:()=>o("businessSection"),children:[(0,l.jsx)(r.G,{icon:x.businessSection?n.a3n:n.pL1,className:"mr-2 ".concat(x.businessSection?"text-green-500":"text-gray-400")}),(0,l.jsx)("p",{className:"text-sm",children:"Account/Business Section"})]}),(0,l.jsxs)("div",{className:"mt-3 flex items-center cursor-pointer",onClick:()=>o("graph"),children:[(0,l.jsx)(r.G,{icon:x.graph?n.a3n:n.pL1,className:"mr-2 ".concat(x.graph?"text-green-500":"text-gray-400")}),(0,l.jsx)("p",{className:"text-sm",children:"Graph"})]}),(0,l.jsxs)("div",{className:"mt-3 flex items-center cursor-pointer",onClick:()=>o("graphHover"),children:[(0,l.jsx)(r.G,{icon:x.graphHover?n.a3n:n.pL1,className:"mr-2 ".concat(x.graphHover?"text-green-500":"text-gray-300")}),(0,l.jsx)("p",{className:"text-sm",children:"Graph Hover"})]}),(0,l.jsxs)("div",{className:"mt-3 flex items-center cursor-pointer",onClick:()=>o("dropdownAccount"),children:[(0,l.jsx)(r.G,{icon:x.dropdownAccount?n.a3n:n.pL1,className:"mr-2 ".concat(x.dropdownAccount?"text-green-500":"text-gray-300")}),(0,l.jsx)("p",{className:"text-sm",children:"Dropdown on Account"})]})]})]})}},2850:function(e,s,t){"use strict";t.d(s,{default:function(){return x}});var l=t(7437),a=t(2265),r=t(6920),n=t(5079),c=t(433),i=e=>{let{financialData:s}=e,t=(0,a.useRef)(null),r=(0,a.useRef)(null),[n,i]=(0,a.useState)(null),[x,d]=(0,a.useState)({credit:0,debit:0,profit:0,loss:0});(0,a.useEffect)(()=>{if(r.current&&r.current.destroy(),t.current){let e=t.current.getContext("2d");e&&(r.current=new c.ZP(e,{type:"line",data:{labels:s.map(()=>""),datasets:[{data:[...s.map(e=>e.value),s[s.length-1].value],fill:{target:"start",above:"rgb(96, 195, 90, 0.4)"},borderColor:"rgb(96, 195, 90)",borderWidth:3,tension:.2,pointRadius:e=>e.dataIndex===s.length-1?4:0,pointBackgroundColor:"rgb(96, 195, 90)",pointStyle:"circle"}]},options:{plugins:{legend:{display:!1},tooltip:{enabled:!1}},scales:{x:{display:!0,grid:{display:!1}},y:{display:!0,grid:{display:!1},ticks:{display:!1}}}}}),t.current.addEventListener("mousemove",o),t.current.addEventListener("mouseleave",m))}return()=>{t.current&&(t.current.removeEventListener("mousemove",o),t.current.removeEventListener("mouseleave",m))}},[s]);let o=e=>{if(t.current){var l;let a=t.current.getBoundingClientRect(),n=e.clientX-a.left;i({x:n,y:e.clientY-a.top});let c=null===(l=r.current)||void 0===l?void 0:l.scales.x.getValueForPixel(n);if(null!=c){let e=s[c];d({credit:.2*e.value,debit:.3*e.value,profit:.4*e.value,loss:.1*e.value})}}},m=()=>{i(null)};return(0,l.jsxs)("div",{className:"relative text-xs  pt-6 ",style:{height:"150px"},children:[n?(0,l.jsx)("div",{className:"absolute w-24 z-50 bg-black text-white border border-gray-200 p-2 rounded-r-lg rounded-bl-xl",style:{top:n.y+10,left:n.x+10},children:(0,l.jsxs)("div",{className:"relative z-50",children:[(0,l.jsx)("div",{className:"absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-b-3 border-solid border-black border-transparent"}),(0,l.jsxs)("div",{children:[(0,l.jsxs)("div",{className:"flex justify-between",children:[(0,l.jsx)("p",{className:"text-xs",children:"Credit:"}),(0,l.jsxs)("p",{className:"text-xs text-blue-500",children:["$",x.credit.toFixed(2)]})]}),(0,l.jsxs)("div",{className:"flex justify-between",children:[(0,l.jsx)("p",{className:"text-xs",children:"Debit:"}),(0,l.jsxs)("p",{className:"text-xs text-yellow-500",children:["$",x.debit.toFixed(2)]})]}),(0,l.jsx)("hr",{className:"h-0.5 bg-slate-400 my-1"}),(0,l.jsxs)("div",{className:"flex justify-between",children:[(0,l.jsx)("p",{className:"text-xs",children:"Profit:"}),(0,l.jsxs)("p",{className:"text-xs text-green-500",children:["$",x.profit.toFixed(2)]})]}),(0,l.jsxs)("div",{className:"flex justify-between",children:[(0,l.jsx)("p",{className:"text-xs",children:"Loss:"}),(0,l.jsxs)("p",{className:"text-xs text-red-500",children:["$",x.loss.toFixed(2)]})]})]})]})}):null,(0,l.jsx)("canvas",{ref:t})]})},x=e=>{let{financialData:s}=e;return(0,l.jsxs)("div",{className:"p-3  flex flex-col",children:[(0,l.jsxs)("div",{className:"w-full  p-4",children:[(0,l.jsx)("h2",{className:"text-lg font-semibold",children:"Your Business"}),(0,l.jsxs)("p",{className:"text-xs font-semibold text-gray-500 pt-2 flex items-center",children:["Income (2023)",(0,l.jsx)(r.G,{icon:n.sqG,className:"ml-1 text-sm"})]}),(0,l.jsxs)("p",{className:"text-2xl font-bold mb-1 flex items-center",children:["$352,537",(0,l.jsx)(r.G,{icon:n.FPD,className:"text-green-500 text-sm ml-2 transform rotate-45"}),(0,l.jsx)("b",{className:"text-xs text-green-500 ml-1",children:"4.56%"})]}),(0,l.jsx)(i,{financialData:s}),(0,l.jsx)("div",{className:"pb-3 space-y-2",children:[{text:"Sales of Product Income",financialTerm:"$200,000",percentage:60},{text:"Fees Billed",financialTerm:"$100,000",percentage:30},{text:"Design Income",financialTerm:"$50,000",percentage:20},{text:"Other Income",financialTerm:"$15,000",percentage:5},{text:"Billable Expense Income",financialTerm:"$0.5",percentage:.5}].map((e,s)=>(0,l.jsxs)("div",{className:"relative",children:[(0,l.jsx)("p",{className:"text-xs absolute px-3 left-0 z-10",children:e.text}),(0,l.jsx)("p",{className:"text-xs absolute px-3 right-0 z-10",children:e.financialTerm}),(0,l.jsx)("div",{className:"bg-gray-200 h-4 rounded-lg overflow-hidden relative mt-2",children:(0,l.jsx)("div",{className:"bg-green-300 h-full rounded-lg absolute top-0 left-0",style:{width:"".concat(e.percentage,"%")}})})]},s))}),(0,l.jsx)("div",{className:"flex justify-end",children:(0,l.jsxs)("p",{className:"text-sm font-semibold text-blue-600",children:["View all",(0,l.jsx)(r.G,{icon:n.JYN,className:"ml-1"})]})})]}),(0,l.jsxs)("div",{className:"w-full  p-4",children:[(0,l.jsx)("hr",{className:"h-0.5 bg-slate-300 mb-4"}),(0,l.jsxs)("p",{className:"text-xs font-semibold text-gray-500 pt-2 flex items-center",children:["Assets (as of Sep 2023)",(0,l.jsx)(r.G,{icon:n.sqG,className:"ml-1 text-sm"})]}),(0,l.jsxs)("p",{className:"text-2xl font-bold flex items-center",children:["$486,707",(0,l.jsx)(r.G,{icon:n.FPD,className:"text-green-500 text-sm ml-2 transform rotate-45"}),(0,l.jsx)("b",{className:"text-xs text-green-500 ml-1",children:"156%"})]}),(0,l.jsxs)("p",{className:"text-xs font-semibold text-gray-500 mb-3",children:["As of Sep 2022 ",(0,l.jsx)("b",{className:"text-red-500",children:"-$271,043"})]})]})]})}}},function(e){e.O(0,[676,674,234,582,971,23,744],function(){return e(e.s=5903)}),_N_E=e.O()}]);