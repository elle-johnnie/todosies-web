import React from 'react'
import { Link } from 'react-router-dom'
import AuthLinks from './AuthLinks'
import NoAuthLinks from './NoAuthLinks'
import { connect } from 'react-redux'


const NavBar = () => {
    return(
        <nav className="nav wrapper grey darken-2">
            <div className="container">
                <Link to='/' className='brand-logo'>Todosies</Link>
                <AuthLinks />
                <NoAuthLinks />
            </div>
        </nav>
    )
}

const mapStateToProps = (state) => {
    console.log(state);
    return {

    }
}

export default connect(mapStateToProps)(NavBar)