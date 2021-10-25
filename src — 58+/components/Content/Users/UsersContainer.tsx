import {connect} from "react-redux";
import {StateType} from "../../../Redux/redux-store";
import {
  followUser, setCurrentPage, setToggleIsFetch, setTotalUsersCount,
  setUsers, unFollowUser, UserType
} from "../../../Redux/users-reduсer";
import React from "react";
import {Users} from "./Users";
import {Preloader} from "../../Сommon/Preloader/Preloader";
import {axiosInstance} from "../../Сommon/AxiosInstance/axiosInstance";

type DataUsersType = {
  error: null | string
  totalCount: number
  items: Array<UserType>
}

class UsersApiContainer extends React.Component <UsersPropsType> {
  componentDidMount() {
    this.props.setToggleIsFetch(true) //меняем статус preloader
    axiosInstance.get<DataUsersType>(`users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.setToggleIsFetch(false)
        this.props.setUsers(response.data.items) // отправляем в store users
        this.props.setTotalUsersCount(response.data.totalCount) //отправляем в store кол-во users
      })
  }

  //запрос на сервер после изменения компоненты
  onChangedPage = (numberCurrentPage: number) => {
    this.props.setToggleIsFetch(true)  //меняем статус preloader
    this.props.setCurrentPage(numberCurrentPage) //отправляем в store кол-во номер текущей страницы
    axiosInstance.get<DataUsersType>(`users?page=${numberCurrentPage}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.setToggleIsFetch(false)
        this.props.setUsers(response.data.items) // отправляем в store users
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
  setUsers: (users: Array<UserType>) => void
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

export const UsersContainer = connect(mapStateToProps, {
  followUser, unFollowUser, setUsers, setCurrentPage, setTotalUsersCount, setToggleIsFetch,
})(UsersApiContainer)




