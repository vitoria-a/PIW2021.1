const Comentario = require('../models/comentario');
const view = require ("../views/comentario");
const jwt = require ("jsonwebtoken");

module.exports.inserirComentario = function(req,res){
    let id_post = req.body.post;
    let texto = req.body.texto;
    let token = req.headers.token;
    let payload = jwt.decode(token);
    let id_usuario_logado = payload.id;

    let promisse = Comentario.create({ texto: texto, post: id_post, usuario: id_usuario_logado });    
    promisse.then(function(comentario) {
        res.status(201).json(view.render(comentario));
    }).catch (function(error) {
        res.status(404).json({mensagem: "sua requisição falhou"});
    });
}

module.exports.listarComentarios = function(req,res){
    let promisse = Comentario.find().exec();
    promisse.then(function(comentarios){
        res.status(200).json(view.renderComentario(comentarios));
    }).catch(function(error){
        res.status(500).json({mensagem: "erro no servidor"});
    });
}

module.exports.listarComentariosID = function(req,res){
    let token = req.headers.token;
    let payload = jwt.decode(token);
    let id_usuario_logado = payload.id;

    let promisse = Comentario.find({usuario: id_usuario_logado}).populate("post").populate("usuario").exec();
    promisse.then(function(comentarios){
        res.status(200).json(view.renderComentario(comentarios));
    }).catch(function(error){
        res.status(500).json({mensagem: "erro no servidor"});
    });
}

module.exports.deletarComentarioID = function(req, res) {
    let id = req.params.id;
    let token = req.headers.token;
    let payload = jwt.decode(token);
    let id_usuario_logado = payload.id;

    let promisse = Comentario.findById(id).exec();

    promisse.then(function(comentario){
        if(comentario.usuario == id_usuario_logado) {
            let promisse2 = Comentario.findByIdAndDelete(id);
            promisse2.then(function(comentario){
                res.status(200).json({mensagem: "Comentário deletado."});
            }).catch(function(error){
                res.status(404).json({mensagem: "Comentário não encontrado"});
            });
        } else {
            res.status(401).json({mensagem: "O usuário logado não pode deletar o comentário de outro usuário."});
        };
    }).catch(function(error){
        res.status(404).json({mensagem: "O comentário não existe"});
    });
}