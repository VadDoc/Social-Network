// import {DialogPropsType, MessagePropsType} from "../components/Content/Dialogs/Dialogs";
import {v1} from "uuid";
import {PostItemType} from "../components/Content/Profile/MyPosts/MyPosts";
import img from "../images/ava.png"
import img1 from "../images/ava1.jpeg";
import img2 from "../images/ava2.jpeg";
import {NavigationType} from "../components/Navbar/Navbar";
import {MessageType} from "../components/Content/Dialogs/Message/Message";
import {DialogPropsType} from "../components/Content/Dialogs/Dialog/Dialog";
import {rerenderEntireTree} from "../render";

export type StateType = {
  navBar: {
    navigation: Array<NavigationType>

  }

  profilePage: {
    myPostsData: Array<PostItemType>
  }

  messagesPage: {
    dialogsData: Array<DialogPropsType>
    messagesData: Array<MessageType>
  }

  newsPage: {}
  musicPage: {}
  settingsPage: {}
}

export const state: StateType = {
  navBar: {
    navigation: [
      {id: v1(), pageName: 'Profile', link: '/profile'},
      {id: v1(), pageName: 'Messages', link: '/dialogs'},
      {id: v1(), pageName: 'News', link: '/news'},
      {id: v1(), pageName: 'Music', link: '/music'},
      {id: v1(), pageName: 'Settings', link: '/settings'},
    ]
  },
  profilePage: {
    myPostsData: [
      {id: v1(), img: img1, message: 'Hello! How are you', likesCount: 4},
      {id: v1(), img: img2, message: 'What are doing now?', likesCount: 14},
    ]
  },
  messagesPage: {
    dialogsData: [
      {id: v1(), name: 'Ann'},
      {id: v1(), name: 'Nick'},
      {id: v1(), name: 'Jhon'},
      {id: v1(), name: 'Jane'},
    ],
    messagesData: [
      {id: v1(), message: 'Hello'},
      {id: v1(), message: 'How are you?'},
    ],
  },
  newsPage: {},
  musicPage: {},
  settingsPage: {}
}

export const addPost = (postMessage: string) => {
  const newPost: PostItemType = {
    id: v1(),
    img: img,
    message: postMessage,
    likesCount: 0
  }
  // let newState = [...state.profilePage.myPostsData, newPost]
  state.profilePage.myPostsData.push(newPost)
  rerenderEntireTree(state)
}

export const addMessage = (message: string) => {
  const newMessage = {
    id: v1(),
    message: message
  }
  state.messagesPage.messagesData.push(newMessage)
  rerenderEntireTree(state)
}