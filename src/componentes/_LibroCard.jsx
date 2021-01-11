import React from "react";
import { Badge, Button } from "react-bootstrap";
// import LibroTapa from "./LibroTapa";

import "../css/style.css";

export default function _LibroCard({ libro }) {

	return (
		<section className="d-flex" id="cardslibros">
			{/* "col-12 col-sm-6 col-md-4 col-lg-3 mb-5 mt-4 d-flex " */}
			<div className="mb-0">
				<div className="card h-100  mt-5">
					{/* img tapa */}
					<div className="text-center zoom">
						{/* <LibroTapa imgPortada={libro.tapa} /> */}
					</div>
					{/* body */}
					<div className="card-body flex-fill pb-0" style={{ width: "250px", height: "320px" }}  >
						{/* título */}
						{/* <h5 className="container text-center">{libro.titulo}</h5> */}
						{/* autor */}
						<div className="text-center">
							{/* <Badge pill variant="success"> {libro.autor}</Badge> */}
						</div>
						{/* categoría y clasificación */}
						<div className="text-center">
							{/* <Badge variant="primary"> {libro.categoria} </Badge> {' '}{' '} */}
							{/* <Badge variant="info"> {libro.clasificacion} </Badge> */}
						</div>
						{/* descripción */}
						<div className="text-align">
							{/* <span> {libro.descripcion} </span> */}
						</div>
						{/* precio */}
						{/* <span className="h4 text-center"> $ {libro.precio} </span> */}
						{/* botón comprar */}
						<div className="row">
							<div className="col px-0 ml-0 mb-2 text-center">
								<Button variant="outline-success" size="sm">Comprar</Button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
