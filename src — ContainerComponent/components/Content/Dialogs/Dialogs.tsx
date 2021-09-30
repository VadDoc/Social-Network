import React from 'react'
import styles from './Dialogs.module.scss'
import {Message, MessageType} from "./Message/Message";
import {Dialog, DialogPropsType} from "./Dialog/Dialog";
import {ActionType} from "../../../Redux/redux-store";
import {AddMessageContainer} from "./AddMessage/AddMessageContainer";

type DialogsPropsType = {
  messagesPage: {
    dialogsData: Array<DialogPropsType>
    messagesData: Array<MessageType>
    newMessageText: string
  }
  dispatch: (action: ActionType) => void
}

export const Dialogs = ({messagesPage, dispatch}: DialogsPropsType) => {
  const dialogsElements = messagesPage.dialogsData.map((elem: DialogPropsType) => (
    <Dialog
      key={elem.id}
      name={elem.name}
      id={elem.id}
    />
  ))

  const messagesElements = messagesPage.messagesData.map((elem: MessageType) => (
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
        <AddMessageContainer dispatch={dispatch} messagesPage={messagesPage}/>
      </div>
    </div>
  )
}
