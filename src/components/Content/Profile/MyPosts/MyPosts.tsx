import React from 'react'
import styles from './MyPosts.module.scss'
import Posts from './Posts/Posts'

type MyPostsPropsType = {
  profilePage: {
    myPostsData: Array<PostItemType>
    newPostText: string
  }
  updateNewPostText: (post: string) => void
  addPost: () => void
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
    props.addPost()
  }

  const onChangePost = () => {
    const text = newPostElement.current?.value
    if(text) props.updateNewPostText(text)
  }

  return (
    <div className={styles.myPosts}>
      <h2>MyPosts</h2>
      <p>
        <textarea
          ref={newPostElement}
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
