import React from 'react'
import styles from './Posts.module.scss'
import {PostItemType} from "../../../../../Redux/profile-reducer";

type PropsType = {
  posts: Array<PostItemType>
}

const Posts: React.FC<PropsType> = ({posts}:PropsType) => {
  return (
    <div className={styles.posts}>
      {posts.map((item: PostItemType) => (
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
