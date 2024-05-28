"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4711],{1060:(e,i,s)=>{s.r(i),s.d(i,{assets:()=>a,contentTitle:()=>t,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var d=s(651),n=s(2844);const o={sidebar_position:3},t="Custom Modifiers",r={id:"advanced-guides/custom-modifiers",title:"Custom Modifiers",description:"This documentation is still a work in progress. If you have any questions, ask to the discussions page on Github.",source:"@site/versioned_docs/version-8.10.1/advanced-guides/custom-modifiers.mdx",sourceDirName:"advanced-guides",slug:"/advanced-guides/custom-modifiers",permalink:"/advanced-guides/custom-modifiers",draft:!1,unlisted:!1,editUrl:"https://github.com/gpbl/react-day-picker/tree/main/website/versioned_docs/version-8.10.1/advanced-guides/custom-modifiers.mdx",tags:[],version:"8.10.1",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"docs",previous:{title:"Custom Selections",permalink:"/advanced-guides/custom-selections"},next:{title:"Custom Components",permalink:"/advanced-guides/custom-components"}},a={},c=[{value:"Understanding Modifiers",id:"understanding-modifiers",level:3},{value:"The <code>selected</code> Modifier",id:"the-selected-modifier",level:2},{value:"Disabling Days",id:"disabling-days",level:2},{value:"Hidden days",id:"hidden-days",level:2},{value:"The <code>today</code> Modifier",id:"the-today-modifier",level:2},{value:"Custom Modifiers",id:"custom-modifiers",level:2},{value:"Styling Modifiers",id:"styling-modifiers",level:2}];function l(e){const i={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,n.a)(),...e.components},{BrowserWindow:s,ExamplesV8:o}=i;return s||m("BrowserWindow",!0),o||m("ExamplesV8",!1),o.ModifiersCustom||m("ExamplesV8.ModifiersCustom",!0),o.ModifiersDisabled||m("ExamplesV8.ModifiersDisabled",!0),o.ModifiersHidden||m("ExamplesV8.ModifiersHidden",!0),o.ModifiersToday||m("ExamplesV8.ModifiersToday",!0),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(i.h1,{id:"custom-modifiers",children:"Custom Modifiers"}),"\n",(0,d.jsx)(i.admonition,{title:"Draft",type:"info",children:(0,d.jsxs)(i.p,{children:["This documentation is still a work in progress. If you have any questions, ask to the ",(0,d.jsx)(i.a,{href:"https://github.com/gpbl/react-day-picker/discussions",children:"discussions"})," page on Github."]})}),"\n",(0,d.jsx)(i.h1,{id:"modifiers",children:"Modifiers"}),"\n",(0,d.jsxs)(i.p,{children:["In DayPicker, a ",(0,d.jsx)(i.strong,{children:"modifier"})," is added to a day when the day matches a specific condition, called ",(0,d.jsx)(i.a,{href:"/api/type-aliases/Matcher",children:(0,d.jsx)(i.code,{children:"Matcher"})}),". For example, selected days have the ",(0,d.jsx)(i.code,{children:"selected"})," modifiers, disabled days the ",(0,d.jsx)(i.code,{children:"disabled"})," modifier, the today's date matches the ",(0,d.jsx)(i.code,{children:"today"})," modifier, etc."]}),"\n",(0,d.jsx)(i.pre,{children:(0,d.jsx)(i.code,{className:"language-tsx",children:"<DayPicker selected={new Date()} />\n<DayPicker disabled={new Date()} />\n<DayPicker hidden={new Date()} />\n"})}),"\n",(0,d.jsx)(i.h3,{id:"understanding-modifiers",children:"Understanding Modifiers"}),"\n",(0,d.jsxs)(i.ul,{children:["\n",(0,d.jsx)(i.li,{children:"Use modifiers to change the appearance of the days in the calendar or to inspect the days the user has interacted with (e.g. picking a day)"}),"\n",(0,d.jsxs)(i.li,{children:["DayPicker comes with some pre-built modifiers, such as ",(0,d.jsx)(i.code,{children:"disabled"}),", ",(0,d.jsx)(i.code,{children:"selected"}),", ",(0,d.jsx)(i.code,{children:"hidden"}),", ",(0,d.jsx)(i.code,{children:"today"}),", ",(0,d.jsx)(i.code,{children:"range_start"}),", etc. designed to cover the most common use cases. See the ",(0,d.jsx)(i.a,{href:"/api/type-aliases/InternalModifiers",children:"InternalModifiers"})," for a list of the internal modifiers."]}),"\n",(0,d.jsxs)(i.li,{children:["It is possible to implement custom modifiers, extending the behavior of DayPicker: see ",(0,d.jsx)(i.a,{href:"#custom-modifiers",children:"Custom Modifiers"})," below for more details."]}),"\n"]}),"\n",(0,d.jsxs)(i.h2,{id:"the-selected-modifier",children:["The ",(0,d.jsx)(i.code,{children:"selected"})," Modifier"]}),"\n",(0,d.jsx)(i.pre,{children:(0,d.jsx)(i.code,{className:"language-tsx",children:"<DayPicker selected={new Date()} />\n"})}),"\n",(0,d.jsxs)(i.p,{children:["When in selection mode, use the ",(0,d.jsx)(i.code,{children:"selected"})," prop to add the ",(0,d.jsx)(i.code,{children:"selected"})," modifier to the selected dates, and style them accordingly. To see how to implement the ",(0,d.jsx)(i.code,{children:"selected"})," modifier, see the ",(0,d.jsx)(i.a,{href:"/using-daypicker/selection-modes",children:"Selecting days guide"}),"."]}),"\n",(0,d.jsx)(i.h2,{id:"disabling-days",children:"Disabling Days"}),"\n",(0,d.jsxs)(i.p,{children:["Use the ",(0,d.jsx)(i.code,{children:"disabled"})," modifier to disable one or more days. Pass a ",(0,d.jsx)(i.a,{href:"/api/type-aliases/Matcher",children:(0,d.jsx)(i.code,{children:"Matcher"})})," or an array of ",(0,d.jsx)(i.code,{children:"Matchers"})," to choose the disabled days:"]}),"\n",(0,d.jsx)(i.pre,{children:(0,d.jsx)(i.code,{className:"language-tsx",children:"// Disable Sundays and Saturdays\n<DayPicker disabled={{ dayOfWeek: [0, 6] }} />\n"})}),"\n",(0,d.jsx)(s,{children:(0,d.jsx)(o.ModifiersDisabled,{})}),"\n",(0,d.jsx)(i.h2,{id:"hidden-days",children:"Hidden days"}),"\n",(0,d.jsxs)(i.p,{children:["The ",(0,d.jsx)(i.code,{children:"hidden"})," modifier removes the day from the calendar. Set the hidden days using the ",(0,d.jsx)(i.code,{children:"hidden"})," prop."]}),"\n",(0,d.jsx)(i.pre,{children:(0,d.jsx)(i.code,{className:"language-tsx",children:"const hiddenDays = [\n  new Date(2022, 5, 10),\n  new Date(2022, 5, 20),\n  new Date(2022, 5, 11)\n];\n\n<DayPicker defaultMonth={hiddenDays[0]} hidden={hiddenDays} />;\n"})}),"\n",(0,d.jsx)(s,{children:(0,d.jsx)(o.ModifiersHidden,{})}),"\n",(0,d.jsxs)(i.h2,{id:"the-today-modifier",children:["The ",(0,d.jsx)(i.code,{children:"today"})," Modifier"]}),"\n",(0,d.jsxs)(i.p,{children:["The ",(0,d.jsx)(i.code,{children:"today"})," modifier is added to the current date:"]}),"\n",(0,d.jsx)(i.pre,{children:(0,d.jsx)(i.code,{className:"language-tsx",children:"function ModifiersToday() {\n  const initialFooter = <p>Try clicking the today\u2019s date.</p>;\n  const [footer, setFooter] = useState(initialFooter);\n\n  const handleDayClick: DayMouseEventHandler = (day, modifiers) => {\n    if (modifiers.today) {\n      setFooter(<p>You clicked the today\u2019s date.</p>);\n    } else {\n      setFooter(initialFooter);\n    }\n  };\n  return <DayPicker onDayClick={handleDayClick} footer={footer} />;\n}\n"})}),"\n",(0,d.jsx)(s,{children:(0,d.jsx)(o.ModifiersToday,{})}),"\n",(0,d.jsx)(i.admonition,{type:"info",children:(0,d.jsxs)(i.p,{children:["You can change the current date using the ",(0,d.jsx)(i.code,{children:"today"})," prop."]})}),"\n",(0,d.jsx)(i.h2,{id:"custom-modifiers",children:"Custom Modifiers"}),"\n",(0,d.jsxs)(i.p,{children:["Add new modifiers according to your app\u2019s requirements. For example, a booking app may use a ",(0,d.jsx)(i.code,{children:"booked"})," modifier to mark days as already booked."]}),"\n",(0,d.jsxs)(i.p,{children:["Use the ",(0,d.jsx)(i.code,{children:"modifiers"})," prop to pass an object with custom modifiers and their matcher. Change the inline-style of the cell with ",(0,d.jsx)(i.code,{children:"modifiersStyles"})," or with ",(0,d.jsx)(i.code,{children:"modifiersClassNames"}),"."]}),"\n",(0,d.jsx)(i.pre,{children:(0,d.jsx)(i.code,{className:"language-tsx",children:'const bookedDays = [\n  new Date(2024, 5, 8),\n  new Date(2024, 5, 9),\n  new Date(2024, 5, 10),\n  { from: new Date(2024, 5, 15), to: new Date(2024, 5, 20) }\n];\nexport function ModifiersCustom() {\n  const handleDayClick: DayMouseEventHandler = (day, { booked }) => {\n    alert(`Day ${day.toLocaleDateString()} is booked? ` + booked);\n  };\n\n  return (\n    <DayPicker\n      defaultMonth={new Date(2024, 5)}\n      modifiers={{ booked: bookedDays }}\n      modifiersClassNames={{ booked: "booked" }}\n      onDayClick={handleDayClick}\n    />\n  );\n}\n'})}),"\n",(0,d.jsx)(i.pre,{children:(0,d.jsx)(i.code,{className:"language-css",children:'.booked {\n  position: relative;\n}\n/* Strikeout */\n.booked::before {\n  content: "";\n  position: absolute;\n  top: 50%;\n  left: 0;\n  right: 0;\n  height: 2px;\n  background: currentColor;\n  z-index: 1;\n  transform: rotate(-45deg);\n}\n'})}),"\n",(0,d.jsx)(s,{children:(0,d.jsx)(o.ModifiersCustom,{})}),"\n",(0,d.jsx)(i.h2,{id:"styling-modifiers",children:"Styling Modifiers"}),"\n",(0,d.jsxs)(i.p,{children:["A day can be styled according to its modifiers \u2013 using CSS or inline styles. See ",(0,d.jsx)(i.a,{href:"/using-daypicker/styling",children:"Styling DayPicker"})," for more details."]})]})}function h(e={}){const{wrapper:i}={...(0,n.a)(),...e.components};return i?(0,d.jsx)(i,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}function m(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},2844:(e,i,s)=>{s.d(i,{Z:()=>r,a:()=>t});var d=s(2379);const n={},o=d.createContext(n);function t(e){const i=d.useContext(o);return d.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function r(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:t(e.components),d.createElement(o.Provider,{value:i},e.children)}}}]);