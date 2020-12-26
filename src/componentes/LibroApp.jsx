import React, {useState} from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import LibroLista from './LibroLista'
import LibroForm from './LibroForm'
//import LibroFila from './LibroFila'

export default function LibroApp() {
 
    const [libros, setLibros] = useState ([])
    const [loading, setLoading] = useState (true)
    
    setTimeout(() => {
        setLibros ([
            {
                id:1,
                titulo: "El Hombre Ilustrado",
                autor: "Ray Bradbury",
                isbn: "9794567890123",
                descripcion: "El narrador anónimo conoce a El Hombre Ilustrado, un curioso personaje con el cuerpo completamente cubierto de tatuajes. Sin embargo, lo más remarcable e inquietante es que las ilustraciones están mágicamente vivas.",
                tapa: "1bOjN3O5RpVcfRXX6Bu4R0E8-GBhbYYcp",
                precio: 2500,
                stock: 3,
                clasificacion: "Ficción",
                categoria:"Más vendidos",
              },
            {
                id:2,
                titulo: "Los Guardianes",
                autor: "John Grisham",
                isbn: "9784567890123",
                descripcion: "Un hombre inocente fue condenado por asesinato hace veintidós años. Su abogado no parará hasta verle libre",
                tapa: "1hYe9I34jMalSZoxKN0UcgL_8IoVfYQhG",
                precio: 1300,
                stock: 3,
                clasificacion: "Ficción",
                categoria:"Novedades",
              },
              {
                id:3,
                titulo: "Las Tinieblas y el Alba",
                autor: "Ken Follet",
                isbn: "9784567890123",
                descripcion: "En Las tinieblas y el alba, Ken Follett embarca al lector en un épico viaje que termina en Los pilares de la Tierra comienza.",
                tapa: "1OIOReV83jTF8wGS_cxOcZprW9yKHLImh",
                precio: 3795,
                stock: 2,
                clasificacion: "Ficción",
                categoria:"Novedades",
              },
              {
                id:4,
                titulo: "Un lugar llamado antaño",
                autor: "Olga Tokarczuk",
                isbn: "9784567890123",
                descripcion: "Una novela mágica: la historia de un pueblo y sus excéntricos habitantes, que es al mismo tiempo la historia de un siglo y un país",
                tapa: "1U5SYQZvbgMPslT43xomTPYd8peeQp99E",
                precio: 1299,
                stock: 1,
                clasificacion: "No-ficción",
                categoria:"Recomendados"
              },
              {
                id:5,
                titulo: "La tía Cósima",
                autor: "Florencia Bonelli",
                descripcion:"Cósima; un nombre para recordar. Una historia de cómo el amor vence al odio. La nueva novela de Florencia Bonelli; la escritora argentina más leída y admirada de América Latina ",
                tapa: "1WRJ8mWRZpAvuaq_edDURf52yB3_jb8iI",
                precio: 949,
                stock: 0,
                clasificacion: "Infantil",
                categoria:"Recomendados"
              },
        ])
        
        setLoading(false)
    }, 3000);

    return (
        <Container>
            <Row ClassName="justify-content-between">
                <Col xs={6}>
                    <h3>Formulario</h3>
                    
                    <LibroForm/>   
                   
                </Col>
                <Col xs={6}>
                    <h3>Listado</h3>
                    {loading ? <h5>Cargando...</h5>
                    :
                    <LibroLista libros={libros} /> 
                    }
                    
                </Col>
            </Row>
        </Container>
    )
}

