require('./config/config')  //importamos el archivo config.js

const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.urlencoded ({extended: false}))
app.use(bodyParser.json())

// app.use(require('./rutas/usuario'))
// app.use(require('./rutas/libro'))
// app.use(require('./rutas/libro'))
// llamoa index que es donde estan todas las rutas
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