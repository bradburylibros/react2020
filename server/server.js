require('./config/config')  //importamos el archivo config.js

const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const cors = require("cors");

const app = express()

app.use(cors())  // middleware para el CORS
app.use(bodyParser.urlencoded ({extended: false}))
app.use(bodyParser.json())

// llamo a index que es donde estan todas las rutas './rutas/usuario' './rutas/libro' './rutas/libro'
app.use(require('./rutas/index'))

 // ------------------ [ conexión con mongoDB ] ------------------ //
 // mongoose.connect('mongodb://localhost:27017/bradbury', {
mongoose.connect(process.env.URLDB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
  },(err, res)=>{
      if(err) throw err
      console.log('DB bradbury online --->', process.env.URLDB)

} ); //mongoose.connect


// ------------------ [ app listen ] ------------------ //
app.listen(process.env.PORT, ()=>{
    console.log ('servidor online en puerto:', process.env.PORT)
})