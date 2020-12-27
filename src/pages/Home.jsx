import React from "react";
//import { Link } from "react-router-dom";
import {Container, Row, Col} from 'react-bootstrap'
import CarouselHome from "../componentes/CarouselHome";
import LibroApp from '../componentes/LibroApp'
import Footer from '../componentes/Footer'
import NavBar from '../componentes/NavBar'
import "../css/style.css";

export default function Home() {
  return (
    <div className="Home">
      <Container>
        {/* NAVBAR */}
        <Row>
          <Col>
            <NavBar />
                {/* Barra de busqueda  I*/}
          </Col>
        </Row>
        {/* CAROUSEL */}
        <Row>
          <Col>
            <CarouselHome />
          </Col>
        </Row>
        {/* CARDS */}
        <Row>
          <Col>
            {/* AQUI VAN LAS CARDS */}
            {/* POR EL MOMENTO PUSE EL LIBROAPP PERO DEBERIA IR EL LIBRODECK
            O LIBROCARDS DONDE RENDERICE EL MAPS DEL ARRAY DE LAS TARJETAS
            EN EL DRIVE https://drive.google.com/drive/folders/13Tp5YEFLxVBJY2huagAi90fb3YeUtxcE
              PUSE LA CARPETA DE IMAGENES PARA TOMARLAS DE ALLI
            */}
            <LibroApp/>
          </Col>
        </Row>
        {/* FOOTER */}
        <Row>
          <Col>
            <Footer />
          </Col>
        </Row>
      </Container>
    </div>
  );
}