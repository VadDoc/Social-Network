import React from 'react'
import styles from './Dialogs.module.scss'
import {Message} from "./Message/Message";
import {Dialog} from "./Dialog/Dialog";

export type DialogPropsType = {
  name: string
  id: string
}

export type MessagePropsType = {
  message: string
  id: string
}

export type DialogsPropsType = {
  messagesPage: {
    dialogsData: Array<DialogPropsType>
    messagesData: Array<MessagePropsType>
  }
}

export const Dialogs = (props: DialogsPropsType) => {
  const dialogsElements = props.messagesPage.dialogsData.map((elem: DialogPropsType) => (
    <Dialog name={elem.name} id={elem.id}/>
  ))

  const messagesElements = props.messagesPage.messagesData.map((elem: MessagePropsType) => (
    <Message message={elem.message} id={elem.id}/>
  ))

  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={styles.messages}>
        {messagesElements}
      </div>
    </div>
  )
}
