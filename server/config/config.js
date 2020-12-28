
// ------------- [ port ] ------------- //
process.env.PORT = process.env.PORT || 3005;

//definimos variales de entorno
//si estoy en ambiente de produccion que me avise sino me devuelve DEV
//process.env.NODE_ENV=process.env.NODE_ENV || 'dev';

//defino la base de datos
// let urlDB

// if(process.env.NODE_ENV==='dev') {
//     urlDB='mongodb://localhost:27017/bradbury'
//     } else{
//         urlDB= process.env.MONGO_URI//'mongodb+srv://user:Hsieh.2017@cluster0.trfyj.mongodb.net/test'
// }

// process.env.URLDB=urlDB

// ----- [ variables de entorno ] ----- //

// caducidad del token
// process.env.CADUCIDAD_TOKEN ="96h"

// SEED
// process.env.SEED = process.env.SEED || "esta_es_la_semilla"