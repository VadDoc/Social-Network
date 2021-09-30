import React from 'react'
import {Dialogs} from "./Dialogs";
import {StoreContext} from "../../../StoreContext";
import {StoreType} from "../../../Redux/redux-store";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../../Redux/dialogs-reducer";


export const DialogsContainer = () => {
  return (
    <StoreContext.Consumer>
      {(store: StoreType) => {
        const messagesPage = store.getState().messagesPage
        const onSendMessageClick = () => store.dispatch(addMessageActionCreator())
        const changeMessage = (text: string) => {
          if (text) store.dispatch(updateNewMessageTextActionCreator(text))
        }

        return (
          <Dialogs
            messagesPage={messagesPage}
            onSendMessageClick={onSendMessageClick}
            changeMessage={changeMessage}
          />
        )
      }
      }
    </StoreContext.Consumer>
  )
}

