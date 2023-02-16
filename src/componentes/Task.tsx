import { Trash } from "phosphor-react";
import React, { ChangeEvent } from "react";
import styles from './Task.module.css'


interface TasksProps{
    content: string;
    taskIsChecked: boolean;
    setTaskIsChecked:  React.Dispatch<React.SetStateAction<boolean>>;
}

export function Tasks({content, taskIsChecked, setTaskIsChecked}: TasksProps){
    function handleIsChecked(event: ChangeEvent<HTMLInputElement>){
        setTaskIsChecked(event.target.checked)
    }


    return(
        <div className={styles.alltasks}>
            <div className={styles.tasks}>
                <input 
                    type="checkbox" 
                    onChange={handleIsChecked}
                    checked={taskIsChecked}
                />
                <label>{content}</label>
                <button title='Deletar comentario'><Trash size={25} /></button>
            </div>
        </div>
    )
}