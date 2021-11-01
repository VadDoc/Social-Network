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
  followUser: (id: number) => void
  unFollowUser: (id: number) => void
}


export const User: React.FC<UserPropsType> = ({
                                                userID, photos, name,
                                                status, followed, unFollowUser, followUser
                                              }) => {
  const followUserToButton = () => {
    api.followUser(userID)
      .then(data => {
        if (data.resultCode === 0) {
          followUser(userID)
        }
      })
  }
  const unFollowUserToButton = () => {
    api.unFollowUser(userID)
      .then(data => {
        if (data.resultCode === 0) {
          unFollowUser(userID)
        }
      })
  }

  return (
    <div className={styles.user}>
      <div className={styles.logo}>
        <NavLink to={`/profile/${userID}`}>
          <img src={photos.small ? photos.small : img} alt={''}/>
        </NavLink>
        {followed ?
          <button className={styles.buttonUnFollow} onClick={unFollowUserToButton}>Unfollow</button> :
          <button className={styles.buttonFollow} onClick={followUserToButton}>Follow</button>
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