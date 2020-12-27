import React from "react";
//import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import CarouselHome from "../componentes/CarouselHome";
import Suscribirse from "../componentes/Suscribirse";
import Footer from "../componentes/Footer";
import NavBar from "../componentes/NavBar";
import "../css/style.css";

export default function Home() {
  return (
    <div className="Home">
      <NavBar />
      <CarouselHome />

      <Container>
        <Row>
          <Col>
          </Col>
        </Row>
        <Row>
          <Col>
          </Col>
        </Row>
        <Row>
          <Col>{/* AQUI VAN LAS CARDS */}</Col>
        </Row>
        <Row>
          <Col>
            <Suscribirse />
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}
