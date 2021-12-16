import React from 'react'
import styles from "./Users.module.scss";
import {User} from "./User/User";
import {UserType} from "../../../Redux/users-reduсer";
import {Paginator} from "../../Сommon/Paginator/Paginator";

export const Users = (props: PropsType) => {
  const {users, currentPage, pageSize, totalUsersCount, onChangedPage, follow, unFollow, followingInProgress} = props

  return (
    <div className={styles.users}>
      <Paginator
        currentPage={currentPage}
        pageSize={pageSize}
        totalItemsCount={totalUsersCount}
        onChangedPage={onChangedPage}/>
      <div>
        {users.map(user => (
          <User
            user={user}
            key={user.id}
            follow={follow}
            unFollow={unFollow}
            followingInProgress={followingInProgress}
          />
        ))}
      </div>
    </div>
  )
}

type PropsType = {
  users: Array<UserType>
  pageSize: number
  totalUsersCount: number
  currentPage: number
  followingInProgress: number[]
  follow: (userID: number) => void
  unFollow: (userID: number) => void
  onChangedPage: (numberCurrentPage: number) => void
}