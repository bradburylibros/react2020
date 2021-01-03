
// ------------- [ port ] ------------- //
process.env.PORT = process.env.PORT || 3005;

//definimos variales de entorno
//si estoy en ambiente de produccion es porque estoy en process.env.NODE_ENV sino, sino estoy en DEV
process.env.NODE_ENV=process.env.NODE_ENV || 'dev';

//defino la base de datos
let urlDB 

if(process.env.NODE_ENV==='dev') {
	urlDB='mongodb://localhost:27017/bradbury'     //urlDB tiene la dirección local
} else {
	urlDB= process.env.MONGO_URI // en la variable de entorno creada con Heroku MONGO_URI
}
    
process.env.URLDB=urlDB
//process.env.URLDB = 'mongodb+srv://user:zip29670@cluster0.snrqe.mongodb.net/bradbury';


// caducidad del TOEKN
process.env.CADUCIDAD_TOKEN ="14d"

// definimos SEED
process.env.SEED = process.env.SEED || "Semilla_local"