import { Trash } from "phosphor-react";
import React, { ChangeEvent } from "react";
import styles from './Task.module.css'


interface TasksProps{
    content: string;
    taskIsChecked: boolean;
    setTaskIsChecked: (taskIsChecked: boolean) => void;
}

export function Tasks({content, taskIsChecked, setTaskIsChecked}: TasksProps){
    function handleIsChecked(event: ChangeEvent<HTMLInputElement>){
        setTaskIsChecked(event.target.value)
    }


    return(
        <div className={styles.alltasks}>
            <div className={styles.tasks}>
                <input 
                    type="checkbox" 
                    onChange={handleIsChecked}
                />
                <label>{content}</label>
                <button title='Deletar comentario'><Trash size={25} /></button>
            </div>
        </div>
    )
}