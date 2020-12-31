import React, {useState} from 'react'
import {Container, Row, Col} from 'react-bootstrap'

import LibroCardDeck from './LibroCardDeck'


export default function Libro() {

    const [libros, setLibros] = useState ([])
    const [loading, setLoading] = useState (true)
    
    setTimeout(() => {
        setLibros ([
            {
                id:1,
                titulo: "El Hombre Ilustrado",
                autor: "Ray Bradbury",
                isbn: "9794567890123",
                descripcion: "El narrador anónimo conoce a El Hombre Ilustrado, un curioso personaje con el cuerpo completamente cubierto de tatuajes.",
                tapa: "1DN7CjjaMSLydDys6ZXcdMwxZyqzw6g43",
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
                tapa: "1LWr26ZrODiQress1vH2YTRJ_7_P5MUYD",
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
                tapa: "1R90NRRCXOuN1FBIjC8OieIPU3udKbE4w",
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
                descripcion: "Una novela mágica: la historia de un pueblo y sus excéntricos habitantes, que es al mismo tiempo la historia de un siglo y un país.",
                tapa: "18fSwFXxVQtQgOT95CNDcOak7Rwrv9-It",
                precio: 1299,
                stock: 1,
                clasificacion: "No-ficción",
                categoria:"Recomendados"
              },
              {
                id:5,
                titulo: "La tía Cósima",
                autor: "Florencia Bonelli",
                descripcion:"Cósima; un nombre para recordar. Una historia de cómo el amor vence al odio. La nueva novela de Florencia Bonelli; la escritora argentina más leída y admirada de América Latina.",
                tapa: "1OHSTboONMStqRjn_vkyLEFHSfKo2uVSN",
                precio: 949,
                stock: 0,
                clasificacion: "Infantil",
                categoria:"Recomendados"
              },
              {
                id: 6,
                titulo: "El enigma de la habitación 622",
                autor: "Joël Dicker",
                descripcion:
                  "Una noche de diciembre, un cadáver yace en el suelo de la habitación 622 del Palace de Verbier, un hotel de lujo en los Alpes suizos.",
                tapa: "1GtrJYHULDqkuBKHwO9v_Dlv8ezuaeh04",
                precio: 2000,
                stock: 5,
                clasificacion: "Terror",
                categoria:"Novedades"
              },
              {
                id: 7,
                titulo: "1984",
                autor: "George Orwell",
                descripcion:
                  "1984 es una de las novelas más inquietantes y atractivas del siglo XX. En el año 1984 Londres es una ciudad lúgubre en la que la Policía del Pensamiento controla de forma asfixiante la vida de los ciudadanos.",
                tapa:"13DrZ3DipWafj7mWVRkWnvA41ZgRMMQAG" , 
                precio: 699,
                stock: 1,
                clasificacion: "Ficción",
                categoria:"Recomendados"
              },
              {
                id: 8,
                titulo: "La Bailarina de Auschwitz",
                autor: "Eger Edhit Eva",
                descripcion:
                  "Una emocionante historia de superación sobre la capacidad del ser humano para sanar y vencer la adversidad. Un libro sobrecogedor, potente e inspirador.",
                tapa:"1R90NRRCXOuN1FBIjC8OieIPU3udKbE4w" , 
                precio: 699,
                stock: 1,
                clasificacion: "Terror",
                categoria:"Novedades"
              },
        ])
        

        setLoading(false)
    }, 3000);


    return (
        <Container>
            <Row ClassName="justify-content-between">
                {/* <Col> */}
                   
        
                     {loading ? <h5>Cargando...</h5>
                     :
                     <LibroCardDeck libros={libros} /> 
                     }
                    
                 {/* </Col> */}
           </Row>
        </Container>
    )

}
