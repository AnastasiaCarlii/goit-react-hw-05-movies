"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[945],{232:function(e,t,n){n.d(t,{Z:function(){return c}});n(791);var r=n.p+"static/media/notFound.de88128527c9f023bf24.png",a=n(87),u=n(184),c=function(e){var t=e.movies;return(0,u.jsx)("ul",{children:t.map((function(e){var t=e.id,n=e.title,c=e.name,i=e.original_title,s=e.poster_path;return(0,u.jsxs)(a.rU,{to:"/movies/".concat(t),children:[" ",(0,u.jsxs)("li",{children:[(0,u.jsx)("img",{src:s?"https://image.tmdb.org/t/p/w300/".concat(s):r,alt:n||c||i}),(0,u.jsx)("p",{children:n||c||i})]})]},t)}))})}},74:function(e,t,n){n.d(t,{a1:function(){return d},pr:function(){return m},B3:function(){return l}});var r=n(861),a=n(439),u=n(757),c=n.n(u),i=n(791),s=n(243),o="22a5ac0887c10804847656f832680839";s.Z.defaults.baseURL="https://api.themoviedb.org/3";var f=function(){var e=(0,r.Z)(c().mark((function e(){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("/trending/movie/day?api_key=".concat(o));case 2:return t=e.sent,n=t.data,e.abrupt("return",n.results);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("/search/movie?api_key=".concat(o,"&language=en-US&page=1&query=").concat(t,"&include_adult=true"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r.results);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("/movie/".concat(t,"?api_key=").concat(o,"&language=en-US"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,i.useState)([]),t=(0,a.Z)(e,2),n=t[0],u=t[1],s=(0,i.useState)(!1),o=(0,a.Z)(s,2),p=o[0],v=o[1],l=(0,i.useState)(null),h=(0,a.Z)(l,2),m=h[0],d=h[1];return(0,i.useEffect)((function(){v(!0);var e=function(){var e=(0,r.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f();case 3:t=e.sent,u(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),d(e.t0);case 10:return e.prev=10,v(!1),e.finish(10);case 13:case"end":return e.stop()}}),e,null,[[0,7,10,13]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),{movies:n,isLoading:p,error:m}},h=n(87),m=function(){var e=(0,i.useState)([]),t=(0,a.Z)(e,2),n=t[0],u=t[1],s=(0,i.useState)(!1),o=(0,a.Z)(s,2),f=o[0],v=o[1],l=(0,i.useState)(null),m=(0,a.Z)(l,2),d=m[0],x=m[1],g=(0,h.lr)(),Z=(0,a.Z)(g,2),b=Z[0],w=Z[1];(0,i.useEffect)((function(){var e=b.get("q");if(e){v(!0);var t=function(){var t=(0,r.Z)(c().mark((function t(){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,p(e);case 3:n=t.sent,u(n),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),x(t.t0);case 10:return t.prev=10,v(!1),t.finish(10);case 13:case"end":return t.stop()}}),t,null,[[0,7,10,13]])})));return function(){return t.apply(this,arguments)}}();t()}}),[b]);return{movies:n,isLoading:f,error:d,onHandleSubmit:function(e){w({q:e})}}},d=function(e){var t=(0,i.useState)(""),n=(0,a.Z)(t,2),u=n[0],s=n[1],o=(0,i.useState)(!1),f=(0,a.Z)(o,2),p=f[0],l=f[1],h=(0,i.useState)(null),m=(0,a.Z)(h,2),d=m[0],x=m[1];return(0,i.useEffect)((function(){if(e){var t=function(){var t=(0,r.Z)(c().mark((function t(){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return l(!0),x(null),t.prev=2,t.next=5,v(e);case 5:n=t.sent,s(n),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(2),x(t.t0.message);case 12:return t.prev=12,l(!1),t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[2,9,12,15]])})));return function(){return t.apply(this,arguments)}}();t()}}),[e]),{movieDetails:u,isLoading:p,error:d}}},149:function(e,t,n){n.r(t),n.d(t,{default:function(){return f}});var r=n(248),a=n(232),u=n(439),c=n(791),i=n(184),s=function(e){var t=e.onSubmit,n=(0,c.useState)(""),r=(0,u.Z)(n,2),a=r[0],s=r[1];return(0,i.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),""===a.trim())return alert("can not be empty");t(a)},children:[(0,i.jsx)("input",{name:"query",type:"text",value:a,onChange:function(e){s(e.target.value)}}),(0,i.jsx)("button",{type:"submit",children:" Search"})]})},o=n(74),f=function(){var e=(0,o.pr)(),t=e.movies,n=e.isLoading,u=e.error,c=e.onHandleSubmit;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s,{onSubmit:c}),n&&(0,i.jsx)(r.Z,{}),u&&(0,i.jsx)("p",{children:"Something went wrong"}),t.length>0&&(0,i.jsx)(a.Z,{movies:t})]})}}}]);
//# sourceMappingURL=945.134415c5.chunk.js.map