(this["webpackJsonpsocial-network"]=this["webpackJsonpsocial-network"]||[]).push([[0],[,,,,,,,,,,,,,,,,,function(e,t,s){e.exports={posts:"Posts_posts__vjRnY",postItem:"Posts_postItem__1DDXc",img:"Posts_img__13knP"}},function(e,t,s){e.exports={dialogs:"Dialogs_dialogs__3bw9T",dialogsItems:"Dialogs_dialogsItems__4lWE6",messages:"Dialogs_messages__3tcxs",active:"Dialogs_active__28Z6M"}},,,function(e,t,s){e.exports={profileInfo:"ProfileInfo_profileInfo__fhGM0",description:"ProfileInfo_description__2RJcI"}},function(e,t,s){},,,function(e,t,s){e.exports={nav:"Navbar_nav__3cHYR",active:"Navbar_active__21R_N"}},function(e,t,s){e.exports={footer:"Footer_footer__7dIj9",active:"Footer_active__3wB70"}},,,function(e,t,s){e.exports={header:"Header_header__1v0yI"}},function(e,t,s){e.exports={content:"Content_content__1uhUL"}},function(e,t,s){e.exports={profile:"Profile_profile__1BgWt"}},function(e,t,s){e.exports={myPosts:"MyPosts_myPosts__1jJZz"}},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},,,,,function(e,t,s){},function(e,t,s){},,,,,,,function(e,t,s){"use strict";s.r(t);var a=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,52)).then((function(t){var s=t.getCLS,a=t.getFID,n=t.getFCP,c=t.getLCP,i=t.getTTFB;s(e),a(e),n(e),c(e),i(e)}))},n=s(27),c=s(15),i=s(8),o=s(51),r=s.p+"static/media/ava.28e44cb7.png",j=s.p+"static/media/ava1.4ab0e03f.jpeg",g=s.p+"static/media/ava2.927a3424.jpeg",l="ADD_POST",d="UPDATE_NEW_POST_TEXT",u={myPostsData:[{id:Object(o.a)(),img:j,message:"Hello! How are you",likesCount:4},{id:Object(o.a)(),img:g,message:"What are doing now?",likesCount:14}],newPostText:""},b="UPDATE_NEW_MESSAGE_TEXT",m="SEND_MESSAGE",f={dialogsData:[{id:Object(o.a)(),name:"Ann"},{id:Object(o.a)(),name:"Nick"},{id:Object(o.a)(),name:"Jhon"},{id:Object(o.a)(),name:"Jane"}],messagesData:[{id:Object(o.a)(),message:"Hello"},{id:Object(o.a)(),message:"How are you?"}],newMessageText:""},O={navigation:[{id:Object(o.a)(),pageName:"Profile",link:"/profile"},{id:Object(o.a)(),pageName:"Messages",link:"/dialogs"},{id:Object(o.a)(),pageName:"News",link:"/news"},{id:Object(o.a)(),pageName:"Music",link:"/music"},{id:Object(o.a)(),pageName:"Settings",link:"/settings"}]},p={},x={},h={},v=Object(n.a)({profilePage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:Object(o.a)(),e.newPostText;return Object(i.a)(Object(i.a)({},e),{},{newPostText:"",myPostsData:[].concat(Object(c.a)(e.myPostsData),[{id:Object(o.a)(),img:r,message:e.newPostText,likesCount:0}])});case d:return Object(i.a)(Object(i.a)({},e),{},{newPostText:t.post});default:return e}},messagesPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return Object(i.a)(Object(i.a)({},e),{},{newMessageText:t.newText});case m:var s=e.newMessageText;return Object(i.a)(Object(i.a)({},e),{},{newMessageText:"",messagesData:[].concat(Object(c.a)(e.messagesData),[{id:Object(o.a)(),message:s}])});default:return e}},navBar:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O;return e},newsPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h;return e},musicPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p;return e},settingsPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x;return e}}),P=Object(n.b)(v),_=s(0),N=s.n(_),w=s(13),M=s.n(w),D=(s(42),s(43),s.p+"static/media/gold-elephant.8fa88fbe.png"),T=s(29),k=s.n(T),y=s(1),C=function(){return Object(y.jsxs)("header",{className:k.a.header,children:[Object(y.jsx)("div",{children:Object(y.jsx)("img",{src:D,alt:"ff"})}),Object(y.jsx)("h1",{children:'Social network "GOLDEN ELEPHANT"'})]})},S=s(3),E=s(30),I=s.n(E),A=s(31),B=s.n(A),F=s(21),H=s.n(F),J=function(e){return Object(y.jsxs)("div",{className:H.a.profileInfo,children:[Object(y.jsx)("div",{children:Object(y.jsx)("img",{src:"https://v-thailand.com/wp-content/uploads/2017/12/Slonyi-v-Tailande-2.jpg",alt:"img"})}),Object(y.jsx)("div",{className:H.a.description,children:"ava + description"})]})},L=s(16),W=s(32),G=s.n(W),R=s(17),U=s.n(R),X=function(e){var t=e.posts;return Object(y.jsx)("div",{className:U.a.posts,children:t.map((function(e){return Object(y.jsxs)("div",{className:U.a.postItem,children:[Object(y.jsx)("img",{className:U.a.img,src:e.img,alt:"ava"}),e.message,Object(y.jsxs)("p",{children:["Likes ",Object(y.jsx)("span",{children:e.likesCount})]})]},e.id)}))})},Y=["profilePage"],Z=s(11),z=Object(Z.b)((function(e){return{profilePage:e.profilePage}}),(function(e){return{addPost:function(){e({type:l})},onChangePost:function(t){t&&e(function(e){return{type:d,post:e}}(t))}}}))((function(e){var t=e.profilePage,s=Object(L.a)(e,Y);return Object(y.jsxs)("div",{className:G.a.myPosts,children:[Object(y.jsx)("h2",{children:"MyPosts"}),Object(y.jsx)("p",{children:Object(y.jsx)("textarea",{value:t.newPostText,onChange:function(e){var t=e.currentTarget.value;t&&s.onChangePost(t)}})}),Object(y.jsx)("p",{children:Object(y.jsx)("button",{onClick:function(){s.addPost()},children:"Add post"})}),Object(y.jsx)(X,{posts:t.myPostsData})]})})),q=function(){return Object(y.jsxs)("div",{className:B.a.profile,children:[Object(y.jsx)(J,{}),Object(y.jsx)(z,{})]})},K=s(33),Q=s.n(K),V=function(e){return Object(y.jsx)("div",{className:Q.a.news,children:"News"})},$=s(34),ee=s.n($),te=function(e){return Object(y.jsx)("div",{className:ee.a.music,children:"Music"})},se=s(35),ae=s.n(se),ne=function(e){return Object(y.jsx)("div",{className:ae.a.settings,children:"Settings"})},ce=s(18),ie=s.n(ce),oe=s(36),re=s.n(oe),je=function(e){return Object(y.jsx)("div",{className:re.a.message,children:e.message})},ge=s(22),le=s.n(ge),de=s(9),ue=function(e){return Object(y.jsx)("div",{className:le.a.dialog,children:Object(y.jsx)(de.b,{to:"/dialogs/".concat(e.id),activeClassName:le.a.active,children:e.name})})},be=s(37),me=s.n(be),fe=["messagesPage","newDialogMessage"],Oe=function(e){e.messagesPage;var t=e.newDialogMessage,s=Object(L.a)(e,fe);return Object(y.jsxs)("div",{className:me.a.addMessage,children:[Object(y.jsx)("div",{children:Object(y.jsx)("textarea",{onChange:function(e){var t=e.currentTarget.value;t&&s.changeMessage(t)},value:t,placeholder:"Enter your message"})}),Object(y.jsx)("div",{children:Object(y.jsx)("button",{onClick:function(){s.sendMessageClick()},children:"Send message"})})]})},pe=Object(Z.b)((function(e){return{messagesPage:e.messagesPage,newDialogMessage:e.messagesPage.newMessageText}}),(function(e){return{onSendMessageClick:function(){e({type:m})},changeMessage:function(t){t&&e(function(e){return{type:b,newText:e}}(t))}}}))((function(e){var t=e.messagesPage,s=e.onSendMessageClick,a=e.changeMessage,n=e.newDialogMessage,c=t.dialogsData.map((function(e){return Object(y.jsx)(ue,{name:e.name,id:e.id},e.id)})),i=t.messagesData.map((function(e){return Object(y.jsx)(je,{message:e.message,id:e.id},e.id)}));return Object(y.jsxs)("div",{className:ie.a.dialogs,children:[Object(y.jsx)("div",{className:ie.a.dialogsItems,children:c}),Object(y.jsxs)("div",{className:ie.a.messages,children:[i,Object(y.jsx)(Oe,{newDialogMessage:n,messagesPage:t,sendMessageClick:s,changeMessage:a})]})]})})),xe=function(e){return Object(y.jsxs)("main",{className:I.a.content,children:[Object(y.jsx)(S.a,{path:"/profile",render:function(){return Object(y.jsx)(q,{})}}),Object(y.jsx)(S.a,{path:"/dialogs",render:function(){return Object(y.jsx)(pe,{})}}),Object(y.jsx)(S.a,{path:"/news",render:function(){return Object(y.jsx)(V,{})}}),Object(y.jsx)(S.a,{path:"/music",render:function(){return Object(y.jsx)(te,{})}}),Object(y.jsx)(S.a,{path:"/settings",render:function(){return Object(y.jsx)(ne,{})}})]})},he=s(25),ve=s.n(he),Pe=function(e){var t=e.navBar.navigation.map((function(e){return Object(y.jsx)(de.b,{to:e.link,activeClassName:ve.a.active,children:e.pageName},e.id)}));return Object(y.jsx)("nav",{className:ve.a.nav,children:t})},_e=s(26),Ne=s.n(_e),we=function(){return Object(y.jsx)("footer",{className:[Ne.a.footer,Ne.a.active].join(" "),children:"Footer"})},Me=function(e){return Object(y.jsx)(de.a,{children:Object(y.jsxs)("div",{className:"app",children:[Object(y.jsx)(C,{}),Object(y.jsx)(Pe,{navBar:e.state.navBar}),Object(y.jsx)(xe,{profilePage:e.state.profilePage,messagesPage:e.state.messagesPage,newsPage:e.state.newsPage,musicPage:e.state.musicPage,settingsPage:e.state.settingsPage,dispatch:e.dispatch}),Object(y.jsx)(we,{})]})})},De=function(){M.a.render(Object(y.jsx)(N.a.StrictMode,{children:Object(y.jsx)(Z.a,{store:P,children:Object(y.jsx)(Me,{state:P.getState(),dispatch:P.dispatch.bind(P)})})}),document.getElementById("root"))};De(P.getState()),P.subscribe((function(){P.getState();De()})),a()}],[[50,1,2]]]);
//# sourceMappingURL=main.b4648e44.chunk.js.map