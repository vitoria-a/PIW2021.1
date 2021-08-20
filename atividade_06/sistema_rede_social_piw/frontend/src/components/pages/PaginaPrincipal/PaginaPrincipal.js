import LinhaDoTempo from '../LinhaDoTempo/LinhaDoTempo';
import { Navegador } from '../../commom/Navegador';
import './PaginaPrincipal.css';

export function PaginaPrincipal() {
    return(
        <div className="container">
            <Navegador/>
            <LinhaDoTempo/>
        </div>
    )
}
//<LinhaDoTempo/>