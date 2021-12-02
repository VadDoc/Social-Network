import React, {ChangeEvent, useEffect, useState} from 'react'
import styles from './ProfileStatus.module.scss'

type PropsType = {
  status: string
  updateStatus: (userStatus: string) => void
}

export const ProfileStatusHooks = (props: PropsType) => {
  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState(props.status);


  const activateEditMode = () => {
    setEditMode(true)
  }

  const deactivateEditMode = () => {
    setEditMode(false)
    props.updateStatus(status)
  }

  const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
    setStatus(e.currentTarget.value)
  }

  // componentDidUpdate(prevProps: Readonly<PropsType>, prevState: Readonly<{}>, snapshot?: any) {
  //   //если приходит новый status, то перезаписываем state
  //   if(prevProps.status !== this.props.status) {
  //     this.setState({status: this.props.status})
  //   }
  // }

  return (
    <div className={styles.profileStatus}>
      {!editMode &&
      <div>
        <span onDoubleClick={activateEditMode}>{props.status || 'Set your status'}</span>
      </div>
      }
      {editMode &&
      <div>
        <input
          onBlur={deactivateEditMode}
          onChange={onStatusChange}
          value={status}
          autoFocus
        />
      </div>
      }
    </div>
  )

}