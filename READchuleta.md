en package.json agregué en 
"scripts": {
 ...
 "serv": "json-server --watch db.json --port 3004",
 ..}
para que en la consola levante directamente con el comando:  $ npm run serv
# ########### backend ########### #
#
$ npm install express --save
desde la consola: $node server/server

#
POSTMAN con gmail: libreriabradbury.online@gmail.com
solo tengo que levantar el server y los cambios se verán en el POSTMAN

# nodemon-npm (para no tener que detener/levantar con $ node server/server )
npm install -g nodemon //-g lo instalamos de forma global
y a partir de ahora usamos 
$nodemon server/server

# body-parser es un middleware (tiene acceso al REQ y al RES)
analiza el cuerpo de la solicitud entrante
npm install body-parser --save
app.use(bodyParser.urlencoded ({extended: false}))
app.use(bodyParser.json())

# mongoose
npm install mongoose --save
lo importo en server.js:const mongoose = require('mongoose')

# mongoDB 
create - new connection : mongodb_bradbury
# Robo3T

# heroku
abrir cuenta en heroku (libreriabradbury.online@gmail.com)
instalar herokuCLI

# mongoose-unique-validator
es un complemento que agrega validacion a campos únicos, envia un error de validacion de mongoose
npm install --save mongoose-unique-validator
lo importo en el modelo: const uniqueValidator = require("mongoose-unique-validator")
antes del module.exports = mongoose.model ( , )
clasificacionSchema.plugin(uniqueValidator,{   message: '{PATH} debe ser único' })
tambien valida los valores validos de un campo


# bcrypt
npm install --save bcrypt
lo importamos en la ruta de usuario para encriptar la contraseña
const bcryp 0 require('bcrypt')



# underscore
es para controlar los campos que se puedan modificar en metodo PUT, por ej. 
en usuario que no se pueda modif el password
npm install --save underscore
lo importamos con: const _=require('underscore')
# usar runValidators
# -- para que funcione el heroku --
en package.json modifique "start": "react-scripts start", por "node server/server"
