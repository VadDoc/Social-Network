import {v1} from "uuid";
import {DialogPropsType} from "../components/Content/Dialogs/Dialog/Dialog";
import {MessageType} from "../components/Content/Dialogs/Message/Message";
import {ActionType} from "./redux-store";

export type MessagesPageType = {
  dialogsData: Array<DialogPropsType>
  messagesData: Array<MessageType>
  newMessageText: string
}

export type AddMessageActionType = {
  type: 'SEND_MESSAGE'
}

export type UpdateNewMessageTextActionType = {
  type: 'UPDATE_NEW_MESSAGE_TEXT',
  newText: string,
}

const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT'
const SEND_MESSAGE = 'SEND_MESSAGE'

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
  newMessageText: '',
}

export const dialogsReducer = (state: MessagesPageType = initialState, action: ActionType) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_TEXT:
      state.newMessageText = action.newText
      return state
    case SEND_MESSAGE:
      let text = state.newMessageText
      state.newMessageText = ''
      if (text)
        state.messagesData.push({
          id: v1(),
          message: text,
        })
      return state
    default:
      return state
  }
}

type AddMessageCreatorType = () => AddMessageActionType
type UpdateNewMessageTextCreatorType = (text: string) => UpdateNewMessageTextActionType

export const addMessageActionCreator: AddMessageCreatorType = () => ({type: SEND_MESSAGE})
export const updateNewMessageTextActionCreator: UpdateNewMessageTextCreatorType = (text) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  newText: text,
})
