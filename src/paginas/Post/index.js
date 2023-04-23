import { Route, Routes, useParams } from "react-router-dom";
import posts from "json/posts.json";
import PostModelo from "Componentes/PostModelo";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import './Post.css'
import NaoEncontrada from "paginas/NaoEncontrada";
import PaginaPadrao from "Componentes/PaginaPadrao";
import styles from "./Post.module.css"
import PostCard from "Componentes/PostCard";

export default function Post() {
  const parametros = useParams();

  const post = posts.find((post) => {
    return post.id === Number(parametros.id);
  });

  if(!post){
    return <NaoEncontrada />
  }

  const postRecomendado = posts
      .filter((post)=>post.id !== Number(parametros.id))//exclui somente o post atual da seleção
      .sort(() => Math.random() - 0.5)
      .slice(0, 4)

if (postRecomendado.length < 4) {
  postRecomendado.push(
    ...posts.filter((post)=>post.id === Number(parametros.id))
  )
}
  return (
    <Routes>
      <Route path="*" element={<PaginaPadrao />}>
        <Route index element={ 
          <PostModelo
              fotoCapa={`/assets/posts/${post.id}/capa.png`}
              titulo={post.titulo}
              >
             <div className="post-markdown-container">
                <ReactMarkdown>
                  {post.texto}

                </ReactMarkdown>
             </div>
            <h2 className={styles.tituloOutrosPosts}>
              Outros posts que você pode gostar:
            </h2>
            <ul className={styles.postsRecomendados}>
                {postRecomendado.map((post)=>
                  <li key={post.id}>
                    <PostCard post={post} />
                  </li>
                )}
            </ul>
          </PostModelo>}/>

      </Route>

    </Routes>
  )
}
