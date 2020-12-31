import React, { useState } from "react";
//import { Link } from "react-router-dom";
import {Container, Row, Col} from 'react-bootstrap'

import NavBar from '../componentes/NavBar'
import LibroBarraBusq from '../componentes/LibroBarraBusq'
import CarouselHome from "../componentes/CarouselHome";
// import LibroApp from '../componentes/LibroApp'
import Libro from '../componentes/Libro'
import Suscr from '../componentes/Suscribirse.jsx'
import Footer from '../componentes/Footer'

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
    <>
        <Row>
          <Col>
                {/* Barra de busqueda */}
                <LibroBarraBusq buscarTxt={buscarTxt} handleChange={handleChange} />
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
            {/* <LibroApp/> */}
            <Libro/>
          </Col>
        </Row>
        <Suscr/>
    </>
  );
}
