"use strict";(self.webpackChunknomadd=self.webpackChunknomadd||[]).push([[5410],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),p=s(n),m=i,h=p["".concat(l,".").concat(m)]||p[m]||u[m]||r;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d[p]="string"==typeof e?e:i,o[1]=d;for(var s=2;s<r;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6727:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>d,toc:()=>s});var a=n(7462),i=(n(7294),n(3905));const r={id:"edit-nomadd-node-variables",title:"How to Edit Nomadd Node Variables"},o=void 0,d={unversionedId:"edit-nomadd-node-variables",id:"edit-nomadd-node-variables",title:"How to Edit Nomadd Node Variables",description:"This document outlines the steps to edit Nomadd node variables within the project. Follow these steps carefully to ensure the changes are correctly applied and reflected in the firmware.",source:"@site/docs/edit-nomadd-node-variables.md",sourceDirName:".",slug:"/edit-nomadd-node-variables",permalink:"/nomadd-documentation-beta/docs/edit-nomadd-node-variables",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/edit-nomadd-node-variables.md",tags:[],version:"current",frontMatter:{id:"edit-nomadd-node-variables",title:"How to Edit Nomadd Node Variables"},sidebar:"tutorialSidebar",previous:{title:"Draft",permalink:"/nomadd-documentation-beta/docs/draft"},next:{title:"System Requirements",permalink:"/nomadd-documentation-beta/docs/system-requirements/"}},l={},s=[{value:"Editing Variables",id:"editing-variables",level:2},{value:"Building the Project",id:"building-the-project",level:2},{value:"Expected Output",id:"expected-output",level:2}],c={toc:s},p="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(p,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This document outlines the steps to edit Nomadd node variables within the project. Follow these steps carefully to ensure the changes are correctly applied and reflected in the firmware."),(0,i.kt)("h2",{id:"editing-variables"},"Editing Variables"),(0,i.kt)("p",null,"To edit the Nomadd node variables, you need to modify the ",(0,i.kt)("inlineCode",{parentName:"p"},"NomaddTypeSpecification")," class within the Nomadd module. This class contains arrays that reflect all variables that can be edited:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Navigate to the ",(0,i.kt)("inlineCode",{parentName:"li"},"backend-vs/Nomadd/Modules")," directory."),(0,i.kt)("li",{parentName:"ol"},"Open the file named ",(0,i.kt)("inlineCode",{parentName:"li"},"chiefvariablemappings.ts"),"."),(0,i.kt)("li",{parentName:"ol"},"Within this file, locate the ",(0,i.kt)("inlineCode",{parentName:"li"},"NomaddTypeSpecification")," class. This class holds three arrays: ",(0,i.kt)("inlineCode",{parentName:"li"},"configuration"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"state"),", and ",(0,i.kt)("inlineCode",{parentName:"li"},"display"),"."),(0,i.kt)("li",{parentName:"ol"},"Edit these arrays as needed to reflect the changes you want to make to the variables."),(0,i.kt)("li",{parentName:"ol"},"Edit files ",(0,i.kt)("inlineCode",{parentName:"li"},"backend-vs/Nomadd/Modules/chiefconstants.ts"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"backend-vs/Nomadd/Modules/chiefconstants.ts")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"backend-vs/Nomadd/types/sharedtypes.d.ts")," baesd on variable type and behaviour.")),(0,i.kt)("h2",{id:"building-the-project"},"Building the Project"),(0,i.kt)("p",null,"After making your changes to the variables, you need to build the project to apply these changes:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"In the terminal, navigate to the ",(0,i.kt)("inlineCode",{parentName:"li"},"backend-vs/Nomadd")," directory."),(0,i.kt)("li",{parentName:"ol"},"Run the following command to build the project: ",(0,i.kt)("inlineCode",{parentName:"li"},"npm run build")),(0,i.kt)("li",{parentName:"ol"},"Next, navigate to the ",(0,i.kt)("inlineCode",{parentName:"li"},"backend-vs/CommunicationsCodeGen")," directory."),(0,i.kt)("li",{parentName:"ol"},"Run the following command to execute the code generation script:",(0,i.kt)("inlineCode",{parentName:"li"},"node app.js"))),(0,i.kt)("h2",{id:"expected-output"},"Expected Output"),(0,i.kt)("p",null,"Running the above steps should generate the required files for the firmware, matching the changes made in the Chief variable mappings. The output includes:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"firmware/nomadd/shared_data.h")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"firmware/initializer/shared_data.h"))),(0,i.kt)("p",null,"Additionally, a new revision number will be generated and stored in the ",(0,i.kt)("inlineCode",{parentName:"p"},"backend-vs/Nomadd/Modules/codegenstore.json")," file."),(0,i.kt)("p",null,"By following these steps, you can successfully edit and apply changes to the Nomadd node variables within your project."))}u.isMDXComponent=!0}}]);