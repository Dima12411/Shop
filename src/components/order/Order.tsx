import React from 'react';
import styles from './Order.module.css'
import {StateItemsType} from "../../App";

type PropsType = {
    item: StateItemsType
}

const Order = ({item, ...props}: PropsType) => {
    return (
        <div className={styles.item}>
            <img src={'./img/' + item.img} alt='Здесь дожна быть картинка'/>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <b>{item.price}$</b>
        </div>
    );
};

export default Order;