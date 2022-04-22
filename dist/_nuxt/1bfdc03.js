(window.webpackJsonp=window.webpackJsonp||[]).push([[7,5,10],{644:function(e,t,r){"use strict";r.r(t);r(11),r(10),r(13),r(16),r(17);var c=r(70),o=r(3);r(4),r(12),r(457),r(35);function n(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?n(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):n(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var d={name:"productItemModal",props:{formData:Object,showDialog:Boolean,action:String},data:function(){return{dialog:!1,copyData:l({},this.formData),rules:{required:function(e){return!!e||"Required field"}}}},mounted:function(){},watch:{showDialog:function(e){this.dialog=e,console.log("dialog form",this.formData),this.copyData=l({},this.formData)},"copyData.product_id":function(e){var t=this;this.storeProducts.forEach((function(r){r.id===e&&(t.copyData.shipping_fee=parseFloat(r.shipping_fee).toFixed(2),t.copyData.name=r.name,t.copyData.id=r.id)}))},"copyData.quantity":function(e){var t;this.copyData.total=parseFloat((null===(t=this.copyData)||void 0===t?void 0:t.shipping_fee)*e).toFixed(2)}},computed:{storeProducts:function(){return Object(c.a)(this.$store.state.products.products)}},methods:{cancel:function(){console.log("this.action",this.action),"new"===this.action?(this.dialog=!1,this.copyData={},this.$refs.productItemForm.resetValidation()):(this.$emit("cancel-edit-product",!1),this.dialog=!1)},addItem:function(){if(console.log("addItem action",this.action),this.$refs.productItemForm.validate()){if(0==this.copyData.quantity)return this.$swal.fire({title:"Quantity cannot be 0",icon:"warning"});console.log("ADD PRODUCT ITEM",this.copyData),"new"===this.action?(this.$emit("save-product-item",this.copyData),this.dialog=!1,this.copyData={},this.$refs.productItemForm.resetValidation()):(this.$emit("update-product-item",this.copyData),this.$emit("cancel-edit-product",!1),this.dialog=!1)}}}},v=r(32),m=r(33),f=r.n(m),h=r(252),_=r(221),y=r(124),D=r(629),x=r(630),w=r(222),P=r(654),O=r(634),k=r(144),component=Object(v.a)(d,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-dialog",{attrs:{width:"500",persistent:""},scopedSlots:e._u([{key:"activator",fn:function(t){var c=t.on,o=t.attrs;return[r("v-btn",e._g(e._b({staticClass:"text-capitalize",attrs:{color:"primary",depressed:""}},"v-btn",o,!1),c),[r("v-icon",{attrs:{left:""}},[e._v("\n                mdi-plus\n            ")]),e._v("\n            Add Product\n        ")],1)]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[e._v(" "),r("v-card",[r("v-form",{ref:"productItemForm"},[r("v-card-title",[e._v("\n                Product\n            ")]),e._v(" "),r("v-card-text",[r("v-select",{attrs:{items:e.storeProducts,"item-value":"id","item-text":"name",label:"Select Product",outlined:"",dense:"",rules:[e.rules.required],readonly:"edit"===e.action},model:{value:e.copyData.product_id,callback:function(t){e.$set(e.copyData,"product_id",t)},expression:"copyData.product_id"}}),e._v(" "),r("v-text-field",{attrs:{label:"Quantity",outlined:"",dense:"",type:"number",rules:[e.rules.required]},model:{value:e.copyData.quantity,callback:function(t){e.$set(e.copyData,"quantity",t)},expression:"copyData.quantity"}}),e._v(" "),r("v-text-field",{attrs:{label:"Shipping Fee",outlined:"",dense:"",rules:[e.rules.required],readonly:"",type:"number"},model:{value:e.copyData.shipping_fee,callback:function(t){e.$set(e.copyData,"shipping_fee",t)},expression:"copyData.shipping_fee"}}),e._v(" "),r("v-text-field",{attrs:{label:"Total Amount",outlined:"",dense:"",rules:[e.rules.required],type:"number",readonly:""},model:{value:e.copyData.total,callback:function(t){e.$set(e.copyData,"total",t)},expression:"copyData.total"}})],1),e._v(" "),r("v-card-actions",[r("v-spacer"),e._v(" "),r("v-btn",{attrs:{color:"gray",text:""},on:{click:e.cancel}},[e._v("\n                    Cancel\n                ")]),e._v(" "),r("v-btn",{attrs:{color:"primary",depressed:""},on:{click:e.addItem}},[e._v("\n                    "+e._s("new"===e.action?"Add":"Save")+"\n                ")])],1)],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;f()(component,{VBtn:h.a,VCard:_.a,VCardActions:y.a,VCardText:y.c,VCardTitle:y.d,VDialog:D.a,VForm:x.a,VIcon:w.a,VSelect:P.a,VSpacer:O.a,VTextField:k.a})},646:function(e,t,r){"use strict";r.r(t);var c=r(14),o=(r(64),r(63),r(13),r(4),r(35),{name:"parcelProductsTable",props:{products:Array},data:function(){return{formData:{},selectedProducts:[],showDialog:!1,action:"new"}},watch:{selectedProducts:function(e){this.$emit("add-products",e)}},mounted:function(){console.log("products of parcel",this.products)},computed:{storeProducts:function(){return this.$store.state.products.products},headers:function(){return[{text:"Product",align:"start",sortable:!1,value:"name"},{text:"Quantity",value:"quantity"},{text:"Shipping Fee (₱)",value:"shipping_fee"},{text:"Amount (₱)",value:"total"},{text:"Actions",value:"actions"}]}},methods:{cancelEditProduct:function(){this.formData={},this.showDialog=!1,this.action="new"},updateItem:function(e){console.log("updatedItem",e),this.selectedProducts=this.selectedProducts.map((function(t){return t.product_id===e.id?e:t})),console.log("selectedProducts",this.selectedProducts),this.action="new",this.formData={}},saveItem:function(data){0===this.selectedProducts.filter((function(e){return+e.id==+data.id})).length?this.selectedProducts.push(data):this.$swal.fire({title:"".concat(data.name," added already."),icon:"warning"}),console.log("saveItem-selectedProducts",this.selectedProducts),this.formData={},this.action="new"},editItem:function(e){console.log("editItem",e),this.action="edit",this.showDialog=!0,this.formData=e},deleteItem:function(e){var t=this;return Object(c.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,t.$swal.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"});case 3:r.sent.isConfirmed&&(t.selectedProducts=t.selectedProducts.filter((function(t){return t.id!==e.id})),t.$swal.fire({position:"center",icon:"success",title:"Product Item has been deleted.",showConfirmButton:!1,timer:1500})),r.next=10;break;case 7:r.prev=7,r.t0=r.catch(0),console.error("error",r.t0);case 10:case"end":return r.stop()}}),r,null,[[0,7]])})))()}}}),n=r(32),l=r(33),d=r.n(l),v=r(691),m=r(222),component=Object(n.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("v-data-table",{attrs:{headers:e.headers,items:e.selectedProducts,"hide-default-footer":""},scopedSlots:e._u([{key:"top",fn:function(){return[r("div",{staticClass:"d-flex justify-space-between"},[r("span",[e._v("\n                    Product Information\n                ")]),e._v(" "),r("bt-m-dialog-product-item",{attrs:{showDialog:e.showDialog,action:e.action,formData:e.formData},on:{"save-product-item":e.saveItem,"cancel-edit-product":e.cancelEditProduct,"update-product-item":e.updateItem}})],1)]},proxy:!0},{key:"item.actions",fn:function(t){var c=t.item;return[r("v-icon",{staticClass:"mr-2",attrs:{small:"",color:"orange"},on:{click:function(t){return e.editItem(c)}}},[e._v("\n                mdi-pencil\n            ")]),e._v(" "),r("v-icon",{attrs:{color:"red",small:""},on:{click:function(t){return e.deleteItem(c)}}},[e._v("\n                mdi-delete\n            ")])]}}])})],1)}),[],!1,null,null,null);t.default=component.exports;d()(component,{BtMDialogProductItem:r(644).default}),d()(component,{VDataTable:v.a,VIcon:m.a})},657:function(e,t,r){"use strict";r.r(t);r(11),r(10),r(13),r(4),r(16),r(12),r(17);var c=r(3);function o(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function n(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(t){Object(c.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var l={name:"parcelForm",props:{formData:Object,action:String},data:function(){return{parcel:n({},this.formData),rules:{required:function(e){return!!e||"Required field"}}}},computed:{storeBranches:function(){return this.$store.state.branches.branches},formTitle:function(){return"create"===this.action?"New":"Edit"}},methods:{addProductsToParcel:function(e){this.parcel=n(n({},this.parcel),{},{products:e})},cancel:function(){this.$emit("cancel-parcel",!0)},save:function(){this.$refs.parcelForm.validate()&&(console.log("PARCEL TO BE SAVED",this.parcel),"create"===this.action?this.$emit("save-parcel",this.parcel):this.$emit("update-parcel",this.parcel))}}},d=r(32),v=r(33),m=r.n(v),f=r(252),h=r(221),_=r(124),y=r(628),D=r(616),x=r(630),w=r(222),P=r(631),O=r(654),k=r(144),component=Object(d.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("v-card",{staticClass:"pa-6",attrs:{rounded:"lg",flat:""}},[r("v-card-title",{staticClass:"d-flex justify-space-between"},[r("div",[e._v("\n                "+e._s("create"===e.action?"New":"Edit")+" Parcel\n            ")]),e._v(" "),"edit"===e.action?r("div",[r("div",[r("v-btn",{staticClass:"text-capitalize mx-2",attrs:{color:"primary",depressed:"",outlined:"",small:""}},[r("v-icon",{attrs:{left:""}},[e._v("\n                           mdi-file-document\n                        ")]),e._v("\n                        Print\n                    ")],1),e._v("\n                    Trucking ID # "+e._s(""+e.parcel.reference_number)+"\n                ")],1)]):e._e()]),e._v(" "),r("v-form",{ref:"parcelForm"},[r("v-card-text",[r("div",[e._v("Sender Information")]),e._v(" "),r("div",{staticClass:"my-6"},[r("v-row",[r("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[r("v-text-field",{attrs:{outlined:"",label:"Full Name",dense:"","hide-details":"auto",rules:[e.rules.required]},model:{value:e.parcel.sender_name,callback:function(t){e.$set(e.parcel,"sender_name",t)},expression:"parcel.sender_name"}})],1),e._v(" "),r("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[r("v-text-field",{attrs:{outlined:"",label:"Address",dense:"","hide-details":"auto",rules:[e.rules.required]},model:{value:e.parcel.sender_address,callback:function(t){e.$set(e.parcel,"sender_address",t)},expression:"parcel.sender_address"}})],1),e._v(" "),r("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[r("v-text-field",{attrs:{outlined:"",label:"Contact Number",dense:"",type:"number","hide-details":"auto",rules:[e.rules.required]},model:{value:e.parcel.sender_contact,callback:function(t){e.$set(e.parcel,"sender_contact",t)},expression:"parcel.sender_contact"}})],1)],1)],1),e._v(" "),r("div",[e._v("Recipient Information")]),e._v(" "),r("div",{staticClass:"my-6"},[r("v-row",[r("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[r("v-text-field",{attrs:{outlined:"",label:"Full Name",dense:"","hide-details":"auto",rules:[e.rules.required]},model:{value:e.parcel.receiver_name,callback:function(t){e.$set(e.parcel,"receiver_name",t)},expression:"parcel.receiver_name"}})],1),e._v(" "),r("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[r("v-text-field",{attrs:{outlined:"",label:"Address",dense:"","hide-details":"auto",rules:[e.rules.required]},model:{value:e.parcel.receiver_address,callback:function(t){e.$set(e.parcel,"receiver_address",t)},expression:"parcel.receiver_address"}})],1),e._v(" "),r("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[r("v-text-field",{attrs:{outlined:"",label:"Contact Number",dense:"","hide-details":"auto",type:"number",rules:[e.rules.required]},model:{value:e.parcel.receiver_contact,callback:function(t){e.$set(e.parcel,"receiver_contact",t)},expression:"parcel.receiver_contact"}})],1),e._v(" "),r("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[r("v-select",{attrs:{items:e.storeBranches,"item-text":"name","item-value":"id",outlined:"",label:"Branch Processed",dense:"","hide-details":"auto",rules:[e.rules.required]},model:{value:e.parcel.branch_processed,callback:function(t){e.$set(e.parcel,"branch_processed",t)},expression:"parcel.branch_processed"}})],1),e._v(" "),r("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[r("v-select",{attrs:{items:e.storeBranches,"item-text":"name","item-value":"id",outlined:"",label:"Pickup Branch",dense:"","hide-details":"auto",rules:[e.rules.required]},model:{value:e.parcel.branch_pickup,callback:function(t){e.$set(e.parcel,"branch_pickup",t)},expression:"parcel.branch_pickup"}})],1)],1)],1),e._v(" "),r("div",[e._v("Shipping Information")]),e._v(" "),r("div",{staticClass:"my-6"},[r("v-row",[r("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[r("v-text-field",{attrs:{outlined:"",label:"Date Shipped",dense:"","hide-details":"auto",type:"date",rules:[e.rules.required]},model:{value:e.parcel.date_shipped,callback:function(t){e.$set(e.parcel,"date_shipped",t)},expression:"parcel.date_shipped"}})],1),e._v(" "),r("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[r("v-text-field",{attrs:{outlined:"",label:"Date Received",dense:"","hide-details":"auto",type:"date"},model:{value:e.parcel.date_received,callback:function(t){e.$set(e.parcel,"date_received",t)},expression:"parcel.date_received"}})],1),e._v(" "),r("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[r("v-select",{attrs:{outlined:"",items:["Pick Up","Drop Off","Deliver"],label:"Type",dense:"","hide-details":"auto",type:"date"},model:{value:e.parcel.type,callback:function(t){e.$set(e.parcel,"type",t)},expression:"parcel.type"}})],1),e._v(" "),r("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[r("v-select",{attrs:{outlined:"",items:["Order Created","Shipped","Accepted","Pick Up","Delivered","Drop Off","Failed"],label:"Status",dense:"","hide-details":"auto",type:"date",rules:[e.rules.required]},model:{value:e.parcel.status,callback:function(t){e.$set(e.parcel,"status",t)},expression:"parcel.status"}})],1),e._v(" "),r("v-col",{attrs:{cols:"12"}},[r("v-divider")],1)],1)],1),e._v(" "),r("div",[r("v-row",[r("v-col",{attrs:{cols:"12"}},[r("bt-m-table-products",{attrs:{products:e.parcel.products},on:{"add-products":e.addProductsToParcel}})],1)],1)],1)]),e._v(" "),r("v-card-actions",{staticClass:"ma-2 d-flex justify-end"},[r("v-btn",{staticClass:"text-capitalize",attrs:{color:"gray",depressed:""},on:{click:e.cancel}},[e._v("\n                    Cancel\n                ")]),e._v(" "),r("v-btn",{staticClass:"text-capitalize",attrs:{color:"primary",depressed:""},on:{click:e.save}},[e._v("\n                    Save\n                ")])],1)],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;m()(component,{BtMTableProducts:r(646).default}),m()(component,{VBtn:f.a,VCard:h.a,VCardActions:_.a,VCardText:_.c,VCardTitle:_.d,VCol:y.a,VDivider:D.a,VForm:x.a,VIcon:w.a,VRow:P.a,VSelect:O.a,VTextField:k.a})}}]);