import React from 'react'
import styles from './Profile.module.scss'
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {StateType} from "../../../Redux/redux-store";
import {DataUserProfileType, getUserProfilePage} from "../../../Redux/profile-reducer";
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
  }
}

//типизация connect: MapStateToPropsType + MapDispatchToPropsType + StateType + объект пропсов,
// которые передается в компоненту ProfileContainer в Content.tsx
//c помощью compose оборачиваем последовательно ProfileApiContainer в 3 хока
export const ProfileComposedContainers = compose<React.ComponentType>(
  withAuthRedirect,
  connect<MapStateToPropsType, MapDispatchToPropsType, {}, StateType>(
    mapStateToProps, {getUserProfilePage}),
  withRouter
)(ProfileApiContainer)