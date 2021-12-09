import {Action} from "redux";
import {ThunkAction} from 'redux-thunk'
import {StateType} from "./redux-store";
import {getAuthUserData} from "./auth-reducer";

const initialState = {
  initialized: false
}

export const appReducer = (state: AuthStateType = initialState, action: ActionsType) => {
  switch (action.type) {
    case 'app/INITIALIZED_SUCCESS':
      return {
        ...state,
        initialized: true,
      }
    default:
      return state
  }
}

const initializedSuccessAc = () => {
  return {
    type: 'app/INITIALIZED_SUCCESS',
  } as const
}

export const initializeApp = (): ThunkType<ActionsType> => async (dispatch) => {
  // getAuthUserData() возвращает promise
  dispatch(getAuthUserData()).then(res => {
    dispatch(initializedSuccessAc())
  })
}

type ThunkType<A extends Action> = ThunkAction<Promise<void>, StateType, unknown, A>
type AuthStateType = {
  initialized: boolean
}
type ActionsType = ReturnType<typeof initializedSuccessAc>