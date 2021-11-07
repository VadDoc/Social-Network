import React from 'react'
import {NavLink} from 'react-router-dom'
import styles from './User.module.scss'
import img from '../../../../images/ava.png'

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
  follow: (id: number) => void
  unFollow: (id: number) => void
}

export const User: React.FC<UserPropsType> = ({
                                                userID, photos, name,
                                                status, followed, unFollow, follow,
                                                followingInProgress
                                              }) => {

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
            onClick={() => unFollow(userID)}
          >Unfollow</button> :
          <button
            disabled={followingInProgress.some(id => id === userID)}
            className={styles.buttonFollow}
            onClick={() => follow(userID)}
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