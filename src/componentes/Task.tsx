import { Trash } from "phosphor-react";
import React from "react";
import styles from './Task.module.css'


interface TasksProps{
    content: string;
}

export function Tasks({content}: TasksProps){
    return(
        <div className={styles.alltasks}>
            <div className={styles.tasks}>
                <input type="checkbox" />
                <label>{content}</label>
                <button title='Deletar comentario'><Trash size={25} /></button>
            </div>
        </div>
    )
}