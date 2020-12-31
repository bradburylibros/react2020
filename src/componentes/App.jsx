import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import AdminLibros from '../pages/AdminLibros'
import Home from '../pages/Home'
import Layout from './Layout'
import NotFound from './NotFound';


export default function App() {
	return (
		<BrowserRouter>
			<Layout>
				<Switch>
					<Route exact path='/' component={Home} />
					<Route exact path='/adminLibros' component={AdminLibros} />
					{/* <Route path='/adminUsuarios' component={AdminUsuarios} /> */}

					<Route component ={NotFound} />
				</Switch>
			</Layout>
		</BrowserRouter>
	)
}
