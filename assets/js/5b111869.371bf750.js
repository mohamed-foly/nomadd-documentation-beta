"use strict";(self.webpackChunknomadd=self.webpackChunknomadd||[]).push([[9846],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(n),m=a,f=c["".concat(s,".").concat(m)]||c[m]||u[m]||i;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9268:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_position:5},o="Draft",l={unversionedId:"draft",id:"draft",title:"Draft",description:"Development",source:"@site/docs/draft.md",sourceDirName:".",slug:"/draft",permalink:"/docs/draft",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/draft.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Installation",permalink:"/docs/install"},next:{title:"How to Edit Nomadd Node Variables",permalink:"/docs/edit-nomadd-node-variables"}},s={},d=[{value:"Development",id:"development",level:2},{value:"prerequisite",id:"prerequisite",level:3},{value:"Installing",id:"installing",level:3},{value:"Running steps",id:"running-steps",level:3},{value:"Credintials",id:"credintials",level:3},{value:"Node Variables",id:"node-variables",level:2},{value:"Migration tool",id:"migration-tool",level:2},{value:"<strong>Nodemcu Pinout</strong>",id:"nodemcu-pinout",level:2}],p={toc:d},c="wrapper";function u(e){let{components:t,...i}=e;return(0,a.kt)(c,(0,r.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"draft"},"Draft"),(0,a.kt)("h2",{id:"development"},"Development"),(0,a.kt)("h3",{id:"prerequisite"},"prerequisite"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Nomadd credintials ",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Email"),(0,a.kt)("li",{parentName:"ul"},"RDP Access"))),(0,a.kt)("li",{parentName:"ul"},"Tailscale",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://tailscale.com/download/"},"https://tailscale.com/download/"))))),(0,a.kt)("h3",{id:"installing"},"Installing"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Clone repository",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://dev.azure.com/Nomadd/"},"https://dev.azure.com/Nomadd/")),(0,a.kt)("li",{parentName:"ul"},"Navigate to project ",(0,a.kt)("inlineCode",{parentName:"li"},"cd backend-vs/Nomadd/ ")))),(0,a.kt)("li",{parentName:"ul"},"Install front-end dependencies")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"cd public/javascripts\nnpm install\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Build & Run",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Navigate to project ",(0,a.kt)("inlineCode",{parentName:"li"},"cd backend-vs/Nomadd "))))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"npm install\nnpm build\nnpm start\n")),(0,a.kt)("h3",{id:"running-steps"},"Running steps"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"- Bind to port 3000 \n- Load settings from /etc/nomadd/chief/settings.json\n- Clone settings from defaultsettings.json if no settings found\n- Upgrade settings on Version key increases\n")),(0,a.kt)("h3",{id:"credintials"},"Credintials"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"- Default credintials for development (username:password)\n  - Administrator:Administrator12345\n  - Technician:Technician12345\n")),(0,a.kt)("h2",{id:"node-variables"},"Node Variables"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Variables are mapped between Cheif and Node\nVariables reflect a status on Chief UI\nThere is a flow to get or set a variable from node\n    - Variable flow to bind on front-end\n      - ....\n    - Variable flow to get value from node\n    - Variable flow to set variable from UI\n    - Modify Variables on node, chief requires modification on other hand, Migration tool made to generate required files for node.\n")),(0,a.kt)("h2",{id:"migration-tool"},"Migration tool"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"- Describe\n")),(0,a.kt)("h2",{id:"nodemcu-pinout"},(0,a.kt)("strong",{parentName:"h2"},"Nodemcu Pinout")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"nodemcu_pinout.",src:n(8871).Z,width:"615",height:"539"})))}u.isMDXComponent=!0},8871:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/nodemcu_pinout-a676fa11902fc0ad1ca70c85ec1abb29.png"}}]);