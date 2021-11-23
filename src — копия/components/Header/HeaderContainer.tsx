import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {StateType} from "../../Redux/redux-store";
import {logout} from "../../Redux/authReducer";

type MapStateToPropsType = {
  // id: null | number
  login: null | string
  // email: null | string
  isAuth: boolean
  title: string
}
type MapDispatchToPropsType = {
  logout: () => void
}
export type AuthPropsType = MapStateToPropsType & MapDispatchToPropsType

class HeaderContainer extends React.Component<AuthPropsType> {
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
    isAuth: state.auth.isAuth,
    title: state.auth.title
  }
}

export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, StateType>
(mapStateToProps, {logout})(HeaderContainer)