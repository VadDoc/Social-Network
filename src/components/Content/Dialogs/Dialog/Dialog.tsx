import React from 'react'
import styles from './Dialog.module.scss'
import {NavLink} from 'react-router-dom'
import {DialogPropsType} from "../Dialogs";

export const Dialog = (props: DialogPropsType) => {
  return (
    <div className={styles.dialog}>
      <NavLink to={`/dialogs/${props.id}`} activeClassName={styles.active}>{props.name}</NavLink>
    </div>
  )
}
