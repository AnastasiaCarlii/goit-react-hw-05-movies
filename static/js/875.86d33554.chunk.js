"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[875],{74:function(e,t,r){r.d(t,{a1:function(){return m},pr:function(){return d},B3:function(){return l}});var n=r(861),a=r(439),u=r(757),c=r.n(u),s=r(791),i=r(243),o="22a5ac0887c10804847656f832680839";i.Z.defaults.baseURL="https://api.themoviedb.org/3";var f=function(){var e=(0,n.Z)(c().mark((function e(){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("/trending/movie/day?api_key=".concat(o));case 2:return t=e.sent,r=t.data,e.abrupt("return",r.results);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("/search/movie?api_key=".concat(o,"&language=en-US&page=1&query=").concat(t,"&include_adult=true"));case 2:return r=e.sent,n=r.data,e.abrupt("return",n.results);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("/movie/".concat(t,"?api_key=").concat(o,"&language=en-US"));case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,s.useState)([]),t=(0,a.Z)(e,2),r=t[0],u=t[1],i=(0,s.useState)(!1),o=(0,a.Z)(i,2),p=o[0],v=o[1],l=(0,s.useState)(null),h=(0,a.Z)(l,2),d=h[0],m=h[1];return(0,s.useEffect)((function(){v(!0);var e=function(){var e=(0,n.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f();case 3:t=e.sent,u(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),m(e.t0);case 10:return e.prev=10,v(!1),e.finish(10);case 13:case"end":return e.stop()}}),e,null,[[0,7,10,13]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),{movies:r,isLoading:p,error:d}},h=r(87),d=function(){var e=(0,s.useState)([]),t=(0,a.Z)(e,2),r=t[0],u=t[1],i=(0,s.useState)(!1),o=(0,a.Z)(i,2),f=o[0],v=o[1],l=(0,s.useState)(null),d=(0,a.Z)(l,2),m=d[0],x=d[1],Z=(0,h.lr)(),k=(0,a.Z)(Z,2),w=k[0],g=k[1];(0,s.useEffect)((function(){var e=w.get("q");if(e){v(!0);var t=function(){var t=(0,n.Z)(c().mark((function t(){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,p(e);case 3:r=t.sent,u(r),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),x(t.t0);case 10:return t.prev=10,v(!1),t.finish(10);case 13:case"end":return t.stop()}}),t,null,[[0,7,10,13]])})));return function(){return t.apply(this,arguments)}}();t()}}),[w]);return{movies:r,isLoading:f,error:m,onHandleSubmit:function(e){g({q:e})}}},m=function(e){var t=(0,s.useState)(""),r=(0,a.Z)(t,2),u=r[0],i=r[1],o=(0,s.useState)(!1),f=(0,a.Z)(o,2),p=f[0],l=f[1],h=(0,s.useState)(null),d=(0,a.Z)(h,2),m=d[0],x=d[1];return(0,s.useEffect)((function(){if(e){var t=function(){var t=(0,n.Z)(c().mark((function t(){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return l(!0),x(null),t.prev=2,t.next=5,v(e);case 5:r=t.sent,i(r),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(2),x(t.t0.message);case 12:return t.prev=12,l(!1),t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[2,9,12,15]])})));return function(){return t.apply(this,arguments)}}();t()}}),[e]),{movieDetails:u,isLoading:p,error:m}}},875:function(e,t,r){r.r(t),r.d(t,{default:function(){return i}});var n=r(248),a=r(74),u=r(184),c=function(e){var t=e.movieId,r=(0,a.a1)(t),c=r.movieDetails,s=r.isLoading,i=r.error;return s?(0,u.jsx)(n.Z,{}):i?(0,u.jsxs)("p",{children:[" ",i]}):c?(0,u.jsxs)("div",{children:[" ",(0,u.jsx)("h1",{children:c.title}),(0,u.jsx)("p",{children:c.overview})]}):(0,u.jsx)("p",{children:"There is no information about this movie, sorry."})},s=r(689),i=function(){var e=(0,s.UO)().movieId;return(0,u.jsx)(c,{movieId:e})}}}]);
//# sourceMappingURL=875.86d33554.chunk.js.map