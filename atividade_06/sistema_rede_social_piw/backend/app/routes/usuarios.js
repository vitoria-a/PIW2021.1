const controller = require("../controllers/usuarios.js");
const controllerAuth = require("../controllers/auth");

module.exports = function(app){
    app.post("/api/usuarios/signin", controllerAuth.logar);
    app.post("/api/usuarios", controller.inserirUsuario);

    app.use("/api/usuarios", controllerAuth.checar);
    app.get("/api/usuarios", controller.listarUsuarios);
    app.get("/api/usuarios/:id", controller.buscarUsuarioID);
    app.get("/api/usuarios/:id/posts", controller.buscarPostsUsuarioID);
    app.delete("/api/usuarios/:id", controller.deletarUsuarioID);

}