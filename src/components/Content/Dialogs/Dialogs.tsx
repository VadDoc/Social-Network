import React from 'react'
import styles from './Dialogs.module.scss'
import {NavLink} from 'react-router-dom'

type DialogPropsType = {
  name: string
  id: number
}

type MessagePropsType = {
  message: string
}

const Dialog = (props: DialogPropsType) => {
  return (
    <div className={styles.dialog}>
      <NavLink to={`/dialogs/${props.id}`} activeClassName={styles.active}>{props.name}</NavLink>
    </div>
  )
}

const Message = (props: MessagePropsType) => {
  return (
    <div className={styles.message}>{props.message}</div>
  )
}

export const Dialogs = () => {
  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsItems}>
        <Dialog name={'Ann'} id={1}/>
        <Dialog name={'Nick'} id={2}/>
        <Dialog name={'Jhon'} id={3}/>
        <Dialog name={'Jane'} id={4}/>
      </div>
      <div className={styles.messages}>
        <Message message='Hello'/>
        <Message message='How are you?'/>
      </div>
    </div>
  )
}
