import React from 'react'
import {Card, Badge, Button} from 'react-bootstrap'

export default function LibroCards({libreria}) {
    console.log(libreria)

    return (
        <>
          {/* {libreria.map((item, index)=> (     **** si quiero poner key=index*/}
          {libreria.map((item)=> ( 
            <div className="Col xs={12} sm={6} md={4} lg={3} mb-5 mt-4 d-flex">
                <Card  key={item.isbn} mr-0 ml-0>
                    <div className="Card mr-0 ml-0">  
                        <div className="text-center zoom">
                            <Card.Img className="img-fluid rounded img-thumbnail imagenalto" height="130px" width="150px" alt="tapa"/>
                        </div>
                        <Card.Body flex-fill>
                            
                            <div className="Container text-center">
                                {item.titulo}
                            </div>

                            <div>
                                <Badge pill variant="primary">  {item.categoria}  </Badge>{' '}
                                <Badge pill variant="info">  {item.clasificacion} </Badge>{' '}   
                            </div>

                            <div className="text-center mb-1">
                                <p> {item.descripcion}  </p>
                            </div>

                            <span className="h2 text-center">$ {item.precio} </span>
                            <br/>
                            <Button variant="primary">Comprar</Button>
                        </Card.Body>
                        
                    </div>
                </Card>
            </div>
            ))} 
        </>       
    ) 
}
