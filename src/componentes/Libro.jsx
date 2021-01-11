import React, { useState, useEffect } from "react";
// import ModalTest from "./ModalTest";
import { getAllLibros } from "../helpers/Libros";
import LibroCardDeck from "./LibroCardDeck";
// import { Table, Form } from "react-bootstrap";
// import LibroCardDeck from "./LibroCardDeck";
// import LibroCard from "./LibroCard"
// import LibroCard from "./LibroCard";

export default function Libro() {

	const [libros, setLibros] = useState({
		datos: {},
		error: null,
		loading: true,
		cantidad: 0,
	});

	useEffect(() => {
		actualizaLibros();
	}, []);

	const actualizaLibros = () => {
		getAllLibros()
			.then((response) => setLibros(response))
			.catch((err) => console.log(err));
	};

	return (
		<>
			{
				libros.loading ? (
					<h2>Cargando...</h2>
				) : (
						<LibroCardDeck libros={libros.datos} />
					)
			}
		</>
	);
}
