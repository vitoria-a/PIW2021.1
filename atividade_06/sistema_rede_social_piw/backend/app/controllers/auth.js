const Usuario = require("../models/usuarios");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports.logar = function(req, res){
    Usuario.findOne({email: req.body.email})
           .then(function(usuario){
               if(bcrypt.compareSync(req.body.senha, usuario.senha)){
                   let token = jwt.sign({ id: usuario._id}, "senha_secreta");
                   res.status(200).json({token:token, nome: usuario.nome});
               } else {
                   res.status(401).send("Credenciais erradas");
               }
           })
           .catch(function(error){
               res.status(401).send("Credenciais erradas");
           })
}

module.exports.checar = function(req, res, next) {
    let token = req.headers.token;
    jwt.verify(token, "senha_secreta", function(err, decoded) {
        if(err){
            res.status(401).send("Token inválido!");
        } else {
            next();
        }
    })
}