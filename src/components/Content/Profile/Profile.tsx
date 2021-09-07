import React from 'react'
import {MyPosts, PostItemType} from './MyPosts/MyPosts'
import styles from './Profile.module.scss'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

type ProfilePropsType = {
  profilePage: {
    myPostsData: Array<PostItemType>
  }
  addPost: (postMessage: string) => void
}

export const Profile = (props: ProfilePropsType) => {
  return (
    <div className={styles.profile}>
      <ProfileInfo/>
      <MyPosts
        myPostsData={props.profilePage.myPostsData}
        addPost={props.addPost}
      />
    </div>
  )
}
