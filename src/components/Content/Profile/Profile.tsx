import React from 'react'
import {MyPosts} from './MyPosts/MyPosts'
import styles from './Profile.module.scss'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

export const Profile = () => {
  return (
    <div className={styles.profile}>
      <ProfileInfo/>
      <MyPosts/>
    </div>
  )
}
