import history from '../../../history';
import { useForm } from 'react-hook-form';
import { Navegador } from '../../commom/Navegador';
import './Login.css';
import { login } from '../../../api/auth';
import { useContext } from 'react';
import { AuthContext } from '../../../App';

function FormularioLogin(){
    const {register, handleSubmit} = useForm()
    const auth = useContext(AuthContext);

    const submeter = (usuario) => {
        login(usuario).then((response)=>{
            auth.setAuth({token: response.data.token, nome: response.data.nome})
            history.push('/')
        }).catch((error)=>{
            console.log(error)
        })
     }
    return(
        <div className="form">
            <form onSubmit={handleSubmit(submeter)}>
                E-mail: <input type="text" {...register("email")}/> <br/>
                Senha: <input type="password" {...register("senha")}/> <br/>
                <button type="submit"> Login </button>
            </form>
            <h6>  Não possui conta? Cadastre-se agora mesmo </h6>
        </div>
    )
}

export function Login(){
    return(
        <div className="cadastro">
            <Navegador/>
            <div className="card">
                <div className="card-coment">
                    <FormularioLogin/>
                </div>
            </div>
        </div>
    )
}