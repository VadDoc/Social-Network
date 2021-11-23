import React from 'react'
import {Redirect, Route, withRouter} from 'react-router-dom'
import styles from "./Content.module.scss"
import {News} from "./News/News";
import {Music} from "./Music/Music";
import {Settings} from "./Settings/Settings";
import {StateType} from "../../Redux/redux-store";
import Dialogs from "./Dialogs/DialogsContainer";
import Users from "./Users/UsersContainer";
import Profile from "./Profile/ProfileContainer";
import Login from "./Login/Login";
import {compose} from "redux";
import {connect} from "react-redux";
import {getAuthUserData} from "../../Redux/authReducer";

type MapDispatchToPropsType = {
  getAuthUserData: () => void
}
type MapStateToPropsType = {}

class Content extends React.Component<MapDispatchToPropsType & MapStateToPropsType> {
  componentDidMount() {
    this.props.getAuthUserData()
  }

  render() {
    return (
      <main className={styles.content}>
        <Route path="/profile/:userId?" render={() => <Profile/>}/>
        <Route path="/dialogs" render={() => <Dialogs/>}/>
        <Route path="/users" render={() => <Users/>}/>
        <Route path="/news" render={() => <News/>}/>
        <Route path="/music" render={() => <Music/>}/>
        <Route path="/settings" render={() => <Settings/>}/>
        <Route path="/login" render={() => <Login/>}/>
        <Redirect from='/' to='/profile'/>
      </main>
    )
  }
}

export default compose<React.ComponentType>(
  withRouter,
  connect<MapStateToPropsType, MapDispatchToPropsType, {}, StateType>
  (null, {getAuthUserData})
)(Content)
