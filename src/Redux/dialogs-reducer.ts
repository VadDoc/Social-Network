import {v1} from "uuid";
import {DialogPropsType} from "../components/Content/Dialogs/Dialog/Dialog";
import {MessageType} from "../components/Content/Dialogs/Message/Message";

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
}

export const dialogsReducer = (state: MessagesPageType = initialState, action: DialogsReducerActionsType): MessagesPageType => {
  switch (action.type) {
    case 'ADD_MESSAGE':
      const text = action.newMessage
      return {
        ...state,
        messagesData: [...state.messagesData, {id: v1(), message: text}]
      }
    default:
      return state
  }
}

export type MessagesPageType = typeof initialState
export type DialogsReducerActionsType = AddMessageActionType
type AddMessageActionType = ReturnType<typeof sendNewMessageAC>
export const sendNewMessageAC = (newMessage: string) => {
  return {
    type: 'ADD_MESSAGE',
    newMessage
  } as const
}

