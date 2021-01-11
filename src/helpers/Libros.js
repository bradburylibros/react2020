export const getLibros = async (page) => {
	let token = JSON.parse(localStorage.getItem("token"));

	console.log(`Token: ${token}`);

	try {
		// envío los parámetros para la paginacion y defino el desde con el valor
		// del estado page
		const resp = await fetch(
			`${window.globalVar}/libro?limite=5&desde=${page}`,
			// `http://localhost:3005/libro?limite=5&desde=${page}`,
			// `https://mighty-peak-31803.herokuapp.com/libro?limite=5&desde=${page}`,

			// `http://localhost:3005/libro`,
			{
				method: "GET",
				headers: {
					"Content-type": "application/json; charset=UTF-8",
					token: `${token}`,
				},
			}
		);

		const data = await resp.json();

		console.log("--[Libros]--------------------------------------------------");
		console.log(data);
		console.log("------------------------------------------------------------");

		// en estado está la lista los datos obtenidos
		return {
			datos: data.libros,
			loading: false,
			cantidad: data.cantidad,
			error: null,
		};
	} catch (error) {
		return {
			datos: {},
			loading: false,
			error: error,
		};
	}
};

export const getAllLibros = async () => {
	// let token = JSON.parse(localStorage.getItem("token"));

	// console.log(`TOKEN: ${token}`);

	try {
		const resp = await fetch(`${window.globalVar}/libro`, {
			//   const resp = await fetch("http://localhost:3005/categoria", {
			//   const resp = await fetch("https://mighty-peak-31803.herokuapp.com/categoria", {
			//   const resp = await fetch("https://whispering-journey-97600.herokuapp.com/categoria", {
			method: "GET",
			headers: {
				"Content-type": "application/json; charset=UTF-8",
				token: "",
			},
		});

		const data = await resp.json();

		console.log("--[Libros]--------------------------------------------------");
		console.log(data);
		console.log("------------------------------------------------------------");

		return {
			datos: data.libros,
			loading: false,
			cantidad: data.cantidad,
			error: null,
		}
	} catch (error) {
		return {
			datos: {},
			loading: false,
			error: error,
		};
	}
};

// export const getAllLibros = async () => {
// 	let token = JSON.parse(localStorage.getItem("token"));
// 	try {
// 	  const resp = await fetch("http://localhost:3005/libro", {
// 		method: "GET",
// 		headers: {
// 		  "Content-type": "application/json; charset=UTF-8",
// 		  token: `${token}`,
// 		},
// 	  });
// 	  const data = await resp.json();
// 	  return data.libros;
// 	} catch (error) {
// 	  return error;
// 	}
//   };
  