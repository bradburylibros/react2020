import React from "react";
import { Link } from "react-router-dom";


import Logo from "../images/logo.png";

import "../css/style.css";

export default function Home() {
  return (
    <div className="Home">
      <div className="container">
        <div className="row">
          <div className="col-6 mt-5">
            <img src={Logo} alt="logo BradburyLibros" />
            <div className="text-center mt-3">
               <Link to="/home" className="btn btn-info btn-lg">
                Acceder
              </Link> 
            </div>
          </div>
          <div className="col-6 mt-5 contenedor">
            <img className="logo_rolling" src={Logo} alt="logo rolling" />
          </div>
        </div>
      </div>
    </div>
  );
}