import {Dialogs} from "./Dialogs";
import {AppStateType} from "../../../Redux/redux-store";
import {
  addMessageActionCreator,
  MessagesPageType,
  updateNewMessageTextActionCreator
} from "../../../Redux/dialogs-reducer";
import {connect} from "react-redux";
import {Dispatch} from "redux";

type mapStateToPropsType = {
  messagesPage: MessagesPageType
  newDialogMessage: string
}
type mapDispatchToPropsType = {
  onSendMessageClick: () => void
  changeMessage: (text: string) => void
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
  return {
    messagesPage: state.messagesPage,
    newDialogMessage: state.messagesPage.newMessageText
  }
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
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

