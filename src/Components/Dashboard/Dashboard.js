import React, { Component } from 'react'
import Notifications from './Notifications'
import ProjectList from '../Project/ProjectList'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'


class Dashboard extends Component {
    render () {
        const { projects, auth, notifications } = this.props;
        if (!auth.uid) { return<Redirect to="/signin/" />; }
        return (
            <div className="dashboard container">
                <div className="row">
                    {/* left side col for project list 12 col grid on medium size screens and bigger */}
                    <div className="col s12 m6"> 
                        <ProjectList projects={projects}/>
                    </div>
                    {/*  right side col notifications offset by 1 col */}
                    <div className="col s12 m5 offset-m1">
                        <Notifications notifications={notifications}/>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        projects: state.firestore.ordered.projects,
        auth: state.firebase.auth, 
        notifications: state.firestore.ordered.notifications
    }
}

export default compose(
    firestoreConnect([
        { collection: 'projects', orderBy: ['createdAt', 'desc'] },
        { collection: 'notifications', limit: 3, orderBy: ['time', 'desc']} 
    ]),
    connect(mapStateToProps))
(Dashboard)