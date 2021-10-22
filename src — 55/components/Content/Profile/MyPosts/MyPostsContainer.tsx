import {addPostAC, onChangePostAC, ProfilePageType} from "../../../../Redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {StateType} from "../../../../Redux/redux-store";
import {connect} from "react-redux";
import {Dispatch} from "redux";

type mapStateToPropsType = {
  profilePage: ProfilePageType
}
type mapDispatchToPropsType = {
  addPost: () => void
  onChangePost: (post: string) => void
}

export type MyPostsPropsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: StateType): mapStateToPropsType => {
  return {
    profilePage: state.profilePage
  }
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
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
