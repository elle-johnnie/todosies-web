import React from 'react'
import { NavLink } from 'react-router-dom'

const NoAuthLinks = () => {
    return(
       <ul className="right">
           <li><NavLink to='/'>Log In</NavLink></li>
           <li><NavLink to='/'>Sign Up</NavLink></li>
       </ul>
    )
}

export default NoAuthLinks