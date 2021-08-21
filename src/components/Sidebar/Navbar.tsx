import React from "react";
import styles from './Navbar.module.scss'
import { NavLink } from 'react-router-dom'


export const Navbar = () => {
    return (
        <nav className={styles.nav}>
        <NavLink to={'/profile'} activeClassName={styles.active}>Profile</NavLink>

            {/* <div><a href="/#">Profile</a></div> */}
            <div><a href="/#">Messages</a></div>
            <div><a href="/#">News</a></div>
            <div><a href="/#">Music</a></div>
        </nav>
    )
}