import styles from './Newtasks.module.css'
import React from 'react';
import { PlusCircle } from 'phosphor-react';

export function Newtasks(){
    return(
    <div className={styles.newtask}>
        <input type="text" className={styles.input} placeholder="Adicione uma nova tarefa" />
        <button className={styles.addtasks}>Criar<PlusCircle size={32}/></button>
    </div>
    )
}