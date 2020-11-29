import React from 'react'
import ReactDOM from 'react-dom'
import './global.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import CardsNew from './pages/CardsNew'

// import Card from './components/Card'
const container= document.getElementById('root')
ReactDOM.render(
  // <Card  
  // titulo = 'El hombre ilustrado' 
  // autor = 'Ray Bradbury' 
  // precio = '2500' 
  // /> 
  <CardsNew />
  , 
  container
  //document.getElementById('root')
);
