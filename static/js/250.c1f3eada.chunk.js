"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[250],{76:function(t,e,r){r.d(e,{Pg:function(){return i},UN:function(){return p},z5:function(){return o}});var n=r(861),a=r(757),c=r.n(a),u=r(44);u.ZP.defaults.baseURL="https://api.themoviedb.org";var s="f0b659a36af27a39ded78e96381ce721",o=function(){var t=(0,n.Z)(c().mark((function t(){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.ZP.get("3/trending/movie/day?api_key=".concat(s));case 3:return e=t.sent,t.abrupt("return",e.data.results);case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}(),i=function(){var t=(0,n.Z)(c().mark((function t(e,r,n){var a;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.ZP.get("3/movie/".concat(e).concat(r?"/credits":"").concat(n?"/reviews":"","?api_key=").concat(s));case 3:return a=t.sent,t.abrupt("return",a.data);case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e,r,n){return t.apply(this,arguments)}}(),p=function(){var t=(0,n.Z)(c().mark((function t(e){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.ZP.get("3/search/movie?api_key=".concat(s,"&query=").concat(e));case 3:return r=t.sent,t.abrupt("return",r.data.results);case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},282:function(t,e,r){r.r(e);var n=r(885),a=r(76),c=r(791),u=r(689),s=r(184);e.default=function(){var t=(0,u.UO)().movieId,e=(0,c.useState)(!1),r=(0,n.Z)(e,2),o=r[0],i=r[1],p=(0,c.useState)([]),l=(0,n.Z)(p,2),f=l[0],h=l[1],d=(0,c.useState)(null),v=(0,n.Z)(d,2),m=v[0],g=v[1];return(0,c.useEffect)((function(){i(!0);try{(0,a.Pg)(t,!0,!1).then((function(t){h(t.cast)}))}catch(m){g(m)}finally{i(!1)}}),[t]),(0,s.jsxs)("div",{children:[o&&(0,s.jsx)("p",{children:"Loading...please wait"}),f.length>0?(0,s.jsx)("ul",{children:f.map((function(t){var e=t.name,r=t.profile_path,n=t.character;return(0,s.jsxs)("li",{children:[(0,s.jsx)("img",{src:"https://image.tmdb.org/t/p/w200".concat(r),alt:e,width:"200"}),(0,s.jsx)("p",{children:e}),(0,s.jsxs)("p",{children:["Character: ",n]})]},e)}))}):(0,s.jsx)("p",{children:"Sorry, cast not found"}),m&&m.message]})}}}]);
//# sourceMappingURL=250.c1f3eada.chunk.js.map