import React, {useState} from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import LibroForm from './LibroForm'
import LibroCard from './LibroCards'


export default function Libro() {
    //const [libro, setLibro] = useState("")
    const [libros, setLibros] = useState([]) //inicializamos como array 
         
    return (
        <Container>
            
            <Row ClassName="justify-content-between">
                <Col xs={6}>

                Formulario
                    <br/>
                    <LibroForm libros={libros} setLibros={setLibros}/>
                   
                </Col>
                <Col xs={5}>
                Datos
                    <br/>
                
                    <LibroCard libreria={libros} />
                </Col>
            </Row>
            
        </Container>
    )
}
