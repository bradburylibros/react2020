import React, { useState, useEffect } from "react";
import ModalTest from "./ModalTest";
import { getLibros } from "../helpers/Libros";
import { Table, Form } from "react-bootstrap";

export default function LibroTabla2({ usuario }) {

  //Obtener el id del producto y almacenarlo en el estado
  const [libroId, setLibroId] = useState({
    id: "",
    action: "",
  });

  //Estado para manejar la paginación
  const [page, setPage] = useState(0);
  const [show, setShow] = useState(false);

  //Estado para manejar los datos de la tabla
  const [lista, setLista] = useState({
    datos: {},
    error: null,
    loading: true,
    cantidad: 0,
  });

  // Si cambia el estado de Page vuelvo a cargar los datos
  // de los productos usando el helper
  useEffect(() => {
    actualizaLista(page);
  }, [page]);

  //Obtengo los datos de los productos usando helpers----------------------
  const actualizaLista = (page) => {
    getLibros(page)
      .then((response) => {
        setLista(response);
      })
      .catch((response) => {
        setLista(response);
      });
  };

  //-----------------------------------------------------

  console.log("--[Datos Usuario]----------");
  console.log(usuario);


  //-----Buscar libro ingresado--------------------
  const buscarLibro = async ({ target }) => {
    let termino = target.value;
	let token = JSON.parse(localStorage.getItem("token"));
	
    if (termino !== "") {
      try {
        const resp = await fetch(
          `http://localhost:3005/libro/buscar/${termino}`,
          {
            method: "GET",
            headers: {
              "Content-type": "application/json; charset=UTF-8",
              token: `${token}`,
            },
          }
		);
		
        const data = await resp.json();

        setLista({
          ...lista,
          datos: data.libro,
        });
      } catch (error) {
        console.log(error);
      }
    } else {
      actualizaLista(page);
    }
  };
  //------------------------------------------

  //----Limpiar campo de busqueda-------------

  const limpiarBuscador = ({ target }) => {
    target.value = "";
    actualizaLista(page);
  };
  //------------------------------------------

  // funcion para manejar paginado next
  const paginando = () => {
    if (page < lista.cantidad - 5) {
      setPage(page + 5);
    }
  };

  // Función para manejar paginado previo
  const despaginando = () => {
    if (page >= 5) {
      setPage(page - 5);
    }
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  if (lista.error !== null) {
    return <h2>Token expiró</h2>;
  }

  return (
    <>
      <ModalTest
        handleClose={handleClose}
        show={show}
        dato={libroId}
        page={page}
        actualizaLista={actualizaLista}
      />

      {lista.loading ? (
        <h2>Loading...</h2>
      ) : (
        <>
          <h2 className="text-center">Lista de Libros</h2>

          {/* Sección de buscar libro */}
          <div className="col-12 col-md-6 offset-md-3 col-lg-8 offset-lg-2">
            <Form.Group>
              <Form.Control
                type="text"
                placeholder="Buscar libro..."
                name="buscar"
                onChange={buscarLibro}
                onClick={limpiarBuscador}
              />
            </Form.Group>
          </div>
          {/* --------------------------- */}
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Estado</th>
                <th>Precio</th>
                <th>Categoría</th>
                <th>
                  {usuario.role === "ADMIN" && (
                    <button
                      className="btn btn-info btn-block mr-md-4 mb-2 mb-md-0"
                      onClick={() => {
                        setLibroId({
                          id: "",
                          action: "nuevo",
                        });
                        handleShow();
                      }}
                    >
                      <i className="fa fa-plus" aria-hidden="true"></i> Agregar
                    </button>
                  )}
                </th>
              </tr>
            </thead>
            <tbody>
              {lista.datos.map((libro, _id) => (
                <tr key={_id}>
                  <td>{libro.titulo}</td>
                  <td>
                    {libro.disponible ? (
                      <span className="text-success">Disponible</span>
                    ) : (
                      <span className="text-danger">No disponible</span>
                    )}
                  </td>
                  <td className="text-right">$ {libro.precio}</td>
				  
                  <td>
                    {/* {libro.categoria === null
                      ? "Sin categoría"
                      : libro.categoria.descripcion} */}

					{libro.categoria ?
					libro.categoria.descripcion
					:"Sin categoría" }
                  </td>

                  <td className="text-center">
                    {usuario.role === "ADMIN" && (
                      <div className="col">
                        <button
                          className="btn btn-warning"
                          onClick={() => {
                            setLibroId({
                              id: libro._id,
                              action: "actualizar",
                            });
                            handleShow();
                          }}
                        >
                          <i
                            className="fa fa-pencil-square-o"
                            aria-hidden="true"
                          ></i>
                        </button>
                        <button
                          className="btn btn-danger ml-md-4 mt-2 mt-md-0"
                          onClick={() => {
                            setLibroId({
                              id: libro._id,
                              action: "borrar",
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

          <button className="btn btn-info mr-2" onClick={despaginando}>
            <i className="fa fa-angle-double-left" aria-hidden="true"></i>
          </button>
          <button className="btn btn-info" onClick={paginando}>
            <i className="fa fa-angle-double-right" aria-hidden="true"></i>
          </button>
        </>
      )}
    </>
  );
}
