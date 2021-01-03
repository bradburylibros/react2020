import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'


import Layout from './Layout'
import Home from '../pages/Home'
import NotFound from './NotFound';
import AdminDatos from '../pages/AdminDatos'
//import Login from '../pages/Login'
// import AdminLibros from '../pages/AdminLibros'

export default function App() {
	return (
		<BrowserRouter>
			<Layout>
				<Switch>
					<Route exact path='/' component={Home} />
					<Route exact path='/adminLibros' component={AdminDatos} />
					{/* <Route exact path='/adminLibros' component={AdminLibros} /> */}
					{/* <Route exact path='/adminUsuarios' component={AdminUsuarios} /> */}
					{/* <Route exact path='/login' component={Login} /> */}
					<Route component ={NotFound} />
				</Switch>
			</Layout>
		</BrowserRouter>
	)
}
