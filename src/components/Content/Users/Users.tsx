import React from 'react'
import styles from './Users.module.scss'
import {UsersPropsType} from "./UsersContainer";
import {User} from "./User/User";
import axios from "axios";

type DataType = {
  error: null | string
  totalCount: number
  items: Array<UserType>
}
export type UserType = {
  name: string
  id: number
  uniqueUrlName: null | string
  photos: {
    small: null | string
    large: null | string
  }
  status: null | string
  followed: boolean
}

export const Users: React.FC<UsersPropsType> = ({users, followUser, unFollowUser, setUser}) => {
  const userItems = users.map(user => (
    <User
      key={user.id}
      name={user.name}
      userID={user.id}
      uniqueUrlName={user.uniqueUrlName}
      photos={user.photos}
      status={user.status}
      followed={user.followed}
      followUser={followUser}
      unFollowUser={unFollowUser}
    />
  ))

  if (userItems.length === 0) {
    axios.get<DataType>("https://social-network.samuraijs.com/api/1.0/users", {
      withCredentials: true,
      headers:{
        'API-key': 'b1080483-6498-445e-9780-91e9c47f08f9'
      }
    }).then(response => {
      setUser(response.data.items)
    })
  }

  return (
    <div className={styles.users}>
      {userItems}
    </div>
  )
}

