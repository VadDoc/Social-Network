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

export class Users extends React.Component <UsersPropsType> {
  componentDidMount() {
    axios.get<DataType>("https://social-network.samuraijs.com/api/1.0/users", {
      withCredentials: true,
      headers: {
        'API-key': 'b1080483-6498-445e-9780-91e9c47f08f9'
      }
    }).then(response => {
      this.props.setUser(response.data.items)
    })
  }

  render() {
    return (
      <div className={styles.users}>
        {this.props.users.map(user => (
          <User
            key={user.id}
            name={user.name}
            userID={user.id}
            uniqueUrlName={user.uniqueUrlName}
            photos={user.photos}
            status={user.status}
            followed={user.followed}
            followUser={this.props.followUser}
            unFollowUser={this.props.unFollowUser}
          />
        ))}
      </div>
    )
  }
}


