const Usuario = require('../models/usuarios');
const Post = require('../models/post');
const view = require ("../views/usuario");
const viewPosts = require ("../views/post");

module.exports.inserirUsuario = function(req,res){
    let usuario = req.body;
    let promisse = Usuario.create(usuario);
    promisse.then(function(usuario) {
        res.status(201).json(view.render(usuario));
    }).catch ( function(error) {
        res.status(404).json({mensagem: "sua requisição falhou"});
    });
}

module.exports.listarUsuarios = function(req,res) {
    let promisse = Usuario.find().exec();
    promisse.then(function(usuarios){
        res.status(200).json(view.renderMany(usuarios));
    }).catch(function(error){
        res.status(500).json({mensagem: "erro no servidor"});
    });
};

module.exports.buscarUsuarioID = function(req, res) {
    let id = req.params.id;
    let promisse = Usuario.findById(id).exec();
    promisse.then(function(usuario){
        res.status(200).json(view.render(usuario));
    }).catch(function(error){
        res.status(404).json({mensagem: "usuario não encontrado ", error:error})
    });
};

module.exports.buscarPostsUsuarioID = function(req,res){
    let id = req.params.id;
    let promisse = Post.find({usuario:id});
    promisse.then(function(posts){
        res.status(200).json(viewPosts.renderPosts(posts));
    }).catch(function(error){
        res.status(404).json({mensagem: "usuario não encontrado ", error:error})
    });
};

module.exports.deletarUsuarioID = function(req, res) {
    var id = req.params.id;
    let promisse = Usuario.findByIdAndDelete(id);
    promisse.then(function(usuario){
        res.status(200).json(view.render(usuario));
    }).catch(function(error){
        res.status(500).json(error);
    });
};
