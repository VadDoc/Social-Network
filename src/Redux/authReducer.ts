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
        ...action.data,
        isAuth: true
      }
    default:
      return state
  }
}




export const setAuthUserData = (userId: number, login: string, email: string) => {
  return {
    type: SET_USER_DATA,
    data: {userId, login, email}
  }
}