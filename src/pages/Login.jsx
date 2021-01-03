import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LoginForm from "../componentes/LoginForm";
import { Button } from "react-bootstrap";

export default function Login(props) {
  // token guarda el token de un usuario logueado o vacio
  const token = localStorage.getItem("token") || "";
  const roleLocalStorage = localStorage.getItem("role") || "";
  //--------------------------------------------------------------------------

  const [ingreso, setIngreso] = useState({
    token: "",
    id: "",
  });

  useEffect(() => {
	console.warn(ingreso.token.length);

    if (ingreso.token.length > 0) {
      localStorage.setItem("id", JSON.stringify(ingreso.id));
	//   props.history.push("/");
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
		

      <div id="contenedor" className="container">
        <div className="row">
          <div className="col-12 col-md-12 col-lg-12 mb-3">
            {/* <img src={Portada} alt="portada" /> */}
          </div>
          <div id="formulario" className="col-12 col-md-12 col-lg-12 mb-3 ">
            <div className="card">
              <div className="card-body">
                {/* <h5 className="card-title text-center">Ingreso</h5> */}
				{
				console.log(`ingreso.role: ${ingreso.role}`)
				}
                {token.length > 0 ? (
                  <div className="col-lg-12">
					{roleLocalStorage === '"ADMIN"' ?
					(<>
						<div className="text-center"><span>Usuario Administrador Logueado</span></div>
						<hr/>
						<div className="text-center"><Link to="/adminLibros">Ir a la página de Admin</Link></div>
						<hr/>

						<div className="text-center">
								<Button
									className="btn btn-danger"
									onClick={() => {
										// setToken("");
										localStorage.clear();
										// setLogout(true);
										}}
									href="/"
								>
									Cerrar Sesión
								</Button>
							</div>
					</>)
					:(
						<div className="col-lg-12">
							<h5 className="text-center">Usuario Logueado</h5>
							<div className="text-center">
								<Button
									className="btn btn-danger"
									onClick={() => {
										// setToken("");
										localStorage.clear();
										// setLogout(true);
										}}
									href="/"
								>
									Cerrar Sesión
								</Button>
							</div>
						</div>
					)}
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
