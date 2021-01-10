import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import UsuarioForm from './UsuarioForm'
import UsuarioCard from './UsuarioCard'


export default function Usuario() {
    
    return (
        <Container>
            
            <Row ClassName="justify-content-between">
                <Col xs={6}>
                    Datos
                    <br/>
                    <UsuarioCard />
                </Col>

                <Col xs={5}>
                    Formulario
                    <br/>
                    <UsuarioForm />
                </Col>
            </Row>
            
        </Container>
    )
}
