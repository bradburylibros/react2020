require('./config/config')  //importamos el archivo config.js

const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.urlencoded ({extended: false}))
app.use(bodyParser.json())

app.use(require('./rutas/usuario'))
app.use(require('./rutas/libro'))

 // ------------------ [ conexión con mongoDB ] ------------------ //
mongoose.connect('mongodb://localhost:27017/bradbury', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
},(err, res)=>{
    if(err) throw err
    console.log('DB bradbury online')

} ); //mongoose.connect


// ------------------ [ app listen ] ------------------ //
app.listen(process.env.PORT, ()=>{
    console.log ('servidor online en puerto:', process.env.PORT)
})