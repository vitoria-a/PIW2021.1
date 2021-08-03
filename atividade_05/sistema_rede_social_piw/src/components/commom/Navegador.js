import { NavLink } from 'react-router-dom';
import './Navegador.css';

export function Navegador(props) {
    return (
        <div>
            <nav className="navegador">
                <div className="logo"> Sistema Rede Social - PIW </div>
                <div>
                    <NavLink className="link-navegador" exact to="/"> Linha do tempo </NavLink>
                </div>
                <div>
                    <NavLink className="link-navegador" exact to="/postar"> Postar </NavLink>
                </div>
                <span className="usuarioLogado">{props.usuarioLogado}</span>
            </nav>
        </div>
    )
}