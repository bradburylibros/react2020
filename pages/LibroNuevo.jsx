import React, {useState} from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import NavBar from '../component/NavBar'
import LibroForm from '../component/LibroForm'


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
                        <LibroCard 
                            titulo={state.form.titulo}
                            autor={state.form.autor}
                            descripcion={state.form.descripcion}
                            precio={state.form.precio}
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
