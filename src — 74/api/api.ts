import axios, {AxiosResponse} from "axios";
import {UserType} from "../Redux/users-reduсer";
import {DataUserProfileType} from "../Redux/profile-reducer";

type DataUsersType = {
  error: null | string
  totalCount: number
  items: Array<UserType>
}
type DataPostUserType = {
  resultCode: number
  messages: []
  data: {}
}
type DataAuthType = {
  data: {
    id: number
    login: string
    email: string
  },
  messages: [],
  fieldsErrors: [],
  resultCode: number
}

type DataPutUserProfileStatusType = {
  data: {}
  fieldsErrors: []
  messages: []
  resultCode: 0 | 1
}

//DAL - Data Access Layer

//базовые настройки запроса в axios
const axiosInstance = axios.create({
  //настройки запроса чтобы обойти CORS и послать cookie
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    'API-key': 'b1080483-6498-445e-9780-91e9c47f08f9'
  }
})

export const userApi = {
  getUsers(currentPage: number, pageSize: number) {
    return (
      axiosInstance.get<DataUsersType>(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => response.data)
    )
  },

  followUser(userID: number) {
    return (
      axiosInstance.post<DataPostUserType>(`/follow/${userID}`)
        .then(response => response.data)
    )
  },

  unFollowUser(userID: number) {
    return (
      axiosInstance.delete<DataPostUserType>(`/follow/${userID}`, {})
        .then(response => response.data)
    )
  },

  setAuthUser() {
    return (
      axiosInstance.get<DataAuthType>(`auth/me`)
        .then(response => response.data)
    )
  }
}

export const profileApi = {
  getUserProfile(userId: string) {
    return (
      axiosInstance.get<DataUserProfileType>(`profile/${userId}`)
    )
  },

  getUserProfileStatus(userId: string) {
    return (
      axiosInstance.get<string>(`profile/status/${userId}`)
    )
  },

    updateUserProfileStatus(userStatus: string) {
    return (
      //типизация put запроса Axios: давим put и смотрим там структуру для типизации DataPutUserProfileStatusType - что приходит в респонсе
      axiosInstance.put<{status: string}, AxiosResponse<DataPutUserProfileStatusType>>(`profile/status`, {status: userStatus})
    )
  },
}

