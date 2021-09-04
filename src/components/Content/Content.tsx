import React from 'react'
import {Route} from 'react-router-dom'
import styles from "./Content.module.scss"
import {Profile} from './Profile/Profile'
import {DialogPropsType, Dialogs, MessagePropsType} from "./Dialogs/Dialogs";
import {News} from "./News/News";
import {Music} from "./Music/Music";
import {Settings} from "./Settings/Settings";
import {PostItemType} from "./Profile/MyPosts/MyPosts";

type ContentPropsType = {
  profilePage: {
    myPostsData: Array<PostItemType>
  }

  messagesPage: {
    dialogsData: Array<DialogPropsType>
    messagesData: Array<MessagePropsType>
  }

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
                   />}
            />
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
