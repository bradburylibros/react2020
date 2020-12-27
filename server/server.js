const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.urlencoded ({extended: false}))
app.use(bodyParser.json())

// ------------------ [ método GET ] ------------------ //
app.get('/usuario', function (req, res) { // req=request, res=response
  res.json({
      message: 'GET usuario',
    })
})

 // ------------------ [ método POST ] ------------------ //
 app.post('/usuario', function (req, res) { 
      res.json({
          message: 'POST usuario',
    })
})

 // ------------------ [ método PUT ] ------------------ //
 app.put('/usuario/:id', function (req, res) { 
    res.json({
        message: 'PUT usuario',
    })
})
 // ------------------ [ método DELETE ] ------------------ //
 app.delete('/usuario', function (req, res) { 
    res.json({
        message: 'DELETE usuario',
    })
})
// ------------------ [ app listen ] ------------------ //
app.listen(3000, ()=>{
    console.log ('servidor online en puerto:', 3000)
})