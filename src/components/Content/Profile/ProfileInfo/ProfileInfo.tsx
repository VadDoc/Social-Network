import React, {useState} from 'react'
import styles from './ProfileInfo.module.scss'
import job from './../../../../images/job-logo.png'
import {DataUserProfileType} from "../../../../Redux/profile-reducer";
import {Preloader} from "../../../Сommon/Preloader/Preloader";

type PropsType = {
  userProfile: DataUserProfileType
}

export const ProfileInfo = ({userProfile}: PropsType) => {
  const [logo, setLogo] = useState(false)

  const showLogo = () => {
    setLogo(true)
  }
  const hideLogo = () => {
    setLogo(false)
  }
  return (
    <div className={styles.profileInfo}>
      <p>{userProfile.fullName}</p>
      <div className={styles.logoContainer}>
        {userProfile.photos ?
          <>
            <img className={styles.logoSmall} src={userProfile.photos.small} onClick={showLogo} alt={'img'}/>
            {userProfile.lookingForAJob && <img className={styles.job} src={job} onClick={showLogo} alt={'img'}/>}
          </>
          : <Preloader/>}
      </div>
      {userProfile.photos && logo ?
        <img className={styles.logoLarge} src={userProfile.photos.large} onClick={hideLogo} alt={'img'}/> : ''}
    </div>
  )
}
