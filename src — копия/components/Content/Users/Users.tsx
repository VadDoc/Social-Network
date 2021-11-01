import React from 'react'
import styles from "./Users.module.scss";
import {User} from "./User/User";
import {UserType} from "../../../Redux/users-reduсer";

type PropsType = {
  users: Array<UserType>
  pageSize: number
  totalUsersCount: number
  currentPage: number
  followUser: (userID: number) => void
  unFollowUser: (userID: number) => void
  onChangedPage: (numberCurrentPage: number) => void
}

export const Users = (props: PropsType) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
  let numberPages = []
  // for (let i = 1; i <= pagesCount; i++) {
  for (let i = 1; i <= 16; i++) {
    numberPages.push(i)
  }
  return (
    <div className={styles.users}>
      <div className={styles.numberPages}>
        {numberPages.map(num => (
          <div
            key={num}
            className={props.currentPage === num ? `${styles.numberPage} ${styles.selected}` : styles.numberPage}
            onClick={() => {
              props.onChangedPage(num)
            }}
          >
            {num}
          </div>
        ))}
      </div>
      {props.users.map(user => (
        <User
          key={user.id}
          name={user.name}
          userID={user.id}
          uniqueUrlName={user.uniqueUrlName}
          photos={user.photos}
          status={user.status}
          followed={user.followed}
          followUser={props.followUser}
          unFollowUser={props.unFollowUser}
        />
      ))}
    </div>
  )
}