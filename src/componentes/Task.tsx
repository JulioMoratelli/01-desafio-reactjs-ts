import { Trash } from "phosphor-react";
import React, { ChangeEvent } from "react";
import styles from './Task.module.css'
import Checkbox from '@mui/material/Checkbox';


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

interface TasksProps{
    content: string;
    taskIsChecked: boolean;
    setTaskIsChecked:  React.Dispatch<React.SetStateAction<boolean>>;
    deleteTask: (content: string) => void
}

export function Tasks({content, taskIsChecked, setTaskIsChecked, deleteTask}: TasksProps){
    function handleIsChecked(event: ChangeEvent<HTMLInputElement>){
        setTaskIsChecked(event.target.checked)
    }

    function handleDeleteTasks(){
        deleteTask(content)
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
                <button onClick={handleDeleteTasks} title='Deletar comentario'><Trash size={25} /></button>
            </div>
        </div>
    )
}