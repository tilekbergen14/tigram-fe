(this.webpackJsonptigram=this.webpackJsonptigram||[]).push([[0],{139:function(e,t,a){},140:function(e,t,a){},168:function(e,t,a){},169:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),s=a(12),r=a.n(s),i=(a(139),a(140),a(19)),o=a(26),l=a(109),j=a.n(l),u=a(110),d=a.n(u),b=a(111),p=a.n(b),O=a(15),h=a(9),m=a.n(h),x=a(16),f=a(7),v=a(4),g=a(209),N=a(225),y=a(106),w=a.n(y),S=a(210),k=a(213),_=a(205),U=a(211),I=a(212),C=a(224),T=a(13),E=a(1);function z(e){var t=e.text;return Object(E.jsx)(_.a,{children:Object(E.jsx)("p",{className:"cursorp text500",children:t})})}var A=a(35),R=a.n(A),P=Object(g.a)({list:{width:250},fullList:{width:"auto"}});function D(e){var t=e.menu,a=Object(c.useState)([]),s=Object(f.a)(a,2),r=s[0],i=s[1];Object(c.useEffect)((function(){(function(){var e=Object(x.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,R.a.get("".concat("https://tigram-project.herokuapp.com","/user/getusers/"));case 3:t=e.sent,i(t.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}})()()}),[i]);var l=P(),j=n.a.useState({left:!1}),u=Object(f.a)(j,2),d=u[0],b=u[1],p=function(e,t){return function(a){("keydown"!==a.type||"Tab"!==a.key&&"Shift"!==a.key)&&b(Object(O.a)(Object(O.a)({},d),{},Object(o.a)({},e,t)))}},h="left";return p(h,!0),Object(E.jsxs)("div",{children:[Object(E.jsx)(w.a,{onClick:p(h,!0),className:"cursorp"}),Object(E.jsx)(N.a,{anchor:h,open:d.left,onClose:p(h,!1),children:function(e){return t?Object(E.jsx)("div",{className:Object(v.a)(l.list,Object(o.a)({},l.fullList,"top"===e||"bottom"===e)),children:Object(E.jsxs)(S.a,{children:[Object(E.jsxs)(_.a,{children:[Object(E.jsx)(U.a,{children:Object(E.jsx)(C.a,{alt:"profile",className:"cursorp"})}),Object(E.jsx)(I.a,{children:Object(E.jsx)("p",{className:"cursorp text",children:"Tilekbergen"})})]}),Object(E.jsx)(k.a,{}),Object(E.jsx)(z,{text:"Profile"}),Object(E.jsx)(z,{text:"Friends"}),Object(E.jsx)(z,{text:"Settings"})]})}):Object(E.jsxs)("div",{className:Object(v.a)(l.list,Object(o.a)({},l.fullList,"top"===e||"bottom"===e)),children:[Object(E.jsx)(S.a,{children:Object(E.jsx)(_.a,{children:Object(E.jsx)(T.b,{to:"/home/",className:"black",children:Object(E.jsx)("p",{className:"cursorp text500",children:"Explore others posts"})})})}),Object(E.jsx)(k.a,{}),Object(E.jsxs)(S.a,{children:[Object(E.jsx)(_.a,{children:Object(E.jsx)("p",{className:"cursorp text500",children:"Find new friends"})}),r.map((function(e){return Object(E.jsxs)(_.a,{children:[Object(E.jsx)(U.a,{children:Object(E.jsx)(C.a,{alt:"profile",className:"cursorp",src:e&&e.imageUrl})}),Object(E.jsx)(I.a,{children:Object(E.jsx)("p",{className:"cursorp text",children:e.username})})]},e._id)}))]})]})}(h)})]})}var J=a(107),G=a.n(J);function L(){var e=Object(c.useState)(!1),t=Object(f.a)(e,2),a=t[0],n=t[1];return Object(E.jsxs)("div",{className:"help",children:[Object(E.jsx)(G.a,{className:"icon",onClick:function(){return n((function(e){return!e}))}}),a&&Object(E.jsx)("div",{className:"help-box",children:Object(E.jsx)("p",{children:"This website made by Mukhamet Tilekbergen for testing purposes. If you have any question about site or author please feel free to contact!"})})]})}var B=a(20);function H(){var e=Object(i.f)(),t=Object(B.b)();return Object(c.useEffect)((function(){var a=JSON.parse(localStorage.getItem("profile"));t({type:"GET_AUTH"}),a&&e.push("/home/")}),[t,e]),Object(E.jsxs)("div",{className:"landing",children:[Object(E.jsxs)("header",{children:[Object(E.jsx)(D,{}),Object(E.jsx)(L,{})]}),Object(E.jsx)("div",{className:"section",children:Object(E.jsxs)("div",{className:"logo-section",children:[Object(E.jsx)("h1",{className:"logo",children:"Tigram"}),Object(E.jsxs)("div",{className:"button-container",children:[Object(E.jsx)(T.b,{to:"/home/",className:"w-100",children:Object(E.jsx)("button",{className:"button blue",children:"Testing without sign up"})}),Object(E.jsx)(T.b,{to:"/auth",className:"w-100",children:Object(E.jsx)("button",{className:"button green",children:"Sign up"})})]})]})}),Object(E.jsxs)("footer",{children:[Object(E.jsx)("p",{className:"text500",children:"Contact us"}),Object(E.jsxs)("div",{className:"icons-box",children:[Object(E.jsx)(T.b,{to:"https://www.facebook.com/tilekbergen.muhamet/",children:Object(E.jsx)(j.a,Object(o.a)({className:"icon"},"className","three-icon"))}),Object(E.jsx)(T.b,{to:"https://www.instagram.com/ti_qu11/",children:Object(E.jsx)(d.a,Object(o.a)({className:"icon"},"className","three-icon"))}),Object(E.jsx)(T.b,{to:"https://wa.me/+77776842179",children:Object(E.jsx)(p.a,Object(o.a)({className:"icon"},"className","three-icon"))})]})]})]})}var F=a(219),q=a(72),W=a(113),Y=a.n(W),X=a(112),V=a.n(X),K=a(114),M=a.n(K),Q=R.a.create({baseURL:"https://tigram-project.herokuapp.com"});Q.interceptors.request.use((function(e){return localStorage.getItem("profile")&&(e.headers.Authorization="Bearer ".concat(JSON.parse(localStorage.getItem("profile")).token)),e}));var Z=function(e){return Q.post("/post/like/",{postId:e})},$=function(e){return Q.post("/post/",e)},ee=function(e){return Q.post("/auth/signin/",e)},te=function(e){return Q.post("/auth/signup/",e)},ae=function(e){return Q.post("/user/update/",e)},ce=function(e){return Q.get("/user/friend/".concat(e))},ne="CREATE_POST",se="GET_POSTS",re=function(e){return function(){var t=Object(x.a)(m.a.mark((function t(a){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Z(e);case 3:t.next=8;break;case 5:t.prev=5,t.t0=t.catch(0),console.log(t.t0.message);case 8:case"end":return t.stop()}}),t,null,[[0,5]])})));return function(e){return t.apply(this,arguments)}}()},ie=a(223),oe=a(222);function le(e){return Object(E.jsx)(oe.a,Object(O.a)({elevation:6,variant:"filled"},e))}var je=Object(g.a)((function(e){return{root:{width:"100%","& > * + *":{marginTop:e.spacing(2)}}}}));function ue(e){var t=e.setOpenToast,a=e.message,c=e.severity,s=je(),r=n.a.useState(!0),i=Object(f.a)(r,2),o=i[0],l=i[1],j=function(e,a){"clickaway"!==a&&(l(!1),t&&t(!1))};return Object(E.jsx)("div",{className:s.root,children:Object(E.jsx)(ie.a,{open:o,autoHideDuration:3e3,onClose:j,children:Object(E.jsx)(le,{onClose:j,severity:c,children:a})})})}function de(e){var t,a=e.post,n=null===(t=JSON.parse(localStorage.getItem("profile")))||void 0===t?void 0:t.result._id,s=a.imageUrl,r=a.title,i=a.createdAt,o=a.creatorId,l=a._id,j=Object(c.useState)(a.likes),u=Object(f.a)(j,2),d=u[0],b=u[1],p=Object(c.useState)(null===d||void 0===d?void 0:d.includes(n)),O=Object(f.a)(p,2),h=O[0],v=O[1],g=Object(c.useState)("|"),N=Object(f.a)(g,2),y=N[0],w=N[1],S=Object(c.useState)(null),k=Object(f.a)(S,2),_=k[0],U=k[1],I=Object(B.b)(),z=Object(c.useState)(!1),A=Object(f.a)(z,2),P=A[0],D=A[1];Object(c.useEffect)((function(){function e(){return(e=Object(x.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,R.a.post("".concat("https://tigram-project.herokuapp.com","/user/find/"),{id:o});case 3:t=e.sent,w(t.data.username),U(t.data.imageUrl),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[o]);var J=function(){h?(b((function(e){return e.filter((function(e){return e!==n}))})),n?I(re(l)):D(!0)):(b([].concat(Object(q.a)(d),[n])),n?I(re(l)):D(!0)),v((function(e){return!e}))};return Object(E.jsxs)("div",{className:"post",children:[P&&Object(E.jsx)(ue,{message:"Changes won't be saved! Sign up!",severity:"warning",setOpenToast:D}),s&&Object(E.jsx)("img",{src:s,alt:"post_image",className:"image"}),Object(E.jsxs)("div",{className:"post-info",children:[Object(E.jsx)(T.b,{to:"/profile/".concat(o&&o),children:Object(E.jsx)(C.a,{alt:"profile",src:_&&_})}),Object(E.jsxs)("div",{className:"inline-info",children:[Object(E.jsx)(T.b,{to:"/profile/".concat(o&&o),children:Object(E.jsx)("p",{className:"post-publisher cursorp",children:y})}),Object(E.jsx)("p",{className:"date",children:V()(i).fromNow()}),Object(E.jsx)("h3",{className:"post-title",children:r}),Object(E.jsxs)("div",{className:"likes",children:[h?Object(E.jsx)(Y.a,{onClick:J,className:"cursorp",style:{color:"red"},fontSize:"small"}):Object(E.jsx)(M.a,{onClick:J,className:"cursorp",style:{color:"red"},fontSize:"small"}),d&&Object(E.jsx)("p",{className:"like-text",children:0===d.length||1===d.length?d.length+" like":d.length+" likes"})]})]})]})]})}var be=a(116),pe=a.n(be),Oe=a(218),he=a(217),me=a(216),xe=a(221),fe=a(73);a(170);0===fe.a.apps.length&&fe.a.initializeApp({apiKey:"AIzaSyBb2Lu7Grzaz2JEj5UkjjhxDx5CSU3AYOg",authDomain:"tigram-ad547.firebaseapp.com",projectId:"tigram-ad547",storageBucket:"tigram-ad547.appspot.com",messagingSenderId:"392708516550",appId:"1:392708516550:web:02b8b7d691403a913dc5c7"});var ve=fe.a.storage(),ge=function(e){var t=Object(c.useState)(null),a=Object(f.a)(t,2),n=a[0],s=a[1],r=Object(c.useState)(null),i=Object(f.a)(r,2),o=i[0],l=i[1],j=Object(c.useState)(0),u=Object(f.a)(j,2),d=u[0],b=u[1];return Object(c.useEffect)((function(){if(e){var t=ve.ref((new Date).getTime()+e.name);t.put(e).on("state_changed",(function(e){b(e.bytesTransferred/e.totalBytes*100)}),(function(e){s(e)}),Object(x.a)(m.a.mark((function e(){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getDownloadURL();case 2:a=e.sent,l(a);case 4:case"end":return e.stop()}}),e)}))))}}),[e]),{error:n,url:o,progress:d}},Ne=a(215);function ye(e){var t=e.file,a=e.size,n=e.setData,s=e.data,r=e.setFile,i=e.setUpdate,o=e.setBannerImg,l=ge(t).url;return Object(c.useEffect)((function(){o&&l&&(n(Object(O.a)(Object(O.a)({},s),{},{bannerImgUrl:l})),i(!0),o(null)),l&&!o&&(n(Object(O.a)(Object(O.a)({},s),{},{imageUrl:l})),i&&i(!0))}),[l,s,n,r,i,o]),Object(E.jsx)(Ne.a,{size:a})}function we(e){var t=e.open,a=e.setOpen,n=Object(c.useState)({title:"",img:""}),s=Object(f.a)(n,2),r=s[0],i=s[1],o=Object(B.b)(),l=Object(c.useState)(!1),j=Object(f.a)(l,2),u=j[0],d=j[1],b=Object(c.useState)(!1),p=Object(f.a)(b,2),h=p[0],v=p[1],g=Object(c.useState)(null),N=Object(f.a)(g,2),y=N[0],w=N[1],S=function(){a(!1)};return Object(E.jsxs)("div",{children:[h&&Object(E.jsx)(ue,{message:"Your post uploaded succesfully!",severity:"success"}),Object(E.jsx)("div",{className:"create-post",children:Object(E.jsx)(me.a,{"aria-labelledby":"simple-dialog-title",open:t,children:Object(E.jsxs)("div",{className:"dialog",children:[Object(E.jsx)(he.a,{id:"simple-dialog-title",children:"Create your new post!"}),Object(E.jsxs)("div",{className:"flex justify-between align-items",children:[Object(E.jsx)("input",{type:"file",onChange:function(e){var t=e.target.files[0];t&&["image/png","image/jpeg","image/jpg"].includes(t.type)?w(t):w(null)}}),y&&Object(E.jsx)(ye,{size:"16px",file:y,data:r,setData:i})]}),Object(E.jsx)(xe.a,{onChange:function(e){return i(Object(O.a)(Object(O.a)({},r),{},{title:e.target.value}))},placeholder:"Title",variant:"outlined",size:"small",className:"my-10"}),Object(E.jsx)(Oe.a,{onClick:function(){try{d(!0),o(function(e,t,a,c,n){return function(){var s=Object(x.a)(m.a.mark((function s(r){var i,o;return m.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.prev=0,s.next=3,$(e);case 3:i=s.sent,(o=i.data)&&(t(!1),a(),c(null),n(!0)),r({type:ne,payload:o}),s.next=12;break;case 9:s.prev=9,s.t0=s.catch(0),console.log(s.t0);case 12:case"end":return s.stop()}}),s,null,[[0,9]])})));return function(e){return s.apply(this,arguments)}}()}(r,d,S,w,v))}catch(e){console.log(e)}},variant:"contained",color:"primary",className:"my-10 white",children:u?"Publishing...":"Publish"}),Object(E.jsx)(Oe.a,{onClick:function(){return S()},children:"Close"})]})})})]})}var Se=function(e,t,a){return function(){var c=Object(x.a)(m.a.mark((function c(n){var s;return m.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,ae(e);case 2:s=c.sent,t&&s&&(t(!1),a(!0)),n({type:"UPDATE_USER",payload:s.data});case 5:case"end":return c.stop()}}),c)})));return function(e){return c.apply(this,arguments)}}()};function ke(e){var t,a=e.open,n=e.setOpen,s=Object(B.b)(),r=Object(c.useState)(null===(t=JSON.parse(localStorage.getItem("profile")))||void 0===t?void 0:t.result),i=Object(f.a)(r,2),l=i[0],j=i[1],u=Object(c.useState)(!1),d=Object(f.a)(u,2),b=d[0],p=d[1],h=Object(c.useState)(!1),m=Object(f.a)(h,2),x=m[0],v=m[1],g=function(e){j(Object(O.a)(Object(O.a)({},l),{},Object(o.a)({},e.target.name,e.target.value)))};return x?Object(E.jsx)(ue,{message:"Settings updated succesfully!",severity:"success"}):Object(E.jsx)("div",{children:Object(E.jsx)(me.a,{"aria-labelledby":"simple-dialog-title",open:a,children:Object(E.jsxs)("div",{className:"settings",children:[Object(E.jsx)(xe.a,{label:"Username",value:l.username,margin:"dense",name:"username",onChange:g}),Object(E.jsx)(xe.a,{name:"bio",label:"Bio",rows:"4",multiline:!0,value:null===l||void 0===l?void 0:l.bio,margin:"dense",onChange:g}),Object(E.jsx)(xe.a,{type:"date",value:(null===l||void 0===l?void 0:l.birthday)?l.birthday:"2002-09-14",onChange:g,margin:"dense",name:"birthday",label:"Birthday",placeholder:""}),Object(E.jsx)(Oe.a,{variant:"contained",color:"primary",className:"white my-10",onClick:function(){p(!0),s(Se(l,p,v))},disabled:!!b,children:b?"Updating...":"Update"}),Object(E.jsx)(Oe.a,{variant:"contained",color:"secondary",onClick:function(){n(!1)},children:"Close"})]})})})}function _e(e){var t,a=null===(t=JSON.parse(localStorage.getItem("profile")))||void 0===t?void 0:t.result,n=Object(c.useState)(!1),s=Object(f.a)(n,2),r=s[0],o=s[1],l=Object(c.useState)(!1),j=Object(f.a)(l,2),u=j[0],d=j[1],b=Object(c.useState)(!1),p=Object(f.a)(b,2),O=p[0],h=p[1],m=Object(i.f)(),x=Object(B.b)();return Object(c.useEffect)((function(){}),[a]),Object(E.jsxs)("div",{className:"user-profile",children:[Object(E.jsx)(we,{open:r,setOpen:o}),u&&Object(E.jsx)(ke,{open:u,setOpen:d}),Object(E.jsx)("div",{className:"user-box",children:Object(E.jsxs)(S.a,{children:[Object(E.jsxs)(_.a,{children:[Object(E.jsx)(U.a,{children:Object(E.jsx)(T.b,{to:"/profile/",children:Object(E.jsx)(C.a,{alt:"profile",className:"cursorp",src:a&&(null===a||void 0===a?void 0:a.imageUrl)})})}),Object(E.jsx)(I.a,{children:Object(E.jsx)(T.b,{to:"/profile/",className:"cursorp black",children:a?(null===a||void 0===a?void 0:a.username)?null===a||void 0===a?void 0:a.username:(null===a||void 0===a?void 0:a.familyName)+" "+(null===a||void 0===a?void 0:a.givenName):"Test user"})})]}),Object(E.jsx)(T.b,{to:"/profile/".concat(null===a||void 0===a?void 0:a._id),className:"black",children:Object(E.jsx)(z,{text:"Your posts"})}),Object(E.jsx)(_.a,{children:Object(E.jsx)("p",{onClick:function(){return a?d(!0):h(!0)},className:"cursorp text500",children:"Settings"})}),O&&Object(E.jsx)(ue,{setOpenToast:h,message:"You should first sign in!",severity:"error"}),Object(E.jsx)(_.a,{children:Object(E.jsxs)("div",{className:"w-100",children:[Object(E.jsx)(Oe.a,{onClick:function(){return a?o((function(e){return!e})):h(!0)},className:"cursorp black w-100",variant:"contained",color:"primary",style:{color:"#fff"},startIcon:Object(E.jsx)(pe.a,{className:"cursorp"}),children:"Create post"}),a?Object(E.jsx)(Oe.a,{onClick:function(){x({type:"LOG_OUT"}),m.push("/")},variant:"contained",color:"secondary",className:"btnt-10 w-100",children:"Log out"}):Object(E.jsx)(T.b,{to:"/auth/",children:Object(E.jsx)(Oe.a,{variant:"contained",style:{backgroundColor:"var(--green)",color:"white"},className:"btnt-10 w-100",children:"Sign up"})})]})})]})})]})}function Ue(){var e,t=Object(c.useState)([]),a=Object(f.a)(t,2),n=a[0],s=a[1],r=null===(e=JSON.parse(localStorage.getItem("profile")))||void 0===e?void 0:e.result;return Object(c.useEffect)((function(){function e(){return(e=Object(x.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,R.a.get("".concat("https://tigram-project.herokuapp.com","/user/getusers/"));case 3:t=e.sent,s(t.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(E.jsx)("div",{className:"left-box",children:Object(E.jsx)("div",{className:"users",children:Object(E.jsxs)(S.a,{children:[Object(E.jsx)(z,{text:"You might know"}),0!==n.length?n.map((function(e){return e._id!==(null===r||void 0===r?void 0:r._id)&&Object(E.jsxs)(_.a,{children:[Object(E.jsx)(T.b,{to:"/profile/".concat(e._id),children:Object(E.jsx)(U.a,{children:Object(E.jsx)(C.a,{alt:"profile",className:"cursorp",src:null===e||void 0===e?void 0:e.imageUrl})})}),Object(E.jsx)(I.a,{children:Object(E.jsx)(T.b,{to:"/profile/".concat(e._id),children:Object(E.jsx)("p",{className:"cursorp text black",children:null===e||void 0===e?void 0:e.username})})})]},e._id)})):Object(E.jsx)("div",{className:"p-10",children:Object(E.jsx)(ye,{size:20})})]})})})}function Ie(){return Object(E.jsxs)("header",{className:"fixed-navbar",children:[Object(E.jsxs)("div",{className:"mobile-nav",children:[Object(E.jsx)(T.b,{to:"/home/",children:Object(E.jsx)("h2",{className:"sm-logo mobile-logo cursorp",children:"Tigram"})}),Object(E.jsx)("div",{className:"drawer",children:Object(E.jsx)(D,{menu:!0})})]}),Object(E.jsx)("div",{className:"nav",children:Object(E.jsx)(T.b,{to:"/home/",children:Object(E.jsx)("p",{className:"sm-logo d-none-mobile cursorp",children:"Tigram"})})})]})}function Ce(){var e=Object(B.b)(),t=Object(B.c)((function(e){return e.posts}));return Object(c.useEffect)((function(){e({type:"GET_AUTH"}),e(function(){var e=Object(x.a)(m.a.mark((function e(t){var a,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Q.get("/post/");case 3:a=e.sent,c=a.data,t({type:se,payload:c}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}())}),[e]),Object(E.jsx)(F.a,{children:Object(E.jsxs)("div",{className:"home",children:[Object(E.jsx)(Ie,{}),Object(E.jsxs)("main",{children:[Object(E.jsxs)("div",{className:"friends-component",children:[Object(E.jsx)("div",{className:"user-component2",children:Object(E.jsx)(_e,{})}),Object(E.jsx)(Ue,{})]}),Object(E.jsxs)("div",{className:"post-section",children:[Object(E.jsx)("p",{className:"text500",children:"Posts"}),Object(E.jsx)("div",{className:"posts",children:0===t.length?Object(E.jsx)("div",{className:"p-10",children:Object(E.jsx)(ye,{size:25})}):t.map((function(e,t){return Object(E.jsx)(de,{post:e},t)}))})]}),Object(E.jsx)("div",{className:"user-component",children:Object(E.jsx)(_e,{})})]})]})})}var Te=a(83),Ee=a.n(Te),ze=a(117),Ae=a.n(ze);function Re(){var e,t=Object(i.g)().userId,a=Object(c.useState)([]),n=Object(f.a)(a,2),s=n[0],r=n[1],o=Object(c.useState)(!1),l=Object(f.a)(o,2),j=l[0],u=l[1],d=null===(e=JSON.parse(localStorage.getItem("profile")))||void 0===e?void 0:e.result,b=Object(c.useState)(null),p=Object(f.a)(b,2),O=p[0],h=p[1],v=Object(c.useState)(d),g=Object(f.a)(v,2),N=g[0],y=g[1],w=Object(c.useState)(!1),S=Object(f.a)(w,2),k=S[0],_=S[1],U=Object(c.useState)(null),I=Object(f.a)(U,2),T=I[0],z=I[1],A=Object(c.useState)(null),P=Object(f.a)(A,2),D=P[0],J=P[1],G=Object(c.useState)(!1),L=Object(f.a)(G,2),H=L[0],q=L[1],W=Object(B.b)();Object(c.useEffect)((function(){function e(){return(e=Object(x.a)(m.a.mark((function e(){var a,c,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R.a.get("".concat("https://tigram-project.herokuapp.com","/user/find/").concat(t||(null===d||void 0===d?void 0:d._id)));case 2:return c=e.sent,h(c.data),(null===c||void 0===c||null===(a=c.data.friends)||void 0===a?void 0:a.includes(null===d||void 0===d?void 0:d._id))&&u(!0),e.next=7,R.a.get("".concat("https://tigram-project.herokuapp.com","/post/").concat(t||(null===d||void 0===d?void 0:d._id)));case 7:n=e.sent,r(n.data);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}(),H&&(W(Se(N)),q(!1))}),[W,N,H,null===d||void 0===d?void 0:d._id,t]);return Object(E.jsxs)(F.a,{children:[k&&Object(E.jsx)(ue,{message:"Your changes won't save!",severity:"warning",setOpenToast:_}),Object(E.jsx)("input",{accept:"image/*",id:"contained-button-file",multiple:!0,type:"file",style:{display:"none"},onChange:function(e){z(e.target.files[0])}}),Object(E.jsx)("input",{accept:"image/*",id:"contained-button-file-banner",multiple:!0,type:"file",style:{display:"none"},onChange:function(e){return J(e.target.files[0])}}),Object(E.jsxs)("div",{className:"home",children:[Object(E.jsx)(Ie,{}),Object(E.jsxs)("main",{children:[Object(E.jsxs)("div",{className:"friends-component",children:[Object(E.jsx)("div",{className:"user-component2",children:Object(E.jsx)(_e,{})}),Object(E.jsx)(Ue,{})]}),Object(E.jsx)("div",{className:"post-section",children:Object(E.jsxs)("div",{className:"posts",children:[Object(E.jsx)("div",{className:"user-thumb",children:Object(E.jsxs)("div",{className:"banner",children:[t===(null===d||void 0===d?void 0:d._id)||!t&&(D?Object(E.jsx)("div",{className:"button-progress",children:Object(E.jsx)(ye,{file:D,size:"30px",setData:y,data:N,setBannerImg:J,setUpdate:q})}):Object(E.jsx)("div",{className:"banner-button",children:Object(E.jsx)("label",{htmlFor:"contained-button-file-banner",children:Object(E.jsx)(Ee.a,{className:"banner-icon"})})})),(null===O||void 0===O?void 0:O.bannerImgUrl)?Object(E.jsx)("img",{src:O.bannerImgUrl,alt:"banner",className:"banner-img"}):Object(E.jsx)("div",{className:"banner-img"}),Object(E.jsxs)("div",{className:"avatar",children:[t!==(null===d||void 0===d?void 0:d._id)&&t||!d?Object(E.jsx)(C.a,{style:{height:150,width:150},className:"cursorp",src:O&&O.imageUrl}):Object(E.jsxs)("label",{htmlFor:"contained-button-file",children:[Object(E.jsx)(C.a,{style:{height:150,width:150},className:"cursorp",src:O&&O.imageUrl}),Object(E.jsx)("div",{className:"change-avatar",children:Object(E.jsx)(Ee.a,{className:"change-avatar-icon"})})]}),Object(E.jsx)("div",{className:"avatar",children:T&&Object(E.jsx)(ye,{file:T,size:"40px",setData:y,data:N,setFile:z,setUpdate:q})})]})]})}),Object(E.jsx)("p",{className:"profile-name",children:null===O||void 0===O?void 0:O.username}),Object(E.jsxs)("div",{className:"profile-nav",children:[Object(E.jsx)("p",{className:"text500 m-0",children:"Posts"}),t!==(null===d||void 0===d?void 0:d._id)&&t&&Object(E.jsx)(Oe.a,{variant:"contained",color:"primary",style:{color:"white"},startIcon:!j&&Object(E.jsx)(Ae.a,{}),onClick:function(){var e;u((function(e){return!e})),d?W((e=O._id,Object(x.a)(m.a.mark((function t(){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,ce(e);case 3:t.next=8;break;case 5:t.prev=5,t.t0=t.catch(0),console.log(t.t0);case 8:case"end":return t.stop()}}),t,null,[[0,5]])}))))):_(!0)},children:j?"Unfriend":"Add friend"})]}),s.map((function(e){return Object(E.jsx)(de,{post:e},e._id)}))]})}),Object(E.jsx)("div",{className:"user-component",children:Object(E.jsx)(_e,{})})]})]})]})}var Pe=a.p+"static/media/town.eac0e923.jpg",De=(a(168),a(85)),Je=a.n(De),Ge=a(84),Le=a.n(Ge),Be=a.p+"static/media/google-icon.a45b46e9.svg",He=a(119),Fe=a.n(He),qe=a(118),We=function(e){return function(){var t=Object(x.a)(m.a.mark((function t(a){var c;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,n=e,Q.post("/auth/google/",n);case 3:c=t.sent,a({type:"AUTH",payload:c.data}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}var n}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},Ye=a(172),Xe=Object(g.a)((function(e){return{backdrop:{zIndex:e.zIndex.drawer+1,color:"#fff"}}}));function Ve(){var e=Xe(),t=n.a.useState(!0),a=Object(f.a)(t,1)[0];return Object(E.jsx)("div",{children:Object(E.jsx)(Ye.a,{className:e.backdrop,open:a,children:Object(E.jsx)(Ne.a,{color:"inherit"})})})}function Ke(){var e=Object(c.useState)(!1),t=Object(f.a)(e,2),a=t[0],n=t[1],s=Object(B.c)((function(e){return e.error})),r=Object(c.useState)(null),l=Object(f.a)(r,2),j=l[0],u=l[1],d=Object(c.useState)(!1),b=Object(f.a)(d,2),p=b[0],h=b[1],v=Object(c.useState)(!1),g=Object(f.a)(v,2),N=g[0],y=g[1],w=Object(c.useState)(!1),S=Object(f.a)(w,2),k=S[0],_=S[1],U=Object(c.useState)({username:"",email:"",password:"",password2:""}),I=Object(f.a)(U,2),C=I[0],z=I[1],A=Object(i.f)(),R=Object(B.b)(),P=function(e){z(Object(O.a)(Object(O.a)({},C),{},Object(o.a)({},e.target.name,e.target.value)))},D=Object(B.c)((function(e){return e.user}));Object(c.useEffect)((function(){D&&A.push("/home"),s&&_(!1)}),[s,j,D,A]);return Object(E.jsxs)("div",{className:"auth-page",children:[k&&Object(E.jsx)(Ve,{}),Object(E.jsx)("img",{src:Pe,alt:"auth",className:"auth-image"}),Object(E.jsxs)("div",{className:"auth-side",children:[Object(E.jsx)(T.b,{to:"/",children:Object(E.jsx)(Oe.a,{variant:"outlined",color:"primary",className:"m-20",children:"Back"})}),Object(E.jsxs)("div",{className:"auth-part",children:[Object(E.jsxs)("div",{className:"mb-20",children:[Object(E.jsx)("div",{className:"lock-badge",children:Object(E.jsx)(Fe.a,{className:"lock-icon"})}),Object(E.jsx)("p",{className:"small-text",children:a?"Sign In":"Sign Up"})]}),Object(E.jsx)("p",{className:"error",children:s}),Object(E.jsx)("p",{className:"error",children:j}),Object(E.jsxs)("div",{className:"auth-inputs",children:[Object(E.jsx)(xe.a,{required:!0,placeholder:"Email",variant:"outlined",size:"small",fullWidth:!0,margin:"dense",type:"email",name:"email",onChange:P}),!a&&Object(E.jsx)(xe.a,{required:!0,placeholder:"Username",variant:"outlined",size:"small",fullWidth:!0,margin:"dense",name:"username",onChange:P}),Object(E.jsx)(xe.a,{required:!0,name:"password",onChange:P,margin:"dense",placeholder:"Password",fullWidth:!0,variant:"outlined",size:"small",type:p?"text":"password",InputProps:{endAdornment:p?Object(E.jsx)(Je.a,{className:"cursorp",onClick:function(){return h((function(e){return!e}))}}):Object(E.jsx)(Le.a,{className:"cursorp",onClick:function(){return h((function(e){return!e}))}})}}),!a&&Object(E.jsx)(xe.a,{margin:"dense",fullWidth:!0,placeholder:"Repeat password",variant:"outlined",size:"small",type:N?"text":"password",name:"password2",onChange:P,InputProps:{endAdornment:N?Object(E.jsx)(Je.a,{className:"cursorp",onClick:function(){return y((function(e){return!e}))}}):Object(E.jsx)(Le.a,{className:"cursorp",onClick:function(){return y((function(e){return!e}))}})}}),Object(E.jsx)(Oe.a,{onClick:function(){var e;R({type:"AUTH_ERROR",payload:null}),a||(C.password===C.password2?C.password.length>4?C.username.length?(_(!0),R((e=C,function(){var t=Object(x.a)(m.a.mark((function t(a){var c;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,te(e);case 3:c=t.sent,a({type:"SIGN_UP",payload:c.data}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),a({type:"AUTH_ERROR",payload:t.t0.response.data});case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}())),u(null)):u("Username must be longer than 4 characters!"):u("Password must be longer than 4 characters!"):u("Passwords doesn't match each other!")),a&&(_(!0),R(function(e){return function(){var t=Object(x.a)(m.a.mark((function t(a){var c;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,ee(e);case 3:c=t.sent,a({type:"SIGN_IN",payload:c.data}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),a({type:"AUTH_ERROR",payload:t.t0.response.data});case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()}(C)))},variant:"contained",color:"primary",fullWidth:!0,className:"my-10 white",children:a?"Sign In":"Sign Up"}),Object(E.jsx)(qe.GoogleLogin,{clientId:"249301934820-sf8nnk4jgepv5mehfi8j3a8f3igf0e4s.apps.googleusercontent.com",cookiePolicy:"single_host_origin",render:function(e){return Object(E.jsx)(Oe.a,{onClick:e.onClick,disabled:e.disabled,startIcon:Object(E.jsx)("img",{src:Be,alt:"google-icon",className:"google-icon"}),variant:"contained",fullWidth:!0,children:"Continue with google"})},onSuccess:function(){var e=Object(x.a)(m.a.mark((function e(t){var a,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=null===t||void 0===t?void 0:t.profileObj,c=null===t||void 0===t?void 0:t.tokenId;try{R(We({imageUrl:null===a||void 0===a?void 0:a.imageUrl,token:c,username:(null===a||void 0===a?void 0:a.familyName)+" "+(null===a||void 0===a?void 0:a.givenName)})),A.push("/home/")}catch(n){console.log(n)}case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),onFailure:function(e){return console.log(e)}})]})]}),Object(E.jsx)("p",{onClick:function(){return n((function(e){return!e}))},className:"auth-link",children:a?"Don't have an account?":"Already have an account?"})]})]})}var Me=function(){return Object(E.jsx)("div",{children:Object(E.jsxs)(i.c,{children:[Object(E.jsx)(i.a,{path:"/home/",component:Ce}),Object(E.jsx)(i.a,{path:"/profile/",exact:!0,component:Re}),Object(E.jsx)(i.a,{path:"/profile/:userId",exact:!0,component:Re}),Object(E.jsx)(i.a,{path:"/auth/",component:Ke}),Object(E.jsx)(i.a,{path:"/",component:H})]})})},Qe=a(121),Ze=a(220),$e=a(44),et=a(120),tt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case se:return t.payload;case ne:return[t.payload].concat(Object(q.a)(e));default:return[]}},at=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"AUTH":return localStorage.setItem("profile",JSON.stringify(Object(O.a)({},null===t||void 0===t?void 0:t.payload))),null===t||void 0===t?void 0:t.payload;case"GET_AUTH":var a=JSON.parse(localStorage.getItem("profile"));return a;case"LOG_OUT":return localStorage.clear(),null;case"SIGN_UP":case"UPDATE_USER":case"SIGN_IN":return localStorage.setItem("profile",JSON.stringify(Object(O.a)({},null===t||void 0===t?void 0:t.payload))),null===t||void 0===t?void 0:t.payload;default:return e}},ct=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"AUTH_ERROR":return t.payload;default:return e}},nt=Object($e.c)({posts:tt,error:ct,user:at}),st=Object($e.e)(nt,Object($e.d)(Object($e.a)(et.a),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__())),rt=Object(Qe.a)({palette:{primary:{main:"#03a9f4",secondary:"#fff"},secondary:{main:"#ff1744"}}});r.a.render(Object(E.jsx)(E.Fragment,{children:Object(E.jsx)(Ze.a,{theme:rt,children:Object(E.jsx)(B.a,{store:st,children:Object(E.jsx)(T.a,{children:Object(E.jsx)(Me,{})})})})}),document.getElementById("root"))}},[[169,1,2]]]);
//# sourceMappingURL=main.48fc6010.chunk.js.map