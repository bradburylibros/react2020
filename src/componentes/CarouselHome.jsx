import React from 'react'
import {Carousel} from 'react-bootstrap'
import slider1 from "../images/libro1.jpg"
import slider2 from "../images/libro2.jpg"
import slider3 from "../images/libro3.jpg"
import slider4 from "../images/libro4.jpg"
import "../css/style.css"



export default function CarouselHome() {
    return (
        <Carousel id="carousel">
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={slider3}
                alt="La Tierra de las Historas"
                />
            </Carousel.Item>
            
            <Carousel.Item >
                <img
                src={slider4}
                className="d-block w-100 img-fluid"
                alt="Nutrición"
                />
            </Carousel.Item>
            
            <Carousel.Item>
                <img
                src={slider2}
                className="d-block w-100"
                alt="Las Tinieblas y el Alba"
                />
            </Carousel.Item>

            <Carousel.Item >
                <img
                src={slider1}
                className="d-block w-100"
                alt="La Tía Cósima"
                />
            </Carousel.Item>
        </Carousel>
    )
}
