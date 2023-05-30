import PostModelo from "componentes/PostModelo";
import fotoCapa from 'assets/video-2.3/assets/sobre_mim_capa.png';
import fotoSobreMim from 'assets/video-2.3/assets/avatar2.jpg';
import styles from './SobreMim.module.css';

export default function SobreMim () {
    return (
        <PostModelo fotoCapa={fotoCapa} titulo='Sobre mim'>
            <h3 className={styles.subtitulo}>
                Olá, eu sou o Moisés
            </h3>
            <img src={fotoSobreMim} alt="Foto" className={styles.fotoSobreMim} />

            <p className={styles.paragrafo}>            
                Nos últimos quinze anos tenho trabalhado com educação, principalmente em funções de instrução e gerenciamento. Antes de me tornar professor da educação básica em escolas públicas, tive a oportunidade de atuar como coordenador em uma escola de inglês privada. Durante esse tempo, forneci treinamento e orientação para professores, planejei e organizei grupos, aulas, currículo e eventos, e gerenciei suprimentos para professores e alunos. Como coordenador, atingimos consistentemente altos níveis de satisfação e aprendizado dos alunos, conforme indicado por pesquisas anuais.
            </p>            
            <p className={styles.paragrafo}>            
                Minha experiência recente em escolas públicas aprimorou ainda mais minhas habilidades em entender e gerenciar expectativas, cumprir prazos e colaborar em uma equipe. Nos últimos 5 anos, houve uma redução significativa no número de alunos reprovados nas aulas de inglês em minhas turmas. Como professor, meu foco principal é mostrar que os alunos fazem parte não só da sua realidade local, mas de um mundo plural.
            </p>
            <p className={styles.paragrafo}>
                No entanto, desde a conclusão de um programa de pós-graduação em Gestão Educacional, desenvolvi um forte desejo de expandir minhas habilidades em Gestão de Projetos. Com meu interesse inerente por tecnologia, comecei a fazer cursos de Gestão de Produto, o que acabou me levando a mergulhar no desenvolvimento, especialmente em JavaScript. À medida que me aprofundava nesses estudos, descobri uma paixão pela resolução de problemas, principalmente por meio da aplicação dessas novas linguagens de programação que estou aprendendo.
            </p>
            <p className={styles.paragrafo}>            
                Dadas essas experiências e interesses, agora estou focado na transição da minha carreira para o desenvolvimento. Atualmente, estou matriculado em cursos na Alura Technology para aprimorar ainda mais minhas habilidades em JavaScript e tecnologias relacionadas, com o objetivo de garantir uma posição nessa área. Além disso, tenho planos de obter um diploma acadêmico na área de tecnologia a partir de 2024.
            </p>
           
        </PostModelo>
    )
}