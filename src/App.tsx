import React, {useState} from 'react';
import styles from './App.module.css'
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Items from "./components/items/Items";
import Categories from "./components/categories/Categories";
import ShowFullItem from "./components/showFulllItem/ShowFullItem";
import img from './common/img/chair.jpg'

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
            img: img,
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
            category: 'chairs',
            price: '49.99'
        },
        {
            id: 2,
            title: 'Стол',
            img: img,
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
            category: 'tables',
            price: '249.00'
        },
        {
            id: 3,
            title: 'Диван',
            img: img,
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
            category: 'sofas',
            price: '329.99'
        },
        {
            id: 4,
            title: 'Шкаф',
            img: img,
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
            category: 'wardrobes',
            price: '110.99'
        },
        {
            id: 5,
            title: 'Кресло',
            img: img,
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
            category: 'armchairs',
            price: '79.00'
        },
        {
            id: 6,
            title: 'Кровать',
            img: img,
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
            category: 'beds',
            price: '380.99'
        },

    ])
    const [orders, setOrders] = useState<Array<StateItemsType>>([])
    const [currentItems, setCurrentItems] = useState<Array<StateItemsType>>(stateItems)
    const [showFullItem, setShowFullItem] = useState<boolean>(false)
    const [fullItem, setFullItem] = useState<any>({})
    const [numberOfOrders, setNumberOfOrders] = useState<number>(0)
    const [count, setCount] = useState<number>(1)

    const addToOrder = (item: StateItemsType) => {
        let isInArray = false
        orders.forEach(el => {
            if (el.id === item.id) {
                isInArray = true
            }
        })
        !isInArray && setOrders([...orders, {...item}])
        !isInArray && setNumberOfOrders(numberOfOrders + 1)
    }

    const deleteOrder = (id: number) => {
        setOrders(orders.filter(el => el.id !== id ? el : ''))
        setNumberOfOrders(numberOfOrders - 1)
    }

    const chooseCategory = (category: string) => {
        if (category === 'all') {
            setCurrentItems(stateItems)
            return
        }
        setCurrentItems(stateItems.filter(el => el.category === category ? el : ''))
    }

    const onShowItem = (item: StateItemsType) => {
        setFullItem(item)
        setShowFullItem(!showFullItem)
    }

    return (
        <div className={styles.wrapper}>
            <Header orders={orders} onDelete={deleteOrder} numberOfOrders={numberOfOrders} count={count}/>
            <Categories chooseCategory={chooseCategory}/>
            <Items items={currentItems} onAdd={addToOrder} onShowItem={onShowItem}/>

            {showFullItem && <ShowFullItem item={fullItem} onAdd={addToOrder} onShowItem={onShowItem}/>}
            <Footer/>
        </div>
    );
}

export default App;
