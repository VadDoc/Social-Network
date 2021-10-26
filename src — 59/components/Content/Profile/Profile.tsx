import React from 'react'
import styles from './Profile.module.scss'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {DataUserProfileType} from "../../../Redux/profile-reducer";

type PropsType = {
  userProfile: DataUserProfileType
}

export const Profile = (props: PropsType) => {
  return (
    <div className={styles.profile}>
      <ProfileInfo userProfile={props.userProfile}/>
      <MyPostsContainer/>
    </div>
  )
}
