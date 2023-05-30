import styles from './Banner.module.css'
import reactLogo from 'assets/video-2.3/assets/react-logo.png'
import minhaFoto from 'assets/video-2.3/assets/minha_foto.jpg'

export default function Banner() {
    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    Olá, mundo!
                </h1>
                <p className={styles.paragrafo}>
                    Boas vindas ao meu espaço pessoal! Eu sou Moisés Carniel e esse é um projeto desenvolvido durante uma formação de React. Aqui vou te mostrar um pouco do trabalho da minha banda, Grantezuma.
                </p>
            </div>
            <div className={styles.imagens}>
                <img 
                    className={styles.circuloColorido}
                    src={reactLogo}
                    alt='Círculo colorido'
                    area-hidden={true}
                />
                <img 
                    className={styles.minhaFoto}
                    src={minhaFoto}
                    alt='Minha foto'
                    area-hidden={true}
                />
            </div>
        </div>
    )
}