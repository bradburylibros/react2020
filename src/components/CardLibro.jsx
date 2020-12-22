import React from 'react'
import {Card, Badge, Button} from 'react-bootstrap'
//import {Card, Row, Col} from 'react-bootstrap'
//import Col from 'react-bootstrap/Col'

export default function CardLibro() {
    return (
        <div className="Col xs={12} sm={6} md={4} lg={3} mb-5 mt-4 d-flex">
            <Card  mr-0 ml-0>
                <div className="Card mr-0 ml-0">  
                    <div className="text-center zoom">
                        <Card.Img className="img-fluid rounded img-thumbnail imagenalto" height="130px" width="150px" alt="tapa"/>
                    </div>
                        <Card.Body flex-fill>
                            <div className="Container text-center">
                                titulo del libro
                                
                            </div>
                             
                            <div>
                                <Badge pill variant="primary">  Categoría  </Badge>{' '}
                                <Badge pill variant="info">  Clasificación </Badge>{' '}   
                            </div>

                            <div className="text-center mb-1">
                                <p> Descripcion del libro </p>
                             </div>

                             <span className="h2 text-center">$ precio</span>

                             

                        </Card.Body>
                        <Card.Footer>
                            <Button variant="primary">Comprar</Button>
                        </Card.Footer>
                   
                </div>
            </Card>
        </div>
    )
}
/* <Col xs={6}>   <Card.Img variant="top" src="holder.js/100px160" />
let card = `
<div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-5 mt-4 d-flex ">
<div class="card mr-0 ml-0">
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
</div>
</div>`
*/