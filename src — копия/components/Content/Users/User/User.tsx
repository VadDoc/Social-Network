import React from 'react'
import {NavLink} from 'react-router-dom'
import styles from './User.module.scss'
import img from '../../../../images/ava.png'
import {UserType} from "../../../../Redux/users-reduсer";

export const User: React.FC<UserPropsType> = (props) => {
  const {user, unFollow, follow, followingInProgress} = props
  return (
    <div className={styles.user}>
      <div className={styles.logo}>
        <NavLink to={`/profile/${user.id}`}>
          <img src={user.photos.small ? user.photos.small : img} alt={''}/>
        </NavLink>
        {user.followed ?
          <button
            disabled={followingInProgress.some(id => id === user.id)}
            className={styles.buttonUnFollow}
            onClick={() => unFollow(user.id)}
          >Unfollow</button> :
          <button
            disabled={followingInProgress.some(id => id === user.id)}
            className={styles.buttonFollow}
            onClick={() => follow(user.id)}
          >Follow</button>
        }
      </div>
      <div className={styles.info}>
        <div>
          <div>{user.name}</div>
          <div>{user.status}</div>
        </div>
        <div>
          {/*<div>{location.country}</div>*/}
          {/*<div>{location.city}</div>*/}
        </div>
      </div>
    </div>
  )
}

type UserPropsType = {
  user: UserType
  followingInProgress: number[]
  follow: (id: number) => void
  unFollow: (id: number) => void
}