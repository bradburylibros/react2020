const express = require('express')
const _= require('underscore')

const app = express()

const Libro = require ('../modelos/libro')

// LIBRO  titulo autor isbn tapa descripcion precio stock clasificacion categoria


// ------------------ [ método GET ] ------------------ //
app.get('/libro', function (req, res) { 
    
    let desde=req.query.desde || 0
    let limite=req.query.limite || 5

    desde=Number(desde)
    limite= Number(limite)

    Libro.find({})
    .skip (desde)
    .limit (limite) 
    .exec((err, libros)=>{
        if(err){
            return res.status(400).json({
                ok: false,
                err,
            })
        } //if(err)

        Libro.count({},(err, contador)=>{
            if(err){
                return res.status(400).json({
                    ok: false,
                    err,
                })
            } //if(err)

            res.json({
                ok:true,
                libros,
                cantidad:contador,
            }) //res
        })
    }) // del .exec

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

let id = req.params.id
let body =_.pick(req.body, ['titulo', 'autor', 'isbn', 'tapa', 'descripcion', 'precio', 'stock', 'clasificacion', 'categoria'])

Libro.findByIdAndUpdate(id, body,{new:true, runValidators: true} , (err, libroDB)=>{ 
    if(err){
        return res.status(400).json({
            ok: false,
            err,
        })
    }
    res.json({
        ok: true,
        libro: libroDB,
    })
}) //del find&update

}) // fin del PUT



// ------------------ [ método DELETE ] ------------------ //
app.delete('/libro', function (req, res) { 
    res.json({
        message: 'DELETE libro',
    })
})// fin del DELETE 



// ------------------ [ export APP ] ------------------ //
module.exports = app 