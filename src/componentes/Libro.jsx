import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import LibroCardDeck from './LibroCardDeck'

export default function Libro() {
    //const [libro, setLibro] = useState({})
    //const [libros, setLibros] = useState([])
    return (
        <Container>
            <Row ClassName="justify-content-between">
                <Col>
                    <LibroCardDeck/>  
                    {/*  <LibroForm libros={libros} setLibros={setLibros}/>  */}
                </Col>
            </Row>
        </Container>
    )
}
