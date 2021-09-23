import React from 'react'
import styles from './AddMessage.module.scss'
import {ActionType} from "../../../../Redux/store";
import {addMessageCreator} from "../../../../Redux/dialogs-reducer";

type AddMessagePropsType = {
  dispatch: (action: ActionType) => void
}

const newMessageElement = React.createRef<HTMLTextAreaElement>()

export const AddMessage = (props: AddMessagePropsType) => {
  const onSendMessageClick = () => {
    const message = newMessageElement.current?.value
    if(message) props.dispatch(addMessageCreator(message))

    if(newMessageElement.current) newMessageElement.current.value = ''
  }

  return (
    <div className={styles.addMessage}>
      <div>
          <textarea
            ref={newMessageElement}
          />
      </div>
      <div>
        <button onClick={onSendMessageClick }>Send message</button>
      </div>
    </div>
  )
}