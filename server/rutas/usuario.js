const express = require('express')
const bcrypt = require('bcrypt')

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
        }
        res.json({
            ok: true,
            usuario: usuarioDB
        })
    }) //fin usuario.save

    
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