import {authApi} from "../api/api";
import {Action} from "redux";
import { ThunkAction } from 'redux-thunk'
import {StateType} from "./redux-store";
import {stopSubmit} from "redux-form";
//типизация thunk
type ThunkType<A extends Action> = ThunkAction<Promise<void>, StateType, unknown, A>

type AuthStateType = {
  id: null | number
  login: null | string
  email: null | string
  isAuth: boolean
  title: string
}
type SetUserDataActionType = ReturnType<typeof setAuthUserData>
type StopSubmitAction = ReturnType<typeof stopSubmitAC>
type ActionsType = SetUserDataActionType | StopSubmitAction

const initialState = {
  id: null,
  login: null,
  email: null,
  isAuth: false,
  title: 'Social network "GOLDEN ELEPHANT"'
}

export const authReducer = (state: AuthStateType = initialState, action: ActionsType) => {
  switch (action.type) {
    case 'SET_USER_DATA':
      return {
        ...state,
        ...action.payload,
      }
    default:
      return state
  }
}

const setAuthUserData = (userId: number | null, login: string | null, email: string | null, isAuth: boolean) => {
  return {
    type: 'SET_USER_DATA',
    payload: {userId, login, email, isAuth}
  } as const
}

export const getAuthUserData = (): ThunkType<ActionsType> => async (dispatch) => {
  authApi.setAuthUser().then(response => {
    // если resultCode = 0 - залогинился, 1 - нет
    if (response.resultCode === 0) {
      const {id, login, email} = response.data
      dispatch(setAuthUserData(id, login, email, true))
    }
  })
}
//специальный action от redux-form для обработки ошибок
//передаем в аргументах stopSubmitAction название формы (Login.tsx)
// и проблемные свойства ('login', 'password' или _error (общая ошибка)
const stopSubmitAC = (message: string) => {
  return stopSubmit('login', {_error: `${message}`})
}

//типизация thunk
export const login = (email: string, password: string, rememberMe: boolean): ThunkType<ActionsType> => async (dispatch) => {
  authApi.login(email, password, rememberMe).then(response => {
    if (response.resultCode === 0) {
      dispatch(getAuthUserData())
    } else {
      //обработка ошибки
      const message = response.messages ? response.messages[0] : 'Some error'
      dispatch(stopSubmitAC(message))
    }
  })
}

export const logout = (): ThunkType<ActionsType> => async (dispatch) => {
  authApi.logout().then(response => {
    if (response.resultCode === 0) {
      dispatch(setAuthUserData(null, null, null, false))
    }
  })
}