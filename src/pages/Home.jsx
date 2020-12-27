import React from "react";
//import { Link } from "react-router-dom";
import {Container, Row, Col} from 'react-bootstrap'
import CarouselHome from "../componentes/CarouselHome";

import Footer from '../componentes/Footer'
import NavBar from '../componentes/NavBar'
import "../css/style.css";

export default function Home() {
  return (
    <div className="Home">
      <Container>
        <Row>
          <Col>
            <NavBar />
          </Col>
        </Row>
        <Row>
          <Col>
            <CarouselHome />
          </Col>
        </Row>
        <Row>
          <Col>
            {/* AQUI VAN LAS CARDS */}
          </Col>
        </Row>
        <Row>
          <Col>
            <Footer />
          </Col>
        </Row>
      </Container>
    </div>
  );
}