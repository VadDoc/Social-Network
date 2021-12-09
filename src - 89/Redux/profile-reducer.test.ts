import {
  addPostAC,
  DataUserProfileType, deletePost,
  PostItemType,
  profileReducer,
} from "./profile-reducer";
import img1 from "../images/ava1.jpeg";
import img2 from "../images/ava2.jpeg";

const state = {
  myPostsData: [
    {id: '1', img: img1, message: 'Hello! How are you', likesCount: 4},
    {id: '2', img: img2, message: 'What are doing now?', likesCount: 14},
  ] as Array<PostItemType>,
  userProfile: {} as DataUserProfileType,
  userStatus: ''
}

it('length of posts should be incremented', () => {

  const action = addPostAC("Test post")

  const newState = profileReducer(state, action)

  expect (newState.myPostsData.length).toBe(3)
})

it('expect new post name', () => {
  const action = addPostAC("Test post")

  const newState = profileReducer(state, action)

  expect (newState.myPostsData[2].message).toBe("Test post")
})

it('length of posts should be decremented after deleting', () => {
  const action = deletePost('1')

  const newState = profileReducer(state, action)

  expect (newState.myPostsData.length).toBe(1)
})
