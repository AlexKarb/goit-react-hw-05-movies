"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[95],{5279:function(n,t,r){r.d(t,{S:function(){return i}});var e,u=r(168),i=r(5751).ZP.div(e||(e=(0,u.Z)(["\n  width: 1000px;\n  padding: 20px 0;\n  font-size: 14px;\n  margin: 0 auto;\n  align-items: stretch;\n\n  ","\n"])),(function(n){if(n.display)return"display: ".concat(n.display)}))},6558:function(n,t,r){r.d(t,{p:function(){return c}});var e=r(885),u=r(2791),i=r(2007),o=r.n(i),c=function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=(0,u.useState)(null),i=(0,e.Z)(r,2),o=i[0],c=i[1],a=(0,u.useState)("idle"),s=(0,e.Z)(a,2),p=s[0],f=s[1],d=(0,u.useState)(null),l=(0,e.Z)(d,2),v=l[0],h=l[1];return(0,u.useEffect)((function(){f("loading"),n(t).then(c).catch(h).finally(f("resolve"))}),[n,t]),{data:o,status:p,error:v}};c.propTypes={functionForApi:o().func.isRequired,prop:o().string}},1095:function(n,t,r){r.r(t),r.d(t,{Reviews:function(){return w}});var e,u,i,o,c=r(168),a=r(5751),s=r(6355),p=(0,a.ZP)(s.q1E)(e||(e=(0,c.Z)(["\n  margin: 0 15px;\n  width: 20px;\n  height: 20px;\n"]))),f=a.ZP.p(u||(u=(0,c.Z)(["\n  font-weight: 600;\n  text-transform: uppercase;\n  margin-bottom: 20px;\n  display: flex;\n  align-items: center;\n"]))),d=a.ZP.p(i||(i=(0,c.Z)(["\n overflow-y: auto;\n    min-height: 50px;\n    max-height: 100px;\n        font-family: cursive;\n    color: #393939;\n}\n"]))),l=a.ZP.li(o||(o=(0,c.Z)(["\n  border: 1px solid;\n  padding: 20px 30px;\n  list-style: none;\n  margin-bottom: 30px;\n"]))),v=r(184),h=function(n){var t=n.comment,r=t.author,e=t.content;return(0,v.jsxs)(l,{children:[(0,v.jsxs)(f,{children:[(0,v.jsx)(p,{}),r]}),(0,v.jsx)(d,{children:e})]})},m=function(n){var t=n.comments;return 0===t.length?(0,v.jsx)("div",{children:"\u041a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0438 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u044b"}):(0,v.jsx)("ul",{children:t.map((function(n){return(0,v.jsx)(h,{comment:n},n.id)}))})},x=r(5279),g=r(6558),b=r(6871),y=r(372),w=function(){var n=(0,b.UO)().movieId,t=(0,g.p)(y.EW,n).data;return(0,v.jsx)(x.S,{children:t&&(0,v.jsx)(m,{comments:t})})}},372:function(n,t,r){r.d(t,{bp:function(){return y},A0:function(){return x},Qx:function(){return b},Xj:function(){return g},EW:function(){return w}});var e=r(5861),u=r(7757),i=r.n(u),o=r(4569),c=r.n(o),a=r(2007),s=r.n(a),p=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object.entries(n).map((function(n){return n.join("=")})).join("&")};p.propTypes={obj:s().object};var f=r(577),d=function(n,t,r){0===(null===n||void 0===n?void 0:n.length)&&f.Am.error(t,{config:r})};d.propType={data:s().object.isRequired,text:s().string.isRequired,config:s().object},c().defaults.baseURL="https://api.themoviedb.org/3";var l={api_key:"7b5bc84100d595f56fff5f28d8089376",language:"ru"},v="\u041a \u0441\u043e\u0436\u0430\u043b\u0435\u043d\u0438\u044e, \u043f\u043e\u0438\u0441\u043a \u043f\u043e \u0441\u0430\u0439\u0442\u0443 \u043d\u0435 \u0434\u0430\u043b \u043d\u0438\u043a\u0430\u043a\u0438\u0445 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u043e\u0432. \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0438\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u0438\u043b\u0438 \u0441\u043e\u043a\u0440\u0430\u0442\u0438\u0442\u044c \u0412\u0430\u0448 \u0437\u0430\u043f\u0440\u043e\u0441.",h=p(l),m=function(){var n=(0,e.Z)(i().mark((function n(t){var r,e,u,o,a,s,p=arguments;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=p.length>1&&void 0!==p[1]?p[1]:{},e=r.return,u=r.error,o=void 0!==u&&u,n.next=3,c().get(t);case 3:if(a=n.sent,!e){n.next=10;break}return n.next=7,a.data[e];case 7:n.t0=n.sent,n.next=13;break;case 10:return n.next=12,a.data;case 12:n.t0=n.sent;case 13:return s=n.t0,o&&d(s,v),n.abrupt("return",s);case 16:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),x=function(){return m("/trending/movie/day?".concat(h),{return:"results"})},g=function(){var n=(0,e.Z)(i().mark((function n(t){return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",t?m("/search/movie?query=".concat(t,"&").concat(h),{return:"results",error:!0}):void 0);case 1:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),b=function(){var n=(0,e.Z)(i().mark((function n(t){return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",m("movie/".concat(t,"?").concat(h)));case 1:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),y=function(){var n=(0,e.Z)(i().mark((function n(t){return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",m("movie/".concat(t,"/credits?").concat(h),{return:"cast"}));case 1:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),w=function(){var n=(0,e.Z)(i().mark((function n(t){return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",m("movie/".concat(t,"/reviews?api_key=").concat(l.api_key),{return:"results"}));case 1:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}();m.propType={request:s().func.isRequired}}}]);
//# sourceMappingURL=95.3eedb48d.chunk.js.map