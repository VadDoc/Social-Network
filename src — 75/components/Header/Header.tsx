import image from "../../images/gold-elephant.png";
import React from "react";
import styles from './Header.module.scss'
import {NavLink} from 'react-router-dom'

type PropsType = {
  login: null | string
  isAuth: boolean
}

export const Header = ({login, isAuth}: PropsType) => {
  return (
    <header className={styles.header}>
      <div>
        <img src={image} alt="ff"/>
      </div>
      <h1>Social network "GOLDEN ELEPHANT"</h1>
      <div className={styles.loginBlock}>
        {isAuth ? login : <NavLink to={'/login'}>login</NavLink>}
      </div>
    </header>
  )
}