import React, {useState} from 'react';
import styles from './App.module.css'
import { Header } from './componentes/Header';
import { Newtasks } from './componentes/Newtasks';
import { ListTasks } from './componentes/ListTasks';
import './global.css'



export function App(){
    const [tasks, setTasks] = useState([])

    function deleteTask(tasksToDelete: string){
        const updatingCommentDelete = tasks.filter(task =>{
            return(
                task !== tasksToDelete
            )
        })
        
        setTasks(updatingCommentDelete)
    }



    return(
    <div>
        <Header />

        <div className={styles.wrapper}>
            <Newtasks 
                tasks={tasks} 
                setTasks={setTasks}
            />

            <ListTasks 
                tasks={tasks}  
                deleteTask={deleteTask}
            />
        </div>
    </div>
    )
}