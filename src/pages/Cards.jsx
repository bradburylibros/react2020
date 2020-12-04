import React, {useState} from 'react'
import Navbar from '../components/Navbar'
import SearchBook from '../components/SearchBook'
import Footer from '../components/Footer'
import CardDeck from '../components/CardDeck'


export default function Cards() {

  const [data, setData] = useState([
    {
      id: 1,
      titulo: "Los Guardianes",
      autor: "John Grisham",
      descripcion:
        "Un hombre inocente fue condenado por asesinato hace veintidós años. Su abogado no parará hasta verle libre",
      precio: 1300,
      imagen: "images/rec-2.jpg",
      cate: true,
      novedades: false,
    },
    {
      id: 2,
      titulo: "Las Tinieblas y el Alba",
      autor: "Ken Follet",
      descripcion:
        "En Las tinieblas y el alba, Ken Follett embarca al lector en un épico viaje que termina en Los pilares de la Tierra comienza.",
      precio: 3795,
      imagen: "images/rec-1.png",
      recomendados: true,
      novedades: false,
    },
    {
      id: 3,
      titulo: "Un lugar llamado antaño",
      autor: "Olga Tokarczuk",
      descripcion:
        "Una novela mágica: la historia de un pueblo y sus excéntricos habitantes, que es al mismo tiempo la historia de un siglo y un país",
      precio: 1299,
      imagen: "images/rec-3.png",
      recomendados: true,
      novedades: false,
    },
    {
      id: 4,
      titulo: "La tía Cósima",
      autor: "Florencia Bonelli",
      descripcion:
        "Cósima; un nombre para recordar. Una historia de cómo el amor vence al odio. La nueva novela de Florencia Bonelli; la escritora argentina más leída y admirada de América Latina ",
      precio: 949,
      imagen: "images/rec-4.png",
      recomendados: true,
      novedades: false,
    },
    {
      id: 5,
      titulo: "El Hombre Ilustrado",
      autor: "Ray Bradbury",
      descripcion:
        "El narrador anónimo conoce a El Hombre Ilustrado, un curioso personaje con el cuerpo completamente cubierto de tatuajes. Sin embargo, lo más remarcable e inquietante es que las ilustraciones están mágicamente vivas.",
      precio: 2500,
      imagen: "images/nov-1.jpg",
      novedades: true,
      recomendados: false,
    },
    {
      id: 6,
      titulo: "El enigma de la habitación 622",
      autor: "Joël Dicker",
      descripcion:
        "Una noche de diciembre, un cadáver yace en el suelo de la habitación 622 del Palace de Verbier, un hotel de lujo en los Alpes suizos. La investigación policial no llegará nunca a término y el paso del tiempo hará que muchos olviden lo sucedido.",
      precio: 2000,
      imagen: "images/nov-2.png",
      novedades: true,
      recomendados: false,
    },
    {
      id: 7,
      titulo: "1984",
      autor: "George Orwell",
      descripcion:
        "1984 es una de las novelas más inquietantes y atractivas del siglo XX. En el año 1984 Londres es una ciudad lúgubre en la que la Policía del Pensamiento controla de forma asfixiante la vida de los ciudadanos.",
      precio: 699,
      imagen: "images/nov-3.png",
      novedades: true,
      recomendados: false,
    },
    {
      id: 8,
      titulo: "La Bailarina de Auschwitz",
      autor: "Eger Edhit Eva",
      descripcion:
        "Una emocionante historia de superación sobre la capacidad del ser humano para sanar y vencer la adversidad. Un libro sobrecogedor, potente e inspirador que busca ayudar a todos aquellos cuyos traumas les impiden vivir en plenitud",
      precio: 1250,
      imagen: "images/nov-4.png",
      novedades: true,
      recomendados: false,
    }
  ])

 



    return (
        <div>
            <Navbar />
            <SearchBook />
            <CardDeck data={data}/>
            <Footer />
        </div>
    )
}
