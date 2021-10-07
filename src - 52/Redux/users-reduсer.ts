import {UserType} from "../components/Content/Users/Users";

export type UsersType = Array<UserType>
export type UsersPageType = { users: UsersType }

const FOLLOW_USER = 'FOLLOW_USER'
const UNFOLLOW_USER = 'UNFOLLOW_USER'
const SET_USERS = 'SET_USERS'

const initialState = {users: []}

export const usersReducer = (state: UsersPageType = initialState, action: UsersReducerActionsType) => {
  switch (action.type) {
    case FOLLOW_USER:
      return {
        ...state,
        users: state.users.map(user => user.id === action.userID ? {...user, followed: true} : user)
      }
    case UNFOLLOW_USER:
      return {
        ...state,
        users: state.users.map(user => user.id === action.userID ? {...user, followed: false} : user)
      }
    case SET_USERS:
      return {
        ...state, users: [...action.users]
      }
    default:
      return state
  }
}

export type UsersReducerActionsType = FollowUsersActionType | UnFollowUsersActionType | SetUsersACType
type FollowUsersActionType = ReturnType<typeof followUsersAC>
type UnFollowUsersActionType = ReturnType<typeof unFollowUsersAC>
type SetUsersACType = ReturnType<typeof setUsersAC>

export const followUsersAC = (userID: number) => {
  return {
    type: FOLLOW_USER,
    userID
  } as const
}
export const unFollowUsersAC = (userID: number) => {
  return {
    type: UNFOLLOW_USER,
    userID
  } as const
}
export const setUsersAC = (users: UsersType) => {
  return {
    type: SET_USERS,
    users
  } as const
}

