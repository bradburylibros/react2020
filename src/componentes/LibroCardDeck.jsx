import React from "react";
// import LibroCard from "./LibroCard";
import { Badge, Button } from "react-bootstrap";
import LibroTapa from "./LibroTapa";


export default function LibroCardDeck({ libros }) {
	return (
		// <>
		<div className="row" style={{ justifyContent: "center" }}>
			{libros.map((item) => {
				return (
					<div className="card-deck  justify-content-center col-12 col-sm-6 col-md-4 col-lg-3 mb-5 mt-4 mr-1 pr-1 d-flex"
						key={item.id}
					>
						{/* <LibroCard item={item} /> */}

						<section className="d-flex" id="cardslibros">
							{/* "col-12 col-sm-6 col-md-4 col-lg-3 mb-5 mt-4 d-flex " */}
							<div className="mb-0">
								<div className="card h-100  mt-5">
									{/* img tapa */}
									<div className="text-center zoom">
										<LibroTapa imgPortada={item.tapa} />
									</div>
									{/* body */}
									<div className="card-body flex-fill pb-0" style={{ width: "250px", height: "320px" }}  >
										{/* título */}
										<h5 className="container text-center">{item.titulo}</h5>
										{/* autor */}
										<div className="text-center">
											<Badge pill variant="success"> {item.autor}</Badge>
										</div>
										{/* categoría y clasificación */}
										<div className="text-center">
											{/* <Badge variant="primary"> {item.categoria} </Badge> {' '}{' '} */}
											{/* <Badge variant="info"> {item.clasificacion} </Badge> */}
										</div>
										{/* descripción */}
										<div className="text-align">
											<span> {item.descripcion} </span>
										</div>
										{/* precio */}
										<span className="h4 text-center"> $ {item.precio} </span>
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


					</div>
				);

				// return(
				// <h1>{item.titulo}</h1>
				// )

				// console.log("-------------------------------");
				// console.log(`Título: ${item.titulo}`);
				// console.log(`Descipción: ${item.descripcion}`);

			})}
		</div>
		// </>
	);
}
