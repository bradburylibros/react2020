const express = require('express')
const app = express()

const Libro = require ('../modelos/libro')

// ------------------ [ método GET ] ------------------ //
app.get('/libro', function (req, res) { 
    res.json({
        message: 'GET libro',
      })
  }) // fin del GET 
  
   // ------------------ [ método POST ] ------------------ //
   app.post('/libro', function (req, res) { 
      let body=req.body
      if (body.titulo === undefined) {
          res.status(400).json({
              ok: false, 
              message: 'campo obligatorio',
          })
      } else {
          res.json({
              libro: body 
          })
      }
  }) // fin del POST 
  
   // ------------------ [ método PUT ] ------------------ //
   app.put('/libro/:id', function (req, res) { 
      res.json({
          message: 'PUT libro',
      })
  }) // fin del PUT
  
   // ------------------ [ método DELETE ] ------------------ //
   app.delete('/libro', function (req, res) { 
      res.json({
          message: 'DELETE libro',
      })
  })// fin del DELETE 

  module.exports = app 