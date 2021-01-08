import React, { useState } from "react";
//import { Link } from "react-router-dom";
import {Row, Col} from 'react-bootstrap'

import NavBar from '../componentes/NavBar'
import CarouselHome from "../componentes/CarouselHome"
import Libro from '../componentes/Libro'
import Suscr from '../componentes/Suscribirse.jsx'
// import Footer from '../componentes/Footer'
// import LibroApp from '../componentes/LibroApp'
import NavbarCarrito from '../componentes/NavbarCarrito'
import Footer from "../componentes/Footer";
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
  // const getLibros = async () = {
  //   const resp = await fetch ("https://localhost:3004/dataLibros")
  //   const dataLibros = await resp.json()
  //   setDataLibros ({
  //   })
  // }

  return (
    <>
	    <NavBar />
      <NavbarCarrito />
     
      <Row>
        <Col>
          <CarouselHome />
        </Col>
      </Row>
    
      <Row>
        <Col>
          <Libro/>
        </Col>
      </Row>
     
      <Suscr/>
      <Footer />
    </>
  );
}
