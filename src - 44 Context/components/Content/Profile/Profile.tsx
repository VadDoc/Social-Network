import React from 'react'
import {PostItemType} from './MyPosts/MyPosts'
import styles from './Profile.module.scss'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionType} from "../../../Redux/redux-store";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";

type ProfilePropsType = {
  profilePage: {
    myPostsData: Array<PostItemType>
    newPostText: string
  }
  dispatch: (action: ActionType) => void
}

export const Profile = ({profilePage, dispatch}: ProfilePropsType) => {
  return (
    <div className={styles.profile}>
      <ProfileInfo/>
      <MyPostsContainer
        profilePage={profilePage}
        dispatch={dispatch}
      />
    </div>
  )
}
