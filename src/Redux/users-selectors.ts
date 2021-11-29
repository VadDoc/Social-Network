import {StateType} from "./redux-store";
import {createSelector} from "reselect";
import {UserType} from "./users-reduсer";

const getUsersSelector  = (state: StateType) => {
  return state.usersPage.users
}
// если сложный селектор - используем библиотеку reselect - мемоизирует часть стейта,
//перерисовывает компоненту только при изменении зависимости (users)
export const getUsers = createSelector(getUsersSelector, (users: Array<UserType>) => {
  return users.filter(u => true) //производим некую фильтрацию
})

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