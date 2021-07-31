const mongoose = require("mongoose");

module.exports = function() {
    let schema = mongoose.Schema ({
        texto: {
            type: "String",
            required: true,
        },
        post: {
            type: mongoose.Schema.ObjectId,
            ref: "Post",
        },
        usuario: {
            type: mongoose.Schema.ObjectId,
            ref: "Usuario",
        },
    });
    return mongoose.model('Comentario', schema);
}();
