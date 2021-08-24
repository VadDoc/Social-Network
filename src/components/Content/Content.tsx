import React from 'react'
import {Route} from 'react-router-dom'
import styles from "./Content.module.scss"
import {Profile} from './Profile/Profile'
import {Dialogs} from "./Dialogs/Dialogs";
import {News} from "./News/News";
import {Music} from "./Music/Music";
import {Settings} from "./Settings/Settings";

export const Content = () => {
    return (
        <main className={styles.content}>
            <Route path="/profile" render={() => <Profile/>}/>
            <Route path="/dialogs" render={() => <Dialogs/>}/>
            <Route path="/news" render={() => <News/>}/>
            <Route path="/music" render={() => <Music/>}/>
            <Route path="/settings" render={() => <Settings />}/>
        </main>
    )
}
