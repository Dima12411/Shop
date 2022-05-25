import React from 'react';
import {StateItemsType} from "../../App";
import styles from './ShowFullItem.module.css'

type PropsType = {
    item: StateItemsType
    onAdd: (item: StateItemsType) => void
    onShowItem: (item: StateItemsType) => void
}

const ShowFullItem = ({item, onAdd, onShowItem, ...props}: PropsType) => {
    return (
        <div className={styles.full_item}>
            <div>
                <button className={styles.close_button} onClick={() => onShowItem(item)}>x
                </button>
                <img src={item.img} alt='Здесь дожна быть картинка' onClick={() => onShowItem(item)}/>
                <h2>{item.title}</h2>
                <p>{item.desc}</p>
                <b>{item.price}$</b>
                <button className={styles.addToCart}
                        onClick={() => onAdd(item)}
                >+
                </button>
            </div>
        </div>
    );
};

export default ShowFullItem;