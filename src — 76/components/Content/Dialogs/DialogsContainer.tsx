import {Dialogs} from "./Dialogs";
import {StateType} from "../../../Redux/redux-store";
import {sendNewMessageAC, MessagesPageType} from "../../../Redux/dialogs-reducer";
import {connect} from "react-redux";
import {compose, Dispatch} from "redux";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import React from "react";

type MapStateToPropsType = {
  messagesPage: MessagesPageType
}
type MapDispatchToPropsType = {
  sendNewMessage: (newMessage: string) => void
}

export type DialogsPropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: StateType): MapStateToPropsType => {
  return {
    messagesPage: state.messagesPage,
  }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
  return {
    sendNewMessage: (newMessage: string) => {
      dispatch(sendNewMessageAC(newMessage))
    }
  }
}

export const DialogsComposedContainers = compose<React.ComponentType>(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs)

