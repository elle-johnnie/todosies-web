import React, { Component } from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import moment from 'moment'
import { deleteProject } from '../../Store/Actions/ProjectActions'


class ProjectDetail extends Component {
    handleDelete = (e) => {
        const { id } = this.props;
        console.log(id);
        e.preventDefault();
        this.props.deleteProject(id);
        this.props.history.push('/');
    }
    handleEdit = (e) => {
        const { id } = this.props;
        console.log(id);
        // e.preventDefault();
        // this.props.editProject(id);
    }
    render () {
    const { project, auth } = this.props;
    if (!auth.uid) { return <Redirect to='/signin' />; }
    if (project) {
        return (
            <div className="container section project-details">
                <div className="card z-depth">
                    <div className="card-content">
                        <span className="card-title ">{ project.title }</span>
                        <p>{ project.details }</p>
                    </div>
                    <div className="card-action grey lighten-3 grey-text">
                        <div>Posted by: { project.authorFirstName } { project.authorLastName }</div>
                        <div>{moment(project.createdAt.toDate()).calendar()}</div>
                        <button className="btn red" onClick={this.handleDelete}>Delete</button>
                        {/* <button className="btn orange" onClick={this.handleEdit}>Edit</button> */}
                    </div>
                    
                </div>
            </div>
        )
    } else {
        return (
            <div className="container center">
                <p>Loading projects...</p> 
            </div>
        )
    }
}}


const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    const projects = state.firestore.data.projects;
    const project = projects ? projects[id] : null;
    return {
        project: project,
        auth: state.firebase.auth,
        id: id
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteProject: (id) => dispatch(deleteProject(id))
    }
}
export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([
        { collection: 'projects' },
    ])
)(ProjectDetail);
