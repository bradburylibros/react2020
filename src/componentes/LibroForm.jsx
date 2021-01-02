import React, {useEffect, useState} from 'react'
import {Form, Button, Col} from 'react-bootstrap'

export default function LibroForm() {
    const [libro, setLibro] = useState({ }) //inicializamos el state como objeto 
    const [libros, setLibros] = useState([]) //inicializamos como array 
    
    useEffect(() => {
       console.log('se inicializo libro (form)')
    }, [])

    useEffect(() => {
        console.log('se actualizó libro (form)')
     }, [libro])

    //  ------ [ manejamos el llenado campos del form ] ------ //
    function handleChange(event) {
        console.log(event.target.value)
        setLibro({
            ...libro, [event.target.name]:event.target.value
        })      
    } 

    //  ---------- [ manejamos el envio del form ] ---------- //
    function handleSubmit (event) {
        event.preventDefault()
        //guardamos en libros cada libro
        setLibros([
            ...libros, libro
        ]) 
    } 
    // test---------------------
    console.log("Array de Libros ---->", libros)
    console.log("State ---->",libro)


    //  ---------- [ formulario de libro ] ---------- //
    return (
        <Form onSubmit={handleSubmit}>                   
            <Form.Row>
                {/* TITULO */}
                <Form.Group as={Col}>
                    <Form.Label>Título</Form.Label>
                    <Form.Control type="text" placeholder="Título" name="titulo" onChange={handleChange} autocomplete='off' />
                </Form.Group>
                {/* AUTOR */}
                <Form.Group as={Col}>
                    <Form.Label>Autor</Form.Label>
                    <Form.Control type="text" placeholder="Autor" name="autor" onChange={handleChange}  />
                </Form.Group>
            </Form.Row>

            <Form.Row>
                {/* ISBN */}
                <Form.Group as={Col}>
                    <Form.Label>ISBN</Form.Label>
                    <Form.Control type="text" placeholder="ISBN" name="isbn" onChange={handleChange}  />
                    <Form.Text className="text-muted">
                        Formato prefijo 978 ó 979. De 10 o 13 dígitos en total.
                    </Form.Text>
                </Form.Group>
                {/* *-*-*-*-* prefijo del isbn 978 o 979 y de 10 o 13 numeros en total * *-*-*-*-*
                Form.Control type="text" placeholder="ISBN" name="isbn" 
                pattern="(?:(?=.{17}$)97[89][ -](?:[0-9]+[ -]){2}[0-9]+[ -][0-9]|97[89][0-9]{10}|(?=.{13}$)(?:[0-9]+[ -]){2}[0-9]+[ -][0-9Xx]|[0-9]{9}[0-9Xx])" 
                onChange={handleChange} 
                */}
                {/* TAPA */}
                <Form.Group as={Col}>
                    <Form.Label>Tapa</Form.Label>
                    {/* <img src={tapa} alt="Tapa" />    name="tapa" */}
                </Form.Group>
            </Form.Row>

            {/* DESCRIPCIÓN */}
            <Form.Group controlId="Form.ControlTextarea">
                <Form.Label>Descripción</Form.Label>
                <Form.Control as="textarea" rows={1} name="descripcion" onChange={handleChange}  />
            </Form.Group>

            <Form.Row>
                {/* PRECIO */}
                <Form.Group as={Col}>
                    <Form.Label>Precio</Form.Label>
                    <Form.Control type="number" placeholder="Precio" name="precio" onChange={handleChange}  />
                </Form.Group>

                {/* STOCK */}
                <Form.Group as={Col}>
                    <Form.Label>Stock</Form.Label>
                    <Form.Control type="number" placeholder="Stock" name="stock" onChange={handleChange} />
                </Form.Group>
            </Form.Row>

            <Form.Row>
                {/* CLASIFICACION */}
                <Form.Group as={Col} controlId="formGridClasificacion">
                    <Form.Label>Clasificación</Form.Label>
                    <Form.Control as="select" defaultValue="Elija clasificación..." name="clasificacion" onChange={handleChange} >
                        <option>Ficción</option>
                        <option>No ficción</option>
                        <option>Cómic</option>
                        <option>Infantiles</option>
                    </Form.Control>
                </Form.Group>

                {/* CATEGORIA */}
                <Form.Group as={Col} controlId="formGridCategoria">
                    <Form.Label>Categoría</Form.Label>
                    <Form.Control as="select" defaultValue="Elija categoría..." name="categoria" onChange={handleChange} >
                        <option>Novedades</option>
                        <option>Mas Vendidos</option>
                        <option>Recomendados</option>
                    </Form.Control>
                </Form.Group>
            </Form.Row>
            <Button variant="primary" type="submit"> Enviar </Button>
      </Form>
    )
}