(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{307:function(t,r,e){"use strict";r.a=[{name:"VAT",clusterId:"3TkV8iGAzpLxDe3Fm1Jf",path:"vat",description:"Add or subtract VAT in seconds."},{name:"Income Tax",clusterId:"3TkBvgiGAzp6rhg3Fm1Jf",path:"income-tax"},{name:"Profit Margin",clusterId:"5HxaIgiGAzp6rhg3Fm1Jf",path:"profit-margin"},{name:"Sales TAX USA",clusterId:"5HxaIgiGAzyug3Fm1Jf",path:"sales-tax-usa"}]},312:function(t,r,e){"use strict";var n=e(2),o=e(3),c=e(43),f=e(26),l=e(36),d=e(215),v=e(12),h=e(4),m=e(214),A=e(146),x=e(313),k=e(314),I=e(87),w=e(315),J=[],T=o(J.sort),F=o(J.push),G=h((function(){J.sort(void 0)})),_=h((function(){J.sort(null)})),z=A("sort"),C=!h((function(){if(I)return I<70;if(!(x&&x>3)){if(k)return!0;if(w)return w<603;var code,t,r,e,n="";for(code=65;code<76;code++){switch(t=String.fromCharCode(code),code){case 66:case 69:case 70:case 72:r=3;break;case 68:case 71:r=4;break;default:r=2}for(e=0;e<47;e++)J.push({k:t+e,v:r})}for(J.sort((function(a,b){return b.v-a.v})),e=0;e<J.length;e++)t=J[e].k.charAt(0),n.charAt(n.length-1)!==t&&(n+=t);return"DGBEFHACIJK"!==n}}));n({target:"Array",proto:!0,forced:G||!_||!z||!C},{sort:function(t){void 0!==t&&c(t);var r=f(this);if(C)return void 0===t?T(r):T(r,t);var e,n,o=[],h=l(r);for(n=0;n<h;n++)n in r&&F(o,r[n]);for(m(o,function(t){return function(r,e){return void 0===e?-1:void 0===r?1:void 0!==t?+t(r,e)||0:v(r)>v(e)?1:-1}}(t)),e=o.length,n=0;n<e;)r[n]=o[n++];for(;n<h;)d(r,n++);return r}})},313:function(t,r,e){var n=e(69).match(/firefox\/(\d+)/i);t.exports=!!n&&+n[1]},314:function(t,r,e){var n=e(69);t.exports=/MSIE|Trident/.test(n)},315:function(t,r,e){var n=e(69).match(/AppleWebKit\/(\d+)\./);t.exports=!!n&&+n[1]},337:function(t,r,e){"use strict";e.r(r);e(25),e(312),e(29),e(71);var n=e(307),o={data:function(){return{clusters:n.a.sort((function(a,b){return a.name>b.name?1:-1}))}},methods:{formatName:function(t){return t.replace(/ /g,"-").replace(/@/g,"").replace(/\$/g,"").replace(/!/g,"").replace(/#/g,"").toLowerCase()}}},c=e(16),component=Object(c.a)(o,(function(){var t=this,r=t._self._c;return r("div",t._l(t.clusters,(function(e){return r("div",{key:e.clusterId},[r("nuxt-link",{attrs:{to:{name:"clusters-cluster",params:{clusters:e.path,data:e}}}},[t._v(t._s(e.name))])],1)})),0)}),[],!1,null,null,null);r.default=component.exports}}]);