import styles from './Newtasks.module.css'
import React, {FormEvent, useState } from 'react';
import { PlusCircle } from 'phosphor-react';
import { Tasks } from './Task';
import { ChangeEvent } from 'react';
import { set } from 'date-fns';

export function Newtasks(){
    const [task, setTask] = useState('bla')

    const [newTasksText, setTasksText] = useState('')
    
    const handleNewTasks = (event : ChangeEvent<HTMLInputElement>) =>{
        setTask(event.target.value);
    }

    function handleCreateNewTask(event: FormEvent){
        event.preventDefault()
    }
    

    return(
        <form onSubmit={handleCreateNewTask}>
            <div className={styles.newtask}>
                <input type="text" className={styles.input} onChange={handleNewTasks} placeholder="Adicione uma nova tarefa" />
                <button className={styles.addtasks}>Criar<PlusCircle size={32}/></button>
            </div>
        </form>
    )
}