import React, {useState} from 'react'
import {Form, Button} from 'react-bootstrap'

export default function LibroForm() {
    const [libro, setLibro] = useState({ }) //inicializamos como objeto
    const [libros, setLibros] = useState([]) //inicializamos como array 
    
    //  ------ [ manejamos el llenado campos del form ] ------ //
    function handleChange(event) {
        // console.log(event.target.value)
        setLibro({
           ...libro, [event.target.name]:event.target.value
        })        
    } 

    //  ---------- [ manejamos el envio del form ] ---------- //
    function handleSend (event) {
        event.preventDefault()

        //guardamos
        setLibros([
            ...libros, libro
        ]) 

        // LOCAL STORAGE       localStorage.setItem("libros",JSON.stringify(libros))
    } 

    //  ---------- [ formulario de libro ] ---------- //
    return (
        <Form onSubmit={handleSend}>                   

            {/* TITULO */}
            <Form.Group>
                <Form.Label>Título</Form.Label>
                <Form.Control type="text" placeholder="Título" name="titulo" onChange={handleChange} />
            </Form.Group>

            {/* AUTOR */}
            <Form.Group>
                <Form.Label>Autor</Form.Label>
                <Form.Control type="text" placeholder="Autor" name="autor" onChange={handleChange}  />
            </Form.Group>

            {/* ISBN */}
            <Form.Group>
                <Form.Label>Autor</Form.Label>
                <Form.Control type="text" placeholder="ISBN" name="isbn" onChange={handleChange}  />
            </Form.Group>


            {/* DESCRIPCIÓN */}
            <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Descripción</Form.Label>
                <Form.Control as="textarea" rows={1} name="descripcion" onChange={handleChange}  />
            </Form.Group>

            {/* PRECIO */}
            <Form.Group>
                <Form.Label>Precio</Form.Label>
                <Form.Control type="number" placeholder="Precio" name="precio" onChange={handleChange}  />
            </Form.Group>

			 {/* STOCK */}
            <Form.Group>
                <Form.Label>Stock</Form.Label>
                <Form.Control type="number" placeholder="Stock" name="stock" onChange={handleChange} />
            </Form.Group>
			
            {/* TAPA */}
            <Form.Group>
                <Form.Label>Tapa</Form.Label>
                {/* <img src={tapa} alt="Tapa" />    name="tapa" */}
            </Form.Group>

            {/* CLASIFICACION */}
            {/* <Form.Group as={Col} controlId="formGridState">*/}
            <Form.Group  controlId="formGridState">
                <Form.Label>Clasificación</Form.Label>
                <Form.Control as="select" defaultValue="Elija clasificación..." name="clasificacion" onChange={handleChange} >
                    <option>Ficción</option>
                    <option>No ficción</option>
                    <option>Cómic</option>
                    <option>Infantiles</option>
                </Form.Control>
            </Form.Group>

             {/* CATEGORIA */}
             {/* <Form.Group as={Col} controlId="formGridState">*/}
             <Form.Group  controlId="formGridState">
                <Form.Label>Categoría</Form.Label>
                <Form.Control as="select" defaultValue="Elija categoría..." name="categoria" onChange={handleChange} >
                    <option>Novedades</option>
                    <option>Mas Vendidos</option>
                    <option>Recomendados</option>
                </Form.Control>
            </Form.Group>

            <Button variant="primary" type="submit"> Enviar </Button>
      </Form>
    )
}
