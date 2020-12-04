import React from 'react'
import '../css/footer.css'
import Logo from '../images/logo50.png'


export default function Footer() {
    return (
      <>
      
            <h4>este es el footer</h4>
            <hr/>
            <footer className="page-footer font-small stylish-color-dark mt-5">
              <div className="container text-center text-light text-md-left">
                <div className="row">
                  <div className="col-md-4 mx-auto mt-4">
                  
                    <img src={Logo}  alt="logo"/>
                    <p className="mt-3">Somos un grupo de estudiantes de la comision 3i de RollingCode School </p>
                  </div>

                  <hr className="clearfix w-100 d-md-none" />
                  
                  <div className="col-md-2 mx-auto">
                      <h5 className="font-weight-bold text-uppercase mt-3 mb-4">Guía de compra</h5>
                      <ul className="list-unstyled" >
                        <li>1
                          {/* <a id="linksfo">Atención al cliente</a> */}
                        </li>
                        <li>2 
                          {/* <a id="linksfo">Como comprar</a> */}
                        </li>
                        <li> 3
                          {/* <a id="linksfo">Contacto</a> */}
                        </li>
                      </ul>
                  </div>
                </div>
              </div>
              <hr/>
                
              <h4>este es el footer 2da parte</h4>
                
                <section id="firma" className="p-1">
                    <h6 class="text-center m-0 text-light">Desarrollado por Hooklook</h6>
                </section>
            
            </footer>
        


      </>
    )
}