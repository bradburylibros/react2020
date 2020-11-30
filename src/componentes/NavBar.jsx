import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/logo.png";

import "../css/style.css";

export default function NavBar() {
  return (
    <header>
      <div id="inicio">
        <nav className="navbar navbar-expand-lg navbar-dark bg-1">
          <a class="navbar-brand">
            <img src={Logo} alt="Logo Bradbury" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ml-auto">
              <form className="form-inline my-2 my-lg-0">
                <input
                  className="form-control mr-sm-2"
                  type="search"
                  placeholder="Título,autor o ISBN"
                  aria-label="Search"
                />

                <button
                  className="btn btn-light my-2 my-sm-0 shadow mr-2"
                  type="submit"
                >
                  Buscar
                </button>
              </form>
              <li className="nav-item">
                <a className="nav-link text-white" href="index.html">
                  Inicio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#librorec">
                  Catalogo
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#libronov">
                  Novedades
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-white"
                  data-toggle="modal"
                  data-target="#exampleModal"
                >
                  Regístrate
                </a>
                <div
                  className="modal fade"
                  id="exampleModal"
                  tabindex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">
                          Ingresa tus datos
                        </h5>
                        <button
                          type="button"
                          className="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div className="modal-body">
                        <form
                        //  onSubmit="mostrar(event)"
                        >
                          <div className="form-row">
                            <div className="col">
                              <label>Nombre</label>
                              <input
                                type="text"
                                className="form-control"
                                id="nombre"
                                placeholder="Ingrese su nombre"
                                required
                              />
                            </div>
                            <div className="col">
                              <label>Apellido</label>
                              <input
                                type="text"
                                className="form-control"
                                id="apellido"
                                placeholder="Ingrese su apellido"
                                required
                              />
                            </div>
                          </div>
                          <div className="form-row">
                            <div className="form-group col-md-12 mt-3">
                              <label>Email</label>
                              <input
                                type="email"
                                className="form-control"
                                id="email"
                                placeholder="example@gmail.com"
                                required
                              />
                            </div>
                          </div>
                          <div className="form-row">
                            <div className="form-group col-md-6">
                              <label>Contraseña</label>
                              <input
                                type="password"
                                className="form-control"
                                id="contraseña"
                                placeholder="Ingrese su contraseña"
                                required
                              />
                            </div>
                            <div className="form-group col-md-6">
                              <label>Confirma Contraseña</label>
                              <input
                                type="password"
                                className="form-control"
                                id="contraseñaconfirm"
                                placeholder="Confirme su contraseña"
                                required
                              />
                            </div>
                            <div className="form-group col-md-6">
                              <label for="inputState">Provincia</label>
                              <select
                                id="opciones"
                                className="form-control"
                                required
                              >
                                <option selected>Selecciona...</option>
                                <option>Buenos Aires</option>
                                <option>Catamarca</option>
                                <option>Chubut</option>
                                <option>Córdoba</option>
                                <option>Jujuy</option>
                                <option>Neuquén</option>
                                <option>Salta</option>
                                <option>Santa Cruz</option>
                                <option>Tucumán</option>
                                <option>Tierra del Fuego</option>
                              </select>
                            </div>
                            <div className="form-group col-md-6">
                              <label for="inputState">Sexo:</label>
                              <select
                                id="sexo"
                                className="form-control"
                                required
                              >
                                <option selected>Selecciona...</option>
                                <option>Masculino</option>
                                <option>Femenino</option>
                              </select>
                            </div>
                          </div>
                          <div className="form-group mt-3">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="terminos"
                              />
                              <label
                                className="form-check-label"
                                for="gridCheck"
                              >
                                <p style={{ fontSize: "small" }}>
                                  Quiero recibir más información vía email sobre
                                  los ultimos lanzamientos y novedades
                                </p>
                              </label>
                            </div>
                          </div>
                          <div className="modal-footer">
                            <button
                              type="submit"
                              className="btn btn-outline-secondary"
                              data-dismiss="modal"
                            >
                              Cerrar
                            </button>
                            <button
                              type="submit"
                              className="btn btn-outline-danger"
                              // onClick="valcontraseña()"
                            >
                              Registrarse
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              <form 
              // onSubmit="cargar(event)"
               id="login">
                <li className="nav-item dropdown dropleft">
                  <a
                    className="nav-link dropdown-toggle text-white"
                    href="#"
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Ingresar
                  </a>

                  <div
                    className="dropdown-menu bg-3 p-4 text-dark"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <div className="form-group">
                      <label for="exampleDropdownFormEmail1">Email </label>
                      <input
                        type="email"
                        className="form-control"
                        id="emailusuario"
                        placeholder="email@example.com"
                      />
                    </div>
                    <div className="form-group">
                      <label for="exampleDropdownFormPassword1">
                        Contraseña
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        id="pass"
                        placeholder="Password"
                      />
                    </div>
                    <div className="form-group">
                      <div className="form-check">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="dropdownCheck"
                        />
                        <label className="form-check-label" for="dropdownCheck">
                          Recordar mi contraseña?
                        </label>
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="btn btn btn-outline-danger"
                      // onClick="login()"
                    >
                      Iniciar sesion
                    </button>
                    <div className="dropdown-divider"></div>
                    <a
                      className="dropdown-item"
                      data-toggle="modal"
                      data-target="#exampleModal"
                      href="#"
                    >
                      No tienes cuenta? Registrate
                    </a>
                  </div>
                </li>
              </form>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}
