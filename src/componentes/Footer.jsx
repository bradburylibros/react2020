import React from "react";
import Logo from "../images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFacebookF,faInstagram,faTwitter,} from "@fortawesome/free-brands-svg-icons";

import "../css/style.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer class="page-footer font-small stylish-color-dark mt-5">
        <section id="footinfo">
          <div class="container text-center text-light text-md-left">
            <div class="row">
              <div class="col-md-4 mx-auto mt-4">
                <img src={Logo} style={{ width: "50%" }} alt="Logo Bradbury" />
                <p class="mt-3">
                  Somos un grupo de estudiantes de la comision 3i de RollingCode
                  School{" "}
                </p>
              </div>
              <hr class="clearfix w-100 d-md-none" />
              <div class="col-md-2 mx-auto">
                <h5 class="font-weight-bold text-uppercase mt-3 mb-4">
                  Guía de compra
                </h5>
                <ul class="list-unstyled">
                  <li>
                    <a id="linksfo" href="#!">
                      Atención al cliente
                    </a>
                  </li>
                  <li>
                    <a id="linksfo" href="#!">
                      Como comprar
                    </a>
                  </li>
                  <li>
                    <a id="linksfo" href="#!">
                      Contacto
                    </a>
                  </li>
                </ul>
              </div>
              <hr className="clearfix w-100 d-md-none" />
              <div class="col-md-2 mx-auto">
                <h5 class="font-weight-bold text-uppercase mt-4 mb-4 mt">
                  Mi usuario
                </h5>
                <ul class="list-unstyled">
                  <li>
                    <a
                      id="linksfo"
                      href="#!"
                      data-toggle="modal"
                      data-target="#exampleModal"
                    >
                      Registrame
                    </a>
                  </li>
                  <li>
                    <a id="linksfo" href="#!">
                      Ingresar
                    </a>
                  </li>
                  <li>
                    <a id="linksfo" href="#!">
                      Estado de mi compra
                    </a>
                  </li>
                </ul>
              </div>
              <hr className="clearfix w-100 d-md-none" />
            </div>
          </div>
          <hr />

          {/* <!-- Social buttons --> */}
          <ul className="list-unstyled list-inline text-center">
            <li className="list-inline-item">
              <Link 
                to="https://es-la.facebook.com/"
                className="btn-floating btn-fb mx-1"
                target="_blank"
              >
                <FontAwesomeIcon
                  className="fa-lg white-text mr-md-5 mr-3 fa-2x"
                  icon={faFacebookF}
                />
              </Link> 
            </li>
            <li className="list-inline-item">
              <Link
                to="https://twitter.com/"
                className="btn-floating btn-tw mx-1"
                target="_blank"
              >
                <FontAwesomeIcon
                  className="fa-lg white-text mr-md-5 mr-3 fa-2x"
                  icon={faTwitter}
                />
              </Link>
            </li>
            <li className="list-inline-item">
              <Link
                to="https://www.instagram.com/?hl=es-la"
                className="btn-floating btn-li mx-1"
                target="_blank"
              >
                <FontAwesomeIcon
                  className=" fa-lg white-text mr-md-5 mr-3 fa-2x"
                  icon={faInstagram}
                />

                <i className="fab fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x">
                  {" "}
                </i>
              </Link>
            </li>
          </ul>
          <footer>
            <section id="nav" className="bg-1 p-2 mt-4">
              <nav className="nav d-flex container align-items-center justify-content-center">
                <Link className="nav-link" to="/">
                  Inicio
                </Link>
                {/* <a className="nav-link" href="index.html#librorec"> */}
                <Link className="nav-link" to="/">  
                  Catalogo
                </Link>
                {/* <a className="nav-link" href="index.html#libronov"> */}
                <Link className="nav-link" to="/">
                  Novedades
                </Link>
                {/* <a className="nav-link">Contacto</a> */}
                <Link className="nav-link" to="/">Contacto </Link>
              </nav>
            </section>
            {/* <!-- FIRMA --> */}
          </footer>
          <section id="firma" className="p-1">
            <h6 className="text-center m-0 text-light">
              Desarrollado por Hooklook
            </h6>
          </section>
        </section>
      </footer>
    </>
  );
}
