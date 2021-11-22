import {authApi} from "../api/api";
import {Dispatch} from "redux";

type StateType = {
  id: null | number
  login: null | string
  email: null | string
  isAuth: boolean
}
type SetUserDataAction = ReturnType<typeof setAuthUserData>
type ActionsType = SetUserDataAction

const SET_USER_DATA = 'SET_USER_DATA'
const initialState = {
  id: null,
  login: null,
  email: null,
  isAuth: false,
}

export const authReducer = (state: StateType = initialState, action: ActionsType) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload,
        // isAuth: true
      }
    default:
      return state
  }
}

const setAuthUserData = (userId: number | null, login: string | null, email: string | null, isAuth: boolean) => {
  return {
    type: SET_USER_DATA,
    payload: {userId, login, email, isAuth}
  }
}

export const getAuthUserData = () => (dispatch: Dispatch) => {
  authApi.setAuthUser().then(response => {
    // если resultCode = 0 - залогинились, 1 - нет
    if (response.resultCode === 0) {
      const {id, login, email} = response.data
      dispatch(setAuthUserData(id, login, email, true))
    }
  })
}


export const login = (email: string, password: string, rememberMe: boolean) => (dispatch: Dispatch<any>) => {
  authApi.login(email, password, rememberMe).then(response => {
    if (response.resultCode === 0) {
      dispatch(getAuthUserData())
    }
  })
}


export const logout = () => (dispatch: Dispatch<any>) => {
  authApi.logout().then(response => {
    if (response.resultCode === 0) {
      dispatch(setAuthUserData(null, null, null, false))
    }
  })
}