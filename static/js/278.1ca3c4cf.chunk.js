"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[278],{76:function(e,t,n){n.d(t,{Pg:function(){return i},UN:function(){return l},z5:function(){return s}});var r=n(861),a=n(757),c=n.n(a),o=n(44);o.ZP.defaults.baseURL="https://api.themoviedb.org";var u="f0b659a36af27a39ded78e96381ce721",s=function(){var e=(0,r.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.ZP.get("3/trending/movie/day?api_key=".concat(u));case 3:return t=e.sent,e.abrupt("return",t.data.results);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=(0,r.Z)(c().mark((function e(t,n,r){var a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.ZP.get("3/movie/".concat(t).concat(n?"/credits":"").concat(r?"/reviews":"","?api_key=").concat(u));case 3:return a=e.sent,e.abrupt("return",a.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n,r){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.ZP.get("3/search/movie?api_key=".concat(u,"&query=").concat(t));case 3:return n=e.sent,e.abrupt("return",n.data.results);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()},309:function(e,t,n){n.d(t,{O:function(){return u}});var r=n(731),a="MoveList_movieList__PaFco",c="MoveList_movieLink__Jsdw7",o=n(184),u=function(e){var t=e.moviesData,n=e.location;return(0,o.jsx)("ul",{className:a,children:t.map((function(e){var t=e.original_title,a=e.name,u=e.id,s=e.poster_path;return(0,o.jsx)("li",{children:(0,o.jsxs)(r.rU,{to:"/movies/".concat(u),state:{from:n},className:c,children:[(0,o.jsx)("img",{src:"https://image.tmdb.org/t/p/w400".concat(s),alt:t,width:"400"}),t||a]})},u)}))})}},278:function(e,t,n){n.r(t);var r=n(885),a=n(731),c=n(689),o=n(791),u=n(76),s=n(309),i=n(184);t.default=function(){var e=(0,a.lr)(),t=(0,r.Z)(e,2),n=t[0],l=t[1],p=(0,o.useState)([]),f=(0,r.Z)(p,2),v=f[0],m=f[1],h=n.get("query"),d=(0,c.TH)();(0,o.useEffect)((function(){h&&(0,u.UN)(h).then((function(e){e.length>0?m(e):alert("Sorry, movies not found")}))}),[h]);return(0,i.jsxs)("div",{children:[(0,i.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),""!==e.target.elements.name.value){var t=e.target.elements.name.value;l({query:t})}else alert("Please write the name of the movie")},children:[(0,i.jsx)("input",{name:"name",type:"text"}),(0,i.jsx)("button",{type:"submit",children:"submit"})]}),h&&v.length>0&&(0,i.jsx)(s.O,{moviesData:v,location:d})]})}}}]);
//# sourceMappingURL=278.1ca3c4cf.chunk.js.map