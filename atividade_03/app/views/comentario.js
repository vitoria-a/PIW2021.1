const viewUsuario = require("../views/usuario");
const viewPosts = require("../views/post");

function render(comentario) {
    return {
        id: comentario.id,
        texto: comentario.texto,
        id_post: viewPosts.render(comentario.post),
        id_usuario: viewUsuario.render(comentario.usuario),
    }
}
module.exports.render = render;

function renderComentario(comentarios) {
    return comentarios.map(render);
}
module.exports.renderComentario = renderComentario;