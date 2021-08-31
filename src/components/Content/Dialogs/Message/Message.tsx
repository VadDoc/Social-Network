import React from 'react'
import styles from './Message.module.scss'
import {MessagePropsType} from "../Dialogs";

export const Message = (props: MessagePropsType) => {
  return (
    <div className={styles.message}>{props.message}</div>
  )
}