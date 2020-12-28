const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let clasificacionSchema = new Schema({
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

module.exports = mongoose.model("Clasificacion", clasificacionSchema);