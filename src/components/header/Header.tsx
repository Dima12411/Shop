import React from 'react';
import styles from './Header.module.css'

const Header = () => {
    return (
        <header>
            <div>
                <span className={styles.logo}>Fame House</span>
                <ul className={styles.nav}>
                    <li>Про нас</li>
                    <li>Контакты</li>
                    <li>Кабинет</li>
                </ul>
            </div>
            <div className={styles.presentation}></div>
        </header>
    );
};

export default Header;