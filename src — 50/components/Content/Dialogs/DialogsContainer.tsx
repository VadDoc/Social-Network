import {Dialogs} from "./Dialogs";
import {StateType} from "../../../Redux/redux-store";
import {
  addMessageActionCreator,
  MessagesPageType,
  updateNewMessageTextActionCreator
} from "../../../Redux/dialogs-reducer";
import {connect} from "react-redux";
import {Dispatch} from "redux";

type MapStateToPropsType = {
  messagesPage: MessagesPageType
  newDialogMessage: string
}
type MapDispatchToPropsType = {
  onSendMessageClick: () => void
  changeMessage: (text: string) => void
}

export type DialogsPropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: StateType): MapStateToPropsType => {
  return {
    messagesPage: state.messagesPage,
    newDialogMessage: state.messagesPage.newMessageText
  }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
  return {
    onSendMessageClick: () => {
      dispatch(addMessageActionCreator())
    },
    changeMessage: (text: string) => {
      if (text) dispatch(updateNewMessageTextActionCreator(text))
    }
  }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

