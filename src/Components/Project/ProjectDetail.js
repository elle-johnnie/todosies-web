import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

const ProjectDetail = (props) => {
    // console.log(props);
    const { project } = props;
    if (project) {
        return (
            <div className="container section project-details">
                <div className="card z-depth">
                    <div className="card-content">
                        <span className="card-title ">{ project.title }</span>
                        <p>{ project.details }</p>
                    </div>
                    <div className="card-action gret lighten-3 grey-text">
                        <div>Posted by: { project.authorFirstName } { project.authorLastName }</div>
                        <div>Date:TimeStamp</div>
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
    
}


const mapStateToProps = (state, ownProps) => {
    // console.log(state)
    const id = ownProps.match.params.id;
    const projects = state.firestore.data.projects;
    const project = projects ? projects[id] : null;
    return {
        project: project
    }
}
export default compose(
    connect(mapStateToProps),
    firestoreConnect(props => [
        { collection: 'projects',
          doc: props.match.params.id
        }
    ])
)(ProjectDetail);
