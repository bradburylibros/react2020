import React from "react";
// import { Link } from "react-router-dom";
import "../css/adminLibros.css";
// import Gravatar from "./Gravatar";


export default function AdminLibrosLista({ data }) {
	return (
		<>
			<div className="AdminLibrosLista">
				<ul>
					{data.map((libro) => {
						return (
							<li className="AdminLibrosListaItem mb-3">

								<div>

									{/* <div>{libro.titulo}</div>
									<div>{libro.autor}</div>
									<div>{libro.isbn}</div> */}

									<div>{libro.titulo}</div>

								</div>
							</li>
						);
					})}
				</ul>
			</div>
		</>
	);
}
