import React from 'react'
import {Navbar} from 'react-bootstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function NavbarCarrito() {
    return (
        <div>
{/* 
            <nav className="navbar sticky-top navbar-dark bg-dark" id="dropmenu">
            <a className="navbar-brand" href="index.html#inicio"><i class="fas fa-arrow-up"></i></a>
            <p className="text-white" id="nombreUser"></p>
            <ul className="navbar-nav" id="positioncarrito">
                <li  className="nav-item " id="shoppingCart">
                <a type="nav-link img-fluid" class="btn btn-dark" data-toggle="modal"  data-target="#modalcarrito"><span class="sr-only">(current)</span>
                    <i className="fas fa-shopping-cart fa-2x"></i>
                    </a>
                
                </li>
                <li id="contador_activado" className="nav-item">
                    <a id="contador" className="nav-link pl-2 text-white" href="#">0</a>
                </li> 
            </ul>
            </nav>
 */}


            <Navbar sticky="top" variant="dark" bg="dark" id="dropmenu">
            <FontAwesomeIcon icon={fa-arrow-up} />
            </Navbar>
            {/*
            <div class="modal fade" id="modalcarrito" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="Carritomodal">Carrito de compras</h5>
                    <button type="button" onclick="mostrarCarrito" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div id="carrito"  >
                        <table class="table">
                        <thead>
                            <tr>
                                <th>Imagen</th>
                                <th>Nombre</th>
                                <th>Precio</th>
                            </tr>
                            </thead>
                        </thead>
                        <tbody id="lista-carrito">
                            <!-- Cargamos productos al carrito -->
                        </tbody>
                            <tfoot>
                            <tr text-align="rigth">
                                <th >Total $</th>
                                <td id="totales"> </td>
                            </tr>
                        </tfoot>
                        </table>
                        
                
                </div>
                <div class="modal-footer">
                    <a class="btn btn-danger btn-block" onclick="vaciarCarrito()" >Vaciar</a>  
                    <a href="#" id="procesar-pedido" class="btn btn-danger btn-block">Procesar
                    Compra</a>
                </div>
                </div>
            </div>
            </div>
            </div>
            */}
        </div>
    )
}
