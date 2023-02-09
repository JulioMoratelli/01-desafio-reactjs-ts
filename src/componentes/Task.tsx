import { Trash } from "phosphor-react";
import React from "react";
import styles from './Task.module.css'



export function Tasks(){
    return(
        <div className={styles.alltasks}>
            <div className={styles.tasks}>
                <input type="checkbox" />
                <label>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</label>
                <button title='Deletar comentario'><Trash size={25} /></button>
            </div>
        </div>
    )
}