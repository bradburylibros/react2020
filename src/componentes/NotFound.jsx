import React from "react";
import { Link } from "react-router-dom";

import Error404 from "../images/404.png";
export default function NotFound() {
  return (
    <div className="container">
      <div className="row">
        <div className="offset-lg-3 col-12 col-sm-12 col-md-12 col-lg-6 mt-4">
          <Link to="/">
            <img className="img-fluid" src={Error404}></img>
          </Link>
          <h5>
            La pagina que busca no existe o fue removida, por favor vuelva a
            nuestra pagina de <Link to="/">inicio</Link>.
          </h5>
        </div>
      </div>
    </div>
  );
}
