const controller = require("../controllers/comentario.js");

module.exports = function(app){
    app.post("/api/comentarios", controller.inserirComentario);
    app.get("/api/comentarios", controller.listarComentarios);
    app.get("/api/comentarios/:id", controller.listarComentariosID);
    app.delete("/api/comentarios/:id", controller.deletarComentarioID);
}