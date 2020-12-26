var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var libroSchema = new Schema({
  titulo: {
    type: String,
    required: [true, "campo requerido"],
  },
  autor: {
    type: String,
    required: [true, "campo requerido"],
  },
  descripcion: {
    type: String,
    required: false,
  },
  precio: {
    type: Number,
    required: [true, "campo requerido"],
  },
  disponible: {
    type: Boolean,
    required: true,
    default: true,
  },
  clasificacion: {
    type: Schema.Types.ObjectId,
    ref: "Clasificacion",
    required: true,
  },
  categoria: {
    type: Schema.Types.ObjectId,
    ref: "Categoria",
    required: true,
  },
});

module.exports = mongoose.model("Libro", libroSchema);