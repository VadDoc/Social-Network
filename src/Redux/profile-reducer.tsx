import {ActionType, AddPostActionType, StateType, UpdateNewPostTextActionType} from "./state";
import {PostItemType} from "../components/Content/Profile/MyPosts/MyPosts";
import {v1} from "uuid";
import img from "../images/ava.png";

export type ProfilePageType = {
  myPostsData: Array<PostItemType>
  newPostText: string
}

const ADD_POST = 'ADD_POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'

export const profileReducer = (state: ProfilePageType, action: ActionType) => {
  switch(action.type) {
    case ADD_POST:
      const newPost: PostItemType = {
        id: v1(),
        img: img,
        message: state.newPostText,
        likesCount: 0
      }
      if (newPost.message) state.myPostsData.push(newPost)
      state.newPostText = ''
      return state
    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.post
      return state
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