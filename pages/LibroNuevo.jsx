import React, {useState} from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import NavBar from '../component/NavBar'
import LibroRow from '../component/LibroRow'
import LibroForm from '../component/LibroForm'

// --------- page para ABM de los libros ---------------------
// en src/pages/LibroNuevo.jsx
// deberia mostrar los componentes LibroForm (formulario a completar por el admin)
// LibroCard (que es la Card que se va a mostrar en la home) o la LibroFila de la LibroLista (que
// es la fila del listado de libros a la venta)
// a esta pagina solo accedería el administrador

export default function LibroNuevo() {
    const [state, setState] = useState({
        form: {},
    })
    // --
    const handleChange = (e)=> {
        setState ({
            form: {
                ...state.form,
                [e.target.name]: e.target.value,
            }
        }) //setState
    } //handleChange


    return (
        <div>
            <NavBar/>
            <Container>
                <Row>
                    <Col>
                        <LibroRow 
                            titulo={state.form.titulo}
                            autor={state.form.autor}
                            isbn={state.form.isbn}
                            tapa={state.form.tapa}
                            descripcion={state.form.descripcion}
                            precio={state.form.precio}
                            stock={state.form.stock}
                            clasificacion={state.form.clasificacion}
                            categoria={state.form.categoria}
                        />
                    </Col>
                    <Col>
                    <LibroForm handleChange={handleChange} />
                </Col>
                </Row>
            </Container>
        </div>
    )
}
