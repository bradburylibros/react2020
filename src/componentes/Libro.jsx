import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import LibroFila from './LibroFila'
// import LibroForm from './LibroForm'
// import LibroCard from './LibroCard'


export default function Libro() {
    //const [libro, setLibro] = useState({})
    //const [libros, setLibros] = useState([]) //inicializamos como array 
    return (
        <Container>
            <Row ClassName="justify-content-between">
                <Col xs={8}>
                Formulario
                    <br/>
                    {/* 
                    <LibroForm/>   
                    <LibroForm libros={libros} setLibros={setLibros}/>  */}
                    <hr/>
                </Col>
                <Col xs={4}>
                Datos
                    <br/>
                    {/* <LibroCard/>  */}
                    <LibroFila/>  
                    <hr/>
                </Col>
            </Row>
        </Container>
    )
}
