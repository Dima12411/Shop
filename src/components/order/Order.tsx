import React from 'react';
import styles from './Order.module.css'
import {StateItemsType} from "../../App";
import { FaTrash } from 'react-icons/fa'

type PropsType = {
    item: StateItemsType
    count: number
    onDelete: (id: number) => void
}

const Order = ({item, onDelete, count, ...props}: PropsType) => {
    return (
        <div className={styles.item}>
            <img src={item.img} alt='Здесь дожна быть картинка'/>
            <h2>{item.title}</h2>
            <b>{item.price}$</b>
            <FaTrash className={styles.delete_icon}
                     onClick={() => onDelete(item.id)}
            />
        </div>
    );
};

export default Order;