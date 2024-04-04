"use strict";(self.webpackChunknomadd=self.webpackChunknomadd||[]).push([[5410],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),s=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(d.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(n),m=r,h=p["".concat(d,".").concat(m)]||p[m]||u[m]||i;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[p]="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6727:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const i={id:"edit-nomadd-node-variables",title:"How to Edit Nomadd Node Variables"},o=void 0,l={unversionedId:"edit-nomadd-node-variables",id:"edit-nomadd-node-variables",title:"How to Edit Nomadd Node Variables",description:"This document outlines the steps to edit Nomadd node variables within the project. Follow these steps carefully to ensure the changes are correctly applied and reflected in the firmware.",source:"@site/docs/edit-nomadd-node-variables.md",sourceDirName:".",slug:"/edit-nomadd-node-variables",permalink:"/docs/edit-nomadd-node-variables",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/edit-nomadd-node-variables.md",tags:[],version:"current",frontMatter:{id:"edit-nomadd-node-variables",title:"How to Edit Nomadd Node Variables"},sidebar:"tutorialSidebar",previous:{title:"Draft",permalink:"/docs/draft"},next:{title:"System Requirements",permalink:"/docs/system-requirements/"}},d={},s=[{value:"Editing Variables",id:"editing-variables",level:2},{value:"Building the Project",id:"building-the-project",level:2},{value:"Expected Output",id:"expected-output",level:2}],c={toc:s},p="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This document outlines the steps to edit Nomadd node variables within the project. Follow these steps carefully to ensure the changes are correctly applied and reflected in the firmware."),(0,r.kt)("h2",{id:"editing-variables"},"Editing Variables"),(0,r.kt)("p",null,"To edit the Nomadd node variables, you need to modify the ",(0,r.kt)("inlineCode",{parentName:"p"},"NomaddTypeSpecification")," class within the Nomadd module. This class contains arrays that reflect all variables that can be edited:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Navigate to the ",(0,r.kt)("inlineCode",{parentName:"li"},"backend-vs/Nomadd/Modules")," directory."),(0,r.kt)("li",{parentName:"ol"},"Open the file named ",(0,r.kt)("inlineCode",{parentName:"li"},"chiefvariablemappings.ts"),"."),(0,r.kt)("li",{parentName:"ol"},"Within this file, locate the ",(0,r.kt)("inlineCode",{parentName:"li"},"NomaddTypeSpecification")," class. This class holds three arrays: ",(0,r.kt)("inlineCode",{parentName:"li"},"configuration"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"state"),", and ",(0,r.kt)("inlineCode",{parentName:"li"},"display"),"."),(0,r.kt)("li",{parentName:"ol"},"Edit these arrays as needed to reflect the changes you want to make to the variables.")),(0,r.kt)("h2",{id:"building-the-project"},"Building the Project"),(0,r.kt)("p",null,"After making your changes to the variables, you need to build the project to apply these changes:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"In the terminal, navigate to the ",(0,r.kt)("inlineCode",{parentName:"li"},"backend-vs/Nomadd")," directory."),(0,r.kt)("li",{parentName:"ol"},"Run the following command to build the project: ",(0,r.kt)("inlineCode",{parentName:"li"},"npm run build")),(0,r.kt)("li",{parentName:"ol"},"Next, navigate to the ",(0,r.kt)("inlineCode",{parentName:"li"},"backend-vs/CommunicationsCodeGen")," directory."),(0,r.kt)("li",{parentName:"ol"},"Run the following command to execute the code generation script:",(0,r.kt)("inlineCode",{parentName:"li"},"node app.js"))),(0,r.kt)("h2",{id:"expected-output"},"Expected Output"),(0,r.kt)("p",null,"Running the above steps should generate the required files for the firmware, matching the changes made in the Chief variable mappings. The output includes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"firmware/nomadd/shared_data.h")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"firmware/initializer/shared_data.h"))),(0,r.kt)("p",null,"Additionally, a new revision number will be generated and stored in the ",(0,r.kt)("inlineCode",{parentName:"p"},"backend-vs/Nomadd/Modules/codegenstore.json")," file."),(0,r.kt)("p",null,"By following these steps, you can successfully edit and apply changes to the Nomadd node variables within your project."))}u.isMDXComponent=!0}}]);