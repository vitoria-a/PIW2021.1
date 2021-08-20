const Post = require('../models/post');
const Comentario = require('../models/comentario');
const view = require('../views/post');
const viewComentario = require('../views/comentario');
const jwt = require ("jsonwebtoken");

module.exports.inserirPost = function(req,res) {
    let token = req.headers.token;
    let payload = jwt.decode(token);

    let post = {
        texto: req.body.texto,
        likes: req.body.likes,
        usuario: payload.id
    }

    let promisse = Post.create(post);
    promisse.then(function(post){
        res.status(201).json(view.render(post));
    }).catch(function(error){
        res.status(500).json({mensagem: "erro no servidor " + error});
    });
}

module.exports.exibirPosts = function(req,res) {
    let promisse = Post.find().populate("usuario").exec();
    promisse.then(function(post){
        res.status(200).json(view.renderPosts(post));
    }).catch(function(error){
        res.status(500).json({mensagem: "erro no servidor " + error});
    });
}

module.exports.buscarPostsID = function(req,res) {
    let id = req.params.id;
    let promisse = Post.findById(id).exec();
    promisse.then(function(post){
        res.status(200).json(view.render(post));
    }).catch(function(error){
        res.status(400).json({mensagem: "não funcionou", error:error})
    });
}

module.exports.buscarComentarioPostsID = function(req,res) {
    let id = req.params.id;
    let promisse = Comentario.find({post:id}).populate("usuario");
    promisse.then(function(post){
        res.status(200).json(viewComentario.renderComentario(post));
    }).catch(function(error){
        res.status(400).json({mensagem: "não funcionou", error:error})
    });
}

module.exports.deletarPostID = function(req,res) {
    let id = req.params.id;
    let token = req.headers.token;
    let payload = jwt.decode(token);
    let id_usuario_logado = payload.id;

    let promisse = Post.findById(id).exec();

    promisse.then(function(post){

        if(post.usuario == id_usuario_logado) {
            console.log(post.usuario);
            console.log(id_usuario_logado);

            let promisse2 = Post.findByIdAndDelete(id);
            promisse2.then(function(post){
                res.status(200).json({mensagem: "Post deletado."});
            }).catch(function(error){
                res.status(404).json({mensagem: "Post não encontrado"});
            });
        } else {
            res.status(401).json({mensagem: "O usuário logado não pode deletar outro usuário."});
        };
    }).catch(function(error){
        res.status(404).json({mensagem: "O post não existe"});
    });



    
}