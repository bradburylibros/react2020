import React from 'react'
import LibroFila from './_LibroFila'


export default function LibroLista({libros}) {
    return (
        <div>
            <ul className="list-unstyled">
               {libros.map (item=>{
                   return (
                       <li key={item.id}>
                           <LibroFila libro={item}/>
                       </li>
                   )
               })}
            </ul> 
        </div>
    )
}
