(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"+6XX":function(t,e,n){var r=n("y1pI");t.exports=function(t){return r(this.__data__,t)>-1}},"0XPj":function(t,e,n){var r=n("eUgh"),a=n("s+kx"),o=n("EA7m"),i=n("XzbM"),c=o((function(t){var e=r(t,i);return e.length&&e[0]===t[0]?a(e):[]}));t.exports=c},"1hJj":function(t,e,n){var r=n("e4Nc"),a=n("ftKO"),o=n("3A9y");function i(t){var e=-1,n=null==t?0:t.length;for(this.__data__=new r;++e<n;)this.add(t[e])}i.prototype.add=i.prototype.push=a,i.prototype.has=o,t.exports=i},"2ajD":function(t,e){t.exports=function(t){return t!=t}},"2gN3":function(t,e,n){var r=n("Kz5y")["__core-js_shared__"];t.exports=r},"3A9y":function(t,e){t.exports=function(t){return this.__data__.has(t)}},"3Fdi":function(t,e,n){n("q8oJ"),n("C9fy"),n("8npG");var r=Function.prototype.toString;t.exports=function(t){if(null!=t){try{return r.call(t)}catch(e){}try{return t+""}catch(e){}}return""}},"3L66":function(t,e,n){var r=n("MMmD"),a=n("ExA7");t.exports=function(t){return a(t)&&r(t)}},"3cYt":function(t,e){t.exports=function(t){return function(e){return null==t?void 0:t[e]}}},"4kuk":function(t,e,n){var r=n("SfRM"),a=n("Hvzi"),o=n("u8Dt"),i=n("ekgI"),c=n("JSQU");function l(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}l.prototype.clear=r,l.prototype.delete=a,l.prototype.get=o,l.prototype.has=i,l.prototype.set=c,t.exports=l},"6nK8":function(t,e,n){n("Ll4R");var r=n("dVn5"),a=n("fo6e"),o=n("dt0z"),i=n("9NmV");t.exports=function(t,e,n){return t=o(t),void 0===(e=n?void 0:e)?a(t)?i(t):r(t):t.match(e)||[]}},"88Gu":function(t,e,n){n("1dPr");var r=Date.now;t.exports=function(t){var e=0,n=0;return function(){var a=r(),o=16-(a-n);if(n=a,o>0){if(++e>=800)return arguments[0]}else e=0;return t.apply(void 0,arguments)}}},"9NmV":function(t,e,n){n("Ll4R"),n("klQ5");var r="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",a="["+r+"]",o="\\d+",i="[\\u2700-\\u27bf]",c="[a-z\\xdf-\\xf6\\xf8-\\xff]",l="[^\\ud800-\\udfff"+r+o+"\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]",u="(?:\\ud83c[\\udde6-\\uddff]){2}",s="[\\ud800-\\udbff][\\udc00-\\udfff]",f="[A-Z\\xc0-\\xd6\\xd8-\\xde]",p="(?:"+c+"|"+l+")",d="(?:"+f+"|"+l+")",g="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",m="[\\ufe0e\\ufe0f]?"+g+("(?:\\u200d(?:"+["[^\\ud800-\\udfff]",u,s].join("|")+")[\\ufe0e\\ufe0f]?"+g+")*"),h="(?:"+[i,u,s].join("|")+")"+m,v=RegExp([f+"?"+c+"+(?:['’](?:d|ll|m|re|s|t|ve))?(?="+[a,f,"$"].join("|")+")",d+"+(?:['’](?:D|LL|M|RE|S|T|VE))?(?="+[a,f+p,"$"].join("|")+")",f+"?"+p+"+(?:['’](?:d|ll|m|re|s|t|ve))?",f+"+(?:['’](?:D|LL|M|RE|S|T|VE))?","\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",o,h].join("|"),"g");t.exports=function(t){return t.match(v)||[]}},CZoQ:function(t,e){t.exports=function(t,e,n){for(var r=n-1,a=t.length;++r<a;)if(t[r]===e)return r;return-1}},Cwc5:function(t,e,n){var r=n("NKxu"),a=n("Npjl");t.exports=function(t,e){var n=a(t,e);return r(n)?n:void 0}},E2jh:function(t,e,n){n("rzGZ"),n("Dq+y"),n("8npG");var r,a=n("2gN3"),o=(r=/[^.]+$/.exec(a&&a.keys&&a.keys.IE_PROTO||""))?"Symbol(src)_1."+r:"";t.exports=function(t){return!!o&&o in t}},EA7m:function(t,e,n){var r=n("zZ0H"),a=n("Ioao"),o=n("wclG");t.exports=function(t,e){return o(a(t,e,r),t+"")}},EpBk:function(t,e){t.exports=function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t}},FlWr:function(t,e,n){"use strict";n.r(e),n.d(e,"pageQuery",(function(){return it}));var r=n("q1tI"),a=n.n(r),o=n("R/WZ"),i=n("hlFM"),c=n("VXBa"),l=n("1Yd/"),u=Object(o.a)((function(t){var e=t.spacing,n=t.typography,r=t.shape,a=t.palette;return{root:{"& ul":{padding:0,margin:0},"& li":{padding:0,margin:0,listStyle:"none","& p":{margin:0},"& a":{display:"block",padding:e(1)+"px "+e(1.5)+"px "+e(1)+"px "+e(.75)+"px",marginLeft:e(.75),color:a.grey[800],textDecoration:"none",fontSize:n.caption.fontSize,borderRadius:r.borderRadius,"&:hover":{backgroundColor:a.grey[100]}}},"& li ul":{margin:"0 0 "+e(1.5)+"px "+e(1.5)+"px",borderLeft:"1px solid "+a.grey[200]}}}})),s=function(t){var e=t.tocHtml,n=t.onClick,o=u(),i=Object(r.useCallback)((function(t){var e=t.target;try{if("A"!==e.tagName)return;var r=decodeURIComponent(e.innerText);null==n||n(r)}catch(t){console.error(t)}}),[n]);return a.a.createElement("div",{onClick:i,dangerouslySetInnerHTML:{__html:e},className:o.root})},f=(n("y7hu"),n("tRbT")),p=n("30+C"),d=n("wx14"),g=n("Ff2n"),m=n("17x9"),h=n.n(m),v=n("iuhU"),x=n("H2TA"),y=n("VD++"),b=r.forwardRef((function(t,e){var n=t.children,a=t.classes,o=t.className,i=t.focusVisibleClassName,c=Object(g.a)(t,["children","classes","className","focusVisibleClassName"]);return r.createElement(y.a,Object(d.a)({className:Object(v.a)(a.root,o),focusVisibleClassName:Object(v.a)(i,a.focusVisible),ref:e},c),n,r.createElement("span",{className:a.focusHighlight}))})),E=Object(x.a)((function(t){return{root:{display:"block",textAlign:"inherit",width:"100%","&:hover $focusHighlight":{opacity:t.palette.action.hoverOpacity},"&$focusVisible $focusHighlight":{opacity:.12}},focusVisible:{},focusHighlight:{overflow:"hidden",pointerEvents:"none",position:"absolute",top:0,right:0,bottom:0,left:0,borderRadius:"inherit",opacity:0,backgroundColor:"currentcolor",transition:t.transitions.create("opacity",{duration:t.transitions.duration.short})}}}),{name:"MuiCardActionArea"})(b),k=n("oa/T"),_=n("Wbzz"),j=n("nxyq"),O=Object(o.a)((function(t){var e=t.spacing,n=t.palette;return{navCard:{marginBottom:e(2)},prev:{textAlign:"right"},link:{color:n.grey[600],textDecoration:"none"}}})),C=function(t){var e,n,r=t.prev,o=t.next,i=t.onClickNext,c=t.onClickPrev,l=O();return a.a.createElement(f.a,{container:!0,component:"nav",spacing:2,justify:"space-between",wrap:"wrap"},o?a.a.createElement(f.a,{item:!0,xs:12,lg:6},a.a.createElement(p.a,{className:l.navCard,variant:"outlined"},a.a.createElement(_.Link,{to:null!==(e=o.fields.path)&&void 0!==e?e:"/",rel:"next",className:l.link,onClick:i},a.a.createElement(E,null,a.a.createElement(k.a,null,a.a.createElement(j.a,{emoji:"👈",name:"previous"}),o.frontmatter.title))))):a.a.createElement(f.a,null),r?a.a.createElement(f.a,{item:!0,xs:12,lg:6},a.a.createElement(p.a,{className:l.navCard+" "+l.prev,variant:"outlined"},a.a.createElement(_.Link,{to:null!==(n=r.fields.path)&&void 0!==n?n:"/",rel:"prev",className:l.link,onClick:c},a.a.createElement(E,null,a.a.createElement(k.a,null,r.frontmatter.title,a.a.createElement(j.a,{emoji:"👉",name:"next"})))))):a.a.createElement(f.a,null))},z=n("9jPY"),S=Object(o.a)((function(t){var e=t.shape,n=t.palette,r=t.spacing,a=t.typography;return{root:{lineHeight:1.8,color:n.grey[800],"& h2, & h3, &, h4":{color:"#000000"},"& h2":{margin:r(4)+"px 0 "+r(2)+"px"},"& h3":{margin:r(3.5)+"px 0 "+r(2)+"px"},"& h4":{margin:r(3)+"px 0 "+r(2)+"px"},"& h5":{fontSize:a.body1.fontSize},"& a":{color:n.primary.main,textDecoration:"none","&:hover":{textDecoration:"underline"}},"& small":{fontSize:a.caption.fontSize},"& hr":{backgroundColor:n.grey[300],height:1,border:"none",display:"block",margin:r(3)+"px 0"},"& blockquote":{backgroundColor:n.grey[200],borderLeft:"5px solid "+n.grey[400],padding:r(2.5)+"px "+r(2.8)+"px",margin:r(3)+"px 0",textAlign:"left"},"& span.gatsby-resp-image-wrapper":{borderRadius:e.borderRadius,overflow:"hidden",margin:r(5)+"px 0 "+r(2)+"px","& + small":{display:"block",color:n.grey[700],marginBottom:r(5)+"px"}},"& table":{width:"100%","& thead":{backgroundColor:n.grey[100]},"& td, & th":{padding:r(1)+"px "+r(1.5)+"px",textAlign:"left",border:"none",'&[align="center"]':{textAlign:"center"}}},"& span.katex":{fontSize:a.body1.fontSize},"& span.katex-display":{margin:r(4)+"px 0","& span.katex":{fontSize:a.h6.fontSize}}}}})),N=function(t){var e=t.html,n=S();return a.a.createElement("div",{className:n.root,dangerouslySetInnerHTML:{__html:e}})};n("rzGZ"),n("Dq+y"),n("8npG"),n("Ggvi"),n("sc67"),n("4DPX"),n("E5k/");function w(){return(w=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function L(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var A=Object(r.forwardRef)((function(t,e){var n=t.color,r=void 0===n?"currentColor":n,o=t.size,i=void 0===o?24:o,c=L(t,["color","size"]);return a.a.createElement("svg",w({ref:e,xmlns:"http://www.w3.org/2000/svg",width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},c),a.a.createElement("path",{d:"M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"}),a.a.createElement("line",{x1:"7",y1:"7",x2:"7.01",y2:"7"}))}));A.propTypes={color:h.a.string,size:h.a.oneOfType([h.a.string,h.a.number])},A.displayName="Tag";var R=A,D=n("Tx77"),T=(n("3nLz"),n("zGcK"),n("BFev")),I=n("0XPj"),M=n.n(I),P=n("kKAo"),H=n("ofer"),G=n("uXd4");var Z=Object(o.a)((function(t){var e=t.spacing;return{root:{padding:e(2)},title:{marginBottom:e(2)}}})),V=function(t){var e=t.tags,n=t.currentPost,o=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,["tags","currentPost"]),c=Z(),l=Object(T.a)(n.fields.lang),u=Object(r.useMemo)((function(){return l.filter((function(t){return t.frontmatter.title!==n.frontmatter.title})).map((function(t){var n;return{post:t,tags:M()(null!==(n=t.frontmatter.tags)&&void 0!==n?n:[],e)}})).filter((function(t){return t.tags.length>0})).sort((function(t,e){return e.tags.length-t.tags.length})).map((function(t){return t.post})).slice(0,5)}),[n,l,e]);return 0===u.length?null:a.a.createElement(P.a,Object.assign({className:c.root,variant:"outlined"},o),a.a.createElement(H.a,{className:c.title},"관련 포스팅 보러가기"),a.a.createElement(i.a,null,u.map((function(t){var e,n,r,o,i,c;return a.a.createElement(G.a,{key:t.fields.path,thumbnail:null!==(e=null===(n=t.frontmatter.thumbnail)||void 0===n||null===(r=n.childImageSharp)||void 0===r||null===(o=r.fixed)||void 0===o?void 0:o.src)&&void 0!==e?e:"",title:null!==(i=t.frontmatter.title)&&void 0!==i?i:"",date:t.frontmatter.date,path:null!==(c=t.fields.path)&&void 0!==c?c:"/",categories:t.frontmatter.categories})}))))},K=n("wb2y"),U=Object(o.a)((function(t){var e=t.spacing,n=t.palette,r=t.typography;return{root:{marginBottom:e(5)},info:{color:n.grey[500]},time:{fontSize:r.caption.fontSize,marginRight:e(1)},categoryLink:{color:"inherit",textDecoration:"none",fontSize:r.caption.fontSize,"&:hover":{color:n.primary.main}},title:{fontSize:r.h5.fontSize,margin:"0 0 "+e(3)+"px"}}})),F=function(t){var e=t.title,n=t.date,o=t.categories,c=U(),l=Object(D.a)().getCategoryPath;return a.a.createElement("header",{className:c.root},a.a.createElement(i.a,{className:c.info},a.a.createElement("time",{className:c.time},n),a.a.createElement("span",null,o.map((function(t,e){return a.a.createElement(r.Fragment,{key:e},a.a.createElement(_.Link,{className:c.categoryLink,to:l(t)},t.toUpperCase()),e!==o.length-1&&" / ")})))),a.a.createElement("h1",{className:c.title},e),a.a.createElement(K.a,null))},Q=n("Z3vd"),B=function(t){var e=t.lang,n=Object(r.useMemo)((function(){return{ko:a.a.createElement("span",{role:"img","aria-label":"ko"},"🇰🇷"),en:a.a.createElement("span",{role:"img","aria-label":"en"},"🇬🇧")}}),[]);return a.a.createElement(a.a.Fragment,null,n[e])},Y={ko:"한국어",en:"English"},W=Object(o.a)({noStyle:{margin:0,padding:0,listStyle:"none",textDecoration:"none"}}),X=function(t){var e=t.otherLangPosts,n=t.onClick,o=W(),c=Object(r.useCallback)((function(){null==n||n()}),[n]);return a.a.createElement(i.a,null,a.a.createElement("ul",{className:o.noStyle},e.map((function(t){var e=t.fields;return a.a.createElement("li",{className:o.noStyle,key:e.path},a.a.createElement(_.Link,{to:e.path,className:o.noStyle,onClick:c},a.a.createElement(Q.a,{variant:"outlined",size:"large"},a.a.createElement(B,{lang:e.lang}),Y[e.lang])))}))))},q=Object(o.a)((function(t){var e=t.spacing,n=t.typography;return{thumbnail:{paddingTop:"42.8%",display:"block",position:"relative",marginBottom:e(2),"& img":{position:"absolute",top:0,left:0,right:0,bottom:0,width:"100%",height:"100%",objectFit:"cover",margin:0}},languages:{margin:e(4)+"px 0"},relatedPosts:{marginTop:e(4)},tagWrapper:{margin:0,padding:0,marginTop:e(4)},tags:{listStyle:"none",margin:0,padding:0,lineHeight:1.1,"& a":{textDecoration:"none",fontSize:n.caption.fontSize}}}})),J=function(t){var e,n,o=t.post,c=t.otherLangPosts,l=t.logger,u=q(),s=Object(D.a)().getTagPath,p=o.frontmatter,d=p.title,g=p.date,m=p.categories,h=p.tags,v=p.thumbnail,x=o.html,y=Object(r.useCallback)((function(){null==l||l.click("언어 변환")}),[l]),b=Object(r.useCallback)((function(){null==l||l.click("관련 포스팅")}),[l]),E=Object(r.useCallback)((function(){null==l||l.click("태그")}),[l]);return a.a.createElement(a.a.Fragment,null,v&&a.a.createElement("div",{className:u.thumbnail},a.a.createElement("img",{src:null==v||null===(e=v.childImageSharp)||void 0===e||null===(n=e.fluid)||void 0===n?void 0:n.src,alt:d,title:d})),a.a.createElement(F,{title:null!=d?d:"",date:g,categories:null!=m?m:[]}),c.length>0&&a.a.createElement(i.a,{className:u.languages},a.a.createElement(X,{otherLangPosts:c,onClick:y})),a.a.createElement(N,{html:null!=x?x:""}),a.a.createElement("section",{className:u.relatedPosts},a.a.createElement(V,{tags:null!=h?h:[],currentPost:o,onClick:b})),h&&a.a.createElement(f.a,{container:!0,className:u.tagWrapper,component:"ul",spacing:1},a.a.createElement(f.a,{item:!0,component:"li",className:u.tags},a.a.createElement(R,null)),h.map((function(t,e){return a.a.createElement(f.a,{item:!0,component:"li",key:e,className:u.tags},a.a.createElement(_.Link,{to:s(t),onClick:E},a.a.createElement(z.a,{label:t,size:"small",clickable:!0})))}))))},$=n("NHwv"),tt=Object($.a)("포스팅 페이지"),et=function(){tt.click("다음 포스팅")},nt=function(){tt.click("이전 포스팅")},rt=function(){tt.click("TOC")},at=Object(o.a)((function(t){var e=t.spacing;return{postCardWrapper:{marginBottom:e(4)},tocWrapper:{marginLeft:e(1)}}})),ot=function(t){var e,n,o=t.data,u=t.pageContext,f=at(),p=o.markdownRemark,d=o.allMarkdownRemark.edges,g=p.tableOfContents,m=p.frontmatter,h=p.excerpt,v=u.previous,x=u.next,y=null===(e=m.thumbnail)||void 0===e||null===(n=e.childImageSharp)||void 0===n?void 0:n.fluid;return Object(r.useEffect)((function(){tt.state(),tt.impression("포스팅_<"+p.frontmatter.title+">")}),[p.frontmatter.title]),a.a.createElement(c.a,{right:a.a.createElement(i.a,{display:{xs:"none",lg:"block"},className:f.tocWrapper},a.a.createElement(s,{tocHtml:null!=g?g:"",onClick:rt})),rightSticky:!0},a.a.createElement(l.a,{title:m.title,description:h,image:null==y?void 0:y.src}),a.a.createElement(i.a,{className:f.postCardWrapper},a.a.createElement(J,{post:p,otherLangPosts:d.map((function(t){return t.node}))})),a.a.createElement(C,{prev:v,next:x,onClickNext:et,onClickPrev:nt}))},it=(e.default=function(t){return a.a.createElement(ot,t)},"531458958")},GoyQ:function(t,e){t.exports=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}},H8j4:function(t,e,n){var r=n("QkVE");t.exports=function(t,e){var n=r(this,t),a=n.size;return n.set(t,e),this.size+=n.size==a?0:1,this}},Hvzi:function(t,e){t.exports=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}},Ioao:function(t,e,n){var r=n("heNW"),a=Math.max;t.exports=function(t,e,n){return e=a(void 0===e?t.length-1:e,0),function(){for(var o=arguments,i=-1,c=a(o.length-e,0),l=Array(c);++i<c;)l[i]=o[e+i];i=-1;for(var u=Array(e+1);++i<e;)u[i]=o[i];return u[e]=n(l),r(t,this,u)}}},JHgL:function(t,e,n){var r=n("QkVE");t.exports=function(t){return r(this,t).get(t)}},JSQU:function(t,e,n){var r=n("YESw");t.exports=function(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=r&&void 0===e?"__lodash_hash_undefined__":e,this}},KMkd:function(t,e){t.exports=function(){this.__data__=[],this.size=0}},KwMD:function(t,e){t.exports=function(t,e,n,r){for(var a=t.length,o=n+(r?1:-1);r?o--:++o<a;)if(e(t[o],o,t))return o;return-1}},MMmD:function(t,e,n){var r=n("lSCD"),a=n("shjB");t.exports=function(t){return null!=t&&a(t.length)&&!r(t)}},N1om:function(t,e,n){var r=n("sgoq")((function(t,e,n){return t+(n?"-":"")+e.toLowerCase()}));t.exports=r},NKxu:function(t,e,n){n("sC2a"),n("klQ5"),n("q8oJ"),n("C9fy"),n("8npG");var r=n("lSCD"),a=n("E2jh"),o=n("GoyQ"),i=n("3Fdi"),c=/^\[object .+?Constructor\]$/,l=Function.prototype,u=Object.prototype,s=l.toString,f=u.hasOwnProperty,p=RegExp("^"+s.call(f).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");t.exports=function(t){return!(!o(t)||a(t))&&(r(t)?p:c).test(i(t))}},Npjl:function(t,e){t.exports=function(t,e){return null==t?void 0:t[e]}},O0oS:function(t,e,n){var r=n("Cwc5"),a=function(){try{var t=r(Object,"defineProperty");return t({},"",{}),t}catch(e){}}();t.exports=a},QkVE:function(t,e,n){n("AqHK");var r=n("EpBk");t.exports=function(t,e){var n=t.__data__;return r(e)?n["string"==typeof e?"string":"hash"]:n.map}},"R/W3":function(t,e,n){var r=n("KwMD"),a=n("2ajD"),o=n("CZoQ");t.exports=function(t,e,n){return e==e?o(t,e,n):r(t,a,n)}},SfRM:function(t,e,n){var r=n("YESw");t.exports=function(){this.__data__=r?r(null):{},this.size=0}},TKrE:function(t,e,n){n("sC2a"),n("klQ5");var r=n("qRkn"),a=n("dt0z"),o=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,i=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");t.exports=function(t){return(t=a(t))&&t.replace(o,r).replace(i,"")}},Tx77:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var r=n("blIu"),a=n("dBaT"),o=n("og9F"),i=n("N1om"),c=n.n(i),l=n("q1tI"),u=function(t,e,n){return t+"/"+c()(e)+n},s=function(){var t=Object(r.a)().defaultLanguage,e=Object(a.useRecoilState)(o.a)[0],n=Object(l.useMemo)((function(){return e===t?"":"/"+e}),[e,t]);return{getCategoryPath:Object(l.useCallback)((function(t){return u("/categories",t,n)}),[n]),getTagPath:Object(l.useCallback)((function(t){return u("/tags",t,n)}),[n])}}},Xi7e:function(t,e,n){var r=n("KMkd"),a=n("adU4"),o=n("tMB7"),i=n("+6XX"),c=n("Z8oC");function l(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}l.prototype.clear=r,l.prototype.delete=a,l.prototype.get=o,l.prototype.has=i,l.prototype.set=c,t.exports=l},"Xt/L":function(t,e){t.exports=function(t,e,n){for(var r=-1,a=null==t?0:t.length;++r<a;)if(n(e,t[r]))return!0;return!1}},XzbM:function(t,e,n){var r=n("3L66");t.exports=function(t){return r(t)?t:[]}},YESw:function(t,e,n){var r=n("Cwc5")(Object,"create");t.exports=r},Z8oC:function(t,e,n){var r=n("y1pI");t.exports=function(t,e){var n=this.__data__,a=r(n,t);return a<0?(++this.size,n.push([t,e])):n[a][1]=e,this}},adU4:function(t,e,n){var r=n("y1pI"),a=Array.prototype.splice;t.exports=function(t){var e=this.__data__,n=r(e,t);return!(n<0)&&(n==e.length-1?e.pop():a.call(e,n,1),--this.size,!0)}},asDA:function(t,e){t.exports=function(t,e,n,r){var a=-1,o=null==t?0:t.length;for(r&&o&&(n=t[++a]);++a<o;)n=e(n,t[a],a,t);return n}},cvCv:function(t,e){t.exports=function(t){return function(){return t}}},dVn5:function(t,e,n){n("Ll4R");var r=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;t.exports=function(t){return t.match(r)||[]}},e4Nc:function(t,e,n){var r=n("fGT3"),a=n("k+1r"),o=n("JHgL"),i=n("pSRY"),c=n("H8j4");function l(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}l.prototype.clear=r,l.prototype.delete=a,l.prototype.get=o,l.prototype.has=i,l.prototype.set=c,t.exports=l},ebwN:function(t,e,n){var r=n("Cwc5")(n("Kz5y"),"Map");t.exports=r},ekgI:function(t,e,n){var r=n("YESw"),a=Object.prototype.hasOwnProperty;t.exports=function(t){var e=this.__data__;return r?void 0!==e[t]:a.call(e,t)}},fGT3:function(t,e,n){var r=n("4kuk"),a=n("Xi7e"),o=n("ebwN");t.exports=function(){this.size=0,this.__data__={hash:new r,map:new(o||a),string:new r}}},fo6e:function(t,e){var n=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;t.exports=function(t){return n.test(t)}},ftKO:function(t,e){t.exports=function(t){return this.__data__.set(t,"__lodash_hash_undefined__"),this}},heNW:function(t,e){t.exports=function(t,e,n){switch(n.length){case 0:return t.call(e);case 1:return t.call(e,n[0]);case 2:return t.call(e,n[0],n[1]);case 3:return t.call(e,n[0],n[1],n[2])}return t.apply(e,n)}},"jbM+":function(t,e,n){var r=n("R/W3");t.exports=function(t,e){return!!(null==t?0:t.length)&&r(t,e,0)>-1}},"k+1r":function(t,e,n){var r=n("QkVE");t.exports=function(t){var e=r(this,t).delete(t);return this.size-=e?1:0,e}},lSCD:function(t,e,n){var r=n("NykK"),a=n("GoyQ");t.exports=function(t){if(!a(t))return!1;var e=r(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e}},ljhN:function(t,e){t.exports=function(t,e){return t===e||t!=t&&e!=e}},pFRH:function(t,e,n){var r=n("cvCv"),a=n("O0oS"),o=n("zZ0H"),i=a?function(t,e){return a(t,"toString",{configurable:!0,enumerable:!1,value:r(e),writable:!0})}:o;t.exports=i},pSRY:function(t,e,n){var r=n("QkVE");t.exports=function(t){return r(this,t).has(t)}},qRkn:function(t,e,n){var r=n("3cYt")({À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"});t.exports=r},"s+kx":function(t,e,n){var r=n("1hJj"),a=n("jbM+"),o=n("Xt/L"),i=n("eUgh"),c=n("sEf8"),l=n("xYSL"),u=Math.min;t.exports=function(t,e,n){for(var s=n?o:a,f=t[0].length,p=t.length,d=p,g=Array(p),m=1/0,h=[];d--;){var v=t[d];d&&e&&(v=i(v,c(e))),m=u(v.length,m),g[d]=!n&&(e||f>=120&&v.length>=120)?new r(d&&v):void 0}v=t[0];var x=-1,y=g[0];t:for(;++x<f&&h.length<m;){var b=v[x],E=e?e(b):b;if(b=n||0!==b?b:0,!(y?l(y,E):s(h,E,n))){for(d=p;--d;){var k=g[d];if(!(k?l(k,E):s(t[d],E,n)))continue t}y&&y.push(E),h.push(b)}}return h}},sEf8:function(t,e){t.exports=function(t){return function(e){return t(e)}}},sgoq:function(t,e,n){n("sC2a"),n("klQ5");var r=n("asDA"),a=n("TKrE"),o=n("6nK8"),i=RegExp("['’]","g");t.exports=function(t){return function(e){return r(o(a(e).replace(i,"")),t,"")}}},shjB:function(t,e){t.exports=function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991}},tMB7:function(t,e,n){var r=n("y1pI");t.exports=function(t){var e=this.__data__,n=r(e,t);return n<0?void 0:e[n][1]}},u8Dt:function(t,e,n){var r=n("YESw"),a=Object.prototype.hasOwnProperty;t.exports=function(t){var e=this.__data__;if(r){var n=e[t];return"__lodash_hash_undefined__"===n?void 0:n}return a.call(e,t)?e[t]:void 0}},wclG:function(t,e,n){var r=n("pFRH"),a=n("88Gu")(r);t.exports=a},xYSL:function(t,e){t.exports=function(t,e){return t.has(e)}},y1pI:function(t,e,n){var r=n("ljhN");t.exports=function(t,e){for(var n=t.length;n--;)if(r(t[n][0],e))return n;return-1}},zZ0H:function(t,e){t.exports=function(t){return t}}}]);
//# sourceMappingURL=component---src-templates-post-page-template-tsx-9886618ca0b32ee1d0a3.js.map