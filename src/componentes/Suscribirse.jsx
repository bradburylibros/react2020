import React from "react";
import "../css/style.css";

export default function Suscribirse() {
  const submit = (e) => {
    e.preventDefault();
  };

  function suscribete() {
    let mailsusc = document.getElementById("emailSusc").value;
    localStorage.setItem("mails", JSON.stringify(mailsusc));
    // let newmail = []
    // let data = JSON.parse(localStorage.getItem("mails"))
    // newmail.push(data)
    // localStorage.setItem("mails",JSON.stringify(data))
    // console.log(newmail)
    if (mailsusc === "") {
      document.getElementById(
        "suscribete"
      ).innerHTML = ` <div  class="alert alert-danger mt-2" role="alert">
          Debe ingresar un email          
          </div>`;
    }else{
      setTimeout(() => {
        document.getElementById("suscribete").innerHTML = ` 
    <div  class="alert alert-primary mt-2" role="alert">
    Gracias por suscribirte!          
    </div>`;
      }, 1000);
      document.getElementById(
        "suscribete"
      ).innerHTML = ` <div class="spinner-border text-danger mt-1" role="status">
          <span class="sr-only">Loading...</span>
        </div>`;
        console.log(mailsusc)
    }
  }
    //limpiar campos
  

  return (
    <div id="body">
      <section id="contacto" className="py-4 mt-3">
        <div className="container text-center">
          <h4>Suscríbete para recibir las últimas publicaciones!</h4>
          <form onSubmit={submit}>
            <div className="form-row">
              <div className="form-group offset offset-md-3 col-md-6 text-center">
                <label for="inputEmail4"></label>
                <input
                  type="email"
                  className="form-control"
                  id="emailSusc"
                  placeholder="example@gmail.com"
                  required
                />
                <div id="suscribete"></div>
              </div>
            </div>
            <div className="row m-0 justify-content-center">
              <button
                type="submit"
                onClick={suscribete}
                class="btn btn-danger bg-1"
              >
                Enviar
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
