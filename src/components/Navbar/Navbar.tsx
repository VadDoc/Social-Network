import React from "react";
import styles from './Navbar.module.scss'
import {NavLink} from 'react-router-dom'


export const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <NavLink to={'/profile'} activeClassName={styles.active}>Profile</NavLink>
            <NavLink to={'/dialogs'} activeClassName={styles.active}>Messages</NavLink>
            <NavLink to={'/news'} activeClassName={styles.active}>News</NavLink>
            <NavLink to={'/music'} activeClassName={styles.active}>Music</NavLink>
            <NavLink to={'/settings'} activeClassName={styles.active}>Settings</NavLink>
        </nav>
    )
}