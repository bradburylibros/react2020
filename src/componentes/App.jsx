import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Layout from './Layout'
import Home from '../pages/Home'
import NotFound from './NotFound';
import AdminDatos from '../pages/AdminDatos';
import Login from '../componentes/LoginForm';

window.globalVar = "http://localhost:3005";
// window.globalVar = "https://cors-anywhere.herokuapp.com";
// window.globalVar = "https://mighty-peak-31803.herokuapp.com";
// window.globalVar = "https://whispering-journey-97600.herokuapp.com"

export default function App() {
	return (
		<BrowserRouter>
			<Layout>
				<Switch>
					<Route exact path='/' component={Home} />
					<Route exact path='/login' component={Login} />
					<Route exact path='/adminLibros' component={AdminDatos} />
					<Route component ={NotFound} />
				</Switch>
			</Layout>
		</BrowserRouter>
	)
}
