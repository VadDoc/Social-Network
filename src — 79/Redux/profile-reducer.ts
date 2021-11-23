import {v1} from "uuid";
import img from "../images/ava.png";
import img1 from "../images/ava1.jpeg";
import img2 from "../images/ava2.jpeg";
import {Dispatch} from "redux";
import {profileApi} from "../api/api";

export type PostItemType = {
  id: string
  img: string
  message: string
  likesCount: number
}
export type DataUserProfileType = {
  aboutMe: null | string
  contacts: {
    facebook: null | string
    website: null | string
    vk: null | string
    twitter: null | string
    instagram: null | string
    "youtube": null | string
    github: null | string
    mainLink: null | string
  }
  lookingForAJob: boolean
  lookingForAJobDescription: null | string
  "fullName": null | string
  "userId": number
  "photos": {
    "small": string | undefined
    "large": string | undefined
  }
}
export type ProfilePageType = typeof initialState

export type ProfileReducerActionsType =
  AddPostActionType |
  GetUserProfileActionType |
  GetUserProfileStatusActionType |
  UpdateUserProfileStatusActionType
type AddPostActionType = ReturnType<typeof addPostAC>
type GetUserProfileActionType = ReturnType<typeof getUserProfile>
type GetUserProfileStatusActionType = ReturnType<typeof getUserProfileStatus>
type UpdateUserProfileStatusActionType = ReturnType<typeof updateUserProfileStatus>

const initialState = {
  myPostsData: [
    {id: v1(), img: img1, message: 'Hello! How are you', likesCount: 4},
    {id: v1(), img: img2, message: 'What are doing now?', likesCount: 14},
  ] as Array<PostItemType>,
  userProfile: {} as DataUserProfileType,
  userStatus: ''
}

export const profileReducer = (state: ProfilePageType = initialState, action: ProfileReducerActionsType): ProfilePageType => {
  switch (action.type) {
    case 'ADD_POST':
      return {
        ...state,
        myPostsData: [...state.myPostsData, {id: v1(), img: img, message: action.post, likesCount: 0}]
      }
    case 'GET_USER_PROFILE':
      return {
        ...state,
        userProfile: action.dataUserProfile
      }
    case 'GET_USER_PROFILE_STATUS':
      return {
        ...state,
        userStatus: action.userId
      }
    case 'UPDATE_USER_PROFILE_STATUS':
      return {
        ...state,
        userStatus: action.userStatus
      }
    default:
      return state
  }
}

export const addPostAC = (post: string) => {
  return {
    type: 'ADD_POST', post
  } as const
}
const getUserProfile = (dataUserProfile: DataUserProfileType) => {
  return {
    type: 'GET_USER_PROFILE', dataUserProfile
  } as const
}

const getUserProfileStatus = (userId: string) => {
  return {
    type: 'GET_USER_PROFILE_STATUS', userId
  } as const
}

const updateUserProfileStatus = (userStatus: string) => {
  return {
    type: 'UPDATE_USER_PROFILE_STATUS', userStatus
  } as const
}
//THUNKS
export const getUserProfilePage = (userId: string) => {
  return (dispatch: Dispatch) => {
    profileApi.getUserProfile(userId).then(response => {
      dispatch(getUserProfile(response.data)) // отправляем в store userProfile
    })
  }
}

export const getUserProfilePageStatus = (userId: string) => {
  return (dispatch: Dispatch) => {
    profileApi.getUserProfileStatus(userId).then(response => {
      dispatch(getUserProfileStatus(response.data))
    })
  }
}

export const updateUserProfilePageStatus = (userStatus: string) => {
  return (dispatch: Dispatch) => {
    profileApi.updateUserProfileStatus(userStatus).then(response => {
      if (response.data.resultCode === 0) {
        dispatch(updateUserProfileStatus(userStatus))
      }
    })
  }
}