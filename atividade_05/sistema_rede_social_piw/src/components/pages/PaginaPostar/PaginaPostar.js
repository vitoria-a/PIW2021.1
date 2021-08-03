import { Navegador } from '../../commom/Navegador';
import { FormPostar } from '../FormPostar/FormPostar';
import '../PaginaPostar/PaginaPostar.css';

export function PaginaPostar() {
    return(
        <div className="container-pagina-postar">
            <Navegador usuarioLogado="Vitória Gomes" ></Navegador>
            <FormPostar></FormPostar>
        </div>
    )
}