<<<<<<< HEAD
import React from "react";

import { Modal } from "react-bootstrap";
import FormAddCategoria from "../formularios/AltaCategoriaForm";
import FormDeleteCategoria from "../formularios/BajaCategoriaForm";
=======
import React from 'react'
import { Modal } from 'react-bootstrap'

import CategoriaFormAlta from '../formularios/CategoriaFormAlta'
import CategoriaFormBaja from '../formularios/CategoriaFormBaja'
>>>>>>> silvia

export default function CategoriaModal(props) {
  return (
    <>
      <Modal show={props.show} onHide={props.handleClose} centered>
        {props.modalType.tipo === "add" && (
<<<<<<< HEAD
          <FormAddCategoria
=======
          <CategoriaFormAlta
>>>>>>> silvia
            handleClose={props.handleClose}
            actualizaCategoria={props.actualizaCategoria}
          />
        )}
        {props.modalType.tipo === "delete" && (
<<<<<<< HEAD
          <FormDeleteCategoria
=======
          <CategoriaFormBaja
>>>>>>> silvia
            handleClose={props.handleClose}
            id={props.modalType.id}
            actualizaCategoria={props.actualizaCategoria}
          />
        )}
      </Modal>
    </>
<<<<<<< HEAD
  );
=======
  )
>>>>>>> silvia
}
