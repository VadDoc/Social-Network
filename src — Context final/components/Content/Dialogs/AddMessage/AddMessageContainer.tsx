import React from 'react'
import {AddMessage} from "./AddMessage";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../../../Redux/dialogs-reducer";
import {StoreType} from "../../../../Redux/redux-store";
import {StoreContext} from "../../../../StoreContext";

export const AddMessageContainer = () => {
  return (
    <StoreContext.Consumer>
      {(store: StoreType) => {
        const messagesPage = store.getState().messagesPage
        const onSendMessageClick = () => store.dispatch(addMessageActionCreator())
        const changeMessage = (text:string) => {
          if(text) store.dispatch(updateNewMessageTextActionCreator(text))
        }

        return (
          <AddMessage
            messagesPage={messagesPage}
            sendMessageClick={onSendMessageClick}
            changeMessage={changeMessage}
          />
        )
      }
      }
    </StoreContext.Consumer>
  )
}


