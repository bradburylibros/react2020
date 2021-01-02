export const getLibros = async (page) => {
    let token = JSON.parse(localStorage.getItem("token"));
    try {
      // envío los parámetros para la paginacion y defino el desde con el valor
      // del estado page
      const resp = await fetch(
        `http://localhost:3005/producto?limite=5&desde=${page}`,
        {
          method: "GET",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            token: `${token}`,
          },
        }
      );
      const data = await resp.json();
  
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