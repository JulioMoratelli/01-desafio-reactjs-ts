import React from 'react';
import styles from './ListTasks.module.css'
import { ClipboardText } from 'phosphor-react';
import { Tasks } from './Task';

export function ListTasks(){
    return(
        <div className={styles.tasks}>
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
          <Tasks/>
        </div>
    )
}