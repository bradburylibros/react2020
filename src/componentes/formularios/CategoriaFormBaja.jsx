import React from 'react'

import { Modal, Button } from 'react-bootstrap'

export default function CategoriaFormBaja(props) {
  let id = props.id;
  let token = JSON.parse(localStorage.getItem("token"))

  const deleteCategoria = async () => {
    try {
      const resp = await fetch(`${window.globalVar}/categoria/${id}`, {
    //   const resp = await fetch(`http://localhost:3005/categoria/${id}`, {
    //   const resp = await fetch(`https://mighty-peak-31803.herokuapp.com/categoria/${id}`, {
        method: "delete",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          token: `${token}`,
        },
      });
      props.actualizaCategoria()
      props.handleClose()
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title>Eliminar Categoría</Modal.Title>
      </Modal.Header>
      <Modal.Body>Estás seguro?</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.handleClose}>
          Cancelar
        </Button>
        <Button
          variant="danger"
          onClick={() => {
            deleteCategoria()
          }}
        >
          Borrar
        </Button>
      </Modal.Footer>
    </>
  );
}