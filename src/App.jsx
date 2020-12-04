import React from "react";
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import SearchBook from "./components/SearchBook"
import Cards from "./pages/Cards"

import './global.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap.min.css';

// import CardDeck from "./pages/CardDeck"

// import { BrowserRouter, Route, Switch } from "react-router-dom";
// import Home from "../pages/Home";


export default function App() {
  return (
    // <BrowserRouter>
    //   <Layout>
    //     <Switch>
    //       <Route exact path="/" component={Home} />
       
    //     </Switch>
    //   </Layout>
    // </BrowserRouter>
   
      <div>
          <Navbar />
          <SearchBook />
          <Cards />
          {/* <CardDeck data={libros}/> */}
          <Footer />

      </div>
  
  );
}
