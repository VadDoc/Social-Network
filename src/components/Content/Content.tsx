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

type ContentPropsType = {
  profilePage: {
    myPostsData: Array<PostItemType>
  }
  messagesPage: {
    dialogsData: Array<DialogPropsType>
    messagesData: Array<MessageType>
  }
  addPost: (postMessage: string) => void
  addMessage: (message: string) => void
  newsPage: {}
  musicPage: {},
  settingsPage: {}
}

export const Content = (props: ContentPropsType) => {
    return (
        <main className={styles.content}>
            <Route path="/profile"
                   render={() => <Profile
                     profilePage={props.profilePage}
                     addPost={props.addPost}
                   />}
            />
            <Route path="/dialogs"
                   render={() => <Dialogs
                     messagesPage={props.messagesPage}
                     addMessage={props.addMessage}
                   />}
            />
            <Route path="/news" render={() => <News/>}/>
            <Route path="/music" render={() => <Music/>}/>
            <Route path="/settings" render={() => <Settings />}/>
        </main>
    )
}
