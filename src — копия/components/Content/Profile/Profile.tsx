import React from 'react'
import styles from './Profile.module.scss'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";

export const Profile = () => {
  return (
    <div className={styles.profile}>
      <ProfileInfo/>
      <MyPostsContainer/>
    </div>
  )
}
