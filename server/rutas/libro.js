const express = require('express')
const app = express()

const Libro = require ('../modelos/libro')
// LIBRO 
// Titulo Autor ISBN Tapa Descripcion Precio Stock Clasificacion Categoria


// ------------------ [ método GET ] ------------------ //
app.get('/libro', function (req, res) { 
    res.json({
        message: 'GET libro',
      })
  }) // fin del GET 
  
   // ------------------ [ método POST ] ------------------ //
   app.post('/libro', function (req, res) { 
      let body=req.body

      let libro = new Libro ({
        titulo: body.titulo,
        autor: body.autor,
        descripcion: body.descripcion,
        precio: body.precio,
        stock: body.stock,
        estado: body.estado,
    })

    libro.save((err, libroDB)=>{
        if(err){
            return res.status(400).json({
                ok: false,
                err,
            })
        }
        res.json({
            ok: true,
            libro: libroDB
        })
    }) //fin libro.save
  



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