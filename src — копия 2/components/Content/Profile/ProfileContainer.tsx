import React from 'react'
import styles from './Profile.module.scss'
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {StateType} from "../../../Redux/redux-store";
import {
  DataUserProfileType,
  getUserProfilePage,
  getUserProfilePageStatus,
  updateUserProfilePageStatus
} from "../../../Redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import {compose} from "redux";

//типизация withRouter
//https://stackoverflow.com/questions/48219432/react-router-typescript-errors-on-withrouter-after-updating-version
type PathParamsType = {
  userId: string // = let userId = this.props.match.params.userId
}
type PropsType = RouteComponentProps<PathParamsType> & ProfileApiPropsType

type MapStateToPropsType = {
  userProfile: DataUserProfileType
  userStatus: string
  isAuth: boolean
  authorizedUserId: string
}
type MapDispatchToPropsType = {
  getUserProfilePage: (userId: string) => void
  getUserProfilePageStatus: (userId: string) => void
  updateUserProfilePageStatus: (userStatus: string) => void
}
type ProfileApiPropsType = MapStateToPropsType & MapDispatchToPropsType

class ProfileApiContainer extends React.Component<PropsType> {

  componentDidMount() {
    //читаем из URL userId
    let userId = this.props.match.params.userId
    if (!userId) {
      // userId = '2'
      // userId = '20056'
      //если не выбран user - показываем собственный профиль
      userId = this.props.authorizedUserId
    }
    this.props.getUserProfilePage(userId)
    this.props.getUserProfilePageStatus(userId)
  }

  render() {
    return (
      <div className={styles.profile}>
        <Profile {...this.props}
                 userProfile={this.props.userProfile}
                 userStatus={this.props.userStatus}
                 updateStatus={this.props.updateUserProfilePageStatus}
        />
      </div>
    )
  }
}

const mapStateToProps = (state: StateType): MapStateToPropsType => {
  return {
    userProfile: state.profilePage.userProfile,
    userStatus: state.profilePage.userStatus,
    isAuth: state.auth.isAuth,
    authorizedUserId: state.auth.userId
  }
}

//типизация connect: MapStateToPropsType + MapDispatchToPropsType + StateType + объект пропсов,
// которые передается в компоненту ProfileContainer в Content.tsx
//c помощью compose оборачиваем последовательно ProfileApiContainer в 3 хока
export default compose<React.ComponentType>(
  withAuthRedirect,
  connect<MapStateToPropsType, MapDispatchToPropsType, {}, StateType>(
    mapStateToProps, {getUserProfilePage, getUserProfilePageStatus, updateUserProfilePageStatus}),
  withRouter
)(ProfileApiContainer)