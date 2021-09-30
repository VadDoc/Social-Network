import {combineReducers, createStore} from "redux";
import {AddPostActionType, profileReducer, UpdateNewPostTextActionType} from "./profile-reducer";
import {AddMessageActionType, dialogsReducer, UpdateNewMessageTextActionType} from "./dialogs-reducer";
import {navbarReducer} from "./navbar-reducer";
import {musicReducer} from "./music-reduсer";
import {settingsReducer} from "./settings-reduсer";
import {newsReducer} from "./news-reduсer";
import {NavigationType} from "../components/Navbar/Navbar";
import {PostItemType} from "../components/Content/Profile/MyPosts/MyPosts";
import {DialogPropsType} from "../components/Content/Dialogs/Dialog/Dialog";
import {MessageType} from "../components/Content/Dialogs/Message/Message";

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
export type ActionType = AddPostActionType | UpdateNewPostTextActionType |
  AddMessageActionType | UpdateNewMessageTextActionType

let rootReducer = combineReducers({
  profilePage: profileReducer,
  messagesPage: dialogsReducer,
  navBar: navbarReducer,
  newsPage: newsReducer,
  musicPage: musicReducer,
  settingsPage: settingsReducer
})

export let store = createStore(rootReducer)

export type StoreType = typeof store
export type AppStateType = ReturnType<typeof rootReducer>