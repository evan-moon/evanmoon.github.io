(self.webpackChunkevan_blog=self.webpackChunkevan_blog||[]).push([[818],{356:function(t,e,r){"use strict";r.d(e,{A:function(){return m}});var n=r(6540),o=r(4164),a=r(5659),i=r(3139),l=r(1848),s=r(9077),c=r(5669),u=r(8413),d=r(1609);function p(t){return(0,d.Ay)("MuiDivider",t)}(0,u.A)("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]);var v=r(4848);const h=(0,l.Ay)("div",{name:"MuiDivider",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:r}=t;return[e.root,r.absolute&&e.absolute,e[r.variant],r.light&&e.light,"vertical"===r.orientation&&e.vertical,r.flexItem&&e.flexItem,r.children&&e.withChildren,r.children&&"vertical"===r.orientation&&e.withChildrenVertical,"right"===r.textAlign&&"vertical"!==r.orientation&&e.textAlignRight,"left"===r.textAlign&&"vertical"!==r.orientation&&e.textAlignLeft]}})((0,s.A)((({theme:t})=>({margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:(t.vars||t).palette.divider,borderBottomWidth:"thin",variants:[{props:{absolute:!0},style:{position:"absolute",bottom:0,left:0,width:"100%"}},{props:{light:!0},style:{borderColor:t.vars?`rgba(${t.vars.palette.dividerChannel} / 0.08)`:(0,i.X4)(t.palette.divider,.08)}},{props:{variant:"inset"},style:{marginLeft:72}},{props:{variant:"middle",orientation:"horizontal"},style:{marginLeft:t.spacing(2),marginRight:t.spacing(2)}},{props:{variant:"middle",orientation:"vertical"},style:{marginTop:t.spacing(1),marginBottom:t.spacing(1)}},{props:{orientation:"vertical"},style:{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"}},{props:{flexItem:!0},style:{alignSelf:"stretch",height:"auto"}},{props:({ownerState:t})=>!!t.children,style:{display:"flex",textAlign:"center",border:0,borderTopStyle:"solid",borderLeftStyle:"solid","&::before, &::after":{content:'""',alignSelf:"center"}}},{props:({ownerState:t})=>t.children&&"vertical"!==t.orientation,style:{"&::before, &::after":{width:"100%",borderTop:`thin solid ${(t.vars||t).palette.divider}`,borderTopStyle:"inherit"}}},{props:({ownerState:t})=>"vertical"===t.orientation&&t.children,style:{flexDirection:"column","&::before, &::after":{height:"100%",borderLeft:`thin solid ${(t.vars||t).palette.divider}`,borderLeftStyle:"inherit"}}},{props:({ownerState:t})=>"right"===t.textAlign&&"vertical"!==t.orientation,style:{"&::before":{width:"90%"},"&::after":{width:"10%"}}},{props:({ownerState:t})=>"left"===t.textAlign&&"vertical"!==t.orientation,style:{"&::before":{width:"10%"},"&::after":{width:"90%"}}}]})))),f=(0,l.Ay)("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver:(t,e)=>{const{ownerState:r}=t;return[e.wrapper,"vertical"===r.orientation&&e.wrapperVertical]}})((0,s.A)((({theme:t})=>({display:"inline-block",paddingLeft:`calc(${t.spacing(1)} * 1.2)`,paddingRight:`calc(${t.spacing(1)} * 1.2)`,whiteSpace:"nowrap",variants:[{props:{orientation:"vertical"},style:{paddingTop:`calc(${t.spacing(1)} * 1.2)`,paddingBottom:`calc(${t.spacing(1)} * 1.2)`}}]})))),g=n.forwardRef((function(t,e){const r=(0,c.b)({props:t,name:"MuiDivider"}),{absolute:n=!1,children:i,className:l,orientation:s="horizontal",component:u=(i||"vertical"===s?"div":"hr"),flexItem:d=!1,light:g=!1,role:m=("hr"!==u?"separator":void 0),textAlign:y="center",variant:x="fullWidth",...b}=r,A={...r,absolute:n,component:u,flexItem:d,light:g,orientation:s,role:m,textAlign:y,variant:x},S=(t=>{const{absolute:e,children:r,classes:n,flexItem:o,light:i,orientation:l,textAlign:s,variant:c}=t,u={root:["root",e&&"absolute",c,i&&"light","vertical"===l&&"vertical",o&&"flexItem",r&&"withChildren",r&&"vertical"===l&&"withChildrenVertical","right"===s&&"vertical"!==l&&"textAlignRight","left"===s&&"vertical"!==l&&"textAlignLeft"],wrapper:["wrapper","vertical"===l&&"wrapperVertical"]};return(0,a.A)(u,p,n)})(A);return(0,v.jsx)(h,{as:u,className:(0,o.A)(S.root,l),role:m,ref:e,ownerState:A,"aria-orientation":"separator"!==m||"hr"===u&&"vertical"!==s?void 0:s,...b,children:i?(0,v.jsx)(f,{className:S.wrapper,ownerState:A,children:i}):null})}));g&&(g.muiSkipListHighlight=!0);var m=g},4736:function(t,e,r){"use strict";var n=r(6540),o=r(8239),a=r(3551),i=r(4794),l=r(4675);const s=(0,r(1848).Ay)(i.Link)({color:"inherit",textDecoration:"none"});e.A=t=>{var e,r,i,c,u,d,p;let{post:v,onClick:h}=t;const{shape:f,palette:g}=(0,l.A)();if(null==(null===(e=v.fields)||void 0===e?void 0:e.path))return null;const m=v.fields.path,y=null!==(r=null===(i=v.frontmatter)||void 0===i||null===(c=i.categories)||void 0===c?void 0:c.join("/"))&&void 0!==r?r:"",x=null!==(u=null===(d=v.frontmatter)||void 0===d?void 0:d.title)&&void 0!==u?u:"",b=null===(p=v.frontmatter)||void 0===p?void 0:p.date;return n.createElement(s,{to:m},n.createElement(o.Ay,{container:!0,onClick:()=>null==h?void 0:h(m),sx:{borderRadius:f.borderRadius,transition:"opacity 0.3s ease-in-out","&:hover":{opacity:.6}}},n.createElement(o.Ay,{item:!0,xs:!0},n.createElement(a.A,{color:"textSecondary",variant:"caption",fontFamily:'"Birthstone", serif'},b),n.createElement(a.A,{variant:"body2"},x),n.createElement(a.A,{color:"textSecondary",variant:"caption"},y))))}},3477:function(t,e,r){"use strict";r.d(e,{d:function(){return o}});var n=r(4794);const o=()=>(0,n.useStaticQuery)("376081736")},6893:function(t,e,r){"use strict";r.r(e),r.d(e,{Head:function(){return St},default:function(){return At}});var n=r(6540),o=r(2532),a=r(4675),i=r(7164),l=r(8058);var s=t=>{let{tocHtml:e,onClick:r}=t;const{spacing:o,typography:l,shape:s,palette:c}=(0,a.A)(),u=(0,n.useCallback)((t=>{const e=t.target;try{if("A"!==e.tagName)return;const t=decodeURIComponent(e.innerText);null==r||r(t)}catch(t){console.error(t)}}),[r]);return n.createElement(i.A,{onClick:u,dangerouslySetInnerHTML:{__html:e},sx:{"& ul":{padding:0,margin:0},"& li":{padding:0,margin:0,listStyle:"none","& p":{margin:0},"& a":{display:"block",padding:o(1)+" "+o(1.5)+" "+o(1)+" "+o(.75),marginLeft:o(.75),color:c.grey[800],textDecoration:"none",fontSize:l.caption.fontSize,borderRadius:s.borderRadius,"&:hover":{backgroundColor:c.grey[100]}}},"& li ul":{margin:"0 0 "+o(1.5)+" "+o(1.5),borderLeft:"1px dashed "+c.grey[400]}}})},c=r(8239),u=r(4164),d=r(5659),p=r(1848),v=r(5669),h=r(4155),f=r(8413),g=r(1609);function m(t){return(0,g.Ay)("MuiCard",t)}(0,f.A)("MuiCard",["root"]);var y=r(4848);const x=(0,p.Ay)(h.A,{name:"MuiCard",slot:"Root",overridesResolver:(t,e)=>e.root})({overflow:"hidden"});var b=n.forwardRef((function(t,e){const r=(0,v.b)({props:t,name:"MuiCard"}),{className:n,raised:o=!1,...a}=r,i={...r,raised:o},l=(t=>{const{classes:e}=t;return(0,d.A)({root:["root"]},m,e)})(i);return(0,y.jsx)(x,{className:(0,u.A)(l.root,n),elevation:o?8:void 0,ref:e,ownerState:i,...a})})),A=r(9077);function S(t){return(0,g.Ay)("MuiCardActionArea",t)}var w=(0,f.A)("MuiCardActionArea",["root","focusVisible","focusHighlight"]),_=r(7881);const C=(0,p.Ay)(_.A,{name:"MuiCardActionArea",slot:"Root",overridesResolver:(t,e)=>e.root})((0,A.A)((({theme:t})=>({display:"block",textAlign:"inherit",borderRadius:"inherit",width:"100%",[`&:hover .${w.focusHighlight}`]:{opacity:(t.vars||t).palette.action.hoverOpacity,"@media (hover: none)":{opacity:0}},[`&.${w.focusVisible} .${w.focusHighlight}`]:{opacity:(t.vars||t).palette.action.focusOpacity}})))),E=(0,p.Ay)("span",{name:"MuiCardActionArea",slot:"FocusHighlight",overridesResolver:(t,e)=>e.focusHighlight})((0,A.A)((({theme:t})=>({overflow:"hidden",pointerEvents:"none",position:"absolute",top:0,right:0,bottom:0,left:0,borderRadius:"inherit",opacity:0,backgroundColor:"currentcolor",transition:t.transitions.create("opacity",{duration:t.transitions.duration.short})}))));var k=n.forwardRef((function(t,e){const r=(0,v.b)({props:t,name:"MuiCardActionArea"}),{children:n,className:o,focusVisibleClassName:a,...i}=r,l=r,s=(t=>{const{classes:e}=t;return(0,d.A)({root:["root"],focusHighlight:["focusHighlight"]},S,e)})(l);return(0,y.jsxs)(C,{className:(0,u.A)(s.root,o),focusVisibleClassName:(0,u.A)(a,s.focusVisible),ref:e,ownerState:l,...i,children:[n,(0,y.jsx)(E,{className:s.focusHighlight,ownerState:l})]})}));function z(t){return(0,g.Ay)("MuiCardContent",t)}(0,f.A)("MuiCardContent",["root"]);const R=(0,p.Ay)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(t,e)=>e.root})({padding:16,"&:last-child":{paddingBottom:24}});var $=n.forwardRef((function(t,e){const r=(0,v.b)({props:t,name:"MuiCardContent"}),{className:n,component:o="div",...a}=r,i={...r,component:o},l=(t=>{const{classes:e}=t;return(0,d.A)({root:["root"]},z,e)})(i);return(0,y.jsx)(R,{as:o,className:(0,u.A)(l.root,n),ownerState:i,ref:e,...a})})),M=r(4794);const B=(0,p.Ay)(M.Link)((t=>{let{theme:{palette:e}}=t;return{color:e.grey[600],textDecoration:"none"}}));var j=t=>{var e,r,o,i,l,s;let{prev:u,next:d,onClickNext:p,onClickPrev:v}=t;const{spacing:h,palette:f}=(0,a.A)();return n.createElement(c.Ay,{container:!0,component:"nav",spacing:2,wrap:"wrap",sx:{justifyContent:"space-between"}},u?n.createElement(c.Ay,{item:!0,xs:12,lg:6},n.createElement(b,{sx:{marginBottom:h(2),background:"transparent","& .MuiCardContent-root":{whiteSpace:"nowrap",textOverflow:"ellipsis",overflow:"hidden"}},variant:"outlined"},n.createElement(B,{to:null!==(e=null===(r=u.fields)||void 0===r?void 0:r.path)&&void 0!==e?e:"/",rel:"prev",onClick:v},n.createElement(k,null,n.createElement($,null,null===(o=u.frontmatter)||void 0===o?void 0:o.title))))):n.createElement(c.Ay,null),d?n.createElement(c.Ay,{item:!0,xs:12,lg:6},n.createElement(b,{sx:{marginBottom:h(2),background:"transparent","& .MuiCardContent-root":{whiteSpace:"nowrap",textOverflow:"ellipsis",overflow:"hidden",textAlign:"right"}},variant:"outlined"},n.createElement(B,{to:null!==(i=null===(l=d.fields)||void 0===l?void 0:l.path)&&void 0!==i?i:"/",rel:"next",onClick:p},n.createElement(k,null,n.createElement($,null,null===(s=d.frontmatter)||void 0===s?void 0:s.title))))):n.createElement(c.Ay,null))};var I=t=>{let{html:e}=t;const{shape:r,palette:o,spacing:l,typography:s}=(0,a.A)();return n.createElement(i.A,{dangerouslySetInnerHTML:{__html:e},sx:{marginTop:l(6),lineHeight:"22pt",color:o.grey[800],fontSize:"1rem","& h2, & h3, & h4, & h5":{fontFamily:"Noto Sans"},"& h2":{margin:l(6)+" 0 "+l(2),fontSize:"1.8rem"},"& h3":{margin:l(4)+" 0 "+l(2),fontSize:"1.4rem"},"& h4":{margin:l(3)+" 0 "+l(2),fontSize:"1.2rem"},"& h5":{margin:l(3)+" 0 "+l(2),fontSize:"1rem"},"& p":{wordBreak:"break-all"},"& a":{color:o.text.primary,"&:hover":{textDecoration:"underline"}},"& small":{fontSize:s.caption.fontSize},"& hr":{borderTop:"1px dashed "+o.grey[400],display:"block",margin:l(3)+" 0"},"& blockquote":{backgroundColor:o.grey[200],borderLeft:"4px solid "+o.grey[300],padding:l(2)+" "+l(2.5),margin:l(3)+" 0",textAlign:"left"},"& span.gatsby-resp-image-wrapper":{borderRadius:r.borderRadius,overflow:"hidden",margin:l(5)+" 0 "+l(5),"& + small":{display:"block",color:o.grey[700],marginTop:l(-3),marginBottom:l(5)}},"& table":{width:"100%",borderCollapse:"collapse",margin:l(5)+" 0 "+l(5),"& thead":{backgroundColor:o.grey[200]},"& thead th":{borderRight:"1px solid "+o.common.white},"& tr":{borderBottom:"1px solid "+o.grey[200]},"& td, & th":{fontSize:"0.9rem",padding:l(1)+" "+l(1.5),textAlign:"left",border:"none",wordBreak:"break-all",'&[align="center"]':{textAlign:"center"}}},'& :not(pre) > code[class*="language-"]':{backgroundColor:"rgba(27, 31, 35, 0.05)",color:"#005A8D",padding:l(.4)+" "+l(.8),borderRadius:"4px",whiteSpace:"nowrap"},"& span.katex-display":{margin:l(4)+" 0"}}})},O=(r(6910),r(8587)),L=r(7668),T=r.n(L),N=r(3551),P=r(7444),W=r(4729);var F=r(4736);const V=["tags","currentPost","onClickPost"];var H=t=>{let{tags:e,currentPost:r,onClickPost:o}=t,l=(0,O.A)(t,V);const{spacing:s,typography:c}=(0,a.A)(),u=function(t){void 0===t&&(t=!0);const[e]=(0,P.L4)(W.a);return(0,M.useStaticQuery)("3129619726").allMarkdownRemark.edges.map((t=>{let{node:e}=t;return e})).filter((r=>{var n;return!t||(null===(n=r.fields)||void 0===n?void 0:n.lang)===e}))}(),d=(0,n.useMemo)((()=>u.filter((t=>{var e,n;return(null===(e=t.frontmatter)||void 0===e?void 0:e.title)!==(null===(n=r.frontmatter)||void 0===n?void 0:n.title)})).map((t=>{var r,n;return{post:t,tags:T()(null!==(r=null===(n=t.frontmatter)||void 0===n?void 0:n.tags)&&void 0!==r?r:[],e)}})).filter((t=>{let{tags:e}=t;return e.length>0})).sort(((t,e)=>e.tags.length-t.tags.length)).map((t=>t.post)).slice(0,5)),[r,u,e]);return 0===d.length?null:n.createElement(h.A,Object.assign({variant:"outlined"},l,{sx:{padding:s(2),background:"transparent",borderStyle:"dashed"}}),n.createElement(N.A,{sx:{marginBottom:s(2)},fontWeight:c.fontWeightBold},"관련 포스팅 보러가기"),n.createElement(i.A,null,d.map((t=>{var e;return n.createElement(F.A,{key:null===(e=t.fields)||void 0===e?void 0:e.path,post:t,onClick:o})}))))},D=r(356);var X=t=>{let{title:e,subTitle:r,date:o,viewCount:l}=t;const{spacing:s,palette:c,typography:u,breakpoints:d}=(0,a.A)();return n.createElement(i.A,{component:"header",sx:{marginBottom:s(5)}},n.createElement(N.A,{component:"h1",fontSize:u.h4.fontSize,fontWeight:u.fontWeightBold,sx:{marginTop:s(2),[d.down("md")]:{fontsize:u.h5.fontSize}}},e),n.createElement(N.A,{fontFamily:"Noto Sans",fontWeight:u.fontWeightMedium},r),n.createElement(i.A,{display:"flex",sx:{marginTop:s(3),marginBottom:s(2),color:c.grey[600]}},n.createElement(N.A,{component:"time",variant:"caption",fontFamily:"Noto Sans"},o),l&&n.createElement(N.A,{fontFamily:"Noto Sans",variant:"caption",sx:{marginLeft:s(1)}},"/ ",n.createElement("strong",null,l.toLocaleString("ko-KR"))," Views")),n.createElement(D.A,null))},G=r(7379),Q=r(3139),U=r(3431),q=r(8466),J=r(8660);function K(t){return(0,g.Ay)("MuiButton",t)}var Y=(0,f.A)("MuiButton",["root","text","textInherit","textPrimary","textSecondary","textSuccess","textError","textInfo","textWarning","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","outlinedSuccess","outlinedError","outlinedInfo","outlinedWarning","contained","containedInherit","containedPrimary","containedSecondary","containedSuccess","containedError","containedInfo","containedWarning","disableElevation","focusVisible","disabled","colorInherit","colorPrimary","colorSecondary","colorSuccess","colorError","colorInfo","colorWarning","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","icon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]);var Z=n.createContext({});var tt=n.createContext(void 0);const et=[{props:{size:"small"},style:{"& > *:nth-of-type(1)":{fontSize:18}}},{props:{size:"medium"},style:{"& > *:nth-of-type(1)":{fontSize:20}}},{props:{size:"large"},style:{"& > *:nth-of-type(1)":{fontSize:22}}}],rt=(0,p.Ay)(_.A,{shouldForwardProp:t=>(0,U.A)(t)||"classes"===t,name:"MuiButton",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:r}=t;return[e.root,e[r.variant],e[`${r.variant}${(0,q.A)(r.color)}`],e[`size${(0,q.A)(r.size)}`],e[`${r.variant}Size${(0,q.A)(r.size)}`],"inherit"===r.color&&e.colorInherit,r.disableElevation&&e.disableElevation,r.fullWidth&&e.fullWidth]}})((0,A.A)((({theme:t})=>{const e="light"===t.palette.mode?t.palette.grey[300]:t.palette.grey[800],r="light"===t.palette.mode?t.palette.grey.A100:t.palette.grey[700];return{...t.typography.button,minWidth:64,padding:"6px 16px",border:0,borderRadius:(t.vars||t).shape.borderRadius,transition:t.transitions.create(["background-color","box-shadow","border-color","color"],{duration:t.transitions.duration.short}),"&:hover":{textDecoration:"none"},[`&.${Y.disabled}`]:{color:(t.vars||t).palette.action.disabled},variants:[{props:{variant:"contained"},style:{color:"var(--variant-containedColor)",backgroundColor:"var(--variant-containedBg)",boxShadow:(t.vars||t).shadows[2],"&:hover":{boxShadow:(t.vars||t).shadows[4],"@media (hover: none)":{boxShadow:(t.vars||t).shadows[2]}},"&:active":{boxShadow:(t.vars||t).shadows[8]},[`&.${Y.focusVisible}`]:{boxShadow:(t.vars||t).shadows[6]},[`&.${Y.disabled}`]:{color:(t.vars||t).palette.action.disabled,boxShadow:(t.vars||t).shadows[0],backgroundColor:(t.vars||t).palette.action.disabledBackground}}},{props:{variant:"outlined"},style:{padding:"5px 15px",border:"1px solid currentColor",borderColor:"var(--variant-outlinedBorder, currentColor)",backgroundColor:"var(--variant-outlinedBg)",color:"var(--variant-outlinedColor)",[`&.${Y.disabled}`]:{border:`1px solid ${(t.vars||t).palette.action.disabledBackground}`}}},{props:{variant:"text"},style:{padding:"6px 8px",color:"var(--variant-textColor)",backgroundColor:"var(--variant-textBg)"}},...Object.entries(t.palette).filter((0,J.A)()).map((([e])=>({props:{color:e},style:{"--variant-textColor":(t.vars||t).palette[e].main,"--variant-outlinedColor":(t.vars||t).palette[e].main,"--variant-outlinedBorder":t.vars?`rgba(${t.vars.palette[e].mainChannel} / 0.5)`:(0,Q.X4)(t.palette[e].main,.5),"--variant-containedColor":(t.vars||t).palette[e].contrastText,"--variant-containedBg":(t.vars||t).palette[e].main,"@media (hover: hover)":{"&:hover":{"--variant-containedBg":(t.vars||t).palette[e].dark,"--variant-textBg":t.vars?`rgba(${t.vars.palette[e].mainChannel} / ${t.vars.palette.action.hoverOpacity})`:(0,Q.X4)(t.palette[e].main,t.palette.action.hoverOpacity),"--variant-outlinedBorder":(t.vars||t).palette[e].main,"--variant-outlinedBg":t.vars?`rgba(${t.vars.palette[e].mainChannel} / ${t.vars.palette.action.hoverOpacity})`:(0,Q.X4)(t.palette[e].main,t.palette.action.hoverOpacity)}}}}))),{props:{color:"inherit"},style:{color:"inherit",borderColor:"currentColor","--variant-containedBg":t.vars?t.vars.palette.Button.inheritContainedBg:e,"@media (hover: hover)":{"&:hover":{"--variant-containedBg":t.vars?t.vars.palette.Button.inheritContainedHoverBg:r,"--variant-textBg":t.vars?`rgba(${t.vars.palette.text.primaryChannel} / ${t.vars.palette.action.hoverOpacity})`:(0,Q.X4)(t.palette.text.primary,t.palette.action.hoverOpacity),"--variant-outlinedBg":t.vars?`rgba(${t.vars.palette.text.primaryChannel} / ${t.vars.palette.action.hoverOpacity})`:(0,Q.X4)(t.palette.text.primary,t.palette.action.hoverOpacity)}}}},{props:{size:"small",variant:"text"},style:{padding:"4px 5px",fontSize:t.typography.pxToRem(13)}},{props:{size:"large",variant:"text"},style:{padding:"8px 11px",fontSize:t.typography.pxToRem(15)}},{props:{size:"small",variant:"outlined"},style:{padding:"3px 9px",fontSize:t.typography.pxToRem(13)}},{props:{size:"large",variant:"outlined"},style:{padding:"7px 21px",fontSize:t.typography.pxToRem(15)}},{props:{size:"small",variant:"contained"},style:{padding:"4px 10px",fontSize:t.typography.pxToRem(13)}},{props:{size:"large",variant:"contained"},style:{padding:"8px 22px",fontSize:t.typography.pxToRem(15)}},{props:{disableElevation:!0},style:{boxShadow:"none","&:hover":{boxShadow:"none"},[`&.${Y.focusVisible}`]:{boxShadow:"none"},"&:active":{boxShadow:"none"},[`&.${Y.disabled}`]:{boxShadow:"none"}}},{props:{fullWidth:!0},style:{width:"100%"}}]}}))),nt=(0,p.Ay)("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:(t,e)=>{const{ownerState:r}=t;return[e.startIcon,e[`iconSize${(0,q.A)(r.size)}`]]}})({display:"inherit",marginRight:8,marginLeft:-4,variants:[{props:{size:"small"},style:{marginLeft:-2}},...et]}),ot=(0,p.Ay)("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:(t,e)=>{const{ownerState:r}=t;return[e.endIcon,e[`iconSize${(0,q.A)(r.size)}`]]}})({display:"inherit",marginRight:-4,marginLeft:8,variants:[{props:{size:"small"},style:{marginRight:-2}},...et]});var at=n.forwardRef((function(t,e){const r=n.useContext(Z),o=n.useContext(tt),a=(0,G.A)(r,t),i=(0,v.b)({props:a,name:"MuiButton"}),{children:l,color:s="primary",component:c="button",className:p,disabled:h=!1,disableElevation:f=!1,disableFocusRipple:g=!1,endIcon:m,focusVisibleClassName:x,fullWidth:b=!1,size:A="medium",startIcon:S,type:w,variant:_="text",...C}=i,E={...i,color:s,component:c,disabled:h,disableElevation:f,disableFocusRipple:g,fullWidth:b,size:A,type:w,variant:_},k=(t=>{const{color:e,disableElevation:r,fullWidth:n,size:o,variant:a,classes:i}=t,l={root:["root",a,`${a}${(0,q.A)(e)}`,`size${(0,q.A)(o)}`,`${a}Size${(0,q.A)(o)}`,`color${(0,q.A)(e)}`,r&&"disableElevation",n&&"fullWidth"],label:["label"],startIcon:["icon","startIcon",`iconSize${(0,q.A)(o)}`],endIcon:["icon","endIcon",`iconSize${(0,q.A)(o)}`]},s=(0,d.A)(l,K,i);return{...i,...s}})(E),z=S&&(0,y.jsx)(nt,{className:k.startIcon,ownerState:E,children:S}),R=m&&(0,y.jsx)(ot,{className:k.endIcon,ownerState:E,children:m}),$=o||"";return(0,y.jsxs)(rt,{ownerState:E,className:(0,u.A)(r.className,k.root,p,$),component:c,disabled:h,focusRipple:!g,focusVisibleClassName:(0,u.A)(k.focusVisible,x),ref:e,type:w,...C,classes:k,children:[z,l,R]})}));var it=t=>{let{lang:e}=t;const r=(0,n.useMemo)((()=>({ko:n.createElement("span",{role:"img","aria-label":"ko"},"🇰🇷"),en:n.createElement("span",{role:"img","aria-label":"en"},"🇬🇧")})),[]);return n.createElement(n.Fragment,null,r[e])};const lt={ko:"한국어",en:"English"},st={margin:0,padding:0,listStyle:"none",textDecoration:"none"},ct=(0,p.Ay)("ul")(st),ut=(0,p.Ay)("li")(st),dt=(0,p.Ay)(M.Link)(st);var pt=t=>{let{otherLangPosts:e,onClick:r}=t;const{spacing:o}=(0,a.A)(),l=(0,n.useCallback)((()=>{null==r||r()}),[r]);return n.createElement(i.A,null,n.createElement(ct,null,e.map((t=>{let{fields:e}=t;if(null==(null==e?void 0:e.path)||null==(null==e?void 0:e.lang))return null;const r=e.lang;return n.createElement(ut,{key:e.path},n.createElement(dt,{to:e.path,onClick:l},n.createElement(at,{variant:"outlined",size:"large"},n.createElement(i.A,{component:"span",sx:{marginRight:o(1)}},n.createElement(it,{lang:r})),lt[r])))}))))};const vt=t=>{var e,r,l,s,c;let{post:u,viewCount:d,otherLangPosts:p}=t;const{spacing:v,shape:h}=(0,a.A)(),{frontmatter:f,html:g}=u,m=null!==(e=null==f?void 0:f.title)&&void 0!==e?e:"",y=null!==(r=null==f?void 0:f.subTitle)&&void 0!==r?r:"",x=null!==(l=null==f?void 0:f.date)&&void 0!==l?l:"",b=null!==(s=null==f?void 0:f.tags)&&void 0!==s?s:[],A=null==f||null===(c=f.jumbotron)||void 0===c?void 0:c.childImageSharp;return n.createElement(n.Fragment,null,n.createElement(X,{title:m,subTitle:y,date:x,viewCount:d}),A&&n.createElement(i.A,{sx:{marginTop:v(6),borderRadius:h.borderRadius,overflow:"hidden"}},n.createElement(o.G,{image:(0,o.c)(A),alt:m,title:m})),p.length>0&&n.createElement(i.A,{sx:{marginTop:v(6)}},n.createElement(pt,{otherLangPosts:p})),n.createElement(I,{html:null!=g?g:""}),n.createElement(i.A,{component:"section",sx:{marginTop:v(4)}},n.createElement(H,{tags:null!=b?b:[],currentPost:u})))};var ht=(0,n.memo)(vt);var ft=r(2247);const gt=t=>{const{0:e,1:r}=(0,n.useState)(void 0);var o,a;return o=async()=>{try{const e=await(async()=>{const e=ft.A.database().ref("views").child(t);try{return await e.transaction((t=>(null!=t?t:0)+1)),(await e.once("value")).val()}catch(r){return 0}})();r(e)}catch(e){r(0)}},a=[],(0,n.useEffect)((()=>{o()}),a),e};var mt=t=>{var e,r,o;let{data:c,pageContext:u}=t;const{spacing:d}=(0,a.A)(),{markdownRemark:p,allMarkdownRemark:{edges:v}}=c,h=gt(null!==(e=null==p||null===(r=p.fields)||void 0===r?void 0:r.slug)&&void 0!==e?e:"");!function(t,e){if(!1===t)throw new Error(e)}(null!=p,"포스트 데이터를 찾을 수 없습니다.");const f=null!==(o=p.tableOfContents)&&void 0!==o?o:"",{previous:g,next:m}=u;return n.createElement(l.A,{right:n.createElement(i.A,{display:{xs:"none",lg:"block"},sx:{marginLeft:d(1)}},n.createElement(s,{tocHtml:null!=f?f:""})),rightSticky:!0},n.createElement(i.A,{sx:{marginBottom:d(4)}},n.createElement(ht,{post:p,viewCount:h,otherLangPosts:v.map((t=>t.node))})),n.createElement(j,{prev:g,next:m}))},yt=r(4644),xt=r(3477);var bt=t=>{var e,r,a,i,l,s,c,u,d;let{post:p}=t;const v=(0,xt.d)();if(null==v)return null;const h={"@context":"https://schema.org","@type":"NewsArticle",mainEntityOfPage:{"@type":"WebPage","@id":"https://evan-moon.github.io"},author:{"@type":"Person",name:f=null!==(e=null===(r=v.site)||void 0===r||null===(a=r.siteMetadata)||void 0===a||null===(i=a.author)||void 0===i?void 0:i.name)&&void 0!==e?e:"Evan Moon"},publisher:{"@type":"Person",name:f}};var f;const g=null===(l=p.frontmatter)||void 0===l||null===(s=l.thumbnail)||void 0===s?void 0:s.childImageSharp,m=null==g?"":(0,o.d)(g),y=Object.assign({},h,{headline:null===(c=p.frontmatter)||void 0===c?void 0:c.title,image:[m],datePublished:null===(u=p.frontmatter)||void 0===u?void 0:u.date,dateModified:null===(d=p.frontmatter)||void 0===d?void 0:d.date});return n.createElement("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(y)}})};var At=t=>n.createElement(mt,t);const St=t=>{var e,r,a,i,l,s,c,u;let{data:d}=t;const p=null===(e=d.markdownRemark)||void 0===e||null===(r=e.frontmatter)||void 0===r||null===(a=r.thumbnail)||void 0===a?void 0:a.childImageSharp,v=null!=p?(0,o.d)(p):void 0;return n.createElement(n.Fragment,null,n.createElement(yt.A,{title:null!==(i=null===(l=d.markdownRemark)||void 0===l||null===(s=l.frontmatter)||void 0===s?void 0:s.title)&&void 0!==i?i:void 0,description:null!==(c=null===(u=d.markdownRemark)||void 0===u?void 0:u.excerpt)&&void 0!==c?c:void 0,image:v}),d.markdownRemark&&n.createElement(bt,{post:d.markdownRemark}))}},1549:function(t,e,r){var n=r(2032),o=r(3862),a=r(6721),i=r(2749),l=r(5749);function s(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}s.prototype.clear=n,s.prototype.delete=o,s.prototype.get=a,s.prototype.has=i,s.prototype.set=l,t.exports=s},79:function(t,e,r){var n=r(3702),o=r(80),a=r(4739),i=r(8655),l=r(1175);function s(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}s.prototype.clear=n,s.prototype.delete=o,s.prototype.get=a,s.prototype.has=i,s.prototype.set=l,t.exports=s},8223:function(t,e,r){var n=r(6110)(r(9325),"Map");t.exports=n},3661:function(t,e,r){var n=r(3040),o=r(7670),a=r(289),i=r(4509),l=r(2949);function s(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}s.prototype.clear=n,s.prototype.delete=o,s.prototype.get=a,s.prototype.has=i,s.prototype.set=l,t.exports=s},8859:function(t,e,r){var n=r(3661),o=r(1380),a=r(1459);function i(t){var e=-1,r=null==t?0:t.length;for(this.__data__=new n;++e<r;)this.add(t[e])}i.prototype.add=i.prototype.push=o,i.prototype.has=a,t.exports=i},1873:function(t,e,r){var n=r(9325).Symbol;t.exports=n},1033:function(t){t.exports=function(t,e,r){switch(r.length){case 0:return t.call(e);case 1:return t.call(e,r[0]);case 2:return t.call(e,r[0],r[1]);case 3:return t.call(e,r[0],r[1],r[2])}return t.apply(e,r)}},5325:function(t,e,r){var n=r(6131);t.exports=function(t,e){return!!(null==t?0:t.length)&&n(t,e,0)>-1}},9905:function(t){t.exports=function(t,e,r){for(var n=-1,o=null==t?0:t.length;++n<o;)if(r(e,t[n]))return!0;return!1}},4932:function(t){t.exports=function(t,e){for(var r=-1,n=null==t?0:t.length,o=Array(n);++r<n;)o[r]=e(t[r],r,t);return o}},8406:function(t,e,r){var n=r(5288);t.exports=function(t,e){for(var r=t.length;r--;)if(n(t[r][0],e))return r;return-1}},2523:function(t){t.exports=function(t,e,r,n){for(var o=t.length,a=r+(n?1:-1);n?a--:++a<o;)if(e(t[a],a,t))return a;return-1}},2552:function(t,e,r){var n=r(1873),o=r(659),a=r(9350),i=n?n.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":i&&i in Object(t)?o(t):a(t)}},6131:function(t,e,r){var n=r(2523),o=r(7844),a=r(6959);t.exports=function(t,e,r){return e==e?a(t,e,r):n(t,o,r)}},7185:function(t,e,r){var n=r(8859),o=r(5325),a=r(9905),i=r(4932),l=r(7301),s=r(9219),c=Math.min;t.exports=function(t,e,r){for(var u=r?a:o,d=t[0].length,p=t.length,v=p,h=Array(p),f=1/0,g=[];v--;){var m=t[v];v&&e&&(m=i(m,l(e))),f=c(m.length,f),h[v]=!r&&(e||d>=120&&m.length>=120)?new n(v&&m):void 0}m=t[0];var y=-1,x=h[0];t:for(;++y<d&&g.length<f;){var b=m[y],A=e?e(b):b;if(b=r||0!==b?b:0,!(x?s(x,A):u(g,A,r))){for(v=p;--v;){var S=h[v];if(!(S?s(S,A):u(t[v],A,r)))continue t}x&&x.push(A),g.push(b)}}return g}},7844:function(t){t.exports=function(t){return t!=t}},5083:function(t,e,r){var n=r(1882),o=r(7296),a=r(3805),i=r(7473),l=/^\[object .+?Constructor\]$/,s=Function.prototype,c=Object.prototype,u=s.toString,d=c.hasOwnProperty,p=RegExp("^"+u.call(d).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");t.exports=function(t){return!(!a(t)||o(t))&&(n(t)?p:l).test(i(t))}},9302:function(t,e,r){var n=r(3488),o=r(6757),a=r(2865);t.exports=function(t,e){return a(o(t,e,n),t+"")}},9570:function(t,e,r){var n=r(7334),o=r(3243),a=r(3488),i=o?function(t,e){return o(t,"toString",{configurable:!0,enumerable:!1,value:n(e),writable:!0})}:a;t.exports=i},7301:function(t){t.exports=function(t){return function(e){return t(e)}}},9219:function(t){t.exports=function(t,e){return t.has(e)}},3122:function(t,e,r){var n=r(3693);t.exports=function(t){return n(t)?t:[]}},5481:function(t,e,r){var n=r(9325)["__core-js_shared__"];t.exports=n},3243:function(t,e,r){var n=r(6110),o=function(){try{var t=n(Object,"defineProperty");return t({},"",{}),t}catch(e){}}();t.exports=o},4840:function(t,e,r){var n="object"==typeof r.g&&r.g&&r.g.Object===Object&&r.g;t.exports=n},2651:function(t,e,r){var n=r(4218);t.exports=function(t,e){var r=t.__data__;return n(e)?r["string"==typeof e?"string":"hash"]:r.map}},6110:function(t,e,r){var n=r(5083),o=r(392);t.exports=function(t,e){var r=o(t,e);return n(r)?r:void 0}},659:function(t,e,r){var n=r(1873),o=Object.prototype,a=o.hasOwnProperty,i=o.toString,l=n?n.toStringTag:void 0;t.exports=function(t){var e=a.call(t,l),r=t[l];try{t[l]=void 0;var n=!0}catch(s){}var o=i.call(t);return n&&(e?t[l]=r:delete t[l]),o}},392:function(t){t.exports=function(t,e){return null==t?void 0:t[e]}},2032:function(t,e,r){var n=r(1042);t.exports=function(){this.__data__=n?n(null):{},this.size=0}},3862:function(t){t.exports=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}},6721:function(t,e,r){var n=r(1042),o=Object.prototype.hasOwnProperty;t.exports=function(t){var e=this.__data__;if(n){var r=e[t];return"__lodash_hash_undefined__"===r?void 0:r}return o.call(e,t)?e[t]:void 0}},2749:function(t,e,r){var n=r(1042),o=Object.prototype.hasOwnProperty;t.exports=function(t){var e=this.__data__;return n?void 0!==e[t]:o.call(e,t)}},5749:function(t,e,r){var n=r(1042);t.exports=function(t,e){var r=this.__data__;return this.size+=this.has(t)?0:1,r[t]=n&&void 0===e?"__lodash_hash_undefined__":e,this}},4218:function(t){t.exports=function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t}},7296:function(t,e,r){var n,o=r(5481),a=(n=/[^.]+$/.exec(o&&o.keys&&o.keys.IE_PROTO||""))?"Symbol(src)_1."+n:"";t.exports=function(t){return!!a&&a in t}},3702:function(t){t.exports=function(){this.__data__=[],this.size=0}},80:function(t,e,r){var n=r(8406),o=Array.prototype.splice;t.exports=function(t){var e=this.__data__,r=n(e,t);return!(r<0)&&(r==e.length-1?e.pop():o.call(e,r,1),--this.size,!0)}},4739:function(t,e,r){var n=r(8406);t.exports=function(t){var e=this.__data__,r=n(e,t);return r<0?void 0:e[r][1]}},8655:function(t,e,r){var n=r(8406);t.exports=function(t){return n(this.__data__,t)>-1}},1175:function(t,e,r){var n=r(8406);t.exports=function(t,e){var r=this.__data__,o=n(r,t);return o<0?(++this.size,r.push([t,e])):r[o][1]=e,this}},3040:function(t,e,r){var n=r(1549),o=r(79),a=r(8223);t.exports=function(){this.size=0,this.__data__={hash:new n,map:new(a||o),string:new n}}},7670:function(t,e,r){var n=r(2651);t.exports=function(t){var e=n(this,t).delete(t);return this.size-=e?1:0,e}},289:function(t,e,r){var n=r(2651);t.exports=function(t){return n(this,t).get(t)}},4509:function(t,e,r){var n=r(2651);t.exports=function(t){return n(this,t).has(t)}},2949:function(t,e,r){var n=r(2651);t.exports=function(t,e){var r=n(this,t),o=r.size;return r.set(t,e),this.size+=r.size==o?0:1,this}},1042:function(t,e,r){var n=r(6110)(Object,"create");t.exports=n},9350:function(t){var e=Object.prototype.toString;t.exports=function(t){return e.call(t)}},6757:function(t,e,r){var n=r(1033),o=Math.max;t.exports=function(t,e,r){return e=o(void 0===e?t.length-1:e,0),function(){for(var a=arguments,i=-1,l=o(a.length-e,0),s=Array(l);++i<l;)s[i]=a[e+i];i=-1;for(var c=Array(e+1);++i<e;)c[i]=a[i];return c[e]=r(s),n(t,this,c)}}},9325:function(t,e,r){var n=r(4840),o="object"==typeof self&&self&&self.Object===Object&&self,a=n||o||Function("return this")();t.exports=a},1380:function(t){t.exports=function(t){return this.__data__.set(t,"__lodash_hash_undefined__"),this}},1459:function(t){t.exports=function(t){return this.__data__.has(t)}},2865:function(t,e,r){var n=r(9570),o=r(1811)(n);t.exports=o},1811:function(t){var e=Date.now;t.exports=function(t){var r=0,n=0;return function(){var o=e(),a=16-(o-n);if(n=o,a>0){if(++r>=800)return arguments[0]}else r=0;return t.apply(void 0,arguments)}}},6959:function(t){t.exports=function(t,e,r){for(var n=r-1,o=t.length;++n<o;)if(t[n]===e)return n;return-1}},7473:function(t){var e=Function.prototype.toString;t.exports=function(t){if(null!=t){try{return e.call(t)}catch(r){}try{return t+""}catch(r){}}return""}},7334:function(t){t.exports=function(t){return function(){return t}}},5288:function(t){t.exports=function(t,e){return t===e||t!=t&&e!=e}},3488:function(t){t.exports=function(t){return t}},7668:function(t,e,r){var n=r(4932),o=r(7185),a=r(9302),i=r(3122),l=a((function(t){var e=n(t,i);return e.length&&e[0]===t[0]?o(e):[]}));t.exports=l},4894:function(t,e,r){var n=r(1882),o=r(294);t.exports=function(t){return null!=t&&o(t.length)&&!n(t)}},3693:function(t,e,r){var n=r(4894),o=r(346);t.exports=function(t){return o(t)&&n(t)}},1882:function(t,e,r){var n=r(2552),o=r(3805);t.exports=function(t){if(!o(t))return!1;var e=n(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e}},294:function(t){t.exports=function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991}},3805:function(t){t.exports=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}},346:function(t){t.exports=function(t){return null!=t&&"object"==typeof t}}}]);
//# sourceMappingURL=component---src-templates-post-page-template-index-tsx-9e96faf92ab965bfd73b.js.map