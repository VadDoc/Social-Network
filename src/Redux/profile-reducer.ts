import {v1} from "uuid";
import img from "../images/ava.png";
import img1 from "../images/ava1.jpeg";
import img2 from "../images/ava2.jpeg";
import {Dispatch} from "redux";
import {profileApi} from "../api/api";

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
    case 'profile/ADD_POST':
      return {
        ...state,
        myPostsData: [...state.myPostsData, {id: v1(), img: img, message: action.post, likesCount: 0}]
      }
    case 'profile/GET_USER_PROFILE':
      return {
        ...state,
        userProfile: action.dataUserProfile
      }
    case 'profile/GET_USER_PROFILE_STATUS':
      return {
        ...state,
        userStatus: action.userId
      }
    case 'profile/UPDATE_USER_PROFILE_STATUS':
      return {
        ...state,
        userStatus: action.userStatus
      }
    case 'profile/DELETE_POST':
      return {
        ...state,
        myPostsData: [...state.myPostsData.filter(post => post.id !== action.postId)]
      }
    case 'profile/SAVE_FILE':
      return {
        ...state,
        userProfile: {...state.userProfile, photos: action.photos}
      }
    default:
      return state
  }
}

export const addPostAC = (post: string) => {
  return {
    type: 'profile/ADD_POST', post
  } as const
}
const getUserProfile = (dataUserProfile: DataUserProfileType) => {
  return {
    type: 'profile/GET_USER_PROFILE', dataUserProfile
  } as const
}

const getUserProfileStatus = (userId: string) => {
  return {
    type: 'profile/GET_USER_PROFILE_STATUS', userId
  } as const
}

const updateUserProfileStatus = (userStatus: string) => {
  return {
    type: 'profile/UPDATE_USER_PROFILE_STATUS', userStatus
  } as const
}

export const deletePost = (postId: string) => {
  return {
    type: 'profile/DELETE_POST', postId
  } as const
}
const setPhoto = (photos: any) => {
  return {
    type: 'profile/SAVE_FILE', photos
  } as const
}
//THUNKS
export const getUserProfilePage = (userId: string) => async (dispatch: Dispatch) => {
  const response = await profileApi.getUserProfile(userId)
  dispatch(getUserProfile(response.data)) // отправляем в store userProfile
}


export const getUserProfilePageStatus = (userId: string) => async (dispatch: Dispatch) => {
  const response = await profileApi.getUserProfileStatus(userId)
  dispatch(getUserProfileStatus(response.data))
}

export const updateUserProfilePageStatus = (userStatus: string) => async (dispatch: Dispatch) => {
  const response = await profileApi.updateUserProfileStatus(userStatus)
  if (response.data.resultCode === 0) {
    dispatch(updateUserProfileStatus(userStatus))
  }
}

export const savePhoto = (photos: File) => async (dispatch: Dispatch) => {
  const response = await profileApi.savePhoto(photos)
  if (response.data.resultCode === 0) {
    dispatch(setPhoto(response.data.photos))
  }
}

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
  UpdateUserProfileStatusActionType |
  DeletePostActionType |
  SetPhotoActionType

type AddPostActionType = ReturnType<typeof addPostAC>
type GetUserProfileActionType = ReturnType<typeof getUserProfile>
type GetUserProfileStatusActionType = ReturnType<typeof getUserProfileStatus>
type UpdateUserProfileStatusActionType = ReturnType<typeof updateUserProfileStatus>
type DeletePostActionType = ReturnType<typeof deletePost>
type SetPhotoActionType = ReturnType<typeof setPhoto>