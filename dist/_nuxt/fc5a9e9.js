(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{346:function(t,n,e){"use strict";e.r(n);e(25);var c={name:"MainMenu",props:["cluster"],data:function(){return{menuItems:[{name:"".concat(this.cluster.name," Calculator"),to:{name:"cluster",params:{cluster:this.cluster.path,data:this.cluster}}},{name:"How It Works",to:"/".concat(this.cluster.path,"#how-it-works"),preventActive:!0},{name:"Articles",to:"/".concat(this.cluster.path,"#articles")}]}}},r=e(16),component=Object(r.a)(c,(function(){var t=this,n=t._self._c;return n("div",{staticClass:"margin-bottom margin-large is-nav"},[n("div",{staticClass:"calc_nav"},t._l(t.menuItems,(function(e){return n("nuxt-link",{key:e.name,staticClass:"nav-link",attrs:{"aria-current":"page","active-class":"w--current",to:e.to}},[t._v(t._s(e.name))])})),1)])}),[],!1,null,null,null);n.default=component.exports}}]);