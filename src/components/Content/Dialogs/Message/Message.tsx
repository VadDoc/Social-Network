import React from 'react'
import styles from './Message.module.scss'

type MessagePropsType = {
  message: string
  id: string
}


export type MessageType = {
  message: string
  id: string
}

export const Message = (props: MessagePropsType) => {
  return (
    <div className={styles.message}>{props.message}</div>
  )
}