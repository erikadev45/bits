(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{737:function(e,t,n){"use strict";n.r(t);n(193);var l={layout:"loggedin",middleware:"secure",data:function(){return{search:"",dialog:!1,dialogDelete:!1,headers:[{text:"Item",value:"name"},{text:"Size",value:"carbs"},{text:"Color",value:"carbs"},{text:"Type",value:"protein"},{text:"Actions",value:"actions",sortable:!1}],parcels:[],editedIndex:-1,editedItem:{name:"",calories:0,fat:0,carbs:0,protein:0},defaultItem:{name:"",calories:0,fat:0,carbs:0,protein:0}}},computed:{formTitle:function(){return-1===this.editedIndex?"New Item":"Edit Item"}},watch:{dialog:function(e){e||this.close()},dialogDelete:function(e){e||this.closeDelete()}},created:function(){this.initialize()},methods:{initialize:function(){this.parcels=[{name:"Frozen Yogurt",calories:159,fat:6,carbs:24,protein:4},{name:"Ice cream sandwich",calories:237,fat:9,carbs:37,protein:4.3}]},editItem:function(e){this.editedIndex=this.parcels.indexOf(e),this.editedItem=Object.assign({},e),this.dialog=!0},deleteItem:function(e){this.editedIndex=this.parcels.indexOf(e),this.editedItem=Object.assign({},e),this.dialogDelete=!0},deleteItemConfirm:function(){this.parcels.splice(this.editedIndex,1),this.closeDelete()},close:function(){var e=this;this.dialog=!1,this.$nextTick((function(){e.editedItem=Object.assign({},e.defaultItem),e.editedIndex=-1}))},closeDelete:function(){var e=this;this.dialogDelete=!1,this.$nextTick((function(){e.editedItem=Object.assign({},e.defaultItem),e.editedIndex=-1}))},save:function(){this.editedIndex>-1?Object.assign(this.parcels[this.editedIndex],this.editedItem):this.parcels.push(this.editedItem),this.close()}}},o=n(32),c=n(33),r=n.n(c),d=n(257),v=n(225),m=n(125),f=n(642),h=n(651),x=n(728),I=n(643),_=n(226),k=n(645),C=n(648),w=n(145),y=n(62),V=n(192),component=Object(o.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"parcel-container"},[n("v-row",[n("v-col",{attrs:{cols:"12"}},[n("v-card",{staticClass:"pa-6",attrs:{rounded:"lg",flat:""}},[n("v-data-table",{staticClass:"transparent rounded-lg",attrs:{headers:e.headers,items:e.parcels,"sort-by":"calories"},scopedSlots:e._u([{key:"top",fn:function(){return[n("v-toolbar",{attrs:{flat:"",rounded:"lg"}},[n("v-toolbar-title",[e._v("Trucking Information")]),e._v(" "),n("v-dialog",{attrs:{"max-width":"500px"},scopedSlots:e._u([{key:"activator",fn:function(t){var l=t.on,o=t.attrs;return[n("v-btn",e._g(e._b({staticClass:"ml-2",attrs:{"x-small":"",depressed:"",fab:"",color:"primary"}},"v-btn",o,!1),l),[n("v-icon",[e._v(" mdi-plus ")])],1)]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[e._v(" "),n("v-card",[n("v-card-title",[n("span",{staticClass:"text-h5"},[e._v(e._s(e.formTitle))])]),e._v(" "),n("v-card-text",[n("v-container",[n("v-row",[n("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[n("v-text-field",{attrs:{label:"Dessert name"},model:{value:e.editedItem.name,callback:function(t){e.$set(e.editedItem,"name",t)},expression:"\n                                                                editedItem.name\n                                                            "}})],1),e._v(" "),n("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[n("v-text-field",{attrs:{label:"Calories"},model:{value:e.editedItem.calories,callback:function(t){e.$set(e.editedItem,"calories",t)},expression:"\n                                                                editedItem.calories\n                                                            "}})],1),e._v(" "),n("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[n("v-text-field",{attrs:{label:"Fat (g)"},model:{value:e.editedItem.fat,callback:function(t){e.$set(e.editedItem,"fat",t)},expression:"\n                                                                editedItem.fat\n                                                            "}})],1),e._v(" "),n("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[n("v-text-field",{attrs:{label:"Carbs (g)"},model:{value:e.editedItem.carbs,callback:function(t){e.$set(e.editedItem,"carbs",t)},expression:"\n                                                                editedItem.carbs\n                                                            "}})],1),e._v(" "),n("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[n("v-text-field",{attrs:{label:"Protein (g)"},model:{value:e.editedItem.protein,callback:function(t){e.$set(e.editedItem,"protein",t)},expression:"\n                                                                editedItem.protein\n                                                            "}})],1)],1)],1)],1),e._v(" "),n("v-card-actions",[n("v-spacer"),e._v(" "),n("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.close}},[e._v("\n                                                Cancel\n                                            ")]),e._v(" "),n("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.save}},[e._v("\n                                                Save\n                                            ")])],1)],1)],1),e._v(" "),e._l(6,(function(i){return n("v-spacer",{key:i})})),e._v(" "),n("v-text-field",{staticClass:"mr-n4",attrs:{"append-icon":"mdi-magnify",label:"Search Parcel",outlined:"",dense:"","single-line":"","hide-details":""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}}),e._v(" "),n("v-dialog",{attrs:{"max-width":"500px"},model:{value:e.dialogDelete,callback:function(t){e.dialogDelete=t},expression:"dialogDelete"}},[n("v-card",[n("v-card-title",{staticClass:"text-h5"},[e._v("Are you sure you want to delete\n                                            this item?")]),e._v(" "),n("v-card-actions",[n("v-spacer"),e._v(" "),n("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.closeDelete}},[e._v("Cancel")]),e._v(" "),n("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.deleteItemConfirm}},[e._v("OK")]),e._v(" "),n("v-spacer")],1)],1)],1)],2)]},proxy:!0},{key:"item.actions",fn:function(t){var l=t.item;return[n("v-icon",{staticClass:"mr-2",attrs:{small:"",color:"orange"},on:{click:function(t){return e.editItem(l)}}},[e._v("\n                                mdi-pencil\n                            ")]),e._v(" "),n("v-icon",{attrs:{color:"red",small:""},on:{click:function(t){return e.deleteItem(l)}}},[e._v("\n                                mdi-delete\n                            ")])]}},{key:"no-data",fn:function(){return[n("v-btn",{attrs:{color:"primary"},on:{click:e.initialize}},[e._v("\n                                Reset\n                            ")])]},proxy:!0}])})],1)],1)],1)],1)])}),[],!1,null,null,null);t.default=component.exports;r()(component,{VBtn:d.a,VCard:v.a,VCardActions:m.a,VCardText:m.c,VCardTitle:m.d,VCol:f.a,VContainer:h.a,VDataTable:x.a,VDialog:I.a,VIcon:_.a,VRow:k.a,VSpacer:C.a,VTextField:w.a,VToolbar:y.a,VToolbarTitle:V.a})}}]);