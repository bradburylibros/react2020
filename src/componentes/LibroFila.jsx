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
                            <h5 className="card-title">{libro.titulo}</h5>
                            <h6 className="card-title">{libro.autor}</h6>
                            <p className="card-text">{libro.descripcion}</p>
                            <span class="badge rounded-pill bg-primary">{libro.categoria}</span>
                            <span class="badge rounded-pill bg-success">{libro.clasificacion}</span>
                            <p className="card-text">Stock: <span className="badge bg-info text-dark">{libro.stock}</span> </p>
                            <h5 className="card-title">$ {libro.precio}</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
