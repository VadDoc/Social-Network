import {v1} from "uuid";
import img from "../images/ava.png";
import img1 from "../images/ava1.jpeg";
import img2 from "../images/ava2.jpeg";

export type PostItemType = {
  id: string
  img: string
  message: string
  likesCount: number
}
export type ProfilePageType = typeof initialState

const ADD_POST = 'ADD_POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'

const initialState = {
  myPostsData: [
    {id: v1(), img: img1, message: 'Hello! How are you', likesCount: 4},
    {id: v1(), img: img2, message: 'What are doing now?', likesCount: 14},
  ] as Array<PostItemType>,
  newPostText: ''
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
    default:
      return state
  }
}

export type ProfileReducerActionsType = AddPostActionType | OnChangePostActionType
type AddPostActionType = ReturnType<typeof addPostAC>
type OnChangePostActionType = ReturnType<typeof onChangePostAC>

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