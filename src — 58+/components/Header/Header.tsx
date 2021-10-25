import image from "../../images/gold-elephant.png";
import React from "react";
import styles from './Header.module.scss'

export const Header = () => {
    return (
        <header className={styles.header}>
            <div>
                <img src={image} alt="ff"/>
            </div>
            <h1>Social network "GOLDEN ELEPHANT"</h1>
        </header>
    )
}