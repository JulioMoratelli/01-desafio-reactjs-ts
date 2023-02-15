import React, { useState } from 'react';
import styles from './ListTasks.module.css'
import { ClipboardText } from 'phosphor-react';
import { Tasks } from './Task';
import { Newtasks } from './Newtasks';

interface Taskss{
    tasks: string[];
} 

export function ListTasks({tasks}: Taskss){
    
    return(
        <div className={styles.tasks}>

            <div>
            <article>
                <div className={styles.counter}>
                    <p>Tarefas Criadas<span>0</span></p>
                    <p className={styles.p2}>Concluídas<span>3 de 5</span></p>
                </div>
            </article>
            <footer>
                <div className={styles.duties}>
                    <ClipboardText size={84} /> 
                    <p>Você ainda não tem tarefas cadastradas <p>Crie tarefas e organize seus itens a fazer</p></p>               
                </div>
            </footer>
            </div>
                <div>
                    {tasks.map(task =>{
                        return(
                            <Tasks key={task} content={task}/>      
                            )}
                        )
                    }
                </div> 
        </div>
    )
}