import React from 'react'
import styles from './AddMessage.module.scss'

type AddMessagePropsType = {
  addMessage: (message: string) => void
}

const newMessageElement = React.createRef<HTMLTextAreaElement>()

export const AddMessage = (props: AddMessagePropsType) => {
  const onSendMessageClick = () => {
    const newMessage = newMessageElement.current?.value
    if(newMessage) props.addMessage(newMessage)
    if(newMessageElement.current) newMessageElement.current.value = ''
  }

  return (
    <div className={styles.addMessage}>
      <div>
          <textarea ref={newMessageElement} />
      </div>
      <div>
        <button onClick={onSendMessageClick }>Send message</button>
      </div>
    </div>
  )
}