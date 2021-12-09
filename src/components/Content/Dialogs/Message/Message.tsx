import React from 'react'
import styles from './Message.module.scss'

export type MessageType = {
  message: string
  id: string
}

export const Message = ({message}: MessageType) => {
  return (
    <div className={styles.message}>{message}</div>
  )
}