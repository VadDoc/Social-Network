import React, {ChangeEvent} from 'react'
import styles from './MyPosts.module.scss'
import Posts from './Posts/Posts'
import {ActionType} from "../../../../Redux/state";
import {addPostActionCreator, onChangePostCreator} from "../../../../Redux/profile-reducer";

type MyPostsPropsType = {
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

export const MyPosts = (props: MyPostsPropsType) => {

  const addPost = () => {
    props.dispatch(addPostActionCreator())
  }

  const onChangePost = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const post = e.currentTarget.value
    if(post) props.dispatch(onChangePostCreator(post))
  }

  return (
    <div className={styles.myPosts}>
      <h2>MyPosts</h2>
      <p>
        <textarea
          value={props.profilePage.newPostText}
          onChange={onChangePost}
        />
      </p>
      <p>
        <button onClick={addPost}>Add post</button>
      </p>
      <Posts posts={props.profilePage.myPostsData}/>
    </div>
  )
}
