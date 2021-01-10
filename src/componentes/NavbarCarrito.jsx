import React from "react";
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from "@fortawesome/free-solid-svg-icons";
import {Navbar} from 'react-bootstrap'

export default function NavbarCarrito() {
  return (
    <>
        <Navbar sticky="top" bg="dark" variant="dark" id="dropmenu" >
            <Link to='/' className="navbar-brand" >
                <FontAwesomeIcon icon={faHome} />
            </Link>
        
        </Navbar>

     </>
  )
}


    // <nav class="navbar sticky-top navbar-dark bg-dark" id="dropmenu">
    //   <a class="navbar-brand" href="index.html#inicio"><i class="fas fa-arrow-up"></i></a>
    //   <p class="text-white" id="nombreUser"></p>
    //   <ul class="navbar-nav" id="positioncarrito">
    //     <li  class="nav-item " id="shoppingCart">
    //       <a type="nav-link img-fluid" class="btn btn-dark" data-toggle="modal"  data-target="#modalcarrito"><span class="sr-only">(current)</span>
    //         <i class="fas fa-shopping-cart fa-2x"></i>
    //         </a>
         
    //     </li>
    //     <li id="contador_activado" class="nav-item">
    //         <a id="contador" class="nav-link pl-2 text-white" href="#">0</a>
    //       </li> 
    //   </ul>
    // </nav>
    