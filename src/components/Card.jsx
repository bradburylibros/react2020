import React from 'react'
import Libro from '../images/elHombreIlustrado.jpg'
import '../css/card.css'


export default function Card() {
  const {titulo, autor, precio} = this.props
  return (
    <>
    <div>
      <img src={Libro} alt="libro"/>      
      <span>{titulo}</span>
      <span>{autor}</span>
      <span>${precio}</span>
      </div>
    </>
  )
}



// eslint-disable-next-line no-lone-blocks
{/* <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-5 mt-4 d-flex ">
        <div className="card mr-0 ml-0">
          <div className="text-center zoom">
            <img src={Libro} alt="libro"/>
          </div>

        </div>
    </div> */}

// eslint-disable-next-line no-lone-blocks
{/* 

<div class="text-center zoom">
<img src="${prod.imagen}" class="img-fluid rounded img-thumbnail imagenalto" height="130px" width="150px" alt="">
</img>
</div>
<div class="card-body flex-fill">
<div class="container text-center">
<h5>${prod.nombre}</h5>
<span class="badge badge-pill badge-primary">${prod.autor}</span>
</div>
<div class="text-center mb-1">
<p style="text-align:left"> ${prod.descripcion} </p>
</div>
<span class="h2 text-center">$${prod.precio}</span>
​
<div class="row">
<div class="col px-0 ml-0 trans text-center">
 <button type="submit"  class="btn btn btn-outline-danger">Comprar</button> 
 <button type="submit" class="btn btn-outline-success" onclick='addCarrito(${prod.id})'>Añadir a carrito</button>  
</div>
</div>
</div>
</div>

*/}
        
