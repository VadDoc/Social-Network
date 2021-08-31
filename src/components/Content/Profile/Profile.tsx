import React from 'react'
import {MyPosts, PostItemType} from './MyPosts/MyPosts'
import styles from './Profile.module.scss'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

export type ProfilePropsType = {
  myPostsData: Array<PostItemType>
}

export const Profile = (props: ProfilePropsType) => {
  return (
    <div className={styles.profile}>
      <ProfileInfo/>
      <MyPosts myPostsData={props.myPostsData}/>
    </div>
  )
}
