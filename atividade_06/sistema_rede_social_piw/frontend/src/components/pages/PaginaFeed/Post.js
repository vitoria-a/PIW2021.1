import { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { cadastrarComentario, listarComentarios } from '../../../api/comentariosAPI';
import { AuthContext } from '../../../App';
import './Post.css';

function FormularioComentarios(post){
    
    const [comentarios, setComentarios] = useState([]);
    const atualizarComentarios = () => {
    listarComentarios(auth.token, post.posts.id)
        .then((res) => {
            setComentarios(res.data);
        }).catch((error) => {
            console.log(error);
        })
    }

    useEffect(() => {
        atualizarComentarios();
    }, [])


    const { auth } = useContext(AuthContext);
    const {register, handleSubmit} = useForm();
    const submeter = (texto) => {
        cadastrarComentario(auth.token, post.posts.id, texto.texto).then((response)=>{
            atualizarComentarios();
        }).catch((error) => {
            console.log(error);
        })
    }
    return (    
    <div>
        
        {comentarios.map((comentario) => (
            <>
            <h6> {comentario.usuario.nome}: {comentario.texto}</h6>
            </>
        ))}

              
        <form onSubmit={handleSubmit(submeter)}>
            <div className="interacoes2">
                <input type="text" maxLength={300} value={post.posts.id} style={{display: "none"}} {...register("id_post")}/>
                <textarea rows="2" cols="70" placeholder='Escreva seu comentário' {...register("texto")}></textarea>
                <button className="button2"> Publicar </button>
            </div>
        </form>
        
    </div>
    )
}

export function Post({posts}) {    
    return (
        <>
        {posts.map((post)=> (
            <div className="postagens">
                <div className="card">
                    <h5 className="cabecalho">{post.usuario.nome}</h5>

                    <div className="card-texto">
                        <h5>{post.texto}</h5>
                    </div>

                    <div className="interacoes">
                        <div className="likes" >
                        <span> { post.likes } likes</span>
                        </div>
                        <button className="buttoncurtir">Curtir</button>
                    </div>
                    
                    <div className="card-coment">
                        <div className="card-coment">
                            <FormularioComentarios posts={post}/>
                        </div>
                    </div>
                </div>
            </div>
            
        ))}
        </>
    )
}