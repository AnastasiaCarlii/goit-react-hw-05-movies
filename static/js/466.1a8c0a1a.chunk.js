"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[466],{232:function(e,t,n){n.d(t,{Z:function(){return c}});n(791);var r=n.p+"static/media/notFound.de88128527c9f023bf24.png",a=n(87),u=n(184),c=function(e){var t=e.movies;return(0,u.jsx)("ul",{children:t.map((function(e){var t=e.id,n=e.title,c=e.name,s=e.original_title,i=e.poster_path;return(0,u.jsxs)(a.rU,{to:"/movies/".concat(t),children:[" ",(0,u.jsxs)("li",{children:[(0,u.jsx)("img",{src:i?"https://image.tmdb.org/t/p/w300/".concat(i):r,alt:n||c||s}),(0,u.jsx)("p",{children:n||c||s})]})]},t)}))})}},5:function(e,t,n){n.d(t,{p:function(){return d},B:function(){return v}});var r=n(861),a=n(439),u=n(757),c=n.n(u),s=n(791),i=n(243),o="22a5ac0887c10804847656f832680839";i.Z.defaults.baseURL="https://api.themoviedb.org/3";var f=function(){var e=(0,r.Z)(c().mark((function e(){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("/trending/movie/day?api_key=".concat(o));case 2:return t=e.sent,n=t.data,e.abrupt("return",n.results);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("/search/movie?api_key=".concat(o,"&language=en-US&page=1&query=").concat(t,"&include_adult=true"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r.results);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,s.useState)([]),t=(0,a.Z)(e,2),n=t[0],u=t[1],i=(0,s.useState)(!1),o=(0,a.Z)(i,2),p=o[0],v=o[1],l=(0,s.useState)(null),d=(0,a.Z)(l,2),h=d[0],m=d[1];return(0,s.useEffect)((function(){v(!0);var e=function(){var e=(0,r.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f();case 3:t=e.sent,u(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),m(e.t0);case 10:return e.prev=10,v(!1),e.finish(10);case 13:case"end":return e.stop()}}),e,null,[[0,7,10,13]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),{movies:n,isLoading:p,error:h}},l=n(87),d=function(){var e=(0,s.useState)([]),t=(0,a.Z)(e,2),n=t[0],u=t[1],i=(0,s.useState)(!1),o=(0,a.Z)(i,2),f=o[0],v=o[1],d=(0,s.useState)(null),h=(0,a.Z)(d,2),m=h[0],g=h[1],x=(0,l.lr)(),Z=(0,a.Z)(x,2),w=Z[0],k=Z[1];(0,s.useEffect)((function(){var e=w.get("q");if(e){v(!0);var t=function(){var t=(0,r.Z)(c().mark((function t(){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,p(e);case 3:n=t.sent,u(n),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),g(t.t0);case 10:return t.prev=10,v(!1),t.finish(10);case 13:case"end":return t.stop()}}),t,null,[[0,7,10,13]])})));return function(){return t.apply(this,arguments)}}();t()}}),[w]);return{movies:n,isLoading:f,error:m,onHandleSubmit:function(e){k({q:e})}}}},415:function(e,t,n){n.r(t);var r=n(248),a=n(232),u=n(5),c=(n(791),n(184));t.default=function(){var e=(0,u.B)(),t=e.movies,n=e.isLoading,s=e.error;return(0,c.jsxs)(c.Fragment,{children:[n&&(0,c.jsx)(r.Z,{}),s&&(0,c.jsx)("p",{children:"Something went wrong"}),t.length>0&&(0,c.jsx)(a.Z,{movies:t})]})}}}]);
//# sourceMappingURL=466.1a8c0a1a.chunk.js.map