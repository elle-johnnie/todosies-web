import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createProject } from '../../Store/Actions/ProjectActions' 
import { Redirect } from 'react-router-dom'

class CreateProject extends Component {
    state = {
        title: '',
        details: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.createProject(this.state);
    }
    render() {
        const { auth } = this.props;
        if (!auth.id) { return <Redirect to='/signin/' />; }
        return (
            <div className="container">
            <form onSubmit={this.handleSubmit} className="white">
                <h5 className="grey-text text-darken-4">Create a new project</h5>
                <div className="input-field">
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" onChange={this.handleChange}/>
                </div>
                <div className="input-field">
                    <textarea id="details" className="materialize-textarea" onChange={this.handleChange}></textarea>
                    <label htmlFor="details">Project Details</label>
                </div>
                <div className="input-field">
                    <button className="btn pink">Create</button>
                </div>
            </form>
                
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        // add createProject method to props
        // this.state 'project' passed in to dispatch the action 
        createProject: (project) => dispatch(createProject(project))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateProject)
