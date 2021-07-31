let posts = [];

module.exports.inserirPost = function(req,res) {
    var post = req.body;
    posts.push(post);
    res.status(201).send(post);
}

module.exports.exibirPosts = function(req,res) {
    res.json(posts);
}

module.exports.buscarPostsID = function(req,res) {
    var id = req.params.id;
    var post = posts.find(post => (post._id==id));

    if(post){
        res.json(post);
    } else {
        res.status(404).send("Post não encontrado");
    }
}

module.exports.deletarPostID = function(req,res) {
    var id = req.params.id;
    posts = posts.filter(function(post){ return post._id!==id});

    res.send("Post com id " + id + " apagado");
}