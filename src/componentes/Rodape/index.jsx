import styles from './Rodape.module.css'
import { ReactComponent as MarcaRegistrada } from 'assets/video-2.3/assets/marca_registrada.svg'

export default function Rodape() {
    return (
       <footer className={styles.rodape}>
            <MarcaRegistrada />

            Desenvolvido por Alura
       </footer>
    )
}