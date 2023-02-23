import React, { useState } from 'react';
import styles from './ListTasks.module.css'
import { ClipboardText } from 'phosphor-react';
import { Tasks } from './Task';
import { Newtasks } from './Newtasks';
import { Task } from '../App' // interface

interface Taskss{
    tasks: Task[];
    setTasks: (tasks: Task[]) => void;
    deleteTask: (tasks: string) => void
}

export function ListTasks({tasks, setTasks, deleteTask}: Taskss){
    // const [taskIsChecked, setTaskIsChecked] = useState(new Array(tasks.length).fill(false));

    // const checkedCounter = taskIsChecked.reduce((quantidade, valor) => quantidade + (valor ? 1 : 0), 0);

    // console.log(tasks)


    return (
        <div className={styles.tasks}>
            <div>
                <article>
                    <div className={styles.counter}>
                        <p>Tarefas Criadas<span>{tasks.length}</span></p>
                        <p className={styles.p2}>Concluídas<span>{tasks.filter(t=>t.checked).length} de {tasks.length}</span></p>
                    </div>
                </article>


                {tasks.length >= 1 ? (
                    <div>
                        {tasks.map((task, index) => {
                            return (
                                <Tasks 
                                    key={task.text} 
                                    content={task.text} 
                                    deleteTask={deleteTask}
                                    taskIsChecked={task.checked}
                                    setTaskIsChecked={(isChecked) => {
                                        setTasks(tasks.map(t=> task.text === t.text ? {...t, checked: isChecked} : t ));
                                    }}
                                />      
                            )
                        })}
                    </div> 
                ) : (
                        <footer>
                            <div className={styles.duties}>
                                <ClipboardText size={84} /> 
                                <p>Você ainda não tem tarefas cadastradas <p>Crie tarefas e organize seus itens a fazer</p></p>               
                            </div>
                        </footer>
                    )}                
            </div>
            
        </div>
    );
}

