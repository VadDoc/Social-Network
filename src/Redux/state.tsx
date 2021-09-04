import {DialogPropsType, MessagePropsType} from "../components/Content/Dialogs/Dialogs";
import {v1} from "uuid";
import {PostItemType} from "../components/Content/Profile/MyPosts/MyPosts";
import img1 from "../images/ava1.jpeg";
import img2 from "../images/ava2.jpeg";
import {NavigationType} from "../components/Navbar/Navbar";

export type StateType = {
  navBar: {
    navigation: Array<NavigationType>

  }

  profilePage: {
    myPostsData: Array<PostItemType>
  }

  messagesPage: {
    dialogsData: Array<DialogPropsType>
    messagesData: Array<MessagePropsType>
  }

  newsPage: {}
  musicPage: {}
  settingsPage: {}
}

export const state: StateType = {
  navBar: {
    navigation: [
      {pageName: 'Profile', link: '/profile'},
      {pageName: 'Messages', link: '/dialogs'},
      {pageName: 'News', link: '/news'},
      {pageName: 'Music', link: '/music'},
      {pageName: 'Settings', link: '/settings'},
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
