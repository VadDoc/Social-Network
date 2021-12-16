import React, {ComponentType} from 'react'
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {StateType} from "../Redux/redux-store";

//типизация хок, типизация hoc, типизация контейнерной компоненты

type MapStateToPropsType = {
  isAuth: boolean
}

const mapStateToProps = (state: StateType): MapStateToPropsType => {
  return {
    isAuth: state.auth.isAuth
  }
}

export function withAuthRedirect<T>(Component: ComponentType<T>) {

  const RedirectComponent = (props: MapStateToPropsType) => {
    const {isAuth, ...restProps} = props
    if(!isAuth) return <Redirect to='/login' />

    return <Component {...restProps as T} />
  }

  return connect(mapStateToProps)(RedirectComponent)
}