(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{323:function(t,n,e){var map={"./VATCalculator.vue":[335,0]};function r(t){if(!e.o(map,t))return Promise.resolve().then((function(){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}));var n=map[t],r=n[0];return e.e(n[1]).then((function(){return e(r)}))}r.keys=function(){return Object.keys(map)},r.id=323,t.exports=r},347:function(t,n,e){"use strict";e.r(n);e(15),e(30),e(31),e(25);var r={name:"CalculatorWrapper",props:["cluster"],components:{MainMenu:function(){return e.e(4).then(e.bind(null,346))},ToolHeader:function(){return e.e(3).then(e.bind(null,345))},ExplanationBox:function(){return e.e(2).then(e.bind(null,344))},ArticleList:function(){return e.e(1).then(e.bind(null,343))}},computed:{currentComponent:function(){var t=this;return this.cluster?function(){return e(323)("./".concat(t.cluster.name,"Calculator.vue"))}:null}}},l=e(16),component=Object(l.a)(r,(function(){var t=this,n=t._self._c;return n("div",[n("section",{staticClass:"section-calc"},[n("div",{staticClass:"page-padding"},[n("div",{staticClass:"container-small"},[n("div",{staticClass:"padding-vertical padding-huge is-header"},[n("div",{staticClass:"margin-bottom margin-xxlarge"},[n("div",{staticClass:"max-width-large text-align-center is-flex-col"},[n("MainMenu",{attrs:{cluster:t.cluster}}),t._v(" "),n("ToolHeader",{attrs:{cluster:t.cluster}})],1)]),t._v(" "),n(t.currentComponent,{tag:"component"})],1)])])]),t._v(" "),n("ExplanationBox",{attrs:{id:"how-it-works"}}),t._v(" "),n("ArticleList",{attrs:{id:"articles",cluster:t.cluster}})],1)}),[],!1,null,null,null);n.default=component.exports}}]);