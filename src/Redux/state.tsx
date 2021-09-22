import {v1} from "uuid";
import {PostItemType} from "../components/Content/Profile/MyPosts/MyPosts";
import img from "../images/ava.png"
import img1 from "../images/ava1.jpeg";
import img2 from "../images/ava2.jpeg";
import {NavigationType} from "../components/Navbar/Navbar";
import {MessageType} from "../components/Content/Dialogs/Message/Message";
import {DialogPropsType} from "../components/Content/Dialogs/Dialog/Dialog";
import {rerenderEntireTreeType} from "../index";

export type StoreType = {
  _state: StateType
  _callSubscriber: (state: StateType) => void
  getState: () => StateType
  subscribe: (observer: rerenderEntireTreeType) => void
  dispatch: (action: ActionType) => void
}

export type StateType = {
  navBar: {
    navigation: Array<NavigationType>
  }

  profilePage: {
    myPostsData: Array<PostItemType>
    newPostText: string
  }

  messagesPage: {
    dialogsData: Array<DialogPropsType>
    messagesData: Array<MessageType>
  }

  newsPage: {}
  musicPage: {}
  settingsPage: {}
}
export type ActionType = AddPostActionType | UpdateNewPostTextActionType | AddMessageActionType
export type AddPostActionType = {
  type: 'ADD_POST'
}
export type UpdateNewPostTextActionType = {
  type: 'UPDATE_NEW_POST_TEXT'
  post: string
}
export type AddMessageActionType = {
  type: 'ADD_MESSAGE'
  message: string
}
// export type AddPostActionType = ReturnType<typeof addPostActionCreator>
// export type UpdateNewPostTextActionType = ReturnType<typeof onChangePostCreator>
// export type AddMessageActionType = ReturnType<typeof addMessageCreator>
type AddPostActionCreatorType = () => AddPostActionType
type OnChangePostActionCreatorType = (post: string) => UpdateNewPostTextActionType
type AddMessageCreatorType = (message: string) => AddMessageActionType

const ADD_MESSAGE = "ADD_MESSAGE"
const ADD_POST = 'ADD_POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'

export const addPostActionCreator: AddPostActionCreatorType = () => ({
  type: ADD_POST
})

// export const addPostActionCreator = () => {
//   return {
//     type: ADD_POST
//   } as const
// }

export const addMessageCreator: AddMessageCreatorType = (message) => ({
    type: ADD_MESSAGE,
    message: message
})

export const onChangePostCreator: OnChangePostActionCreatorType = (post) => ({
    type: UPDATE_NEW_POST_TEXT,
    post: post
})

export const store: StoreType = {
  _state: {
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
      ],
      newPostText: ''
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
  },
  _callSubscriber(state: StateType) {
    console.log('state')
  },
  getState() {
    return this._state
  },
  subscribe(observer: rerenderEntireTreeType) {
    this._callSubscriber = observer
  },
  dispatch(action: ActionType) {
    if (action.type === ADD_POST) {
      const newPost: PostItemType = {
        id: v1(),
        img: img,
        message: this._state.profilePage.newPostText,
        likesCount: 0
      }
      if (newPost.message) this._state.profilePage.myPostsData.push(newPost)
      this._state.profilePage.newPostText = ''
      this._callSubscriber(this._state)
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.post
      this._callSubscriber(this._state)
    } else if (action.type === ADD_MESSAGE) {
      const newMessage = {
        id: v1(),
        message: action.message
      }
      this._state.messagesPage.messagesData.push(newMessage)
      this._callSubscriber(this._state)
    }
  }
}


// window.store = store
