"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[341],{900:function(e,t,r){r.d(t,{a1:function(){return w},Cl:function(){return k},pr:function(){return m},I0:function(){return g},B3:function(){return d}});var n=r(861),a=r(439),u=r(757),c=r.n(u),s=r(791),i=r(243),o="22a5ac0887c10804847656f832680839";i.Z.defaults.baseURL="https://api.themoviedb.org/3";var f=function(){var e=(0,n.Z)(c().mark((function e(){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("/trending/movie/day?api_key=".concat(o));case 2:return t=e.sent,r=t.data,e.abrupt("return",r.results);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("/search/movie?api_key=".concat(o,"&language=en-US&page=1&query=").concat(t,"&include_adult=true"));case 2:return r=e.sent,n=r.data,e.abrupt("return",n.results);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("/movie/".concat(t,"?api_key=").concat(o,"&language=en-US"));case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("/movie/".concat(t,"/credits?api_key=").concat(o,"&language=en-US"));case 2:return r=e.sent,n=r.data,e.abrupt("return",n.cast);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("/movie/".concat(t,"/reviews?api_key=").concat(o,"&language=en-US"));case 2:return r=e.sent,n=r.data,e.abrupt("return",n.results);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=(0,s.useState)([]),t=(0,a.Z)(e,2),r=t[0],u=t[1],i=(0,s.useState)(!1),o=(0,a.Z)(i,2),p=o[0],v=o[1],l=(0,s.useState)(null),h=(0,a.Z)(l,2),d=h[0],x=h[1];return(0,s.useEffect)((function(){v(!0);var e=function(){var e=(0,n.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f();case 3:t=e.sent,u(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),x(e.t0);case 10:return e.prev=10,v(!1),e.finish(10);case 13:case"end":return e.stop()}}),e,null,[[0,7,10,13]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),{movies:r,isLoading:p,error:d}},x=r(87),m=function(){var e=(0,s.useState)([]),t=(0,a.Z)(e,2),r=t[0],u=t[1],i=(0,s.useState)(!1),o=(0,a.Z)(i,2),f=o[0],v=o[1],l=(0,s.useState)(null),h=(0,a.Z)(l,2),d=h[0],m=h[1],Z=(0,x.lr)(),w=(0,a.Z)(Z,2),g=w[0],k=w[1];(0,s.useEffect)((function(){var e=g.get("q");if(e){v(!0);var t=function(){var t=(0,n.Z)(c().mark((function t(){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,p(e);case 3:r=t.sent,u(r),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),m(t.t0);case 10:return t.prev=10,v(!1),t.finish(10);case 13:case"end":return t.stop()}}),t,null,[[0,7,10,13]])})));return function(){return t.apply(this,arguments)}}();t()}}),[g]);return{movies:r,isLoading:f,error:d,onHandleSubmit:function(e){k({q:e})}}},Z=r(689),w=function(){var e=(0,s.useState)(null),t=(0,a.Z)(e,2),r=t[0],u=t[1],i=(0,s.useState)(!1),o=(0,a.Z)(i,2),f=o[0],p=o[1],l=(0,s.useState)(null),h=(0,a.Z)(l,2),d=h[0],x=h[1],m=(0,Z.UO)().movieId;return(0,s.useEffect)((function(){if(m){var e=function(){var e=(0,n.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p(!0),e.prev=1,e.next=4,v(m);case 4:t=e.sent,u(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),x(e.t0.message);case 11:return e.prev=11,p(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[1,8,11,14]])})));return function(){return e.apply(this,arguments)}}();e()}}),[m]),{movieDetails:r,isLoading:f,error:d}},g=function(){var e=(0,s.useState)([]),t=(0,a.Z)(e,2),r=t[0],u=t[1],i=(0,s.useState)(!1),o=(0,a.Z)(i,2),f=o[0],p=o[1],v=(0,s.useState)(null),h=(0,a.Z)(v,2),d=h[0],x=h[1],m=(0,Z.UO)().movieId;return(0,s.useEffect)((function(){var e=function(){var e=(0,n.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p(!0),e.prev=1,e.next=4,l(m);case 4:t=e.sent,u(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),x(e.t0.message);case 11:return e.prev=11,p(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[1,8,11,14]])})));return function(){return e.apply(this,arguments)}}();e()}),[m]),{cast:r,isLoading:f,error:d}},k=function(){var e=(0,s.useState)([]),t=(0,a.Z)(e,2),r=t[0],u=t[1],i=(0,s.useState)(!1),o=(0,a.Z)(i,2),f=o[0],p=o[1],v=(0,s.useState)(null),l=(0,a.Z)(v,2),d=l[0],x=l[1],m=(0,Z.UO)().movieId;return(0,s.useEffect)((function(){var e=function(){var e=(0,n.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p(!0),e.prev=1,e.next=4,h(m);case 4:t=e.sent,u(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),x(e.t0.message);case 11:return e.prev=11,p(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[1,8,11,14]])})));return function(){return e.apply(this,arguments)}}();e()}),[m]),{reviews:r,isLoading:f,error:d}}},341:function(e,t,r){r.r(t),r.d(t,{default:function(){return s}});var n=r(248),a=(r(791),r(184)),u=function(e){var t=e.reviews;return(0,a.jsx)("ul",{children:t.length>0?t.map((function(e){var t=e.id,r=e.author,n=e.content;return(0,a.jsxs)("li",{children:[(0,a.jsx)("h1",{children:r}),(0,a.jsx)("p",{children:n})]},t)})):(0,a.jsx)("p",{children:"no review "})})},c=r(900),s=function(){var e=(0,c.Cl)(),t=e.reviews,r=e.isLoading,s=e.error;return(0,a.jsxs)(a.Fragment,{children:[r&&(0,a.jsx)(n.Z,{}),s&&(0,a.jsx)("p",{children:"something went wrong"}),(0,a.jsx)(u,{reviews:t})]})}}}]);
//# sourceMappingURL=341.a3f5ecec.chunk.js.map