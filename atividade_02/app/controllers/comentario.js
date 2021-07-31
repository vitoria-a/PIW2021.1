const Comentario = require('../models/comentario');
const view = require ("../views/comentario");

module.exports.inserirComentario = function(req,res){
    let comentario = req.body;
    let promisse = Comentario.create(comentario);
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
    let promisse = Comentario.find().populate("post").populate("usuario").exec();
    promisse.then(function(comentarios){
        res.status(200).json(view.renderComentario(comentarios));
    }).catch(function(error){
        res.status(500).json({mensagem: "erro no servidor"});
    });
}

module.exports.deletarComentarioID = function(req, res) {
    var id = req.params.id;
    let promisse = Comentario.findByIdAndDelete(id);
    promisse.then(function(comentario){
        res.status(200).json(view.render(comentario));
    }).catch(function(error){
        res.status(500).json(error);
    });
};