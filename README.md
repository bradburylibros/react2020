 README
# node_modules sino está esta carpeta tenemos que hacer en la consola:  >npm install
# npm start para comenzar a correr la aplicación, crea el servidor de desarrollo 
# en public solo index.html y el favicon.ico
# en scr es donde vamos a trabajar
# index.js es el archivo mas importante, es nuestro punto inicial de la aplicación (donde se montará lo 
# importante que va a disparar la aplicación)
# rfc snippet para crear react functional component
# en el index.js siempre estarán:
#       import React from 'react'; import ReactDOM from 'react-dom';
#       import 'bootstrap/dist/css/bootstrap.css'
#       ReactDOM.render( qué, dónde)
# en la carpeta src/pages voy creando las paginas padres que usan componentes src/components

# intalar bootstrap desde terminal:  >npm install bootstrap
# usar className= " " para darle el style esa className estará definida en el .css
# OJO una lista necesita una KEY si o si para renderizar
# ul: <ul> {data.map(item) => {
#                               return (
#                                   <li key={item.id}> 
#                                       {item.nombre} </li>
#                                       )
#           }}


# ???????????????????? DUDAS  26-12-2020 ????????????????????

# -------- page home ---------  en src/pages/Home.jsx
# creo que debería mostrar los componentes que tener un componente LibroCard / LibroDeck que se renderice en la /home
# por otro lado el abm de los libros que es la LibroFila, LibroLista y LibroForm 
# 


# --------- page para ABM de los libros ---------  en src/pages/LibroNuevo.jsx
# --------- a esta pagina solo accedería el administrador ---------
# deberia mostrar los componentes:  
#      LibroForm (formulario a completar por el admin. Las imagenes de las tapas de los libro
#                estan subidas a drive, tapa={state.form.tapa} = substring del obtener link
#      LibroCard (que es la Card que se va a mostrar en la home) o la LibroFila de la LibroLista (que
#                es la fila del listado de libros a la venta)
#      LibroLista 


<!-- 

//instalar express
 npm install express --save
me tiene que aparecer la carpeta node_modules

creo carpeta server y dentro de server server.js


ejecutar server, en la terminal de visualcode
node server/server.js --o--  node server/server

paquete de npm: nodemon -  lo instalamos de forma global: 
npm install -g nodemon
para llamarlo: nodemon server/server *** CADA VEZ QUE QUEREMOS LEVANTAR EL SERVER ***
vamos instalar paquete body-parser que es un middleware
funcion que tiene accceso a la solicitud (req)  y a la respuesta (res)
el body-parser analiza el cuerpo de la solicitud entrante y capturamos ese 
cuerpo con la expresion req.body
npm install body-parser --save (con --save queda incorporado en el proyecto cuando 
otro haga npm install)
para usarlo lo importamos en nuestro archivo .js
const bodyParser = require('body-parser')

// carpeta server/config y dentro un config.js

estas lineas de codigo es como lo vamos a usar antes de la peticion GET
// parse application/x-www-form-urlencoded --- de la documentación
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json --- de la documentación
app.use(bodyParser.json())


para importar un archivo en node usamos:
    require('./config/config')
van todos los require al ppio del archivo 


en postman->environment 
ADD / nombre:Desarrollo / variable:url / Initial value:localhost:3005

instalamos mongoose es una herramienta de modelado de objetos de MongoDB
está diseñada para funcionar en un entorno asincrono
$ npm install mongoose --save
para ver que version tenemos:??
despues lo importo:  
    const mongoose = require('mongoose');

hacemos la conexion con MongoDB
** mongo funciona en el puerto 27017 **
mongoose.connect('mongodb://localhost:27017/my_database', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true

}, (err,res) => {
  if(err) throw err;
  console.log ('base de datos online')
} 
);

como pasamos las rutas get post etc a usuario.js, tenemos que importar express
const express = require("express");
en usuario,js al final exporto en node la app con la que hago todas las peticiones
    module.exports = app

y en server.js, agrego : 
    app.use(require('./rutas/usuario'))

modelo, objeto de mongoose que nos permite realizar inserciones, actualizacones etc en MongoDB
para cada tabla definimos un modelo (atributos)


// ********* mongoose-unique-validator ********* //
npm install --save mongoose-unique-validator
para usarlo en el modelo lo llamo:
  const uniqueValidator= require('mongoose-unique-validator')
cómo se usa?:
  usuarioSchema.plugin(uniqueValidator,{
      message:'{PATH} debe ser único'
  })

// ********* encriptación de contraseñas ********* //

node.bcrypt.js
npm install bcrypt --save

const bcrypt=require('bcrypt') //para encriptar contraseña
lo usamos en: 
 password: bcrypt.hashSync(body.password, 10), //esto es 10 veces hasheamos/encriptamos la contraseña

antes del module.exports..:
usuarioSchema.methods.toJSON=function() {
    let user=this
    let userObject=user.toObject()
    delete userObject.password
    return userObject
} 


importacion underscore
npm install underscore

TOKEN
https://jwt.io/

npm install jsonwebtoken --save
const jwt = require("jsonwebtoken") //-- importo jsonwebtoken
como generar token??
en server/login.js
 // genero el token
        let token=jwt.sign ({
            usuario:usuarioDB
        }, process.env.SEED, {expiresIn: process.env.CADUCIDAD_TOKEN})

        // -- si lo encontro
        res.json({
        ok:true,
        usuario:usuarioDB,
        token:token,
        })

en config/config.js

// caducidad del token
process.env.CADUCIDAD_TOKEN ="48h"

// SEED
process.env.SEED = process.env.SEED || "esta_es_la_semilla"


en git bash
heroku config:set SEED="esta_es_la_firma_produccion"



******************** categoria y producto ********************






******************** generar documentacion con POSTMAN ********************
en la collection ""..."" y elegir PUBLIC DOCS

********** example request -> view more **********
var urlencoded = new URLSearchParams();
urlencoded.append("nombre", "test04");
urlencoded.append("email", "test04@gmail.com");
urlencoded.append("password", "123456");

var requestOptions = {
  method: 'POST',
  body: urlencoded,
  redirect: 'follow'
};

fetch("{{url}}/usuario", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));



******************** buscquedas del lafo del back ********************
ruta de producto

// BUSCAR PRODUCTO POR TERMINO (o palabra o cadena de caracteres)

app.get("/producto/buscar/:termino", verificaToken, (req,res)=>{

  //traemos el termino
  let termino=req.params.termino
  let reGex= new RegExp(termino, 'i') //i: es indistinto la mayuscula de la  miniscula

  Producto.find({nombre:reGex})
  .populate("categoria", "descrpcion")  //traemos de la categoria la descripcion
  .exec((err, producto)=>{
    if (err) {
      return res.status(500).json({
        ok: false,
        err,
      });
    }
    res.json ({
      ok:true,
      producto
    })

  })
}) -->


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
