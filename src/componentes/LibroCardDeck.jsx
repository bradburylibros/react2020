import React from "react";
import LibroCard from './LibroCard'
import {Container, Row, Col, CardDeck} from 'react-bootstrap'

export default function LibroCardDeck({libros}) {
  return (
    <Container>
      {/* <CardDeck> 
        <Row>
           <Col xs={12} sm={6} md={4} lg={6} mb-5 mt-4 d-flex> */}
              {libros.map (item=>{
                    return (
                        <li key={item.id}>
                            <LibroCard libro={item}/>
                        </li>
                    )
                })}
            {/* </Col>
        </Row>
      </CardDeck> */}
    </Container>
  );
}
