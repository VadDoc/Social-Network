import React, {useState} from 'react'
import styles from './ProfileStatus.module.scss'

type PropsType = {
  status: string
}

export class ProfileStatus extends React.Component<PropsType> {
  state = {
    editMode: false
  }

  //используем стрелочную, чтобы не потерять контекст вызова, не нужно байндить activateEditMode.bind(this)
  activateEditMode = () => {
    this.setState({editMode: true})
  }

  deactivateEditMode = () => {
    this.setState({editMode: false})
  }

  render() {
    let {status} = this.props;
    return (
      <div className={styles.profileStatus}>
        {!this.state.editMode &&
        <div>
          <span onDoubleClick={this.activateEditMode}>{status}</span>
        </div>
        }
        {this.state.editMode &&
        <div>
          <input onBlur={this.deactivateEditMode} value={status} autoFocus/>
        </div>
        }
      </div>
    )
  }
}