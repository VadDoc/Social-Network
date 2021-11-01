import React from 'react'
import styles from './Profile.module.scss'
import {Profile} from "./Profile";
import {axiosInstance} from "../../Сommon/AxiosInstance/axiosInstance";
import {connect} from "react-redux";
import {StateType} from "../../../Redux/redux-store";
import {DataUserProfileType, setUserProfile} from "../../../Redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";

type MapStateToPropsType = {
  userProfile: DataUserProfileType
}
type MapDispatchToPropsType = {
  setUserProfile: (dataUserProfile: DataUserProfileType) => void
}
type ProfileApiPropsType = MapStateToPropsType & MapDispatchToPropsType
//типизация withRouter
//https://stackoverflow.com/questions/48219432/react-router-typescript-errors-on-withrouter-after-updating-version
type PathParamsType = {
  userId: string // = let userId = this.props.match.params.userId
}
type PropsType = RouteComponentProps<PathParamsType> & ProfileApiPropsType

class ProfileApiContainer extends React.Component<PropsType> {

  componentDidMount() {
    let userId = this.props.match.params.userId
    // console.log("ProfileApiContainer Props: ", this.props)
    //если profile/
    if (!userId) {
      userId = '2'
      // userId = '20056'
    }
    axiosInstance.get<DataUserProfileType>(`profile/${userId}`)
      .then(response => {
        this.props.setUserProfile(response.data) // отправляем в store userProfile
      })
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
    userProfile: state.profilePage.userProfile
  }
}

//оборачиваем ProfileApiContainer в WithRouterProfileApiContainer
const WithRouterProfileApiContainer = withRouter(ProfileApiContainer)
//оборачиваем WithRouterProfileApiContainer в ConnectedProfileContainer
//типизация connect: MapStateToPropsType + MapDispatchToPropsType + StateType + объект пропсов,
// которые передается в компоненту ProfileContainer в Content.tsx
export const ConnectedProfileContainer = connect<MapStateToPropsType, MapDispatchToPropsType, {}, StateType>
(mapStateToProps, {setUserProfile})(WithRouterProfileApiContainer)