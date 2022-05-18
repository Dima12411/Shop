import React, {useState} from 'react';
import styles from './App.module.css'
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Items from "./components/items/Items";

export type StateItemsType = {
    id: number
    title: string
    img: string
    desc: string
    category: string
    price: string
}

function App() {
    const [stateItems, setStateItems] = useState<Array<StateItemsType>>([
        {
            id: 1,
            title: 'Стул',
            img: 'chair.jpg',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
            category: 'chairs',
            price: '49.99'
        },
        {
            id: 2,
            title: 'Стол',
            img: 'chair.jpg',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
            category: 'tables',
            price: '249.00'
        },
        {
            id: 3,
            title: 'Диван',
            img: 'chair.jpg',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
            category: 'sofas',
            price: '329.99'
        },
        {
            id: 4,
            title: 'Шкаф',
            img: 'chair.jpg',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
            category: 'wardrobes',
            price: '110.99'
        },
        {
            id: 5,
            title: 'Кресло',
            img: 'chair.jpg',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
            category: 'armchairs',
            price: '79.00'
        },
        {
            id: 6,
            title: 'Кровать',
            img: 'chair.jpg',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
            category: 'beds',
            price: '380.99'
        },

    ])
    const [orders, setOrders] = useState<Array<StateItemsType>>([])

    const addToOrder = (item: StateItemsType) => {
        let isInArray = false
        orders.forEach(el => {
            if (el.id === item.id) {
                isInArray = true
            }
        })
        !isInArray && setOrders([...orders, {...item}])
    }

    const deleteOrder = (id: number) => {
        setOrders(orders.filter(el => el.id !== id ? el : ''))
    }

    return (
        <div className={styles.wrapper}>
            <Header orders={orders} onDelete={deleteOrder}/>
            <Items items={stateItems} onAdd={addToOrder}/>
            <Footer/>
        </div>
    );
}

export default App;
