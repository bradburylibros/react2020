const express = require('express')
const bcrypt = require('bcrypt')
const _= require('underscore') //vamos a usar pick

const app = express()

const Usuario = require ('../modelos/usuario')

// USUARIO: nombre apellido email password provincia sexo boletin rol estado alta

// ------------------ [ método GET ] ------------------ //
app.get('/usuario', function (req, res) { // req=request, res=response
    
    let desde=req.query.desde || 0
    let limite=req.query.limite || 3

    desde=Number(desde)
    limite= Number(limite)

    Usuario.find({estado: true})
    .skip (desde)
    .limit (limite) 
    .exec((err, usuarios)=>{
        if(err){
            return res.status(400).json({
                ok: false,
                err,
            })
        } //if(err)

        Usuario.count({estado: true},(err, contador)=>{

            if(err){
                return res.status(400).json({
                    ok: false,
                    err,
                })
            } //if(err)

            res.json({
                ok:true,
                usuarios,
                cantidad:contador,
            }) //res
        })
    }) // del .exec


  }) // fin del GET 
  


// ------------------ [ método POST ] ------------------ //
app.post('/usuario', function (req, res) { 
    
    let body=req.body
    
    let usuario = new Usuario ({
        nombre: body.nombre,
        apellido: body.apellido,
        email: body.email,
        //password: body.password, // --> usamos bcryp
        password: bcrypt.hashSync(body.password,10) ,
        rol: body.rol,
        estado: body.estado,
    })

    usuario.save((err, usuarioDB)=>{
        if(err){
            return res.status(400).json({
                ok: false,
                err,
            })
        } //if(err)
        res.json({
            ok: true,
            usuario: usuarioDB
        })
    }) //fin usuario.save

    
}) // fin del POST 
  


// ------------------ [ método PUT ] ------------------ //
app.put('/usuario/:id', function (req, res) { 

    let id = req.params.id
    let body =_.pick(req.body, ['nombre', 'apellido', 'provincia', 'sexo', 'boletin', 'rol', 'estado'])


    Usuario.findByIdAndUpdate(id, body,{new:true, runValidators: true} ,(err, usuarioDB)=>{
        if(err){
            return res.status(400).json({
                ok: false,
                err,
            })
        } //if(err)
        res.json({
            ok: true,
            usuario: usuarioDB,
        })
    }) //del find&update

}) // fin del PUT
  


// ------------------ [ método DELETE ] ------------------ //
app.delete('/usuario', function (req, res) { 
    res.json({
        message: 'DELETE usuario',
    })
})// fin del DELETE 



// ------------------ [ export APP ] ------------------ //
module.exports = app 