import React from 'react'

import { Modal, Button } from 'react-bootstrap'

export default function ClasificaFormBaja(props) {
  let id = props.id;
  let token = JSON.parse(localStorage.getItem("token"))

  const deleteClasificacion = async () => {
    try {
      const resp = await fetch(`http://localhost:3005/clasificacion/${id}`, {
        method: "delete",
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
        <Modal.Title>Eliminar Clasificación</Modal.Title>
      </Modal.Header>
      <Modal.Body>Estás seguro?</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.handleClose}>
          Cancelar
        </Button>
        <Button
          variant="danger"
          onClick={() => {
            deleteClasificacion()
          }}
        >
          Borrar
        </Button>
      </Modal.Footer>
    </>
  )
}