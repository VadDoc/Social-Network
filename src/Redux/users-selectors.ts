import {StateType} from "./redux-store";

export const getUsers  = (state: StateType) => {
  return state.usersPage.users
}

export const pageSize  = (state: StateType) => {
  return state.usersPage.pageSize
}

export const totalUsersCount  = (state: StateType) => {
  return state.usersPage.totalUsersCount
}

export const currentPage  = (state: StateType) => {
  return state.usersPage.currentPage
}

export const isFetching  = (state: StateType) => {
  return state.usersPage.isFetching
}

export const followingInProgress  = (state: StateType) => {
  return state.usersPage.followingInProgress
}