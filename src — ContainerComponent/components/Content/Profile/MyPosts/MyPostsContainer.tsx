import React from 'react'
import {ActionType} from "../../../../Redux/redux-store";
import {addPostActionCreator, onChangePostCreator} from "../../../../Redux/profile-reducer";
import {MyPosts} from "./MyPosts";

type MyPostsContainerPropsType = {
  profilePage: {
    myPostsData: Array<PostItemType>
    newPostText: string
  }
  dispatch: (action: ActionType) => void
}
export type PostItemType = {
  id: string
  img: string
  message: string
  likesCount: number
}

export const MyPostsContainer = ({profilePage, ...props}: MyPostsContainerPropsType) => {
  const addPost = () => {
    props.dispatch(addPostActionCreator())
  }

  const onChangePost = (post: string) => {
    if(post) props.dispatch(onChangePostCreator(post))
  }

  return (
    <MyPosts
      profilePage={profilePage}
      addPost={addPost}
      onChangePost={onChangePost}
    />
  )
}
