import { NavLink } from 'react-router-dom';
import './Post.css';

export function Post(props) {
    return (
        <div className="postagens">
            <div className="card">
                <h4 className="cabecalho">{props.usuario}</h4>
                <div className="card-texto">
                    <p>{props.texto}</p>
                </div>

                <div className="interacoes">
                    <h4 className="likes">{props.likes} likes </h4>
                    <NavLink className="button" exact to="/"> Curtir </NavLink>
                </div>
                
                <div className="card-coment">
                    <div className="card-coment">
                        <p>Comentarios </p>
                        <p>{props.userComentario}: {props.comentarios}</p>
                    </div>
                </div>

                <div className="comentario">
                    <textarea rows="2" cols="80" placeholder='Escreva seu comentario' ></textarea>
                    <NavLink className="button-comentario" exact to="/"> Comentar </NavLink>
                </div>
            </div>
        </div>
    )
}