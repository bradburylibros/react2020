const express = require('express')
const _= require('underscore')
const { verificaToken } = require("../middlewares/autenticacion");

const app = express()

let Libro = require ('../modelos/libro')

// LIBRO  titulo autor isbn tapa descripcion precio stock disponible clasificacion categoria


// ------------------ [ método GET ] ------------------ //
app.get('/libro', verificaToken, function (req, res) { 
    
    let desde = req.query.desde || 0
    let limite = req.query.limite || 3

    desde = Number(desde)
    limite = Number(limite)
    
    Libro.find({disponible: true})
    .skip (desde)
    .limit (limite) 
    .sort("nombre") //ordeno la lista por nombre A-Z
    .populate("usuario", "nombre email") //trae datos según usuario
    .populate("categoria", "descripcion") //trae datos según categoria
    .populate("clsificacion", "descripcion") //trae datos según clasificación
    .exec((err, libros)=>{
        if(err){
            return res.status(400).json({
                ok: false,
                err,
            })
        } //if(err)

        Libro.count({disponible: true},(err, contador)=>{
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
app.post('/libro', verificaToken, function (req, res) { 
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
app.put('/libro/:id', verificaToken, function (req, res) { 

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
app.delete('/libro/:id', verificaToken, function (req, res) { 
   
    let id=req.params.id
   
    let estadoDiscontinuado={
       disponible: false,
    }

    Libro.findByIdAndUpdate(id, estadoDiscontinuado, {new:true},(err,libroBorrado)=>{
        if(err){
        return res.status(400).json({
            ok: false,
            err,
            })
        } //if(err)

        if (!libroBorrado) {
            return res.status (400).json ({
                ok:false,
                message:('no se encontro el libro que desea borrar'),
            })
        } //if !libroBorrado

        res.json ({
            ok: true,
            usuario: libroBorrado,
        })

   }) //Usuario.find

})// fin del DELETE 



// ------- [ exportamos la función ] ------- //
module.exports = app 