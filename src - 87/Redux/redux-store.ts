import {applyMiddleware, combineReducers, createStore} from "redux";
import {profileReducer, ProfileReducerActionsType} from "./profile-reducer";
import {dialogsReducer, DialogsReducerActionsType} from "./dialogs-reducer";
import {navbarReducer} from "./navbar-reducer";
import {musicReducer} from "./music-reduсer";
import {settingsReducer} from "./settings-reduсer";
import {newsReducer} from "./news-reduсer";
import {usersReducer, UsersReducerActionsType} from "./users-reduсer";
import {authReducer} from "./auth-reducer";
import thunkMiddleware from "redux-thunk"
import { reducer as formReducer } from 'redux-form'
import {appReducer} from "./app-reducer";

export type StateType = ReturnType<typeof rootReducer>
export type ActionsType = ProfileReducerActionsType | DialogsReducerActionsType | UsersReducerActionsType

let rootReducer = combineReducers({
  profilePage: profileReducer,
  messagesPage: dialogsReducer,
  usersPage: usersReducer,
  navBar: navbarReducer,
  newsPage: newsReducer,
  musicPage: musicReducer,
  settingsPage: settingsReducer,
  auth: authReducer,
  form: formReducer,
  app: appReducer
})

export let store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

// @ts-ignore
window.store = store // for dev
