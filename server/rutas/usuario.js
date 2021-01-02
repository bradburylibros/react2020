const express = require('express')
const bcrypt = require('bcrypt')
const _= require('underscore') //vamos a usar pick

const app = express()

const Usuario = require ('../modelos/usuario')

const {verificaToken, verificaAdminRole} = require ('../middlewares/autenticacion')


// ------------------ [ método GET ] ------------------ //
app.get('/usuario', [verificaToken, verificaAdminRole], function (req, res) { // req=request, res=response
    
    let desde=req.query.desde || 0
    let limite=req.query.limite || 5

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
  
  

// ------------------ [ método GET x ID] ------------------ //
app.get('/usuario/:id', verificaToken, function (req, res) { 
    
    let id = req.params.id
    
    Usuario.findById (id,(err, usuarioDB)=>{
        if(err){
            return res.status(400).json({
                ok: false,
                err: {
                    message: 'Id incorrecto o inexistente'
                },
            })
        } //if(err)
   

        res.json({
            ok: true,
			usuario: usuarioDB,
        }) //res

    }) // del .exec

  }) // fin del GET x ID  


// ------------------ [ método POST ] ------------------ //
app.post('/usuario', [verificaToken, verificaAdminRole], function (req, res) { 
    
    let body=req.body
    
    let usuario = new Usuario ({
        nombre: body.nombre,
        apellido: body.apellido,
        email: body.email,
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

        res.status(201).json({
            ok: true,
            usuario: usuarioDB,
        })
    }) //fin usuario.save

    
}) // fin del POST 
  


// ------------------ [ método PUT ] ------------------ //
app.put('/usuario/:id', [verificaToken, verificaAdminRole], function (req, res) { 

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
app.delete('/usuario/:id', [verificaToken, verificaAdminRole], function (req, res) { 
   
    let id=req.params.id
   
    let estadoInactivo={
       estado: false,
    }

    Usuario.findByIdAndUpdate(id, estadoInactivo, {new:true},(err,usuarioBorrado)=>{
        if(err){
        return res.status(400).json({
            ok: false,
            err,
            })
        } //if(err)

        if (!usuarioBorrado) {
            return res.status (400).json ({
                ok:false,
                message:('no se encontro al usuario que desea borrar'),
            })
        } //if !usuarioBorrado

        res.json ({
            ok: true,
            usuario: usuarioBorrado,
        })

   }) //Usuario.find

})// fin del DELETE 



// ------- [ exportamos la función ] ------- //
module.exports = app 