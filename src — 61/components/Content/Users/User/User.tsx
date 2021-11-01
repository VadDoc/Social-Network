import React from 'react'
import {NavLink} from 'react-router-dom'
import {Button} from "../../Button/Button";
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
  followUser: (id: number) => void
  unFollowUser: (id: number) => void
}

export const User: React.FC<UserPropsType> = ({
                                                userID, photos, name,
                                                status, followed,
                                                unFollowUser, followUser
                                              }) => {
  const toggleFollowUser = () => followed ? unFollowUser(userID) : followUser(userID)
  const titleButton = followed ? 'Unfollow' : 'Follow'

  return (
    <div className={styles.user}>
      <div className={styles.logo}>
        <NavLink to={`/profile/${userID}`}>
          <img src={photos.small ? photos.small : img} alt={''}/>
        </NavLink>
        <Button className={'buttonFollow'} callBack={toggleFollowUser}>{titleButton}</Button>
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