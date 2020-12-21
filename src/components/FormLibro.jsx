import React from 'react'
import {Form, Button} from 'react-bootstrap'

export default function FormLibro() {
    return (
        <Form>
            {/* titulo
            autor
            descripcion
            precio
            tapa
            categoria */}
            

            {/* TITULO */}
            <Form.Group>
                <Form.Label>Título</Form.Label>
                <Form.Control type="text" placeholder="Normal text" />
            </Form.Group>

            {/* AUTOR */}
            <Form.Group>
                <Form.Label>Autor</Form.Label>
                <Form.Control type="text" placeholder="Normal text" />
            </Form.Group>

            {/* DESCRIPCIÓN */}
            <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Descripción</Form.Label>
                <Form.Control as="textarea" rows={1} />
            </Form.Group>

            {/* PRECIO */}
            <Form.Group>
                <Form.Label>Precio</Form.Label>
                <Form.Control type="number" placeholder="Precio" />
            </Form.Group>

            {/* TAPA */}
            <Form.Group>
                <Form.Label>Tapa</Form.Label>
                {/* <img src={tapa} alt="Tapa" /> */}
            </Form.Group>

            {/* CLASIFICACION */}
            {/* <Form.Group as={Col} controlId="formGridState">*/}
            <Form.Group  controlId="formGridState">
                <Form.Label>Clasificación</Form.Label>
                <Form.Control as="select" defaultValue="Elija clasificación...">
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
                <Form.Control as="select" defaultValue="Elija categoría...">
                    <option>Novedades</option>
                    <option>Mas Vendidos</option>
                    <option>Recomendados</option>
                </Form.Control>
            </Form.Group>

            <Button variant="primary" type="submit"> Enviar </Button>
      </Form>
    )
}
