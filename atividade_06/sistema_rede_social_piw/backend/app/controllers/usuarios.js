const Usuario = require('../models/usuarios');
const Post = require('../models/post');
const view = require ("../views/usuario");
const viewPosts = require ("../views/post");
const bcrypt = require("bcrypt");
const jwt = require ("jsonwebtoken");

module.exports.inserirUsuario = function(req,res){
    //let usuario = req.body;
    let usuario = {
        nome: req.body.nome,
        email: req.body.email,
        senha: bcrypt.hashSync(req.body.senha, 10),
    };

    let promisse = Usuario.create(usuario);
    promisse.then(function(usuario) {
        res.status(201).json(view.render(usuario));
    }).catch (function(error) {
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
    let token = req.headers.token;
    let payload = jwt.decode(token);
    let id_usuario_logado = payload.id;
    let id = req.params.id;

    if(id == id_usuario_logado) {
        let promisse = Usuario.findByIdAndDelete(id_usuario_logado);

        promisse.then(function(usuario){
            res.status(200).json({mensagem: "Usuário deletado."});
        }).catch(function(error){
            res.status(500).json(error);
        });
    } else {
        res.status(401).json({mensagem: "O usuário logado não pode deletar outro usuário."});
    };

    /*let promisse = Usuario.findByIdAndDelete(id);
    promisse.then(function(usuario){
        if(usuario.id == id_usuario_logado){
            res.status(200).json(view.render(usuario));
            console.log("usuario não pode ser apagado")
        } else {
            console.log("DEU ERRO")
        }
    }).catch(function(error){
        res.status(500).json(error);
    });*/
};
