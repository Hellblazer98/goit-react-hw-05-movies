"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[415],{126:function(t,n,e){e.d(n,{e:function(){return u}});var r=e(689),a=e(87),c=e(184),u=function(t){var n=t.movies,e=(0,r.TH)();return(0,c.jsx)("ul",{children:n.map((function(t){return(0,c.jsx)("li",{children:(0,c.jsx)(a.rU,{to:"/movies/".concat(t.id),state:{from:e},children:t.title})},t.id)}))})}},436:function(t,n,e){e.d(n,{Df:function(){return s},M1:function(){return v},TP:function(){return p},aK:function(){return f},tx:function(){return d}});var r=e(861),a=e(757),c=e.n(a),u=e(243),i="afe52aa8ce58d403415529b103529ed7",o="https://api.themoviedb.org/3/",s=function(){var t=(0,r.Z)(c().mark((function t(){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(o,"trending/movie/day?api_key=").concat(i));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(o,"search/movie?api_key=").concat(i,"&query=").concat(n));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(o,"movie/").concat(n,"?api_key=").concat(i));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),v=function(){var t=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(o,"movie/").concat(n,"/credits?api_key=").concat(i));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),d=function(){var t=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(o,"movie/").concat(n,"/reviews?api_key=").concat(i));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()},415:function(t,n,e){e.r(n);var r=e(439),a=e(791),c=e(436),u=e(793),i=e(126),o=e(184);n.default=function(){var t=(0,a.useState)([]),n=(0,r.Z)(t,2),e=n[0],s=n[1],f=(0,a.useState)(!1),p=(0,r.Z)(f,2),v=p[0],d=p[1],h=(0,a.useState)(null),l=(0,r.Z)(h,2),m=l[0],x=l[1];return(0,a.useEffect)((function(){d(!0),(0,c.Df)().then((function(t){s(t.results)})).catch((function(t){s([]),x(String(t))})).finally((function(){d(!1)}))}),[]),(0,o.jsxs)("main",{children:[(0,o.jsx)("h1",{children:"Trending today"}),v&&(0,o.jsx)(u.a,{}),m&&(0,o.jsx)("span",{children:m}),(0,o.jsx)(i.e,{movies:e})]})}}}]);
//# sourceMappingURL=415.91ed09ec.chunk.js.map