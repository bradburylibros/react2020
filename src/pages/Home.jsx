import React, { useState } from "react";
//import { Link } from "react-router-dom";
<<<<<<< HEAD
import { Container, Row, Col } from "react-bootstrap";
import CarouselHome from "../componentes/CarouselHome";
import Suscribirse from "../componentes/Suscribirse";
import Footer from "../componentes/Footer";
import NavBar from "../componentes/NavBar";
=======
import {Container, Row, Col} from 'react-bootstrap'

import NavBar from '../componentes/NavBar'
import LibroBarraBusq from '../componentes/LibroBarraBusq'
import CarouselHome from "../componentes/CarouselHome";
// import LibroApp from '../componentes/LibroApp'
import Libro from '../componentes/Libro'
import Footer from '../componentes/Footer'

>>>>>>> 7582c3b2219c550b7f681becb8884bf3236d9b53
import "../css/style.css";
// ----------------------------------------------------- //

export default function Home() {

 // ------------- [ Barra Buscar Texto ] ------------- //
  const [buscarTxt, setBuscarTxt] = useState({
    texto: ''
  })
  const handleChange=({target})=>{
    setBuscarTxt ({
      texto: target.value
    })
  }

  // const nuevaListaLibros = libros
  // // -----------

  // const getLibros = async () = {
  //   const resp = await fetch ("https://localhost:3004/dataLibros")
  //   const dataLibros = await resp.json()

  //   setDataLibros ({

  //   })
  // }

  return (
    <div className="Home">
      <NavBar />
      <CarouselHome />

      <Container>
        {/* NAVBAR */}
        <Row>
          <Col>
<<<<<<< HEAD
=======
            <NavBar />
                {/* Barra de busqueda  I*/}
                <LibroBarraBusq buscarTxt={buscarTxt} handleChange={handleChange} />
>>>>>>> 7582c3b2219c550b7f681becb8884bf3236d9b53
          </Col>
        </Row>
        {/* CAROUSEL */}
        <Row>
          <Col>
          </Col>
        </Row>
        {/* CARDS */}
        <Row>
<<<<<<< HEAD
          <Col>{/* AQUI VAN LAS CARDS */}</Col>
=======
          <Col>
            {/* AQUI VAN LAS CARDS */}
            {/* POR EL MOMENTO PUSE EL LIBROAPP PERO DEBERIA IR EL LIBRODECK
            O LIBROCARDS DONDE RENDERICE EL MAPS DEL ARRAY DE LAS TARJETAS
            EN EL DRIVE https://drive.google.com/drive/folders/13Tp5YEFLxVBJY2huagAi90fb3YeUtxcE
              PUSE LA CARPETA DE IMAGENES PARA TOMARLAS DE ALLI
            */}
            {/* <LibroApp/> */}
            <Libro/>
          </Col>
>>>>>>> 7582c3b2219c550b7f681becb8884bf3236d9b53
        </Row>
        {/* FOOTER */}
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
