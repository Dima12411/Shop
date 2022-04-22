import React from 'react';
import styles from './App.module.css'
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

function App() {
    return (
        <div className={styles.wrapper}>
            <Header/>
            <Footer/>
        </div>
    );
}

export default App;
