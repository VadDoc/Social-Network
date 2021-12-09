import React from 'react'
import styles from './Profile.module.scss'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {DataUserProfileType} from "../../../Redux/profile-reducer";

export const Profile = (props: PropsType) => {
  //в консоле см. свойство match в пропсах
  // console.log("Props: ", props)
  return (
    <div className={styles.profile}>
      <ProfileInfo
        userProfile={props.userProfile}
        userStatus={props.userStatus}
        updateStatus={props.updateStatus}
      />
      <MyPostsContainer/>
    </div>
  )
}

type PropsType = {
  userProfile: DataUserProfileType
  userStatus: string
  updateStatus: (userStatus: string) => void
}

