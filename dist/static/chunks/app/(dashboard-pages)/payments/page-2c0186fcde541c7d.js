(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[553],{3165:function(e,t,r){Promise.resolve().then(r.bind(r,4597))},4597:function(e,t,r){"use strict";r.r(t);var s=r(7437),n=r(6419),a=r(2265);let o=()=>Array.from({length:27},(e,t)=>({name:"Person ".concat(t+1),category:"Category ".concat(Math.ceil((t+1)/3)),pendingAmount:"$".concat((1e3*Math.random()+50).toFixed(2))}));t.default=()=>{let[e,t]=(0,a.useState)([]);(0,a.useEffect)(()=>{t(o())},[]);let[r,l]=(0,a.useState)(1),c=Math.ceil(e.length/10),d=e.slice((r-1)*10,10*r);return(0,s.jsxs)("div",{className:"px-4 md:px-12 pt-8 pb-10 w-full bg-gray-200 min-h-screen",children:[(0,s.jsx)("h1",{className:"text-center text-3xl font-bold p-4 text-[#065f46]",children:"Payments"}),(0,s.jsx)("div",{className:"overflow-x-auto shadow-lg rounded-lg",children:(0,s.jsxs)("table",{className:"min-w-full bg-white",children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{className:"px-6 py-3 border-b-2 border-gray-200 bg-green-600 text-left text-xs font-semibold text-white uppercase tracking-wider",children:"Name"}),(0,s.jsx)("th",{className:"px-6 py-3 border-b-2 border-gray-200 bg-green-600 text-left text-xs font-semibold text-white uppercase tracking-wider",children:"Expense Category"}),(0,s.jsx)("th",{className:"px-6 py-3 border-b-2 border-gray-200 bg-green-600 text-left text-xs font-semibold text-white uppercase tracking-wider",children:"Pending Amount"}),(0,s.jsx)("th",{className:"px-6 py-3 border-b-2 border-gray-200 bg-green-600 text-left text-xs font-semibold text-white uppercase tracking-wider",children:"Action"})]})}),(0,s.jsx)("tbody",{className:"bg-white",children:d.map((e,t)=>(0,s.jsxs)("tr",{className:"hover:bg-green-50",children:[(0,s.jsx)("td",{className:"px-6 py-4 border-b border-gray-200 text-sm font-medium text-gray-900",children:e.name}),(0,s.jsx)("td",{className:"px-6 py-4 border-b border-gray-200 text-sm text-gray-600",children:e.category}),(0,s.jsx)("td",{className:"px-6 py-4 border-b border-gray-200 text-sm text-gray-600",children:e.pendingAmount}),(0,s.jsx)("td",{className:"px-6 py-4 border-b border-gray-200 text-sm",children:(0,s.jsx)("button",{className:"bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg",children:"Payment"})})]},t))})]})}),(0,s.jsx)(n.Z,{currentPage:r,totalPages:c,onPrevious:()=>{r>1&&l(r-1)},onNext:()=>{r<c&&l(r+1)}})]})}},6419:function(e,t,r){"use strict";var s=r(7437);r(2265),t.Z=e=>{let{currentPage:t,totalPages:r,onPrevious:n,onNext:a}=e;return(0,s.jsxs)("div",{className:"flex justify-between items-center mt-4 px-4",children:[(0,s.jsx)("button",{onClick:n,disabled:1===t,className:"bg-green-500 text-white font-semibold py-2 px-4 rounded-lg ".concat(1===t?"opacity-50 cursor-not-allowed":"hover:bg-green-600"),children:"Previous"}),(0,s.jsxs)("span",{className:"text-gray-700",children:["Page ",t," of ",r]}),(0,s.jsx)("button",{onClick:a,disabled:t===r,className:"bg-green-500 text-white font-semibold py-2 px-4 rounded-lg ".concat(t===r?"opacity-50 cursor-not-allowed":"hover:bg-green-600"),children:"Next"})]})}}},function(e){e.O(0,[971,23,744],function(){return e(e.s=3165)}),_N_E=e.O()}]);