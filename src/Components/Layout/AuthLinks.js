import React from 'react'
import { NavLink } from 'react-router-dom'

const AuthLinks = () => {
    return(
       <ul className="right">
           <li><NavLink to='/'>New Project</NavLink></li>
           <li><NavLink to='/'>Log Out</NavLink></li>
           <li><NavLink to='/' classname='btn btn-floating pink'>LJ</NavLink></li>
       </ul>
    )
}

export default AuthLinks