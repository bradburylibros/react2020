import React from "react";
import NavBar from '../componentes/NavBar'
import NavbarCarrito from '../componentes/NavbarCarrito'
import CarouselHome from "../componentes/CarouselHome"
import Libro from '../componentes/Libro'
import Suscr from '../componentes/Suscribirse.jsx'
import Footer from "../componentes/Footer";
import "../css/style.css";

// ----------------------------------------------------- //

export default function Home() {

  return (
    <>
	    <NavBar />
      <NavbarCarrito />
      <CarouselHome />
      <Libro/>
      <Suscr/>
      <Footer />
    </>
  );
}
