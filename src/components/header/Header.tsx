import React, {useState} from 'react';
import styles from './Header.module.css'
import {FaShoppingCart} from "react-icons/fa";
import {StateItemsType} from "../../App";
import Order from "../order/Order";

type PropsType = {
    orders: Array<StateItemsType>
}

const Header = ({orders, ...props}: PropsType) => {
    const [cartOpen, setCartOpen] = useState<boolean>(false)
    const onClickHandler = () => {
        setCartOpen(!cartOpen)
    }

    const showOrders = (orders:  Array<StateItemsType>) => {
        return (
            <div>
                {orders.map(el => {
                    return (
                        <Order key={el.id} item={el}/>
                    )
                })}
            </div>
        )
    }

    const showNothing = () => {
        return (
            <div className={styles.empty}>
                <h2>Товаров нет</h2>
            </div>
        )
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
                        {orders.length > 0
                            ? showOrders(orders)
                            : showNothing()
                        }
                    </div>
                )}
            </div>
            <div className={styles.presentation}></div>
        </header>
    );
};

export default Header;