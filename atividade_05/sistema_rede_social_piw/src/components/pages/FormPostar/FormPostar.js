import { NavLink } from 'react-router-dom';
import './FormPostar.css';

export function FormPostar() {
    return (
        <div>
            <div className="navegador">
                <textarea rows="10" cols="97" placeholder='Escreva sua publicação' ></textarea>
            </div>
            <div className="interacao">
                <NavLink className="button" exact to="/"> Publicar </NavLink>
            </div>
        </div>
    )
}