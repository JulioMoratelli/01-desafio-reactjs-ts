import React from 'react';
import styles from './App.module.css'
import { Header } from './componentes/Header';
import { Newtasks } from './componentes/Newtasks';
import { ListTasks } from './componentes/ListTasks';
import './global.css'



export function App(){
    return(
    <div>
        <Header />

        <div className={styles.wrapper}>
           <Newtasks />

           <ListTasks />
        </div>
    </div>
    )
}