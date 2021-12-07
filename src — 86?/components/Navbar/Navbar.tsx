import React from "react";
import styles from './Navbar.module.scss'
import {NavLink} from 'react-router-dom'
import {connect} from "react-redux";
import {StateType} from "../../Redux/redux-store";

export type NavigationType = {
  id: string
  pageName : string
  link : string
}
type MapDispatchToPropsType = {}
type MapStateToPropsType = {
  navBar: {
    navigation: Array<NavigationType>
  }
}

const Navbar = (props: MapDispatchToPropsType & MapStateToPropsType) => {
  const navLinkItems = props.navBar.navigation.map(item => (
    <NavLink key={item.id} to={item.link} activeClassName={styles.active}>{item.pageName}</NavLink>
  ))

    return (
        <nav className={styles.nav}>
          {navLinkItems}
        </nav>
    )
}

const mapStateToProps = (state: StateType) => {
  return {
    navBar: state.navBar
  }
}

export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, StateType>
(mapStateToProps)(Navbar)