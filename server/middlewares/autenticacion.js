const jwt = require("jsonwebtoken") 

// ----- traemos TOKEN (va sin "") del Header (postman) ----- //
let verificaToken=(req,res,next)=>{
    
    let token=req.get('token')

    jwt.verify(token, process.env.SEED,(err,decoded)=>{
        if(err) {
            return res.status(401).json({
                ok:false,
                err: {
                    message:"TOKEN inválido"
                }
            })
        } //fin del if(err)

        req.usuario=decoded.usuario
        next() //continúa con la petición
    }) //del jwt.verify
    
} //verificaToken


// ------------ [verifica rol ADMIN ] ------------ //
let verificaAdminRole = (req, res, next)=>{
    let usuario = req.usuario
    if (usuario.rol === 'ADMIN') {
        next() //continúa con la petición
    } else {
        return res.json({
            ok:false,
            err: {
                message: 'Permisos insuficientes'
            }
        })
    }
} //verificaAdmin


// ----------- [ exportamos las funciones ] ----------- //
module.exports={
    verificaToken, 
    verificaAdminRole
}