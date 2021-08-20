const viewUsuario = require("../views/usuario");

function render(post) {
    return {
        id: post._id,
        texto: post.texto,
        likes: post.likes,
        usuario: viewUsuario.render(post.usuario)
    }
}
module.exports.render = render;

function renderPosts(posts) {
    return posts.map(render);
}
module.exports.renderPosts = renderPosts;

