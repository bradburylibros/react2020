import React from 'react'
import {Card, Badge, Button} from 'react-bootstrap'
import LibroTapa from './LibroTapa'


export default function LibroCard ({libro}) {
        
    return (
		<div className="col-12">
			<Card bg="light" mr-0 ml-0>
				{/* <div className="Card mr-0 ml-0">   */}
					<div className="text-center zoom">
						{/* <Card.Img src={imgLibro} className="img-fluid rounded img-thumbnail imagenalto" 
						height="130px" width="150px" alt="tapa"/> */}
						<LibroTapa imgPortada={libro.tapa}/>
						<img src={libro.tapa} alt="..." height="10px" width="50px"></img> 
						{/* <Card.Img  src={libro.tapa} className="img-fluid rounded img-thumbnail imagenalto"  height="130px" width="150px" alt="tapa" /> */}
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
				{/* </div> */}
			</Card>
		</div>
    ) 
}