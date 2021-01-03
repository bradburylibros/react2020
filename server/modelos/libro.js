const  mongoose = require("mongoose");
//const uniqueValidator = require("mongoose-unique-validator") PARA CAMPOS unique: true,

let Schema = mongoose.Schema;

// LIBRO  titulo autor isbn tapa descripcion precio stock disponible clasificacion categoria -usuario-

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
  isbn: {
    type: String,
    required: false,
    trim: true,
  },
  tapa: {
    type: String,
    required: false,
    trim: true,
  },
  descripcion: {
    type: String,
    required: [true, "campo requerido"],
    trim: true,
  },
  precio: {
    type: Number,
    required: [true, "campo requerido"],
  },
  stock: {
    type: Number,
    required: [true, "campo requerido"],
    default: 1,
  },
  disponible: {
    type: Boolean,
	  default: true, // true:disponible y false:discontinuado
	  required: false
  },
   clasificacion: {
    type: Schema.Types.ObjectId,
    ref: "Clasificacion",
    required: false,
   },
   categoria: {
	  type: Schema.Types.ObjectId,
    ref: "Categoria",
    required: false,
   },
  usuario: {
    type: Schema.Types.ObjectId,
    ref: "Usuario",
  },
  alta: {
    type: Date,
    default: Date.now()
  }
});

// PARA EL UNIQUE VALIDATOR si es que ponemos isbn como campo unico
// libroSchema.plugin(uniqueValidator,{
//   message: '{PATH} debe ser único'
// })


// --------------- [ exportamos el modelo ] --------------- //
module.exports = mongoose.model("Libro", libroSchema);