import React from 'react'
import Logo from '../images/logo.png'
import '../css/navbar.css'

export default function NavBar() {
    return (
        <div className="navbar navbar-expand-lg navbar-dark bg-1">
            <div className="navbar-brand">
                <img src={Logo} alt="logo"/>
            </div>
        </div>
    )
}
