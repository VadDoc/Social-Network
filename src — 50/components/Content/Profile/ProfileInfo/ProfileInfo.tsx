import React from 'react'
import styles from './ProfileInfo.module.scss'

export const ProfileInfo = (props: any) => {
  return (
    <div className={styles.profileInfo}>
      <div>
        <img
          src={
            'https://v-thailand.com/wp-content/uploads/2017/12/Slonyi-v-Tailande-2.jpg'
          }
          alt={'img'}
        />
      </div>
      <div className={styles.description}>
        ava + description
      </div>

    </div>
  )
}
