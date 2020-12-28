const mongoose = require("mongoose")

let Schema = mongoose.Schema;

// USUARIO
// Nombre Apellido Email Password Provincia Sexo QuieroInfo..(checkbox)

let usuarioSchema = new Schema({
  nombre: {
    type: String,
    required: [true, "campo requerido"],
    trim: true,
  },
  apellido: {
    type: String,
    required: [true, "campo requerido"],
    trim: true,
  },
  email: {
    type: String,
    required: [true, "campo requerido"],
    trim: true,
  }, // en el front chequeamos que sea un mail valido
  password: {
    type: String,
    required: true,
  },
  provincia: {
    type: String,
    required: false,
  },
  sexo: {
    type: String,
    default: 'NO INFORMADO'
  },
  boletin: {
    type: String,
    required: false,
  },
  rol: {
    type: String,
    default: 'USER'
  },
  estado: {
    type: Boolean,
    default: true, // true:activo y false:inactivo
  }, 
  alta: {
    type: Date,
    default: Date.now()
  }
});

module.exports = mongoose.model("Usuario", usuarioSchema);