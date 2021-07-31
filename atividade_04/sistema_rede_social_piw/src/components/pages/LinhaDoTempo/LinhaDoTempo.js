import "./LinhaDoTempo.css";

import { Post } from "../Postagens/Post";

export default function LinhaDoTempo() {

    let infoPosts = {
        posts: [
            {
                id: 1,
                nomeUsuario: "Vitória",
                texto: "Menino, hoje está quente demais",
                likes: 5
            },
            {
                id: 2,
                nomeUsuario: "Ana",
                texto: "Não aguento mais esse calor",
                likes: 3
            },
            {
                id: 3,
                nomeUsuario: "Bruno",
                texto: "No Ceará é um sol pra cada cabeça",
                likes: 3
            }
        ]
    }
    const post = infoPosts.posts.map((post) => 
        <Post usuario={post.nomeUsuario} texto={post.texto} likes={post.likes}> </Post>    
    )
    return (
        <div className="linha-tempo">
            {post}
        </div>
    )
}