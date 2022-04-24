import React from 'react';
import styles from './Items.module.css'
import {StateItemsType} from "../../App";
import Item from "./Item/Item";

type ItepmsProps = {
    items: Array<StateItemsType>
}

const Items = (props: ItepmsProps) => {
    return (
        <main>
            {props.items.map(el => {
                return (
                    <Item key={el.id} item={el}/>
                )
            })}
        </main>
    );
};

export default Items;