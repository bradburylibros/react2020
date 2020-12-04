import React from 'react'

export default function BooksForm({handleChange, formValues, handleSubmit}) {
   
//   const handleSubmit = (e) => {
//              e.preventDefault() 
//              }
    return (
        <div>
            <h1>ABM Libros</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Título</label>
                    <input
                        type="text" 
                        className="form-control"  
                        onChange={handleChange}  
                        name="titulo"
                        value={formValues.titulo}
                    />
                </div>
                <div className="form-group">
                    <label>Autor</label>
                    <input
                        type="text"
                        className="form-control"
                        onChange={handleChange}
                        name="Autor"
                        value={formValues.Autor}
                    />
                </div>
                <div className="form-group">
                    <label>ISBN</label>
                    <input
                        type="text"
                        className="form-control"
                        onChange={handleChange}
                        name="isbn"
                        value={formValues.isbn}
                    />
                </div>
                <div className="form-group">
                    <label>Descripción</label>
                    <input
                        type="text"
                        className="form-control"
                        onChange={handleChange}
                        name="descripcion"
                        value={formValues.descripcion}
                    />
                </div>
                <div className="form-group">
                    <label>Categoría</label>
                    <input
                        type="text"
                        className="form-control"
                        onChange={handleChange}
                        name="categoria"
                        value={formValues.categoria}
                    />
                </div>
                <div className="form-group">
                    <label>Precio</label>
                    <input
                        type="number"
                        className="form-control"
                        onChange={handleChange}
                        name="precio"
                        value={formValues.precio}
                    />
                </div>
                <button className="btn btn-info float-right">Enviar</button>
            </form>

        </div>
    )
}
