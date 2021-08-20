import { NavLink } from 'react-router-dom';
import './Navegador.css';
import { useContext } from 'react';
import { AuthContext } from '../../App';

function NavegadorInicial() {
    return (
        <div>
            <nav className="navegador">
                <div className="logo">
                    <NavLink className="link-navegador" exact to="/"> Sistema Rede Social - PIW </NavLink>
                </div>
                <div>
                    <NavLink className="link-navegador" exact to="/cadastro"> Cadastro </NavLink>
                </div>
                <div>
                    <NavLink className="link-navegador" exact to="/login"> Login </NavLink>
                </div>
            </nav>
        </div>
    )
}

function NavegadorLogado( {nome} ) {
    const { setAuth } = useContext(AuthContext);
    return (
        <div>
            <nav className="navegador">
                <div className="logo"> Sistema Rede Social - PIW </div>

                <div>
                    <NavLink className="link-navegador" exact to="/login"
                             onClick={() => {
                                setAuth({ token: null, nome: null })
                             }}
                    >
                        Logout
                    </NavLink>
                </div>
                <div>
                    <NavLink className="link-navegador" exact to="/"> Linha do tempo </NavLink>
                </div>
                <div>
                    <NavLink className="link-navegador" exact to="/postar"> Postar </NavLink>
                </div>
                <span className="usuarioLogado"> {nome} </span>
            </nav>
        </div>
    )
}

export function Navegador() {
    const { auth } = useContext(AuthContext);

    return (
        <div>
            {
                auth.token === null ? <NavegadorInicial/> : <NavegadorLogado nome={auth.nome}/>
            }
        </div>
    )
}