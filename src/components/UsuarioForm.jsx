import React from 'react'
import {Form, Button} from 'react-bootstrap'

export default function UsuarioForm() {
    return (
        <Form>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Usuario</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
        
            <Form.Group controlId="formBasicPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
                <Form.Text className="text-muted">
                Olvidaste la contraseña?
                </Form.Text>
            </Form.Group>
            <Button variant="primary" type="submit">
            Enviar
            </Button>
      </Form>
    )
}
