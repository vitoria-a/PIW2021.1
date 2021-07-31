const controller = require("../controllers/usuarios.js");

module.exports = function(app){
    app.post("/api/usuarios", controller.inserirUsuario);
    app.get("/api/usuarios", controller.listarUsuarios);
    app.get("/api/usuarios/:id", controller.buscarUsuarioID);
    app.delete("/api/usuarios/:id", controller.deletarUsuarioID);

}