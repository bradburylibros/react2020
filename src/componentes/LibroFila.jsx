import React from 'react'
import LibroTapa from './LibroTapa'

export default function LibroFila({libro}) {
    return (
        <div>
            <div className="card mb-3">
                <div className="row no-gutters">
                    <div className="col-md-4">
                    	<LibroTapa imgPortada={libro.tapa}/>
                    </div>

                    <div className="col-md-8">
                        <div className="card-body">
                            <p className="card-text">
                                Titulo: {libro.titulo} <br/>
                                Autor: {libro.autor} <br/>
                                ISBN: {libro.titulo} <br/>
                                Descripcion: {libro.descripcion} <br/>
                                Precio: {libro.precio} <br/>
                                Stock: {libro.stock} <br/>
                                Clasificación: {libro.clasificacion} <br/>
                                Categoría: {libro.categoria} <br/>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
