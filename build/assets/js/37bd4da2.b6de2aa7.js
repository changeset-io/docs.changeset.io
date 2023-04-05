"use strict";(self.webpackChunkdocs_changeset_io=self.webpackChunkdocs_changeset_io||[]).push([[679],{9613:(t,e,r)=>{r.d(e,{Zo:()=>s,kt:()=>k});var n=r(9496);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function u(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},l=Object.keys(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var p=n.createContext({}),o=function(t){var e=n.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},s=function(t){var e=o(t.components);return n.createElement(p.Provider,{value:e},t.children)},d="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},g=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,l=t.originalType,p=t.parentName,s=u(t,["components","mdxType","originalType","parentName"]),d=o(r),g=a,k=d["".concat(p,".").concat(g)]||d[g]||m[g]||l;return r?n.createElement(k,i(i({ref:e},s),{},{components:r})):n.createElement(k,i({ref:e},s))}));function k(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=r.length,i=new Array(l);i[0]=g;var u={};for(var p in e)hasOwnProperty.call(e,p)&&(u[p]=e[p]);u.originalType=t,u[d]="string"==typeof t?t:a,i[1]=u;for(var o=2;o<l;o++)i[o]=r[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},5280:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>u,toc:()=>o});var n=r(1163),a=(r(9496),r(9613));const l={},i="Attributes",u={unversionedId:"reference/attributes",id:"reference/attributes",title:"Attributes",description:"| Attribute      | Description | Type |",source:"@site/docs/reference/attributes.md",sourceDirName:"reference",slug:"/reference/attributes",permalink:"/reference/attributes",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/reference/attributes.md",tags:[],version:"current",frontMatter:{},sidebar:"docSidebar",previous:{title:"Events",permalink:"/reference/events"}},p={},o=[],s={toc:o},d="wrapper";function m(t){let{components:e,...r}=t;return(0,a.kt)(d,(0,n.Z)({},s,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"attributes"},"Attributes"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Author"),(0,a.kt)("td",{parentName:"tr",align:null},"The author of the pull request"),(0,a.kt)("td",{parentName:"tr",align:null},"string")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Approvers"),(0,a.kt)("td",{parentName:"tr",align:null},"The list of users who have approved the pull request"),(0,a.kt)("td",{parentName:"tr",align:null},"string[]")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Assignees"),(0,a.kt)("td",{parentName:"tr",align:null},"The list of users who have been assigned to review the pull request"),(0,a.kt)("td",{parentName:"tr",align:null},"string[]")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Base Branch"),(0,a.kt)("td",{parentName:"tr",align:null},"The branch that the pull request wants to be merged into"),(0,a.kt)("td",{parentName:"tr",align:null},"string")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Body"),(0,a.kt)("td",{parentName:"tr",align:null},"The pull request body"),(0,a.kt)("td",{parentName:"tr",align:null},"string")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Changes Requested By"),(0,a.kt)("td",{parentName:"tr",align:null},"The list of users who have requested changes to the pull request"),(0,a.kt)("td",{parentName:"tr",align:null},"user[]")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Checks"),(0,a.kt)("td",{parentName:"tr",align:null},"The list of checks that have run in the pull request"),(0,a.kt)("td",{parentName:"tr",align:null},"check[]")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Dismissed Reviews"),(0,a.kt)("td",{parentName:"tr",align:null},"The list of users who have had their pull request review dismissed"),(0,a.kt)("td",{parentName:"tr",align:null},"string[]")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Files"),(0,a.kt)("td",{parentName:"tr",align:null},"The list of files impacted by the pull request"),(0,a.kt)("td",{parentName:"tr",align:null},"file[]")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Head Branch"),(0,a.kt)("td",{parentName:"tr",align:null},"The branch of the pull request"),(0,a.kt)("td",{parentName:"tr",align:null},"string")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Is Draft"),(0,a.kt)("td",{parentName:"tr",align:null},"Whether the pull request is a draft"),(0,a.kt)("td",{parentName:"tr",align:null},"boolean")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Is Locked"),(0,a.kt)("td",{parentName:"tr",align:null},"Whether the pull request is locked"),(0,a.kt)("td",{parentName:"tr",align:null},"boolean")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Is Merged"),(0,a.kt)("td",{parentName:"tr",align:null},"Whether the pull request is merged"),(0,a.kt)("td",{parentName:"tr",align:null},"boolean")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Labels"),(0,a.kt)("td",{parentName:"tr",align:null},"The labels applied to the pull request"),(0,a.kt)("td",{parentName:"tr",align:null},"string[]")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Merged By"),(0,a.kt)("td",{parentName:"tr",align:null},"The name of the user who merged the pull request"),(0,a.kt)("td",{parentName:"tr",align:null},"string")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Milestone"),(0,a.kt)("td",{parentName:"tr",align:null},"The name of the milestone assigned to the pull request"),(0,a.kt)("td",{parentName:"tr",align:null},"string")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Pull Request Number"),(0,a.kt)("td",{parentName:"tr",align:null},"The number of the pull request"),(0,a.kt)("td",{parentName:"tr",align:null},"string")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Repository Contributors"),(0,a.kt)("td",{parentName:"tr",align:null},"The list of teams who have been requested to review the pull request"),(0,a.kt)("td",{parentName:"tr",align:null},"user[]")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Requested Reviewers"),(0,a.kt)("td",{parentName:"tr",align:null},"The list of users who have been requested to review the pull request"),(0,a.kt)("td",{parentName:"tr",align:null},"string[]")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Requested Teams"),(0,a.kt)("td",{parentName:"tr",align:null},"The list of teams who have been requested to review the pull request"),(0,a.kt)("td",{parentName:"tr",align:null},"string[]")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Review Commented By"),(0,a.kt)("td",{parentName:"tr",align:null},"The list of users who have left a review comment on the pull request"),(0,a.kt)("td",{parentName:"tr",align:null},"string[]")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"State"),(0,a.kt)("td",{parentName:"tr",align:null},"The state of the pull request"),(0,a.kt)("td",{parentName:"tr",align:null},"open/closed")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Title"),(0,a.kt)("td",{parentName:"tr",align:null},"The title of the pull request"),(0,a.kt)("td",{parentName:"tr",align:null},"string")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Time Event Occurred"),(0,a.kt)("td",{parentName:"tr",align:null},"The time that the event occured"),(0,a.kt)("td",{parentName:"tr",align:null},"schedule")))))}m.isMDXComponent=!0}}]);