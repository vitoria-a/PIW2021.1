const mongoose = require("mongoose");

module.exports = function() {
    let schema = mongoose.Schema ({
        texto: {
            type: "String",
            required: true,
        },
        likes: {
            type: "Number",
            required: true,
        },
        usuario: {
            type: mongoose.Schema.ObjectId,
            ref: "Usuario",
        },
    });
    return mongoose.model('Post', schema);
}();
