webpackJsonp([1],{"/Kt6":function(t,e){},"/UMn":function(t,e,s){"use strict";var a={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",[s("div",{staticClass:"hero is-normal is-success"},[s("div",{staticClass:"hero-body"},[s("div",{staticClass:"container"},[s("h1",{staticClass:"title"},[t._v("\n          Wie attraktiv ist Ihr Unternehmen?\n        ")]),t._v(" "),s("h2",{staticClass:"subtitle"},[t._v("\n          Nehmen Sie sich 8 Minuten Zeit,\n          und finden Sie es kostenlos heraus!\n        ")])]),t._v(" "),s("div",{staticClass:"columns is-centered"},[s("div",{staticClass:"column is-half "},[s("div",{staticClass:"card "},[s("div",{staticClass:"card-content"},[s("div",{staticClass:"content"},[s("div",{staticClass:"field"},[s("label",{staticClass:"label"},[t._v("Email")]),t._v(" "),s("div",{staticClass:"control"},[s("input",{staticClass:"input",attrs:{type:"email",placeholder:"e.g. alexsmith@gmail.com"}})])]),t._v(" "),s("div",{staticClass:"field"},[s("label",{staticClass:"label"},[t._v("Subject")]),t._v(" "),s("div",{staticClass:"control"},[s("div",{staticClass:"select"},[s("select",[s("option",[t._v("Select dropdown")]),t._v(" "),s("option",[t._v("With options")])])])])])])])])])]),t._v(" "),s("div")])])])}]};e.a=a},"B+PI":function(t,e){},HGJM:function(t,e){},QNYc:function(t,e){},e73Z:function(t,e){},eq7n:function(t,e,s){"use strict";var a=s("/Kt6"),i=s.n(a),n=s("/UMn");var l=function(t){s("e73Z")},r=s("VU/8")(i.a,n.a,!1,l,"data-v-005c007d",null);e.default=r.exports},htJq:function(t,e){},jzbo:function(t,e){},qWfJ:function(t,e,s){t.exports=s.p+"static/img/step1.b944952.png"},x35b:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("7+uW"),i=s("mtWM"),n=s.n(i),l=s("/ocq"),r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("section",[this._m(0),this._v(" "),e("HowTo")],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"hero is-large has-bg-img"},[e("div",{staticClass:"hero-body"},[e("div",{staticClass:"container"},[e("h1",{staticClass:"title"},[this._v("\n          Maexit\n        ")]),this._v(" "),e("h2",{staticClass:"subtitle"},[this._v("\n          Greate value | Greate deals\n        ")])])])])}]};var o=s("VU/8")(null,r,!1,function(t){s("HGJM")},"data-v-bd3b0f96",null).exports,c=s("eq7n"),d=a.a.extend({created:function(){},methods:{createUser:function(){var t=this;y.getHTTP("").post("user",{email:this.email,pwd:this.pwd,type:this.type}).then(function(e){t.$router.push("Main")})}},data:function(){return{email:null,pwd:"",type:1}}}),u={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"hero is-fullheight"},[s("div",{staticClass:"hero-body"},[s("div",{staticClass:"container has-text-centered"},[s("div",{staticClass:"column is-4 is-offset-4"},[s("h3",{staticClass:"title has-text-grey"},[t._v("Create new account")]),t._v(" "),s("p",{staticClass:"subtitle has-text-grey"},[t._v("Join Maexit right now")]),t._v(" "),s("div",{staticClass:"box"},[s("form",[s("div",{staticClass:"field"},[s("div",{staticClass:"control"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"input is-large",attrs:{type:"email",placeholder:"Your Email",autofocus:""},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})])]),t._v(" "),t._m(0),t._v(" "),s("div",{staticClass:"field"},[s("div",{staticClass:"control"},[s("div",{staticClass:"select is-large is-fullheight"},[s("select",{directives:[{name:"model",rawName:"v-model",value:t.type,expression:"type"}],on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.type=e.target.multiple?s:s[0]}}},[s("option",{attrs:{value:"1"}},[t._v("I am Business Owner")]),t._v(" "),s("option",{attrs:{value:"2"}},[t._v("I am Consultant")]),t._v(" "),s("option",{attrs:{value:"3"}},[t._v("I am Partner")])])])])]),t._v(" "),s("div",{staticClass:"field"},[s("p",[t._v("Already a member?\n                "),s("router-link",{attrs:{to:"login"}},[t._v("Login")])],1)]),t._v(" "),s("button",{staticClass:"button is-block is-info is-large is-fullwidth",on:{click:function(e){t.createUser()}}},[t._v("Create new account")])])])])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"field"},[e("div",{staticClass:"control"},[e("input",{staticClass:"input is-large",attrs:{type:"password",placeholder:"Your Password"}})])])}]},v=s("VU/8")(d,u,!1,null,null,null).exports,m=a.a.extend({created:function(){},methods:{login:function(){y.login(this.email,this.pwd)}},data:function(){return{email:"",pwd:""}}}),p={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"hero  is-fullheight"},[s("div",{staticClass:"hero-body"},[s("div",{staticClass:"container has-text-centered"},[s("div",{staticClass:"column is-4 is-offset-4"},[s("h3",{staticClass:"title has-text-grey"},[t._v("Login")]),t._v(" "),s("p",{staticClass:"subtitle has-text-grey"},[t._v("Please login to Maexit.")]),t._v(" "),s("div",{staticClass:"box"},[s("form",[s("div",{staticClass:"field"},[s("div",{staticClass:"control"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"input is-large",attrs:{type:"email",placeholder:"Your Email",autofocus:""},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})])]),t._v(" "),s("div",{staticClass:"field"},[s("div",{staticClass:"control"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.pwd,expression:"pwd"}],staticClass:"input is-large",attrs:{type:"password",placeholder:"Your Password"},domProps:{value:t.pwd},on:{input:function(e){e.target.composing||(t.pwd=e.target.value)}}})])]),t._v(" "),t._m(0),t._v(" "),s("button",{staticClass:"button is-block is-info is-large is-fullwidth",on:{click:function(e){t.login()}}},[t._v("Login")])])])])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"field "},[e("a",{attrs:{href:"#"}},[this._v("Forgot password?")])])}]},_=s("VU/8")(m,p,!1,null,null,null).exports,h=a.a.extend({created:function(){y.isLoggedIn()||this.$router.push("login")},methods:{changeView:function(t){this.isView=t}},data:function(){return{userEmail:localStorage.getItem(y.USER_EMAIL),isView:1}}}),f={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"hero"},[s("div",{staticClass:"hero-body"},[s("h1",{staticClass:"title"},[t._v("Welcome to Dashboard")]),t._v(" "),s("h2",{staticClass:"subtitle"},[t._v("Dear "+t._s(t.userEmail))]),t._v(" "),s("div",{staticClass:"columns"},[s("div",{staticClass:"column is-1"},[s("aside",{staticClass:"menu"},[s("ul",{staticClass:"menu-list"},[s("li",[s("a",{on:{click:function(e){t.changeView(1)}}},[t._v("Dashboard")])]),t._v(" "),s("li",[s("a",{on:{click:function(e){t.changeView(2)}}},[t._v("Profile")])])])])]),t._v(" "),s("div",{staticClass:"column"},[1==t.isView?s("KeyValueDriver"):t._e(),t._v(" "),2==t.isView?s("BusinessProfile"):t._e()],1)])])])},staticRenderFns:[]},g=s("VU/8")(h,f,!1,null,null,null).exports;a.a.use(l.a);var C=new l.a({routes:[{path:"/",name:"Main",component:o},{path:"/questionnaire",name:"Questionnaire",component:c.default},{path:"/registration",name:"Registration",component:v},{path:"/login",name:"Login",component:_},{path:"/businessowner",name:"BusinessOwner",component:g}]}),b=s("NYxO");a.a.use(b.a);var w,x=new b.a.Store({state:{items:[],loading:!0,isLoggedIn:!1},mutations:(w={},w.SET_ITEMS=function(t,e){t.items=e,t.loading=!1},w.DELETE_ITEM=function(t,e){t.items.splice(e,1)},w.EDIT_ITEM=function(t,e){a.a.set(t.items,e.index,e.item)},w)}),y=function(){function t(){}return t.getApiUrl=function(t){return"http://localhost:8090/api/"+t},t.getHTTP=function(e){return n.a.create({baseURL:t.getApiUrl(e)})},t.getHTTPlogin=function(t){return n.a.create({baseURL:"http://localhost:8090/login"})},t.isLoggedIn=function(){return!!localStorage.getItem(t.ID_TOKEN)},t.login=function(e,s){t.getHTTPlogin("").post("",{email:e,pwd:s}).then(function(e){200==e.status&&(localStorage.setItem(t.ID_TOKEN,e.data.token),x.state.isLoggedIn=!0,localStorage.setItem(t.USER_EMAIL,e.data.email),localStorage.setItem(t.USER_TYPE,e.data.type),t.routAfterLogin(e.data.type))})},t.routAfterLogin=function(e){"1"==localStorage.getItem(t.USER_TYPE)&&C.push("businessowner")},t.logout=function(){localStorage.removeItem(t.USER_EMAIL),localStorage.removeItem(t.USER_TYPE),localStorage.removeItem(t.ID_TOKEN),x.state.isLoggedIn=!1},t.routToProfile=function(){t.isLoggedIn()&&"1"==localStorage.getItem(t.USER_TYPE)&&C.push("businessowner")},t.ID_TOKEN="id_token",t.ACCESS_TOKEN="access_token",t.USER_TYPE="user_type",t.USER_EMAIL="user_email",t}(),E=a.a.extend({created:function(){y.isLoggedIn()&&(this.$store.state.isLoggedIn=!0,this.loggedIn=!0,this.userEmail=localStorage.getItem(y.USER_EMAIL))},methods:{logout:function(){y.logout(),this.$router.push("login")},routToProfile:function(){y.routToProfile()}},data:function(){return{userEmail:localStorage.getItem(y.USER_EMAIL),loggedIn:!1}}}),I={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("nav",{staticClass:"navbar is-fixed-top"},[s("div",{staticClass:"navbar-brand"},[s("router-link",{staticClass:"navbar-item",attrs:{to:"/"}},[s("img",{attrs:{src:"http://maexit.net/public/assets/logo.png",alt:"Maexit Greate value | Greate deals",width:"112",height:"28"}})]),t._v(" "),t._m(0)],1),t._v(" "),s("div",{staticClass:"navbar-menu",attrs:{id:"navbarExampleTransparentExample"}},[s("div",{staticClass:"navbar-start"}),t._v(" "),s("div",{staticClass:"navbar-end"},[s("a",{staticClass:"navbar-item",attrs:{href:"#"}},[t._v("About us")]),t._v(" "),s("a",{staticClass:"navbar-item",attrs:{href:"#"}},[t._v("Contacts")]),t._v(" "),t._m(1),t._v(" "),this.$store.state.isLoggedIn?s("div",{staticClass:"navbar-item"},[s("a",{staticClass:"navbar-item",on:{click:function(e){t.routToProfile()}}},[t._v(t._s(t.userEmail))]),t._v(" "),s("span",[t._v("|")]),t._v(" "),s("a",{staticClass:"navbar-item",on:{click:function(e){t.logout()}}},[t._v("Logout")])]):s("div",{staticClass:"navbar-item has-dropdown is-hoverable"},[t._m(2),t._v(" "),s("div",{staticClass:"navbar-dropdown is-boxed"},[s("LoginDropDown")],1)])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"navbar-burger burger",attrs:{"data-target":"navbarExampleTransparentExample"}},[e("span"),this._v(" "),e("span"),this._v(" "),e("span")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"navbar-item"},[e("div",{staticClass:"field"},[e("p",{staticClass:"control"},[e("a",{staticClass:"button is-danger",attrs:{href:"#"}},[e("span",[this._v("ZUM FRAGEBOGEN")])])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"navbar-link",attrs:{href:"#"}},[e("span",[this._v("Have an account? "),e("span",{staticClass:"has-text-weight-bold"},[this._v("Login")])])])}]};var S=s("VU/8")(E,I,!1,function(t){s("jzbo")},"data-v-f7576e3c",null).exports,P={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("footer",{staticClass:"footer"},[s("div",{staticClass:"container"},[s("div",{staticClass:"content has-text-centered"},[s("p",[s("strong",[t._v("Maexit")]),t._v(" by "),s("a",{attrs:{href:"#"}},[t._v("Christian Haack")]),t._v(". The source code is licensed\n        "),s("a",{attrs:{href:"http://opensource.org/licenses/mit-license.php"}},[t._v("MIT")]),t._v(". The website content\n        is licensed "),s("a",{attrs:{href:"http://creativecommons.org/licenses/by-nc-sa/4.0/"}},[t._v("CC BY NC SA 4.0")]),t._v(".\n      ")])])])])}]},N=s("VU/8")(null,P,!1,null,null,null).exports,A={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"hero"},[a("div",{staticClass:"hero-body"},[a("div",{staticClass:"container "},[a("h3",{staticClass:"level-item title"},[t._v("\n        Steigern Sie Ihren strategischen Unternehmenswert um bis zu 300%\n      ")])]),t._v(" "),a("div",{staticClass:"container "},[a("div",{staticClass:"columns"},[a("div",{staticClass:"column"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-header"},[a("div",{staticClass:"card-header-title is-centered"},[t._v("\n                Wie attraktiv ist Ihr Unternehmen?\n              ")])]),t._v(" "),a("br"),t._v(" "),a("div",{staticClass:"card-image is-flex is-horizontal-center"},[a("figure",{staticClass:"image is-128x128 "},[a("img",{attrs:{src:s("qWfJ")}})])]),t._v(" "),a("div",{staticClass:"card-content has-text-justified"},[a("div",{staticClass:"content"},[t._v("\n                Der strategische Wert für ein Unternehmen ist entscheidend, ob der Investor bereit ist, mehr für Ihr\n                Unternehmen zu bezahlen. Finden Sie heraus wie attraktiv Ihr Unternehmen ist und ob Sie mehr als den\n                durchschnittlichen Marktwert erzielen können.\n                "),a("a",{attrs:{href:"#"}},[t._v("Hier geht’s zum Fragebogen.")])])])])]),t._v(" "),a("div",{staticClass:"column"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-header"},[a("div",{staticClass:"card-header-title is-centered"},[t._v("\n                Warum bekommen Andere mehr?\n              ")])]),t._v(" "),a("br"),t._v(" "),a("div",{staticClass:"card-image is-flex is-horizontal-center"},[a("figure",{staticClass:"image is-128x128 "},[a("img",{attrs:{src:"http://maexit.net/public/assets/step2.png"}})])]),t._v(" "),a("div",{staticClass:"card-content has-text-justified"},[a("div",{staticClass:"content"},[t._v("\n                Wir haben durch intensive Recherchen und Interviews die besten M&A Deals analysiert und die\n                Erfolgsfaktoren aufgedeckt, warum mehr als der durchschnittliche Marktwert gezahlt wurde. Mit unserem\n                einzigartigen Exit Designer können Sie genau diese er-wiesenen Erfolgsfaktoren für Ihr Unter-nehmen\n                zusammenstellen und anhand Ihres eigenen Zeitplans und Budgets Ihren strategischen Unternehmenswert um\n                bis zu 300% steigern.\n              ")])])])]),t._v(" "),a("div",{staticClass:"column"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-header"},[a("div",{staticClass:"card-header-title is-centered"},[t._v("\n                Wie können Sie das erreichen?\n              ")])]),t._v(" "),a("br"),t._v(" "),a("div",{staticClass:"card-image is-flex is-horizontal-center"},[a("figure",{staticClass:"image is-128x128 "},[a("img",{attrs:{src:"http://maexit.net/public/assets/step3.png"}})])]),t._v(" "),a("div",{staticClass:"card-content has-text-justified"},[a("div",{staticClass:"content"},[t._v("\n                Das Maexit Konzept ist ein System, das Ihnen den Weg aufzeigt, was Sie tun müssen und was Sie im\n                Investorengespräch sagen müssen, um den Maximum Exit zu erzielen. Lernen Sie von den besten Experten\n                online, was und wie Sie zur Unternehmenswertsteigerung umsetzen können.\n              ")])])])])])])])])}]};var U=s("VU/8")(null,A,!1,function(t){s("QNYc")},"data-v-176e4e78",null).exports,L=a.a.extend({created:function(){},methods:{login:function(){y.login(this.email,this.pwd)}},data:function(){return{email:"",pwd:""}}}),T={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"column has-text-centered"},[s("div",{staticClass:"box"},[s("span",[t._v("Have an account?")]),t._v(" "),s("div",{staticClass:"field"},[s("div",{staticClass:"control"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"input",attrs:{type:"email",placeholder:"e.g. alexsmith@gmail.com"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})])]),t._v(" "),s("div",{staticClass:"field"},[s("div",{staticClass:"control"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.pwd,expression:"pwd"}],staticClass:"input",attrs:{type:"password",placeholder:"Password"},domProps:{value:t.pwd},on:{input:function(e){e.target.composing||(t.pwd=e.target.value)}}})])]),t._v(" "),t._m(0),t._v(" "),s("div",{staticClass:"field"},[s("div",{staticClass:"control"},[s("button",{staticClass:"button is-link is-fullwidth",on:{click:function(e){t.login()}}},[t._v("Login")])])]),t._v(" "),t._m(1),t._v(" "),s("div",{staticClass:"field "},[s("div",{staticClass:"control"},[s("router-link",{staticClass:"button is-link is-fullwidth",attrs:{to:"registration"}},[t._v("Create new account")])],1)])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"field"},[e("a",{attrs:{href:"#"}},[this._v("Forgot password?")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"field"},[e("span",[this._v("New to Maexit?")])])}]},M=s("VU/8")(L,T,!1,null,null,null).exports,k={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",[s("div",[s("div",{staticClass:"box"},[s("p",[s("strong",[t._v("MAEXIT GESAMTSCORE")])]),t._v(" "),s("p",[t._v("\n        IHRE SCORECARD BASIERT AUF 8 KEY-VALUE-DRIVER, DIE IM AKTUELLEN BUSINESS- UND LEADERSHIP-UMFELD BEWERTET SIND.")]),t._v(" "),s("br"),t._v(" "),s("progress",{staticClass:"progress is-warning",attrs:{value:"75",max:"100"}},[t._v("75%")])])]),t._v(" "),s("div",{staticClass:"content"},[s("br"),t._v(" "),s("h3",{staticClass:"subtitle has-text-grey"},[t._v("Key-Value-Driver Details")]),t._v(" "),s("div",{staticClass:"columns"},[s("div",{staticClass:"column"},[s("div",{staticClass:"box"},[s("progress",{staticClass:"progress is-primary",attrs:{value:"15",max:"100"}},[t._v("30%")]),t._v(" "),s("p",[s("strong",[t._v("Cashflow Efficiency")])]),t._v(" "),s("p",[t._v("\n            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At\n          ")])])]),t._v(" "),s("div",{staticClass:"column"},[s("div",{staticClass:"box"},[s("progress",{staticClass:"progress is-primary",attrs:{value:"15",max:"100"}},[t._v("30%")]),t._v(" "),s("p",[s("strong",[t._v("Cashflow Efficiency")])]),t._v(" "),s("p",[t._v("\n            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At\n          ")])])])]),t._v(" "),s("div",{staticClass:"columns"},[s("div",{staticClass:"column"},[s("div",{staticClass:"box"},[s("progress",{staticClass:"progress is-primary",attrs:{value:"15",max:"100"}},[t._v("30%")]),t._v(" "),s("p",[s("strong",[t._v("Cashflow Efficiency")])]),t._v(" "),s("p",[t._v("\n            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At\n          ")])])]),t._v(" "),s("div",{staticClass:"column"},[s("div",{staticClass:"box"},[s("progress",{staticClass:"progress is-primary",attrs:{value:"15",max:"100"}},[t._v("30%")]),t._v(" "),s("p",[s("strong",[t._v("Cashflow Efficiency")])]),t._v(" "),s("p",[t._v("\n            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At\n          ")])])])]),t._v(" "),s("div",{staticClass:"columns"},[s("div",{staticClass:"column"},[s("div",{staticClass:"box"},[s("progress",{staticClass:"progress is-primary",attrs:{value:"15",max:"100"}},[t._v("30%")]),t._v(" "),s("p",[s("strong",[t._v("Cashflow Efficiency")])]),t._v(" "),s("p",[t._v("\n            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At\n          ")])])]),t._v(" "),s("div",{staticClass:"column"},[s("div",{staticClass:"box"},[s("progress",{staticClass:"progress is-primary",attrs:{value:"15",max:"100"}},[t._v("30%")]),t._v(" "),s("p",[s("strong",[t._v("Cashflow Efficiency")])]),t._v(" "),s("p",[t._v("\n            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At\n          ")])])])]),t._v(" "),s("div",{staticClass:"columns"},[s("div",{staticClass:"column"},[s("div",{staticClass:"box"},[s("progress",{staticClass:"progress is-primary",attrs:{value:"15",max:"100"}},[t._v("30%")]),t._v(" "),s("p",[s("strong",[t._v("Cashflow Efficiency")])]),t._v(" "),s("p",[t._v("\n            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At\n          ")])])]),t._v(" "),s("div",{staticClass:"column"},[s("div",{staticClass:"box"},[s("progress",{staticClass:"progress is-primary",attrs:{value:"15",max:"100"}},[t._v("30%")]),t._v(" "),s("p",[s("strong",[t._v("Cashflow Efficiency")])]),t._v(" "),s("p",[t._v("\n            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At\n          ")])])])])])])}]},R=s("VU/8")(null,k,!1,null,null,null).exports,D=a.a.extend({created:function(){y.isLoggedIn()||this.$router.push("login")},methods:{closeMessage:function(){this.isMessageActive=!1}},data:function(){return{isMessageActive:!1,isMessageType:"is-primary"}}}),$={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",[s("div",{staticClass:"modal",class:{"is-active":t.isMessageActive}},[s("div",{staticClass:"notification is-primary"},[s("button",{staticClass:"delete",on:{click:function(e){t.closeMessage()}}}),t._v("\n      Primar lorem ipsum dolor sit amet, consectetur\n      adipiscing elit lorem ipsum dolor. "),s("strong",[t._v("Pellentesque risus mi")]),t._v(", tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum "),s("a",[t._v("felis venenatis")]),t._v(" efficitur. Sit amet,\n      consectetur adipiscing elit\n    ")])]),t._v(" "),s("div",{staticClass:"box"},[s("h1",{staticClass:"title"},[t._v("Business Owner profile")]),t._v(" "),s("div",{staticClass:"box"},[s("div",{staticClass:"columns"},[s("div",{staticClass:"column"},[s("div",{staticClass:"field"},[s("div",{staticClass:"control"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.fullName,expression:"fullName"}],staticClass:"input ",attrs:{type:"text",placeholder:"Full Name",autofocus:""},domProps:{value:t.fullName},on:{input:function(e){e.target.composing||(t.fullName=e.target.value)}}})])]),t._v(" "),s("div",{staticClass:"field"},[s("div",{staticClass:"control"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.pwd,expression:"pwd"}],staticClass:"input ",attrs:{type:"password",placeholder:"Old Password"},domProps:{value:t.pwd},on:{input:function(e){e.target.composing||(t.pwd=e.target.value)}}})])])]),t._v(" "),s("div",{staticClass:"column"},[s("div",{staticClass:"field"},[s("div",{staticClass:"control"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"input ",attrs:{type:"email",disabled:"",placeholder:"Email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})])]),t._v(" "),s("div",{staticClass:"field"},[s("div",{staticClass:"control"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.newPwd,expression:"newPwd"}],staticClass:"input ",attrs:{type:"password",placeholder:"New Password"},domProps:{value:t.newPwd},on:{input:function(e){e.target.composing||(t.newPwd=e.target.value)}}})])])])]),t._v(" "),s("div",{staticClass:"columns"},[s("div",{staticClass:"column"}),t._v(" "),s("div",{staticClass:"column"}),t._v(" "),s("div",{staticClass:"column"}),t._v(" "),s("div",{staticClass:"column"},[s("button",{staticClass:"button is-block is-info  is-fullwidth",on:{click:function(e){t.updateProfile()}}},[t._v("Update Profile")])])])]),t._v(" "),s("div",{staticClass:"box"},[s("h1",{staticClass:"title"},[t._v("Company Info ")]),t._v(" "),s("div",{staticClass:"columns"},[s("div",{staticClass:"column"},[s("div",{staticClass:"field"},[s("div",{staticClass:"control"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.companyName,expression:"companyName"}],staticClass:"input ",attrs:{type:"text",placeholder:"Company Name"},domProps:{value:t.companyName},on:{input:function(e){e.target.composing||(t.companyName=e.target.value)}}})])])]),t._v(" "),s("div",{staticClass:"column"},[s("div",{staticClass:"field"},[s("div",{staticClass:"control"},[s("label",{staticClass:"is-vcentered"},[t._v("Indastry: ")]),t._v(" "),s("div",{staticClass:"select"},[s("select",{directives:[{name:"model",rawName:"v-model",value:t.indastry,expression:"indastry"}],on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.indastry=e.target.multiple?s:s[0]}}},[s("option",{attrs:{disabled:"",selected:""}},[t._v("Indastry")]),t._v(" "),s("option",{attrs:{value:"1"}},[t._v("I am Business Owner")]),t._v(" "),s("option",{attrs:{value:"2"}},[t._v("I am Consultant")]),t._v(" "),s("option",{attrs:{value:"3"}},[t._v("I am Partner")])])])])])])]),t._v(" "),s("span",{staticClass:"subtitle"},[t._v(" Address:")]),t._v(" "),s("div",{staticClass:"columns"},[s("div",{staticClass:"column"},[s("div",{staticClass:"field"},[s("div",{staticClass:"control"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.street,expression:"street"}],staticClass:"input ",attrs:{type:"text",placeholder:"Street"},domProps:{value:t.street},on:{input:function(e){e.target.composing||(t.street=e.target.value)}}})])])]),t._v(" "),s("div",{staticClass:"column"},[s("div",{staticClass:"field"},[s("div",{staticClass:"control"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.houseNumber,expression:"houseNumber"}],staticClass:"input ",attrs:{type:"number",min:"0",placeholder:"House number"},domProps:{value:t.houseNumber},on:{input:function(e){e.target.composing||(t.houseNumber=e.target.value)}}})])])])]),t._v(" "),s("div",{staticClass:"field"},[s("div",{staticClass:"control"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.additionalAddress,expression:"additionalAddress"}],staticClass:"input ",attrs:{type:"number",min:"0",placeholder:"Additional Address"},domProps:{value:t.additionalAddress},on:{input:function(e){e.target.composing||(t.additionalAddress=e.target.value)}}})])]),t._v(" "),s("div",{staticClass:"columns"},[s("div",{staticClass:"column"},[s("div",{staticClass:"field"},[s("div",{staticClass:"control"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.postcode,expression:"postcode"}],staticClass:"input ",attrs:{type:"number",min:"0",placeholder:"Postcode"},domProps:{value:t.postcode},on:{input:function(e){e.target.composing||(t.postcode=e.target.value)}}})])]),t._v(" "),s("div",{staticClass:"field"},[s("div",{staticClass:"control"},[s("label",{staticClass:"is-vcentered"},[t._v("Country: ")]),t._v(" "),s("div",{staticClass:"select"},[s("select",{directives:[{name:"model",rawName:"v-model",value:t.country,expression:"country"}],on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.country=e.target.multiple?s:s[0]}}},[s("option",{attrs:{value:"de"}},[t._v("Deutschland")]),t._v(" "),s("option",{attrs:{value:"at"}},[t._v("Österreich")]),t._v(" "),s("option",{attrs:{value:"ch"}},[t._v("Schweiz")])])])])])]),t._v(" "),s("div",{staticClass:"column"},[s("div",{staticClass:"field"},[s("div",{staticClass:"control"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.place,expression:"place"}],staticClass:"input ",attrs:{type:"number",min:"0",placeholder:"Place"},domProps:{value:t.place},on:{input:function(e){e.target.composing||(t.place=e.target.value)}}})])]),t._v(" "),s("div",{staticClass:"field"},[s("div",{staticClass:"control"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.site,expression:"site"}],staticClass:"input ",attrs:{type:"number",min:"0",placeholder:"Web Site"},domProps:{value:t.site},on:{input:function(e){e.target.composing||(t.site=e.target.value)}}})])])])]),t._v(" "),s("span",[t._v("Company description:")]),t._v(" "),t._m(0),t._v(" "),s("div",{staticClass:"columns"},[s("div",{staticClass:"column"}),t._v(" "),s("div",{staticClass:"column"}),t._v(" "),s("div",{staticClass:"column"}),t._v(" "),s("div",{staticClass:"column"},[s("button",{staticClass:"button is-block is-info  is-fullwidth",on:{click:function(e){t.updateCompany()}}},[t._v("Update Company Profile")])])])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"field"},[e("div",{staticClass:"control"},[e("textarea",{staticClass:"textarea",attrs:{placeholder:"Some words about company",rows:"10"}})])])}]},V=s("VU/8")(D,$,!1,null,null,null).exports,F=a.a.extend({name:"App",components:{Header:S,Footer:N,HowTo:U,LoginDropDown:M,KeyValueDriver:R,BusinessProfile:V}}),z={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("Header"),this._v(" "),e("div",{staticClass:"view"},[e("router-view")],1),this._v(" "),e("Footer")],1)},staticRenderFns:[]};var q=s("VU/8")(F,z,!1,function(t){s("htJq")},"data-v-0204794c",null).exports;s("B+PI");a.a.component("HowTo",U),a.a.component("LoginDropDown",M),a.a.component("KeyValueDriver",R),a.a.component("BusinessProfile",V),a.a.config.productionTip=!1,new a.a({el:"#app",store:x,router:C,components:{App:q},template:"<App/>"})}},["x35b"]);
//# sourceMappingURL=app.22c531d060e2268ee6df.js.map