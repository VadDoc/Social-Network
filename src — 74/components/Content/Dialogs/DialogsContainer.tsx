import {Dialogs} from "./Dialogs";
import {StateType} from "../../../Redux/redux-store";
import {addMessageAC, MessagesPageType, updateNewMessageTextAC,} from "../../../Redux/dialogs-reducer";
import {connect} from "react-redux";
import {compose, Dispatch} from "redux";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import React from "react";

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
    newDialogMessage: state.messagesPage.newMessageText,
  }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
  return {
    onSendMessageClick: () => {
      dispatch(addMessageAC())
    },
    changeMessage: (text: string) => {
      if (text) dispatch(updateNewMessageTextAC(text))
    }
  }
}

export const DialogsComposedContainers = compose<React.ComponentType>(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs)

