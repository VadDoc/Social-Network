import React from 'react'
import {NavLink} from 'react-router-dom'
import styles from './User.module.scss'
import img from '../../../../images/ava.png'
import {axiosInstance} from "../../../Сommon/AxiosInstance/axiosInstance";
import {Button} from "../../Button/Button";

type UserPropsType = {
  userID: number
  name: string
  uniqueUrlName: null | string
  photos: {
    small: null | string
    large: null | string
  }
  status: null | string
  followed: boolean
  followUser: (id: number) => void
  unFollowUser: (id: number) => void
}
type DataPostUserType = {
  resultCode: number
  messages: []
  data: {}
}

export const User: React.FC<UserPropsType> = ({
                                                userID, photos, name,
                                                status, followed,
                                                unFollowUser, followUser
                                              }) => {
  const followUserByApi = () => {
    axiosInstance.post<any>(`/follow/${userID}`, {})
      .then(response => {
        if (response.data.resultCode === 0) {
          followUser(userID)
        }
      })
  }

  const unFollowUserByApi = () => {
    axiosInstance.delete<DataPostUserType>(`/follow/${userID}`, {})
      .then(response => {
        if (response.data.resultCode === 0) {
          unFollowUser(userID)
        }
      })
  }

  const toggleFollowUser = () => followed ? unFollowUserByApi() : followUserByApi()

  const titleButton = followed ? 'Unfollow' : 'Follow'

  return (
    <div className={styles.user}>
      <div className={styles.logo}>
        <NavLink to={`/profile/${userID}`}>
          <img src={photos.small ? photos.small : img} alt={''}/>
        </NavLink>
        {/*{followed ?*/}
        {/*  <button onClick={unFollowUserByApi}>Unfollow</button> :*/}
        {/*  <button onClick={followUserByApi}>Follow</button>*/}
        {/*}*/}

        <Button className={'buttonFollow'} callBack={toggleFollowUser}>{titleButton}</Button>
      </div>
      <div className={styles.info}>
        <div>
          <div>{name}</div>
          <div>{status}</div>
        </div>
        <div>
          {/*<div>{location.country}</div>*/}
          {/*<div>{location.city}</div>*/}
        </div>
      </div>
    </div>
  )
}