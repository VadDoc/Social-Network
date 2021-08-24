import React from 'react'
import styles from './MyPosts.module.scss'
import Posts from './Posts/Posts'
import img1 from './../../../../images/ava1.jpeg'
import img2 from './../../../../images/ava2.jpeg'

export type PostItemType = {
  id: number
  img: string
  message: string
  likesCount: number
}

const myPostsData: Array<PostItemType> = [
  {id: 1, img: img1, message: 'Hello! How are you', likesCount: 4},
  {id: 2, img: img2, message: 'What are doing now?', likesCount: 14},
]

export const MyPosts = () => {
  return (
    <div className={styles.myPosts}>
      <h2>MyPosts</h2>
      <p>
        <textarea/>
      </p>
      <p>
        <button>Add post</button>
      </p>
      <Posts posts={myPostsData}/>
    </div>
  )
}
