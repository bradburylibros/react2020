import React from "react";
import LibroCard from './LibroCard'
import {Container, Row, Col} from 'react-bootstrap'

export default function LibroCardDeck({libreria}) {
  return (
    <Container>
        <Row>
            {/* <Col xs={12} sm={6} md={4} lg={3} mb-5 mt-4 d-flex> */}
            <Col>
                {/* {libreria.map((item)=> ( 
                
                 <LibroCard />
             </div>
             ))}  */}
            
            </Col>
        </Row>
      
    </Container>
  );
}
