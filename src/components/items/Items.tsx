import React from 'react';
import styles from './Items.module.css'
import {StateItemsType} from "../../App";
import Item from "./Item/Item";

type PropsType = {
    items: Array<StateItemsType>
    onAdd: (item: any) => void
}

const Items = ({items, onAdd, ...props}: PropsType) => {
    return (
        <main className={styles.main}>
            {items.map(el => {
                return (
                    <Item
                        key={el.id}
                        item={el}
                        onAdd={onAdd}
                    />
                )
            })}
        </main>
    );
};

export default Items;