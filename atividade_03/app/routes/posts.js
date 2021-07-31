const controller = require("../controllers/posts.js");
const controllerAuth = require ("../controllers/auth");

module.exports = function(app){
    app.post("/api/posts", controller.inserirPost);

    app.use("/api/posts", controllerAuth.checar);
    app.get("/api/posts", controller.exibirPosts);
    app.get("/api/posts/:id", controller.buscarPostsID);
    app.get("/api/posts/:id/comentarios", controller.buscarComentarioPostsID);
    app.delete("/api/posts/:id", controller.deletarPostID);

}