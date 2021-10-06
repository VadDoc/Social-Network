import {v1} from "uuid";
import {DialogPropsType} from "../components/Content/Dialogs/Dialog/Dialog";
import {MessageType} from "../components/Content/Dialogs/Message/Message";
import {ActionType} from "./redux-store";

export type AddMessageActionType = {
  type: 'ADD_MESSAGE'
}
export type UpdateNewMessageTextActionType = {
  type: 'UPDATE_NEW_MESSAGE_TEXT',
  newText: string,
}
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT'
const ADD_MESSAGE = 'ADD_MESSAGE'

export type MessagesPageType = typeof initialState
const initialState = {
  dialogsData: [
    {id: v1(), name: 'Ann'},
    {id: v1(), name: 'Nick'},
    {id: v1(), name: 'Jhon'},
    {id: v1(), name: 'Jane'},
  ] as Array<DialogPropsType>,
  messagesData: [
    {id: v1(), message: 'Hello'},
    {id: v1(), message: 'How are you?'},
  ] as Array<MessageType>,
  newMessageText: '',
}

export const dialogsReducer = (state: MessagesPageType = initialState, action: ActionType): MessagesPageType => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_TEXT:
      return {
        ...state,
        newMessageText: action.newText
      }
    case ADD_MESSAGE:
      const text = state.newMessageText
      return {
        ...state,
        newMessageText: '',
        messagesData: [...state.messagesData, {id: v1(), message: text}]
      }
    default:
      return state
  }
}

type AddMessageCreatorType = () => AddMessageActionType
type UpdateNewMessageTextCreatorType = (text: string) => UpdateNewMessageTextActionType

export const addMessageActionCreator: AddMessageCreatorType = () => ({type: ADD_MESSAGE})
export const updateNewMessageTextActionCreator: UpdateNewMessageTextCreatorType = (text) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  newText: text,
})
