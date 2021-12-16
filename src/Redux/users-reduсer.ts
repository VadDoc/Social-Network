import {Dispatch} from "redux";
import {userApi} from "../api/api";

const initialState = {
  users: [],
  pageSize: 10,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [],
}

export const usersReducer = (state: UsersPageType = initialState, action: UsersReducerActionsType) => {
  switch (action.type) {
    case 'profile/FOLLOW_USER':
      return {
        ...state,
        users: state.users.map(user => user.id === action.userID ? {...user, followed: true} : user)
      }
    case 'profile/UNFOLLOW_USER':
      return {
        ...state,
        users: state.users.map(user => user.id === action.userID ? {...user, followed: false} : user)
      }
    case 'profile/SET_USERS':
      return {
        ...state, users: action.users
      }
    case 'profile/SET_CURRENT_PAGE':
      return {
        ...state, currentPage: action.numberCurrentPage
      }
    case 'profile/SET_TOTAL_USERS_COUNT':
      return {
        ...state, totalUsersCount: action.totalUsersCount
      }
    case 'profile/TOGGLE_IS_FETCHING':
      return {
        ...state, isFetching: !state.isFetching
      }
    case 'profile/TOGGLE_FOLLOWING_PROGRESS':
      return {
        ...state,
        followingInProgress: action.isFetching ?
          [...state.followingInProgress, action.userId] :
          state.followingInProgress.filter(id => id !== action.userId)
      }
    default:
      return state
  }
}
const followUser = (userID: number) => {
  return {
    type: 'profile/FOLLOW_USER',
    userID
  } as const
}
const unFollowUser = (userID: number) => {
  return {
    type: 'profile/UNFOLLOW_USER',
    userID
  } as const
}
export const setUsers = (users: Array<UserType>) => {
  return {
    type: 'profile/SET_USERS',
    users
  } as const
}
export const setCurrentPage = (numberCurrentPage: number) => {
  return {
    type: 'profile/SET_CURRENT_PAGE',
    numberCurrentPage
  } as const
}
export const setTotalUsersCount = (totalUsersCount: number) => {
  return {
    type: 'profile/SET_TOTAL_USERS_COUNT',
    totalUsersCount
  } as const
}
const setToggleIsFetch = (isFetching: boolean) => {
  return {
    type: 'profile/TOGGLE_IS_FETCHING', isFetching
  } as const
}
export const toggleFollowingProgress = (userId: number, isFetching: boolean) => {
  return {
    type: 'profile/TOGGLE_FOLLOWING_PROGRESS', userId, isFetching
  } as const
}

//создаем ThunkCreators
export const requestUsers = (page: number, pageSize: number) => async (dispatch: Dispatch) => {
  dispatch(setToggleIsFetch(true)) //меняем статус preloader
  dispatch(setCurrentPage(page))
  const data = await userApi.getUsers(page, pageSize)
  dispatch(setToggleIsFetch(false))
  dispatch(setUsers(data.items)) // отправляем в store users
  dispatch(setTotalUsersCount(data.totalCount)) //отправляем в store кол-во users
}

export const getUsersOnChange = (numberCurrentPage: number, pageSize: number) => async (dispatch: Dispatch) => {
  debugger
  dispatch(setToggleIsFetch(true))  //меняем статус preloader
  dispatch(setCurrentPage(numberCurrentPage)) //отправляем в store кол-во номер текущей страницы
  const data = await userApi.getUsers(numberCurrentPage, pageSize)
  dispatch(setToggleIsFetch(false))
  dispatch(setUsers(data.items)) // отправляем в store users
}

export const follow = (userID: number) => async (dispatch: Dispatch) => {
  dispatch(toggleFollowingProgress(userID, true)) //disable кнопку
  const data = await userApi.followUser(userID)
  if (data.resultCode === 0) {
    dispatch(followUser(userID))
  }
  dispatch(toggleFollowingProgress(userID, false)) //unDisable кнопку
}

export const unFollow = (userID: number) => async (dispatch: Dispatch) => {
  dispatch(toggleFollowingProgress(userID, true)) //disable кнопку
  const data = await userApi.unFollowUser(userID)
  if (data.resultCode === 0) {
    dispatch(unFollowUser(userID))
  }
  dispatch(toggleFollowingProgress(userID, false)) //unDisable кнопку
}

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
  isFetching: boolean
  followingInProgress: number[]
}
export type UsersReducerActionsType =
  FollowUsersActionType
  | UnFollowUsersActionType
  | SetUsersActionType
  | SetCurrentPageActionType
  | SetTotalUsersCountActionType
  | SetToggleIsFetchActionType
  | ToggleFollowingProgressActionType
type FollowUsersActionType = ReturnType<typeof followUser>
type UnFollowUsersActionType = ReturnType<typeof unFollowUser>
type SetUsersActionType = ReturnType<typeof setUsers>
type SetCurrentPageActionType = ReturnType<typeof setCurrentPage>
type SetTotalUsersCountActionType = ReturnType<typeof setTotalUsersCount>
type SetToggleIsFetchActionType = ReturnType<typeof setToggleIsFetch>
type ToggleFollowingProgressActionType = ReturnType<typeof toggleFollowingProgress>
