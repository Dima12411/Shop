import React, {useState} from 'react';
import styles from './Header.module.css'
import {FaShoppingCart} from "react-icons/fa";


const Header = () => {
    const [cartOpen, setCartOpen] = useState<boolean>(false)
    const onClickHandler = () => {
        setCartOpen(!cartOpen)
    }

    return (
        <header className={styles.header}>
            <div>
                <span className={styles.logo}>Fame House</span>
                <ul className={styles.nav}>
                    <li>Про нас</li>
                    <li>Контакты</li>
                    <li>Кабинет</li>
                </ul>
                <FaShoppingCart className={styles.shop_cart_button + ' ' + `${cartOpen && 'active'}`}
                                onClick={onClickHandler}/>

                {cartOpen && (
                    <div className={styles.shop_cart}>

                    </div>
                )}
            </div>
            <div className={styles.presentation}></div>
        </header>
    );
};

export default Header;