import {combineReducers, createStore} from "redux";
import {AddPostActionType, profileReducer, UpdateNewPostTextActionType} from "./profile-reducer";
import {AddMessageActionType, dialogsReducer, UpdateNewMessageTextActionType} from "./dialogs-reducer";
import {navbarReducer} from "./navbar-reducer";
import {musicReducer} from "./music-reduсer";
import {settingsReducer} from "./settings-reduсer";
import {newsReducer} from "./news-reduсer";
import {FollowUsersActionType, SetUsersActionType, UnFollowUsersActionType, usersReducer} from "./users-reduсer";

export type ActionType = AddPostActionType | UpdateNewPostTextActionType |
  AddMessageActionType | UpdateNewMessageTextActionType |
  UnFollowUsersActionType | FollowUsersActionType | SetUsersActionType
//rootReducer возвращает State всего приложения
export type StateType = ReturnType<typeof rootReducer>

let rootReducer = combineReducers({
  profilePage: profileReducer,
  messagesPage: dialogsReducer,
  usersPage: usersReducer,
  navBar: navbarReducer,
  newsPage: newsReducer,
  musicPage: musicReducer,
  settingsPage: settingsReducer
})

export let store = createStore(rootReducer)
