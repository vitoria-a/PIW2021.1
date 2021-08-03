import { Post } from "../PaginaFeed/Post";
import "./LinhaDoTempo.css";

export default function LinhaDoTempo() {

    let infoPosts = {
        posts: [
            {
                id: 1,
                nomeUsuario: "Vitória Gomes",
                texto: "Menino, hoje está quente demais",
                likes: 6,
                userComentario: "Lucas",
                comentarios: "Concordo"
            },
            {
                id: 2,
                nomeUsuario: "Bruno",
                texto: "No Ceará é um sol pra cada cabeça",
                likes: 3,
                userComentario: "Lucas",
                comentarios: "É verdade, rsrsrs"
            }
        ]
    }
    const post = infoPosts.posts.map((post) => 
        <Post usuario={post.nomeUsuario} texto={post.texto} likes={post.likes} userComentario={post.userComentario} comentarios={post.comentarios}> </Post>    
    )

    return (
        <div className="linha-tempo">
            {post}
        </div>

    )
}