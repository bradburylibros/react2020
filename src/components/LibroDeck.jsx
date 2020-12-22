import React from "react";
import LibroCard from './LibroCard'
import {Container, Row, Col} from 'react-bootstrap'

export default function LibroDeck() {
  return (
    <Container>
        <Row>
            <Col>
                <LibroCard />
            </Col>
        </Row>
      
    </Container>
  );
}
