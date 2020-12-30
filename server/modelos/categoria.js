const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// CATEGORIA novedades recomendados mas vendidos

let categoriaSchema = new Schema({
  descripcion: {
    type: String,
    unique: true,
    required: [true, "campo obligatorio"],
  },

  usuario: {
    type: Schema.Types.ObjectId, //traemos el id del usuario logueado
    ref: "Usuario",
  },
});



// --------------- [ exportamos el modelo ] --------------- //

module.exports = mongoose.model("Categoria", categoriaSchema);