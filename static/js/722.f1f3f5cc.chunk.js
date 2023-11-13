"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[722],{155:function(e,t,n){n.d(t,{Z:function(){return l}});n(791);var r=n(775),a=n(689),u=n(87),s="MoviesList_moviesList__P6SP5",c="MoviesList_movieItem__p4FQU",i="MoviesList_movieLink__QlD4H",o="MoviesList_movieImage__xaeaC",f="MoviesList_movieTitle__CxO8p",p="MoviesList_trending__CIrxS",v=n(184),l=function(e){var t=e.movies,n=(0,a.TH)();return(0,v.jsxs)("div",{children:[(0,v.jsx)("h2",{className:p,children:"Trending today"}),(0,v.jsx)("ul",{className:s,children:t.map((function(e){var t=e.id,a=e.title,s=e.name,p=e.original_title,l=e.poster_path;return(0,v.jsxs)(u.rU,{to:"/movies/".concat(t),className:i,state:{from:n},children:[" ",(0,v.jsxs)("li",{className:c,children:[(0,v.jsx)("img",{className:o,src:l?"https://image.tmdb.org/t/p/w300/".concat(l):r,alt:a||s||p}),(0,v.jsx)("p",{className:f,children:a||s||p})]})]},t)}))})]})}},900:function(e,t,n){n.d(t,{a1:function(){return _},Cl:function(){return S},pr:function(){return x},I0:function(){return Z},B3:function(){return h}});var r=n(861),a=n(439),u=n(757),s=n.n(u),c=n(791),i=n(243),o="22a5ac0887c10804847656f832680839";i.Z.defaults.baseURL="https://api.themoviedb.org/3";var f=function(){var e=(0,r.Z)(s().mark((function e(){var t,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("/trending/movie/day?api_key=".concat(o));case 2:return t=e.sent,n=t.data,e.abrupt("return",n.results);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(s().mark((function e(t){var n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("/search/movie?api_key=".concat(o,"&language=en-US&page=1&query=").concat(t,"&include_adult=true"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r.results);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,r.Z)(s().mark((function e(t){var n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("/movie/".concat(t,"?api_key=").concat(o,"&language=en-US"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(s().mark((function e(t){var n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("/movie/".concat(t,"/credits?api_key=").concat(o,"&language=en-US"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r.cast);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=(0,r.Z)(s().mark((function e(t){var n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("/movie/".concat(t,"/reviews?api_key=").concat(o,"&language=en-US"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r.results);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=(0,c.useState)([]),t=(0,a.Z)(e,2),n=t[0],u=t[1],i=(0,c.useState)(!1),o=(0,a.Z)(i,2),p=o[0],v=o[1],l=(0,c.useState)(null),m=(0,a.Z)(l,2),h=m[0],d=m[1];return(0,c.useEffect)((function(){v(!0);var e=function(){var e=(0,r.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f();case 3:t=e.sent,u(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),d(e.t0);case 10:return e.prev=10,v(!1),e.finish(10);case 13:case"end":return e.stop()}}),e,null,[[0,7,10,13]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),{movies:n,isLoading:p,error:h}},d=n(87),x=function(){var e=(0,c.useState)([]),t=(0,a.Z)(e,2),n=t[0],u=t[1],i=(0,c.useState)(!1),o=(0,a.Z)(i,2),f=o[0],v=o[1],l=(0,c.useState)(null),m=(0,a.Z)(l,2),h=m[0],x=m[1],g=(0,d.lr)(),_=(0,a.Z)(g,2),Z=_[0],S=_[1];(0,c.useEffect)((function(){var e=Z.get("q");if(e){v(!0);var t=function(){var t=(0,r.Z)(s().mark((function t(){var n;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,p(e);case 3:n=t.sent,u(n),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),x(t.t0);case 10:return t.prev=10,v(!1),t.finish(10);case 13:case"end":return t.stop()}}),t,null,[[0,7,10,13]])})));return function(){return t.apply(this,arguments)}}();t()}}),[Z]);return{movies:n,isLoading:f,error:h,onHandleSubmit:function(e){S({q:e})}}},g=n(689),_=function(){var e=(0,c.useState)(null),t=(0,a.Z)(e,2),n=t[0],u=t[1],i=(0,c.useState)(!1),o=(0,a.Z)(i,2),f=o[0],p=o[1],l=(0,c.useState)(null),m=(0,a.Z)(l,2),h=m[0],d=m[1],x=(0,g.UO)().movieId;return(0,c.useEffect)((function(){if(x){var e=function(){var e=(0,r.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p(!0),e.prev=1,e.next=4,v(x);case 4:t=e.sent,u(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),d(e.t0.message);case 11:return e.prev=11,p(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[1,8,11,14]])})));return function(){return e.apply(this,arguments)}}();e()}}),[x]),{movieDetails:n,isLoading:f,error:h}},Z=function(){var e=(0,c.useState)([]),t=(0,a.Z)(e,2),n=t[0],u=t[1],i=(0,c.useState)(!1),o=(0,a.Z)(i,2),f=o[0],p=o[1],v=(0,c.useState)(null),m=(0,a.Z)(v,2),h=m[0],d=m[1],x=(0,g.UO)().movieId;return(0,c.useEffect)((function(){var e=function(){var e=(0,r.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p(!0),e.prev=1,e.next=4,l(x);case 4:t=e.sent,u(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),d(e.t0.message);case 11:return e.prev=11,p(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[1,8,11,14]])})));return function(){return e.apply(this,arguments)}}();e()}),[x]),{cast:n,isLoading:f,error:h}},S=function(){var e=(0,c.useState)([]),t=(0,a.Z)(e,2),n=t[0],u=t[1],i=(0,c.useState)(!1),o=(0,a.Z)(i,2),f=o[0],p=o[1],v=(0,c.useState)(null),l=(0,a.Z)(v,2),h=l[0],d=l[1],x=(0,g.UO)().movieId;return(0,c.useEffect)((function(){var e=function(){var e=(0,r.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p(!0),e.prev=1,e.next=4,m(x);case 4:t=e.sent,u(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),d(e.t0.message);case 11:return e.prev=11,p(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[1,8,11,14]])})));return function(){return e.apply(this,arguments)}}();e()}),[x]),{reviews:n,isLoading:f,error:h}}},722:function(e,t,n){n.r(t),n.d(t,{default:function(){return l}});var r=n(248),a=n(155),u=n(439),s=n(791),c="SearchForm_searchForm__NsJpF",i="SearchForm_searchInput__h6REp",o="SearchForm_searchButton__AQHxA",f=n(184),p=function(e){var t=e.onSubmit,n=(0,s.useState)(""),r=(0,u.Z)(n,2),a=r[0],p=r[1];return(0,f.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),""===a.trim())return alert("can not be empty");t(a)},className:c,children:[(0,f.jsx)("input",{name:"query",type:"text",value:a,onChange:function(e){p(e.target.value)},className:i}),(0,f.jsxs)("button",{type:"submit",className:o,children:[" ","Search"]})]})},v=n(900),l=function(){var e=(0,v.pr)(),t=e.movies,n=e.isLoading,u=e.error,s=e.onHandleSubmit;return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(p,{onSubmit:s}),n&&(0,f.jsx)(r.Z,{}),u&&(0,f.jsx)("p",{children:"Something went wrong"}),t.length>0&&(0,f.jsx)(a.Z,{movies:t})]})}},775:function(e,t,n){e.exports=n.p+"static/media/notFound.de88128527c9f023bf24.png"}}]);
//# sourceMappingURL=722.f1f3f5cc.chunk.js.map