import React from 'react'
import { MyPosts } from './MyPosts/MyPosts'
import styles from './Profile.module.scss'

export const Profile = () => {
  return (
    <div className={styles.profile}>
      <div>
        <img
          src={
            'https://v-thailand.com/wp-content/uploads/2017/12/Slonyi-v-Tailande-2.jpg'
          }
          alt={'rrr'}
        />
      </div>
      <MyPosts />
    </div>
  )
}
