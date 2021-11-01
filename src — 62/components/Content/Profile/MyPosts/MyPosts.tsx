import React, {ChangeEvent} from 'react'
import styles from './MyPosts.module.scss'
import Posts from './Posts/Posts'
import {MyPostsPropsType} from "./MyPostsContainer";

export const MyPosts: React.FC<MyPostsPropsType> = ({profilePage, ...props}) => {
  const addPost = () => {
    props.addPost()
  }

  const onChangePost = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const post = e.currentTarget.value
    if(post) props.onChangePost(post)
  }

  return (
    <div className={styles.myPosts}>
      <h2>MyPosts</h2>
      <p>
        <textarea
          value={profilePage.newPostText}
          onChange={onChangePost}
        />
      </p>
      <p>
        <button onClick={addPost}>Add post</button>
      </p>
      <Posts posts={profilePage.myPostsData}/>
    </div>
  )
}
