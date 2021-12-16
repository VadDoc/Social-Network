import React from 'react'
import styles from './Dialog.module.scss'
import {NavLink} from 'react-router-dom'

export const Dialog = ({name, id}: DialogPropsType) => {
  return (
    <div className={styles.dialog}>
      <NavLink to={`/dialogs/${id}`} activeClassName={styles.active}>{name}</NavLink>
    </div>
  )
}

export type DialogPropsType = {
  name: string
  id: string
}
