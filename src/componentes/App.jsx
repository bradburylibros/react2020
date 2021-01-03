import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'


import Layout from './Layout'
import Home from '../pages/Home'
import NotFound from './NotFound';

// window.globalVar = "http://localhost:3005";
window.globalVar = "https://mighty-peak-31803.herokuapp.com";

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
