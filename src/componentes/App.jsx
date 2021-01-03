import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import AdminDatos from '../pages/AdminDatos'
// import AdminLibros from '../pages/AdminLibros'
import Home from '../pages/Home'
import Layout from './Layout'
import NotFound from './NotFound';

window.globalVar = "http://localhost:3005";
// window.globalVar = "https://mighty-peak-31803.herokuapp.com";

export default function App() {
	return (
		<BrowserRouter>
			<Layout>
				<Switch>
					<Route exact path='/' component={Home} />
					<Route exact path='/adminLibros' component={AdminDatos} />
					<Route component ={NotFound} />
				</Switch>
			</Layout>
		</BrowserRouter>
	)
}
