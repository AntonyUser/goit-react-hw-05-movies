"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[658],{76:function(e,t,n){n.d(t,{P:function(){return i},z:function(){return o}});var r=n(861),c=n(757),a=n.n(c),u=n(44);u.ZP.defaults.baseURL="https://api.themoviedb.org";var s="f0b659a36af27a39ded78e96381ce721",o=function(){var e=(0,r.Z)(a().mark((function e(){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.ZP.get("3/trending/movie/day?api_key=".concat(s));case 3:return t=e.sent,e.abrupt("return",t.data.results);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=(0,r.Z)(a().mark((function e(t,n,r){var c;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.ZP.get("3/movie/".concat(t).concat(n?"/credits":"").concat(r?"/reviews":"","?api_key=").concat(s));case 3:return c=e.sent,e.abrupt("return",c.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n,r){return e.apply(this,arguments)}}()},658:function(e,t,n){n.r(t);var r=n(885),c=n(76),a=n(791),u=n(689),s=n(184);t.default=function(){var e=(0,u.UO)().movieId,t=(0,a.useState)([]),n=(0,r.Z)(t,2),o=n[0],i=n[1],l=(0,a.useState)(null),p=(0,r.Z)(l,2),f=p[0],h=p[1];return(0,a.useEffect)((function(){try{(0,c.P)(e,!1,!0).then((function(e){i(e.results)}))}catch(f){h(f)}}),[e]),(0,s.jsxs)("div",{children:[o.length>0?(0,s.jsx)("ul",{children:o.map((function(e){return(0,s.jsxs)("li",{children:[(0,s.jsx)("p",{children:e.author}),(0,s.jsx)("p",{children:e.content})]},e.id)}))}):(0,s.jsx)("h3",{children:"Sorry, reviews not found"}),f&&f.message]})}}}]);
//# sourceMappingURL=658.e40b68c3.chunk.js.map