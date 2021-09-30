import React from 'react'
import styles from './Dialogs.module.scss'
import {Message, MessageType} from "./Message/Message";
import {Dialog, DialogPropsType} from "./Dialog/Dialog";
import {AddMessage} from "./AddMessage/AddMessage";

type DialogsPropsType = {
  messagesPage: {
    dialogsData: Array<DialogPropsType>
    messagesData: Array<MessageType>
    newMessageText: string
  }
  onSendMessageClick: () => void
  changeMessage: (text:string) => void
  newDialogMessage: string
}

export const Dialogs:React.FC<DialogsPropsType> = ({messagesPage, onSendMessageClick, changeMessage, newDialogMessage}) => {
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
        <AddMessage
          newDialogMessage={newDialogMessage}
          messagesPage={messagesPage}
          sendMessageClick={onSendMessageClick}
          changeMessage={changeMessage}
        />
      </div>
    </div>
  )
}

