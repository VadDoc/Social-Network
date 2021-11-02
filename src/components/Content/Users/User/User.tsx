import React from 'react'
import {NavLink} from 'react-router-dom'
import styles from './User.module.scss'
import img from '../../../../images/ava.png'
import {api} from "../../../../api/api";

type UserPropsType = {
  userID: number
  name: string
  uniqueUrlName: null | string
  photos: {
    small: null | string
    large: null | string
  }
  status: null | string
  followed: boolean
  followingInProgress: number[]
  followUser: (id: number) => void
  unFollowUser: (id: number) => void
  toggleFollowingProgress: (userId: number, isFetching: boolean) => void
}


export const User: React.FC<UserPropsType> = ({
                                                userID, photos, name,
                                                status, followed, unFollowUser, followUser,
                                                toggleFollowingProgress, followingInProgress
                                              }) => {
  const followUserToButton = () => {
    toggleFollowingProgress(userID, true) //disable кнопку
    api.followUser(userID)
      .then(data => {
        if (data.resultCode === 0) {
          followUser(userID)
        }
        toggleFollowingProgress(userID, false) //unDisable кнопку
      })
  }
  const unFollowUserToButton = () => {
    toggleFollowingProgress(userID, true)
    api.unFollowUser(userID)
      .then(data => {
        if (data.resultCode === 0) {
          unFollowUser(userID)
        }
        toggleFollowingProgress(userID, false)
      })
  }

  return (
    <div className={styles.user}>
      <div className={styles.logo}>
        <NavLink to={`/profile/${userID}`}>
          <img src={photos.small ? photos.small : img} alt={''}/>
        </NavLink>
        {followed ?
          <button
            disabled={followingInProgress.some(id => id === userID)}
            className={styles.buttonUnFollow}
            onClick={unFollowUserToButton}
          >Unfollow</button> :
          <button
            disabled={followingInProgress.some(id => id === userID)}
            className={styles.buttonFollow}
            onClick={followUserToButton}
          >Follow</button>
        }
      </div>
      <div className={styles.info}>
        <div>
          <div>{name}</div>
          <div>{status}</div>
        </div>
        <div>
          {/*<div>{location.country}</div>*/}
          {/*<div>{location.city}</div>*/}
        </div>
      </div>
    </div>
  )
}