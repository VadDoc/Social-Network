import {connect} from "react-redux";
import {StateType} from "../../../Redux/redux-store";
import {
  follow, getUsersOnChange, requestUsers, setCurrentPage, unFollow, UserType
} from "../../../Redux/users-reduсer";
import React from "react";
import {Users} from "./Users";
import {Preloader} from "../../Сommon/Preloader/Preloader";
import {
  currentPage,
  followingInProgress,
  getUsers, isFetching,
  pageSize,
  totalUsersCount
} from "../../../Redux/users-selectors";

type MapStateToPropsType = {
  users: Array<UserType>
  pageSize: number
  totalUsersCount: number
  currentPage: number
  isFetching: boolean
  followingInProgress: number[]
}
type MapDispatchToPropsType = {
  follow: (userID: number) => void
  unFollow: (userID: number) => void
  setCurrentPage: (numberCurrentPage: number) => void
  requestUsers: (currentPage: number,pageSize: number) => any
  getUsersOnChange: (numberCurrentPage: number,pageSize: number) => any
}
export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType

class UsersApiContainer extends React.Component <UsersPropsType> {
  componentDidMount() {
    this.props.requestUsers(this.props.currentPage, this.props.pageSize)
  }

  //запрос на сервер после изменения компоненты
  onChangedPage = (numberCurrentPage: number) => {
    this.props.getUsersOnChange(numberCurrentPage, this.props.pageSize)
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
            follow={this.props.follow}
            unFollow={this.props.unFollow}
            onChangedPage={this.onChangedPage}
            followingInProgress={this.props.followingInProgress}
          />}
      </>
    )
  }
}

const mapStateToProps = (state: StateType) => {
  return {
    users: getUsers(state),
    pageSize: pageSize(state),
    totalUsersCount: totalUsersCount(state),
    currentPage: currentPage(state),
    isFetching: isFetching(state),
    followingInProgress: followingInProgress(state),
  }
}

// const mapStateToProps = (state: StateType) => {
//   return {
//     users: state.usersPage.users,
//     pageSize: state.usersPage.pageSize,
//     totalUsersCount: state.usersPage.totalUsersCount,
//     currentPage: state.usersPage.currentPage,
//     isFetching: state.usersPage.isFetching,
//     followingInProgress: state.usersPage.followingInProgress
//   }
// }

//connect из actionCreators создаст колбеки и вернет с теми же названиями
export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, StateType>
(mapStateToProps, {
  follow, unFollow, setCurrentPage, requestUsers, getUsersOnChange
})(UsersApiContainer)




