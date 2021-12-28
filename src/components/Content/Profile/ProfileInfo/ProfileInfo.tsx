import React, {ChangeEvent, useState} from 'react'
import styles from './ProfileInfo.module.scss'
import job from './../../../../images/job-logo.png'
import avatar from './../../../../images/ava.png'
import youtube from './../../../../images/youtube.png'
import github from './../../../../images/github.png'
import facebook from './../../../../images/facebook.png'
import instagram from './../../../../images/instagram.png'
import twitter from './../../../../images/twitter.png'
import vk from './../../../../images/vk.png'
import {DataUserProfileType} from "../../../../Redux/profile-reducer";
import {ProfileStatus} from "./ProfileStatus/ProfileStatus";
import {LoadingLine} from "../../../Сommon/loadingLine/LoadingLine";

export const ProfileInfo = ({userProfile, userStatus, updateStatus, isOwner, savePhoto}: PropsType) => {
  const [logo, setLogo] = useState(false)
  const contacts = userProfile.contacts

  const showAvatar = () => {
    setLogo(true)
  }
  const hideAvatar = () => {
    setLogo(false)
  }
  const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {

    if (e.target.files) {
      savePhoto(e.target.files[0])
      // console.log(typeof e.target.files[0])
    }
  }

  return (
    <div className={styles.profileInfo}>
      <h2>{userProfile.fullName}</h2>
      <div className={styles.wrapper}>
        <div className={styles.logoContainer}>
          {userProfile.photos ?
            <>
              <img className={styles.logoSmall}
                   src={userProfile.photos.small ? userProfile.photos.small : avatar}
                   onClick={userProfile.photos.small ? showAvatar : () => {
                   }}
                   alt={'avatar'}
              />
              {userProfile.lookingForAJob &&
              <img className={styles.job}
                   src={job}
                   onClick={userProfile.photos.small ? showAvatar : () => {
                   }}
                   alt={'avatar'}/>
              }
            </>
            : <LoadingLine/>}
          {userProfile.photos && logo ?
            <img className={styles.logoLarge}
                 src={userProfile.photos.large}
                 onClick={userProfile.photos.large ? hideAvatar : () => {
                 }}
                 alt={'avatar'}
            /> : ''}
        </div>
        {isOwner &&
        <div>
          <input type={'file'} onChange={onMainPhotoSelected}/>
        </div>
        }
        <div className={styles.descriptions}>
          <p>{userProfile.aboutMe}</p>
          <p>{userProfile.lookingForAJobDescription}</p>
        </div>
      </div>
      {contacts &&
      <div className={styles.socials}>
        {contacts.facebook && <a href={`${contacts.facebook}`}><img src={facebook} alt={'facebook'}/></a>}
        {contacts.twitter && <a href={`${contacts.twitter}`}><img src={twitter} alt={'twitter'}/></a>}
        {contacts.instagram && <a href={`${contacts.instagram}`}><img src={instagram} alt={'instagram'}/></a>}
        {contacts.vk && <a href={`${contacts.vk}`}><img src={vk} alt={'vk'}/></a>}
        {contacts.youtube && <a href={`${contacts.youtube}`}><img src={youtube} alt={'youtube'}/></a>}
        {contacts.github && <a href={`${contacts.github}`}><img src={github} alt={'github'}/></a>}
      </div>
      }
      <ProfileStatus status={userStatus} updateStatus={updateStatus}/>
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
