export type UserType = {
  name: string
  id: number
  uniqueUrlName: null | string
  photos: {
    small: null | string
    large: null | string
  }
  status: null | string
  followed: boolean
}
export type UsersPageType = {
  users: Array<UserType>
  pageSize: number
  totalUsersCount: number
  currentPage: number
}

const FOLLOW_USER = 'FOLLOW_USER'
const UNFOLLOW_USER = 'UNFOLLOW_USER'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'

const initialState = {
  users: [],
  pageSize: 20,
  totalUsersCount: 0,
  currentPage: 1
}

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
        ...state, users: action.users
      }
    case SET_CURRENT_PAGE:
      return {
        ...state, currentPage: action.numberCurrentPage
      }
    case SET_TOTAL_USERS_COUNT:
      return {
        ...state, totalUsersCount: action.totalUsersCount
      }
    default:
      return state
  }
}

export type UsersReducerActionsType =
  FollowUsersActionType
  | UnFollowUsersActionType
  | SetUsersActionType
  | SetCurrentPageActionType
  | SetTotalUsersCountActionType
type FollowUsersActionType = ReturnType<typeof followUsersAC>
type UnFollowUsersActionType = ReturnType<typeof unFollowUsersAC>
type SetUsersActionType = ReturnType<typeof setUsersAC>
type SetCurrentPageActionType = ReturnType<typeof setCurrentPageAC>
type SetTotalUsersCountActionType = ReturnType<typeof setTotalUsersCountAC>

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
export const setUsersAC = (users: Array<UserType>) => {
  return {
    type: SET_USERS,
    users
  } as const
}
export const setCurrentPageAC = (numberCurrentPage: number) => {
  return {
    type: SET_CURRENT_PAGE,
    numberCurrentPage
  } as const
}
export const setTotalUsersCountAC = (totalUsersCount: number) => {
  return {
    type: SET_TOTAL_USERS_COUNT,
    totalUsersCount
  } as const
}

