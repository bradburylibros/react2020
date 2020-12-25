import React from 'react'
import { BrowserRouter, Route, Switch} from "react-router-dom";

import NavBar from './componentes/NavBar'
import Footer from './componentes/Footer'
import Suscribirse from './componentes/Suscribirse';
import Carousel from './componentes/Carousel';


export default function App() {
  return (
    <div>

      <NavBar />
      <Carousel />
      <Suscribirse />
      <Footer />

     </div>
  )
}
