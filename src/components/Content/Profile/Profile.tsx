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
        isOwner = {props.isOwner}
        userProfile={props.userProfile}
        userStatus={props.userStatus}
        updateStatus={props.updateStatus}
        savePhoto={props.savePhoto}
      />
      <MyPostsContainer/>
    </div>
  )
}

type PropsType = {
  isOwner: boolean
  userProfile: DataUserProfileType
  userStatus: string
  updateStatus: (userStatus: string) => void
  savePhoto: (photos: File) => void
}

