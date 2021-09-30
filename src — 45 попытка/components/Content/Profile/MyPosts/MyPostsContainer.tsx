import React from 'react'
import {addPostActionCreator, onChangePostCreator, ProfilePageType} from "../../../../Redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {AppStateType, StoreType} from "../../../../Redux/redux-store";
import {connect} from "react-redux";
import { StoreContext } from '../../../../StoreContext';
import {Dispatch} from "redux";

export type PostItemType = {
  id: string
  img: string
  message: string
  likesCount: number
}

type mapStateToPropsType = {
  profilePage: ProfilePageType
}

type mapDispatchToPropsType = {
  addPost: () => void
  onChangePost: (post: string) => void
}

let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
  return {
    profilePage: state.profilePage
  }
}

let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
  return {
    addPost: () => {
      dispatch(addPostActionCreator())
    },
    onChangePost: (post: string) => {
      if(post) dispatch(onChangePostCreator(post))
    }
  }
}
export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
