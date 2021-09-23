import {v1} from "uuid";
import {DialogPropsType} from "../components/Content/Dialogs/Dialog/Dialog";
import {MessageType} from "../components/Content/Dialogs/Message/Message";
import {ActionType} from "./redux-store";

export type MessagesPageType = {
  dialogsData: Array<DialogPropsType>
  messagesData: Array<MessageType>
}

export type AddMessageActionType = {
  type: 'ADD_MESSAGE'
  message: string
}


const ADD_MESSAGE = "ADD_MESSAGE"

const initialState = {
    dialogsData: [
      {id: v1(), name: 'Ann'},
      {id: v1(), name: 'Nick'},
      {id: v1(), name: 'Jhon'},
      {id: v1(), name: 'Jane'},
    ],
    messagesData: [
      {id: v1(), message: 'Hello'},
      {id: v1(), message: 'How are you?'},
    ],
  }

export const dialogsReducer = (state: MessagesPageType = initialState, action: ActionType) => {
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
