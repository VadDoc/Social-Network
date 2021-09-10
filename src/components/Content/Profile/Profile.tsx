import React from 'react'
import {MyPosts, PostItemType} from './MyPosts/MyPosts'
import styles from './Profile.module.scss'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

type ProfilePropsType = {
  profilePage: {
    myPostsData: Array<PostItemType>
    newPostText: string
  }
  updateNewPostText: (post: string) => void
  addPost: () => void
}

export const Profile = (props: ProfilePropsType) => {
  return (
    <div className={styles.profile}>
      <ProfileInfo/>
      <MyPosts
        profilePage={props.profilePage}
        updateNewPostText={props.updateNewPostText}
        addPost={props.addPost}
      />
    </div>
  )
}
