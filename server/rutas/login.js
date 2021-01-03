const express = require('express')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const Usuario = require('../modelos/usuario')

const app = express ()

// --------- [ Método POST ] --------- //
app.post('/login',(req,res)=>{

    let body=req.body
    
    Usuario.findOne({email:body.email},(err,usuarioDB)=>{
        if(err){
            return res.status(500).json({
                ok:false,
				err
            })
        } //fin 

        if(!usuarioDB){
            return res.status(400).json({
				ok:false,
				err: {
					message: "Usuario o contraseña incorrectos",
				  }
            })
        } //no se encuentra el usuario

        // primer argumento la contraseña del login y 2º la ontraseña en usuarios
        if(!bcrypt.compareSync(body.password,usuarioDB.password)){
            return res.status(400).json({
				ok:false,
				err: {
					message: "Usuario o contraseña incorrectos",
				  }
            })
        } //no es la contraseña


        // ---------------- generación de TOKEN ---------------- //
        
        let token=jwt.sign ({
            usuario:usuarioDB
        }, process.env.SEED, {expiresIn: process.env.CADUCIDAD_TOKEN}) // enviamos la semilla

            //  si lo encuentra ...  //
        res.json({
            ok:true,
            usuario:usuarioDB,
            token:token
        })

    }) //fin del findOne

})



// ------- [ exportamos la función ] ------- //
module.exports = app