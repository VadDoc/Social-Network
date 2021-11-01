import React from "react";
import {Header} from "./Header";
import {axiosInstance} from "../Сommon/AxiosInstance/axiosInstance";
import {connect} from "react-redux";
import {StateType} from "../../Redux/redux-store";
import {setAuthUserData} from "../../Redux/authReducer";

type DataAuthType = {
  data: {
    id: number
    login: string
    email: string
  },
  messages: [],
  fieldsErrors: [],
  resultCode: number
}

class HeaderContainer extends React.Component<AuthPropsType> {
  componentDidMount() {
    axiosInstance.get<DataAuthType>(`auth/me`)
      .then(response => {
        if(response.data.resultCode === 0) {
          const {id, login, email} = response.data.data
          this.props.setAuthUserData(id, login, email)
        }
      })
  }

  render() {
    return (
      <Header {...this.props}/>
    )
  }
}

type MapStateToPropsType = {
  // id: null | number
  login: null | string
  // email: null | string
  isAuth: boolean
}
type MapDispatchToPropsType = {
  setAuthUserData: (userId: number, login: string, email: string) => void
}
export type AuthPropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: StateType) => {
  return {
    // id: state.auth.id,
    login: state.auth.login,
    // email: state.auth.email,
    isAuth: state.auth.isAuth
  }
}

export const ConnectedHeaderContainer = connect<MapStateToPropsType, MapDispatchToPropsType, {}, StateType>
(mapStateToProps, {setAuthUserData})(HeaderContainer)