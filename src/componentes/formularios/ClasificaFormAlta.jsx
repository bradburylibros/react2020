import React, { useState } from 'react'

import { Modal, Button } from 'react-bootstrap'

export default function ClasificaFormAlta(props) {
  
  let id = JSON.stringify(localStorage.getItem("id"))
  // let token = JSON.stringify(localStorage.getItem("token"))

  const [state, setState] = useState({
    descripcion: "",
    usuario: "",
  });

  const handleChange = ({ target }) => {
    setState({
      descripcion: target.value,
      usuario: id,
    });
  };

  const addClasificacion = async () => {
    let token = JSON.parse(localStorage.getItem("token"))
    try {
      // const resp = await fetch("https://whispering-journey-97600.herokuapp.com/clasificacion"
      const resp = await fetch("http://localhost:3005/clasificacion", {
        method: "POST",
        body: JSON.stringify(state),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          token: `${token}`,
        },
      });
      props.actualizaClasificacion();
      props.handleClose();
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title>Clasificación</Modal.Title>
      </Modal.Header>
      <form onSubmit={addClasificacion}>
        <Modal.Body>
          <div className="container">
            <div className="col">
              <div className="form-group">
                <label>Nombre de la Clasificación</label>
                <input
                  type="text"
                  className="form-control"
                  name="descripcion"
                  value={state.descripcion}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            Cancelar
          </Button>
          <Button variant="info" type="submit">
            Guardar
          </Button>
        </Modal.Footer>
      </form>
    </>
  );
}
