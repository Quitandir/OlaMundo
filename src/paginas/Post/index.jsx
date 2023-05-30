import { Route, Routes, useParams } from "react-router-dom"
import './Post.css'
import styles from './Post.module.css'
import posts from 'assets/json/posts.json'
import PostModelo from "componentes/PostModelo";
import NaoEncontrada from "paginas/NaoEncontrada";
import PaginaPadrao from "componentes/PaginaPadrao";
import PostCard from "componentes/PostCard";
import parse from 'html-react-parser';

export default function Post() {

    const parametros = useParams();
    const post = posts.find((post) => {
        return post.id === Number(parametros.id)
    })

    if (!post) {
        return <NaoEncontrada />
    }

    const postsRecomendados = posts
        .filter((post)=> post.id !== Number(parametros.id))
        .sort((a, b) => b.id - a.id)
        .slice(0, 4)

    console.log(postsRecomendados);

    return (
        <Routes>
            <Route path="*" element={<PaginaPadrao />}>
                <Route index element={<PostModelo
                    fotoCapa={`/assets/posts/${post.id}/capa.png`}
                    titulo={post.titulo}
                >
                    <div className={styles.postVideo}>
                        {parse(post.texto)}

                    </div>
                    <h2 className={styles.tituloOutrosPosts}>
                        Outros sons que você pode gostar:
                    </h2>

                    <ul className={styles.postsRecomendados}>
                        {postsRecomendados.map((post => (
                            <li key={post.id}>
                            <PostCard post={post} />
                            </li> 
                        )))}
                    </ul>
                </PostModelo> 
            }/>
                

            </Route>

        </Routes>
    )
} 