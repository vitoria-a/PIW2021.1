const controller = require("../controllers/posts.js");

module.exports = function(app){
    app.post("/api/posts", controller.inserirPost);
    app.get("/api/posts", controller.exibirPosts);
    app.get("/api/posts/:id", controller.buscarPostsID);
    app.delete("/api/posts/:id", controller.deletarPostID);

}