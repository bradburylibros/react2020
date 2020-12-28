const express = require("express");

let {
  verificaToken,
  verificaAdminRole,
} = require("../middlewares/autenticacion"); //importa middleware

let app = express();

let Categoria = require("../modelos/categoria");

// ------------------ [ método GET ] ------------------ //
app.get("/categoria", verificaToken, (req, res) => {
  Categoria.find({})
    .sort("descripcion") // orden ascendente (A-Z)
    // ?????????????????????????????????????????????????????
    .populate("usuario", "nombre email") // para mostrar los datos del usuario que creo la categoria
    .exec((err, categorias) => {
      if (err) {
        return res.status(500).json({
          ok: false,
          err,
        });
      }

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
    }
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
    res.json({
      ok: true,
      categoria: categoriaDB,
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

  Categoria.findByIdAndUpdate(
    id,
    descCategoria,
    { new: true, runValidators: true },
    (err, categoriaDB) => {
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
    }
    if (!categoriaBorrada) {
      return res.status(400).json({
        ok: false,
        err: {
          message: "El id no existe",
        },
      });
    }
    res.json({
      ok: true,
      message: "Categoría Borrada",
    });
  });
}); // fin DELETE

module.exports = app;
