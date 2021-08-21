import React from 'react'
import { Route } from 'react-router-dom'
import styles from "./Content.module.scss"
import { Profile } from './Profile/Profile'

export const Content = () => {
  return (
    <main className={styles.content}>
      <Route path="/profile" render={() => <Profile />} />

      {/* <Route path="/news" render={() => <News />} />
      <Route path="/musics" render={() => <Musics />} />
      <Route path="/settings" render={() => <Settings />} /> */}
    </main>
  )
}
