import React from "react";
import slider1 from "../images/libro1.jpg"
import slider2 from "../images/libro2.jpg"
import slider3 from "../images/libro3.jpg"
import slider4 from "../images/libro4.jpg"
import "../css/style.css";

export default function Carousel() {
  return (
    <div>
      <section id="carousel">
        <div
          id="main-carousel"
          class="carousel slide carousel-fade"
          data-ride="carousel"
        >
          <ol class="carousel-indicators">
            <li
              data-target="#main-carousel"
              data-slide-to="0"
              class="active"
            ></li>
            <li data-target="#main-carousel" data-slide-to="1"></li>
            <li data-target="#main-carousel" data-slide-to="2"></li>
            <li data-target="#main-carousel" data-slide-to="3"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src={slider3}
                class="d-block img-fluid"
                alt="Las Tinieblas y el Alba"
              />
            </div>
            <div class="carousel-item">
              <img
                src={slider4}
                class="d-block img-fluid"
                alt="Nutrición"
              />
            </div>
            <div class="carousel-item">
              <img
                src={slider2}
                class="d-block img-fluid"
                alt="La Tierra de las Historas"
              />
            </div>
            <div class="carousel-item">
              <img
                src={slider1}
                class="d-block img-fluid"
                alt="La Tía Cósima"
              />
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#main-carousel"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#main-carousel"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </section>
    </div>
  );
}
