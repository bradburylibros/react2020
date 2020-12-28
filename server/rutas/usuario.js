const express = require('express')
const app = express()

const Usuario = require ('../modelos/usuario')

// ------------------ [ método GET ] ------------------ //
app.get('/usuario', function (req, res) { // req=request, res=response
    res.json({
        message: 'GET usuario',
      })
  }) // fin del GET 
  
// ------------------ [ método POST ] ------------------ //
app.post('/usuario', function (req, res) { 
    let body=req.body
    if (body.nombre === undefined) {
        res.status(400).json({
            ok: false, 
            message: 'campo obligatorio',
        })
    } else {
        res.json({
            usuario: body //es lo mismo  poner body o  body:body
        })
    }
}) // fin del POST 
  
// ------------------ [ método PUT ] ------------------ //
app.put('/usuario/:id', function (req, res) { 
    res.json({
        message: 'PUT usuario',
    })
}) // fin del PUT
  
// ------------------ [ método DELETE ] ------------------ //
app.delete('/usuario', function (req, res) { 
    res.json({
        message: 'DELETE usuario',
    })
})// fin del DELETE 

module.exports = app 