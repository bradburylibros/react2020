import React from "react";
import { Badge, Button } from "react-bootstrap";
import LibroTapa from "./LibroTapa";
import "../css/style.css";

export default function LibroCard({ libro }) {
  return (
    <section className="d-flex" id="cardslibros">
      <div className=" mb-0">
        <div className="card h-100  mt-5">
          <div className="text-center zoom">
            <LibroTapa imgPortada={libro.tapa} />
          </div>

          <div
            className="card-body flex-fill pb-0"
            style={{ width: "250px", height: "320px" }}
          >
            <h5 className="container text-center">{libro.titulo}</h5>

            <div className="text-center">
              <Badge pill variant="primary">
                {" "}
                {libro.categoria}{" "}
              </Badge>{" "}
              <Badge pill variant="info">
                {" "}
                {libro.clasificacion}{" "}
              </Badge>{" "}
            </div>

            <div className="text-left">
              <p> {libro.descripcion} </p>
            </div>
            <div className="col px-0 ml-0  text-center">
              <span className="h2 text-center">$ {libro.precio} </span>
              <br />
              <div className="row">
                <div className="col px-0 ml-0 text-center">
                  <Button variant="primary">Comprar</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
