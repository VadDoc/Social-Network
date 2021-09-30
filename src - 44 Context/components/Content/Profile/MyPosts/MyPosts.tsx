import React, {ChangeEvent} from 'react'
import styles from './MyPosts.module.scss'
import Posts from './Posts/Posts'

type MyPostsPropsType = {
  profilePage: {
    myPostsData: Array<PostItemType>
    newPostText: string
  }
  addPost: () => void
  onChangePost: (post: string) => void
}
export type PostItemType = {
  id: string
  img: string
  message: string
  likesCount: number
}

export const MyPosts = ({profilePage, ...props}: MyPostsPropsType) => {
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
