import axios from 'axios';

export function listarPosts(token){
    return axios({
        method: "GET",
        url: "http://localhost:8393/api/posts",
        headers: {
            "token": token,
        }
    })
}

export function cadastrarPost(token, texto, likes){
    return axios({
        method: "POST",
        url: "http://localhost:8393/api/posts",
        headers: {
            "token": token,
        },
        data: { texto, likes }
    })
}