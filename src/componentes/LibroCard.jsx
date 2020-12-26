import React, {useState} from 'react'
import {Card, Badge, Button} from 'react-bootstrap'
import imgLibro from '../images/libro1.jpg'


export default function LibroCard() {
    const [libro, setLibro] = useState({ }) 
    
    return (
        <Card bg="light" mr-0 ml-0>
            <div className="Card mr-0 ml-0">  
                <div className="text-center zoom">
                    {/* cambiar por libro.img */}
                    <Card.Img src={imgLibro} className="img-fluid rounded img-thumbnail imagenalto" height="130px" width="150px" alt="tapa"/>

                </div>
                <Card.Body flex-fill>
                    
                    <div className="Container text-center">
                        {libro.titulo}
                    </div>

                    <div>
                        <Badge pill variant="primary">  {libro.categoria}  </Badge>{' '}
                        <Badge pill variant="info">  {libro.clasificacion} </Badge>{' '}   
                    </div>

                    <div className="text-center mb-1">
                        <p> {libro.descripcion}  </p>
                    </div>

                    <span className="h2 text-center">$ {libro.precio} </span>
                    <br/>
                    <Button variant="primary">Comprar</Button>
                </Card.Body>
                
            </div>
        </Card>
    ) 
}