import { RocketLaunch } from 'phosphor-react'

import styles from './Header.module.css'

export function Header(){
    return(
        <header className={styles.header}>
            <p><RocketLaunch size={40} /></p>
            <p className={styles.titulo}>to</p>
            <p className={styles.titulo}>do</p>
        </header>
    )
}