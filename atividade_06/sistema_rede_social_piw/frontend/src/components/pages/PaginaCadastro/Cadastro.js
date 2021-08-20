import { useForm } from 'react-hook-form';
import { Navegador } from '../../commom/Navegador';
import './Cadastro.css';
import history from '../../../history';
import { cadastroUsuario } from '../../../api/auth';

function FormularioCadastro(){
    const {register, handleSubmit} = useForm();
    const submeter = (usuario) => {
        cadastroUsuario(usuario).then((response)=>{
            history.push('/login');
        }).catch((error) => {
            console.log(error);
        })
    }
    return(
        <div className="form"> 
            <form onSubmit={handleSubmit(submeter)}>
                Nome: <input type="text" {...register("nome")}/> <br/>
                E-mail: <input type="text" {...register("email")}/> <br/>
                Senha: <input type="password" {...register("senha")}/> <br/>
                <button type="submit"> Cadastrar </button>                
            </form>
        </div>
    )
}

export function Cadastro(){
    return(
        <div className="cadastro">
            <Navegador/>
            <div className="card">
                <div className="card-coment">
                    <FormularioCadastro/>
                </div>
            </div>
        </div>
               
    )
}