(window.webpackJsonp=window.webpackJsonp||[]).push([[27,8],{667:function(t,e,r){var content=r(673);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(19).default)("a0f06b9a",content,!0,{sourceMap:!1})},668:function(t,e,r){var content=r(675);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(19).default)("f211c1e4",content,!0,{sourceMap:!1})},672:function(t,e,r){"use strict";r(667)},673:function(t,e,r){var n=r(18)(!1);n.push([t.i,".text-failed[data-v-7c7131f2]{color:#bf360c!important}",""]),t.exports=n},674:function(t,e,r){"use strict";r(668)},675:function(t,e,r){var n=r(18)(!1);n.push([t.i,".bot[data-v-c8368c54]{position:fixed;bottom:0}",""]),t.exports=n},685:function(t,e,r){var content=r(705);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(19).default)("7eb10a50",content,!0,{sourceMap:!1})},695:function(t,e,r){"use strict";r.r(e);var n={computed:{width:function(){var t=this.$vuetify.breakpoint.width;return t<600?(console.log("Extra Small Screen"),"extra-small"):t>600&&t<960?(console.log("Small Screen"),"small"):t>960&&t<1264?(console.log("Medium Screen"),"medium"):t>1264&&t<1904?(console.log("Large Screen"),"large"):t>1904?(console.log("Extra Large Screen"),"extra-large"):void 0}}},c=(r(672),r(30)),l=r(31),o=r.n(l),d=r(188),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"d-flex justify-center"},[r("v-img",{attrs:{src:"/img/delivery-failed.png",width:""+(["large","extra-large"].includes(t.width)?300:100)}})],1),t._v(" "),r("div",{staticClass:"d-flex justify-start text-center title font-weight-bold text-failed"},[t._v("\n        Unsuccessful Delivery!\n    ")]),t._v(" "),r("div",{staticClass:"d-flex justify-center subtitle-1 font-weight-bold text-failed text-break text-center"},[t._v("\n        This Items return to Sender in 3-5 days!\n    ")])])}),[],!1,null,"7c7131f2",null);e.default=component.exports;o()(component,{VImg:d.a})},696:function(t,e,r){"use strict";r.r(e);var n=r(14),c=(r(65),{name:"customerRatings",data:function(){return{model:null,ratings:[]}},created:function(){var t=this;this.$nuxt.$on("get-ratings",(function(e){t.getRatings()}))},mounted:function(){this.getRatings()},methods:{getRatings:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.$get("/ratings");case 3:(r=e.sent)&&(t.ratings=r.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error("error",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()}}}),l=(r(674),r(30)),o=r(31),d=r.n(o),v=r(225),f=r(92),_=r(660),m=r(706),h=r(740),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-slide-group",{staticClass:"pa-4",attrs:{"center-active":"","show-arrows":""},model:{value:t.model,callback:function(e){t.model=e},expression:"model"}},t._l(t.ratings,(function(e,i){return r("v-slide-item",{key:i,scopedSlots:t._u([{key:"default",fn:function(n){n.active;var c=n.toggle;return[r("v-card",{staticClass:"ma-4",attrs:{color:"primary","min-height":"150",flat:"",dark:"",width:"300"},on:{click:c}},[r("v-card-subtitle",{staticClass:"font-italic font-weight-light "},[t._v("\n                "+t._s(t.$dayjs(e.created_on).format("MMMM DD, YYYY "))+"\n            ")]),t._v(" "),r("v-card-text",{staticClass:"font-italic font-weight-light"},[t._v('\n                "'+t._s(e.message)+'"\n            ')]),t._v(" "),r("div",{staticClass:"px-4 body-2 mb-3 font-weight-light font-italic"},[t._v("\n                - "+t._s(e.fullname)+"\n                "),r("div",{staticClass:"d-flex justify-start"},[r("v-rating",{attrs:{color:"warning",size:"20",dense:"","background-color":"grey darken-1"},model:{value:e.rate,callback:function(r){t.$set(e,"rate",r)},expression:"rate.rate"}})],1)])],1)]}}],null,!0)})})),1)}),[],!1,null,"c8368c54",null);e.default=component.exports;d()(component,{VCard:v.a,VCardSubtitle:f.b,VCardText:f.c,VRating:_.a,VSlideGroup:m.a,VSlideItem:h.a})},704:function(t,e,r){"use strict";r(685)},705:function(t,e,r){var n=r(18)(!1);n.push([t.i,".customer-ratings[data-v-a8834050]{margin-top:200px}",""]),t.exports=n},746:function(t,e,r){"use strict";r.r(e);var n=r(3),c=r(14);r(65),r(4),r(64),r(27),r(66),r(84),r(13),r(11),r(10),r(15),r(12),r(16);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function o(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={layout:"public",name:"customer",data:function(){return{isParcelNotFound:!1,referenceNumber:"",parcelData:{},isSearch:!1,history:[],isNotEmpty:!1,rating:4}},computed:{totalFee:function(){var t;return(null===(t=this.parcelData.products)||void 0===t?void 0:t.length)>0?this.parcelData.products.map((function(t){return+t.total})).reduce((function(t,e){return t+e}),0):0}},watch:{referenceNumber:function(t){""===t&&(this.isNotEmpty=!1,this.isSearch=!1)}},methods:{numberWithCommas:function(t){return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")},showParcelNotification:function(t){var e=t.position,r=t.icon,title=t.title,n=t.showConfirmButton,time=t.time;return this.$swal.fire({position:e||"success",icon:r||"success",title:title||"Success",showConfirmButton:n||!1,timer:time||1500})},onEnter:function(){this.isSearch=!0},getShippingProducts:function(t){var e=this;return Object(c.a)(regeneratorRuntime.mark((function r(){var n,c;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,e.$axios.$post("/shipping-details/get-shipping-details-by-parcel",{parcel_id:t});case 3:if(c=r.sent,!((null===(n=c.data)||void 0===n?void 0:n.length)>0)){r.next=6;break}return r.abrupt("return",c.data.map((function(t,i){if(null!==t.product_id)return t})).filter((function(t){return void 0!==t})));case 6:r.next=11;break;case 8:r.prev=8,r.t0=r.catch(0),console.error("error",r.t0);case 11:case"end":return r.stop()}}),r,null,[[0,8]])})))()},getParcelByReferenceNumber:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){var r,n,c,l,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==t.referenceNumber){e.next=4;break}return e.next=3,t.showParcelNotification({icon:"error",title:"Please input Reference Number"});case 3:return e.abrupt("return",e.sent);case 4:return t.history=[],e.prev=5,e.next=8,t.$store.dispatch("parcels/getParcelByRefId",{reference_number:t.referenceNumber});case 8:if((r=e.sent).error){e.next=21;break}return t.isSearch=!0,n={date:r.data[0].date_shipped,branch:r.data[0].branch_processed,address:r.data[0].branch_processed_address,contact:r.data[0].branch_processed_contact_number,icon:"mdi-cube-send",title:"Branch Processed",title2:"Branch Address"},t.history.push(n),null===r.data[0].date_received&&""===r.data[0].date_received&&void 0===r.data[0].date_received||(c={date:r.data[0].date_received,branch:r.data[0].branch_pickup,address:r.data[0].branch_pickup_address,contact:r.data[0].branch_pickup_contact_number,icon:"mdi-car-pickup",title:"Branch Pickup",title2:"Branch Address"},t.history.push(c)),e.next=16,t.getShippingProducts(r.data[0].parcel_id);case 16:(null==(l=e.sent)?void 0:l.length)>0?(d=l.map((function(t){if(t&&t.parcel_id===r.data[0].parcel_id)return t})),t.parcelData=o(o({},r.data[0]),{},{products:d})):t.parcelData=o(o({},r.data[0]),{},{products:[]}),t.isNotEmpty=!0,e.next=24;break;case 21:return e.next=23,t.showParcelNotification({icon:"error",title:"Parcel Not Found"});case 23:t.referenceNumber="";case 24:e.next=29;break;case 26:e.prev=26,e.t0=e.catch(5),console.error("error",e.t0);case 29:case"end":return e.stop()}}),e,null,[[5,26]])})))()}}},v=(r(704),r(30)),f=r(31),_=r.n(f),m=r(240),h=r(225),y=r(92),x=r(649),w=r(659),C=r(226),k=r(188),D=r(652),S=r(147),j=r(742),P=r(743),component=Object(v.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-row",{staticClass:"pa-0"},[r("v-col",{staticClass:"tracker-field-con py-16",attrs:{cols:"12"}},[t.$vuetify.breakpoint.mdAndDown?t._e():r("div",{staticStyle:{float:"left"}},[r("v-img",{attrs:{src:"/img/bits-logo.png",width:"200"}})],1),t._v(" "),r("v-container",{staticStyle:{"max-width":"800px"}},[r("div",{staticClass:"mb-6 text-center headline white--text font-weight-bold"},[t._v("\n                    Start tracking your parcel by entering your reference number.\n                ")]),t._v(" "),r("v-text-field",{attrs:{outlined:"",placeholder:"Enter Pracel Tracking ID","hide-details":"auto",flat:"","append-icon":"mdi-magnify",solo:""},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.getParcelByReferenceNumber.apply(null,arguments)}},scopedSlots:t._u([{key:"append",fn:function(){return[r("v-btn",{staticClass:"text-capitalize",attrs:{color:"secondary",depressed:""},on:{click:t.getParcelByReferenceNumber}},[t._v("\n                            Search\n                            "),r("v-icon",{attrs:{right:""}},[t._v("\n                                mdi-magnify\n                            ")])],1)]},proxy:!0}]),model:{value:t.referenceNumber,callback:function(e){t.referenceNumber=e},expression:"referenceNumber"}})],1)],1),t._v(" "),"Unsuccessful Delivery"===t.parcelData.status&&t.isSearch?r("v-col",{staticClass:"my-16 d-flex justify-center",attrs:{cols:"12"}},[r("bt-m-error-pages-failed")],1):t._e(),t._v(" "),t.isParcelNotFound?r("v-col",{staticClass:"mt-16 d-flex justify-center",attrs:{cols:"12"}},[r("div",[r("div",{staticClass:"d-flex justify-center"},[r("v-img",{attrs:{src:"/img/parcel-not-found.png",width:t.$vuetify.breakpoint.mdAndDown?50:100}})],1),t._v(" "),r("div",{class:"mt-6 "+(t.$vuetify.breakpoint.mdAndDown?"title":"display-1")},[t._v("Parcel Not Found")])])]):t._e(),t._v(" "),t.isNotEmpty&&"Unsuccessful Delivery"!==t.parcelData.status?r("v-col",{attrs:{cols:"12"}},[r("v-container",{staticStyle:{"max-width":"700px"}},[r("div",{staticClass:"my-4 mb-2 title ml-10 d-flex justify-space-between"},[r("span",{staticClass:"font-weight-light"},[t._v(" Parcel Details ")]),t._v(" "),r("span",{staticClass:"font-weight-bold"},[t._v("\n                        "+t._s(t.parcelData.reference_number)+"\n                    ")])]),t._v(" "),r("div",{staticClass:"mb-2 title ml-10"},[r("span",{staticClass:"font-weight-light subtitle-2"},[t._v("\n                        Sender :\n                    ")]),t._v(" "),r("span",{staticClass:"font-weight-bold subtitle-2"},[t._v("\n                        "+t._s(t.parcelData.sender_name)+"\n                    ")])]),t._v(" "),r("div",{staticClass:"mb-2 title ml-10"},[r("span",{staticClass:"font-weight-light subtitle-2"},[t._v("\n                        Sender Contact Number:\n                    ")]),t._v(" "),r("span",{staticClass:"font-weight-bold subtitle-2"},[t._v("\n                        "+t._s(t.parcelData.sender_contact)+"\n                    ")])]),t._v(" "),r("div",{staticClass:"mb-2 title ml-10"},[r("span",{staticClass:"font-weight-light subtitle-2"},[t._v("\n                        Receiver :\n                    ")]),t._v(" "),r("span",{staticClass:"font-weight-bold subtitle-2"},[t._v("\n                        "+t._s(t.parcelData.receiver_name)+"\n                    ")])]),t._v(" "),r("div",{staticClass:"mb-2 title ml-10"},[r("span",{staticClass:"font-weight-light subtitle-2"},[t._v("\n                        Receiver Address:\n                    ")]),t._v(" "),r("span",{staticClass:"font-weight-bold subtitle-2"},[t._v("\n                        "+t._s(t.parcelData.receiver_address)+"\n                    ")])]),t._v(" "),r("div",{staticClass:"mb-2 title ml-10"},[r("span",{staticClass:"font-weight-light subtitle-2"},[t._v("\n                        Receiver Contact Number:\n                    ")]),t._v(" "),r("span",{staticClass:"font-weight-bold subtitle-2"},[t._v("\n                        "+t._s(t.parcelData.receiver_contact)+"\n                    ")])]),t._v(" "),r("div",{staticClass:"mb-2 title ml-10"},[r("span",{staticClass:"font-weight-light subtitle-2"},[t._v("\n                        Status:\n                    ")]),t._v(" "),r("span",{staticClass:"font-weight-bold subtitle-2"},[t._v("\n                        "+t._s(t.parcelData.status)+"\n                    ")])]),t._v(" "),"Unsuccessful Delivery"===t.parcelData.status?r("div",{staticClass:"mb-2 title ml-10"},[r("span",{staticClass:"font-weight-light subtitle-2"},[t._v("\n                        Note:\n                    ")]),t._v(" "),r("span",{staticClass:"font-weight-bold subtitle-2"},[t._v("\n                        Return To Sender\n                    ")])]):t._e(),t._v(" "),t.parcelData.products&&0!==t.parcelData.products.length?r("div",{staticClass:"mb-8 title ml-10"},[r("span",{staticClass:"font-weight-light subtitle-2"},[t._v("\n                        Products:\n                    ")]),t._v(" "),t._l(t.parcelData.products,(function(e,i){return r("div",{key:i},[r("v-card",{attrs:{flat:"",color:"transparent"}},[r("v-card-subtitle",[t._v("\n                                Item "+t._s(i+1)+".\n                            ")]),t._v(" "),r("v-card-text",[r("div",[t._v("\n                                    Name: "+t._s(e.name)+"\n                                ")]),t._v(" "),r("div",[t._v("\n                                    Quantity: "+t._s(e.quantity)+"\n                                ")]),t._v(" "),r("div",[t._v("\n                                    Shipping Fee: ₱ "+t._s(parseFloat(e.total).toFixed(2))+"\n                                ")]),t._v(" "),t.parcelData.products.length===i+1?r("div",{staticClass:"d-flex justify-end"},[r("span",{staticClass:"font-weight-bold"},[t._v("\n                                        Total: ₱ "+t._s(t.numberWithCommas(parseFloat(t.totalFee).toFixed(2)))+"\n                                    ")])]):t._e()])],1)],1)}))],2):t._e(),t._v(" "),r("v-timeline",{attrs:{dense:"","align-top":""}},t._l(t.history,(function(e,n){return r("v-timeline-item",{key:n,attrs:{color:"primary",small:"",icon:e.icon,"fill-dot":""}},[r("v-card",{staticClass:"pa-2",attrs:{flat:""}},[r("v-card-title",{staticClass:"subtitle-1 font-weight-bold"},[t._v("\n                                "+t._s(t.$dayjs(e.date).format("MMMM DD, YYYY (dddd)"))+"\n                            ")]),t._v(" "),r("v-card-text",[t._v("\n                                "+t._s(e.title)+" - "+t._s(e.branch)+"\n                                "),r("br"),t._v("\n                                "+t._s(e.title2)+" - "+t._s(e.address)+"\n                                "),r("br"),t._v("\n                                "+t._s("Contact")+" - "+t._s(e.contact)+"\n                            ")])],1)],1)})),1)],1)],1):t._e(),t._v(" "),t.isSearch?t._e():r("v-col",{staticClass:"mt-16 pt-16",attrs:{cols:"12"}},[r("div",{staticClass:"text-center display-1"},[t._v("\n                Customer Ratings\n            ")]),t._v(" "),r("bt-m-ratings-carousel")],1)],1)],1)}),[],!1,null,"a8834050",null);e.default=component.exports;_()(component,{BtMErrorPagesFailed:r(695).default,BtMRatingsCarousel:r(696).default}),_()(component,{VBtn:m.a,VCard:h.a,VCardSubtitle:y.b,VCardText:y.c,VCardTitle:y.d,VCol:x.a,VContainer:w.a,VIcon:C.a,VImg:k.a,VRow:D.a,VTextField:S.a,VTimeline:j.a,VTimelineItem:P.a})}}]);