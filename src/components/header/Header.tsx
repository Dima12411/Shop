import React from 'react';
import styles from './Header.module.css'

const Header = () => {
    return (
        <header>
            <div>
                <span className={styles.logo}>Fame House</span>
            </div>
            <div className={styles.presentation}></div>
        </header>
    );
};

export default Header;