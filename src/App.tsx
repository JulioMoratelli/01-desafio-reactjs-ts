import React from 'react';
import styles from './App.module.css'
import { Header } from './componentes/Header';
import './global.css'

export function App(){
    return(
    <div>
        <Header />

        <div className={styles.wrapper}>
           
        </div>
    </div>
    )
}