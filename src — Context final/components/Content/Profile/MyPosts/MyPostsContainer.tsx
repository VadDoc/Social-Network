import React from 'react'
import {addPostActionCreator, onChangePostCreator} from "../../../../Redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {StoreType} from "../../../../Redux/redux-store";
import { StoreContext } from '../../../../StoreContext';

export type PostItemType = {
  id: string
  img: string
  message: string
  likesCount: number
}

export const MyPostsContainer = () => {
  return (
    <StoreContext.Consumer>
      {(store: StoreType) => {
        const profilePage = store.getState().profilePage
        const addPost = () => store.dispatch(addPostActionCreator())
        const onChangePost = (post: string) => {
          if(post) store.dispatch(onChangePostCreator(post))
        }

        return (
          <MyPosts
            profilePage={profilePage}
            addPost={addPost}
            onChangePost={onChangePost}
          />
        )
      }
      }
    </StoreContext.Consumer>
  )
}
