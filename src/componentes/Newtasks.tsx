import styles from './Newtasks.module.css'
import React, { useState } from 'react';
import { PlusCircle } from 'phosphor-react';
import { Tasks } from './Task';

export function Newtasks(){
    const [tasks, setTasks] = useState(
        ['asdasdas']
    )
    {tasks.map(task =>{
        return(
            <Tasks key={task} content={task}/>
        )
    })}
    
    return(
    <div className={styles.newtask}>
        <input type="text" className={styles.input} placeholder="Adicione uma nova tarefa" />
        <button className={styles.addtasks}>Criar<PlusCircle size={32}/></button>

        <div>
           
        </div>
    </div>
    )
}