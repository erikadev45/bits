(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{668:function(t,e,n){var content=n(675);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(19).default)("f211c1e4",content,!0,{sourceMap:!1})},674:function(t,e,n){"use strict";n(668)},675:function(t,e,n){var r=n(18)(!1);r.push([t.i,".bot[data-v-c8368c54]{position:fixed;bottom:0}",""]),t.exports=r},676:function(t,e,n){n(8)({target:"Math",stat:!0},{sign:n(469)})},677:function(t,e,n){var content=n(678);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(19).default)("8f7a87bc",content,!0,{sourceMap:!1})},678:function(t,e,n){var r=n(18)(!1);r.push([t.i,'h1,h2,h3,h4,h5,h6{font-family:"Karla",sans-serif}.v-slide-group{display:flex}.v-slide-group:not(.v-slide-group--has-affixes)>.v-slide-group__next,.v-slide-group:not(.v-slide-group--has-affixes)>.v-slide-group__prev{display:none}.v-slide-group.v-item-group>.v-slide-group__next,.v-slide-group.v-item-group>.v-slide-group__prev{cursor:pointer}.v-slide-item{display:inline-flex;flex:0 1 auto}.v-slide-group__next,.v-slide-group__prev{align-items:center;display:flex;flex:0 1 52px;justify-content:center;min-width:52px}.v-slide-group__content{display:flex;flex:1 0 auto;position:relative;transition:.3s cubic-bezier(.25,.8,.5,1);white-space:nowrap}.v-slide-group__wrapper{contain:content;display:flex;flex:1 1 auto;overflow:hidden}.v-slide-group__next--disabled,.v-slide-group__prev--disabled{pointer-events:none}',""]),t.exports=r},696:function(t,e,n){"use strict";n.r(e);var r=n(14),o=(n(65),{name:"customerRatings",data:function(){return{model:null,ratings:[]}},created:function(){var t=this;this.$nuxt.$on("get-ratings",(function(e){t.getRatings()}))},mounted:function(){this.getRatings()},methods:{getRatings:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.$get("/ratings");case 3:(n=e.sent)&&(t.ratings=n.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error("error",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()}}}),l=(n(674),n(30)),c=n(31),f=n.n(c),h=n(225),d=n(92),v=n(660),w=n(706),m=n(740),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-slide-group",{staticClass:"pa-4",attrs:{"center-active":"","show-arrows":""},model:{value:t.model,callback:function(e){t.model=e},expression:"model"}},t._l(t.ratings,(function(e,i){return n("v-slide-item",{key:i,scopedSlots:t._u([{key:"default",fn:function(r){r.active;var o=r.toggle;return[n("v-card",{staticClass:"ma-4",attrs:{color:"primary","min-height":"150",flat:"",dark:"",width:"300"},on:{click:o}},[n("v-card-subtitle",{staticClass:"font-italic font-weight-light "},[t._v("\n                "+t._s(t.$dayjs(e.created_on).format("MMMM DD, YYYY "))+"\n            ")]),t._v(" "),n("v-card-text",{staticClass:"font-italic font-weight-light"},[t._v('\n                "'+t._s(e.message)+'"\n            ')]),t._v(" "),n("div",{staticClass:"px-4 body-2 mb-3 font-weight-light font-italic"},[t._v("\n                - "+t._s(e.fullname)+"\n                "),n("div",{staticClass:"d-flex justify-start"},[n("v-rating",{attrs:{color:"warning",size:"20",dense:"","background-color":"grey darken-1"},model:{value:e.rate,callback:function(n){t.$set(e,"rate",n)},expression:"rate.rate"}})],1)])],1)]}}],null,!0)})})),1)}),[],!1,null,"c8368c54",null);e.default=component.exports;f()(component,{VCard:h.a,VCardSubtitle:d.b,VCardText:d.c,VRating:v.a,VSlideGroup:w.a,VSlideItem:m.a})},706:function(t,e,n){"use strict";n(11),n(10),n(13),n(4),n(15),n(12),n(16),n(35),n(56),n(42),n(27),n(67),n(73),n(44);var r=n(3),o=(n(676),n(39),n(33),n(45),n(677),n(75)),l=n(141),c=n(180),f=n(196),h=n(151),d=n(258),v=n(7),w=n(0);function m(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return y(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return y(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,l=!0,c=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return l=t.done,t},e:function(t){c=!0,o=t},f:function(){try{l||null==n.return||n.return()}finally{if(c)throw o}}}}function y(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}function x(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function O(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?x(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):x(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}function _(t){var e=Math.abs(t);return Math.sign(t)*(e/((1/.501-2)*(1-e)+1))}function $(t,e,n,r){var o=t.clientWidth,l=n?e.content-t.offsetLeft-o:t.offsetLeft;n&&(r=-r);var c=e.wrapper+r,f=o+l,h=.4*o;return l<=r?r=Math.max(l-h,0):c<=f&&(r=Math.min(r-(c-f-h),e.content-e.wrapper)),n?-r:r}var S=Object(v.a)(c.a,f.a).extend({name:"base-slide-group",directives:{Resize:h.a,Touch:d.a},props:{activeClass:{type:String,default:"v-slide-item--active"},centerActive:Boolean,nextIcon:{type:String,default:"$next"},prevIcon:{type:String,default:"$prev"},showArrows:{type:[Boolean,String],validator:function(t){return"boolean"==typeof t||["always","desktop","mobile"].includes(t)}}},data:function(){return{internalItemsLength:0,isOverflowing:!1,resizeTimeout:0,startX:0,isSwipingHorizontal:!1,isSwiping:!1,scrollOffset:0,widths:{content:0,wrapper:0}}},computed:{canTouch:function(){return"undefined"!=typeof window},__cachedNext:function(){return this.genTransition("next")},__cachedPrev:function(){return this.genTransition("prev")},classes:function(){return O(O({},c.a.options.computed.classes.call(this)),{},{"v-slide-group":!0,"v-slide-group--has-affixes":this.hasAffixes,"v-slide-group--is-overflowing":this.isOverflowing})},hasAffixes:function(){switch(this.showArrows){case"always":return!0;case"desktop":return!this.isMobile;case!0:return this.isOverflowing||Math.abs(this.scrollOffset)>0;case"mobile":return this.isMobile||this.isOverflowing||Math.abs(this.scrollOffset)>0;default:return!this.isMobile&&(this.isOverflowing||Math.abs(this.scrollOffset)>0)}},hasNext:function(){if(!this.hasAffixes)return!1;var t=this.widths,content=t.content,e=t.wrapper;return content>Math.abs(this.scrollOffset)+e},hasPrev:function(){return this.hasAffixes&&0!==this.scrollOffset}},watch:{internalValue:"setWidths",isOverflowing:"setWidths",scrollOffset:function(t){this.$vuetify.rtl&&(t=-t);var e=t<=0?_(-t):t>this.widths.content-this.widths.wrapper?-(this.widths.content-this.widths.wrapper)+_(this.widths.content-this.widths.wrapper-t):-t;this.$vuetify.rtl&&(e=-e),this.$refs.content.style.transform="translateX(".concat(e,"px)")}},beforeUpdate:function(){this.internalItemsLength=(this.$children||[]).length},updated:function(){this.internalItemsLength!==(this.$children||[]).length&&this.setWidths()},methods:{onScroll:function(){this.$refs.wrapper.scrollLeft=0},onFocusin:function(t){if(this.isOverflowing){var e,n=m(Object(w.g)(t));try{for(n.s();!(e=n.n()).done;){var r,o=e.value,l=m(this.items);try{for(l.s();!(r=l.n()).done;){var c=r.value;if(c.$el===o)return void(this.scrollOffset=$(c.$el,this.widths,this.$vuetify.rtl,this.scrollOffset))}}catch(t){l.e(t)}finally{l.f()}}}catch(t){n.e(t)}finally{n.f()}}},genNext:function(){var t=this,slot=this.$scopedSlots.next?this.$scopedSlots.next({}):this.$slots.next||this.__cachedNext;return this.$createElement("div",{staticClass:"v-slide-group__next",class:{"v-slide-group__next--disabled":!this.hasNext},on:{click:function(){return t.onAffixClick("next")}},key:"next"},[slot])},genContent:function(){return this.$createElement("div",{staticClass:"v-slide-group__content",ref:"content",on:{focusin:this.onFocusin}},this.$slots.default)},genData:function(){return{class:this.classes,directives:[{name:"resize",value:this.onResize}]}},genIcon:function(t){var e=t;this.$vuetify.rtl&&"prev"===t?e="next":this.$vuetify.rtl&&"next"===t&&(e="prev");var n="".concat(t[0].toUpperCase()).concat(t.slice(1)),r=this["has".concat(n)];return this.showArrows||r?this.$createElement(o.a,{props:{disabled:!r}},this["".concat(e,"Icon")]):null},genPrev:function(){var t=this,slot=this.$scopedSlots.prev?this.$scopedSlots.prev({}):this.$slots.prev||this.__cachedPrev;return this.$createElement("div",{staticClass:"v-slide-group__prev",class:{"v-slide-group__prev--disabled":!this.hasPrev},on:{click:function(){return t.onAffixClick("prev")}},key:"prev"},[slot])},genTransition:function(t){return this.$createElement(l.c,[this.genIcon(t)])},genWrapper:function(){var t=this;return this.$createElement("div",{staticClass:"v-slide-group__wrapper",directives:[{name:"touch",value:{start:function(e){return t.overflowCheck(e,t.onTouchStart)},move:function(e){return t.overflowCheck(e,t.onTouchMove)},end:function(e){return t.overflowCheck(e,t.onTouchEnd)}}}],ref:"wrapper",on:{scroll:this.onScroll}},[this.genContent()])},calculateNewOffset:function(t,e,n,r){var o=n?-1:1,l=o*r+("prev"===t?-1:1)*e.wrapper;return o*Math.max(Math.min(l,e.content-e.wrapper),0)},onAffixClick:function(t){this.$emit("click:".concat(t)),this.scrollTo(t)},onResize:function(){this._isDestroyed||this.setWidths()},onTouchStart:function(t){var content=this.$refs.content;this.startX=this.scrollOffset+t.touchstartX,content.style.setProperty("transition","none"),content.style.setProperty("willChange","transform")},onTouchMove:function(t){if(this.canTouch){if(!this.isSwiping){var e=t.touchmoveX-t.touchstartX,n=t.touchmoveY-t.touchstartY;this.isSwipingHorizontal=Math.abs(e)>Math.abs(n),this.isSwiping=!0}this.isSwipingHorizontal&&(this.scrollOffset=this.startX-t.touchmoveX,document.documentElement.style.overflowY="hidden")}},onTouchEnd:function(){if(this.canTouch){var t=this.$refs,content=t.content,e=t.wrapper,n=content.clientWidth-e.clientWidth;content.style.setProperty("transition",null),content.style.setProperty("willChange",null),this.$vuetify.rtl?this.scrollOffset>0||!this.isOverflowing?this.scrollOffset=0:this.scrollOffset<=-n&&(this.scrollOffset=-n):this.scrollOffset<0||!this.isOverflowing?this.scrollOffset=0:this.scrollOffset>=n&&(this.scrollOffset=n),this.isSwiping=!1,document.documentElement.style.removeProperty("overflow-y")}},overflowCheck:function(t,e){t.stopPropagation(),this.isOverflowing&&e(t)},scrollIntoView:function(){if(!this.selectedItem&&this.items.length){var t=this.items[this.items.length-1].$el.getBoundingClientRect(),e=this.$refs.wrapper.getBoundingClientRect();(this.$vuetify.rtl&&e.right<t.right||!this.$vuetify.rtl&&e.left>t.left)&&this.scrollTo("prev")}this.selectedItem&&(0===this.selectedIndex||!this.centerActive&&!this.isOverflowing?this.scrollOffset=0:this.centerActive?this.scrollOffset=function(t,e,n){var r=t.offsetLeft,o=t.clientWidth;if(n){var l=e.content-r-o/2-e.wrapper/2;return-Math.min(e.content-e.wrapper,Math.max(0,l))}var c=r+o/2-e.wrapper/2;return Math.min(e.content-e.wrapper,Math.max(0,c))}(this.selectedItem.$el,this.widths,this.$vuetify.rtl):this.isOverflowing&&(this.scrollOffset=$(this.selectedItem.$el,this.widths,this.$vuetify.rtl,this.scrollOffset)))},scrollTo:function(t){this.scrollOffset=this.calculateNewOffset(t,{content:this.$refs.content?this.$refs.content.clientWidth:0,wrapper:this.$refs.wrapper?this.$refs.wrapper.clientWidth:0},this.$vuetify.rtl,this.scrollOffset)},setWidths:function(){var t=this;window.requestAnimationFrame((function(){if(!t._isDestroyed){var e=t.$refs,content=e.content,n=e.wrapper;t.widths={content:content?content.clientWidth:0,wrapper:n?n.clientWidth:0},t.isOverflowing=t.widths.wrapper+1<t.widths.content,t.scrollIntoView()}}))}},render:function(t){return t("div",this.genData(),[this.genPrev(),this.genWrapper(),this.genNext()])}});e.a=S.extend({name:"v-slide-group",provide:function(){return{slideGroup:this}}})},740:function(t,e,n){"use strict";var r=n(3),o=n(150),l=n(7),c=n(9),f=n(2).a.extend({props:{activeClass:String,value:{required:!1}},data:function(){return{isActive:!1}},methods:{toggle:function(){this.isActive=!this.isActive}},render:function(){return this.$scopedSlots.default?(this.$scopedSlots.default&&(element=this.$scopedSlots.default({active:this.isActive,toggle:this.toggle})),Array.isArray(element)&&1===element.length&&(element=element[0]),element&&!Array.isArray(element)&&element.tag?(element.data=this._b(element.data||{},element.tag,{class:Object(r.a)({},this.activeClass,this.isActive)}),element):(Object(c.c)("v-item should only contain a single element",this),element)):(Object(c.c)("v-item is missing a default scopedSlot",this),null);var element}});Object(l.a)(f,Object(o.a)("itemGroup","v-item","v-item-group")).extend({name:"v-item"}),e.a=Object(l.a)(f,Object(o.a)("slideGroup")).extend({name:"v-slide-item"})}}]);