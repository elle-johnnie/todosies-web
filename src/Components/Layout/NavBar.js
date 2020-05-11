import React from 'react'
import { Link } from 'react-router-dom'
import AuthLinks from './AuthLinks'
import NoAuthLinks from './NoAuthLinks'
import { connect } from 'react-redux'

const NavBar = (props) => {
    const { auth } = props;
    // console.log(auth);
    const links = auth.uid ? <AuthLinks /> :  <NoAuthLinks />
    return(
        <nav className="nav wrapper grey darken-2">
            <div className="container">
                <Link to='/' className='brand-logo'>Todosies</Link>
                { links }
            </div>
        </nav>
    )
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(NavBar)