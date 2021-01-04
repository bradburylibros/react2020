import React, { useEffect, useState } from "react";
import { Form, Button, Modal, Alert } from "react-bootstrap";

export default function LibroFormAlta(props) {
  let token = JSON.parse(localStorage.getItem("token"));

  const [state, setState] = useState({
    form: {
        titulo: "",
        autor:"",
        isbn:"",
        tapa:"",
        descripcion: "",
        precio: "",
        stock: "",
        disponible:"",
        clasificacion:"",
        categoria: "",
        // usuario:"",
        // alta:"",
    },
  });

  const [estado, setEstados] = useState({
    loading: false,
    error: null,
  });

  // ---- [ categoria ] ----
  const [cat, setCat] = useState([]);

  useEffect(() => {
    getCategoria();
  }, []);

  // ---- [ clasificacion ] ----
  const [clas, setClas] = useState([]);

  useEffect(() => {
    getClasificacion();
  }, []);

  const handleChange = ({ target }) => {
    setState({
      form: {
        ...state.form,
        [target.name]: target.value,
      },
    });
  };

  const getCategoria = async () => {
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
      console.log(data.categorias);
      setCat(data.categorias);
    } catch (error) {
      console.log(error);
    }
  };

  const getClasificacion = async () => {
    try {
      const resp = await fetch(`${window.globalVar}/clasificacion`, {
    //   const resp = await fetch("http://localhost:3005/clasificacion", {
    //   const resp = await fetch("https://mighty-peak-31803.herokuapp.com/clasificacion", {
        method: "GET",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          token: `${token}`,
        },
      });
      const data = await resp.json();
      console.log(data.clasificacions);
      setClas(data.clasificacions);
    } catch (error) {
      console.log(error);
    }
  };


  const postLibro = async (e) => {
	e.preventDefault();
	
    setEstados({
      loading: true,
      error: null,
	});
	
    try {
      const resp = await fetch(`${window.globalVar}/libro`, {
    //   const resp = await fetch(`http://localhost:3005/libro`, {
    //   const resp = await fetch(`https://mighty-peak-31803.herokuapp.com/libro`, {
        method: "POST",
        body: JSON.stringify(state.form),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          token: `${token}`,
        },
	  });
	  
      const data = await resp.json();
	  console.log(data);
	  
      setEstados({
        loading: false,
        error: null,
	  });
	  
      if (data.ok) {
        props.actualizaLista(props.page);
        props.handleClose();
      } else {
        setEstados({
          loading: false,
          error: data.ok,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title>Nuevo Libro</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={postLibro}>
          <Form.Group>
            <Form.Label>Titulo</Form.Label>
            <Form.Control
              type="text"
              placeholder="Título"
              value={state.form.titulo}
              name="titulo"
              onChange={handleChange}
              required
              disabled={estado.loading ? true : false}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Autor</Form.Label>
            <Form.Control
              type="text"
              placeholder="Autor"
              value={state.form.autor}
              name="autor"
              onChange={handleChange}
              required
              disabled={estado.loading ? true : false}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>ISBN</Form.Label>
            <Form.Control
              type="text"
              placeholder="ISBN"
              value={state.form.isbn}
              name="isbn"
              onChange={handleChange}
              required
              disabled={estado.loading ? true : false}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Tapa</Form.Label>
            <Form.Control
              type="text"
              placeholder="Link de la imagen de la tapa"
              value={state.form.tapa}
              name="tapa"
              onChange={handleChange}
              required
              disabled={estado.loading ? true : false}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Descripción</Form.Label>
            <Form.Control
              type="text"
              placeholder="Breve descripción del producto"
              value={state.form.descripcion}
              name="descripcion"
              onChange={handleChange}
              disabled={estado.loading ? true : false}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Precio</Form.Label>
            <Form.Control
              type="number"
              value={state.form.precio}
              name="precio"
              onChange={handleChange}
              required
              disabled={estado.loading ? true : false}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Stock</Form.Label>
            <Form.Control
              type="number"
              value={state.form.stock}
              name="stock"
              onChange={handleChange}
              required
              disabled={estado.loading ? true : false}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Disponible</Form.Label>
            <Form.Control
              type="text"
              value={state.form.disponible}
              name="disponible"
              onChange={handleChange}
            //   required
              disabled={estado.loading ? true : false}
            />
          </Form.Group> 

          <Form.Group>
            {/* <Form.Label>Clasificación</Form.Label> */}
            {/* <Form.Control
              as="select"
              name="clasificacion"
              onChange={handleChange}
              placeholder="Clasificación"
              required
              disabled={estado.loading ? true : false}
            >
              <option>Clasificación</option>
              {clas.map((clasificacion) => (
                <option key={clasificacion._id} value={clasificacion._id}>
                  {clasificacion.descripcion}
                </option>
              ))}
            </Form.Control> */}

            {/* 
                <Form.Control 
                as="select" 
                defaultValue="Clasificación..." 
                name="clasificacion" 
                onChange={handleChange} 
                value={state.form.clasificacion}
                required
                disabled={estado.loading ? true : false}
                >
                <option>Clásicos</option>
                <option>Más Vendidos</option>
                <option>Novedades</option>
                <option>Recomendados</option>
                </Form.Control> 
            */}
          </Form.Group>

          <Form.Group>
            <Form.Label>Categoría</Form.Label>
            <Form.Control
              as="select"
              name="categoria"
              onChange={handleChange}
              placeholder="Categoría"
              required
              disabled={estado.loading ? true : false}
            >
              <option>Elige la categoría</option>
              {cat.map((categoria) => (
                <option key={categoria._id} value={categoria._id}>
                  {categoria.descripcion}
                </option>
              ))}
            </Form.Control>

            {/* 
                <Form.Control 
                as="select" 
                defaultValue="Categoría..." 
                name="categoria" 
                onChange={handleChange} 
                value={state.form.categoria}
                required
                disabled={estado.loading ? true : false}
                >
                <option>Clásicos</option>
                <option>Más Vendidos</option>
                <option>Novedades</option>
                <option>Recomendados</option>
                </Form.Control> 
            */}
			
          </Form.Group>
          
          {estado.error === false && (
            <div>
              <Alert variant="danger" className="text-center">
                Validar 
              </Alert>
            </div>
          )}
          <hr />
          <div className="col-6 offset-6">
            <Button variant="info" type="submit" block>
              Guardar
            </Button>
          </div>
        </Form>
      </Modal.Body>
      
    </>
  );
}
