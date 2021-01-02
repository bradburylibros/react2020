import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LoginForm from "../componentes/LoginForm";

export default function Login(props) {
  // token guarda el token de un usuario logueado o vacio
  const token = localStorage.getItem("token") || "";
  //--------------------------------------------------------------------------
  const [ingreso, setIngreso] = useState({
    token: "",
    id: "",
  });

  useEffect(() => {
	console.warn(ingreso.token.length);

    if (ingreso.token.length > 0) {
      localStorage.setItem("id", JSON.stringify(ingreso.id));
      //props.history.push("/");
    }
  }, [ingreso]); //esta escuchando al estado ingreso, cada vez que cambie se ejecutara el useEffect

  return (
    <>
      {/* <nav
        id="navLogin"
        className="navbar navbar-dark bg-dark d-flex justify-content-center"
      >
        <Link className="navbar-brand" to="/">
          <img src={Logo} alt="" />
        </Link>
      </nav> */}

      <div id="contenedor" className="container mt-4">
        <div className="row">
          <div className="col-12 col-md-12 col-lg-6 mb-3">
            {/* <img src={Portada} alt="portada" /> */}
          </div>
          <div id="formulario" className="col-12 col-md-12 col-lg-6 mb-3 ">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title text-center">Ingreso</h5>
				
                {token.length > 0 ? (
                  <div>
                    <h3 className="text-center">Ya se encuentra logueado</h3>
                    <Link to="/">Seguir</Link>
                  </div>
                ) : (
                  <LoginForm setIngreso={setIngreso} />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
