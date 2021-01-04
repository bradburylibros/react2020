import React, { useEffect, useState } from "react";
import NavBarTest from "../componentes/NavBarTest";
import { getUsuario } from "../helpers/Usuario";

// import "../css/tabla.css";
// import Portada from "../images/portada.svg";

import LibroTabla from "../componentes/LibroTabla2";
import CategoriaTabla from "../componentes/LibroTablaCategoria";
import ClasificaTabla from "../componentes/LibroTablaClasifica"

export default function AdminDatos(props) {

  //verifico si hay un token guardado en el LocalStorage
  const token = localStorage.getItem("token") || "";
  const [logout, setLogout] = useState(false); //Estado que verifica el deslogueo

  //Estado para obtener datos del usuario logueado
  const [usuario, setUsuario] = useState({
    nombre: "",
    email: "",
    role: "",
  });

  useEffect(() => {
    //al montar componente
	//si no hay token volvemos al login
	
	console.log(token);

    const inicio = () => {
      if (token === "") {
        props.history.push("/");
      } else {
        //traemos datos del usuario usando el helper
        getUsuario()
          .then((response) => {
            setUsuario(response);
          })
          .catch((err) => console.log(err));
      }
    };
    inicio();
  }, []);

  //Si cambia el estado logout y es true volvemos a login
  useEffect(() => {
    if (logout) {
      props.history.push("/");
    }
  }, [logout]);

  return (
    <>
      {token.length > 0 && (
        <div>
          <NavBarTest setLogout={setLogout} />

          <div className="container mt-4">
            <div id="portada" className="row">
              <div className="col">
                {/* <img src={Portada} alt="portada" /> */}
              </div>
            </div>
            <div className="row mb-4">
              <div className="col">
                <LibroTabla usuario={usuario} />
              </div>
            </div>
            <div className="row mb-4">
              <div className="col-12 col-md-8 offset-md-2">
                <CategoriaTabla usuario={usuario} />
              </div>
            </div>
            {/* <div className="row mb-4">
              <div className="col-12 col-md-8 offset-md-2">
                <ClasificaTabla usuario={usuario} />
              </div>
            </div>    */}
          </div>
        </div>
      )}
    </>
  );
}
