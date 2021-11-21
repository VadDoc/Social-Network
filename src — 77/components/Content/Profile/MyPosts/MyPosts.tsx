import React from 'react'
import styles from './MyPosts.module.scss'
import Posts from './Posts/Posts'
import {MyPostsPropsType} from "./MyPostsContainer";
import {reduxForm} from "redux-form";
import {FormDataType, MyPostsForm} from "./MyPostsForm";

const MyPostsReduxForm = reduxForm<FormDataType>({form: 'newPost'})(MyPostsForm)

export const MyPosts: React.FC<MyPostsPropsType> = ({profilePage, addPost}) => {
  const onSubmit = (value: FormDataType) => {
    addPost(value.newPost)
  }
  return (
    <div className={styles.myPosts}>
      <h2>MyPosts</h2>
      <MyPostsReduxForm onSubmit={onSubmit}/>
      <Posts posts={profilePage.myPostsData}/>
    </div>
  )
}
