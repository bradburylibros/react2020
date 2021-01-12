import React from "react";
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import {Navbar} from 'react-bootstrap'


export default function NavbarCarrito() {
  return (
    <>
      <Navbar sticky="top" bg="dark" variant="dark" id="dropmenu" >
        {/* volver al NavBar: <div id="inicio"> */}
        <Link to='/#inicio' className="navbar-brand" >
            <FontAwesomeIcon icon={faHome} />
        </Link>
        {/* me imagino que tiene el usuario logueado */}
        <p className="text-white" id="nombreUser"></p>
        
        <ul className="navbar-nav" id="positioncarrito">
          {/* imagen carrito que linkea al modal carrito */}
          <li className="nav-item"  id="shoppingCart">
          
              <FontAwesomeIcon icon={faShoppingCart} />
             {/* <ModalCarrito
                show={show}
                handleClose={handleClose}
                modalType={modalType}
                actualizaCarrito={actualizaCarrito}
              /> */}

          </li>

        </ul>


      </Navbar>
     </>
  )
}
// a
// <nav class="navbar sticky-top navbar-dark bg-dark" id="dropmenu">
//       <a class="navbar-brand" href="index.html#inicio"><i class="fas fa-arrow-up"></i></a>
//       <p class="text-white" id="nombreUser"></p>
//       <ul class="navbar-nav" id="positioncarrito">
//         <li  class="nav-item " id="shoppingCart">
//           <a type="nav-link img-fluid" class="btn btn-dark" data-toggle="modal"  data-target="#modalcarrito"><span class="sr-only">(current)</span>
//             <i class="fas fa-shopping-cart fa-2x"></i>
//             </a>
         
//         </li>
//         <li id="contador_activado" class="nav-item">
//             <a id="contador" class="nav-link pl-2 text-white" href="#">0</a>
//           </li> 
//       </ul>
// </nav>


//     <div class="modal fade" id="modalcarrito" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
//       <div class="modal-dialog" role="document">
//         <div class="modal-content">
//           <div class="modal-header">
//             <h5 class="modal-title" id="Carritomodal">Carrito de compras</h5>
//             <button type="button" onclick="mostrarCarrito" class="close" data-dismiss="modal" aria-label="Close">
//               <span aria-hidden="true">&times;</span>
//             </button>
//           </div>
//           <div class="modal-body">
//             <div id="carrito"  >
//                 <table class="table">
//                   <thead>
//                       <tr>
//                           <th>Imagen</th>
//                           <th>Nombre</th>
//                           <th>Precio</th>
//                       </tr>
//                     </thead>
//                   </thead>
//                   <tbody id="lista-carrito">
//                     <!-- Cargamos productos al carrito -->
//                   </tbody>
//                     <tfoot>
//                       <tr text-align="rigth">
//                           <th >Total $</th>
//                           <td id="totales"> </td>
//                       </tr>
//                   </tfoot>
//                 </table>
                 
          
//           </div>
//           <div class="modal-footer">
//             <a class="btn btn-danger btn-block" onclick="vaciarCarrito()" >Vaciar</a>  
//             <a href="#" id="procesar-pedido" class="btn btn-danger btn-block">Procesar
//               Compra</a>
//           </div>
//         </div>
//       </div>
//     </div>
//     </div>
// z