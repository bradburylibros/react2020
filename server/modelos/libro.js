const  mongoose = require("mongoose");
//const uniqueValidator = require("mongoose-unique-validator") PARA CAMPOS unique: true,

let Schema = mongoose.Schema;

// LIBRO 
// Titulo Autor ISBN Tapa Descripcion Precio Stock
// Clasificacion: ficcion, no ficcion, novela, infantil, autoayuda, novela historica etc etc
// Categoria: recomendado, novedades, mas vendidos, etc etc

let libroSchema = new Schema({
  titulo: {
    type: String,
    required: [true, "campo requerido"],
    trim: true,
  },
  autor: {
    type: String,
    required: [true, "campo requerido"],
    trim: true,
  },
  // isbn: {
  //   type: String,
  //   required: false,
  //   trim: true,
  // },
  // tapa: {
  //   type: String,
  //   required: [true, "campo requerido"],
  //   trim: true,
  // },
  // descripcion: {
  //   type: String,
  //   required: [true, "campo requerido"],
  //   trim: true,
  // },
  precio: {
    type: Number,
    required: [true, "campo requerido"],
  },
  stock: {
    type: Number,
    required: [true, "campo requerido"],
    default: 1,
  },
  // clasificacion: {
  //   type: Schema.Types.ObjectId,
  //   ref: "Clasificacion",
  //   required: [true, "campo requerido"],
  // },
  // categoria: {
  //   type: Schema.Types.ObjectId,
  //   ref: "Categoria",
  //   required: [true, "campo requerido"],
  // },
});

// PARA EL UNIQUE VALIDATOR
// libroSchema.plugin(uniqueValidator,{
//   message: '{PATH} debe ser único'
// })

module.exports = mongoose.model("Libro", libroSchema);