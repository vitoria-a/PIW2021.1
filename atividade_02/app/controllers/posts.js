const Post = require('../models/post');
const Comentario = require('../models/comentario');
const view = require('../views/post');
const viewComentario = require('../views/comentario');

module.exports.inserirPost = function(req,res) {
    let post = req.body;
    let promisse = Post.create(post);
    promisse.then(function(post){
        res.status(201).json(view.render(post));
    }).catch(function(error){
        res.status(500).json({mensagem: "erro no servidor"});
    });
}

module.exports.exibirPosts = function(req,res) {
    let promisse = Post.find().exec();
    promisse.then(function(posts){
        res.status(200).json(view.renderPosts(posts));
    }).catch(function(error){
        res.status(500).json({mensagem: "erro no servidor"});
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
    let promisse = Comentario.find({post:id});
    promisse.then(function(post){
        res.status(200).json(viewComentario.renderComentario(post));
    }).catch(function(error){
        res.status(400).json({mensagem: "não funcionou", error:error})
    });
}

module.exports.deletarPostID = function(req,res) {
    let id = req.params.id;
    let promisse = Post.findByIdAndDelete(id);
    promisse.then(function(post){
        res.status(200).json(view.render(post));
    }).catch(function(error){
        res.status(500).json(error);
    });
}