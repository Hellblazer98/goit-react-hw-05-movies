"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[875],{436:function(n,e,t){t.d(e,{Df:function(){return o},M1:function(){return f},TP:function(){return d},aK:function(){return p},tx:function(){return l}});var r=t(861),c=t(757),a=t.n(c),i=t(243),s="afe52aa8ce58d403415529b103529ed7",u="https://api.themoviedb.org/3/",o=function(){var n=(0,r.Z)(a().mark((function n(){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat(u,"trending/movie/day?api_key=").concat(s));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(a().mark((function n(e){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat(u,"search/movie?api_key=").concat(s,"&query=").concat(e));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(a().mark((function n(e){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat(u,"movie/").concat(e,"?api_key=").concat(s));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(a().mark((function n(e){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat(u,"movie/").concat(e,"/credits?api_key=").concat(s));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(a().mark((function n(e){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat(u,"movie/").concat(e,"/reviews?api_key=").concat(s));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},875:function(n,e,t){t.r(e),t.d(e,{default:function(){return d}});var r=t(439),c=t(87),a=t(689),i=t(791),s=t(436),u=t(793),o=t(184),p=function(n){var e=n.details,t=e.genres,r=void 0===t?[]:t,c=e.title,a=e.poster_path,i=e.release_date,s=e.vote_average,p=e.overview;return(0,o.jsx)("div",{children:(0,o.jsxs)("div",{children:[(0,o.jsx)("img",{src:a?"".concat("https://image.tmdb.org/t/p/w500").concat(a):(0,o.jsx)(u.a,{}),alt:c}),(0,o.jsxs)("h2",{children:[c,i?"(".concat(i.slice(0,4),")"):""]}),(0,o.jsxs)("p",{children:["User Score: ",s?"".concat(Math.round(10*s),"%"):"Empty.."]}),(0,o.jsx)("h3",{children:"Overview"}),(0,o.jsx)("p",{children:p||"Oops..."}),(0,o.jsx)("h3",{children:"Genres"}),(0,o.jsx)("p",{children:r.length?r.map((function(n){return n.name})).join(", "):"Oops..."})]})})},d=function(){var n,e,t=(0,a.UO)().movieId,d=(0,a.TH)(),f=(0,i.useRef)(null!==(n=null===(e=d.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/"),l=(0,i.useState)({}),h=(0,r.Z)(l,2),v=h[0],x=h[1],j=(0,i.useState)(!1),m=(0,r.Z)(j,2),w=m[0],k=m[1],g=(0,i.useState)(null),y=(0,r.Z)(g,2),Z=y[0],b=y[1];return(0,i.useEffect)((function(){k(!0),(0,s.TP)(t).then((function(n){x(n)})).catch((function(n){x({}),b(String(n))})).finally((function(){k(!1)}))}),[t]),(0,o.jsxs)("main",{children:[(0,o.jsxs)("div",{children:[(0,o.jsx)(c.rU,{to:f.current,children:"Go back"}),v&&(0,o.jsx)(p,{details:v}),w&&(0,o.jsx)(u.a,{}),Z&&(0,o.jsx)("span",{children:Z})]}),(0,o.jsx)("p",{children:"Additional information"}),(0,o.jsxs)("ul",{children:[(0,o.jsx)("li",{children:(0,o.jsx)(c.rU,{to:"cast",children:"Cast"})}),(0,o.jsx)("li",{children:(0,o.jsx)(c.rU,{to:"reviews",children:"Reviews"})})]}),(0,o.jsx)(i.Suspense,{fallback:(0,o.jsx)(u.a,{}),children:(0,o.jsx)(a.j3,{})})]})}}}]);
//# sourceMappingURL=875.6bac99c2.chunk.js.map