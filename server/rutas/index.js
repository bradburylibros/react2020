const express = require('express')
const app = express()

// --------- rutas --------- //
app.use(require('./usuario'))
app.use(require('./libro'))
app.use(require('./login'))
app.use(require('./categoria'))
app.use(require('./clasificacion'))


// ------- [ exportamos la función ] ------- //
module.exports = app