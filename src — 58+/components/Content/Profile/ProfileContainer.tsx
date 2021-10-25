import React from 'react'
import styles from './Profile.module.scss'
import {Profile} from "./Profile";
import {axiosInstance} from "../../Сommon/AxiosInstance/axiosInstance";
import {connect} from "react-redux";
import {StateType} from "../../../Redux/redux-store";
import {setUserProfile} from "../../../Redux/profile-reducer";

export type DataUserProfileType = {
  aboutMe: null | string
  contacts: {
    facebook: null | string
    website: null | string
    vk: null | string
    twitter: null | string
    instagram: null | string
    "youtube": null | string
    github: null | string
    mainLink: null | string
  }
  lookingForAJob: boolean
  lookingForAJobDescription: null | string
  "fullName": null | string
  "userId": number
  "photos": {
    "small": null | string
    "large": null | string
  }
}

class ProfileApiContainer extends React.Component<ProfilePropsType> {
  componentDidMount() {
    debugger
    axiosInstance.get<DataUserProfileType>(`profile/2`)
      .then(response => {
        this.props.setUserProfile(response.data) // отправляем в store userProfile
        // this.props.setTotalUsersCount(response.data.totalCount) //отправляем в store кол-во users
      })
  }

  render() {
    return (
      <div className={styles.profile}>
        {/*<Profile {...this.props} userProfile={this.props.dataUserProfile}/>*/}
        <Profile/>
      </div>
    )
  }
}

type MapStateToPropsType = {
  // dataUserProfile: DataUserProfileType

}
type MapDispatchToPropsType = {

  setUserProfile: (dataUserProfile: DataUserProfileType) => void
}
export type ProfilePropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: StateType) => {
  return {
    userProfile: state.profilePage.userProfile
  }
}



export const ProfileContainer = connect(mapStateToProps, {setUserProfile})(ProfileApiContainer)