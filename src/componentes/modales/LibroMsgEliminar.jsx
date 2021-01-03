import React from "react";

import { Modal, Button } from "react-bootstrap";

export default function LibroMsgEliminar(props) {
  let id = props.dato;

  const deleteProductos = async () => {
    let token = JSON.parse(localStorage.getItem("token"));
    try {
      const resp = await fetch(`http://localhost:3005/libro/${id}`, {
        method: "delete",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          token: `${token}`,
        },
      });
      const data = await resp.json();

      console.log(data);
      props.actualizaLista(props.page);
      props.handleClose();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title>Eliminar Libro</Modal.Title>
      </Modal.Header>
      <Modal.Body>Esta seguro que quiere eliminar el libro?</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.handleClose}>
          No
        </Button>
        <Button variant="danger" onClick={deleteProductos}>
          Si
        </Button>
      </Modal.Footer>
    </>
  );
}