(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{102:function(t,e,r){"use strict";var n={name:"nuxt-error",props:{error:{type:Object,default:function(){}}},computed:{errorPage:function(){return 404===this.error.statusCode?"404":"500"}}},o=(r(503),r(30)),c=r(31),l=r.n(c),m=r(647),f=r(659),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",[r("v-container",{staticClass:"container"},["404"===t.errorPage?r("bt-m-error-pages-type1"):r("bt-m-error-pages-type2")],1)],1)}),[],!1,null,"8e852c5e",null);e.a=component.exports;l()(component,{BtMErrorPagesType1:r(627).default,BtMErrorPagesType2:r(628).default}),l()(component,{VApp:m.a,VContainer:f.a})},234:function(t,e,r){"use strict";var n=r(2),o=r(191);n.a.component("line-chart",{extends:o.b,props:["data","options"],mounted:function(){this.renderChart(this.data,this.options)}}),n.a.component("pie-chart",{extends:o.c,props:["data","options"],mounted:function(){this.renderChart(this.data,this.options)}}),n.a.component("doughnut-chart",{extends:o.a,props:["data","options"],mounted:function(){this.renderChart(this.data,this.options)}})},235:function(t,e,r){"use strict";var n=r(2),o=r(460),c=r.n(o);r(621);n.a.use(c.a)},236:function(t,e,r){"use strict";var n=r(2),o=r(461);n.a.use(o.a)},295:function(t,e,r){var content=r(504);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(19).default)("06eef03b",content,!0,{sourceMap:!1})},307:function(t,e,r){var content=r(591);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(19).default)("024bcc16",content,!0,{sourceMap:!1})},451:function(t,e,r){"use strict";r.r(e);var n={name:"app-bar",methods:{showDrawer:function(){this.$nuxt.$emit("show",!0)}}},o=r(30),c=r(31),l=r.n(c),m=r(658),f=r(654),d=r(655),v=r(192),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app-bar",{attrs:{app:"",absolute:"",color:t.$vuetify.breakpoint.mdAndDown&&"/customer"!==t.$route.path?"primary":"white",height:"80",flat:""}},["/customer"!==t.$route.path&&"/customer/"!==t.$route.path?r("v-app-bar-nav-icon",{class:"white--text",on:{click:t.showDrawer}}):t._e(),t._v(" "),"/customer"===t.$route.path||"/customer/"===t.$route.path?r("v-toolbar-title",{staticClass:"font-weight-light"},[t._v("\n        Bantayan Island Trucking Services\n    ")]):t._e(),t._v(" "),r("v-spacer"),t._v(" "),"/customer"===t.$route.path||"/customer/"===t.$route.path?r("bt-m-form-rate"):t._e()],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{BtMFormRate:r(629).default}),l()(component,{VAppBar:m.a,VAppBarNavIcon:f.a,VSpacer:d.a,VToolbarTitle:v.a})},463:function(t,e,r){"use strict";var n={name:"auth"},o=r(30),c=r(31),l=r.n(c),m=r(647),f=r(648),component=Object(o.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("v-app",[e("v-main",[e("Nuxt")],1)],1)}),[],!1,null,null,null);e.a=component.exports;l()(component,{VApp:m.a,VMain:f.a})},464:function(t,e,r){"use strict";var n={name:"loggedin"},o=r(30),c=r(31),l=r.n(c),m=r(647),f=r(659),d=r(648),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",{staticClass:"app"},[t.$vuetify.breakpoint.mdAndDown?r("bt-m-frame-app-bar"):t._e(),t._v(" "),r("bt-m-frame-nav-bar"),t._v(" "),r("v-main",[r("v-container",{staticClass:"pa-6",attrs:{fluid:""}},[r("Nuxt")],1)],1)],1)}),[],!1,null,null,null);e.a=component.exports;l()(component,{BtMFrameAppBar:r(451).default,BtMFrameNavBar:r(630).default}),l()(component,{VApp:m.a,VContainer:f.a,VMain:d.a})},465:function(t,e,r){"use strict";var n={name:"public"},o=r(30),c=r(31),l=r.n(c),m=r(647),f=r(659),d=r(648),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",{staticClass:"app"},[r("bt-m-frame-app-bar"),t._v(" "),r("v-main",[r("v-container",{attrs:{fluid:""}},[r("Nuxt")],1)],1),t._v(" "),r("bt-m-frame-footer")],1)}),[],!1,null,null,null);e.a=component.exports;l()(component,{BtMFrameAppBar:r(451).default,BtMFrameFooter:r(631).default}),l()(component,{VApp:m.a,VContainer:f.a,VMain:d.a})},472:function(t,e,r){r(473),t.exports=r(474)},496:function(t,e,r){"use strict";r.r(e);r(11);e.default=function(t){var e=t.redirect,r=t.store;if(0===Object.keys(r.state.auth.user).length)return e("/auth/login")}},503:function(t,e,r){"use strict";r(295)},504:function(t,e,r){var n=r(18)(!1);n.push([t.i,".container[data-v-8e852c5e]{display:flex!important;flex:1!important;height:100vh!important;justify-content:center!important;align-items:center!important}",""]),t.exports=n},528:function(t,e,r){var content=r(529);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(19).default)("3e7ab538",content,!0,{sourceMap:!1})},529:function(t,e,r){var n=r(18)(!1);n.push([t.i,".app{background:#f8f8f8!important}.public-container{display:flex!important;flex:1!important;justify-content:center!important;align-items:center!important;height:100vh!important}.copy-icon{cursor:pointer!important}.tracker-field-con{background:#499f6e!important}",""]),t.exports=n},590:function(t,e,r){"use strict";r(307)},591:function(t,e,r){var n=r(18)(!1);n.push([t.i,".btn[data-v-6b35ffc5]{pointer-events:none}",""]),t.exports=n},594:function(t,e,r){"use strict";r.r(e),r.d(e,"state",(function(){return o})),r.d(e,"mutations",(function(){return c})),r.d(e,"getters",(function(){return l})),r.d(e,"actions",(function(){return m}));var n=r(14),o=(r(65),function(){return{products:[]}}),c={RESET_STATE:function(t){Object.assign(t,t())},SET_PRODUCTS:function(t,data){t.products=data}},l={getProducts:function(t){return t.products}},m={setState:function(t){(0,t.commit)("RESET_STATE")},setProducts:function(t,data){(0,t.commit)("SET_PRODUCTS",data)},getProducts:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n,o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=t.commit,r.prev=1,r.next=4,e.$axios.$get("/products");case 4:(o=r.sent).status?n("SET_PRODUCTS",o.data):n("SET_PRODUCTS",[]),r.next=11;break;case 8:r.prev=8,r.t0=r.catch(1),console.error("error",r.t0);case 11:case"end":return r.stop()}}),r,null,[[1,8]])})))()},deleteProduct:function(t,data){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t.commit,r.prev=1,r.next=4,e.$axios.$post("/products/delete",data);case 4:if(!(n=r.sent).status){r.next=9;break}return r.abrupt("return",{data:n.data,message:"Success",error:!1});case 9:return r.abrupt("return",{message:"Error",error:!0});case 10:r.next=16;break;case 12:return r.prev=12,r.t0=r.catch(1),console.error("error",r.t0),r.abrupt("return",{message:r.t0,error:!0});case 16:case"end":return r.stop()}}),r,null,[[1,12]])})))()},updateProduct:function(t,data){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t.commit,r.prev=1,r.next=4,e.$axios.$post("/products/update",data);case 4:if(!(n=r.sent).status){r.next=9;break}return r.abrupt("return",{data:n.data,message:"Success",error:!1});case 9:return r.abrupt("return",{message:"Error",error:!0});case 10:r.next=16;break;case 12:return r.prev=12,r.t0=r.catch(1),console.error("error",r.t0),r.abrupt("return",{message:r.t0,error:!0});case 16:case"end":return r.stop()}}),r,null,[[1,12]])})))()},createProduct:function(t,data){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t.commit,r.prev=1,r.next=4,e.$axios.$post("/products/create",data);case 4:if(!(n=r.sent).status){r.next=9;break}return r.abrupt("return",{data:n.data,message:"Success",error:!1});case 9:return r.abrupt("return",{message:"Error",error:!0});case 10:r.next=16;break;case 12:return r.prev=12,r.t0=r.catch(1),console.error("error",r.t0),r.abrupt("return",{message:r.t0,error:!0});case 16:case"end":return r.stop()}}),r,null,[[1,12]])})))()}}},595:function(t,e,r){"use strict";r.r(e),r.d(e,"state",(function(){return o})),r.d(e,"mutations",(function(){return c})),r.d(e,"getters",(function(){return l})),r.d(e,"actions",(function(){return m}));var n=r(14),o=(r(65),function(){return{parcels:[],latest_action:{}}}),c={RESET_STATE:function(t){Object.assign(t,t())},SET_PARCELS:function(t,data){t.parcels=data},SET_LATEST_ACTION:function(t,data){t.latest_action=data}},l={getParcels:function(t){return t.parcels},getLatestAction:function(t){return t.latest_action}},m={setState:function(t){(0,t.commit)("RESET_STATE")},setParcels:function(t,data){(0,t.commit)("SET_PARCELS",data)},setLatestAction:function(t,data){(0,t.commit)("SET_LATEST_ACTION",data)},getParcelByRefId:function(t,data){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t.commit,r.prev=1,r.next=4,e.$axios.$post("/parcels/get-parcel-by-ref",data);case 4:if(!(n=r.sent).status){r.next=9;break}return r.abrupt("return",{data:n.data,message:"Success",error:!1});case 9:return r.abrupt("return",{message:"Error",error:!0});case 10:r.next=16;break;case 12:return r.prev=12,r.t0=r.catch(1),console.error("error",r.t0),r.abrupt("return",{message:r.t0,error:!0});case 16:case"end":return r.stop()}}),r,null,[[1,12]])})))()},deleteParcel:function(t,data){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t.commit,r.prev=1,r.next=4,e.$axios.$post("/parcels/delete-by-id",data);case 4:if(!r.sent.status){r.next=9;break}return r.abrupt("return",{message:"Success",error:!1});case 9:return r.abrupt("return",{message:"Error",error:!0});case 10:r.next=16;break;case 12:return r.prev=12,r.t0=r.catch(1),console.error("error",r.t0),r.abrupt("return",{message:r.t0,error:!0});case 16:case"end":return r.stop()}}),r,null,[[1,12]])})))()},getParcelShippingDetails:function(t,e){var r=this;return Object(n.a)(regeneratorRuntime.mark((function n(){var o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t.commit,n.prev=1,n.next=4,r.$axios.$post("/shipping-details/get-shipping-details-by-parcel",{parcel_id:e});case 4:if(o=n.sent,console.log("shipping_details",o),!o.status){n.next=10;break}return n.abrupt("return",{message:"Success",error:!1});case 10:return n.abrupt("return",{message:"Error",error:!0});case 11:n.next=17;break;case 13:return n.prev=13,n.t0=n.catch(1),console.error("error",n.t0),n.abrupt("return",{message:n.t0,error:!0});case 17:case"end":return n.stop()}}),n,null,[[1,13]])})))()},getParcels:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n,o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=t.commit,r.prev=1,r.next=4,e.$axios.$get("/parcels");case 4:if(!(o=r.sent).status){r.next=10;break}return n("SET_PARCELS",o.data),r.abrupt("return",{data:o.data});case 10:n("SET_PARCELS",[]);case 11:r.next=16;break;case 13:r.prev=13,r.t0=r.catch(1),console.error("error",r.t0);case 16:case"end":return r.stop()}}),r,null,[[1,13]])})))()},updateParcel:function(t,data){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t.commit,r.prev=1,r.next=4,e.$axios.$post("/parcels/update",data);case 4:if(!r.sent.status){r.next=9;break}return r.abrupt("return",{message:"Success",error:!1});case 9:return r.abrupt("return",{message:"Error",error:!0});case 10:r.next=16;break;case 12:return r.prev=12,r.t0=r.catch(1),console.error("error",r.t0),r.abrupt("return",{message:r.t0,error:!0});case 16:case"end":return r.stop()}}),r,null,[[1,12]])})))()},createParcel:function(t,data){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n,o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=t.commit,console.log("createParcel from store",data),r.prev=2,r.next=5,e.$axios.$post("/parcels/create",data);case 5:if(!(o=r.sent).status){r.next=11;break}return n("SET_LATEST_ACTION",{data:data,action:"Add",msg:"Parcel has been added"}),r.abrupt("return",{data:o.data,message:"Success",error:!1});case 11:return r.abrupt("return",{message:"Error",error:!0});case 12:r.next=18;break;case 14:return r.prev=14,r.t0=r.catch(2),console.error("error",r.t0),r.abrupt("return",{message:r.t0,error:!0});case 18:case"end":return r.stop()}}),r,null,[[2,14]])})))()}}},596:function(t,e,r){"use strict";r.r(e),r.d(e,"state",(function(){return o})),r.d(e,"mutations",(function(){return c})),r.d(e,"getters",(function(){return l})),r.d(e,"actions",(function(){return m}));var n=r(14),o=(r(65),function(){return{branches:[]}}),c={RESET_STATE:function(t){Object.assign(t,t())},SET_BRANCHES:function(t,data){t.branches=data}},l={getBranches:function(t){return t.branches}},m={setState:function(t){(0,t.commit)("RESET_STATE")},setBranches:function(t,data){(0,t.commit)("SET_BRANCHES",data)},getBranches:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n,o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=t.commit,r.prev=1,r.next=4,e.$axios.$get("/branches");case 4:if(!(o=r.sent).status){r.next=10;break}return n("SET_BRANCHES",o.data),r.abrupt("return",{data:o.data,success:!0});case 10:return n("SET_BRANCHES",[]),r.abrupt("return",{data:[],success:!1});case 12:r.next=17;break;case 14:r.prev=14,r.t0=r.catch(1),console.error("error",r.t0);case 17:case"end":return r.stop()}}),r,null,[[1,14]])})))()},deleteBranch:function(t,data){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t.commit,r.prev=1,r.next=4,e.$axios.$post("/branches/delete-by-id",data);case 4:if(!(n=r.sent).status){r.next=10;break}return console.log("deleteBranch",n),r.abrupt("return",{message:"Success",error:!1});case 10:return r.abrupt("return",{message:"Error",error:!0});case 11:r.next=17;break;case 13:return r.prev=13,r.t0=r.catch(1),console.error("error",r.t0),r.abrupt("return",{message:r.t0,error:!0});case 17:case"end":return r.stop()}}),r,null,[[1,13]])})))()},updateBranch:function(t,data){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t.commit,r.prev=1,r.next=4,e.$axios.$post("/branches/update",data);case 4:if(!(n=r.sent).status){r.next=9;break}return r.abrupt("return",{data:n.data,message:"Success",error:!1});case 9:return r.abrupt("return",{message:"Error",error:!0});case 10:r.next=16;break;case 12:return r.prev=12,r.t0=r.catch(1),console.error("error",r.t0),r.abrupt("return",{message:r.t0,error:!0});case 16:case"end":return r.stop()}}),r,null,[[1,12]])})))()},createBranch:function(t,data){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t.commit,r.prev=1,r.next=4,e.$axios.$post("/branches/create",data);case 4:if(!(n=r.sent).status){r.next=9;break}return r.abrupt("return",{data:n.data,message:"Success",error:!1});case 9:return r.abrupt("return",{message:"Error",error:!0});case 10:r.next=16;break;case 12:return r.prev=12,r.t0=r.catch(1),console.error("error",r.t0),r.abrupt("return",{message:r.t0,error:!0});case 16:case"end":return r.stop()}}),r,null,[[1,12]])})))()}}},597:function(t,e,r){"use strict";r.r(e),r.d(e,"state",(function(){return o})),r.d(e,"mutations",(function(){return c})),r.d(e,"getters",(function(){return l})),r.d(e,"actions",(function(){return m}));var n=r(14),o=(r(65),function(){return{user:{}}}),c={RESET_STATE:function(t){Object.assign(t,t())},SET_USER:function(t,data){t.user=data}},l={getUser:function(t){return t.user}},m={setState:function(t){(0,t.commit)("RESET_STATE")},setUser:function(t,data){(0,t.commit)("SET_USER",data)},resetPassword:function(t,data){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t.commit,r.prev=1,r.next=4,e.$axios.$post("/users/forgot-password",data);case 4:if(!(n=r.sent).success){r.next=9;break}return r.abrupt("return",{message:"Success",error:!1});case 9:return r.abrupt("return",{message:n.message,error:!0});case 10:r.next=16;break;case 12:return r.prev=12,r.t0=r.catch(1),console.error("error",r.t0),r.abrupt("return",{message:r.t0,error:!0});case 16:case"end":return r.stop()}}),r,null,[[1,12]])})))()},loginUser:function(t,data){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n,o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=t.commit,r.prev=1,r.next=4,e.$axios.$post("/users/login",data);case 4:if(o=r.sent,console.log("login",o),!o.success){r.next=11;break}return n("SET_USER",o.data.user),r.abrupt("return",{message:"Success",error:!1});case 11:return r.abrupt("return",{message:"Error",error:!0});case 12:r.next=18;break;case 14:return r.prev=14,r.t0=r.catch(1),console.error("error",r.t0),r.abrupt("return",{message:r.t0,error:!0});case 18:case"end":return r.stop()}}),r,null,[[1,14]])})))()},registerUser:function(t,data){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t.commit,r.prev=1,r.next=4,e.$axios.$post("/users/create",data);case 4:if(!r.sent.success){r.next=9;break}return r.abrupt("return",{message:"Success",error:!1});case 9:return r.abrupt("return",{message:"Error",error:!0});case 10:r.next=16;break;case 12:return r.prev=12,r.t0=r.catch(1),console.error("error",r.t0),r.abrupt("return",{message:r.t0,error:!0});case 16:case"end":return r.stop()}}),r,null,[[1,12]])})))()}}},620:function(t,e,r){var map={"./af":316,"./af.js":316,"./ar":317,"./ar-dz":318,"./ar-dz.js":318,"./ar-kw":319,"./ar-kw.js":319,"./ar-ly":320,"./ar-ly.js":320,"./ar-ma":321,"./ar-ma.js":321,"./ar-sa":322,"./ar-sa.js":322,"./ar-tn":323,"./ar-tn.js":323,"./ar.js":317,"./az":324,"./az.js":324,"./be":325,"./be.js":325,"./bg":326,"./bg.js":326,"./bm":327,"./bm.js":327,"./bn":328,"./bn-bd":329,"./bn-bd.js":329,"./bn.js":328,"./bo":330,"./bo.js":330,"./br":331,"./br.js":331,"./bs":332,"./bs.js":332,"./ca":333,"./ca.js":333,"./cs":334,"./cs.js":334,"./cv":335,"./cv.js":335,"./cy":336,"./cy.js":336,"./da":337,"./da.js":337,"./de":338,"./de-at":339,"./de-at.js":339,"./de-ch":340,"./de-ch.js":340,"./de.js":338,"./dv":341,"./dv.js":341,"./el":342,"./el.js":342,"./en-au":343,"./en-au.js":343,"./en-ca":344,"./en-ca.js":344,"./en-gb":345,"./en-gb.js":345,"./en-ie":346,"./en-ie.js":346,"./en-il":347,"./en-il.js":347,"./en-in":348,"./en-in.js":348,"./en-nz":349,"./en-nz.js":349,"./en-sg":350,"./en-sg.js":350,"./eo":351,"./eo.js":351,"./es":352,"./es-do":353,"./es-do.js":353,"./es-mx":354,"./es-mx.js":354,"./es-us":355,"./es-us.js":355,"./es.js":352,"./et":356,"./et.js":356,"./eu":357,"./eu.js":357,"./fa":358,"./fa.js":358,"./fi":359,"./fi.js":359,"./fil":360,"./fil.js":360,"./fo":361,"./fo.js":361,"./fr":362,"./fr-ca":363,"./fr-ca.js":363,"./fr-ch":364,"./fr-ch.js":364,"./fr.js":362,"./fy":365,"./fy.js":365,"./ga":366,"./ga.js":366,"./gd":367,"./gd.js":367,"./gl":368,"./gl.js":368,"./gom-deva":369,"./gom-deva.js":369,"./gom-latn":370,"./gom-latn.js":370,"./gu":371,"./gu.js":371,"./he":372,"./he.js":372,"./hi":373,"./hi.js":373,"./hr":374,"./hr.js":374,"./hu":375,"./hu.js":375,"./hy-am":376,"./hy-am.js":376,"./id":377,"./id.js":377,"./is":378,"./is.js":378,"./it":379,"./it-ch":380,"./it-ch.js":380,"./it.js":379,"./ja":381,"./ja.js":381,"./jv":382,"./jv.js":382,"./ka":383,"./ka.js":383,"./kk":384,"./kk.js":384,"./km":385,"./km.js":385,"./kn":386,"./kn.js":386,"./ko":387,"./ko.js":387,"./ku":388,"./ku.js":388,"./ky":389,"./ky.js":389,"./lb":390,"./lb.js":390,"./lo":391,"./lo.js":391,"./lt":392,"./lt.js":392,"./lv":393,"./lv.js":393,"./me":394,"./me.js":394,"./mi":395,"./mi.js":395,"./mk":396,"./mk.js":396,"./ml":397,"./ml.js":397,"./mn":398,"./mn.js":398,"./mr":399,"./mr.js":399,"./ms":400,"./ms-my":401,"./ms-my.js":401,"./ms.js":400,"./mt":402,"./mt.js":402,"./my":403,"./my.js":403,"./nb":404,"./nb.js":404,"./ne":405,"./ne.js":405,"./nl":406,"./nl-be":407,"./nl-be.js":407,"./nl.js":406,"./nn":408,"./nn.js":408,"./oc-lnc":409,"./oc-lnc.js":409,"./pa-in":410,"./pa-in.js":410,"./pl":411,"./pl.js":411,"./pt":412,"./pt-br":413,"./pt-br.js":413,"./pt.js":412,"./ro":414,"./ro.js":414,"./ru":415,"./ru.js":415,"./sd":416,"./sd.js":416,"./se":417,"./se.js":417,"./si":418,"./si.js":418,"./sk":419,"./sk.js":419,"./sl":420,"./sl.js":420,"./sq":421,"./sq.js":421,"./sr":422,"./sr-cyrl":423,"./sr-cyrl.js":423,"./sr.js":422,"./ss":424,"./ss.js":424,"./sv":425,"./sv.js":425,"./sw":426,"./sw.js":426,"./ta":427,"./ta.js":427,"./te":428,"./te.js":428,"./tet":429,"./tet.js":429,"./tg":430,"./tg.js":430,"./th":431,"./th.js":431,"./tk":432,"./tk.js":432,"./tl-ph":433,"./tl-ph.js":433,"./tlh":434,"./tlh.js":434,"./tr":435,"./tr.js":435,"./tzl":436,"./tzl.js":436,"./tzm":437,"./tzm-latn":438,"./tzm-latn.js":438,"./tzm.js":437,"./ug-cn":439,"./ug-cn.js":439,"./uk":440,"./uk.js":440,"./ur":441,"./ur.js":441,"./uz":442,"./uz-latn":443,"./uz-latn.js":443,"./uz.js":442,"./vi":444,"./vi.js":444,"./x-pseudo":445,"./x-pseudo.js":445,"./yo":446,"./yo.js":446,"./zh-cn":447,"./zh-cn.js":447,"./zh-hk":448,"./zh-hk.js":448,"./zh-mo":449,"./zh-mo.js":449,"./zh-tw":450,"./zh-tw.js":450};function n(t){var e=o(t);return r(e)}function o(t){if(!r.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}n.keys=function(){return Object.keys(map)},n.resolve=o,t.exports=n,n.id=620},627:function(t,e,r){"use strict";r.r(e);var n={name:"error-404",props:{error:{type:Object,default:function(){}}}},o=r(30),c=r(31),l=r.n(c),m=r(188),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"error-404"},[r("div",[r("v-img",{attrs:{src:"/img/error-404.png","lazy-src":"/img/error-404.png",contain:"",width:t.$vuetify.breakpoint.mdAndDown?"200":""}})],1),t._v(" "),r("div",{staticClass:"text-center mt-6 title"},[t._v("\n        Page Not Found!\n        "),t.$vuetify.breakpoint.mdAndDown?r("br"):t._e(),t._v(" "),r("Nuxt-Link",{staticClass:"mx-1",attrs:{to:"/admin/dashboard"}},[t._v("Home page")])],1)])}),[],!1,null,null,null);e.default=component.exports;l()(component,{VImg:m.a})},628:function(t,e,r){"use strict";r.r(e);var n={name:"error-500",props:{error:{type:Object,default:function(){}}}},o=r(30),c=r(31),l=r.n(c),m=r(188),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"error-404"},[r("div",[r("v-img",{attrs:{src:"/img/warning.png","lazy-src":"/img/warning.png",contain:"",width:t.$vuetify.breakpoint.mdAndDown?"200":""}})],1),t._v(" "),r("div",{staticClass:"text-center title"},[t._v("\n        An Error Occured\n        "),t.$vuetify.breakpoint.mdAndDown?r("br"):t._e(),t._v(" "),r("NuxtLink",{staticClass:"mx-1",attrs:{to:"/admin/dashboard"}},[t._v("Home page")])],1)])}),[],!1,null,null,null);e.default=component.exports;l()(component,{VImg:m.a})},629:function(t,e,r){"use strict";r.r(e);var n=r(14),o=(r(65),{name:"rateForm",data:function(){return{dialog:!1,formData:{},rules:{required:function(t){return!!t||"Required field"}}}},methods:{showParcelNotification:function(t){var e=t.position,r=t.icon,title=t.title,n=t.showConfirmButton,time=t.time;return this.$swal.fire({position:e||"success",icon:r||"success",title:title||"Success",showConfirmButton:n||!1,timer:time||1500})},submitFeedback:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.$refs.form.validate()){e.next=2;break}return e.abrupt("return");case 2:if(t.formData.rate){e.next=4;break}return e.abrupt("return",t.showParcelNotification({icon:"error",title:"Please add your rating."}));case 4:return e.prev=4,console.log("DATA TO BE SAVED",t.formData),e.next=8,t.$axios.$post("/ratings/create",t.formData);case 8:if(!(r=e.sent)){e.next=15;break}return console.log("rate",r),e.next=13,t.showParcelNotification({icon:"success",title:"Thank you for rating us."});case 13:t.$nuxt.$emit("get-ratings",!0),t.reset();case 15:e.next=20;break;case 17:e.prev=17,e.t0=e.catch(4),console.error("error",e.t0);case 20:case"end":return e.stop()}}),e,null,[[4,17]])})))()},validate:function(){this.$refs.form.validate()},reset:function(){this.dialog=!1,this.formData={},this.$refs.form.reset()},resetValidation:function(){this.$refs.form.resetValidation()}}}),c=o,l=r(30),m=r(31),f=r.n(m),d=r(240),v=r(225),h=r(92),x=r(649),j=r(650),k=r(651),_=r(660),w=r(652),E=r(147),S=r(653),$=r(63),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-dialog",{attrs:{transition:"dialog-bottom-transition","max-width":"600",persistent:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,o=e.attrs;return[r("v-btn",t._g(t._b({staticClass:"text-capitalize font-weight-bold",attrs:{color:"primary",depressed:""}},"v-btn",o,!1),n),[t._v("Rate Our Services")])]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[t._v(" "),[r("v-card",[r("v-toolbar",{attrs:{flat:"",color:"primary",dark:""}},[r("span",{staticClass:"title"},[t._v(" Customer Feedback ")])]),t._v(" "),r("v-card-text",[r("v-form",{ref:"form"},[r("v-row",{staticClass:"mt-4"},[r("v-col",{attrs:{cols:"12"}},[r("v-text-field",{attrs:{label:"Name",outlined:"",dense:"","hide-details":"auto",rules:[t.rules.required]},model:{value:t.formData.fullname,callback:function(e){t.$set(t.formData,"fullname",e)},expression:"formData.fullname"}})],1),t._v(" "),r("v-col",{attrs:{cols:"12"}},[r("v-text-field",{attrs:{label:"Address",outlined:"",dense:"","hide-details":"auto",rules:[t.rules.required]},model:{value:t.formData.address,callback:function(e){t.$set(t.formData,"address",e)},expression:"formData.address"}})],1),t._v(" "),r("v-col",{attrs:{cols:"12"}},[r("v-text-field",{attrs:{label:"Contact",outlined:"",dense:"","hide-details":"auto",rules:[t.rules.required]},model:{value:t.formData.contact,callback:function(e){t.$set(t.formData,"contact",e)},expression:"formData.contact"}})],1),t._v(" "),r("v-col",{attrs:{cols:"12"}},[r("v-textarea",{attrs:{label:"Feedback",outlined:"",dense:"","hide-details":"auto",rows:"3",rules:[t.rules.required]},model:{value:t.formData.message,callback:function(e){t.$set(t.formData,"message",e)},expression:"formData.message"}})],1),t._v(" "),r("v-col",{staticClass:"d-flex justify-space-between align-center",attrs:{cols:"12"}},[r("div",{staticClass:"subtitle-2"},[t._v("\n                                    Rate\n                                ")]),t._v(" "),r("div",[r("v-rating",{attrs:{color:"warning","background-color":"grey darken-1"},model:{value:t.formData.rate,callback:function(e){t.$set(t.formData,"rate",e)},expression:"formData.rate"}})],1)])],1)],1)],1),t._v(" "),r("v-card-actions",{staticClass:"justify-end"},[r("v-btn",{staticClass:"text-capitalize",attrs:{text:""},on:{click:t.reset}},[t._v("Close")]),t._v(" "),r("v-btn",{staticClass:"text-capitalize",attrs:{depressed:"",color:"primary"},on:{click:t.submitFeedback}},[t._v("\n                        Submit\n                    ")])],1)],1)]],2)],1)}),[],!1,null,null,null);e.default=component.exports;f()(component,{VBtn:d.a,VCard:v.a,VCardActions:h.a,VCardText:h.c,VCol:x.a,VDialog:j.a,VForm:k.a,VRating:_.a,VRow:w.a,VTextField:E.a,VTextarea:S.a,VToolbar:$.a})},630:function(t,e,r){"use strict";r.r(e);var n={name:"navbar",data:function(){return{drawer:!0,items:[{title:"Dashboard",icon:"mdi-view-dashboard",to:"/admin/dashboard"},{title:"Parcels",icon:"mdi-cart",to:"/admin/parcels"},{title:"Products",icon:"mdi-briefcase",to:"/admin/product-information"},{title:"Branches",icon:"mdi-map-marker",to:"/admin/branches"},{title:"Reports",icon:"mdi-file-document-multiple",to:"/admin/reports"},{title:"About Us",icon:"mdi-account",to:"/about-us"}],mini:!0}},computed:{isMobileOrTable:function(){return!!this.$vuetify.breakpoint.mdAndDown}},created:function(){var t=this;this.$nuxt.$on("show",(function(e){console.log("bol"),t.drawer=!0}))},beforeDestroy:function(){this.$nuxt.$off("show")}},o=r(30),c=r(31),l=r.n(c),m=r(240),f=r(637),d=r(226),v=r(188),h=r(227),x=r(142),j=r(229),k=r(99),_=r(124),w=r(656),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-navigation-drawer",{attrs:{app:"","mini-variant":t.mini,"mini-variant-width":"80",permanent:!t.isMobileOrTable,temporary:t.isMobileOrTable,color:"primary"},on:{"update:miniVariant":function(e){t.mini=e},"update:mini-variant":function(e){t.mini=e}},scopedSlots:t._u([{key:"append",fn:function(){return[r("div",{staticClass:"pa-2"},[r("v-btn",{attrs:{to:"/auth/login",block:"",depressed:"",color:"transparent"}},[r("v-icon",{attrs:{color:"white"}},[t._v(" mdi-logout ")]),t._v(" "),t.mini?t._e():r("span",{staticClass:"text-capitalize subtitle-1 white--text mx-4"},[t._v("\n                    Logout\n                ")])],1)],1)]},proxy:!0}]),model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[r("v-list-item",{staticClass:"px-2 d-flex justify-center"},[r("v-img",{attrs:{src:"/img/bits-logo.png",width:"150"}})],1),t._v(" "),r("v-divider"),t._v(" "),r("v-list-item",{staticClass:"px-4"},[r("v-list-item-avatar",[r("v-icon",{attrs:{large:"",color:"white"}},[t._v(" mdi-account-circle ")])],1),t._v(" "),r("v-list-item-title",{staticClass:"white--text mx-2"},[t._v("Admin")]),t._v(" "),r("v-btn",{attrs:{dark:"",icon:""},on:{click:function(e){e.stopPropagation(),t.mini=!t.mini}}},[r("v-icon",[t._v("mdi-chevron-left")])],1)],1),t._v(" "),r("v-list",{attrs:{rounded:""}},t._l(t.items,(function(e){return r("v-list-item",{key:e.title,attrs:{color:"white",ripple:"",link:"",to:e.to}},[r("v-list-item-icon",[r("v-icon",{attrs:{dark:""}},[t._v(t._s(e.icon))])],1),t._v(" "),r("v-list-item-content",[r("v-list-item-title",{staticClass:"white--text"},[t._v(t._s(e.title))])],1)],1)})),1)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VBtn:m.a,VDivider:f.a,VIcon:d.a,VImg:v.a,VList:h.a,VListItem:x.a,VListItemAvatar:j.a,VListItemContent:k.a,VListItemIcon:_.a,VListItemTitle:k.b,VNavigationDrawer:w.a})},631:function(t,e,r){"use strict";r.r(e);var n={data:function(){return{socials:[{icon:"mdi-gmail",link:"",text:"bits@gmail.com"},{icon:"mdi-facebook",link:"",text:"facebook.com/bits"},{icon:"mdi-phone",link:"",text:"+6390-6320-3071"}]}}},o=(r(590),r(30)),c=r(31),l=r.n(c),m=r(240),f=r(225),d=r(92),v=r(637),h=r(657),x=r(226),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-footer",{attrs:{dark:"",padless:""}},[r("v-card",{staticClass:"white--text text-center",attrs:{flat:"",tile:"",color:"#499f6e",width:"100%"}},[r("v-card-text",t._l(t.socials,(function(e,n){return r("v-btn",{key:n,staticClass:"mx-4 white--text text-none btn",attrs:{text:""}},[r("v-icon",{attrs:{size:"24px",left:""}},[t._v("\n          "+t._s(e.icon)+"\n        ")]),t._v("\n          "+t._s(e.text)+"\n      ")],1)})),1),t._v(" "),r("v-divider"),t._v(" "),r("v-card-text",{staticClass:"white--text"},[t._v("\n      "+t._s((new Date).getFullYear())+" — "),r("strong",[t._v("Bantayan Island Trucking Services")])])],1)],1)}),[],!1,null,"6b35ffc5",null);e.default=component.exports;l()(component,{VBtn:m.a,VCard:f.a,VCardText:d.c,VDivider:v.a,VFooter:h.a,VIcon:x.a})}},[[472,30,4,31]]]);