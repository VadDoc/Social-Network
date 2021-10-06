import React from 'react'
import {Button} from "../../Button/Button";
import styles from './User.module.scss'

type UserPropsType = {
  userID: string
  avatar: string
  firstName: string
  lastName: string
  status: string
  isFollowed: boolean
  location: { country: string, city: string }
  followUser: (id: string) => void
  unFollowUser: (id: string) => void
}

export const User: React.FC<UserPropsType> = ({
                                                userID, avatar, firstName,
                                                lastName, status, location,
                                                isFollowed, unFollowUser, followUser
                                              }) => {
  const toggleFollowUser = () => isFollowed ? unFollowUser(userID) : followUser(userID)
  const titleButton = isFollowed ? 'Unfollow' : 'Follow'
  // const buttonClassName = {color: 'green'}

  return (
    <div className={styles.user}>
      <div className={styles.logo}>
        <img src={avatar} alt={''}/>
        <Button className={'buttonFollow'}  callBack={toggleFollowUser}>{titleButton}</Button>
      </div>
      <div className={styles.info}>
        <div>
          <div>{firstName} {lastName}</div>
          <div>{status}</div>
        </div>
        <div>
          <div>{location.country}</div>
          <div>{location.city}</div>
        </div>
      </div>
    </div>
  )
}