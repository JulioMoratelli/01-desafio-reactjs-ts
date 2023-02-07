import React from 'react';
import styles from './Task.module.css'
import { ClipboardText } from 'phosphor-react';

export function Tasks(){
    return(
        <div className={styles.tasks}>
            <article>
                <div className={styles.counter}>
                    <p>Tarefas Criadas<span>0</span></p>
                    <p>Concluídas<span>0</span></p>
                </div>
            </article>
            <footer>
                <div className={styles.duties}>
                    <ClipboardText size={84} /> 
                    <p>Você ainda não tem tarefas cadastradas<p>Crie tarefas e organize seus itens a fazer</p></p>               
                </div>
            </footer>
        </div>
    )
}