import React from "react";
import LibroCards from './LibroCards'
import {Container, Row, Col} from 'react-bootstrap'

export default function LibroDeck({libreria}) {
  return (
    <Container>
        <Row>
            <Col>
              {/* <div className="Col xs={12} sm={6} md={4} lg={3} mb-5 mt-4 d-flex"> 
              <Card bg="light" key={libro.isbn} mr-0 ml-0>*/}
                {libreria.map((item)=> ( 
                  <div className="Col xs={12} sm={6} md={4} lg={3} mb-5 mt-4 d-flex">
                 <LibroCards />
             </div>
             ))} 
              {/* </div> */}
            </Col>
        </Row>
      
    </Container>
  );
}
