import {ActionType, AddMessageActionType, StateType} from "./state";
import {v1} from "uuid";
import {DialogPropsType} from "../components/Content/Dialogs/Dialog/Dialog";
import {MessageType} from "../components/Content/Dialogs/Message/Message";

export type MessagesPageType = {
  dialogsData: Array<DialogPropsType>
  messagesData: Array<MessageType>
}

const ADD_MESSAGE = "ADD_MESSAGE"

export const dialogsReducer = (state: MessagesPageType, action: ActionType) => {
  if (action.type === ADD_MESSAGE) {
    const newMessage = {
      id: v1(),
      message: action.message
    }
    state.messagesData.push(newMessage)
  }

  return state
}

type AddMessageCreatorType = (message: string) => AddMessageActionType

export const addMessageCreator: AddMessageCreatorType = (message) => ({
  type: ADD_MESSAGE,
  message: message
})
