const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator") 
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


clasificacionSchema.plugin(uniqueValidator,{
  message: '{PATH} debe ser único'
})

module.exports = mongoose.model("Clasificacion", clasificacionSchema);