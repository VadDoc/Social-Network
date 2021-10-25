import React from 'react'
import styles from './Profile.module.scss'
import {Profile} from "./Profile";
import {axiosInstance} from "../../Сommon/AxiosInstance/axiosInstance";
import {connect} from "react-redux";
import {StateType} from "../../../Redux/redux-store";
import {DataUserProfileType, setUserProfile} from "../../../Redux/profile-reducer";

export type ProfilePropsType = MapStateToPropsType & MapDispatchToPropsType
class ProfileApiContainer extends React.Component<ProfilePropsType> {
  componentDidMount() {
    axiosInstance.get<DataUserProfileType>(`profile/2`)
      .then(response => {
        debugger
        this.props.setUserProfile(response.data) // отправляем в store userProfile
      })
  }

  render() {
    return (
      <div className={styles.profile}>
        <Profile {...this.props} userProfile={this.props.userProfile}/>
        {/*<Profile/>*/}
      </div>
    )
  }
}

type MapStateToPropsType = {
  userProfile: DataUserProfileType
}
type MapDispatchToPropsType = {
  setUserProfile: (dataUserProfile: DataUserProfileType) => void
}

const mapStateToProps = (state: StateType): MapStateToPropsType => {
  return {
    userProfile: state.profilePage.userProfile
  }
}

//типизация connect: MapStateToPropsType + MapDispatchToPropsType + StateType + объект пропсов,
// которые передается в компоненту ProfileContainer в Content.tsx
export const ProfileContainer = connect<MapStateToPropsType, MapDispatchToPropsType, {}, StateType>
(mapStateToProps, {setUserProfile})(ProfileApiContainer)