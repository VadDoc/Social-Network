import image from "../../images/gold-elephant.png";
import React from "react";
import styles from './Header.module.scss'
import {NavLink} from 'react-router-dom'

type PropsType = {
  login: null | string
  isAuth: boolean
  logout: () => void
  title: string
}

export const Header = ({login, isAuth, logout, title}: PropsType) => {
  return (
    <header className={styles.header}>
      <div>
        <img src={image} alt="elephant"/>
      </div>
      <h1>{title}</h1>
      <div className={styles.loginBlock}>
        {isAuth
          ? <><p>{login}</p><p><button onClick={logout}>Log out</button></p></>
          : <NavLink to={'/login'}>login</NavLink>
        }
      </div>
    </header>
  )
}