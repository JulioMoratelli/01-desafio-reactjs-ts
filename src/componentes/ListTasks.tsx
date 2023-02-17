import React, { useState } from 'react';
import styles from './ListTasks.module.css'
import { ClipboardText } from 'phosphor-react';
import { Tasks } from './Task';
import { Newtasks } from './Newtasks';

interface Taskss{
    tasks: string[];
    deleteTask: (tasks: string) => void
} 



export function ListTasks({tasks, deleteTask}: Taskss){
    const [taskIsChecked, setTaskIsChecked] = useState(new Array(tasks.length).fill(false));

    const checkedCounter = taskIsChecked.reduce((quantidade, valor) => quantidade + (valor ? 1 : 0), 0);

    return (
        <div className={styles.tasks}>
            <div>
                <article>
                    <div className={styles.counter}>
                        <p>Tarefas Criadas<span>{tasks.length}</span></p>
                        <p className={styles.p2}>Concluídas<span>{checkedCounter} de {tasks.length}</span></p>
                    </div>
                </article>


                {tasks.length >= 1 ? (
                    <div>
                        {tasks.map((task, index) => {
                            return (
                                <Tasks 
                                    key={task} 
                                    content={task} 
                                    deleteTask={deleteTask}
                                    taskIsChecked={taskIsChecked[index]}
                                    setTaskIsChecked={(isChecked) => {
                                        setTaskIsChecked(predication => {
                                            const novoEstado = [...predication];
                                            novoEstado[index] = isChecked;
                                            return novoEstado;
                                        });
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