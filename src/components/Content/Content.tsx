import React from 'react'
import {Redirect, Route} from 'react-router-dom'
import styles from "./Content.module.scss"
import {News} from "./News/News";
import {Music} from "./Music/Music";
import {Settings} from "./Settings/Settings";
import {MessageType} from "./Dialogs/Message/Message";
import {DialogPropsType} from "./Dialogs/Dialog/Dialog";
import {ActionsType} from "../../Redux/redux-store";
import {DialogsContainer} from "./Dialogs/DialogsContainer";
import {PostItemType} from "../../Redux/profile-reducer";
import {UsersContainer} from "./Users/UsersContainer";
import {ConnectedProfileContainer} from "./Profile/ProfileContainer";
import {Login} from "./Login/Login";

type ContentPropsType = {
  profilePage: {
    myPostsData: Array<PostItemType>
    newPostText: string
  }
  messagesPage: {
    dialogsData: Array<DialogPropsType>
    messagesData: Array<MessageType>
    newMessageText: string
  }
  dispatch: (action: ActionsType) => void
  newsPage: {}
  musicPage: {}
  settingsPage: {}
}

export const Content = (props: ContentPropsType) => {
  return (
    <main className={styles.content}>
      <Route path="/profile/:userId?" render={() => <ConnectedProfileContainer/>}/>
      <Route path="/dialogs" render={() => <DialogsContainer/>}/>
      <Route path="/users" render={() => <UsersContainer/>}/>
      <Route path="/news" render={() => <News/>}/>
      <Route path="/music" render={() => <Music/>}/>
      <Route path="/settings" render={() => <Settings/>}/>
      <Redirect from='/' to='/profile' />

      <Route path="/login" render={() => <Login/>}/>

    </main>
  )
}
