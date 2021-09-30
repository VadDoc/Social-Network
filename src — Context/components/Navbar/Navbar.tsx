import React from "react";
import styles from './Navbar.module.scss'
import {NavLink} from 'react-router-dom'

export type NavigationType = {
  id: string
  pageName : string
  link : string
}

type NavBarPropsType = {
  navBar: {
    navigation: Array<NavigationType>
  }
}

export const Navbar = (props:NavBarPropsType) => {
  const navLinkItems = props.navBar.navigation.map(item => (
    <NavLink key={item.id} to={item.link} activeClassName={styles.active}>{item.pageName}</NavLink>
  ))
    return (
        <nav className={styles.nav}>
          {navLinkItems}
        </nav>
    )
}