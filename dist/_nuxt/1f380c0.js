(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{232:function(e,t,r){"use strict";var n=r(2),o=r(188);n.a.component("line-chart",{extends:o.b,props:["data","options"],mounted:function(){this.renderChart(this.data,this.options)}}),n.a.component("pie-chart",{extends:o.c,props:["data","options"],mounted:function(){this.renderChart(this.data,this.options)}}),n.a.component("doughnut-chart",{extends:o.a,props:["data","options"],mounted:function(){this.renderChart(this.data,this.options)}})},233:function(e,t,r){"use strict";var n=r(2),o=r(451),c=r.n(o);r(605);n.a.use(c.a)},290:function(e,t,r){var content=r(493);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(20).default)("06eef03b",content,!0,{sourceMap:!1})},445:function(e,t,r){"use strict";r.r(t);var n={name:"app-bar",methods:{showDrawer:function(){this.$nuxt.$emit("show",!0)}}},o=r(32),c=r(33),l=r.n(c),m=r(635),f=r(633),d=r(634),v=r(189),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app-bar",{attrs:{app:"",absolute:"",color:e.$vuetify.breakpoint.mdAndDown&&"/customer"!==e.$route.path?"primary":"white",height:"80",flat:""}},["/customer"!==e.$route.path?r("v-app-bar-nav-icon",{class:"white--text",on:{click:e.showDrawer}}):r("v-toolbar-title",{staticClass:"font-weight-light"},[e._v("\n        Bantayan Island Trucking Services\n    ")]),e._v(" "),r("v-spacer"),e._v(" "),"/customer"===e.$route.path?r("bt-m-form-rate"):e._e()],1)}),[],!1,null,null,null);t.default=component.exports;l()(component,{BtMFormRate:r(609).default}),l()(component,{VAppBar:m.a,VAppBarNavIcon:f.a,VSpacer:d.a,VToolbarTitle:v.a})},453:function(e,t,r){"use strict";var n={name:"auth"},o=r(32),c=r(33),l=r.n(c),m=r(626),f=r(627),component=Object(o.a)(n,(function(){var e=this.$createElement,t=this._self._c||e;return t("v-app",[t("v-main",[t("Nuxt")],1)],1)}),[],!1,null,null,null);t.a=component.exports;l()(component,{VApp:m.a,VMain:f.a})},454:function(e,t,r){"use strict";var n={name:"loggedin"},o=r(32),c=r(33),l=r.n(c),m=r(626),f=r(636),d=r(627),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",{staticClass:"app"},[e.$vuetify.breakpoint.mdAndDown?r("bt-m-frame-app-bar"):e._e(),e._v(" "),r("bt-m-frame-nav-bar"),e._v(" "),r("v-main",[r("v-container",{staticClass:"pa-6",attrs:{fluid:""}},[r("Nuxt")],1)],1)],1)}),[],!1,null,null,null);t.a=component.exports;l()(component,{BtMFrameAppBar:r(445).default,BtMFrameNavBar:r(610).default}),l()(component,{VApp:m.a,VContainer:f.a,VMain:d.a})},455:function(e,t,r){"use strict";var n={name:"public"},o=r(32),c=r(33),l=r.n(c),m=r(626),f=r(636),d=r(627),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",{staticClass:"app"},[r("bt-m-frame-app-bar"),e._v(" "),r("v-main",[r("v-container",{attrs:{fluid:""}},[r("Nuxt")],1)],1)],1)}),[],!1,null,null,null);t.a=component.exports;l()(component,{BtMFrameAppBar:r(445).default}),l()(component,{VApp:m.a,VContainer:f.a,VMain:d.a})},461:function(e,t,r){r(462),e.exports=r(463)},485:function(e,t,r){"use strict";r.r(t);r(11);t.default=function(e){var t=e.redirect,r=e.store;if(0===Object.keys(r.state.auth.user).length)return t("/auth/login")}},492:function(e,t,r){"use strict";r(290)},493:function(e,t,r){var n=r(19)(!1);n.push([e.i,".container[data-v-8e852c5e]{display:flex!important;flex:1!important;height:100vh!important;justify-content:center!important;align-items:center!important}",""]),e.exports=n},518:function(e,t,r){var content=r(519);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(20).default)("3e7ab538",content,!0,{sourceMap:!1})},519:function(e,t,r){var n=r(19)(!1);n.push([e.i,".app{background:#f8f8f8!important}.public-container{display:flex!important;flex:1!important;justify-content:center!important;align-items:center!important;height:100vh!important}.copy-icon{cursor:pointer!important}.tracker-field-con{background:#499f6e!important}",""]),e.exports=n},580:function(e,t,r){"use strict";r.r(t),r.d(t,"state",(function(){return o})),r.d(t,"mutations",(function(){return c})),r.d(t,"getters",(function(){return l})),r.d(t,"actions",(function(){return m}));var n=r(14),o=(r(64),function(){return{products:[]}}),c={RESET_STATE:function(e){Object.assign(e,e())},SET_PRODUCTS:function(e,data){e.products=data}},l={getProducts:function(e){return e.products}},m={setState:function(e){(0,e.commit)("RESET_STATE")},setProducts:function(e,data){(0,e.commit)("SET_PRODUCTS",data)},getProducts:function(e){var t=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n,o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=e.commit,r.prev=1,r.next=4,t.$axios.$get("/products");case 4:(o=r.sent).status?n("SET_PRODUCTS",o.data):n("SET_PRODUCTS",[]),r.next=11;break;case 8:r.prev=8,r.t0=r.catch(1),console.error("error",r.t0);case 11:case"end":return r.stop()}}),r,null,[[1,8]])})))()},deleteProduct:function(e,data){var t=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e.commit,r.prev=1,r.next=4,t.$axios.$post("/products/delete",data);case 4:if(!(n=r.sent).status){r.next=9;break}return r.abrupt("return",{data:n.data,message:"Success",error:!1});case 9:return r.abrupt("return",{message:"Error",error:!0});case 10:r.next=16;break;case 12:return r.prev=12,r.t0=r.catch(1),console.error("error",r.t0),r.abrupt("return",{message:r.t0,error:!0});case 16:case"end":return r.stop()}}),r,null,[[1,12]])})))()},updateProduct:function(e,data){var t=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e.commit,r.prev=1,r.next=4,t.$axios.$post("/products/update",data);case 4:if(!(n=r.sent).status){r.next=9;break}return r.abrupt("return",{data:n.data,message:"Success",error:!1});case 9:return r.abrupt("return",{message:"Error",error:!0});case 10:r.next=16;break;case 12:return r.prev=12,r.t0=r.catch(1),console.error("error",r.t0),r.abrupt("return",{message:r.t0,error:!0});case 16:case"end":return r.stop()}}),r,null,[[1,12]])})))()},createProduct:function(e,data){var t=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e.commit,r.prev=1,r.next=4,t.$axios.$post("/products/create",data);case 4:if(!(n=r.sent).status){r.next=9;break}return r.abrupt("return",{data:n.data,message:"Success",error:!1});case 9:return r.abrupt("return",{message:"Error",error:!0});case 10:r.next=16;break;case 12:return r.prev=12,r.t0=r.catch(1),console.error("error",r.t0),r.abrupt("return",{message:r.t0,error:!0});case 16:case"end":return r.stop()}}),r,null,[[1,12]])})))()}}},581:function(e,t,r){"use strict";r.r(t),r.d(t,"state",(function(){return o})),r.d(t,"mutations",(function(){return c})),r.d(t,"getters",(function(){return l})),r.d(t,"actions",(function(){return m}));var n=r(14),o=(r(64),function(){return{parcels:[]}}),c={RESET_STATE:function(e){Object.assign(e,e())},SET_PARCELS:function(e,data){e.parcels=data}},l={getParcels:function(e){return e.parcels}},m={setState:function(e){(0,e.commit)("RESET_STATE")},setParcels:function(e,data){(0,e.commit)("SET_PARCELS",data)},getParcelByRefId:function(e,data){var t=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e.commit,r.prev=1,r.next=4,t.$axios.$post("/parcels/get-parcel-by-ref",data);case 4:if(!(n=r.sent).status){r.next=9;break}return r.abrupt("return",{data:n.data,message:"Success",error:!1});case 9:return r.abrupt("return",{message:"Error",error:!0});case 10:r.next=16;break;case 12:return r.prev=12,r.t0=r.catch(1),console.error("error",r.t0),r.abrupt("return",{message:r.t0,error:!0});case 16:case"end":return r.stop()}}),r,null,[[1,12]])})))()},deleteParcel:function(e,data){var t=this;return Object(n.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e.commit,r.prev=1,r.next=4,t.$axios.$post("/parcels/delete-by-id",data);case 4:if(!r.sent.status){r.next=9;break}return r.abrupt("return",{message:"Success",error:!1});case 9:return r.abrupt("return",{message:"Error",error:!0});case 10:r.next=16;break;case 12:return r.prev=12,r.t0=r.catch(1),console.error("error",r.t0),r.abrupt("return",{message:r.t0,error:!0});case 16:case"end":return r.stop()}}),r,null,[[1,12]])})))()},getParcelShippingDetails:function(e,t){var r=this;return Object(n.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e.commit,n.prev=1,n.next=4,r.$axios.$post("/shipping-details/get-shipping-details-by-parcel",{parcel_id:t});case 4:if(!n.sent.status){n.next=9;break}return n.abrupt("return",{message:"Success",error:!1});case 9:return n.abrupt("return",{message:"Error",error:!0});case 10:n.next=16;break;case 12:return n.prev=12,n.t0=n.catch(1),console.error("error",n.t0),n.abrupt("return",{message:n.t0,error:!0});case 16:case"end":return n.stop()}}),n,null,[[1,12]])})))()},getParcels:function(e){var t=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n,o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=e.commit,r.prev=1,r.next=4,t.$axios.$get("/parcels");case 4:if(!(o=r.sent).status){r.next=10;break}return n("SET_PARCELS",o.data),r.abrupt("return",{data:o.data});case 10:n("SET_PARCELS",[]);case 11:r.next=16;break;case 13:r.prev=13,r.t0=r.catch(1),console.error("error",r.t0);case 16:case"end":return r.stop()}}),r,null,[[1,13]])})))()},updateParcel:function(e,data){var t=this;return Object(n.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e.commit,r.prev=1,r.next=4,t.$axios.$post("/parcels/update",data);case 4:if(!r.sent.status){r.next=9;break}return r.abrupt("return",{message:"Success",error:!1});case 9:return r.abrupt("return",{message:"Error",error:!0});case 10:r.next=16;break;case 12:return r.prev=12,r.t0=r.catch(1),console.error("error",r.t0),r.abrupt("return",{message:r.t0,error:!0});case 16:case"end":return r.stop()}}),r,null,[[1,12]])})))()},createParcel:function(e,data){var t=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e.commit,r.prev=1,r.next=4,t.$axios.$post("/parcels/create",data);case 4:if(!(n=r.sent).status){r.next=9;break}return r.abrupt("return",{data:n.data,message:"Success",error:!1});case 9:return r.abrupt("return",{message:"Error",error:!0});case 10:r.next=16;break;case 12:return r.prev=12,r.t0=r.catch(1),console.error("error",r.t0),r.abrupt("return",{message:r.t0,error:!0});case 16:case"end":return r.stop()}}),r,null,[[1,12]])})))()}}},582:function(e,t,r){"use strict";r.r(t),r.d(t,"state",(function(){return o})),r.d(t,"mutations",(function(){return c})),r.d(t,"getters",(function(){return l})),r.d(t,"actions",(function(){return m}));var n=r(14),o=(r(64),function(){return{branches:[]}}),c={RESET_STATE:function(e){Object.assign(e,e())},SET_BRANCHES:function(e,data){e.branches=data}},l={getBranches:function(e){return e.branches}},m={setState:function(e){(0,e.commit)("RESET_STATE")},setBranches:function(e,data){(0,e.commit)("SET_BRANCHES",data)},getBranches:function(e){var t=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n,o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=e.commit,r.prev=1,r.next=4,t.$axios.$get("/branches");case 4:(o=r.sent).status?n("SET_BRANCHES",o.data):n("SET_BRANCHES",[]),r.next=11;break;case 8:r.prev=8,r.t0=r.catch(1),console.error("error",r.t0);case 11:case"end":return r.stop()}}),r,null,[[1,8]])})))()},deleteBranch:function(e,data){var t=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e.commit,r.prev=1,r.next=4,t.$axios.$post("/branches/delete-by-id",data);case 4:if(!(n=r.sent).status){r.next=10;break}return console.log("deleteBranch",n),r.abrupt("return",{message:"Success",error:!1});case 10:return r.abrupt("return",{message:"Error",error:!0});case 11:r.next=17;break;case 13:return r.prev=13,r.t0=r.catch(1),console.error("error",r.t0),r.abrupt("return",{message:r.t0,error:!0});case 17:case"end":return r.stop()}}),r,null,[[1,13]])})))()},updateBranch:function(e,data){var t=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e.commit,r.prev=1,r.next=4,t.$axios.$post("/branches/update",data);case 4:if(!(n=r.sent).status){r.next=9;break}return r.abrupt("return",{data:n.data,message:"Success",error:!1});case 9:return r.abrupt("return",{message:"Error",error:!0});case 10:r.next=16;break;case 12:return r.prev=12,r.t0=r.catch(1),console.error("error",r.t0),r.abrupt("return",{message:r.t0,error:!0});case 16:case"end":return r.stop()}}),r,null,[[1,12]])})))()},createBranch:function(e,data){var t=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e.commit,r.prev=1,r.next=4,t.$axios.$post("/branches/create",data);case 4:if(!(n=r.sent).status){r.next=9;break}return r.abrupt("return",{data:n.data,message:"Success",error:!1});case 9:return r.abrupt("return",{message:"Error",error:!0});case 10:r.next=16;break;case 12:return r.prev=12,r.t0=r.catch(1),console.error("error",r.t0),r.abrupt("return",{message:r.t0,error:!0});case 16:case"end":return r.stop()}}),r,null,[[1,12]])})))()}}},583:function(e,t,r){"use strict";r.r(t),r.d(t,"state",(function(){return o})),r.d(t,"mutations",(function(){return c})),r.d(t,"getters",(function(){return l})),r.d(t,"actions",(function(){return m}));var n=r(14),o=(r(64),function(){return{user:{}}}),c={RESET_STATE:function(e){Object.assign(e,e())},SET_USER:function(e,data){e.user=data}},l={getUser:function(e){return e.user}},m={setState:function(e){(0,e.commit)("RESET_STATE")},setUser:function(e,data){(0,e.commit)("SET_USER",data)},resetPassword:function(e,data){var t=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e.commit,r.prev=1,r.next=4,t.$axios.$post("/users/forgot-password",data);case 4:if(!(n=r.sent).success){r.next=9;break}return r.abrupt("return",{message:"Success",error:!1});case 9:return r.abrupt("return",{message:n.message,error:!0});case 10:r.next=16;break;case 12:return r.prev=12,r.t0=r.catch(1),console.error("error",r.t0),r.abrupt("return",{message:r.t0,error:!0});case 16:case"end":return r.stop()}}),r,null,[[1,12]])})))()},loginUser:function(e,data){var t=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n,o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=e.commit,r.prev=1,r.next=4,t.$axios.$post("/users/login",data);case 4:if(o=r.sent,console.log("login",o),!o.success){r.next=11;break}return n("SET_USER",o.data.user),r.abrupt("return",{message:"Success",error:!1});case 11:return r.abrupt("return",{message:"Error",error:!0});case 12:r.next=18;break;case 14:return r.prev=14,r.t0=r.catch(1),console.error("error",r.t0),r.abrupt("return",{message:r.t0,error:!0});case 18:case"end":return r.stop()}}),r,null,[[1,14]])})))()},registerUser:function(e,data){var t=this;return Object(n.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e.commit,r.prev=1,r.next=4,t.$axios.$post("/users/create",data);case 4:if(!r.sent.success){r.next=9;break}return r.abrupt("return",{message:"Success",error:!1});case 9:return r.abrupt("return",{message:"Error",error:!0});case 10:r.next=16;break;case 12:return r.prev=12,r.t0=r.catch(1),console.error("error",r.t0),r.abrupt("return",{message:r.t0,error:!0});case 16:case"end":return r.stop()}}),r,null,[[1,12]])})))()}}},604:function(e,t,r){var map={"./af":310,"./af.js":310,"./ar":311,"./ar-dz":312,"./ar-dz.js":312,"./ar-kw":313,"./ar-kw.js":313,"./ar-ly":314,"./ar-ly.js":314,"./ar-ma":315,"./ar-ma.js":315,"./ar-sa":316,"./ar-sa.js":316,"./ar-tn":317,"./ar-tn.js":317,"./ar.js":311,"./az":318,"./az.js":318,"./be":319,"./be.js":319,"./bg":320,"./bg.js":320,"./bm":321,"./bm.js":321,"./bn":322,"./bn-bd":323,"./bn-bd.js":323,"./bn.js":322,"./bo":324,"./bo.js":324,"./br":325,"./br.js":325,"./bs":326,"./bs.js":326,"./ca":327,"./ca.js":327,"./cs":328,"./cs.js":328,"./cv":329,"./cv.js":329,"./cy":330,"./cy.js":330,"./da":331,"./da.js":331,"./de":332,"./de-at":333,"./de-at.js":333,"./de-ch":334,"./de-ch.js":334,"./de.js":332,"./dv":335,"./dv.js":335,"./el":336,"./el.js":336,"./en-au":337,"./en-au.js":337,"./en-ca":338,"./en-ca.js":338,"./en-gb":339,"./en-gb.js":339,"./en-ie":340,"./en-ie.js":340,"./en-il":341,"./en-il.js":341,"./en-in":342,"./en-in.js":342,"./en-nz":343,"./en-nz.js":343,"./en-sg":344,"./en-sg.js":344,"./eo":345,"./eo.js":345,"./es":346,"./es-do":347,"./es-do.js":347,"./es-mx":348,"./es-mx.js":348,"./es-us":349,"./es-us.js":349,"./es.js":346,"./et":350,"./et.js":350,"./eu":351,"./eu.js":351,"./fa":352,"./fa.js":352,"./fi":353,"./fi.js":353,"./fil":354,"./fil.js":354,"./fo":355,"./fo.js":355,"./fr":356,"./fr-ca":357,"./fr-ca.js":357,"./fr-ch":358,"./fr-ch.js":358,"./fr.js":356,"./fy":359,"./fy.js":359,"./ga":360,"./ga.js":360,"./gd":361,"./gd.js":361,"./gl":362,"./gl.js":362,"./gom-deva":363,"./gom-deva.js":363,"./gom-latn":364,"./gom-latn.js":364,"./gu":365,"./gu.js":365,"./he":366,"./he.js":366,"./hi":367,"./hi.js":367,"./hr":368,"./hr.js":368,"./hu":369,"./hu.js":369,"./hy-am":370,"./hy-am.js":370,"./id":371,"./id.js":371,"./is":372,"./is.js":372,"./it":373,"./it-ch":374,"./it-ch.js":374,"./it.js":373,"./ja":375,"./ja.js":375,"./jv":376,"./jv.js":376,"./ka":377,"./ka.js":377,"./kk":378,"./kk.js":378,"./km":379,"./km.js":379,"./kn":380,"./kn.js":380,"./ko":381,"./ko.js":381,"./ku":382,"./ku.js":382,"./ky":383,"./ky.js":383,"./lb":384,"./lb.js":384,"./lo":385,"./lo.js":385,"./lt":386,"./lt.js":386,"./lv":387,"./lv.js":387,"./me":388,"./me.js":388,"./mi":389,"./mi.js":389,"./mk":390,"./mk.js":390,"./ml":391,"./ml.js":391,"./mn":392,"./mn.js":392,"./mr":393,"./mr.js":393,"./ms":394,"./ms-my":395,"./ms-my.js":395,"./ms.js":394,"./mt":396,"./mt.js":396,"./my":397,"./my.js":397,"./nb":398,"./nb.js":398,"./ne":399,"./ne.js":399,"./nl":400,"./nl-be":401,"./nl-be.js":401,"./nl.js":400,"./nn":402,"./nn.js":402,"./oc-lnc":403,"./oc-lnc.js":403,"./pa-in":404,"./pa-in.js":404,"./pl":405,"./pl.js":405,"./pt":406,"./pt-br":407,"./pt-br.js":407,"./pt.js":406,"./ro":408,"./ro.js":408,"./ru":409,"./ru.js":409,"./sd":410,"./sd.js":410,"./se":411,"./se.js":411,"./si":412,"./si.js":412,"./sk":413,"./sk.js":413,"./sl":414,"./sl.js":414,"./sq":415,"./sq.js":415,"./sr":416,"./sr-cyrl":417,"./sr-cyrl.js":417,"./sr.js":416,"./ss":418,"./ss.js":418,"./sv":419,"./sv.js":419,"./sw":420,"./sw.js":420,"./ta":421,"./ta.js":421,"./te":422,"./te.js":422,"./tet":423,"./tet.js":423,"./tg":424,"./tg.js":424,"./th":425,"./th.js":425,"./tk":426,"./tk.js":426,"./tl-ph":427,"./tl-ph.js":427,"./tlh":428,"./tlh.js":428,"./tr":429,"./tr.js":429,"./tzl":430,"./tzl.js":430,"./tzm":431,"./tzm-latn":432,"./tzm-latn.js":432,"./tzm.js":431,"./ug-cn":433,"./ug-cn.js":433,"./uk":434,"./uk.js":434,"./ur":435,"./ur.js":435,"./uz":436,"./uz-latn":437,"./uz-latn.js":437,"./uz.js":436,"./vi":438,"./vi.js":438,"./x-pseudo":439,"./x-pseudo.js":439,"./yo":440,"./yo.js":440,"./zh-cn":441,"./zh-cn.js":441,"./zh-hk":442,"./zh-hk.js":442,"./zh-mo":443,"./zh-mo.js":443,"./zh-tw":444,"./zh-tw.js":444};function n(e){var t=o(e);return r(t)}function o(e){if(!r.o(map,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return map[e]}n.keys=function(){return Object.keys(map)},n.resolve=o,e.exports=n,n.id=604},607:function(e,t,r){"use strict";r.r(t);var n={name:"error-404",props:{error:{type:Object,default:function(){}}}},o=r(32),c=r(33),l=r.n(c),m=r(185),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"error-404"},[r("div",[r("v-img",{attrs:{src:"/img/error-404.png","lazy-src":"/img/error-404.png",contain:"",width:e.$vuetify.breakpoint.mdAndDown?"200":""}})],1),e._v(" "),r("div",{staticClass:"text-center mt-6 title"},[e._v("\n        Page Not Found!\n        "),e.$vuetify.breakpoint.mdAndDown?r("br"):e._e(),e._v(" "),r("Nuxt-Link",{staticClass:"mx-1",attrs:{to:"/admin/dashboard"}},[e._v("Home page")])],1)])}),[],!1,null,null,null);t.default=component.exports;l()(component,{VImg:m.a})},608:function(e,t,r){"use strict";r.r(t);var n={name:"error-500",props:{error:{type:Object,default:function(){}}}},o=r(32),c=r(33),l=r.n(c),m=r(185),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"error-404"},[r("div",[r("v-img",{attrs:{src:"/img/warning.png","lazy-src":"/img/warning.png",contain:"",width:e.$vuetify.breakpoint.mdAndDown?"200":""}})],1),e._v(" "),r("div",{staticClass:"text-center title"},[e._v("\n        An Error Occured\n        "),e.$vuetify.breakpoint.mdAndDown?r("br"):e._e(),e._v(" "),r("NuxtLink",{staticClass:"mx-1",attrs:{to:"/admin/dashboard"}},[e._v("Home page")])],1)])}),[],!1,null,null,null);t.default=component.exports;l()(component,{VImg:m.a})},609:function(e,t,r){"use strict";r.r(t);var n=r(14),o=(r(64),{name:"rateForm",data:function(){return{dialog:!1,formData:{},rules:{required:function(e){return!!e||"Required field"}}}},methods:{showParcelNotification:function(e){var t=e.position,r=e.icon,title=e.title,n=e.showConfirmButton,time=e.time;return this.$swal.fire({position:t||"success",icon:r||"success",title:title||"Success",showConfirmButton:n||!1,timer:time||1500})},submitFeedback:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.$refs.form.validate()){t.next=2;break}return t.abrupt("return");case 2:if(e.formData.rate){t.next=4;break}return t.abrupt("return",e.showParcelNotification({icon:"error",title:"Please add your rating."}));case 4:return t.prev=4,console.log("DATA TO BE SAVED",e.formData),t.next=8,e.$axios.$post("/ratings/create",e.formData);case 8:if(!(r=t.sent)){t.next=14;break}return console.log("rate",r),t.next=13,e.showParcelNotification({icon:"success",title:"Thank you for rating us."});case 13:e.reset();case 14:t.next=19;break;case 16:t.prev=16,t.t0=t.catch(4),console.error("error",t.t0);case 19:case"end":return t.stop()}}),t,null,[[4,16]])})))()},validate:function(){this.$refs.form.validate()},reset:function(){this.dialog=!1,this.formData={},this.$refs.form.reset()},resetValidation:function(){this.$refs.form.resetValidation()}}}),c=o,l=r(32),m=r(33),f=r.n(m),d=r(252),v=r(221),h=r(124),j=r(628),x=r(629),k=r(630),w=r(637),_=r(631),E=r(144),S=r(632),$=r(62),component=Object(l.a)(c,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("v-dialog",{attrs:{transition:"dialog-bottom-transition","max-width":"600",persistent:""},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on,o=t.attrs;return[r("v-btn",e._g(e._b({staticClass:"text-capitalize font-weight-bold",attrs:{color:"primary",depressed:""}},"v-btn",o,!1),n),[e._v("Rate Our Services")])]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[e._v(" "),[r("v-card",[r("v-toolbar",{attrs:{flat:"",color:"primary",dark:""}},[r("span",{staticClass:"title"},[e._v(" Customer Feedback ")])]),e._v(" "),r("v-card-text",[r("v-form",{ref:"form"},[r("v-row",{staticClass:"mt-4"},[r("v-col",{attrs:{cols:"12"}},[r("v-text-field",{attrs:{label:"Name",outlined:"",dense:"","hide-details":"auto",rules:[e.rules.required]},model:{value:e.formData.fullname,callback:function(t){e.$set(e.formData,"fullname",t)},expression:"formData.fullname"}})],1),e._v(" "),r("v-col",{attrs:{cols:"12"}},[r("v-text-field",{attrs:{label:"Address",outlined:"",dense:"","hide-details":"auto",rules:[e.rules.required]},model:{value:e.formData.address,callback:function(t){e.$set(e.formData,"address",t)},expression:"formData.address"}})],1),e._v(" "),r("v-col",{attrs:{cols:"12"}},[r("v-text-field",{attrs:{label:"Contact",outlined:"",dense:"","hide-details":"auto",rules:[e.rules.required]},model:{value:e.formData.contact,callback:function(t){e.$set(e.formData,"contact",t)},expression:"formData.contact"}})],1),e._v(" "),r("v-col",{attrs:{cols:"12"}},[r("v-textarea",{attrs:{label:"Feedback",outlined:"",dense:"","hide-details":"auto",rows:"3",rules:[e.rules.required]},model:{value:e.formData.message,callback:function(t){e.$set(e.formData,"message",t)},expression:"formData.message"}})],1),e._v(" "),r("v-col",{staticClass:"d-flex justify-space-between align-center",attrs:{cols:"12"}},[r("div",{staticClass:"subtitle-2"},[e._v("\n                                    Rate\n                                ")]),e._v(" "),r("div",[r("v-rating",{attrs:{color:"warning","background-color":"grey darken-1"},model:{value:e.formData.rate,callback:function(t){e.$set(e.formData,"rate",t)},expression:"formData.rate"}})],1)])],1)],1)],1),e._v(" "),r("v-card-actions",{staticClass:"justify-end"},[r("v-btn",{staticClass:"text-capitalize",attrs:{text:""},on:{click:e.reset}},[e._v("Close")]),e._v(" "),r("v-btn",{staticClass:"text-capitalize",attrs:{depressed:"",color:"primary"},on:{click:e.submitFeedback}},[e._v("\n                        Submit\n                    ")])],1)],1)]],2)],1)}),[],!1,null,null,null);t.default=component.exports;f()(component,{VBtn:d.a,VCard:v.a,VCardActions:h.a,VCardText:h.c,VCol:j.a,VDialog:x.a,VForm:k.a,VRating:w.a,VRow:_.a,VTextField:E.a,VTextarea:S.a,VToolbar:$.a})},610:function(e,t,r){"use strict";r.r(t);var n={name:"navbar",data:function(){return{drawer:!0,items:[{title:"Dashboard",icon:"mdi-view-dashboard",to:"/admin/dashboard"},{title:"Parcels",icon:"mdi-cart",to:"/admin/parcels"},{title:"Products",icon:"mdi-briefcase",to:"/admin/product-information"},{title:"Branches",icon:"mdi-map-marker",to:"/admin/branches"},{title:"Reports",icon:"mdi-file-document-multiple",to:"/admin/reports"},{title:"About Us",icon:"mdi-account",to:"/about-us"}],mini:!0}},computed:{isMobileOrTable:function(){return!!this.$vuetify.breakpoint.mdAndDown}},created:function(){var e=this;this.$nuxt.$on("show",(function(t){console.log("bol"),e.drawer=!0}))},beforeDestroy:function(){this.$nuxt.$off("show")}},o=r(32),c=r(33),l=r.n(c),m=r(252),f=r(616),d=r(222),v=r(185),h=r(223),j=r(138),x=r(226),k=r(97),w=r(120),_=r(638),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-navigation-drawer",{attrs:{app:"","mini-variant":e.mini,"mini-variant-width":"80",permanent:!e.isMobileOrTable,temporary:e.isMobileOrTable,color:"primary"},on:{"update:miniVariant":function(t){e.mini=t},"update:mini-variant":function(t){e.mini=t}},scopedSlots:e._u([{key:"append",fn:function(){return[r("div",{staticClass:"pa-2"},[r("v-btn",{attrs:{to:"/auth/login",block:"",depressed:"",color:"transparent"}},[r("v-icon",{attrs:{color:"white"}},[e._v(" mdi-logout ")]),e._v(" "),e.mini?e._e():r("span",{staticClass:"text-capitalize subtitle-1 white--text mx-4"},[e._v("\n                    Logout\n                ")])],1)],1)]},proxy:!0}]),model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[r("v-list-item",{staticClass:"px-2 d-flex justify-center"},[r("v-img",{attrs:{src:"/img/bits-logo.png",width:"150"}})],1),e._v(" "),r("v-divider"),e._v(" "),r("v-list-item",{staticClass:"px-4"},[r("v-list-item-avatar",[r("v-icon",{attrs:{large:"",color:"white"}},[e._v(" mdi-account-circle ")])],1),e._v(" "),r("v-list-item-title",{staticClass:"white--text mx-2"},[e._v("Admin")]),e._v(" "),r("v-btn",{attrs:{dark:"",icon:""},on:{click:function(t){t.stopPropagation(),e.mini=!e.mini}}},[r("v-icon",[e._v("mdi-chevron-left")])],1)],1),e._v(" "),r("v-list",{attrs:{rounded:""}},e._l(e.items,(function(t){return r("v-list-item",{key:t.title,attrs:{color:"white",ripple:"",link:"",to:t.to}},[r("v-list-item-icon",[r("v-icon",{attrs:{dark:""}},[e._v(e._s(t.icon))])],1),e._v(" "),r("v-list-item-content",[r("v-list-item-title",{staticClass:"white--text"},[e._v(e._s(t.title))])],1)],1)})),1)],1)}),[],!1,null,null,null);t.default=component.exports;l()(component,{VBtn:m.a,VDivider:f.a,VIcon:d.a,VImg:v.a,VList:h.a,VListItem:j.a,VListItemAvatar:x.a,VListItemContent:k.a,VListItemIcon:w.a,VListItemTitle:k.b,VNavigationDrawer:_.a})},99:function(e,t,r){"use strict";var n={name:"nuxt-error",props:{error:{type:Object,default:function(){}}},computed:{errorPage:function(){return 404===this.error.statusCode?"404":"500"}}},o=(r(492),r(32)),c=r(33),l=r.n(c),m=r(626),f=r(636),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",[r("v-container",{staticClass:"container"},["404"===e.errorPage?r("bt-m-error-pages-type1"):r("bt-m-error-pages-type2")],1)],1)}),[],!1,null,"8e852c5e",null);t.a=component.exports;l()(component,{BtMErrorPagesType1:r(607).default,BtMErrorPagesType2:r(608).default}),l()(component,{VApp:m.a,VContainer:f.a})}},[[461,27,3,28]]]);