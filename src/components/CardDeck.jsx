import React from 'react'


export default function CardDeck({libros}) {

    return (
        <div>
            <section id="libros">
              <div className="container">
                <div className="row">
                    <div className="col">
                        <div id="tarjetasRec" className="card-deck">
                              {libros} 
                             
                             {/* {libros.map((item) => {
                                 return  {item.titulo} 
                                })
                            }  */}
                        </div>
                    </div>
                </div>
              </div>
            </section> 
        </div>
    )
}
