import styles from './Newtasks.module.css'
import React, {FormEvent, useState } from 'react';
import { PlusCircle } from 'phosphor-react';
import { Tasks } from './Task';
import { ChangeEvent } from 'react';
import { set } from 'date-fns';
import { ListTasks } from './ListTasks';

interface Taskss{
    tasks: string;
    setTasks: (tasks: string[]) => void;
} 


export function Newtasks({tasks, setTasks}: Taskss){
    

    const [newTasksText, setTasksText] = useState('')
    

    function handleCreateNewTask(event: FormEvent){
        event.preventDefault()                
        setTasks([...tasks, newTasksText]) 
        setTasksText('')   
    }
    
    const handleNewTasks = (event : ChangeEvent<HTMLInputElement>) =>{
        
        setTasksText(event.target.value); 
            
    }



    return(
        <form onSubmit={handleCreateNewTask}>
            <div className={styles.newtask}>
                <input 
                    type="text" 
                    className={styles.input} 
                    value={newTasksText}
                    onChange={handleNewTasks} 
                    required
                    placeholder="Adicione uma nova tarefa" 
                />
                <button className={styles.addtasks}>Criar<PlusCircle size={32}/></button>
            </div>
        </form>
    )
}