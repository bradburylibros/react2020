import React from 'react'

export default function SearchBook (props) {
    return (
        <div className="form-group">
            <input type="text"
            className="form-control"
            name="textoAbuscar"
            autoComplete="off"
            placeholder="buscar"
            />
        </div>
    )
}
// lo voy a llamar  antes de la lista de libros ahi hay que setear el estado etc
