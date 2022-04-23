import React from 'react';
import styles from './App.module.css'
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

function App() {

    const stateItems = [
        {
            id: 1,
            title: 'Стул',
            img: '',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
            category: 'chairs',
            price: '49,99'
        },
        {
            id: 2,
            title: 'Стол',
            img: '',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
            category: 'tables',
            price: '249,00'
        },
        {
            id: 3,
            title: 'Диван',
            img: '',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
            category: 'sofas',
            price: '329,99'
        },
        {
            id: 4,
            title: 'Шкаф',
            img: '',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
            category: 'wardrobes',
            price: '110,99'
        },
        {
            id: 5,
            title: 'Кресло',
            img: '',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
            category: 'armchairs',
            price: '79,00'
        },
        {
            id: 6,
            title: 'Кровать',
            img: '',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
            category: 'beds',
            price: '380,99'
        },

    ]

    return (
        <div className={styles.wrapper}>
            <Header/>
            <Footer/>
        </div>
    );
}

export default App;
