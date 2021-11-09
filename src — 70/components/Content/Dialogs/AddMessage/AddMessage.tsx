import React, {ChangeEvent} from 'react'
import styles from './AddMessage.module.scss'
import {DialogPropsType} from "../Dialog/Dialog";
import {MessageType} from "../Message/Message";

type AddMessagePropsType = {
  sendMessageClick: () => void
  changeMessage: (text: string) => void
  messagesPage: {
    dialogsData: Array<DialogPropsType>
    messagesData: Array<MessageType>
    newMessageText: string
  }
  newDialogMessage: string
}

export const AddMessage:React.FC<AddMessagePropsType>  = ({messagesPage, newDialogMessage, ...props}) => {
  const onChangeMessage = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const text = event.currentTarget.value
    if (text) props.changeMessage(text)
  }
  const onSendMessageClick = () => {
    props.sendMessageClick()
  }

  return (
    <div className={styles.addMessage}>
      <div>
          <textarea

            onChange={onChangeMessage}
            value={newDialogMessage}
            placeholder="Enter your message"
          />
      </div>
      <div>
        <button onClick={onSendMessageClick}>Send message</button>
      </div>
    </div>
  )
}