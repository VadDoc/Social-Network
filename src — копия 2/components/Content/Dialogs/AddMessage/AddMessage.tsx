import React from 'react'
import styles from './AddMessage.module.scss'
import {DialogPropsType} from "../Dialog/Dialog";
import {MessageType} from "../Message/Message";
import {reduxForm} from "redux-form";
import {AddMessageForm, FormDataType} from "./AddMessageForm";

type AddMessagePropsType = {
  sendNewMessage: (newMessage: string) => void
  messagesPage: {
    dialogsData: Array<DialogPropsType>
    messagesData: Array<MessageType>
  }
}

const AddMessageReduxForm = reduxForm<FormDataType>({form: 'addMessageForm'})(AddMessageForm)

export const AddMessage: React.FC<AddMessagePropsType> = (props) => {
  const sendNewMessage = (value: FormDataType) => {
    props.sendNewMessage(value.newMessage)
  }

  return (
    <div className={styles.addMessage}>
      <div>
        <AddMessageReduxForm onSubmit={sendNewMessage}/>
      </div>
    </div>
  )
}