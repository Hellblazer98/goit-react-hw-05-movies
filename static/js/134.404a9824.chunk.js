"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[134],{126:function(t,n,e){e.d(n,{e:function(){return u}});var r=e(689),a=e(87),c=e(184),u=function(t){var n=t.movies,e=(0,r.TH)();return(0,c.jsx)("ul",{children:n.map((function(t){return(0,c.jsx)("li",{children:(0,c.jsx)(a.rU,{to:"/movies/".concat(t.id),state:{from:e},children:t.title})},t.id)}))})}},436:function(t,n,e){e.d(n,{Df:function(){return s},M1:function(){return v},TP:function(){return p},aK:function(){return f},tx:function(){return l}});var r=e(861),a=e(757),c=e.n(a),u=e(243),i="afe52aa8ce58d403415529b103529ed7",o="https://api.themoviedb.org/3/",s=function(){var t=(0,r.Z)(c().mark((function t(){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(o,"trending/movie/day?api_key=").concat(i));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(o,"search/movie?api_key=").concat(i,"&query=").concat(n));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(o,"movie/").concat(n,"?api_key=").concat(i));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),v=function(){var t=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(o,"movie/").concat(n,"/credits?api_key=").concat(i));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),l=function(){var t=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(o,"movie/").concat(n,"/reviews?api_key=").concat(i));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()},134:function(t,n,e){e.r(n);var r=e(439),a=e(791),c=e(87),u=e(128),i=e(436),o=e(126),s=e(793),f=e(184);n.default=function(){var t,n=(0,a.useState)([]),e=(0,r.Z)(n,2),p=e[0],v=e[1],l=(0,a.useState)(!1),d=(0,r.Z)(l,2),h=d[0],m=d[1],x=(0,a.useState)(null),k=(0,r.Z)(x,2),y=k[0],w=k[1],Z=(0,c.lr)(),b=(0,r.Z)(Z,2),j=b[0],g=b[1],_=null!==(t=j.get("quary"))&&void 0!==t?t:"";(0,a.useEffect)((function(){m(!0),(0,i.aK)(_).then((function(t){v(t.results)})).catch((function(t){v([]),w(String(t))})).finally((function(){m(!1)}))}),[_]);return(0,f.jsxs)("main",{children:[(0,f.jsxs)("form",{autoComplete:"off",onSubmit:function(t){t.preventDefault();var n=t.currentTarget.elements.input.value.trim();g(n?{quary:n}:{})},children:[(0,f.jsx)("input",{type:"search",name:"input"}),(0,f.jsx)("button",{children:(0,f.jsx)(u.G4C,{size:"16"})})]}),h&&(0,f.jsx)(s.a,{}),y&&(0,f.jsx)("span",{children:y}),(0,f.jsx)(o.e,{movies:p})]})}}}]);
//# sourceMappingURL=134.404a9824.chunk.js.map