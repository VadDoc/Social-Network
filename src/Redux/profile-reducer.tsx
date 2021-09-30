import {PostItemType} from "../components/Content/Profile/MyPosts/MyPosts";
import {v1} from "uuid";
import img from "../images/ava.png";
import img1 from "../images/ava1.jpeg";
import img2 from "../images/ava2.jpeg";
import {ActionType} from "./redux-store";

export type ProfilePageType = {
  myPostsData: Array<PostItemType>
  newPostText: string
}

export type AddPostActionType = {
  type: 'ADD_POST'
}
export type UpdateNewPostTextActionType = {
  type: 'UPDATE_NEW_POST_TEXT'
  post: string
}


const ADD_POST = 'ADD_POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'

const initialState = {
  myPostsData: [
    {id: v1(), img: img1, message: 'Hello! How are you', likesCount: 4},
    {id: v1(), img: img2, message: 'What are doing now?', likesCount: 14},
  ],
  newPostText: ''
}

export const profileReducer = (state: ProfilePageType = initialState, action: ActionType): ProfilePageType => {
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

type AddPostActionCreatorType = () => AddPostActionType
type OnChangePostActionCreatorType = (post: string) => UpdateNewPostTextActionType

export const addPostActionCreator: AddPostActionCreatorType = () => ({
  type: ADD_POST
})

export const onChangePostCreator: OnChangePostActionCreatorType = (post) => ({
  type: UPDATE_NEW_POST_TEXT,
  post: post
})