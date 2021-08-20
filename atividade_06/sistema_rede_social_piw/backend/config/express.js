//Importando módulo express (Padrão CommonJS)
const bodyParser = require('body-parser');
const express = require('express');
const routerUsuarios= require("../app/routes/usuarios");
const routerPosts = require("../app/routes/posts");
const routerComentario = require("../app/routes/comentario");

//Exportando módulo (Padrão CommonJS)
module.exports = function() {
    let app = express();
    //Definindo variável de aplicação
    app.set("port", 8393);
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));

    app.use(express.static("./public"));
    routerUsuarios(app);
    routerPosts(app);
    routerComentario(app);

    return app;
}