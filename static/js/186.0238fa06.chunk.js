"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[186],{186:function(t,n,e){e.r(n);var r=e(439),a=e(793),c=e(689),u=e(791),o=e(436),i=e(184);n.default=function(){var t=(0,u.useState)([]),n=(0,r.Z)(t,2),e=n[0],s=n[1],f=(0,u.useState)(!1),p=(0,r.Z)(f,2),h=p[0],v=p[1],d=(0,u.useState)(null),l=(0,r.Z)(d,2),x=l[0],m=l[1],w=(0,c.UO)().movieId;return(0,u.useEffect)((function(){v(!0),(0,o.tx)(w).then((function(t){s(t.results)})).catch((function(t){s([]),m(String(t)),console.log(t)})).finally((function(){v(!1)}))}),[w]),(0,i.jsxs)("section",{children:[h&&(0,i.jsx)(a.a,{}),x&&(0,i.jsx)("span",{children:x}),e.length?(0,i.jsx)("ul",{children:e.map((function(t){var n=t.id,e=t.author,r=t.content;return(0,i.jsxs)("li",{children:[(0,i.jsxs)("h3",{children:["Author: ",e||"?"]}),(0,i.jsx)("p",{children:r})]},n)}))}):(0,i.jsx)("p",{children:"Sorry, we don't have any reviews for this movie."})]})}},436:function(t,n,e){e.d(n,{Df:function(){return s},M1:function(){return h},TP:function(){return p},aK:function(){return f},tx:function(){return v}});var r=e(861),a=e(757),c=e.n(a),u=e(243),o="afe52aa8ce58d403415529b103529ed7",i="https://api.themoviedb.org/3/",s=function(){var t=(0,r.Z)(c().mark((function t(){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(i,"trending/movie/day?api_key=").concat(o));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(i,"search/movie?api_key=").concat(o,"&query=").concat(n));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(i,"movie/").concat(n,"?api_key=").concat(o));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),h=function(){var t=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(i,"movie/").concat(n,"/credits?api_key=").concat(o));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),v=function(){var t=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(i,"movie/").concat(n,"/reviews?api_key=").concat(o));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=186.0238fa06.chunk.js.map