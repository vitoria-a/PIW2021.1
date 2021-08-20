//import { NavLink } from 'react-router-dom';
import './FormPostar.css';
import history from '../../../history';
import { cadastrarPost } from '../../../api/postAPI';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../App';

function FormularioForm(){
    const likes = 0;
    const { auth } = useContext(AuthContext);
    const {register, handleSubmit} = useForm();
    
    const submeter = (texto) => {
        cadastrarPost(auth.token, texto.texto, texto.likes).then((response)=>{
            history.push('/');
        }).catch((error) => {
            console.log(error);
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit(submeter)}>
                <input type="text" maxLength={300} value={likes} style={{display: "none"}} {...register("likes")}/>
                <div className="navegador">
                    <textarea rows="10" cols="97" placeholder='Escreva sua publicação' {...register("texto")} ></textarea>
                </div>
                <div className="interacao">
                    <button className="button"> Publicar </button>
                </div>
            </form>            
        </div>
    )
}

export function FormPostar() {
    return (
        <FormularioForm/>
    )
}