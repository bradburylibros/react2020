const express = require("express");

let { verificaToken, verificaAdminRole } = require("../middlewares/autenticacion"); 

let app = express();

let Clasificacion = require("../modelos/clasificacion");


// ------------------ [ método GET ] ------------------ //
app.get("/clasificacion", verificaToken, (req, res) => {

  Clasificacion.find({})
    .sort("descripcion") // orden ascendente (A-Z)
    .populate("usuario", "nombre email") // usuario que dió de alta a la categoría
    .exec((err, clasificacion) => {
      if (err) {
        return res.status(500).json({
          ok: false,
          err,
        });
      } //fin del if(err)

      res.json({
        ok: true,
        clasificacion,
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
    } // fin if(err)

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
    } //del if(err)

    if (!clasificacionDB) {
      return res.status(400).json({
        ok: false,
        err,
      });
    }

    res.status(201).json({
      ok: true,
      clasificacion: clasificacionDB,
      message: 'Clasificación creada exitosamente',
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

  Clasificacion.findByIdAndUpdate(id, descClasificacion, { new: true, runValidators: true }, (err, clasificacionDB) => {
      if (err) {
        return res.status(500).json({
          ok: false,
          err,
        });
      } //del if(err)

      if (!clasificacionDB) {
        return res.status(400).json({
          ok: false,
          err: {
            message: 'El Id no existe'
          },
        });
      } //del if(!)

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
      message: "Clasificación borrada exitosamente",
    });
  });
}); // fin DELETE


// ------- [ exportamos la función ] ------- //
module.exports = app;