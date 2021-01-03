const mongoose = require("mongoose")
const uniqueValidator = require("mongoose-unique-validator")

let rolesValidos = {
  values: ['ADMIN', 'USER'],
  message: '{VALUE} , rol inválido'
}

let Schema = mongoose.Schema;

// USUARIO: nombre apellido email password provincia sexo boletin rol estado alta

let usuarioSchema = new Schema({
  nombre: {
    type: String,
    required: [true, "campo requerido"],
    trim: true,
  },
  apellido: {
    type: String,
    required: [true, "campo requerido"],
    // trim: true,
  },
  email: {
    type: String,
    required: [true, "campo requerido"],
    trim: true,
    unique: true,
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
    required: false,
  },
  boletin: {
    type: String,
    required: false,
  },
  rol: {
    type: String,
    default: 'USER',
    enum: rolesValidos,
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

usuarioSchema.plugin(uniqueValidator,{
  message: '{PATH} debe ser único'
})


usuarioSchema.methods.toJSON=function () {
  let user = this
  let userObject = user.toObject()
  delete userObject.password
  // para que el json que recibamos no muestre el password 
  return userObject
}


// --------------- [ exportamos el modelo ] --------------- //
module.exports = mongoose.model("Usuario", usuarioSchema);