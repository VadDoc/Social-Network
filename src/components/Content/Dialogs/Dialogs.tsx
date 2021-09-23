import React from 'react'
import styles from './Dialogs.module.scss'
import {Message, MessageType} from "./Message/Message";
import {Dialog, DialogPropsType} from "./Dialog/Dialog";
import {AddMessage} from "./AddMessage/AddMessage";
import {ActionType} from "../../../Redux/store";

type DialogsPropsType = {
  messagesPage: {
    dialogsData: Array<DialogPropsType>
    messagesData: Array<MessageType>
  }
  dispatch: (action: ActionType) => void
}

export const Dialogs = (props: DialogsPropsType) => {
  const dialogsElements = props.messagesPage.dialogsData.map((elem: DialogPropsType) => (
    <Dialog
      key={elem.id}
      name={elem.name}
      id={elem.id}
    />
  ))

  const messagesElements = props.messagesPage.messagesData.map((elem: MessageType) => (
    <Message
      key={elem.id}
      message={elem.message}
      id={elem.id}
    />
  ))

  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={styles.messages}>
        {messagesElements}
        <AddMessage dispatch={props.dispatch} />
      </div>
    </div>
  )
}
