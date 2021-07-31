import './Navegador.css'


export function Navegador(props) {
    let Link = (props) => (
        <li>
            <a className={props.linkClasse} href={props.caminho}>{props.linkTexto}</a>
        </li>
    )
    return (
        <div>
            <nav className="navegador">
                <div className="logo">
                    Sistema Rede Social - PIW
                </div>
                <div className="botoes">
                    <Link linkTexto="Linha do tempo" linkClasse="link-linha" caminho="https://www.facebook.com/"></Link>
                    <Link linkTexto="Postar" linkClasse="link-post" caminho="https://www.facebook.com/"></Link>
                    <span className="usuarioLogado">{props.usuarioLogado}</span>
                </div>
            </nav>
        </div>
    )
}