import {v1} from "uuid";
import img from "../images/ava.png";
import img1 from "../images/ava1.jpeg";
import img2 from "../images/ava2.jpeg";
import {DataUserProfileType} from "../components/Content/Profile/ProfileContainer";

export type PostItemType = {
  id: string
  img: string
  message: string
  likesCount: number
}
export type ProfilePageType = typeof initialState

const ADD_POST = 'ADD_POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'

const initialState = {
  myPostsData: [
    {id: v1(), img: img1, message: 'Hello! How are you', likesCount: 4},
    {id: v1(), img: img2, message: 'What are doing now?', likesCount: 14},
  ] as Array<PostItemType>,
  newPostText: '',
  userProfile: {}
}

export const profileReducer = (state: ProfilePageType = initialState, action: ProfileReducerActionsType): ProfilePageType => {
  switch (action.type) {
    case ADD_POST:
      const newPost: PostItemType = {
        id: v1(),
        img: img,
        message: state.newPostText,
        likesCount: 0
      }
      return {
        ...state,
        newPostText: '',
        myPostsData: [...state.myPostsData, {id: v1(), img: img, message: state.newPostText, likesCount: 0}]
      }
    case UPDATE_NEW_POST_TEXT:
      return {
        ...state,
        newPostText: action.post
      }
    case SET_USER_PROFILE:
      return {
        ...state,
        userProfile: action.dataUserProfile
      }
    default:
      return state
  }
}

export type ProfileReducerActionsType = AddPostActionType | OnChangePostActionType | SetUserProfileActionType
type AddPostActionType = ReturnType<typeof addPostAC>
type OnChangePostActionType = ReturnType<typeof onChangePostAC>
type SetUserProfileActionType = ReturnType<typeof setUserProfile>

export const addPostAC = () => {
  return {
    type: ADD_POST
  } as const
}
export const onChangePostAC = (post: string) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    post: post
  } as const
}
export const setUserProfile = (dataUserProfile: DataUserProfileType) => {
  return {
    type: SET_USER_PROFILE, dataUserProfile
  } as const
}