import {Users} from "./Users";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {StateType} from "../../../Redux/redux-store";
import {followUsersAC, setUsersAC, unFollowUsersAC, UsersType
} from "../../../Redux/users-reduсer";

type MapStateToPropsType = {
  users: UsersType
}

type MapDispatchToPropsType = {
  followUser: (userID: number) => void
  unFollowUser: (userID: number) => void
  setUser: (users: UsersType) => void
}

export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: StateType) => {
  return {
    users: state.usersPage.users
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
    }
  }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)




