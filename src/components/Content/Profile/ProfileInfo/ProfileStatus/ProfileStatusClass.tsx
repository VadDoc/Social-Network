import React, {ChangeEvent} from 'react'
import styles from './ProfileStatus.module.scss'

export class ProfileStatusClass extends React.Component<PropsType> {
  state = {
    editMode: false,
    status: this.props.status
  }
  //используем стрелочную, чтобы не потерять контекст во время вызова, не нужно байндить activateEditMode.bind(this)
  activateEditMode = () => {
    this.setState({editMode: true})
  }

  deactivateEditMode = () => {
    this.setState({editMode: false})
    this.props.updateStatus(this.state.status)
  }

  onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({status: e.currentTarget.value})
  }

  componentDidUpdate(prevProps: Readonly<PropsType>, prevState: Readonly<{}>, snapshot?: any) {
    //если приходит новый status, то перезаписываем state
    if(prevProps.status !== this.props.status) {
      this.setState({status: this.props.status})
    }
  }

  render() {
    return (
      <div className={styles.profileStatus}>
        {!this.state.editMode &&
        <div>
          <span onDoubleClick={this.activateEditMode}>{this.props.status || 'Set your status'}</span>
        </div>
        }
        {this.state.editMode &&
        <div>
          <input
            onBlur={this.deactivateEditMode}
            onChange={this.onStatusChange}
            value={this.state.status}
            autoFocus
          />
        </div>
        }
      </div>
    )
  }
}

type PropsType = {
  status: string
  updateStatus: (userStatus: string) => void
}