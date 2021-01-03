const express = require('express')
const _= require('underscore')

let { verificaToken, verificaAdminRole } = require("../middlewares/autenticacion")

const app = express()

let Libro = require ('../modelos/libro')


// ------------------ [ método GET ] ------------------ //
app.get('/libro', verificaToken, function (req, res) { 
    
    let desde = req.query.desde || 0
    let limite = req.query.limite || 5

    desde = Number(desde)
    limite = Number(limite)
    
    Libro.find({disponible: true})
    .skip (desde)
    .limit (limite) 
    .sort("titulo") //orden ascendente (A-Z) por titulo
    .populate("usuario", "nombre email") //trae datos del usuario que dió de alta el libro
    .populate("categoria", "descripcion") //trae categoria
    .populate("clasificacion", "descripcion") //trae clasificación
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
                cantidad:contador, //contador para el frontend
            }) //res
        })
    }) // del .exec

  }) // fin del GET 
  

// ------------------ [ método GET x ID] ------------------ //
app.get('/libro/:id', verificaToken, function (req, res) { 
    
    let id = req.params.id
    
    Libro.findById (id)
    .populate("usuario", "nombre email") //trae datos del usuario que dió de alta el libro
    .populate("categoria", "descripcion") //trae categoria
    .populate("clasificacion", "descripcion") //trae clasificación
    .exec((err, libroDB)=>{

        if(err){
            return res.status(400).json({
                ok: false,
                err: {
                    message: 'Id incorrecto o inexistente'
                },
            })
        } //if(err)

        res.json({
            ok:true,
            libro: libroDB,
        }) //res

    }) // del .exec

  }) // fin del GET x ID



//---------------------------------------------------------------- //
// ------------------ [ busca libro por texto ] ------------------ //
//---------------------------------------------------------------- //
app.get("/libro/buscar/:texto", verificaToken, (req, res) => {
    
  let texto = req.params.texto
  let reGex = new RegExp(texto, "i")
    
  // *******  BUSQUEDA TEXTO EN TITULO **** //
  Libro.find({ titulo: reGex})
    .populate("categoria", "descripcion")
    .populate("clasificacion", "descripcion")
    .exec((err, libro) => {
      if (err) {
        return res.status(500).json({
          ok: false,
          err,
        });
      }
      res.json({
        ok: true,
        libro,
        // message: "texto encontrado en titulo",
      });
    }); //de Libro.find(titulo)
    
    
    // // *******  BUSQUEDA TEXTO EN AUTOR **** //
    // Libro.find({ autor: reGex })
    // //.populate("categoria", "descripcion")
    // //.populate("clasificacion", "descripcion")
    // .exec((err, libro) => {
    //   if (err) {
    //     return res.status(500).json({
    //       ok: false,
    //       err,
    //     });
    //   }
    //   res.json({
    //     ok: true,
    //     libro,
    //     message: "texto encontrado en autor",
    //   });
    // }); //de Libro.find(autor)

    // // *******  BUSQUEDA TEXTO EN DESCRIPCION **** //
    // Libro.find({ descripcion: reGex })
    // //.populate("categoria", "descripcion")
    // //.populate("clasificacion", "descripcion")
    // .exec((err, libro) => {
    //   if (err) {
    //     return res.status(500).json({
    //       ok: false,
    //       err,
    //     });
    //   }
    //   res.json({
    //     ok: true,
    //     libro,
    //     message: "texto encontrado en descripcion",
    //   });
    // }); //de Libro.find(descripcion)

    // // *******  BUSQUEDA TEXTO EN ISBN **** //
    // Libro.find({ isbn: reGex })
    // //.populate("categoria", "descripcion")
    // //.populate("clasificacion", "descripcion")
    // .exec((err, libro) => {
    //   if (err) {
    //     return res.status(500).json({
    //       ok: false,
    //       err,
    //     });
    //   }
    //   res.json({
    //     ok: true,
    //     libro,
    //     message: "texto encontrado en isbn"
    //   });
    // }); //de Libro.find(isbn)


  }); // fin get "/libro/buscar/:texto"


// ------------------ [ método POST ] ------------------ //
app.post('/libro', [verificaToken, verificaAdminRole], function (req, res) { 
    let body=req.body

    let libro = new Libro ({
    titulo: body.titulo,
    autor: body.autor,
    isbn: body.isbn,
    descripcion: body.descripcion,
    precio: body.precio,
    stock: body.stock,
    disponible: body.disponible,
    // clasificacion: body.clasificacion, // mando el id de la clasificacion
    categoria: body.categoria, // mando el id de la categoria
})

libro.save((err, libroDB)=>{
    if(err){
        return res.status(500).json({
            ok: false,
            err,
        })
    }


    res.status(201).json({
        ok: true,
        libro: libroDB,
    })

}) //fin libro.save

}) // fin del POST 



// ------------------ [ método PUT ] ------------------ //
app.put('/libro/:id', [verificaToken, verificaAdminRole], function (req, res) { 

let id = req.params.id
let body =_.pick(req.body, ['titulo', 'autor', 'isbn', 'tapa', 'descripcion', 'precio', 'stock', 'clasificacion', 'categoria'])

Libro.findByIdAndUpdate(id, body,{new:true, runValidators: true} , (err, libroDB)=>{ 
    if(err){
        return res.status(400).json({
            ok: false,
            err,
        })
    } // del if(err)

    if (!libroDB) {
        return res.status(400).json({
          ok: false,
          err: {
            message: "El id no existe",
          },
        });
      } // del if(!)
    
    res.json({
        ok: true,
        libro: libroDB,
    })
}) //del find&update

}) // fin del PUT



// ------------------ [ método DELETE ] ------------------ //
app.delete('/libro/:id', [verificaToken, verificaAdminRole], function (req, res) { 
   
    let id=req.params.id
   
    let discontinuado={
       disponible: false,
    }

    Libro.findByIdAndUpdate(id, discontinuado, {new:true}, (err,libroBorrado)=>{
        if(err){
        return res.status(400).json({
            ok: false,
            err,
            })
        } //if(err)

        if (!libroBorrado) {
            return res.status (400).json ({
                ok:false,
                message:('No se encontró el libro que desea borrar'),
            })
        } //if !libroBorrado

        res.json ({
            ok: true,
            libro: libroBorrado,
        })

   }) //Usuario.find

})// fin del DELETE 



// ------- [ exportamos la función ] ------- //
module.exports = app 