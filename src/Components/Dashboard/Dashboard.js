import React, { Component } from 'react'
import Notifications from './Notifications'
import ProjectList from '../Project/ProjectList'
import { connect } from 'react-redux'

class Dashboard extends Component {
    render () {
        const { projects } = this.props;

        return (
            <div className="dashboard container">
                <div className="row">
                    {/* left side col for project list 12 col grid on medium size screens and bigger */}
                    <div className="col s12 m6"> 
                        <ProjectList projects={projects}/>
                    </div>
                    {/*  right side col notifications offset by 1 col */}
                    <div className="col s12 m5 offset-m1">
                        <Notifications />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        projects: state.project.projects
    }
}

export default connect(mapStateToProps)(Dashboard)