import React, { useState } from "react";

import { Form, Button, Alert } from "react-bootstrap";

export default function FormRegistro(props) {
	
  const [user, setUser] = useState({
    form: {
      email: "",
      password: "",
    },
  });

  const [login, setLogin] = useState({
    token: "",
    error: null,
    ok: true,
    loading: false,
  });

  //Manejo los cambios del formulario
  const handleChange = ({ target }) => {
    setUser({
      form: {
        ...user.form,
        [target.name]: target.value,
      },
    });
  };

  //Manejo el clic de submit del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();

    //seteo login en verdadero
    setLogin({
      loading: true,
	});
	
    try {
      //Método POST para enviar info de datos de usuario al servidor
      
      // const resp = await fetch("http://localhost:3005/login", {
        
      //const resp = await fetch("https://whispering-journey-97600.herokuapp.com/login", {
    const resp = await fetch("https://mighty-peak-31803.herokuapp.com/login", {
        method: "POST",
        body: JSON.stringify(user.form),
        headers: {
		  "Content-type": "application/json; charset=UTF-8"
        },
	  });
	  
      const data = await resp.json();

	  console.log("==[data]==========");
	  console.log(data);
	  console.log("==================");

      //si la peticion devuelve ok:true
      if (data.ok) {
        setLogin({
          token: data.token,
          error: null,
          ok: true,
          loading: false,
		});
		
        //Guardo en LocalStorage el token válido
        localStorage.setItem("token", JSON.stringify(data.token));
        localStorage.setItem("role", JSON.stringify(data.usuario.rol));

        //Seteo la el estado ingreso de Login.jsx
        props.setIngreso({
          token: localStorage.getItem("token"),
          id: data.usuario._id,
          role: data.usuario.rol,
        });

        //Si ok:false devuelvo el mensaje de error si usuario o contraseña son incorrectos
      } else {
        setLogin({
          token: "",
          error: data.err.message,
          ok: false,
          loading: false,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>
			<b>Correo electrónico</b>
		</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          name="email"
          value={user.form.email}
          onChange={handleChange}
          required
          disabled={login.loading ? true : false}
        />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>
			<b>Contraseña</b>
		</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          name="password"
          value={user.form.password}
          onChange={handleChange}
          disabled={login.loading ? true : false}
          required
        />
      </Form.Group>
      {login.ok === false && <Alert variant="danger">{login.error}</Alert>}
      <div className="d-flex justify-content-end">
        <Button
          variant=""
          type="submit"
		  disabled={login.loading ? true : false}
		  className="btn btn btn-outline-danger"
        >
          Iniciar Sesión
        </Button>
      </div>
    </Form>
  );
}


