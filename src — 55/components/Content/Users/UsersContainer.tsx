import {Users} from "./UsersClass";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {StateType} from "../../../Redux/redux-store";
import {
  followUsersAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC, unFollowUsersAC, UsersType
} from "../../../Redux/users-reduсer";

type MapStateToPropsType = {
  users: UsersType
  pageSize: number
  totalUsersCount: number
  currentPage: number
}

type MapDispatchToPropsType = {
  followUser: (userID: number) => void
  unFollowUser: (userID: number) => void
  setUser: (users: UsersType) => void
  setCurrentPage: (numberCurrentPage: number) => void
  setTotalUsersCount: (totalUsersCount: number) => void
}

export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: StateType) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    followUser: (userID: number) => {
      dispatch(followUsersAC(userID))
    },
    unFollowUser: (userID: number) => {
      dispatch(unFollowUsersAC(userID))
    },
    setUser: (users: UsersType) => {
      dispatch(setUsersAC(users))
    },
    setCurrentPage: (numberCurrentPage: number) => {
      dispatch(setCurrentPageAC(numberCurrentPage))
    },
    setTotalUsersCount: (totalUsersCount: number) => {
      dispatch(setTotalUsersCountAC(totalUsersCount))
    }

  }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)




