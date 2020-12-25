import React from "react";
import LibroCard from './LibroCards'
import {Container, Row, Col} from 'react-bootstrap'

export default function LibroDeck({libreria}) {
  return (
    <Container>
        <Row>
            <Col>
             
                {libreria.map((item)=> ( 
                  <div className="Col xs={12} sm={6} md={4} lg={3} mb-5 mt-4 d-flex">
                 <LibroCard />
             </div>
             ))} 
            </Col>
        </Row>
      
    </Container>
  );
}
