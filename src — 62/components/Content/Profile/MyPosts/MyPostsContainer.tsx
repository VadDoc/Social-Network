import {addPostAC, onChangePostAC, ProfilePageType} from "../../../../Redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {StateType} from "../../../../Redux/redux-store";
import {connect} from "react-redux";
import {Dispatch} from "redux";

type MapStateToPropsType = {
  profilePage: ProfilePageType
}
type MapDispatchToPropsType = {
  addPost: () => void
  onChangePost: (post: string) => void
}
export type MyPostsPropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: StateType): MapStateToPropsType => {
  return {
    profilePage: state.profilePage
  }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
  return {
    addPost: () => {
      dispatch(addPostAC())
    },
    onChangePost: (post: string) => {
      if(post) dispatch(onChangePostAC(post))
    }
  }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
