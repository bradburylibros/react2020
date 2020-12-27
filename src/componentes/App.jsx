import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from '../pages/Home'
import Layout from './Layout'


export default function App() {
	return (
		<BrowserRouter>
			<Layout>
				<Switch>
					<Route path='/' component={Home} />
					{/* <Route path='/adminLibros' component={AdminLibros} /> */}
					{/* <Route path='/adminUsuarios' component={AdminUsuarios} /> */}
				</Switch>
			</Layout>
		</BrowserRouter>
	)
}
