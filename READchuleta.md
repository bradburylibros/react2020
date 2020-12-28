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

# Robo3T

# heroku
abrir cuenta en heroku (libreriabradbury.online@gmail.com)
instalar herokuCLI

