"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[415],{155:function(e,t,n){n.d(t,{Z:function(){return l}});n(791);var r=n(775),a=n(689),s=n(87),u="MoviesList_moviesList__P6SP5",c="MoviesList_movieItem__p4FQU",i="MoviesList_movieLink__QlD4H",o="MoviesList_movieImage__xaeaC",f="MoviesList_movieTitle__CxO8p",p="MoviesList_trending__CIrxS",v=n(184),l=function(e){var t=e.movies,n=(0,a.TH)();return(0,v.jsxs)("div",{children:[(0,v.jsx)("h2",{className:p,children:"Trending today"}),(0,v.jsx)("ul",{className:u,children:t.map((function(e){var t=e.id,a=e.title,u=e.name,p=e.original_title,l=e.poster_path;return(0,v.jsxs)(s.rU,{to:"/movies/".concat(t),className:i,state:{from:n},children:[" ",(0,v.jsxs)("li",{className:c,children:[(0,v.jsx)("img",{className:o,src:l?"https://image.tmdb.org/t/p/w300/".concat(l):r,alt:a||u||p}),(0,v.jsx)("h4",{className:f,children:a||u||p})]})]},t)}))})]})}},900:function(e,t,n){n.d(t,{a1:function(){return Z},Cl:function(){return w},pr:function(){return x},I0:function(){return _},B3:function(){return d}});var r=n(861),a=n(439),s=n(757),u=n.n(s),c=n(791),i=n(243),o="22a5ac0887c10804847656f832680839";i.Z.defaults.baseURL="https://api.themoviedb.org/3";var f=function(){var e=(0,r.Z)(u().mark((function e(){var t,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("/trending/movie/day?api_key=".concat(o));case 2:return t=e.sent,n=t.data,e.abrupt("return",n.results);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(u().mark((function e(t){var n,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("/search/movie?api_key=".concat(o,"&language=en-US&page=1&query=").concat(t,"&include_adult=true"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r.results);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,r.Z)(u().mark((function e(t){var n,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("/movie/".concat(t,"?api_key=").concat(o,"&language=en-US"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(u().mark((function e(t){var n,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("/movie/".concat(t,"/credits?api_key=").concat(o,"&language=en-US"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r.cast);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=(0,r.Z)(u().mark((function e(t){var n,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("/movie/".concat(t,"/reviews?api_key=").concat(o,"&language=en-US"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r.results);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=(0,c.useState)([]),t=(0,a.Z)(e,2),n=t[0],s=t[1],i=(0,c.useState)(!1),o=(0,a.Z)(i,2),p=o[0],v=o[1],l=(0,c.useState)(null),m=(0,a.Z)(l,2),d=m[0],h=m[1];return(0,c.useEffect)((function(){v(!0);var e=function(){var e=(0,r.Z)(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f();case 3:t=e.sent,s(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),h(e.t0);case 10:return e.prev=10,v(!1),e.finish(10);case 13:case"end":return e.stop()}}),e,null,[[0,7,10,13]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),{movies:n,isLoading:p,error:d}},h=n(87),x=function(){var e=(0,c.useState)([]),t=(0,a.Z)(e,2),n=t[0],s=t[1],i=(0,c.useState)(!1),o=(0,a.Z)(i,2),f=o[0],v=o[1],l=(0,c.useState)(null),m=(0,a.Z)(l,2),d=m[0],x=m[1],g=(0,h.lr)(),Z=(0,a.Z)(g,2),_=Z[0],w=Z[1];(0,c.useEffect)((function(){var e=_.get("q");if(e){v(!0);var t=function(){var t=(0,r.Z)(u().mark((function t(){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,p(e);case 3:n=t.sent,s(n),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),x(t.t0);case 10:return t.prev=10,v(!1),t.finish(10);case 13:case"end":return t.stop()}}),t,null,[[0,7,10,13]])})));return function(){return t.apply(this,arguments)}}();t()}}),[_]);return{movies:n,isLoading:f,error:d,onHandleSubmit:function(e){w({q:e})}}},g=n(689),Z=function(){var e=(0,c.useState)(null),t=(0,a.Z)(e,2),n=t[0],s=t[1],i=(0,c.useState)(!1),o=(0,a.Z)(i,2),f=o[0],p=o[1],l=(0,c.useState)(null),m=(0,a.Z)(l,2),d=m[0],h=m[1],x=(0,g.UO)().movieId;return(0,c.useEffect)((function(){if(x){var e=function(){var e=(0,r.Z)(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p(!0),e.prev=1,e.next=4,v(x);case 4:t=e.sent,s(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),h(e.t0.message);case 11:return e.prev=11,p(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[1,8,11,14]])})));return function(){return e.apply(this,arguments)}}();e()}}),[x]),{movieDetails:n,isLoading:f,error:d}},_=function(){var e=(0,c.useState)([]),t=(0,a.Z)(e,2),n=t[0],s=t[1],i=(0,c.useState)(!1),o=(0,a.Z)(i,2),f=o[0],p=o[1],v=(0,c.useState)(null),m=(0,a.Z)(v,2),d=m[0],h=m[1],x=(0,g.UO)().movieId;return(0,c.useEffect)((function(){var e=function(){var e=(0,r.Z)(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p(!0),e.prev=1,e.next=4,l(x);case 4:t=e.sent,s(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),h(e.t0.message);case 11:return e.prev=11,p(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[1,8,11,14]])})));return function(){return e.apply(this,arguments)}}();e()}),[x]),{cast:n,isLoading:f,error:d}},w=function(){var e=(0,c.useState)([]),t=(0,a.Z)(e,2),n=t[0],s=t[1],i=(0,c.useState)(!1),o=(0,a.Z)(i,2),f=o[0],p=o[1],v=(0,c.useState)(null),l=(0,a.Z)(v,2),d=l[0],h=l[1],x=(0,g.UO)().movieId;return(0,c.useEffect)((function(){var e=function(){var e=(0,r.Z)(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p(!0),e.prev=1,e.next=4,m(x);case 4:t=e.sent,s(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),h(e.t0.message);case 11:return e.prev=11,p(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[1,8,11,14]])})));return function(){return e.apply(this,arguments)}}();e()}),[x]),{reviews:n,isLoading:f,error:d}}},415:function(e,t,n){n.r(t);var r=n(248),a=n(155),s=n(900),u=(n(791),n(184));t.default=function(){var e=(0,s.B3)(),t=e.movies,n=e.isLoading,c=e.error;return(0,u.jsxs)(u.Fragment,{children:[n&&(0,u.jsx)(r.Z,{}),c&&(0,u.jsx)("p",{children:"Something went wrong, Sorry"}),t.length>0&&(0,u.jsx)(a.Z,{movies:t})]})}},775:function(e,t,n){e.exports=n.p+"static/media/notFound.de88128527c9f023bf24.png"}}]);
//# sourceMappingURL=415.05186726.chunk.js.map