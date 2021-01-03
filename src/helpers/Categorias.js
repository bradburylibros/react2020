export const getCategoria = async () => {
    let token = JSON.parse(localStorage.getItem("token"));
    try {
      // const resp = await fetch("https://whispering-journey-97600.herokuapp.com/categoria", {
      const resp = await fetch("http://localhost:3005/categoria", {
        method: "GET",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          token: `${token}`,
        },
      });
      const data = await resp.json();
      return data.categorias;
    } catch (error) {
      return error;
    }
  };
  