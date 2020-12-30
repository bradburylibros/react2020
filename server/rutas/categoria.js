const express = require("express");

let { verificaToken, verificaAdminRole } = require("../middlewares/autenticacion"); //importa middleware

let app = express();

let Categoria = require("../modelos/categoria");

// ------------------ [ método GET ] ------------------ //
app.get("/categoria", verificaToken, (req, res) => {
  
  Categoria.find({})
    .sort("descripcion") // orden ascendente (A-Z)
    .populate("usuario", "nombre email") // usuario que dió de alta a la categoría
    .exec((err, categorias) => {
      if (err) {
        return res.status(500).json({
          ok: false,
          err,
        });
      } //fin del if(err)

      res.json({
        ok: true,
        categorias,
      });
    });
}); //fin GET

/// --------------- [ método GET con ID] --------------- //
app.get("/categoria/:id", verificaToken, (req, res) => {
  
  let id = req.params.id;

  Categoria.findById(id, (err, categoriaDB) => {
    if (err) {
      return res.status(500).json({
        ok: false,
        err,
      });
    } // fin if(err)

    if (!categoriaDB) {
      return res.status(500).json({
        ok: false,
        err: {
          message: "Categoría inexistente",
        },
      });
    }

    res.json({
      ok: true,
      categoria: categoriaDB,
    });
  });
}); //fin GET x Id

// ------------------ [ método POST ] ------------------ //
  app.post("/categoria", [verificaToken, verificaAdminRole], (req, res) => {
  let body = req.body;

  let categoria = new Categoria({
    descripcion: body.descripcion,
    usuario: req.usuario._id,
  });

  categoria.save((err, categoriaDB) => {
    if (err) {
      return res.status(500).json({
        ok: false,
        err,
      });
    }

    if (!categoriaDB) {
      return res.status(400).json({
        ok: false,
        err,
      });
    }

    res.status(201).json({
      ok: true,
      categoria: categoriaDB,
      message: 'Categoría creada exitosamente',
    });
  });
});
//fin POST

// ------------------ [ método PUT ] ------------------ //
app.put("/categoria/:id", [verificaToken, verificaAdminRole], (req, res) => {
  let id = req.params.id;
  let body = req.body;

  let descCategoria = {
    descripcion: body.descripcion,
  };

  Categoria.findByIdAndUpdate(id, descCategoria, { new: true, runValidators: true }, (err, categoriaDB) => {
      if (err) {
        return res.status(500).json({
          ok: false,
          err,
        });
      } //del if(err)

      if (!categoriaDB) {
        return res.status(400).json({
          ok: false,
          err,
        });
      } //del if(!)

      res.json({
        ok: true,
        categoria: categoriaDB,
      });
    }
  );
}); //fin PUT

// ------------------ [ método DELETE ] ------------------ //
app.delete("/categoria/:id", [verificaToken, verificaAdminRole], (req, res) => {
  let id = req.params.id;

  Categoria.findByIdAndRemove(id, (err, categoriaBorrada) => {
    if (err) {
      return res.status(500).json({
        ok: false,
        err,
      });
    } // fin del if(err)

    if (!categoriaBorrada) {
      return res.status(400).json({
        ok: false,
        err: {
          message: "El Id no existe",
        },
      });
    } // fin del if(!)

    res.json({
      ok: true,
      message: "Categoría borrada exitosamente",
    });
  });
}); // fin DELETE

// ------- [ exportamos la función ] ------- //
module.exports = app;
