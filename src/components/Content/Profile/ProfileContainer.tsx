import React from 'react'
import styles from './Profile.module.scss'
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {StateType} from "../../../Redux/redux-store";
import {DataUserProfileType, getUserProfilePage} from "../../../Redux/profile-reducer";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";

//типизация withRouter
//https://stackoverflow.com/questions/48219432/react-router-typescript-errors-on-withrouter-after-updating-version
type PathParamsType = {
  userId: string // = let userId = this.props.match.params.userId
}
type PropsType = RouteComponentProps<PathParamsType> & ProfileApiPropsType

type MapStateToPropsType = {
  userProfile: DataUserProfileType
  isAuth: boolean
}
type MapDispatchToPropsType = {
  getUserProfilePage: (userId: string) => void
}
type ProfileApiPropsType = MapStateToPropsType & MapDispatchToPropsType

class ProfileApiContainer extends React.Component<PropsType> {

  componentDidMount() {
    //читаем из URL userId
    let userId = this.props.match.params.userId
    // console.log("ProfileApiContainer Props: ", this.props)
    //если profile/
    if (!userId) {
      userId = '2'
      // userId = '20056'
    }
    this.props.getUserProfilePage(userId)
  }

  render() {
    if(!this.props.isAuth) return <Redirect to='/login' />
    return (
      <div className={styles.profile}>
        <Profile {...this.props} userProfile={this.props.userProfile}/>
      </div>
    )
  }
}

const mapStateToProps = (state: StateType): MapStateToPropsType => {

  return {
    userProfile: state.profilePage.userProfile,
    isAuth: state.auth.isAuth
  }
}

//оборачиваем ProfileApiContainer в WithRouterProfileApiContainer
const WithRouterProfileApiContainer = withRouter(ProfileApiContainer)
//оборачиваем WithRouterProfileApiContainer в ConnectedProfileContainer
//типизация connect: MapStateToPropsType + MapDispatchToPropsType + StateType + объект пропсов,
// которые передается в компоненту ProfileContainer в Content.tsx
export const ConnectedProfileContainer = connect<MapStateToPropsType, MapDispatchToPropsType, {}, StateType>
(mapStateToProps, {getUserProfilePage})(WithRouterProfileApiContainer)