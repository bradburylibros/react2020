import React, { Component } from 'react'

import Libro from '../images/elHombreIlustrado.jpg'
import '../css/card.css'

export default class Card extends Component {
    render() {
        // des-estructuramos las props - props son propiedades del componente
        const {titulo, autor, precio}=this.props
        return (
            <div>
                
                <div>
                    <img src={Libro} alt="libro"/>
                </div>  
                <div> 
                    <span>{titulo}</span>
                </div>
                
                <div> 
                <span>{autor}</span>
                </div>
                
                <div> 
                <span>${precio}</span>
                </div>
                
          
       
                    
                
            </div>
        )
    }
}


