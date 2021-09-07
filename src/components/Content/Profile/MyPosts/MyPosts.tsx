import React from 'react'
import styles from './MyPosts.module.scss'
import Posts from './Posts/Posts'

type MyPostsPropsType = {
  myPostsData: Array<PostItemType>
  addPost: (postMessage: string) => void
}

export type PostItemType = {
  id: string
  img: string
  message: string
  likesCount: number
}

const newPostElement = React.createRef<HTMLTextAreaElement> ()

export const MyPosts = (props: MyPostsPropsType) => {
  const addPost = () => {
    let text = newPostElement.current?.value
    if(text) props.addPost(text)
    if(newPostElement.current) newPostElement.current.value = ''
  }

  return (
    <div className={styles.myPosts}>
      <h2>MyPosts</h2>
      <p>
        <textarea ref={newPostElement}/>
      </p>
      <p>
        <button onClick={addPost}>Add post</button>
      </p>
      <Posts posts={props.myPostsData}/>
    </div>
  )
}
