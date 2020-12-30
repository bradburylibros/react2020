const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator") 

const Schema = mongoose.Schema;

// CATEGORIA novedades recomendados mas vendidos

let categoriaSchema = new Schema({
  descripcion: {
    type: String,
    unique: true,
    required: [true, "campo obligatorio"],
  },

  usuario: {
    type: Schema.Types.ObjectId,
    ref: "Usuario",
  },
});



 categoriaSchema.plugin(uniqueValidator,{
   message: '{PATH} debe ser único'
})


// --------------- [ exportamos el modelo ] --------------- //

module.exports = mongoose.model("Categoria", categoriaSchema);