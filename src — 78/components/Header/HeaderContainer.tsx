import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {StateType} from "../../Redux/redux-store";
import {getAuthUserData, logout} from "../../Redux/authReducer";

type MapStateToPropsType = {
  // id: null | number
  login: null | string
  // email: null | string
  isAuth: boolean
}
type MapDispatchToPropsType = {
  getAuthUserData: () => void
  logout: () => void
}
export type AuthPropsType = MapStateToPropsType & MapDispatchToPropsType

class HeaderContainer extends React.Component<AuthPropsType> {
  componentDidMount() {
    this.props.getAuthUserData()
  }

  render() {
    return (
      <Header {...this.props}/>
    )
  }
}

const mapStateToProps = (state: StateType) => {
  return {
    // id: state.auth.id,
    login: state.auth.login,
    // email: state.auth.email,
    isAuth: state.auth.isAuth
  }
}

export const ConnectedHeaderContainer = connect<MapStateToPropsType, MapDispatchToPropsType, {}, StateType>
(mapStateToProps, {getAuthUserData, logout})(HeaderContainer)