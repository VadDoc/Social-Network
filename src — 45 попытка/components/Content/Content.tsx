import React from 'react'
import {Route} from 'react-router-dom'
import styles from "./Content.module.scss"
import {Profile} from './Profile/Profile'
import {Dialogs} from "./Dialogs/Dialogs";
import {News} from "./News/News";
import {Music} from "./Music/Music";
import {Settings} from "./Settings/Settings";
import {PostItemType} from "./Profile/MyPosts/MyPosts";
import {MessageType} from "./Dialogs/Message/Message";
import {DialogPropsType} from "./Dialogs/Dialog/Dialog";
import {ActionType} from "../../Redux/redux-store";

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
  dispatch: (action: ActionType) => void
  newsPage: {}
  musicPage: {}
  settingsPage: {}
}

export const Content = (props: ContentPropsType) => {
    return (
        <main className={styles.content}>
            <Route path="/profile" render={() => <Profile/>} />
            <Route path="/dialogs"
                   render={() => <Dialogs
                     messagesPage={props.messagesPage}
                   />}
            />
            <Route path="/news" render={() => <News/>}/>
            <Route path="/music" render={() => <Music/>}/>
            <Route path="/settings" render={() => <Settings />}/>
        </main>
    )
}
