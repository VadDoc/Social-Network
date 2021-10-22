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

//базовые настройки запроса в axios
export const axiosInstance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0',
  withCredentials: true,
  headers: {
    'API-key': 'b1080483-6498-445e-9780-91e9c47f08f9'
  }
})

export class Users extends React.Component <UsersPropsType> {
  componentDidMount() {
    // //запрос на сервер после создания компоненты
    // axios.get<DataType>(
    //   `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, {
    //     withCredentials: true,
    //     headers: {
    //       'API-key': 'b1080483-6498-445e-9780-91e9c47f08f9'
    //     }
    //   }).then(response => {
    //   this.props.setUser(response.data.items) // отправляем в store users
    //   this.props.setTotalUsersCount(response.data.totalCount) //отправляем в store кол-во users
    // })

    axiosInstance.get<DataType>(`users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.setUser(response.data.items) // отправляем в store users
        this.props.setTotalUsersCount(response.data.totalCount) //отправляем в store кол-во users
    })

  }

  //запрос на сервер после изменения компоненты
  onChangedPage = (numberCurrentPage: number) => {
    this.props.setCurrentPage(numberCurrentPage) //отправляем в store кол-во номер текущей страницы
    // axios.get<DataType>(
    //   `https://social-network.samuraijs.com/api/1.0/users?page=${numberCurrentPage}&count=${this.props.pageSize}`, {
    //     withCredentials: true,
    //     headers: {
    //       'API-key': 'b1080483-6498-445e-9780-91e9c47f08f9'
    //     }
    //   }).then(response => {
    //   this.props.setUser(response.data.items)
    // })

    axiosInstance.get<DataType>(`users?page=${numberCurrentPage}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.setUser(response.data.items) // отправляем в store users
      })
  }

  render() {
    let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
    let numberPages = []
    for (let i = 1; i <= pagesCount; i++) {
      numberPages.push(i)
    }

    return (
      <div className={styles.users}>
        <div className={styles.numberPages}>
          {numberPages.map(num => (
            <div
              className={this.props.currentPage === num ? `${styles.numberPage} ${styles.selected}` : styles.numberPage}
              onClick={() => {
                this.onChangedPage(num)
              }}
            >
              {num}
            </div>
          ))}
        </div>
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


