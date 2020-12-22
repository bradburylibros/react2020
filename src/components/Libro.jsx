import React from 'react'
//import React, {useState, useEffect} from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import FormLibro from './FormLibro'
import CardLibro from './CardLibro'


export default function Libro() {
    //const [usuario, setUsuario] = useState("")
    
    
    //ciclo de vida
    // useEffect(() => {
    //     setUsuario("nuevoUsuario")
    //     return () => {
            //LO VEREMOS CUANDO USEMOS REACT-ROUTER Y TIENE QUE ESTAR EN UN **USEEFECT NUEVO**
    //     }
    // }, []) //hay que pasarle la dependencia vacía para que no entre en un bucle infinito
  
  
    return (
        <Container>
            
            <Row ClassName="justify-content-between">
                <Col xs={6}>

                Formulario
                    <br/>
                    <FormLibro />
                   

                </Col>
                <Col xs={5}>
                Datos
                    <br/>
                
                    <CardLibro />
                </Col>
            </Row>
            
        </Container>
    )
}
