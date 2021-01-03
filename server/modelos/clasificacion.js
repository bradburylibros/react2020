const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// CLASIFICACION  ficcion, no ficcion, novela, infantil, autoayuda, novela historica etc etc
let clasificacionSchema = new Schema({
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


// --------------- [ exportamos el modelo ] --------------- //
module.exports = mongoose.model("Clasificacion", clasificacionSchema);