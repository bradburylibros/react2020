export const getClasificacion = async () => {
    let token = JSON.parse(localStorage.getItem("token"));
    try {
      const resp = await fetch(`${window.globalVar}/clasificacion`, {
    //   const resp = await fetch("http://localhost:3005/clasificacion", {
    //   const resp = await fetch("https://mighty-peak-31803.herokuapp.com/clasificacion", {
    //   const resp = await fetch("https://whispering-journey-97600.herokuapp.com/clasificacion", {
      
        method: "GET",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          token: `${token}`,
        },
      });
      const data = await resp.json();
      return data.clasificacions;
    } catch (error) {
      return error;
    }
  };