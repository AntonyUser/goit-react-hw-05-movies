"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[250],{76:function(t,e,n){n.d(e,{P:function(){return o},z:function(){return i}});var r=n(861),a=n(757),c=n.n(a),s=n(44);s.ZP.defaults.baseURL="https://api.themoviedb.org";var u="f0b659a36af27a39ded78e96381ce721",i=function(){var t=(0,r.Z)(c().mark((function t(){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s.ZP.get("3/trending/movie/day?api_key=".concat(u));case 3:return e=t.sent,t.abrupt("return",e.data.results);case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}(),o=function(){var t=(0,r.Z)(c().mark((function t(e,n,r){var a;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s.ZP.get("3/movie/".concat(e).concat(n?"/credits":"").concat(r?"/reviews":"","?api_key=").concat(u));case 3:return a=t.sent,t.abrupt("return",a.data);case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e,n,r){return t.apply(this,arguments)}}()},282:function(t,e,n){n.r(e);var r=n(885),a=n(76),c=n(791),s=n(689),u=n(184);e.default=function(){var t=(0,s.UO)().movieId,e=(0,c.useState)(!1),n=(0,r.Z)(e,2),i=n[0],o=n[1],p=(0,c.useState)([]),l=(0,r.Z)(p,2),f=l[0],h=l[1],d=(0,c.useState)(null),v=(0,r.Z)(d,2),m=v[0],g=v[1];return(0,c.useEffect)((function(){o(!0);try{(0,a.P)(t,!0,!1).then((function(t){h(t.cast)}))}catch(m){g(m)}finally{o(!1)}}),[t]),(0,u.jsxs)("div",{children:[i&&(0,u.jsx)("p",{children:"Loading...please wait"}),f.length>0?(0,u.jsx)("ul",{children:f.map((function(t){var e=t.name,n=t.profile_path,r=t.character;return(0,u.jsxs)("li",{children:[(0,u.jsx)("img",{src:"https://image.tmdb.org/t/p/w200".concat(n),alt:e,width:"200"}),(0,u.jsx)("p",{children:e}),(0,u.jsxs)("p",{children:["Character: ",r]})]},e)}))}):(0,u.jsx)("p",{children:"Sorry, cast not found"}),m&&m.message]})}}}]);
//# sourceMappingURL=250.e1e4ef3e.chunk.js.map