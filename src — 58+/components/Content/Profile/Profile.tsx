import React from 'react'
import styles from './Profile.module.scss'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";

type PropsType = {

}

export const Profile = (props: PropsType) => {
  return (
    <div className={styles.profile}>
      <ProfileInfo/>
      <MyPostsContainer/>
    </div>
  )
}
