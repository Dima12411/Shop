import React from 'react';
import styles from './Item.module.css'
import {StateItemsType} from "../../../App";

type PropsType = {
    item: StateItemsType
    onAdd: (item: any) => void
    onShowItem: (item: StateItemsType) => void
}

const Item = ({item, onAdd, onShowItem, ...props}: PropsType) => {
    return (
        <div className={styles.item}>
            <img src={item.img} alt='Здесь дожна быть картинка' onClick={() => onShowItem(item)}/>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <b>{item.price}$</b>
            <button className={styles.addToCart}
                    onClick={() => onAdd(item)}
            >+</button>
        </div>
    );
};

export default Item;