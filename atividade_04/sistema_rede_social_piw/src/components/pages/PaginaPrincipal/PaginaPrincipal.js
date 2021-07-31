import './PaginaPrincipal.css'
import LinhaDoTempo from '../LinhaDoTempo/LinhaDoTempo';
import { Navegador } from '../../commom/Navegador';

export function PaginaPrincipal() {
    return(
        <div className="container">
            <Navegador usuarioLogado="Vitória Gomes" > </Navegador>
            <LinhaDoTempo/>
        </div>
    )
}