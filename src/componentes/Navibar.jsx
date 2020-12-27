import React from 'react'
//import { Link } from 'react-router-dom'
import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap'
import Logo from "../images/logo.png"
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faSearch } from '@fortawesome/free-solid-svg-icons';
import '../images/logo.png'


export default function Navibar() {
    return (
        <Navbar bg="danger" variant="dark">
            <Navbar.Brand href="#home">
                    {/* img : width="30" height="30" */}
                <img src={Logo}  className="d-inline-block align-top"
                alt="Logo Bradbury" />
            </Navbar.Brand>
        
            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                {/* <Button variant="outline-info">Buscar</Button> */}
                <Button variant="light" my-2 my-sm-0 shadow mr-2>Buscar</Button>
                
            </Form>

        
            <Nav className="mr-auto">
                <Nav.Link href="#home">Inicio</Nav.Link>
                    <Nav.Link href="#">Catalogo</Nav.Link>
                    <Nav.Link href="#">Novedades</Nav.Link>
                    <Nav.Link href="#">Regístrate</Nav.Link>
                    <Nav.Link href="#">Ingresar</Nav.Link>
                </Nav>
        </Navbar>
       
    )
}




    <Nav className="mr-auto">
                        <Nav.Link href="#home">Inicio</Nav.Link>
                        <Nav.Link href="#catalogo">Catalogo</Nav.Link>
                        <Nav.Link href="#novedades">Novedades</Nav.Link>
                        <Nav.Link href="#registr">Regístrate</Nav.Link>
                        <Nav.Link href="#ingresar">Ingresar</Nav.Link>
                </Nav>