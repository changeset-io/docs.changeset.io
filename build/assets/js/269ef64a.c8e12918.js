"use strict";(self.webpackChunkdocs_changeset_io=self.webpackChunkdocs_changeset_io||[]).push([[269],{9613:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var o=a(9496);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=o.createContext({}),c=function(e){var t=o.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(a),f=n,h=p["".concat(l,".").concat(f)]||p[f]||u[f]||r;return a?o.createElement(h,i(i({ref:t},d),{},{components:a})):o.createElement(h,i({ref:t},d))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:n,i[1]=s;for(var c=2;c<r;c++)i[c]=a[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,a)}f.displayName="MDXCreateElement"},7036:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var o=a(1163),n=(a(9496),a(9613));const r={sidebar_position:1},i="Create a Workflow",s={unversionedId:"workflows/create",id:"workflows/create",title:"Create a Workflow",description:"Workflows are how pull requests are connected to specific actions in Changeset. Assuming you have connected a repository,",source:"@site/docs/workflows/create.md",sourceDirName:"workflows",slug:"/workflows/create",permalink:"/workflows/create",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/workflows/create.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1}},l={},c=[{value:"Create Your First Workflow",id:"create-your-first-workflow",level:2},{value:"Name the Workflow",id:"name-the-workflow",level:2},{value:"Subscribe to Events",id:"subscribe-to-events",level:2},{value:"Custom Attributes",id:"custom-attributes",level:2},{value:"Adding Conditions",id:"adding-conditions",level:2},{value:"Specifying an Action",id:"specifying-an-action",level:2}],d={toc:c},p="wrapper";function u(e){let{components:t,...r}=e;return(0,n.kt)(p,(0,o.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"create-a-workflow"},"Create a Workflow"),(0,n.kt)("p",null,"Workflows are how pull requests are connected to specific actions in Changeset. Assuming you have connected a repository,\ncreating a workflow can be accomplished via the workflow editor."),(0,n.kt)("h2",{id:"create-your-first-workflow"},"Create Your First Workflow"),(0,n.kt)("p",null,'From the repository overview page, select "New Workflow"'),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"New Workflow Button",src:a(4583).Z,width:"1602",height:"804"})),(0,n.kt)("h2",{id:"name-the-workflow"},"Name the Workflow"),(0,n.kt)("p",null,'Give the workflow a memorable name. It helps to be descriptive, like "Alert when updating legacy code"'),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Name the workflow",src:a(1414).Z,width:"2842",height:"243"})),(0,n.kt)("h2",{id:"subscribe-to-events"},"Subscribe to Events"),(0,n.kt)("p",null,'Each option corresponds to an event that may occur in an open pull request, and selecting one assigns this workflow to be evaluated when the event occurs. For example, selecting only "approved" would result in this workflow being run whenever a pull request is approved. '),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Subsribe to events",src:a(3738).Z,width:"2970",height:"1713"})),(0,n.kt)("h2",{id:"custom-attributes"},"Custom Attributes"),(0,n.kt)("p",null,"Sometimes a workflow requires looking at a specific file in a pull request, or checking that some specific item in a list matches a condition. You can use custom attributes to apply maps, filters, and functions to achieve this behavior in workflows. In this example, we'll create a custom attribute called ",(0,n.kt)("inlineCode",{parentName:"p"},"all javascript files")," that can be used later when creating conditions."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Select 'Create Custom Attribute'")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Create custom attribute",src:a(2706).Z,width:"2812",height:"642"})),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"Choose an attribute to customize")),(0,n.kt)("p",null,"Only pull request attributes that are lists of objects can be filtered and customized. Here we have chosen ",(0,n.kt)("inlineCode",{parentName:"p"},"files")," so that we can filter the attribute down further."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Custom attr",src:a(3583).Z,width:"2836",height:"680"})),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"Give the custom attribute a name")),(0,n.kt)("p",null,"You'll be able to refer to the name later when creating conditions to check before this workflow's actions fire."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Custom attr name",src:a(49).Z,width:"2836",height:"680"})),(0,n.kt)("ol",{start:4},(0,n.kt)("li",{parentName:"ol"},"Add maps, filters, and functions to modify the attribute")),(0,n.kt)("p",null,"Adding a ",(0,n.kt)("inlineCode",{parentName:"p"},"filter")," allows you to look only at items in a list that match a specific criteria. Here we'll filter the ",(0,n.kt)("inlineCode",{parentName:"p"},"files")," attribute down to only the files that ",(0,n.kt)("inlineCode",{parentName:"p"},"include")," ",(0,n.kt)("inlineCode",{parentName:"p"},".js")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"zerofilters",src:a(1495).Z,width:"2798",height:"602"})),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"addfilter",src:a(8200).Z,width:"2798",height:"602"})),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"value",src:a(2576).Z,width:"2766",height:"810"})),(0,n.kt)("h2",{id:"adding-conditions"},"Adding Conditions"),(0,n.kt)("p",null,"Conditions are what determine whether or not the workflow's actions will be ran. Using our custom attribute ",(0,n.kt)("inlineCode",{parentName:"p"},"all javascript files")," as an example, perhaps we want to make sure that no one modifies a file called ",(0,n.kt)("inlineCode",{parentName:"p"},"dont-touch.js"),"."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Add a new condition")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"add condition",src:a(714).Z,width:"2798",height:"534"})),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"Use the attribute dropdown to find an attribute to test against")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"select attribute",src:a(5974).Z,width:"2798",height:"502"})),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"Choose an operator and specify a value")),(0,n.kt)("p",null,"The operator in this case is ",(0,n.kt)("inlineCode",{parentName:"p"},"includes")," since we're testing a list for inclusion, but other attributes have other operators like ",(0,n.kt)("inlineCode",{parentName:"p"},"equals"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"greater than")," etc."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"operator",src:a(6008).Z,width:"2798",height:"502"})),(0,n.kt)("h2",{id:"specifying-an-action"},"Specifying an Action"),(0,n.kt)("p",null,"When an event that your workflow is subscribed to is fired, Changeset will check your conditions to see if the workflow's actions need to be ran. If the condition check passes, an action is the final step of the workflow. There are several actions to choose from, but in this case, we'll leave a comment on the pull request warning the user that they've touched a forbidden file"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Use the input and select the ",(0,n.kt)("inlineCode",{parentName:"li"},"Add a comment to the pull request")," action")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"action",src:a(6614).Z,width:"2798",height:"836"})),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"Use the pencil icon to edit the action options")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"edit action",src:a(3397).Z,width:"2798",height:"510"})),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"Specify the markdown to send in the comment")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"edit markdown",src:a(9908).Z,width:"2300",height:"1509"})))}u.isMDXComponent=!0},6614:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/action-fe3e389111ef9febcdc317977adb9af3.png"},714:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/addcondition-30784dd7db93e7c31043f7d8581f38ed.png"},8200:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/addfilter-48c824174c84dc4b657b3c7b9969c662.png"},3583:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/choose-attr-adf11cab7897658a1c28a59f0c558424.png"},2706:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/custom-button-585d45facb3a857391ca3beec47d4c93.png"},3397:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/editaction-aa54839d7d323e9cb8f4bb00896c220f.png"},3738:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/events-d01f2d0a06260eb2bc4a0e6003c3db9e.png"},2576:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/filtervalue-7ca92cf31a867692afcdeb6c6c835d10.png"},9908:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/md-85fc23ff17dce12c6d7d40b2de39e6bc.png"},49:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/name-attr-a4cf24da690a72a8209cc31629d7eff2.png"},6008:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/operator-ff50a7b72d0903ef915ee06e805ef9ba.png"},5974:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/searchattrs-00ae4490e653d27df557ba73a6f4ab0e.png"},4583:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/workflow-button-49b01f62a8461488e07faf26723adf99.png"},1414:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/workflow-name-141c11c116039e0d8d799fcb11fc2b6a.png"},1495:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/zerofilters-ca52c1d033401d76efe898730c7be699.png"}}]);