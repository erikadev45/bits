(window.webpackJsonp=window.webpackJsonp||[]).push([[12,9],{655:function(e,t,r){"use strict";r.r(t);var n={name:"aboutUs",props:{color:{default:"",type:String}},data:function(){return{text:'\n                The Bantayan Island Trucking Services System is a simple PHP/MySQLi project that helps a courier company or businesses manage\n                their customers parcel details. The system stores all the branches or the company that can be also use when setting a destination\n                where the recipient pickup their packages or parcels. The system has tracking feature where can help to monitor the movement of the customer\'s parcel.\n                The system has 2 types of user which is the Admin user and the Customer user.\n                The Admin user can manage all the data in the system including managing the branches and branches staff user.\n                The Customer user can only track a parcel and manage the list of parcels where the origin or the destination of a parcel under the logged in staff\n                branch. The courier of the items has multiple status which are the "Item Accepted by Courier", "Shipped", "Out for Delivery",Arrived at Destination\n                "Ready to Pickup", "Delivered", "Picked-up", and "Unsuccessfull Delivery Attempt". This status will help to determine the parcels movement.\n                The system also generates a report between two dates and selected status. The couriered items of the clients can be set into "Deliver" and "Pickup".\n                The parcels that marked as deliver are the items to be deliver directly to the recipient while the pickup will be delivered to the branch of the company\n                near to the recipient address. The system admin or staff user can store or adds a multiple items at the same time but these items will be stored in\n                the database seperately because each package has a different reference number or different tracking number. For example, Client 1 has 3 boxes of package\n                to be couriered in a same recipient, the system user can submit the parcel registration to the system at once but will be stored\n                seperately so that the system will generate a different unique reference number in each item so that they can track easily each items.\n            '}}},c=r(32),l=r(33),o=r.n(l),h=r(221),d=r(124),component=Object(c.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("v-card",{staticClass:"pa-4",attrs:{color:e.color,flat:"",rounded:"lg"}},[r("v-card-title",[e._v("\n            About us\n        ")]),e._v(" "),r("v-card-text",{staticClass:"subtitle-1"},[e._v("\n            "+e._s(e.text)+"\n        ")])],1)],1)}),[],!1,null,null,null);t.default=component.exports;o()(component,{VCard:h.a,VCardText:d.c,VCardTitle:d.d})},693:function(e,t,r){"use strict";r.r(t);var n={name:"aboutUs",layout:"loggedin"},c=r(32),component=Object(c.a)(n,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("bt-m-paragraphs-about")],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{BtMParagraphsAbout:r(655).default})}}]);