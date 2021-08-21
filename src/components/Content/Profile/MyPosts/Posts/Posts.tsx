import React from 'react'
import styles from './Posts.module.scss'
import { PostItemType } from '../MyPosts'

type PropsType = {
  posts: Array<PostItemType>
}

const Posts: React.FC<PropsType> = (props) => {
  return (
    <div className={styles.posts}>
      {props.posts.map((item: PostItemType) => (
        <div className={styles.postItem} key={item.id}>
          <img className={styles.img} src={item.img} alt="ava" />
          {item.message}
          <p>Likes <span>{item.likesCount }</span></p>
        </div>
      ))}
    </div>
  )
}

export default Posts
