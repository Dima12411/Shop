import React from 'react';
import styles from './Order.module.css'
import {StateItemsType} from "../../App";
import { FaTrash } from 'react-icons/fa'

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
            <FaTrash className={styles.delete_icon}/>
        </div>
    );
};

export default Order;