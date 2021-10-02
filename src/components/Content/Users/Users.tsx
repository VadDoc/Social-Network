import React from 'react'
import styles from './Users.module.scss'
import {UsersPropsType} from "./UsersContainer";
import {User} from "./User/User";
import {v1} from "uuid";
import img1 from "../../../images/ava1.jpeg";
import img2 from "../../../images/ava2.jpeg";
import img3 from "../../../images/ava3.jpeg";

export const Users: React.FC<UsersPropsType> = ({users, followUser, unFollowUser, setUser}) => {
  const userItems = users.map(user => (
    <User
      key={user.userID}
      avatar={user.avatar}
      userID={user.userID}
      firstName={user.firstName}
      lastName={user.lastName}
      status={user.status}
      isFollowed={user.isFollowed}
      location={user.location}
      followUser={followUser}
      unFollowUser={unFollowUser}
    />
  ))
  if(userItems.length===0) {
    setUser([
      {
        userID: v1(),
        avatar: img1,
        isFollowed: false,
        status: 'I am exited',
        firstName: 'Jane',
        lastName: 'Brown',
        location: {country: 'US', city: 'New York'}
      },
      {
        userID: v1(),
        avatar: img2,
        isFollowed: false,
        status: 'I am fine',
        firstName: 'Anna',
        lastName: 'Bilyk',
        location: {country: 'Ukraine', city: 'Kyiv'}
      },
      {
        userID: v1(),
        avatar: img3,
        isFollowed: false,
        status: 'I am relax',
        firstName: 'Michel',
        lastName: 'Bones',
        location: {country: 'France', city: 'Bordo'}
      },
    ])
  }

  return (
    <div className={styles.users}>
      {userItems}
    </div>
  )
}

