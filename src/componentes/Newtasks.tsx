import styles from './Newtasks.module.css'
import React, {FormEvent, useState } from 'react';
import { PlusCircle } from 'phosphor-react';
import { ChangeEvent } from 'react';
import { Task } from '../App'

interface Taskss{
    tasks: Task[];
    setTasks: (tasks: Task[]) => void;
} 


export function Newtasks({tasks, setTasks}: Taskss){
    

    const [newTasksText, setTasksText] = useState('')

    function handleCreateNewTask(event: FormEvent){
        event.preventDefault()        
        //nessa condição abaixo crei um const "achou" que vai receber tasks.find, find é utilizado para identificar quais são os arrays
        //dentro do array e vai atribuir cada array a um "T" que sera usado como parametro para identificar se tem algum array(t) que é igual
        // ao "newTaskText", se tiver algum igual ele vai retornar true se for diferente ele vai retorna false.
        const achou = tasks.find((t) => t.text == newTasksText)
        // no if se "achou" for igual a verdadeiro ele retorna true e cai em uma condição que vai retorar um alerta dizendo
        // que essa tarefa ja existe.
        // e o else vai vai adicionar uma nosta task caso ja não tenha uma igual repetida.
        if (achou) {      
            return(
                alert('Essa tarefa ja existe')
            )
        } else if (newTasksText === ''){
            return(
                alert('Por favor preencha o campo corretamente')
            )
        } else{
            setTasks([...tasks, {
                text: newTasksText,
                checked: false
            }])
            setTasksText('')          
        }
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
                    // required
                    placeholder="Adicione uma nova tarefa" 
                />
                <button className={styles.addtasks}>Criar<PlusCircle size={32}/></button>
            </div>
        </form>
    )
}