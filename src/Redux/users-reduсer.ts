import {v1} from "uuid";
import {ActionType} from "./redux-store";
import img1 from '../images/ava1.jpeg';
import img2 from '../images/ava2.jpeg';
import img3 from '../images/ava3.jpeg';

export type FollowUsersActionType = {
  type: 'FOLLOW_USER'
  userID: string
}
export type UnFollowUsersActionType = {
  type: 'UNFOLLOW_USER'
  userID: string
}
export type SetUsersActionType = {
  type: 'SET_USERS'
  users: UsersType
}
export type UsersType = Array<UserType>
export type UserType = {
  userID: string
  avatar: string
  isFollowed: boolean
  status: string
  firstName: string
  lastName: string
  location: {country: string, city: string}
}

const FOLLOW_USER = 'FOLLOW_USER'
const UNFOLLOW_USER = 'UNFOLLOW_USER'
const SET_USERS = 'SET_USERS'

export type UsersPageType = {users: UsersType}
// export type UsersPageType = typeof initialState
const initialState = {
  users: [
    {
      userID: v1(),
      avatar: img1,
      isFollowed: false,
      status: 'I am exited',
      firstName: 'Janet',
      lastName: 'Brown',
      location: {country: 'US', city: 'New York'}
    },
    {
      userID: v1(),
      avatar: img2,
      isFollowed: false,
      status: 'I am fine',
      firstName: 'Anna',
      lastName: 'Bilyk',
      location: {country: 'Ukraine', city: 'Kyiv'}
    },
    {
      userID: v1(),
      avatar: img3,
      isFollowed: false,
      status: 'I am relax',
      firstName: 'Michel',
      lastName: 'Bones',
      location: {country: 'France', city: 'Bordo'}
    },
  ]
}

export const usersReducer = (state: UsersPageType = initialState, action: ActionType) => {
  switch (action.type) {
    case FOLLOW_USER:
      return {
        ...state,
        users: state.users.map(user => user.userID === action.userID ? {...user, isFollowed: true} : user)
      }
    case UNFOLLOW_USER:
      return {
        ...state,
        users: state.users.map(user => user.userID === action.userID ? {...user, isFollowed: false} : user)
      }
    case SET_USERS:
      return {
        ...state, users: [...state.users, ...action.users]
      }
    default:
      return state
  }
}

type FollowUsersACType = (userID: string) => FollowUsersActionType
type UnFollowUsersACType = (userID: string) => UnFollowUsersActionType
type SetUsersACType = (users: any) => SetUsersActionType

export const followUsersAC: FollowUsersACType = (userID: string) => {
  return {
    type: FOLLOW_USER,
    userID
  } as const
}
export const unFollowUsersAC: UnFollowUsersACType = (userID: string) => {
  return {
    type: UNFOLLOW_USER,
    userID
  } as const
}

export const setUsersAC: SetUsersACType = (users: UsersType) => {
  return {
    type: SET_USERS,
    users
  }  as const
}

