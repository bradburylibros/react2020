import React, { useEffect, useState } from "react";
import { getClasificacion } from "../helpers/Clasificacions";

import { Table } from "react-bootstrap";
import ModalClasifica from "./modales/ClasificaModal";

export default function LibroTablaClasifica(props) {
  const [clasificacion, setClasificacion] = useState([]);
  const [show, setShow] = useState(false);

  const [modalType, setModalType] = useState({
    tipo: "",
    id: "",
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    actualizaClasificacion();
  }, []);

  const actualizaClasificacion = () => {
    getClasificacion()
      .then((response) => setClasificacion(response))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <ModalClasifica
        show={show}
        handleClose={handleClose}
        modalType={modalType}
        actualizaClasificacion={actualizaClasificacion}
      />
      <h2 className="text-center">Lista de Clasificaciones</h2>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Clasificación</th>
            {/* <th>Usuario</th> */}

            <th>
              {props.usuario.role === "ADMIN" && (
                <button
                  className="btn btn-info btn-block"
                  onClick={() => {
                    setModalType({
                      ...modalType,
                      tipo: "add",
                    });
                    handleShow();
                  }}
                >
                  <i className="fa fa-plus" aria-hidden="true"></i>
                  <span className="d-none d-md-inline"> Agregar</span>
                </button>
              )}
            </th>
          </tr>
        </thead>
        <tbody>
          {clasificacion.map((clasifica) => (
            <tr key={clasifica._id}>
              <td>{clasifica.descripcion}</td>
              {/* <td>{clasificacion.usuario.email}</td> */}
              <td>
                {props.usuario.role === "ADMIN" && (
                  <div className="col">
                    <button
                      className="btn btn-danger ml-md-4 mt-2 mt-md-0"
                      onClick={() => {
                        setModalType({
                          tipo: "delete",
                          id: clasificacion._id,
                        });
                        handleShow();
                      }}
                    >
                      <i className="fa fa-trash-o" aria-hidden="true"></i>
                    </button>
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}