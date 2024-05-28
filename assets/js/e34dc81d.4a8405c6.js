"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8363],{2153:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>d,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>h});var i=t(651),o=t(2844);const r={sidebar_position:4},d="Months Navigation",s={id:"using-daypicker/navigation",title:"Months Navigation",description:"Default Month",source:"@site/versioned_docs/version-8.10.1/using-daypicker/navigation.mdx",sourceDirName:"using-daypicker",slug:"/using-daypicker/navigation",permalink:"/using-daypicker/navigation",draft:!1,unlisted:!1,editUrl:"https://github.com/gpbl/react-day-picker/tree/main/website/versioned_docs/version-8.10.1/using-daypicker/navigation.mdx",tags:[],version:"8.10.1",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"docs",previous:{title:"Customization",permalink:"/using-daypicker/customization"},next:{title:"Selection Modes",permalink:"/using-daypicker/selection-modes"}},a={},h=[{value:"Default Month",id:"default-month",level:2},{value:"Controlling the Month",id:"controlling-the-month",level:2},{value:"&quot;Today&quot; Button",id:"today-button",level:3},{value:"Navigation Between Dates",id:"navigation-between-dates",level:2},{value:"Disabling Navigation",id:"disabling-navigation",level:2}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components},{BrowserWindow:t,ExamplesV8:r}=n;return t||x("BrowserWindow",!0),r||x("ExamplesV8",!1),r.Controlled||x("ExamplesV8.Controlled",!0),r.DefaultMonth||x("ExamplesV8.DefaultMonth",!0),r.DisableNavigation||x("ExamplesV8.DisableNavigation",!0),r.FromToYear||x("ExamplesV8.FromToYear",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"months-navigation",children:"Months Navigation"}),"\n",(0,i.jsx)(n.h2,{id:"default-month",children:"Default Month"}),"\n",(0,i.jsxs)(n.p,{children:["As default, DayPicker renders the current month. You can change the default month by setting the ",(0,i.jsx)(n.code,{children:"defaultMonth"})," prop to a specific date."]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Prop Name"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"defaultMonth"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"Date"})}),(0,i.jsx)(n.td,{children:"The initial month to show in the calendar. Default is the current month."})]})})]}),"\n",(0,i.jsx)(n.p,{children:"For example, to render a calendar starting from September 1979:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:"<DayPicker defaultMonth={new Date(1979, 8)} />\n"})}),"\n",(0,i.jsx)(t,{children:(0,i.jsx)(r.DefaultMonth,{})}),"\n",(0,i.jsx)(n.h2,{id:"controlling-the-month",children:"Controlling the Month"}),"\n",(0,i.jsxs)(n.p,{children:["To programmatically control the month displayed when navigating, use the ",(0,i.jsx)(n.code,{children:"month"})," and ",(0,i.jsx)(n.code,{children:"onMonthChange"})," props."]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Prop Name"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"month"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"Date"})}),(0,i.jsx)(n.td,{children:"The month displayed in the calendar."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"onMonthChange"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"/api/type-aliases/MonthChangeEventHandler",children:(0,i.jsx)(n.code,{children:"MonthChangeEventHandler"})})}),(0,i.jsx)(n.td,{children:"Callback when the month change."})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"today-button",children:'"Today" Button'}),"\n",(0,i.jsxs)(n.p,{children:["For example, to implement a ",(0,i.jsx)("strong",{children:"Go to Today"})," button, set ",(0,i.jsx)(n.code,{children:"month"})," to the current date when the button is clicked."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:'import { useState } from "react";\n\nimport { addMonths } from "date-fns";\nimport { DayPicker } from "react-day-picker";\n\nexport function Controlled() {\n  const today = new Date();\n  const nextMonth = addMonths(today, 1);\n\n  const [month, setMonth] = useState(nextMonth);\n\n  return (\n    <>\n      <DayPicker month={month} onMonthChange={setMonth} />\n      <button onClick={() => setMonth(today)}>Go to Today</button>\n    </>\n  );\n}\n'})}),"\n",(0,i.jsx)(t,{children:(0,i.jsx)(r.Controlled,{})}),"\n",(0,i.jsx)(n.h2,{id:"navigation-between-dates",children:"Navigation Between Dates"}),"\n",(0,i.jsxs)(n.p,{children:["Limit the dates the user can navigate to by using the ",(0,i.jsx)(n.code,{children:"from*"}),", ",(0,i.jsx)(n.code,{children:"to*"})," props."]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Prop Name"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"fromYear"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"number"})}),(0,i.jsx)(n.td,{children:"The earliest year to start the navigation."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"toYear"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"number"})}),(0,i.jsx)(n.td,{children:"The latest year to start the navigation."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"fromMonth"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"Date"})}),(0,i.jsx)(n.td,{children:"The earliest month to start the navigation."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"toMonth"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"Date"})}),(0,i.jsx)(n.td,{children:"The latest month to end the navigation."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"fromDate"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"Date"})}),(0,i.jsx)(n.td,{children:"The earliest day to start the navigation."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"toDate"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"Date"})}),(0,i.jsx)(n.td,{children:"The latest day to end the navigation."})]})]})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:"<DayPicker defaultMonth={new Date(2024, 0)} fromYear={2024} toYear={2026} />\n"})}),"\n",(0,i.jsx)(t,{children:(0,i.jsx)(r.FromToYear,{})}),"\n",(0,i.jsx)(n.h2,{id:"disabling-navigation",children:"Disabling Navigation"}),"\n",(0,i.jsxs)(n.p,{children:["To prevent the user from navigating between months, set the ",(0,i.jsx)(n.code,{children:"disableNavigation"})," prop to ",(0,i.jsx)(n.code,{children:"true"}),"."]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Prop Name"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"disableNavigation"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"boolean"})}),(0,i.jsx)(n.td,{children:"Disable the navigation between months."})]})})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:"<DayPicker disableNavigation />\n"})}),"\n",(0,i.jsx)(t,{children:(0,i.jsx)(r.DisableNavigation,{})})]})}function c(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}function x(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},2844:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>d});var i=t(2379);const o={},r=i.createContext(o);function d(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:d(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);