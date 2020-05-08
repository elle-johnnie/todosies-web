import React from 'react'
import { Link } from 'react-router-dom'
import AuthLinks from './AuthLinks'

const NavBar = () => {
    return(
        <nav className="nav wrapper grey darken-2">
            <div className="container">
            <Link to='/' classname='brand-logo'>Todosies</Link>
            <AuthLinks />
            </div>
        </nav>
    )
}

export default NavBar