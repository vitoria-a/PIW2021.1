let usuarios = [
    {_id: "1", nome:"João", email: "joao@gmail.com", matricula: "123"}
];

module.exports.inserirUsuario = function(req,res){
    usuarios.push(req.body);
    res.status(201).send(req.body);
}

module.exports.listarUsuarios = function(req,res) {
    res.json(usuarios);
};

module.exports.buscarUsuarioID = function(req, res) {
    var id = req.params.id;
    var user  = usuarios.find(user => (user._id==id));

    if(user){
        res.json(user);
    } else {
        res.status(404).send("Usuário não encontrado");
    }

};

module.exports.deletarUsuarioID = function(req, res) {
    var id = req.params.id;
    usuarios  = usuarios.filter(user => (user._id!==id));

    res.send("Usuario com id " + id + " deletado");
};
