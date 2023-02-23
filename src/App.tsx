import React, {useState, useEffect} from 'react';
import styles from './App.module.css'
import { Header } from './componentes/Header';
import { Newtasks } from './componentes/Newtasks';
import { ListTasks } from './componentes/ListTasks';
import './global.css'

export interface Task {
    text: string
    checked: boolean
}

// tasks = [
//     "a",
//     "b",
//     "c"
// ]

// tasks = [
//     {
//         text: "a",
//         checked: false
//     },
//     {
//         text: "b",
//         checked: false
//     },
//     {
//         text: "c",
//         checked: false
//     }
//     +
//     "sadas"
// ]

export function App(){
    const [tasks, setTasks] = useState<Task[]>([])
    
    function deleteTask(tasksToDelete: string){
        const updatingCommentDelete = tasks.filter(task =>{
            return(
                task.text !== tasksToDelete
            )
        })
        
        setTasks(updatingCommentDelete)
    }

    useEffect(() => {
        console.log(tasks)
    }, [tasks]);

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
                setTasks={setTasks}
                deleteTask={deleteTask}
            />
        </div>
    </div>
    )
}