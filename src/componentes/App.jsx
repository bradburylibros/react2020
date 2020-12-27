import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from '../pages/Home'
import AdminLibros from '../pages/AdminLibros'
// import LibroNuevo from '../pages/LibroNuevo'

import Layout from "./Layout";

export default function App() {
	return (
		<BrowserRouter>
			<Layout>
				<Switch>
					<Route exact path='/' component={Home} />
					<Route exact path='/adminLibros' component={AdminLibros} />
				</Switch>
			</Layout>
		</BrowserRouter>
	)
}
