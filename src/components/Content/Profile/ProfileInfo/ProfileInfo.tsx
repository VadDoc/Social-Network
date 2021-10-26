import React, {useState} from 'react'
import styles from './ProfileInfo.module.scss'
import job from './../../../../images/job-logo.png'
import avatar from './../../../../images/ava.png'
import {DataUserProfileType} from "../../../../Redux/profile-reducer";
import {Preloader} from "../../../Сommon/Preloader/Preloader";

type PropsType = {
  userProfile: DataUserProfileType
}

export const ProfileInfo = ({userProfile}: PropsType) => {
  const [logo, setLogo] = useState(false)

  const showAvatar = () => {
    setLogo(true)
  }
  const hideAvatar = () => {
    setLogo(false)
  }
  return (
    <div className={styles.profileInfo}>
      <p>{userProfile.fullName}</p>
      <div className={styles.logoContainer}>
        {userProfile.photos ?
          <>
            <img
              className={styles.logoSmall}
              src={userProfile.photos.small ? userProfile.photos.small : avatar}
              onClick={userProfile.photos.small ? showAvatar : ()=>{}}
              alt={'avatar'}
            />
            {userProfile.lookingForAJob &&
            <img className={styles.job}
                 src={job}
                 onClick={userProfile.photos.small ? showAvatar : ()=>{}}
                 alt={'avatar'}/>
            }
          </>
          : <Preloader/>}
      </div>
      {userProfile.photos && logo ?
        <img
          className={styles.logoLarge}
          src={userProfile.photos.large}
          onClick={userProfile.photos.large ? hideAvatar : ()=>{} }
          alt={'avatar'}
        /> :
        ''}
    </div>
  )
}
