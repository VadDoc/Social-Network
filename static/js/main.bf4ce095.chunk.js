(this["webpackJsonpsocial-network"]=this["webpackJsonpsocial-network"]||[]).push([[0],[,,,,,,,,,,function(e,t,s){e.exports={posts:"Posts_posts__vjRnY",postItem:"Posts_postItem__1DDXc",img:"Posts_img__13knP"}},function(e,t,s){e.exports={dialogs:"Dialogs_dialogs__3bw9T",dialogsItems:"Dialogs_dialogsItems__4lWE6",messages:"Dialogs_messages__3tcxs",active:"Dialogs_active__28Z6M"}},,,function(e,t,s){e.exports={profileInfo:"ProfileInfo_profileInfo__fhGM0",description:"ProfileInfo_description__2RJcI"}},function(e,t,s){},,,function(e,t,s){e.exports={nav:"Navbar_nav__3cHYR",active:"Navbar_active__21R_N"}},function(e,t,s){e.exports={footer:"Footer_footer__7dIj9",active:"Footer_active__3wB70"}},,,,function(e,t,s){e.exports={header:"Header_header__1v0yI"}},function(e,t,s){e.exports={content:"Content_content__1uhUL"}},function(e,t,s){e.exports={myPosts:"MyPosts_myPosts__1jJZz"}},function(e,t,s){e.exports={profile:"Profile_profile__1BgWt"}},function(e,t,s){},,function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},,,,,function(e,t,s){},function(e,t,s){},,,,,,,function(e,t,s){"use strict";s.r(t);var a=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,47)).then((function(t){var s=t.getCLS,a=t.getFID,n=t.getFCP,i=t.getLCP,c=t.getTTFB;s(e),a(e),n(e),i(e),c(e)}))},n=s(46),i=s.p+"static/media/ava1.4ab0e03f.jpeg",c=s.p+"static/media/ava2.927a3424.jpeg",r=s.p+"static/media/ava.28e44cb7.png",o="ADD_POST",d="UPDATE_NEW_POST_TEXT",j="ADD_MESSAGE",l={_state:{navBar:{navigation:[{id:Object(n.a)(),pageName:"Profile",link:"/profile"},{id:Object(n.a)(),pageName:"Messages",link:"/dialogs"},{id:Object(n.a)(),pageName:"News",link:"/news"},{id:Object(n.a)(),pageName:"Music",link:"/music"},{id:Object(n.a)(),pageName:"Settings",link:"/settings"}]},profilePage:{myPostsData:[{id:Object(n.a)(),img:i,message:"Hello! How are you",likesCount:4},{id:Object(n.a)(),img:c,message:"What are doing now?",likesCount:14}],newPostText:""},messagesPage:{dialogsData:[{id:Object(n.a)(),name:"Ann"},{id:Object(n.a)(),name:"Nick"},{id:Object(n.a)(),name:"Jhon"},{id:Object(n.a)(),name:"Jane"}],messagesData:[{id:Object(n.a)(),message:"Hello"},{id:Object(n.a)(),message:"How are you?"}]},newsPage:{},musicPage:{},settingsPage:{}},_callSubscriber:function(e){console.log("state")},getState:function(){return this._state},subscribe:function(e){this._callSubscriber=e},dispatch:function(e){this._state.navBar=this._state.navBar,this._state.profilePage=function(e,t){switch(t.type){case o:var s={id:Object(n.a)(),img:r,message:e.newPostText,likesCount:0};return s.message&&e.myPostsData.push(s),e.newPostText="",e;case d:return e.newPostText=t.post,e;default:return e}}(this._state.profilePage,e),this._state.messagesPage=function(e,t){if(t.type===j){var s={id:Object(n.a)(),message:t.message};e.messagesData.push(s)}return e}(this._state.messagesPage,e),this._callSubscriber(this._state)}},u=s(1),g=s.n(u),m=s(22),p=s.n(m),b=(s(37),s(38),s.p+"static/media/gold-elephant.8fa88fbe.png"),f=s(23),h=s.n(f),O=s(0),x=function(){return Object(O.jsxs)("header",{className:h.a.header,children:[Object(O.jsx)("div",{children:Object(O.jsx)("img",{src:b,alt:"ff"})}),Object(O.jsx)("h1",{children:'Social network "GOLDEN ELEPHANT"'})]})},_=s(2),v=s(24),P=s.n(v),N=s(25),w=s.n(N),D=s(10),k=s.n(D),y=function(e){return Object(O.jsx)("div",{className:k.a.posts,children:e.posts.map((function(e){return Object(O.jsxs)("div",{className:k.a.postItem,children:[Object(O.jsx)("img",{className:k.a.img,src:e.img,alt:"ava"}),e.message,Object(O.jsxs)("p",{children:["Likes ",Object(O.jsx)("span",{children:e.likesCount})]})]},e.id)}))})},I=function(e){return Object(O.jsxs)("div",{className:w.a.myPosts,children:[Object(O.jsx)("h2",{children:"MyPosts"}),Object(O.jsx)("p",{children:Object(O.jsx)("textarea",{value:e.profilePage.newPostText,onChange:function(t){var s=t.currentTarget.value;s&&e.dispatch(function(e){return{type:d,post:e}}(s))}})}),Object(O.jsx)("p",{children:Object(O.jsx)("button",{onClick:function(){e.dispatch({type:o})},children:"Add post"})}),Object(O.jsx)(y,{posts:e.profilePage.myPostsData})]})},S=s(26),T=s.n(S),C=s(14),B=s.n(C),E=function(e){return Object(O.jsxs)("div",{className:B.a.profileInfo,children:[Object(O.jsx)("div",{children:Object(O.jsx)("img",{src:"https://v-thailand.com/wp-content/uploads/2017/12/Slonyi-v-Tailande-2.jpg",alt:"img"})}),Object(O.jsx)("div",{className:B.a.description,children:"ava + description"})]})},M=function(e){return Object(O.jsxs)("div",{className:T.a.profile,children:[Object(O.jsx)(E,{}),Object(O.jsx)(I,{profilePage:e.profilePage,dispatch:e.dispatch})]})},A=s(11),F=s.n(A),H=s(27),J=s.n(H),L=function(e){return Object(O.jsx)("div",{className:J.a.message,children:e.message})},R=s(15),W=s.n(R),G=s(7),U=function(e){return Object(O.jsx)("div",{className:W.a.dialog,children:Object(O.jsx)(G.b,{to:"/dialogs/".concat(e.id),activeClassName:W.a.active,children:e.name})})},X=s(29),Y=s.n(X),Z=g.a.createRef(),z=function(e){return Object(O.jsxs)("div",{className:Y.a.addMessage,children:[Object(O.jsx)("div",{children:Object(O.jsx)("textarea",{ref:Z})}),Object(O.jsx)("div",{children:Object(O.jsx)("button",{onClick:function(){var t,s=null===(t=Z.current)||void 0===t?void 0:t.value;s&&e.dispatch(function(e){return{type:j,message:e}}(s)),Z.current&&(Z.current.value="")},children:"Send message"})})]})},q=function(e){var t=e.messagesPage.dialogsData.map((function(e){return Object(O.jsx)(U,{name:e.name,id:e.id},e.id)})),s=e.messagesPage.messagesData.map((function(e){return Object(O.jsx)(L,{message:e.message,id:e.id},e.id)}));return Object(O.jsxs)("div",{className:F.a.dialogs,children:[Object(O.jsx)("div",{className:F.a.dialogsItems,children:t}),Object(O.jsxs)("div",{className:F.a.messages,children:[s,Object(O.jsx)(z,{dispatch:e.dispatch})]})]})},K=s(30),Q=s.n(K),V=function(e){return Object(O.jsx)("div",{className:Q.a.news,children:"News"})},$=s(31),ee=s.n($),te=function(e){return Object(O.jsx)("div",{className:ee.a.music,children:"Music"})},se=s(32),ae=s.n(se),ne=function(e){return Object(O.jsx)("div",{className:ae.a.settings,children:"Settings"})},ie=function(e){return Object(O.jsxs)("main",{className:P.a.content,children:[Object(O.jsx)(_.a,{path:"/profile",render:function(){return Object(O.jsx)(M,{profilePage:e.profilePage,dispatch:e.dispatch})}}),Object(O.jsx)(_.a,{path:"/dialogs",render:function(){return Object(O.jsx)(q,{messagesPage:e.messagesPage,dispatch:e.dispatch})}}),Object(O.jsx)(_.a,{path:"/news",render:function(){return Object(O.jsx)(V,{})}}),Object(O.jsx)(_.a,{path:"/music",render:function(){return Object(O.jsx)(te,{})}}),Object(O.jsx)(_.a,{path:"/settings",render:function(){return Object(O.jsx)(ne,{})}})]})},ce=s(18),re=s.n(ce),oe=function(e){var t=e.navBar.navigation.map((function(e){return Object(O.jsx)(G.b,{to:e.link,activeClassName:re.a.active,children:e.pageName},e.id)}));return Object(O.jsx)("nav",{className:re.a.nav,children:t})},de=s(19),je=s.n(de),le=function(){return Object(O.jsx)("footer",{className:[je.a.footer,je.a.active].join(" "),children:"Footer"})},ue=function(e){return Object(O.jsx)(G.a,{children:Object(O.jsxs)("div",{className:"app",children:[Object(O.jsx)(x,{}),Object(O.jsx)(oe,{navBar:e.state.navBar}),Object(O.jsx)(ie,{profilePage:e.state.profilePage,messagesPage:e.state.messagesPage,newsPage:e.state.newsPage,musicPage:e.state.musicPage,settingsPage:e.state.settingsPage,dispatch:e.dispatch}),Object(O.jsx)(le,{})]})})},ge=function(){p.a.render(Object(O.jsx)(g.a.StrictMode,{children:Object(O.jsx)(ue,{state:l.getState(),dispatch:l.dispatch.bind(l)})}),document.getElementById("root"))};ge(),l.subscribe(ge),a()}],[[45,1,2]]]);
//# sourceMappingURL=main.bf4ce095.chunk.js.map