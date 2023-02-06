import { RocketLaunch } from 'phosphor-react'

import styles from './Header.module.css'

export function Header(){
    return(
        <header className={styles.header}>
            <p><RocketLaunch size={40} />todo</p>
        </header>
    )
}