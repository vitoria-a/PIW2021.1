import axios from 'axios';

export function cadastroUsuario(usuario){
    return axios({
        method: "POST",
        url: "http://localhost:8393/api/usuarios",
        data: usuario,
    })
}

export function login(usuario){
    return axios({
        method: "POST",
        url: "http://localhost:8393/api/usuarios/signin",
        data: usuario,
    })
}