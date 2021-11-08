import React from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

const MapStateToPropsForRedirect = (state) => ({
  isAuth: state.auth.isAuth
})

export const withAuthRedirect = (Component: any) => {

  class RedirectComponent extends React.Component<any> {

    render() {
      // if (!this.props.isAuth) return <Redirect to = '/login' / >
      return <Component {...this.props} />
    }
  }

  const ConnectedAuthRedirectComponent = connect(MapStateToPropsForRedirect)(RedirectComponent)

  return ConnectedAuthRedirectComponent
}

