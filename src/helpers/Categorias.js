export const getCategoria = async () => {
    let token = JSON.parse(localStorage.getItem("token"));
    try {
      const resp = await fetch(`${window.globalVar}/categoria`, {
    //   const resp = await fetch("http://localhost:3005/categoria", {
    //   const resp = await fetch("https://mighty-peak-31803.herokuapp.com/categoria", {
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
  

  