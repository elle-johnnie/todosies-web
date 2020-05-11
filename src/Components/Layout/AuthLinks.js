import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../Store/Actions/authActions'

const AuthLinks = (props) => {
    return(
       <ul className="right">
           <li><NavLink className="btn green" to='/create'>New Project</NavLink></li>
           <li><button className="btn grey" onClick={props.signOut}>Log Out</button></li>
           <li><NavLink to='/' className="btn btn-floating pink">LJ</NavLink></li>
       </ul>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(null, mapDispatchToProps)(AuthLinks)