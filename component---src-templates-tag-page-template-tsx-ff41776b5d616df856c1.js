(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"0YJo":function(e,a,t){"use strict";var n=t("q1tI"),o=t.n(n),l=t("R/WZ"),i=t("tRbT"),r=Object(l.a)((function(e){return{root:{"& > *":{marginBottom:(0,e.spacing)(2)}}}}));a.a=Object(n.memo)((function(e){var a=e.children,t=r();return o.a.createElement(i.a,{container:!0,className:t.root},a)}))},"3cYt":function(e,a){e.exports=function(e){return function(a){return null==e?void 0:e[a]}}},"6nK8":function(e,a,t){t("Ll4R");var n=t("dVn5"),o=t("fo6e"),l=t("dt0z"),i=t("9NmV");e.exports=function(e,a,t){return e=l(e),void 0===(a=t?void 0:a)?o(e)?i(e):n(e):e.match(a)||[]}},"98vb":function(e,a,t){"use strict";t("y7hu");var n=t("q1tI"),o=t.n(n),l=t("g30o"),i=t("Wbzz"),r=t("R/WZ"),d=t("eD//"),s=t("tVbE"),c=t("IsqK"),u=t("wx14"),f=t("Ff2n"),g=(t("17x9"),t("iuhU")),p=t("H2TA"),m=n.forwardRef((function(e,a){var t=e.classes,o=e.className,l=Object(f.a)(e,["classes","className"]);return n.createElement("div",Object(u.a)({className:Object(g.a)(t.root,o),ref:a},l))}));m.muiName="ListItemSecondaryAction";var k=Object(p.a)({root:{position:"absolute",right:16,top:"50%",transform:"translateY(-50%)"}},{name:"MuiListItemSecondaryAction"})(m),b=t("9jPY"),h=t("ffbJ"),v=t("dBaT"),x=t("og9F"),y=t("Tx77"),O=t("BFev"),C=Object(r.a)((function(e){return{link:{color:"inherit",textDecoration:"none"},item:{listStyle:"none",padding:e.spacing(1),borderRadius:e.shape.borderRadius/2,overflow:"hidden"},chip:{borderRadius:e.shape.borderRadius,fontSize:"0.6rem",height:"auto",padding:"0.3rem 0",backgroundColor:e.palette.grey[200]}}}));a.a=function(e){var a=e.onClickCategory,t=C(),r=function(e){return void 0===e&&(e="ko"),h.data.allMarkdownRemark.group.filter((function(a){return a.nodes.filter((function(a){return a.fields.lang===e})).length>0})).map((function(e){return{fieldValue:e.fieldValue,totalCount:e.totalCount}}))}(Object(v.useRecoilState)(x.a)[0]),u=Object(O.a)(),f=Object(y.a)().getCategoryPath,g=Object(n.useCallback)((function(e){null==a||a(e)}),[a]);return o.a.createElement(l.a,{title:"카테고리"},o.a.createElement(d.a,{component:"nav",dense:!0},o.a.createElement(i.Link,{to:"/",className:t.link},o.a.createElement(s.a,{button:!0,className:t.item,onClick:function(){return g("전체")}},o.a.createElement(c.a,null,"전체"),o.a.createElement(k,null,o.a.createElement(b.a,{className:t.chip,label:u.length,size:"small"})))),r.map((function(e,a){var n=e.fieldValue,l=e.totalCount;return o.a.createElement(i.Link,{key:a,to:f(n),className:t.link},o.a.createElement(s.a,{button:!0,className:t.item,onClick:function(){return g(n)}},o.a.createElement(c.a,null,n),o.a.createElement(k,null,o.a.createElement(b.a,{className:t.chip,label:l,size:"small"}))))}))))}},"9NmV":function(e,a,t){t("Ll4R"),t("klQ5");var n="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",o="["+n+"]",l="\\d+",i="[\\u2700-\\u27bf]",r="[a-z\\xdf-\\xf6\\xf8-\\xff]",d="[^\\ud800-\\udfff"+n+l+"\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]",s="(?:\\ud83c[\\udde6-\\uddff]){2}",c="[\\ud800-\\udbff][\\udc00-\\udfff]",u="[A-Z\\xc0-\\xd6\\xd8-\\xde]",f="(?:"+r+"|"+d+")",g="(?:"+u+"|"+d+")",p="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",m="[\\ufe0e\\ufe0f]?"+p+("(?:\\u200d(?:"+["[^\\ud800-\\udfff]",s,c].join("|")+")[\\ufe0e\\ufe0f]?"+p+")*"),k="(?:"+[i,s,c].join("|")+")"+m,b=RegExp([u+"?"+r+"+(?:['’](?:d|ll|m|re|s|t|ve))?(?="+[o,u,"$"].join("|")+")",g+"+(?:['’](?:D|LL|M|RE|S|T|VE))?(?="+[o,u+f,"$"].join("|")+")",u+"?"+f+"+(?:['’](?:d|ll|m|re|s|t|ve))?",u+"+(?:['’](?:D|LL|M|RE|S|T|VE))?","\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",l,k].join("|"),"g");e.exports=function(e){return e.match(b)||[]}},N1om:function(e,a,t){var n=t("sgoq")((function(e,a,t){return e+(t?"-":"")+a.toLowerCase()}));e.exports=n},TKrE:function(e,a,t){t("sC2a"),t("klQ5");var n=t("qRkn"),o=t("dt0z"),l=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,i=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");e.exports=function(e){return(e=o(e))&&e.replace(l,n).replace(i,"")}},Tx77:function(e,a,t){"use strict";t.d(a,"a",(function(){return c}));var n=t("blIu"),o=t("dBaT"),l=t("og9F"),i=t("N1om"),r=t.n(i),d=t("q1tI"),s=function(e,a,t){return e+"/"+r()(a)+t},c=function(){var e=Object(n.a)().defaultLanguage,a=Object(o.useRecoilState)(l.a)[0],t=Object(d.useMemo)((function(){return a===e?"":"/"+a}),[a,e]);return{getCategoryPath:Object(d.useCallback)((function(e){return s("/categories",e,t)}),[t]),getTagPath:Object(d.useCallback)((function(e){return s("/tags",e,t)}),[t])}}},Z0cm:function(e,a,t){t("MIFh");var n=Array.isArray;e.exports=n},af51:function(e,a,t){"use strict";var n=t("q1tI"),o=t.n(n),l=t("R/WZ"),i=t("kKAo"),r=t("tRbT"),d=t("hlFM"),s=t("ofer"),c=t("sWYD"),u=Object(l.a)((function(e){var a,t,n,o=e.spacing,l=e.breakpoints,i=e.shape;return{root:{padding:o(2.5)},infoWrapper:(a={order:2},a[l.up("md")]={order:1},a),thumbnailWrapper:(n={order:1},n[l.up("md")]={order:2},n["& > div"]=(t={position:"relative",width:"100%",paddingBottom:"70%"},t[l.up("md")]={width:120,paddingBottom:"100%"},t),n),thubmnail:{position:"absolute",objectFit:"cover",width:"100%",height:"100%",borderRadius:i.borderRadius},title:{fontWeight:"bold"},description:{whiteSpace:"pre-line"},date:{marginTop:o(1),fontWeight:200},badge:{marginBottom:o(1)}}}));a.a=function(e){var a=e.title,t=e.thumbnail,l=e.description,f=e.date,g=e.badge,p=e.onClick,m=u(),k=Object(n.useMemo)((function(){if(null!=f)return Object(c.a)(new Date(f),"yyy MMM dd")}),[f]);return o.a.createElement(i.a,{variant:"outlined",className:m.root,onClick:p},o.a.createElement(r.a,{container:!0,spacing:2,alignItems:"center"},o.a.createElement(r.a,{item:!0,xs:12,md:!0,className:m.infoWrapper},o.a.createElement(d.a,null,null!=g?o.a.createElement(d.a,{className:m.badge},g):null,o.a.createElement(s.a,{gutterBottom:!0,variant:"body1",component:"h2",className:m.title},a),o.a.createElement(s.a,{gutterBottom:!0,component:"p",variant:"caption",className:m.description},l),o.a.createElement(s.a,{variant:"caption",component:"p",color:"textSecondary",className:m.date},k))),o.a.createElement(r.a,{item:!0,xs:12,md:"auto",className:m.thumbnailWrapper},o.a.createElement("div",null,o.a.createElement("img",{src:t,alt:a,className:m.thubmnail})))))}},asDA:function(e,a){e.exports=function(e,a,t,n){var o=-1,l=null==e?0:e.length;for(n&&l&&(t=e[++o]);++o<l;)t=a(t,e[o],o,e);return t}},dVn5:function(e,a,t){t("Ll4R");var n=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;e.exports=function(e){return e.match(n)||[]}},dt0z:function(e,a,t){var n=t("zoYe");e.exports=function(e){return null==e?"":n(e)}},eUgh:function(e,a){e.exports=function(e,a){for(var t=-1,n=null==e?0:e.length,o=Array(n);++t<n;)o[t]=a(e[t],t,e);return o}},ffbJ:function(e){e.exports=JSON.parse('{"data":{"allMarkdownRemark":{"group":[{"fieldValue":"Graphics","totalCount":1,"nodes":[{"fields":{"lang":"en"}}]},{"fieldValue":"Network","totalCount":1,"nodes":[{"fields":{"lang":"en"}}]},{"fieldValue":"Programming","totalCount":3,"nodes":[{"fields":{"lang":"en"}},{"fields":{"lang":"en"}},{"fields":{"lang":"en"}}]},{"fieldValue":"Tutorials","totalCount":1,"nodes":[{"fields":{"lang":"en"}}]},{"fieldValue":"Web","totalCount":1,"nodes":[{"fields":{"lang":"en"}}]},{"fieldValue":"그래픽스","totalCount":5,"nodes":[{"fields":{"lang":"ko"}},{"fields":{"lang":"ko"}},{"fields":{"lang":"ko"}},{"fields":{"lang":"ko"}},{"fields":{"lang":"ko"}}]},{"fieldValue":"네트워크","totalCount":10,"nodes":[{"fields":{"lang":"ko"}},{"fields":{"lang":"ko"}},{"fields":{"lang":"ko"}},{"fields":{"lang":"ko"}},{"fields":{"lang":"ko"}},{"fields":{"lang":"ko"}},{"fields":{"lang":"ko"}},{"fields":{"lang":"ko"}},{"fields":{"lang":"ko"}},{"fields":{"lang":"ko"}}]},{"fieldValue":"머신러닝","totalCount":3,"nodes":[{"fields":{"lang":"ko"}},{"fields":{"lang":"ko"}},{"fields":{"lang":"ko"}}]},{"fieldValue":"소프트스킬","totalCount":8,"nodes":[{"fields":{"lang":"ko"}},{"fields":{"lang":"ko"}},{"fields":{"lang":"ko"}},{"fields":{"lang":"ko"}},{"fields":{"lang":"ko"}},{"fields":{"lang":"ko"}},{"fields":{"lang":"ko"}},{"fields":{"lang":"ko"}}]},{"fieldValue":"아키텍처","totalCount":8,"nodes":[{"fields":{"lang":"ko"}},{"fields":{"lang":"ko"}},{"fields":{"lang":"ko"}},{"fields":{"lang":"ko"}},{"fields":{"lang":"ko"}},{"fields":{"lang":"ko"}},{"fields":{"lang":"ko"}},{"fields":{"lang":"ko"}}]},{"fieldValue":"알고리즘","totalCount":7,"nodes":[{"fields":{"lang":"ko"}},{"fields":{"lang":"ko"}},{"fields":{"lang":"ko"}},{"fields":{"lang":"ko"}},{"fields":{"lang":"ko"}},{"fields":{"lang":"ko"}},{"fields":{"lang":"ko"}}]},{"fieldValue":"에세이","totalCount":24,"nodes":[{"fields":{"lang":"ko"}},{"fields":{"lang":"ko"}},{"fields":{"lang":"ko"}},{"fields":{"lang":"ko"}},{"fields":{"lang":"ko"}},{"fields":{"lang":"ko"}},{"fields":{"lang":"ko"}},{"fields":{"lang":"ko"}},{"fields":{"lang":"ko"}},{"fields":{"lang":"ko"}},{"fields":{"lang":"ko"}},{"fields":{"lang":"ko"}},{"fields":{"lang":"ko"}},{"fields":{"lang":"ko"}},{"fields":{"lang":"ko"}},{"fields":{"lang":"ko"}},{"fields":{"lang":"ko"}},{"fields":{"lang":"ko"}},{"fields":{"lang":"ko"}},{"fields":{"lang":"ko"}},{"fields":{"lang":"ko"}},{"fields":{"lang":"ko"}},{"fields":{"lang":"ko"}},{"fields":{"lang":"ko"}}]},{"fieldValue":"오디오","totalCount":3,"nodes":[{"fields":{"lang":"ko"}},{"fields":{"lang":"ko"}},{"fields":{"lang":"ko"}}]},{"fieldValue":"웹","totalCount":5,"nodes":[{"fields":{"lang":"ko"}},{"fields":{"lang":"ko"}},{"fields":{"lang":"ko"}},{"fields":{"lang":"ko"}},{"fields":{"lang":"ko"}}]},{"fieldValue":"자바스크립트","totalCount":12,"nodes":[{"fields":{"lang":"ko"}},{"fields":{"lang":"ko"}},{"fields":{"lang":"ko"}},{"fields":{"lang":"ko"}},{"fields":{"lang":"ko"}},{"fields":{"lang":"ko"}},{"fields":{"lang":"ko"}},{"fields":{"lang":"ko"}},{"fields":{"lang":"ko"}},{"fields":{"lang":"ko"}},{"fields":{"lang":"ko"}},{"fields":{"lang":"ko"}}]},{"fieldValue":"튜토리얼","totalCount":15,"nodes":[{"fields":{"lang":"ko"}},{"fields":{"lang":"ko"}},{"fields":{"lang":"ko"}},{"fields":{"lang":"ko"}},{"fields":{"lang":"ko"}},{"fields":{"lang":"ko"}},{"fields":{"lang":"ko"}},{"fields":{"lang":"ko"}},{"fields":{"lang":"ko"}},{"fields":{"lang":"ko"}},{"fields":{"lang":"ko"}},{"fields":{"lang":"ko"}},{"fields":{"lang":"ko"}},{"fields":{"lang":"ko"}},{"fields":{"lang":"ko"}}]},{"fieldValue":"프로그래밍","totalCount":65,"nodes":[{"fields":{"lang":"ko"}},{"fields":{"lang":"ko"}},{"fields":{"lang":"ko"}},{"fields":{"lang":"ko"}},{"fields":{"lang":"ko"}},{"fields":{"lang":"ko"}},{"fields":{"lang":"ko"}},{"fields":{"lang":"ko"}},{"fields":{"lang":"ko"}},{"fields":{"lang":"ko"}},{"fields":{"lang":"ko"}},{"fields":{"lang":"ko"}},{"fields":{"lang":"ko"}},{"fields":{"lang":"ko"}},{"fields":{"lang":"ko"}},{"fields":{"lang":"ko"}},{"fields":{"lang":"ko"}},{"fields":{"lang":"ko"}},{"fields":{"lang":"ko"}},{"fields":{"lang":"ko"}},{"fields":{"lang":"ko"}},{"fields":{"lang":"ko"}},{"fields":{"lang":"ko"}},{"fields":{"lang":"ko"}},{"fields":{"lang":"ko"}},{"fields":{"lang":"ko"}},{"fields":{"lang":"ko"}},{"fields":{"lang":"ko"}},{"fields":{"lang":"ko"}},{"fields":{"lang":"ko"}},{"fields":{"lang":"ko"}},{"fields":{"lang":"ko"}},{"fields":{"lang":"ko"}},{"fields":{"lang":"ko"}},{"fields":{"lang":"ko"}},{"fields":{"lang":"ko"}},{"fields":{"lang":"ko"}},{"fields":{"lang":"ko"}},{"fields":{"lang":"ko"}},{"fields":{"lang":"ko"}},{"fields":{"lang":"ko"}},{"fields":{"lang":"ko"}},{"fields":{"lang":"ko"}},{"fields":{"lang":"ko"}},{"fields":{"lang":"ko"}},{"fields":{"lang":"ko"}},{"fields":{"lang":"ko"}},{"fields":{"lang":"ko"}},{"fields":{"lang":"ko"}},{"fields":{"lang":"ko"}},{"fields":{"lang":"ko"}},{"fields":{"lang":"ko"}},{"fields":{"lang":"ko"}},{"fields":{"lang":"ko"}},{"fields":{"lang":"ko"}},{"fields":{"lang":"ko"}},{"fields":{"lang":"ko"}},{"fields":{"lang":"ko"}},{"fields":{"lang":"ko"}},{"fields":{"lang":"ko"}},{"fields":{"lang":"ko"}},{"fields":{"lang":"ko"}},{"fields":{"lang":"ko"}},{"fields":{"lang":"ko"}},{"fields":{"lang":"ko"}}]}]}}}')},fo6e:function(e,a){var t=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;e.exports=function(e){return t.test(e)}},g30o:function(e,a,t){"use strict";var n=t("q1tI"),o=t.n(n),l=t("30+C"),i=t("wx14"),r=t("Ff2n"),d=(t("17x9"),t("iuhU")),s=t("H2TA"),c=t("ofer"),u=n.forwardRef((function(e,a){var t=e.action,o=e.avatar,l=e.classes,s=e.className,u=e.component,f=void 0===u?"div":u,g=e.disableTypography,p=void 0!==g&&g,m=e.subheader,k=e.subheaderTypographyProps,b=e.title,h=e.titleTypographyProps,v=Object(r.a)(e,["action","avatar","classes","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"]),x=b;null==x||x.type===c.a||p||(x=n.createElement(c.a,Object(i.a)({variant:o?"body2":"h5",className:l.title,component:"span",display:"block"},h),x));var y=m;return null==y||y.type===c.a||p||(y=n.createElement(c.a,Object(i.a)({variant:o?"body2":"body1",className:l.subheader,color:"textSecondary",component:"span",display:"block"},k),y)),n.createElement(f,Object(i.a)({className:Object(d.a)(l.root,s),ref:a},v),o&&n.createElement("div",{className:l.avatar},o),n.createElement("div",{className:l.content},x,y),t&&n.createElement("div",{className:l.action},t))})),f=Object(s.a)({root:{display:"flex",alignItems:"center",padding:16},avatar:{flex:"0 0 auto",marginRight:16},action:{flex:"0 0 auto",alignSelf:"flex-start",marginTop:-8,marginRight:-8},content:{flex:"1 1 auto"},title:{},subheader:{}},{name:"MuiCardHeader"})(u),g=t("oa/T");a.a=function(e){var a=e.title,t=void 0===a?"":a,n=e.children;return o.a.createElement(l.a,{variant:"outlined"},o.a.createElement(f,{title:o.a.createElement(c.a,{variant:"caption",color:"textSecondary"},t)}),o.a.createElement(g.a,null,n))}},"iW+Q":function(e,a,t){"use strict";t("E5k/");var n=t("q1tI"),o=t.n(n),l=t("R/WZ"),i=t("hlFM"),r=(t("AqHK"),t("wx14")),d=t("Ff2n"),s=(t("17x9"),t("iuhU")),c=t("H2TA"),u=(t("sc67"),t("YbXK"),t("cFtU"),t("KQm4")),f=t("ODXe"),g=t("yCxk");var p=t("ye/S"),m=t("tr08"),k=t("VD++"),b=t("5AJ6"),h=Object(b.a)(n.createElement("path",{d:"M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"}),"FirstPage"),v=Object(b.a)(n.createElement("path",{d:"M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"}),"LastPage"),x=Object(b.a)(n.createElement("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),"NavigateBefore"),y=Object(b.a)(n.createElement("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),"NavigateNext"),O=t("NqtD"),C=n.forwardRef((function(e,a){var t=e.classes,o=e.className,l=e.color,i=void 0===l?"standard":l,c=e.component,u=e.disabled,f=void 0!==u&&u,g=e.page,p=e.selected,b=void 0!==p&&p,C=e.shape,j=void 0===C?"round":C,E=e.size,N=void 0===E?"medium":E,R=e.type,z=void 0===R?"page":R,T=e.variant,w=void 0===T?"text":T,V=Object(d.a)(e,["classes","className","color","component","disabled","page","selected","shape","size","type","variant"]),L=("rtl"===Object(m.a)().direction?{previous:y,next:x,last:h,first:v}:{previous:x,next:y,first:h,last:v})[z];return"start-ellipsis"===z||"end-ellipsis"===z?n.createElement("div",{ref:a,className:Object(s.a)(t.root,t.ellipsis,f&&t.disabled,"medium"!==N&&t["size".concat(Object(O.a)(N))])},"…"):n.createElement(k.a,Object(r.a)({ref:a,component:c,disabled:f,focusVisibleClassName:t.focusVisible,className:Object(s.a)(t.root,t.page,t[w],t[j],o,"standard"!==i&&t["".concat(w).concat(Object(O.a)(i))],f&&t.disabled,b&&t.selected,"medium"!==N&&t["size".concat(Object(O.a)(N))])},V),"page"===z&&g,L?n.createElement(L,{className:t.icon}):null)})),j=Object(c.a)((function(e){return{root:Object(r.a)({},e.typography.body2,{borderRadius:16,textAlign:"center",boxSizing:"border-box",minWidth:32,height:32,padding:"0 6px",margin:"0 3px",color:e.palette.text.primary}),page:{transition:e.transitions.create(["color","background-color"],{duration:e.transitions.duration.short}),"&:hover":{backgroundColor:e.palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},"&$focusVisible":{backgroundColor:e.palette.action.focus},"&$selected":{backgroundColor:e.palette.action.selected,"&:hover, &$focusVisible":{backgroundColor:Object(p.c)(e.palette.action.selected,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{opacity:1,color:e.palette.action.disabled,backgroundColor:e.palette.action.selected}},"&$disabled":{opacity:e.palette.action.disabledOpacity}},sizeSmall:{minWidth:26,height:26,borderRadius:13,margin:"0 1px",padding:"0 4px","& $icon":{fontSize:e.typography.pxToRem(18)}},sizeLarge:{minWidth:40,height:40,borderRadius:20,padding:"0 10px",fontSize:e.typography.pxToRem(15),"& $icon":{fontSize:e.typography.pxToRem(22)}},textPrimary:{"&$selected":{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.main,"&:hover, &$focusVisible":{backgroundColor:e.palette.primary.dark,"@media (hover: none)":{backgroundColor:e.palette.primary.main}},"&$disabled":{color:e.palette.action.disabled}}},textSecondary:{"&$selected":{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.main,"&:hover, &$focusVisible":{backgroundColor:e.palette.secondary.dark,"@media (hover: none)":{backgroundColor:e.palette.secondary.main}},"&$disabled":{color:e.palette.action.disabled}}},outlined:{border:"1px solid ".concat("light"===e.palette.type?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"),"&$selected":{"&$disabled":{border:"1px solid ".concat(e.palette.action.disabledBackground)}}},outlinedPrimary:{"&$selected":{color:e.palette.primary.main,border:"1px solid ".concat(Object(p.c)(e.palette.primary.main,.5)),backgroundColor:Object(p.c)(e.palette.primary.main,e.palette.action.activatedOpacity),"&:hover, &$focusVisible":{backgroundColor:Object(p.c)(e.palette.primary.main,e.palette.action.activatedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{color:e.palette.action.disabled}}},outlinedSecondary:{"&$selected":{color:e.palette.secondary.main,border:"1px solid ".concat(Object(p.c)(e.palette.secondary.main,.5)),backgroundColor:Object(p.c)(e.palette.secondary.main,e.palette.action.activatedOpacity),"&:hover, &$focusVisible":{backgroundColor:Object(p.c)(e.palette.secondary.main,e.palette.action.activatedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{color:e.palette.action.disabled}}},rounded:{borderRadius:e.shape.borderRadius},ellipsis:{height:"auto","&$disabled":{opacity:e.palette.action.disabledOpacity}},focusVisible:{},disabled:{},selected:{},icon:{fontSize:e.typography.pxToRem(20),margin:"0 -8px"}}}),{name:"MuiPaginationItem"})(C);function E(e,a,t){return"page"===e?"".concat(t?"":"Go to ","page ").concat(a):"Go to ".concat(e," page")}var N=n.forwardRef((function(e,a){e.boundaryCount;var t=e.classes,o=e.className,l=e.color,i=void 0===l?"standard":l,c=(e.count,e.defaultPage,e.disabled,e.getItemAriaLabel),p=void 0===c?E:c,m=(e.hideNextButton,e.hidePrevButton,e.onChange,e.page,e.renderItem),k=void 0===m?function(e){return n.createElement(j,e)}:m,b=e.shape,h=void 0===b?"round":b,v=(e.showFirstButton,e.showLastButton,e.siblingCount,e.size),x=void 0===v?"medium":v,y=e.variant,O=void 0===y?"text":y,C=Object(d.a)(e,["boundaryCount","classes","className","color","count","defaultPage","disabled","getItemAriaLabel","hideNextButton","hidePrevButton","onChange","page","renderItem","shape","showFirstButton","showLastButton","siblingCount","size","variant"]),N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=e.boundaryCount,t=void 0===a?1:a,n=e.componentName,o=void 0===n?"usePagination":n,l=e.count,i=void 0===l?1:l,s=e.defaultPage,c=void 0===s?1:s,p=e.disabled,m=void 0!==p&&p,k=e.hideNextButton,b=void 0!==k&&k,h=e.hidePrevButton,v=void 0!==h&&h,x=e.onChange,y=e.page,O=e.showFirstButton,C=void 0!==O&&O,j=e.showLastButton,E=void 0!==j&&j,N=e.siblingCount,R=void 0===N?1:N,z=Object(d.a)(e,["boundaryCount","componentName","count","defaultPage","disabled","hideNextButton","hidePrevButton","onChange","page","showFirstButton","showLastButton","siblingCount"]),T=t-1,w=Object(g.a)({controlled:y,default:c,name:o,state:"page"}),V=Object(f.a)(w,2),L=V[0],A=V[1],I=function(e,a){y||A(a),x&&x(e,a)},M=function(e,a){var t=a-e+1;return Array.from({length:t},(function(a,t){return e+t}))},S=M(1,Math.min(T+1,i)),P=M(Math.max(i-T,T+2),i),B=Math.max(Math.min(L-R,i-T-2*R-2),T+3),W=Math.min(Math.max(L+R,T+2*R+3),P[0]-2),$=[].concat(Object(u.a)(C?["first"]:[]),Object(u.a)(v?[]:["previous"]),Object(u.a)(S),Object(u.a)(B>T+3?["start-ellipsis"]:2+T<i-T-1?[2+T]:[]),Object(u.a)(M(B,W)),Object(u.a)(W<i-T-2?["end-ellipsis"]:i-T-1>T+1?[i-T-1]:[]),Object(u.a)(P),Object(u.a)(b?[]:["next"]),Object(u.a)(E?["last"]:[])),F=function(e){switch(e){case"first":return 1;case"previous":return L-1;case"next":return L+1;case"last":return i;default:return null}},U=$.map((function(e){return"number"==typeof e?{onClick:function(a){I(a,e)},type:"page",page:e,selected:e===L,disabled:m,"aria-current":e===L?"true":void 0}:{onClick:function(a){I(a,F(e))},type:e,page:F(e),selected:!1,disabled:m||-1===e.indexOf("ellipsis")&&("next"===e||"last"===e?L>=i:L<=1)}}));return Object(r.a)({items:U},z)}(Object(r.a)({},e,{componentName:"Pagination"})).items;return n.createElement("nav",Object(r.a)({"aria-label":"pagination navigation",className:Object(s.a)(t.root,o),ref:a},C),n.createElement("ul",{className:t.ul},N.map((function(e,a){return n.createElement("li",{key:a},k(Object(r.a)({},e,{color:i,"aria-label":p(e.type,e.page,e.selected),shape:h,size:x,variant:O})))}))))})),R=Object(c.a)({root:{},ul:{display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"}},{name:"MuiPagination"})(N),z=t("Wbzz"),T=t("blIu"),w=Object(l.a)((function(e){var a=e.spacing,t=e.palette;return{root:{marginTop:a(4),"& .MuiPaginationItem-page.Mui-selected":{color:t.common.white},"& .MuiPaginationItem-page.Mui-disabled":{visibility:"hidden"}}}}));a.a=function(e){var a=e.pageCount,t=e.currentPage,l=e.defaultUrl,r=void 0===l?"/":l,d=e.lang,s=w(),c=Object(T.a)().defaultLanguage,u=Object(n.useMemo)((function(){return d===c?"":d}),[c,d]),f=Object(n.useCallback)((function(e){return 1===e?""+r+u:r+"page/"+e+"/"+u}),[r,u]);return o.a.createElement(i.a,{display:"flex",justifyContent:"center",className:s.root},o.a.createElement(R,{count:a,page:t,color:"primary",size:"large",renderItem:function(e){return o.a.createElement(j,Object.assign({component:z.Link,to:f(e.page)},e))}}))}},liAW:function(e,a,t){"use strict";t.r(a),t.d(a,"pageQuery",(function(){return O}));var n=t("q1tI"),o=t.n(n),l=(t("HQhv"),t("VXBa")),i=t("1Yd/"),r=t("98vb"),d=t("iW+Q"),s=t("NHwv"),c=t("R/WZ"),u=t("hlFM"),f=t("tRbT"),g=t("0YJo"),p=t("Wbzz"),m=t("af51"),k=t("dBaT"),b=t("og9F"),h=Object(s.a)("tag_page"),v=function(e){h.click("click_category",{categoryName:e})},x=Object(c.a)({items:{transition:"transform 0.2s ease-in-out","& a":{textDecoration:"none"},"&:hover":{transform:"scale(1.01)"}}}),y=function(e){var a=e.data,t=e.location,s=e.pageContext,c=s.tag,y=s.totalCount,O=x(),C=a.allMarkdownRemark,j=C.edges,E=C.pageInfo,N=t.pathname.split("/"),R="/"+N[1]+"/"+N[2],z=Object(n.useMemo)((function(){return j.map((function(e){return e.node}))}),[j]),T=Object(k.useRecoilState)(b.a)[0];return Object(n.useEffect)((function(){h.view()}),[]),o.a.createElement(l.a,{title:o.a.createElement(l.a.Title,{title:c,description:"총 "+y+"개의 포스팅"}),right:o.a.createElement(u.a,null,o.a.createElement(r.a,{onClickCategory:v}))},o.a.createElement(i.a,{title:c}),o.a.createElement(g.a,null,z.map((function(e){var a,t,n,l,i;return o.a.createElement(f.a,{item:!0,xs:12,key:e.frontmatter.title,className:O.items},o.a.createElement(p.Link,{to:e.fields.path,onClick:function(){return function(e){h.click("click_posting",{path:e})}(e.fields.path)}},o.a.createElement(m.a,{title:null!==(a=e.frontmatter.title)&&void 0!==a?a:"",description:null!==(t=e.excerpt)&&void 0!==t?t:"",thumbnail:null!==(n=null===(l=e.frontmatter.thumbnail.childImageSharp)||void 0===l||null===(i=l.fluid)||void 0===i?void 0:i.src)&&void 0!==n?n:"",date:e.frontmatter.date})))}))),o.a.createElement(d.a,{pageCount:E.pageCount,currentPage:E.currentPage,defaultUrl:R,lang:T}))},O=(a.default=function(e){return o.a.createElement(y,e)},"901100437")},qRkn:function(e,a,t){var n=t("3cYt")({À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"});e.exports=n},sgoq:function(e,a,t){t("sC2a"),t("klQ5");var n=t("asDA"),o=t("TKrE"),l=t("6nK8"),i=RegExp("['’]","g");e.exports=function(e){return function(a){return n(l(o(a).replace(i,"")),e,"")}}},zoYe:function(e,a,t){t("q8oJ"),t("C9fy"),t("8npG");var n=t("nmnc"),o=t("eUgh"),l=t("Z0cm"),i=t("/9aa"),r=n?n.prototype:void 0,d=r?r.toString:void 0;e.exports=function e(a){if("string"==typeof a)return a;if(l(a))return o(a,e)+"";if(i(a))return d?d.call(a):"";var t=a+"";return"0"==t&&1/a==-1/0?"-0":t}}}]);
//# sourceMappingURL=component---src-templates-tag-page-template-tsx-ff41776b5d616df856c1.js.map