import {combineReducers, createStore} from "redux";
import {profileReducer, ProfileReducerActionsType} from "./profile-reducer";
import {dialogsReducer, DialogsReducerActionsType} from "./dialogs-reducer";
import {navbarReducer} from "./navbar-reducer";
import {musicReducer} from "./music-reduсer";
import {settingsReducer} from "./settings-reduсer";
import {newsReducer} from "./news-reduсer";
import {usersReducer, UsersReducerActionsType} from "./users-reduсer";

export type StateType = ReturnType<typeof rootReducer>
export type ActionsType = ProfileReducerActionsType | DialogsReducerActionsType | UsersReducerActionsType

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

// @ts-ignore
window.store = store // for dev
