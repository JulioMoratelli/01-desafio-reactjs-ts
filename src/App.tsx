import React, {useState} from 'react';
import styles from './App.module.css'
import { Header } from './componentes/Header';
import { Newtasks } from './componentes/Newtasks';
import { ListTasks } from './componentes/ListTasks';
import './global.css'



export function App(){
    const [tasks, setTasks] = useState([])


    return(
    <div>
        <Header />

        <div className={styles.wrapper}>
           <Newtasks tasks={tasks} setTasks={setTasks}/>

           <ListTasks tasks={tasks} />
        </div>
    </div>
    )
}