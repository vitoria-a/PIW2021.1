import axios from 'axios';

export function cadastrarComentario(token, post, texto){
    return axios({
        method: "POST",
        url: "http://localhost:8393/api/comentarios",
        headers: {
            "token": token
        },
        data: { 
            "post": post,
            "texto": texto
        }
    })
}

export function listarComentarios(token, post){
    return axios({
        method: "GET",
        url: `http://localhost:8393/api/posts/${post}/comentarios`,
        headers: {
            "token": token,
        }
    })
}