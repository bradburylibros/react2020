import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from '../pages/Home'


export default function App() {
    return (
        <BrowserRouter>
            <Switch>
               <Route path='/home' component= {Home} /> 
            </Switch>
        </BrowserRouter>
    )
}
