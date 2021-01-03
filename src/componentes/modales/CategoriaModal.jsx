import React from 'react'
import { Modal } from 'react-bootstrap'

import CategoriaFormAlta from '../formularios/CategoriaFormAlta'
import CategoriaFormBaja from '../formularios/CategoriaFormBaja'

export default function CategoriaModal(props) {
  return (
    <>
      <Modal show={props.show} onHide={props.handleClose} centered>
        {props.modalType.tipo === "add" && (
          <CategoriaFormAlta
            handleClose={props.handleClose}
            actualizaCategoria={props.actualizaCategoria}
          />
        )}
        {props.modalType.tipo === "delete" && (
          <CategoriaFormBaja
            handleClose={props.handleClose}
            id={props.modalType.id}
            actualizaCategoria={props.actualizaCategoria}
          />
        )}
      </Modal>
    </>
  )
}
