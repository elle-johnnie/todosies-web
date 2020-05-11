import React from 'react'
import { NavLink } from 'react-router-dom'

const NoAuthLinks = () => {
    return(
       <ul className="right">
           <li><NavLink className="btn orange" to='/signin'>Log In</NavLink></li>
           <li><NavLink className="btn blue" to='/signup'>Sign Up</NavLink></li>
       </ul>
    )
}

export default NoAuthLinks