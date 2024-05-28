"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3729],{2777:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>h,frontMatter:()=>c,metadata:()=>i,toc:()=>l});var n=a(651),r=a(2844);const c={pagination_next:null,pagination_prev:null},s="Type alias: Matcher",i={id:"api/type-aliases/Matcher",title:"Type alias: Matcher",description:"Matcher: boolean \\| (date) => boolean \\| Date \\| Date] \\| [DateRange \\| DateBefore \\| DateAfter \\| DateInterval \\| DayOfWeek",source:"@site/docs/api/type-aliases/Matcher.md",sourceDirName:"api/type-aliases",slug:"/api/type-aliases/Matcher",permalink:"/next/api/type-aliases/Matcher",draft:!1,unlisted:!1,editUrl:"https://github.com/gpbl/react-day-picker/tree/main/website/docs/api/type-aliases/Matcher.md",tags:[],version:"current",frontMatter:{pagination_next:null,pagination_prev:null},sidebar:"api"},o={},l=[{value:"Source",id:"source",level:2}];function d(e){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"type-alias-matcher",children:"Type alias: Matcher"}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Matcher"}),": ",(0,n.jsx)(t.code,{children:"boolean"})," | (",(0,n.jsx)(t.code,{children:"date"}),") => ",(0,n.jsx)(t.code,{children:"boolean"})," | ",(0,n.jsx)(t.code,{children:"Date"})," | ",(0,n.jsx)(t.code,{children:"Date"}),"[] | ",(0,n.jsx)(t.a,{href:"/next/api/type-aliases/DateRange",children:(0,n.jsx)(t.code,{children:"DateRange"})})," | ",(0,n.jsx)(t.a,{href:"/next/api/type-aliases/DateBefore",children:(0,n.jsx)(t.code,{children:"DateBefore"})})," | ",(0,n.jsx)(t.a,{href:"/next/api/type-aliases/DateAfter",children:(0,n.jsx)(t.code,{children:"DateAfter"})})," | ",(0,n.jsx)(t.a,{href:"/next/api/type-aliases/DateInterval",children:(0,n.jsx)(t.code,{children:"DateInterval"})})," | ",(0,n.jsx)(t.a,{href:"/next/api/type-aliases/DayOfWeek",children:(0,n.jsx)(t.code,{children:"DayOfWeek"})})]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"A value or a function that matches a specific day."}),"\n",(0,n.jsxs)(t.p,{children:["Matchers are passed to DayPicker via ",(0,n.jsx)(t.a,{href:"/next/api/interfaces/PropsBase#disabled",children:"PropsBase.disabled"}),",\n[]] or [",(0,n.jsx)(t.a,{href:"/next/api/interfaces/PropsBase#hidden",children:"DayPickerProps.selected"})," and are used to\ndetermine if a day should get a Modifier."]}),"\n",(0,n.jsx)(t.p,{children:"Matchers can be of different types:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:"// will always match the day\nconst booleanMatcher: Matcher = true;\n\n// will match the today's date\nconst dateMatcher: Matcher = new Date();\n\n// will match the days in the array\nconst arrayMatcher: Matcher = [\n  new Date(2019, 1, 2),\n  new Date(2019, 1, 4)\n];\n\n// will match days after the 2nd of February 2019\nconst afterMatcher: DateAfter = { after: new Date(2019, 1, 2) };\n// will match days before the 2nd of February 2019 }\nconst beforeMatcher: DateBefore = { before: new Date(2019, 1, 2) };\n\n// will match Sundays\nconst dayOfWeekMatcher: DayOfWeek = {\n  dayOfWeek: 0\n};\n\n// will match the included days, except the two dates\nconst intervalMatcher: DateInterval = {\n  after: new Date(2019, 1, 2),\n  before: new Date(2019, 1, 5)\n};\n\n// will match the included days, including the two dates\nconst rangeMatcher: DateRange = {\n  from: new Date(2019, 1, 2),\n  to: new Date(2019, 1, 5)\n};\n\n// will match when the function return true\nconst functionMatcher: Matcher = (day: Date) => {\n  return day.getMonth() === 2; // match when month is March\n};\n"})}),"\n",(0,n.jsx)(t.h2,{id:"source",children:"Source"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://github.com/gpbl/react-day-picker/blob/94d53c7fb546bad877689734339912065e27c5d8/src/types.ts#L497",children:"src/types.ts:497"})})]})}function h(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},2844:(e,t,a)=>{a.d(t,{Z:()=>i,a:()=>s});var n=a(2379);const r={},c=n.createContext(r);function s(e){const t=n.useContext(c);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),n.createElement(c.Provider,{value:t},e.children)}}}]);