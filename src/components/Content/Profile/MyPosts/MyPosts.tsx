import React from 'react'
import styles from './MyPosts.module.scss'
import Posts from './Posts/Posts'

type MyPostsPropsType = {
  myPostsData: Array<PostItemType>
}

export type PostItemType = {
  id: string
  img: string
  message: string
  likesCount: number
}

export const MyPosts = (props: MyPostsPropsType) => {
  return (
    <div className={styles.myPosts}>
      <h2>MyPosts</h2>
      <p>
        <textarea/>
      </p>
      <p>
        <button>Add post</button>
      </p>
      <Posts posts={props.myPostsData}/>
    </div>
  )
}
