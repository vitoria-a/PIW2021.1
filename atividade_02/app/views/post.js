function render(post) {
    return {
        id: post._id,
        texto: post.texto,
        likes: post.likes,
        id_usuario: post.usuario,
    }
}
module.exports.render = render;

function renderPosts(posts) {
    return posts.map(render);
}
module.exports.renderPosts = renderPosts;

