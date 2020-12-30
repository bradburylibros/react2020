const express = require("express");

let {
  verificaToken,
  verificaAdminRole,
} = require("../middlewares/autenticacion"); //importa middleware

let app = express();

let Clasificacion = require("../modelos/clasificacion");

// ------------------ [ método GET ] ------------------ //
app.get("/clasificacion", verificaToken, (req, res) => {
  Clasificacion.find({})
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
app.get("/clasificacion/:id", verificaToken, (req, res) => {
  let id = req.params.id;

  Clasificacion.findById(id, (err, clasificacionDB) => {
    if (err) {
      return res.status(500).json({
        ok: false,
        err,
      });
    }
    if (!clasificacionDB) {
      return res.status(500).json({
        ok: false,
        err: {
          message: "Clasificación inexistente",
        },
      });
    }

    res.json({
      ok: true,
      clasificacion: clasificacionDB,
    });
  });
}); //fin GET x Id

// ------------------ [ método POST ] ------------------ //
app.post("/clasificacion", [verificaToken, verificaAdminRole], (req, res) => {
  let body = req.body;

  let clasificacion = new Clasificacion({
    descripcion: body.descripcion,
    usuario: req.usuario._id,
  });

  clasificacion.save((err, clasificacionDB) => {
    if (err) {
      return res.status(500).json({
        ok: false,
        err,
      });
    }
    if (!clasificacionDB) {
      return res.status(400).json({
        ok: false,
        err,
      });
    }
    res.json({
      ok: true,
      clasificacion: clasificacionDB,
    });
  });
});
//fin POST

// ------------------ [ método PUT ] ------------------ //
app.put("/clasificacion/:id", [verificaToken, verificaAdminRole], (req, res) => {
  let id = req.params.id;
  let body = req.body;

  let descClasificacion = {
    descripcion: body.descripcion,
  };

  Clasificacion.findByIdAndUpdate(
    id,
    descClasificacion,
    { new: true, runValidators: true },
    (err, clasificacionDB) => {
      if (err) {
        return res.status(500).json({
          ok: false,
          err,
        });
      }
      if (!clasificacionDB) {
        return res.status(400).json({
          ok: false,
          err,
        });
      }
      res.json({
        ok: true,
        clasificacion: clasificacionDB,
      });
    }
  );
}); //fin PUT

// ------------------ [ método DELETE ] ------------------ //
app.delete("/clasificacion/:id", [verificaToken, verificaAdminRole], (req, res) => {
  let id = req.params.id;

  Clasificacion.findByIdAndRemove(id, (err, clasificacionBorrada) => {
    if (err) {
      return res.status(500).json({
        ok: false,
        err,
      });
    }
    if (!clasificacionBorrada) {
      return res.status(400).json({
        ok: false,
        err: {
          message: "ID inexistente",
        },
      });
    }
    res.json({
      ok: true,
      message: "Se borró la Clasificación",
    });
  });
}); // fin DELETE


// ------- [ exportamos la función ] ------- //
module.exports = app;