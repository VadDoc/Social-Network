import React from 'react'
import {MyPosts, PostItemType} from './MyPosts/MyPosts'
import styles from './Profile.module.scss'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionType} from "../../../Redux/state";

type ProfilePropsType = {
  profilePage: {
    myPostsData: Array<PostItemType>
    newPostText: string
  }
  dispatch: (action: ActionType) => void
}

export const Profile = (props: ProfilePropsType) => {
  return (
    <div className={styles.profile}>
      <ProfileInfo/>
      <MyPosts
        profilePage={props.profilePage}
        dispatch={props.dispatch}
      />
    </div>
  )
}
