import { Navegador } from '../../commom/Navegador';
import { FormPostar } from '../FormPostar/FormPostar';
import '../PaginaPostar/PaginaPostar.css';

export function PaginaPostar() {
    return(
        <div className="container-pagina-postar">
            <Navegador ></Navegador>
            <FormPostar></FormPostar>

        </div>
    )
}
