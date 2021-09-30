import React from 'react'
import {AddMessage} from "./AddMessage";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../../../Redux/dialogs-reducer";
import {DialogPropsType} from "../Dialog/Dialog";
import {MessageType} from "../Message/Message";
import {ActionType} from "../../../../Redux/redux-store";

type AddMessageContainerPropsType = {
  dispatch: (action: ActionType) => void
  messagesPage: {
    dialogsData: Array<DialogPropsType>
    messagesData: Array<MessageType>
    newMessageText: string
  }
}

export const AddMessageContainer = ({dispatch, messagesPage}: AddMessageContainerPropsType) => {
  const onSendMessageClick = () => {
    dispatch(addMessageActionCreator())
  }

  const changeMessage = (text:string) => {
    dispatch(updateNewMessageTextActionCreator(text))
  }

  return (
    <AddMessage
      messagesPage={messagesPage}
      sendMessageClick={onSendMessageClick}
      changeMessage={changeMessage}
    />
  )
}


