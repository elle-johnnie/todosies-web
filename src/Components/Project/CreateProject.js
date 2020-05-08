import React, { Component } from 'react'

export default class CreateProject extends Component {
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
        console.log(this.state);
    }
    render() {
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

