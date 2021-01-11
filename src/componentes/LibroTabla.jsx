import React, { useEffect, useState } from 'react'
import { getAllLibros } from '../helpers/Libros';

export default function LibroTabla() {

	//Estado para manejar los datos de la tabla
	const [lista, setLista] = useState({
		datos: {},
		error: null,
		loading: true,
		cantidad: 0,
	});

	useEffect(() => {
		actualizaLista();

		console.log(lista.datos);

	}, []);

	const actualizaLista = () => {
		getAllLibros()
			.then((response) => {
				setLista(response);
			})
			.catch((response) => {
				setLista(response);
			});
	};

	return (
		<div>

		</div>
	)
}
