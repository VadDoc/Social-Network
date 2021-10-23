import {connect} from "react-redux";
import {StateType} from "../../../Redux/redux-store";
import {
  followUser, setCurrentPage, setToggleIsFetching, setTotalUsersCount,
  setUsers, unFollowUser, UserType
} from "../../../Redux/users-reduсer";
import axios from "axios";
import React from "react";
import {Users} from "./Users";
import {Preloader} from "../../Сommon/Preloader/Preloader";

type DataType = {
  error: null | string
  totalCount: number
  items: Array<UserType>
}
//базовые настройки запроса в axios
export const axiosInstance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0',
  withCredentials: true,
  headers: {
    'API-key': 'b1080483-6498-445e-9780-91e9c47f08f9'
  }
})

class UsersApiContainer extends React.Component <UsersPropsType> {
  componentDidMount() {
    this.props.setToggleIsFetch(true)
    axiosInstance.get<DataType>(`users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.setToggleIsFetch(false)
        this.props.setUser(response.data.items) // отправляем в store users
        this.props.setTotalUsersCount(response.data.totalCount) //отправляем в store кол-во users
      })
  }

  //запрос на сервер после изменения компоненты
  onChangedPage = (numberCurrentPage: number) => {
    this.props.setToggleIsFetch(true)
    this.props.setCurrentPage(numberCurrentPage) //отправляем в store кол-во номер текущей страницы
    axiosInstance.get<DataType>(`users?page=${numberCurrentPage}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.setToggleIsFetch(false)
        this.props.setUser(response.data.items) // отправляем в store users
      })
  }

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader/> :
          <Users
            users={this.props.users}
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            followUser={this.props.followUser}
            unFollowUser={this.props.unFollowUser}
            onChangedPage={this.onChangedPage}
          />}
      </>
    )
  }
}

type MapStateToPropsType = {
  users: Array<UserType>
  pageSize: number
  totalUsersCount: number
  currentPage: number
  isFetching: boolean
}
type MapDispatchToPropsType = {
  followUser: (userID: number) => void
  unFollowUser: (userID: number) => void
  setUser: (users: Array<UserType>) => void
  setCurrentPage: (numberCurrentPage: number) => void
  setTotalUsersCount: (totalUsersCount: number) => void
  setToggleIsFetch: (isFetching: boolean) => void
}
export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: StateType) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
  }
}
// const mapDispatchToProps = (dispatch: Dispatch) => {
//   return {
//     followUser: (userID: number) => {
//       dispatch(followUsersAC(userID))
//     },
//     unFollowUser: (userID: number) => {
//       dispatch(unFollowUsersAC(userID))
//     },
//     setUser: (users: Array<UserType>) => {
//       dispatch(setUsersAC(users))
//     },
//     setCurrentPage: (numberCurrentPage: number) => {
//       dispatch(setCurrentPageAC(numberCurrentPage))
//     },
//     setTotalUsersCount: (totalUsersCount: number) => {
//       dispatch(setTotalUsersCountAC(totalUsersCount))
//     },
//     setToggleIsFetch: (isFetching: boolean) => {
//       dispatch(setToggleIsFetchingAC(isFetching))
//     }
//   }
// }

export const UsersContainer = connect(mapStateToProps, {
  followUser,
  unFollowUser,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  setToggleIsFetching,
})(UsersApiContainer)




