(window.webpackJsonp=window.webpackJsonp||[]).push([[10,5],{644:function(t,e,o){"use strict";o.r(e);o(11),o(10),o(13),o(16),o(17);var n=o(70),r=o(3);o(4),o(12),o(457),o(35);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={name:"productItemModal",props:{formData:Object,showDialog:Boolean,action:String},data:function(){return{dialog:!1,copyData:l({},this.formData),rules:{required:function(t){return!!t||"Required field"}}}},mounted:function(){},watch:{showDialog:function(t){this.dialog=t,console.log("dialog form",this.formData),this.copyData=l({},this.formData)},"copyData.product_id":function(t){var e=this;this.storeProducts.forEach((function(o){o.id===t&&(e.copyData.shipping_fee=parseFloat(o.shipping_fee).toFixed(2),e.copyData.name=o.name,e.copyData.id=o.id)}))},"copyData.quantity":function(t){var e;this.copyData.total=parseFloat((null===(e=this.copyData)||void 0===e?void 0:e.shipping_fee)*t).toFixed(2)}},computed:{storeProducts:function(){return Object(n.a)(this.$store.state.products.products)}},methods:{cancel:function(){console.log("this.action",this.action),"new"===this.action?(this.dialog=!1,this.copyData={},this.$refs.productItemForm.resetValidation()):(this.$emit("cancel-edit-product",!1),this.dialog=!1)},addItem:function(){if(console.log("addItem action",this.action),this.$refs.productItemForm.validate()){if(0==this.copyData.quantity)return this.$swal.fire({title:"Quantity cannot be 0",icon:"warning"});console.log("ADD PRODUCT ITEM",this.copyData),"new"===this.action?(this.$emit("save-product-item",this.copyData),this.dialog=!1,this.copyData={},this.$refs.productItemForm.resetValidation()):(this.$emit("update-product-item",this.copyData),this.$emit("cancel-edit-product",!1),this.dialog=!1)}}}},f=o(32),m=o(33),h=o.n(m),v=o(252),y=o(221),D=o(124),w=o(629),_=o(630),P=o(222),x=o(654),I=o(634),O=o(144),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-dialog",{attrs:{width:"500",persistent:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,r=e.attrs;return[o("v-btn",t._g(t._b({staticClass:"text-capitalize",attrs:{color:"primary",depressed:""}},"v-btn",r,!1),n),[o("v-icon",{attrs:{left:""}},[t._v("\n                mdi-plus\n            ")]),t._v("\n            Add Product\n        ")],1)]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[t._v(" "),o("v-card",[o("v-form",{ref:"productItemForm"},[o("v-card-title",[t._v("\n                Product\n            ")]),t._v(" "),o("v-card-text",[o("v-select",{attrs:{items:t.storeProducts,"item-value":"id","item-text":"name",label:"Select Product",outlined:"",dense:"",rules:[t.rules.required],readonly:"edit"===t.action},model:{value:t.copyData.product_id,callback:function(e){t.$set(t.copyData,"product_id",e)},expression:"copyData.product_id"}}),t._v(" "),o("v-text-field",{attrs:{label:"Quantity",outlined:"",dense:"",type:"number",rules:[t.rules.required]},model:{value:t.copyData.quantity,callback:function(e){t.$set(t.copyData,"quantity",e)},expression:"copyData.quantity"}}),t._v(" "),o("v-text-field",{attrs:{label:"Shipping Fee",outlined:"",dense:"",rules:[t.rules.required],readonly:"",type:"number"},model:{value:t.copyData.shipping_fee,callback:function(e){t.$set(t.copyData,"shipping_fee",e)},expression:"copyData.shipping_fee"}}),t._v(" "),o("v-text-field",{attrs:{label:"Total Amount",outlined:"",dense:"",rules:[t.rules.required],type:"number",readonly:""},model:{value:t.copyData.total,callback:function(e){t.$set(t.copyData,"total",e)},expression:"copyData.total"}})],1),t._v(" "),o("v-card-actions",[o("v-spacer"),t._v(" "),o("v-btn",{attrs:{color:"gray",text:""},on:{click:t.cancel}},[t._v("\n                    Cancel\n                ")]),t._v(" "),o("v-btn",{attrs:{color:"primary",depressed:""},on:{click:t.addItem}},[t._v("\n                    "+t._s("new"===t.action?"Add":"Save")+"\n                ")])],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;h()(component,{VBtn:v.a,VCard:y.a,VCardActions:D.a,VCardText:D.c,VCardTitle:D.d,VDialog:w.a,VForm:_.a,VIcon:P.a,VSelect:x.a,VSpacer:I.a,VTextField:O.a})},646:function(t,e,o){"use strict";o.r(e);var n=o(14),r=(o(64),o(63),o(13),o(4),o(35),{name:"parcelProductsTable",props:{products:Array},data:function(){return{formData:{},selectedProducts:[],showDialog:!1,action:"new"}},watch:{selectedProducts:function(t){this.$emit("add-products",t)}},mounted:function(){console.log("products of parcel",this.products)},computed:{storeProducts:function(){return this.$store.state.products.products},headers:function(){return[{text:"Product",align:"start",sortable:!1,value:"name"},{text:"Quantity",value:"quantity"},{text:"Shipping Fee (₱)",value:"shipping_fee"},{text:"Amount (₱)",value:"total"},{text:"Actions",value:"actions"}]}},methods:{cancelEditProduct:function(){this.formData={},this.showDialog=!1,this.action="new"},updateItem:function(t){console.log("updatedItem",t),this.selectedProducts=this.selectedProducts.map((function(e){return e.product_id===t.id?t:e})),console.log("selectedProducts",this.selectedProducts),this.action="new",this.formData={}},saveItem:function(data){0===this.selectedProducts.filter((function(t){return+t.id==+data.id})).length?this.selectedProducts.push(data):this.$swal.fire({title:"".concat(data.name," added already."),icon:"warning"}),console.log("saveItem-selectedProducts",this.selectedProducts),this.formData={},this.action="new"},editItem:function(t){console.log("editItem",t),this.action="edit",this.showDialog=!0,this.formData=t},deleteItem:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function o(){return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.prev=0,o.next=3,e.$swal.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"});case 3:o.sent.isConfirmed&&(e.selectedProducts=e.selectedProducts.filter((function(e){return e.id!==t.id})),e.$swal.fire({position:"center",icon:"success",title:"Product Item has been deleted.",showConfirmButton:!1,timer:1500})),o.next=10;break;case 7:o.prev=7,o.t0=o.catch(0),console.error("error",o.t0);case 10:case"end":return o.stop()}}),o,null,[[0,7]])})))()}}}),c=o(32),l=o(33),d=o.n(l),f=o(691),m=o(222),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("v-data-table",{attrs:{headers:t.headers,items:t.selectedProducts,"hide-default-footer":""},scopedSlots:t._u([{key:"top",fn:function(){return[o("div",{staticClass:"d-flex justify-space-between"},[o("span",[t._v("\n                    Product Information\n                ")]),t._v(" "),o("bt-m-dialog-product-item",{attrs:{showDialog:t.showDialog,action:t.action,formData:t.formData},on:{"save-product-item":t.saveItem,"cancel-edit-product":t.cancelEditProduct,"update-product-item":t.updateItem}})],1)]},proxy:!0},{key:"item.actions",fn:function(e){var n=e.item;return[o("v-icon",{staticClass:"mr-2",attrs:{small:"",color:"orange"},on:{click:function(e){return t.editItem(n)}}},[t._v("\n                mdi-pencil\n            ")]),t._v(" "),o("v-icon",{attrs:{color:"red",small:""},on:{click:function(e){return t.deleteItem(n)}}},[t._v("\n                mdi-delete\n            ")])]}}])})],1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{BtMDialogProductItem:o(644).default}),d()(component,{VDataTable:f.a,VIcon:m.a})}}]);