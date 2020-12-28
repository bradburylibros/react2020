const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let categoriaSchema = new Schema({
  descripcion: {
    type: String,
    unique: true,
    required: [true, "campo obligatorio"],
  },
  libro: {
    type: Schema.Types.ObjectId,
    ref: "Libro",
  },
});

module.exports = mongoose.model("Categoria", categoriaSchema);