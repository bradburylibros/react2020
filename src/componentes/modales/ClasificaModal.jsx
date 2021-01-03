import React from 'react'
import { Modal } from 'react-bootstrap'

import ClasificaFormAlta from '../formularios/ClasificaFormAlta'
import ClasificaFormBaja from '../formularios/ClasificaFormBaja'

export default function ClasificaModal(props) {
  return (
    <>
      <Modal show={props.show} onHide={props.handleClose} centered>
        {props.modalType.tipo === "add" && (
          <ClasificaFormAlta
            handleClose={props.handleClose}
            actualizaClasificacion={props.actualizaClasificacion}
          />
        )}
        {props.modalType.tipo === "delete" && (
          <ClasificaFormBaja
            handleClose={props.handleClose}
            id={props.modalType.id}
            actualizaClasificacion={props.actualizaClasificacion}
          />
        )}
      </Modal>
    </>
  )
}